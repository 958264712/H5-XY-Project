var userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
if (userInfo == null) {
    sessionStorage.setItem("userInfo", JSON.stringify([{
        "userName": "admin",
        "password": "123456"
    }]))
}