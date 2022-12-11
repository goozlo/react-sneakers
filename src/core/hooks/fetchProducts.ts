import axios from "axios"

export const fetchProducts = async (endpoint: string) => {
    try {
        const apiUrl = process.env.REACT_APP_DATA_URL as string

        const config = {
            method: "get",
            url: `${apiUrl}/${endpoint}`,
            headers: {
                accept: "application/json"
            }
        }

        const { data } = await axios(config)
        return data
    } catch (e) {
        console.log(e)
        return []
    }
}
