// @ts-check
import { readFileSync } from 'node:fs'
import path from 'node:path'
import pico from 'picocolors'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE
  // eslint-disable-next-line regexp/no-unused-capturing-group
  = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(
    `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(
      `无效的git commit message格式.`,
    )}\n\n${
      pico.red(
        `  需要正确的提交信息格式。示例:\n\n`,
      )
      }    ${pico.green(`feat(compiler): add 'comments' option`)}\n`
      + `    ${pico.green(
        `fix(v-model): handle events on blur (close #28)`,
      )}\n\n${
      pico.red(`  See .github/commit-convention.md 查看更多的提交规范.\n`)}`,
  )
  // eslint-disable-next-line node/prefer-global/process
  process.exit(1)
}
