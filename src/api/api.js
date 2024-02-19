import axios from "axios";


const todoTrackerAPI = axios.create({
    baseURL: "https://657ffb496ae0629a3f540bd4.mockapi.io/mock/api",
})


export default todoTrackerAPI;