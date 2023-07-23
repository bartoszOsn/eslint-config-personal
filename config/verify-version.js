async function main() {
	const { execSync } = require('node:child_process');
	const { version } = require('../package.json');
	const [major, minor, patch] = version.split('.')
		.map(num => parseInt(num));

	const gitVersion = execSync('git describe --tags --abbrev=0')
}