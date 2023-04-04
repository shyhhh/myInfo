import { CustomLink } from '../../components/CustomLink'
import { HighlightedText } from '../../components/HighlightedText'

const Demo2: React.FC = () => {
  const HightColorFont1 = ['Vue3', 'TypeScript', 'SCSS']
  const HightColorFont2 = ['Button', 'Switch', 'Dialog', 'Tabs']

  return (
    <ul>
      <li>1. 一款 <HighlightedText textArray={HightColorFont1} separator=" / " /> 的 UI 框架</li>
      <li>2. Vue3 版采用 Vite 工具搭建，包含了 <HighlightedText textArray={HightColorFont2} separator=' / '/> 等组件</li>
      <li>3. 搭建了项目官网，描述库的相关介绍和代码实例使用，将库上传 npm</li>
      <li>4. 源码在 GitHub，可以查看每个组件的设计方式和构思，以及相关的源码</li>
      <li>5. 项目的出发点是为了探究 UI 组件库的设计思路和实现方法</li>
      <li children-c-blue-500 children-p-5px>
        <CustomLink path='https://github.com/shyhhh/Orange-UI-Vue3-simple1.0'>项目源码</CustomLink>
        <CustomLink path='https://shyhhh.github.io/Orange-UI-Vue3-simple1.0/'>项目预览</CustomLink>
      </li>
    </ul>
  )
}

export default Demo2
