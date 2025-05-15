const { registerCommand } = require("cypress-wait-for-stable-dom");
registerCommand();

Cypress.on("window:before:load", (win) => {
  win.open = (url) => {
    win.location.href = url;
  };
});
