import { CardProps } from "../components/Card/Card.props"
import React from "react"
import axios from "axios"

export const getItems = (endpoint: string): CardProps[] => {
    const [items, setItems] = React.useState([])

    try {
        React.useEffect(() => {
            async function fetchData() {
                const { data } = await axios.get(process.env.REACT_APP_DATA_URL + endpoint)
                return data
            }

            fetchData().then(items => setItems(items))
        }, [])
    } catch (e) {
        console.log(e)
    }

    return items
}
