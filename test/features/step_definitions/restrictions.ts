import Cucumber = require("cucumber");
import seleniumWebdriver = require("selenium-webdriver");
import Assert = require("assert");

Cucumber.defineSupportCode(function ({ Given, When, Then }) {
  Then("I get an error {number}", function (code: number) {
    return this.getErrorPage(code);
  });
});