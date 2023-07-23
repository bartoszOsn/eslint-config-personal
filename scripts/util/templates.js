const { readFile, writeFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function readTemplate() {
	return readFile(resolve(__dirname, '../../__readme.tpl.md'), 'utf-8');
}

async function readReadme() {
	return readFile(resolve(__dirname, '../../readme.md'), 'utf-8');
}

async function writeReadme(readme) {
	return writeFile(resolve(__dirname, '../../readme.md'), readme, { encoding: 'utf-8' });
}

async function getReadme(version) {
	const template = await readTemplate();
	return template.replace(/X\.X\.X/g, version.join('.'));
}

module.exports = {
	readTemplate,
	readReadme,
	writeReadme,
	getReadme
}