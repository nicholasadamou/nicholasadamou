"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 2,
  margin: 2,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("              Nick Adamou"),
  handle: chalk.white("nicholasadamou"),
  work: chalk.white("IBM Software Engineer"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("nicholasadamou"),
  github: chalk.gray("https://github.com/") + chalk.cyan("nicholasadamou"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.cyan("nicholas-adamou"),
  npx:
    chalk.red("npx") +
    " " +
    chalk.white("@nicholasadamou/card  (via NPM Package Registry)"),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const work = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  work +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline +
  newline + // data.labelLinkedIn + data.linkedin
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.white(boxen(output, options))
);
