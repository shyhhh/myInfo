import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/router'
import { Loading } from './components/Loading'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>{useRoutes(routes)}</div>
    </Suspense>
  )
}
