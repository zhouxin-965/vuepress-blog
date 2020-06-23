#!/usr/bin/env sh

# 确保脚本抛出遇到错误
npm run build

#进入新生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dancingCode-zx/dancingCode-zx.github.io.git master

cd -


