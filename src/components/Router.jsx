import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from '../pages/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
