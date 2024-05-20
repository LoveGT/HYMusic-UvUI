import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  formatters: true,
  vue: true,
  ignores: ['node_modules', '**/node_modules/**', 'dist', '**/dist/**', '*.css', '**/*.css/**', '*.less', '**/*.less/**', '*.scss', '**/*.scss/**', '*.jpg', '**/*.jpg/**', '*.png', '**/*.png/**', '*.gif', '**/*.gif/**', '*.svg', '**/*.svg/**', '*.html', '**/*.html/**', '*.d.ts', '**/*.d.ts/**'],
})
