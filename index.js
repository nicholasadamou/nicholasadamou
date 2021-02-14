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

Currently, I am an IBM software engineer. I primarily focus on the front-end and back-end of cloud-native applications. Recently I graduated Summa Cum Laude from Cornell College where I earned my degree in Computer Science. I have always been a highly organized and goal-driven individual who is a problem solver by nature. I love programming because I can use my skills as a software engineer to improve the lives of others by developing fun and intuitive applications.

📖 GitHub:  https://github.com/nicholasadamou
`);
