import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../components/layouts/RootLayout";
import { Children } from "react";

const router = createBrowserRouter([

  {
  path:"/", 
  Component: RootLayout,
  children: [
  {path:"/", Component: Home},
  {path:"/login", Component: Login} ],
  },
])

function Index() {

  return (
    <>
     <RouterProvider router = {router} />
    </>
  )
}

export default Index