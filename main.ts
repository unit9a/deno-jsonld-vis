import { serveDir } from "@std/http";

const userPagePattern = new URLPattern({ pathname: "/users/:id" });
const staticPathPattern = new URLPattern({ pathname: "/static/*" });

export default {
  fetch(req) {
    return serveDir(req, {
      fsRoot: "jsonld-vis/example"
    });
  },
} satisfies Deno.ServeDefaultExport;
