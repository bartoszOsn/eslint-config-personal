const { readReadme, writeReadme, getReadme } = require('./util/templates');
const { getPackageJsonVersion, getGitVersion, versionsEqual } = require('./util');

async function main() {

	const packageJsonVersion = getPackageJsonVersion();

	const gitVersion = getGitVersion();

	if (!versionsEqual(packageJsonVersion, gitVersion)) {
		console.error(
			`Package.json version is not matching latest tag. package.json: ${packageJsonVersion.join('.')}, tag: ${gitVersion.join('.')}.`
		);
		process.exit(1);
	}

	const readme = await getReadme(packageJsonVersion);
	const currentReadme = await readReadme();

	if (readme !== currentReadme) {
		console.error(
			`Readme is not up to date.`
		);
		process.exit(1);
	}
}

main().then();