import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"

const Index = lazy(() => import("@/pages/index"))

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
])