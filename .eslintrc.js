module.exports = {
  // 环境 针对那些环境的语法
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 集成了哪些规则， 别人写好的. 别人写好的规则拿来用
    'eslint:recommended',
    'plugin:vue/vue3-essential', // eslint-plugin-vue
    'plugin:@typescript-eslint/recommended', // typescript 规则
    '@vue/prettier',
    './.eslintrc-auto-import.json'
  ],
  // 可以解析.vue 文件
  parser: 'vue-eslint-parser', // esprima babel-eslint @typescript-eslint/parser
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析ts文件的
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    // 覆盖eslin他的规则 与编辑器规则保持一致
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, //使用双引号
        semi: false, // 末尾添加分号  var a = 1
        tabWidth: 2, // tab * 2
        trailingComma: 'none', // {a:1,}
        useTabs: false,
        endOfLine: 'auto'
      }
    ]
  }
}
