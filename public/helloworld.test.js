const { expect, test } = require("@jest/globals");
const jsDom = require("jsdom");

test("Hello World to be present in index.html", () => {
  const dom = new jsDom.JSDOM(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1 id="target">Hello World!</h1>
    </body>
  </html>`);

  const target = dom.window.document.getElementById("target").textContent;

  expect(target).toBe("Hello World!");
});