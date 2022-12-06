import React from "react"
import { Home } from "./pages/Home/Home"
import { Layout } from "./Layout/Layout"
import "./App.scss"

export const App = () => {
    return (
        <>
            <Layout>
                <Home/>
            </Layout>
        </>
    )
}

