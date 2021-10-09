# tsEslintLearn
代码工作流规范

## install
yarn install-dev

## husky
您可以使用 Git选项绕过pre-commit和commit-msg挂钩-n/--no-verify：

git commit -m "yolo!" --no-verify
对于没有--no-verify选项的Git 命令，您可以使用HUSKY环境变量：

HUSKY=0 git push # yolo!