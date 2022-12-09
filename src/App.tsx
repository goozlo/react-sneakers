import React from "react"
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { Route } from "react-router"
import { Home, Liked, Bought, ErrorPage } from "./pages"
import { Layout } from "./Layout/Layout"
import "./styles/global.scss"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/liked" element={<Liked/>}/>
            <Route path="/bought" element={<Bought/>}/>
        </Route>
    ))
// {
//     path: "/sneakers/:id",
//     element: <Sneaker/>,
//     errorElement: <ErrorPage/>
// }


export const App = () => {
    return <RouterProvider router={router}/>
}
