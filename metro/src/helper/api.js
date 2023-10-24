import axois from "axios";

const instance = axois.create({
    baseURL:"http://localhost:8080/productApi"
})

export default instance;