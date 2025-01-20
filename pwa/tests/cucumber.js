import { loadConfiguration, runCucumber } from '@cucumber/cucumber/api'

const config = {
  // parallel: 2,
  // format:  ['snippets', 'progress-bar', 'usage'],

  formatOptions: {
    message: true
  },
  paths: [
      "./tests/features/*.feature",
  ],
  import:[
      "./tests/features/**/*.@(js|cjs|mjs)"
  ],
  backTrace: true,
  worldParameters: {
  },
  failFast: false
}

Deno.test("cucumber", async() => {
  const { runConfiguration } = await loadConfiguration({provided: config});
  await runCucumber(runConfiguration);
});
  