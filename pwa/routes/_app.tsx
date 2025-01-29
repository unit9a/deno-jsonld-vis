import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>pwa</title>
        <link rel="manifest" href="/app.webmanifest" />
        <link rel="stylesheet" href="/styles.css" />
        <script src="/init.js"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
