const messages = {
  type: "选择你要提交的类型：",
  scope: "选择一个提交范围（可选）：",
  customScope: "请输入自定义的提交范围：\n",
  subject: "填写简要变更描述：\n",
  body: '填写详细的变更描述（可选）。使用 "|" 换行：\n',
  breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行：\n',
  footerPrefixesSelect: "选择关联issue前缀（可选）：",
  customFooterPrefix: "输入自定义issue前缀：",
  footer: "列举关联issue (可选) 例如: #31, #I3244：\n",
  confirmCommit: "是否提交或修改commit?",
};

const types = [
  { value: "feat", name: "feat:     新增功能 | A new feature" },
  { value: "fix", name: "fix:      修复缺陷 | A bug fix" },
  { value: "wip", name: "WIP:      进行中 | Work In Progress" },
  { value: "docs", name: "docs:     文档更新 | Documentation only changes" },
  { value: "style", name: "style:    代码格式 | Changes that do not affect the meaning of the code" },
  { value: "refactor", name: "refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature" },
  { value: "perf", name: "perf:     性能提升 | A code change that improves performance" },
  { value: "test", name: "test:     测试相关 | Adding missing tests or correcting existing tests" },
  { value: "build", name: "build:    构建相关 | Changes that affect the build system or external dependencies" },
  { value: "ci", name: "ci:       持续集成 | Changes to our CI configuration files and scripts" },
  { value: "revert", name: "revert:   回退代码 | Revert to a commit" },
  { value: "chore", name: "chore:    其他修改 | Other changes that do not modify src or test files" },
];

const scopes = ["common", "sub-pack", "build", "other", "docs", "template"];

const rules = {
  /**
   * type[scope]: [function] description
   *      ^^^^^
   */
  "scope-enum": [2, "always", scopes],
  /**
   * type[scope]: [function] description
   *
   * ^^^^^^^^^^^^^^ empty line.
   * - Something here
   */
  "body-leading-blank": [1, "always"],
  /**
   * type[scope]: [function] description
   *
   * - something here
   *
   * ^^^^^^^^^^^^^^
   */
  "footer-leading-blank": [1, "always"],
  /**
   * type[scope]: [function] description [No more than 72 characters]
   *      ^^^^^
   */
  "header-max-length": [2, "always", 72],
  "scope-case": [2, "always", "lower-case"],
  "subject-case": [1, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
  "subject-empty": [2, "never"],
  "subject-full-stop": [2, "never", "."],
  "type-case": [2, "always", "lower-case"],
  "type-empty": [2, "never"],
  /**
   * type[scope]: [function] description
   * ^^^^
   */
  "type-enum": [2, "always", ["feat", "fix", "wip", "docs", "style", "refactor", "perf", "test", "build", "ci", "revert", "chore"]],
};

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules,
  prompt: {
    messages,
    types,
    scopes,
    allowCustomScopes: true,
    allowEmptyScopes: true,
    maxHeaderLength: 55, // 最大长度 50 个字符，未知原因：默认消耗 5 个字符
  },
};
