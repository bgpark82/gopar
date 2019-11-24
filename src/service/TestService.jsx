import Axios from '../../node_modules/axios/index';

class TestService {
  executeHelloWorldService() {
    return Axios.get('http://localhost:8080/hello');
  }
}

export default new TestService();
