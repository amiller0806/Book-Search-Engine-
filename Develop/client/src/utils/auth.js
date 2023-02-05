// use this to decode a token and get the user's information out of it
<<<<<<< HEAD
import decode from "jwt-decode";
=======
import decode from 'jwt-decode';
>>>>>>> 441ba61fb882b591de0fcfaad83380c563af3714

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
<<<<<<< HEAD
    return localStorage.getItem("id_token");
=======
    return localStorage.getItem('id_token');
>>>>>>> 441ba61fb882b591de0fcfaad83380c563af3714
  }

  login(idToken) {
    // Saves user token to localStorage
<<<<<<< HEAD
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
=======
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
>>>>>>> 441ba61fb882b591de0fcfaad83380c563af3714
  }

  logout() {
    // Clear user token and profile data from localStorage
<<<<<<< HEAD
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
=======
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
>>>>>>> 441ba61fb882b591de0fcfaad83380c563af3714
  }
}

export default new AuthService();
