import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Demo = lazy(() => import('../pages/Demo'))
const Demo1 = lazy(() => import('../pages/Demo/Demo1'))
const Demo2 = lazy(() => import('../pages/Demo/Demo2'))
const Demo3 = lazy(() => import('../pages/Demo/Demo3'))

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={'/Home'} /> },
  { path: '/home', element: <Home /> },
  {
    path: '/demo',
    element: <Demo />,
    children: [
      { path: '/demo', element: <Navigate to={'/demo/1'} /> },
      { path: '/demo/1', element: <Demo1 /> },
      { path: '/demo/2', element: <Demo2 /> },
      { path: '/demo/3', element: <Demo3 /> },
    ]
  }
]
