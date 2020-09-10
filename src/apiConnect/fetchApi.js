import axios from "axios"

export const fetchData = async (name1, name2) => {
    try {
        const { data } = await axios({
            method: "GET",
            url: process.env.REACT_APP_API_URL,
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": process.env.REACT_APP_API_HOST,
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                useQueryString: true
            },
            params: {
                fname: name1,
                sname: name2
            }
        });
        return data
    }
    catch (err) {
        console.log(err)
    }
}
