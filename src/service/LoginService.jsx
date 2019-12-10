import qs from 'qs';
import Axios from '../../node_modules/axios/index';

class LoginService {
  login(username, token) {
    // 세션 저장하기
    sessionStorage.setItem('auth', username);
    sessionStorage.setItem('jwt', token);
    // Basic Auth 준비
    this.setupAxiosInterceptors();
  }

  setupAxiosInterceptors() {
    Axios.interceptors.request.use(config => {
      const jwt = sessionStorage.getItem('jwt');
      if (this.isUserLoggedIn()) {
        config.headers.authorization = `Bearer ${jwt}`;
      }
      return config;
    });
  }

  isUserLoggedIn() {
    const username = sessionStorage.getItem('auth');
    return username === null ? false : true;
  }

  logout() {
    sessionStorage.removeItem('auth');
  }

  executeJwtBasicAuthentication(username, password) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8080/authenticate',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { username, password },
    });
  }

  executeJwtAuthentication(username, password) {
    const json = {
      grant_type: 'password',
      username: 'test',
      password: 'test',
      scope: 'read write',
    };

    console.log(json);
    console.log(qs.stringify(json));

    return Axios({
      method: 'post',
      url: 'https://tm-api.rarara.com/api/v1/oauth/token',
      data: qs.stringify(json),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Basic dGVzdDp0ZXN0',
      },
    });
  }
}

export default new LoginService();
