import React, { FC } from "react"
import ReactDOM from "react-dom"
import { PortalProps } from "./Portal.props"

export const Portal: FC<PortalProps> = ({ children }) => {
    const [container] = React.useState(() => document.createElement("div"))

    React.useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [container])

    return ReactDOM.createPortal(children, container)
}
