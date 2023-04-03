import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Demo1 = lazy(() => import('../pages/Demo/Demo1'))
const Demo2 = lazy(() => import('../pages/Demo/Demo2'))
const Demo3 = lazy(() => import('../pages/Demo/Demo3'))

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={'/home/demo1'} /> },
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: '/home', element: <Navigate to={'/home/demo1'} /> },
      { path: '/home/demo1', element: <Demo1 /> },
      { path: '/home/demo2', element: <Demo2 /> },
      { path: '/home/demo3', element: <Demo3 /> },
    ]
  },
]
