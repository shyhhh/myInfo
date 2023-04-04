import { ButtonMailto } from '../components/ButtonMailto'

export const MyInfo: React.FC = () => {
  return (
    <>
      <h1>关于我</h1>
      <hr />
      <ul>
        <li>昵称: hone <b>（目前正在求职）</b></li>
        <li>坐标: 杭州</li>
        <li>TEL: MTc2ODEyNjE2MDI=</li>
        <li>微信: SEhIbG92ZWx5Xw==</li>
        <li>邮箱: <ButtonMailto label="hhhtheshy@gmail.com" mailto="mailto:hhhtheshy@gmail.com" /></li>
        <li>学历: 四川传媒学院 | 网络与新媒体传播 | 本科 | 毕业时间2022</li>
        <li>态度: 学习是一个积累的过程，需持之以恒</li>
      </ul>
    </>
  )
}
