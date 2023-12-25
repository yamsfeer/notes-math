import path from 'path'
import { readdirSync } from 'fs'

function dir(dirname) {
  return readdirSync(path.resolve(`${__dirname}/../${dirname}`))
    .filter((filename) => filename.includes('.md'))
    .map((filename) => {
      return {
        text: filename.split('.md')[0],
        link: filename,
      }
    })
}

function sort(files) {
  return files.sort((A, B) => {
    const { text: nameA } = A,
      { text: nameB } = B
    const reg = /[\d+.]+/
    if (nameA.match(reg) && nameB.match(reg)) {
      const indexA = nameA.match(reg)[0].split('.') // '12.1.3'
      const indexB = nameB.match(reg)[0].split('.')

      let i = 0
      let length = Math.max(indexA.length, indexB.length)
      while (i < length) {
        let A = indexA[i] || 0 // 超出的部分用 0 补充
        let B = indexB[i] || 0
        if (A === B) {
          i++
          continue
        }
        return A - B
      }
    }
  })
}

export const navbar = [
  {
    text: '数学基础',
    children: [
      { text: '数理逻辑', link: '/离散数学/1.数理逻辑' },
      { text: '集合论', link: '/离散数学/2.集合论' },
      { text: '证明', link: '/离散数学/2.1.集合论' },
    ],
  },
  {
    text: '离散数学',
    children: [
      { text: '图论', link: '/图论/1.概论' },
      { text: '形式语言与自动机', link: '/离散数学/5.形式语言与自动机' },
    ],
  },
  {
    text: '代数',
    children: [
      { text: '线性代数', link: '/线性代数/0.序言' },
      { text: '抽象代数', link: '/抽象代数/1.抽象代数' },
    ],
  },
  {
    text: '几何',
    children: [
      { text: '几何', link: '/几何/1.概览' },
      { text: '拓扑学', link: '/拓扑学/1.拓扑学概览' },
      { text: '点集拓扑', link: '/拓扑学/1.拓扑学概览' },
    ],
  },
  {
    text: '数学工具',
    children: [
      { text: '微积分', link: '/数学工具/微积分/0.概述' },
      { text: '傅里叶变换', link: '/数学工具/傅里叶变换/0.概述' },
    ],
  },
]

export const sidebar = {
  // 代数
  '/线性代数/': [{ text: '线性代数', children: sort(dir('/线性代数')) }],
  '/抽象代数/': [{ text: '抽象代数', children: sort(dir('/抽象代数')) }],

  // 几何
  '/几何/': [{ text: '几何', children: sort(dir('/几何')) }],
  '/拓扑学/': [{ text: '拓扑学', children: sort(dir('/拓扑学')) }],

  // 离散
  '/离散数学/': [{ text: '离散数学', children: sort(dir('/离散数学')) }],
  '/图论/': [{ text: '图论', children: sort(dir('/图论')) }],

  // 数学工具
  '/数学工具/微积分': [
    { text: '微积分', children: sort(dir('/数学工具/微积分')) },
  ],
  '/数学工具/傅里叶变换': [
    { text: '傅里叶变换', children: sort(dir('/数学工具/傅里叶变换')) },
  ],
}
