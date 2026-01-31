import type { Config } from "release-it";

const releaseItConfig: Config = {
  git: {
    requireBranch: "main",
    commit: true,
    // biome-ignore lint/suspicious/noTemplateCurlyInString: release-it syntax
    commitMessage: "release: v${version}",
    tag: true,
    // biome-ignore lint/suspicious/noTemplateCurlyInString: release-it syntax
    tagName: "v${version}",
    push: true,
  },
  github: {
    release: true,
    // biome-ignore lint/suspicious/noTemplateCurlyInString: release-it syntax
    releaseName: "v${version}",
    web: true,
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      ignoreRecommendedBump: true,
      header: "# Changelog",
      preset: {
        name: "conventionalcommits",
        types: [
          {
            type: "feat",
            section: "✨ Features",
          },
          {
            type: "fix",
            section: "🐛 Bug Fixes",
          },
          {
            type: "chore",
            section: "🧹 Chores",
          },
          {
            type: "docs",
            section: "📚 Documentation",
          },
          {
            type: "style",
            section: "💅 Styles",
          },
          {
            type: "refactor",
            section: "♻️ Refactors",
          },
          {
            type: "perf",
            section: "⚡ Performance Improvements",
          },
          {
            type: "test",
            section: "🧪 Tests",
          },
          {
            type: "build",
            section: "🏗️ Build System",
          },
          {
            type: "ci",
            section: "🔄 Continuous Integration",
          },
          {
            type: "release",
            hidden: true,
          },
        ],
      },
    },
  },
};

export default releaseItConfig;
