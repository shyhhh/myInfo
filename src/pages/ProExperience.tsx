import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

export const ProExperience: React.FC<IProps> = (props) => {
  return (
    <div h-70>
      <h1>项目经历</h1>
      <hr />
      <div children-p-x-30px children-p-y-10px children-b-1 m-b-20px children-m-x-5px children-rounded-sm>
        <NavLink to={'/home/demo1'}
          className={({ isActive }) =>
            isActive ? 'active' : undefined}>
          橙子记账
        </NavLink>
        <NavLink to={'/home/demo2'}
          className={({ isActive }) =>
            isActive ? 'active' : undefined}>
          Orange UI
        </NavLink>
        <NavLink to={'/home/demo3'}
          className={({ isActive }) =>
            isActive ? 'active' : undefined}>
          可视化大屏
        </NavLink>
      </div>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </div>
  )
}
