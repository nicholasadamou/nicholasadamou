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

I am currently a IBM Software Engineer and a recent graduate from Cornell College. My mission is to learn as much as I can about different areas of the computer. I absolutely love programming. The mere ability to write a few lines of code and have something unique and interesting come up on the screen fascinates me each and every day!

📖 GitHub:  https://github.com/nicholasadamou
🔗 LinkedIn: https://www.linkedin.com/in/nicholas-adamou/
`);
