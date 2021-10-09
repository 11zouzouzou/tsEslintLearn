module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        // 类名使用驼峰命名，首字母大写。例如 SceneManager
        selector: ['class'],
        format: ['PascalCase'],
      },
    ],
  },
};
