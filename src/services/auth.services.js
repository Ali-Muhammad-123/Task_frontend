import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

class AuthService {
  login(Email, Password) {
    return axios.post(API_URL + "login", {
        Email,
        Password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));

        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(Email, Password ,Name,  Phonenumber) {
    return axios.post(API_URL + "register", {
      Email,
      Password,
      Name,
      Phonenumber
    }).then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        
        console.log(response.data);
        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();