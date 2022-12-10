import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const RootElement = document.getElementById("root")

if (!RootElement) {
    const Element = document.createElement("h3")
    Element.innerHTML = "<h1>Что-то пошло не так. Мы очень сожалеем. Вернитесь позже, спасибо!</h1>"
    document.body.append(Element)
} else {
    const root = ReactDOM.createRoot(RootElement)
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    )
}


