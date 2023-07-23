const { writeReadme, getReadme } = require('./util/templates');
const { getPackageJsonVersion, changeVersionInPackageJson, addCommitWithVersionTag } = require('./util');
const { execSync } = require('node:child_process');

main(process.argv[2]).then();

/**
 *
 * @param increment { 'major' | 'minor' | 'patch' }
 * @returns {Promise<void>}
 */
async function main(increment) {
	if (!['--major', '--minor', '--patch'].includes(increment)) {
		throw new Error(`Invalid increment: ${increment}.`);
	}

	const gitChanges = execSync('git status -s').toString().trim();
	if (gitChanges) {
		throw new Error('Git status is not clean. Please commit all changes before running this script.')
	}

	const version = getPackageJsonVersion();
	version[paramToIndex(increment)]++;
	await changeVersionInPackageJson(version);
	await writeReadme(await getReadme(version));
	addCommitWithVersionTag(version);
}

function paramToIndex(increment) {
	switch (increment) {
		case '--major':
			return 0;
		case '--minor':
			return 1;
		case '--patch':
			return 2;
	}
}