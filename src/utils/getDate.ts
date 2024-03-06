export const getDate = (d: string) => {
    const day = new Date(d).getDate() < 10
        ? `0${new Date(d).getDate()}`
        : new Date(d).getDate()
    const month = new Date(d).getMonth() + 1 < 10
        ? `0${new Date(d).getMonth() + 1}`
        : new Date(d).getMonth() + 1
    const year = new Date(d).getFullYear()


    return `${day}.${month}.${year}`

}
