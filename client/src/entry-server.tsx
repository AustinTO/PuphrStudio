import { renderToString } from "react-dom/server";
import App, { routes } from "./App";
export { routes };
export function render(path: string) { return renderToString(<App path={path}/>); }
