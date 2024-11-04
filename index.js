#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `Hi 👋🏼, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#1880bf`,
	color: `#000000`,
	bold: true,
	clear: true,
});

console.log(`
👨🏼‍💻Nicholas Adamou

Currently, I am a full-stack software engineer focused on making the world better through software.

📖 GitHub:  https://github.com/nicholasadamou
🔗 LinkedIn: https://www.linkedin.com/in/nicholas-adamou
`);
