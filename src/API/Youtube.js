import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyB3ZjY91_ssHFP_rkUGyL04Nn9tkp02QoM",
    type: "video",
  },
});
