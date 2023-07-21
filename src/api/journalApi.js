import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-d4b94-default-rtdb.firebaseio.com'
})

export default journalApi