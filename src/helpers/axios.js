import axios from 'axios';

//this creates an instance of axios with the baseURL set to our heroku servers. this means that requests on the front end won't have to include the entire URL of the route
export default axios.create({
    baseURL:"https://griffith-webproject-server-8398a1bf085d.herokuapp.com"
});
