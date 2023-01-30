
export const storeToken = (adminInfo) => {
    const data = JSON.stringify(adminInfo)
    window.localStorage.setItem("adminInfo", data)
}

export const getToken = () => {
    let data = window.localStorage.getItem("adminInfo")
    const token = JSON.parse(data)?.token
    return token
}

