export const getPrice = (price: number): string => {
    const preparedPrice = String(price).replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")
    return `${preparedPrice} руб.`
}
