import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID ikOl7b7a_9qSW9WSCqJ445WN6e6mnlrUQqvrfxWubhE"
    }
});