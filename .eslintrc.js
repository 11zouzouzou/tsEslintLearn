module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  overrides: [
    {
      files: ['*.ts'], //只检查后缀ts
      processor: '@typescript-eslint',
    },
  ],
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        // 类名使用驼峰命名，首字母大写。例如 SceneManager
        selector: ['class'],
        format: ['PascalCase'],
      },
      {
        // 类成员函数使用驼峰命名，首字母小写。
        selector: ['classMethod'],
        modifiers: ['public'],
        format: ['camelCase'],
      },
      {
        // 类静态成员函数使用驼峰命名，首字母大写。
        selector: ['classMethod'],
        // 当有多个modifiers约束时，是“且”的关系。
        modifiers: ['public', 'static'],
        format: ['PascalCase'],
      },
      {
        // 类中非公有成员变量以 _ 前缀，并加上首字母小写驼峰规则。例如 _canvasColor
        selector: ['classProperty'],
        modifiers: ['private'],
        // 前缀匹配之后，会在剔除前缀的情况下再做format匹配。
        prefix: ['_'],
        format: ['camelCase'],
      },
      {
        // 类中非公有静态成员变量以 s_ 开头，并加上首字母小写驼峰规则。例如 s_drawCount
        selector: ['classProperty'],
        modifiers: ['private', 'static'],
        prefix: ['s_'],
        format: ['camelCase'],
      },
      {
        // 类中静态公有变量使用首字母大写驼峰命名。
        selector: ['classProperty'],
        modifiers: ['static', 'public'],
        format: ['PascalCase'],
      },
      //   {
      //     // 接口以大写I开头后面跟首字母大写的驼峰命名。例如 IRenderProxy
      //     selector: ["interface"],
      //     prefix: ["I"],
      //     format: ["PascalCase"]
      //   }
    ],
  },
};
