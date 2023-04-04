import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ProExperience: React.FC = () => {
  const navLinks = [
    { to: '/home/demo1', text: '橙子记账' },
    { to: '/home/demo2', text: 'Orange UI' },
    { to: '/home/demo3', text: '可视化大屏' },
  ]
  return (
    <div h-70>
      <h1>项目经历</h1>
      <hr />
      <nav children-p-x-30px children-p-y-10px children-b-1 m-b-20px children-m-x-5px children-rounded-sm>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </div>
  )
}
