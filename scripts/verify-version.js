async function main() {
	const { execSync } = require('node:child_process');
	const { version } = require('../package.json');
	const packageJsonVersion = version.split('.')
		.map(num => parseInt(num));

	const gitVersion = execSync('git describe --tags --match v* --abbrev=0')
		.toString()
		.trim()
		.slice(1)
		.split('.')
		.map(num => parseInt(num));

	if (packageJsonVersion[0] !== gitVersion[0]) {
		throw new Error('Major version mismatch between package.json and git tags');
	}

	if (packageJsonVersion[1] !== gitVersion[1]) {
		throw new Error('Minor version mismatch between package.json and git tags');
	}

	if (packageJsonVersion[2] !== gitVersion[2]) {
		throw new Error('Patch version mismatch between package.json and git tags');
	}
}

main().then();