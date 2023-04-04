import { HighlightedText } from '../components/HighlightedText'
import lis from './Skill.module.scss'

export const Skill: React.FC = () => {
  const HightColorFont2 = ['SCSS', 'Unocss']

  return (
    <div className={lis.unordered}>
      <h1>技能</h1>
      <hr />
      <ul>
        <li>熟悉页面制作技巧，能将设计稿<span text-orange-600>完美还原</span></li>
        <li>熟练掌握 CSS3 ，关注<span text-orange-600>页面可拓展性</span> ，熟练 <HighlightedText textArray={HightColorFont2} separator='、' /> </li>
        <li>熟悉<span text-orange-600>前后端分离技术</span> ，包括 AJAX、跨域、前端路由、Cookie、Session 等</li>
        <li>熟悉 <span text-orange-600>React</span> 的使用，包括 Class 写法、Hooks 写法、Redux ( RTK )、Mobx、Zustand、SWR、Router</li>
        <li>熟悉 ES6+ 语法，包括 promise / await / 析构赋值</li>
        <li>熟悉 <span text-orange-600>TypeScript</span> 的使用，对知识点整理成博客在社区输出文章</li>
        <li>了解 Vue、Vue3, 包括 Vite、VueCli、VueRouter、Pinia</li>
        <li>了解常用数据结构与算法</li>
        <li>了解 Webpack 配置、了解 Node.js</li>
      </ul>
    </div>
  )
}
