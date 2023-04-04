import { CustomLink } from '../../components/CustomLink'
import { HighlightedText } from '../../components/HighlightedText'

const Demo3: React.FC = () => {
  const HightColorFont1 = ['React', 'EChart']
  return (
    <ul>
      <li>1. 这是一款基于 <HighlightedText textArray={HightColorFont1} separator=" / "/> 的可视化大屏平台</li>
      <li>2. 使用 flex 和 grid 完成页面展示</li>
      <li>3. 使用 ECharts 实现柱状图、折线图、饼图等可视化展示，实现了数据的监听</li>
      <li children-c-blue-500 children-p-5px>
        <CustomLink path='https://github.com/shyhhh/big-screen'>项目源码</CustomLink>
        <CustomLink path='https://shyhhh.github.io/big-screen/'>项目预览</CustomLink>
      </li>
    </ul>
  )
}

export default Demo3
