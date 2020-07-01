import axios from 'axios';

class ShowService {
    getShows = async () => {
        const result = await axios.get("/api/shows")
        return (result);
    }

}
    export default new ShowService();
