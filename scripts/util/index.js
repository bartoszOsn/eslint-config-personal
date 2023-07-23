const { readFile, writeFile } = require('node:fs/promises');
const { execSync } = require('node:child_process');

function getPackageJsonVersion() {
	return require('../../package.json').version
		.split('.')
		.map(num => parseInt(num));
}

async function changeVersionInPackageJson(version) {
	const packageJson = require('../../package.json');
	packageJson.version = version.join('.');
	await writeFile('./package.json', JSON.stringify(packageJson, null, '\t'), { encoding: 'utf-8' });
}

function getGitVersion() {
	const { execSync } = require('node:child_process');
	return execSync('git describe --tags --match v* --abbrev=0')
		.toString()
		.trim()
		.slice(1)
		.split('.')
		.map(num => parseInt(num));
}

function versionsEqual(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

function addCommitWithVersionTag(version) {
	execSync('git add .');
	execSync(`git commit -m "release v${version.join('.')}"`);
	execSync(`git tag v${version.join('.')}`);
}

module.exports = {
	getPackageJsonVersion,
	changeVersionInPackageJson,
	getGitVersion,
	versionsEqual,
	addCommitWithVersionTag
}