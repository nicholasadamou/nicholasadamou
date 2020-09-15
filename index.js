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

I am currently a IBM Software Engineer and a recent graduate from Cornell College where I earned my B.A. in Computer Science with a concentration in Software Engineering. I am a highly organized and hard-working individual who absolutely loves programming. The mere ability to write a few lines of code and have something unique and interesting come up on the screen fascinates me each and every day!

📖 GitHub:  https://github.com/nicholasadamou
`);
