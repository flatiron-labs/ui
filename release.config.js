module.exports = {
  branches: [
    // The branches on which releases should happen
    '+([0-9])?(.{+([0-9]),x}).x', // Regular releases to a distribution channel matching the branch name from any existing branch with a name matching a maintenance release range (N.N.x or N.x.x or N.x with N being a number)
    'main', // Regular releases to the default distribution channel from the branch `main`
    'next', // Regular releases to the `next` distribution channel from the branch `next`, if it exists
    'next-major', // Regular releases  to the `next-major` distribution channel from the branch `next-major`, if it exists
    { name: 'beta', prerelease: true }, // Pre-releases to the `beta` distribution channel from the branch `beta`, if it exists
    { name: 'alpha', prerelease: true } // Pre-releases to the `alpha` distribution channel from the branch `alpha`, if it exists
  ],
  plugins: [
    // Plugins will run in series, in the order defined, for each steps if they implement it.
    '@semantic-release/commit-analyzer', // Responsible for determining the type of the next release (major, minor or patch) https://github.com/semantic-release/commit-analyzer
    '@semantic-release/release-notes-generator', // Generate release notes for the commits added since the last release with conventional-changelog https://github.com/semantic-release/release-notes-generator
    // [
    //   '@semantic-release/changelog', { // Plugin to create or update a changelog file.
    //     changelogFile: 'CHANGELOG.md'
    //   }
    // ],
    // [
    //   '@semantic-release/git', { // Plugin to commit release assets to the project's git repository.
    //     assets: ['CHANGELOG.md'],
    //     message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    //   }
    // ],
    '@semantic-release/npm', // Plugin to publish a npm package // https://github.com/semantic-release/npm
    '@semantic-release/github' // Plugin to publish a GitHub release and comment on released Pull Requests/Issues. // https://github.com/semantic-release/github
  ]
}
