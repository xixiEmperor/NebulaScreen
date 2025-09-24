import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"

const Index = lazy(() => import("@/pages/index"))
const Projects = lazy(() => import("@/pages/projects"))

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/projects",
    Component: Projects,
  }
])