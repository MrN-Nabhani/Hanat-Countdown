import axios from "axios";

function getConnection(url) {
    return axios.get(url)
}
export default getConnection;
