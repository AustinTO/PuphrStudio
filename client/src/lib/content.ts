import matter from 'gray-matter';
import { marked } from 'marked';

const globalBuffer = globalThis as typeof globalThis & { Buffer?: unknown };

if (!globalBuffer.Buffer) {
  class SimpleBuffer {
    private _value: string;

    constructor(value: string) {
      this._value = value;
    }

    static from(input: string) {
      return new SimpleBuffer(String(input));
    }

    static isBuffer(value: unknown) {
      return value instanceof SimpleBuffer;
    }

    toString() {
      return this._value;
    }
  }

  globalBuffer.Buffer = SimpleBuffer;
}

type MarkdownEntry<T> = {
  data: T;
  content: string;
  html: string;
};

const modules = import.meta.glob<string>(
  '../../../content/**/*.md',
  {
    eager: true,
    query: '?raw',
    import: 'default',
  }
);

const contentBySlug = Object.fromEntries(
  Object.entries(modules).map(([filePath, raw]) => {
    const { data, content } = matter(raw);
    const slug = filePath.split('/').pop()?.replace(/\.md$/, '') ?? filePath;
    return [slug, { data, content, html: marked.parse(content) }];
  })
);

export function getContent<T>(slug: string): MarkdownEntry<T> {
  const entry = contentBySlug[slug];
  if (!entry) {
    throw new Error(`Missing content for slug: ${slug}`);
  }
  return entry as MarkdownEntry<T>;
}

export function renderMarkdown(text: string) {
  return marked.parse(text ?? '');
}

export function renderInlineMarkdown(text: string) {
  return marked.parseInline(text ?? '');
}
