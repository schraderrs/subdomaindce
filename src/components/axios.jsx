import axios from "axios";

export default axios.create({
  baseURL: `https://dev-richard.ik-doe-mee.nl/wp-json/wp/v2/`,
});
