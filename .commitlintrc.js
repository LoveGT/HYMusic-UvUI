module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // "never" 表示禁止空的 "scope"，即每次提交都必须指定修改的范围或模块。
    'scope-empty': [2, 'never'],
  },
}
