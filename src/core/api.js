import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = "http://react-cdp-api.herokuapp.com/";
  },
  getMovies() {
    return axios.get("movies").then((result) => result.data);
  },
};

export default ApiService;
