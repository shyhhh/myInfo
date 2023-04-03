import lis from './skill.module.scss'

export const Skill: React.FC = () => {
  return (
    <div className={lis.unordered}>
      <h1>技能</h1>
      <ul>
        <li>熟悉页面制作技巧，能将设计稿完美还原</li>
        <li>熟练掌握 CSS3 ，关注页面可拓展性 ，熟练 SCSS 、Unocss</li>
        <li>熟悉前后端分离技术 ，包括 AJAX、跨域、前端路由、Cookie、Session 等</li>
        <li>熟悉 React 的使用，包括 Class 写法、Hooks 写法、Redux ( RTK )、Mobx、Zustand、SWR、Router 熟悉 ES6+ 语法，包括 promise / await / 析构赋值</li>
        <li>熟悉 TypeScript 的使用，对知识点整理成博客在社区输出文章</li>
        <li>了解 Vue、Vue3, 包括 Vite、VueCli、VueRouter、Pinia</li>
        <li>了解常用数据结构与算法</li>
        <li>了解 Webpack 配置、了解 Node.js</li>
      </ul>
    </div>
  )
}
