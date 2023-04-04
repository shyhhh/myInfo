import { CustomLink } from '../components/CustomLink'

export const Other: React.FC = () => {
  return (
    <>
      <h1>其他</h1>
      <hr />
      <ul>
        <li>我的 <CustomLink path='https://github.com/shyhhh' className='c-blue-500'>Github</CustomLink>，</li>
        <li>我的 <CustomLink path='https://juejin.cn/user/3359726847928840/posts' className='c-blue-500'>博客</CustomLink> 目前阅读量 1.4W+，</li>
        <li>大三期间学校设有网页相关专业课，相关课程成绩优异均分 98，在校曾搭建过学院官网, 具有极客精神，积极关注行业动态。</li>
      </ul>
    </>
  )
}
