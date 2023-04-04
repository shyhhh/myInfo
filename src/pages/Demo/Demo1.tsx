import React from 'react'
import { HighlightedText } from '../../components/HighlightedText'

const Demo1: React.FC = () => {
  const HightColorFont1 = [
    'React',
    'TypeScript',
    'Vite',
    'SWR',
    'Zustand',
    'JWT',
    'EChart'
  ]
  const HightColorFont4 = ['自制日期选择器', '封装表单组件']
  const HightColorFont5 = ['明细', '记账', '图表', '登录等页面', '标签管理', '数据统计', '可视化图表']
  return (
    <ul>
      <li>
        1. 一款基于<HighlightedText textArray={HightColorFont1} separator=' / '/>的移动端单页面应用
      </li>
      <li>
        2. 使用 <span text-orange-600>Zustand</span> 做状态管理、数据请求使用了 <span text-orange-600>SWR</span> ，自己搭建 <span text-orange-600>Mock</span> 服务器
      </li>
      <li>
        3. 使用 Flex 和 Grid 布局，CSS 方案使用 Unocss、Styled-Components、CSS Modules
      </li>
      <li>
        4. 项目中大量使用封装，包括 <HighlightedText textArray={HightColorFont4} separator='，'/>等
      </li>
      <li>
        5. 实现功能: <HighlightedText textArray={HightColorFont5} separator='、'/>等功能
      </li>
    </ul>
  )
}

export default Demo1
