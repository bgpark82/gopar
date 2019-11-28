import Axios from '../../node_modules/axios/index';

class LoginService {
  login(username, token) {
    // 세션 저장하기
    sessionStorage.setItem('auth', username);
    // Basic Auth 준비
    this.setupAxiosInterceptors(`Bearer ${token}`);
  }

  setupAxiosInterceptors(jwtToken) {
    Axios.interceptors.request.use(config => {
      // 세션에 유저가 있으면 요청 header의 authorization에 담아 보내기
      if (this.isUserLoggedIn()) config.headers.authorization = jwtToken;
      return config;
    });
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('auth');
    return username === null ? false : true;
  }

  logout() {
    sessionStorage.removeItem('auth');
  }

  executeJwtBasicAuthentication(username, password) {
    return Axios.post('http://localhost:8080/authenticate', { username, password });
  }

  executeBasicAuthentication(username, password) {
    return Axios.get('http://localhost:8080/basicauth', { headers: { authorization: this.createBasicAuthToken(username, password) } });
  }

  executeJwtAuthentication(username, password) {
    const json = {
      grant_type: 'password',
      username: 'test',
      password: 'test',
      scope: 'read write',
    };
    return Axios({
      method: 'post',
      url: 'https://tm-api.rarara.com/api/v1/oauth/token',
      headers: {
        Authorization: this.createBasicAuthToken(username, password),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: json,
    });
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(`${username}:${password}`);
  }
}

export default new LoginService();
