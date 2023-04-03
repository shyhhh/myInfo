import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/router'

export const App: React.FC = () => {
  return (
    <Suspense fallback=''>
      <div>{useRoutes(routes)}</div>
    </Suspense>
  )
}
