import { createBrowserRouter } from "react-router-dom"
import {
  Home,
  ErrorPage,
  CreateUserProfile
} from "../pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/create-user',
    element: <CreateUserProfile/>,
    errorElement: <ErrorPage/>,
  }
])

export default router