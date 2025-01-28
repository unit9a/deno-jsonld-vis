import { defineConfig } from "$fresh/server.ts";



export default defineConfig({
  cert: Deno.readTextFileSync("./localhost-cert.pem"),
  key: Deno.readTextFileSync("./localhost-key.pem")
});
