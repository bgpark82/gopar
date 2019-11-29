import Axios from '../../node_modules/axios/index';

class TestService {
  executeHelloWorldService() {
    return Axios.get('http://localhost:8080/', {
      headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNTc1MDM4MDIwLCJpYXQiOjE1NzUwMDIwMjB9.cOdHiAKGGZgryD3UEYq5uN5xwtj_G3Uj_G35iHQ75U4' },
    });
  }
}

export default new TestService();
