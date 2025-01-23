import { type PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.6/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <Head>
        <link
          crossorigin="use-credentials"
          rel="manifest"
          href="/manifest.webmanifest"
        />

        <script type="module">
          import "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js";
          const el = document.createElement("pwa-update"); document.body.appendChild(el);
        </script>
      </Head>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>pwa</title>
        <link rel="stylesheet" href="/styles.css" />

      </head>
      <body>
        <Component />
      </body>
      

    </html>
  );
}
