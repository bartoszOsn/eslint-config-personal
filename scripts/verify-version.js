const { readReadme, writeReadme, getReadme } = require('./util/templates');
const { getPackageJsonVersion, getGitVersion, versionsEqual } = require('./util');

async function main() {

	const packageJsonVersion = getPackageJsonVersion();

	const gitVersion = getGitVersion();

	if (!versionsEqual(packageJsonVersion, gitVersion)) {
		throw new Error(
			`Package.json version is not matching latest tag. package.json: ${packageJsonVersion.join('.')}, tag: ${gitVersion.join('.')}.`
		)
	}

	const readme = await getReadme(packageJsonVersion);
	const currentReadme = await readReadme();

	if (readme !== currentReadme) {
		throw new Error(
			`Readme is not up to date.`
		)
	}
}

main().then();