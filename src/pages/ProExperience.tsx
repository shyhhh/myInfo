import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

export const ProExperience: React.FC<IProps> = (props) => {
  return (
    <div h-70 b-red b-1>
      <h1>项目经历</h1>
      <hr/>
      <Link to={'/home/demo1'}>橙子记账</Link>
      <Link to={'/home/demo2'}>Orange UI</Link>
      <Link to={'/home/demo3'}>可视化大屏</Link>
      <Suspense fallback=''>
        <Outlet/>
      </Suspense>
    </div>
  )
}
