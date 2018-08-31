# modelViewer-UI

## Generating the test results

You need to make sure the generated test-restuls file exists before you start storybook.
During development you will likely start jest in watch-mode
and so the json file will be re-generated every time code or tests change.

```sh
npm run test:generate-output -- --watch
```
