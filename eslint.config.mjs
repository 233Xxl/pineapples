import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
   ...js.configs.recommended,
    rules: {
      // 这里添加前面提到的规则
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, // 无分号
          printWidth: 80, // 每行宽度至多80字符
          trailingComma: 'none', // 不加对象|数组最后逗号
          endOfLine: 'auto', // 换行符号不限制（win mac 不一致）
        },
      ],
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'], // vue组件名称多单词组成（忽略index.vue）
        },
      ],
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
      'no-undef': 'error',
    },
  },
 ...pluginVue.configs['flat/essential'],
  skipFormatting,
];