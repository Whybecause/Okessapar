import axios from 'axios';

class VideoService {
    getVideos= async () => {
        const result = await axios.get("/api/videos")
        return (result);
    }

}
    export default new VideoService();
