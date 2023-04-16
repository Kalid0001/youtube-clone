import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",
    //key: "AlzaSyBt4zLRMJaShHdEm3GH_9gy3oUe2YUsmd8",
  },
});

export default request;
