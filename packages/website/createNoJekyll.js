const fs = require('fs')
const path = require('path')

// 定义目标目录和文件名
const distDir = path.join(__dirname, 'dist')
const nojekyllFile = path.join(distDir, '.nojekyll')

// 确保 dist 目录存在
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// 创建 .nojekyll 文件
if (!fs.existsSync(nojekyllFile)) {
  fs.writeFileSync(nojekyllFile, '', 'utf8')
}
