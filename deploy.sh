#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd ./dist # 进入生成的文件夹

# deploy to github
# echo 'www.mabeiping.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:mabeiping/mabeiping.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://mabeiping:${GITHUB_TOKEN}@github.com/mabeiping/mabeiping.github.io.git

#  https://github.com/mabeiping/mabeiping.github.io.github
  git config --global user.name "mabeiping"
  git config --global user.email "961811532@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:master # 推送到github

cd -
rm -rf ./dist
