import { Link } from 'react-router-dom'

export const Recommend: React.FC = () => {
  return (
    <>
      <h1>介绍</h1>
      <hr />
      <ul>
        <li>我的 <Link to='https://github.com/shyhhh' text-orange-600>Github</Link>，</li>
        <li>我的 <Link to='https://juejin.cn/user/3359726847928840/posts' text-orange-600>博客</Link> 目前阅读量 1.4W+，</li>
        <li>大三期间学校设有网页相关专业课，相关课程成绩优异均分 98，在校曾搭建过学院官网, 具有极客精神，积极关注行业动态。</li>
      </ul>
    </>
  )
}
