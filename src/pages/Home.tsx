import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Vitae from './Vitae'

const Home: React.FC = () => {
  return (
    <>
      <Vitae />
      <Link to={'/home/demo1'}>Demo1</Link>
      <Link to={'/home/demo2'}>Demo2</Link>
      <Link to={'/home/demo3'}>Demo3</Link>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Home
