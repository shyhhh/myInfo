import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Vitae from './Vitae'

const Demo: React.FC = () => {
  return (
    <>
      <Vitae />
      <Link to={'/demo/1'}>Demo1</Link>
      <Link to={'/demo/2'}>Demo2</Link>
      <Link to={'/demo/3'}>Demo3</Link>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Demo
