import { store } from "../store"
import { remove, add } from "./cart"
import axios from "axios"

export const cartService = {
    add: (id: number) => store.dispatch(add({ id })),
    remove: async (id: number) => {
        await axios.delete(process.env.REACT_APP_DATA_URL as string + "cart/" + id)
        store.dispatch(remove({ id }))
    }
}


