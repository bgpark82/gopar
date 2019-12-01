import Axios from '../../node_modules/axios/index';

class TestService {
  executeHelloWorldService() {
    return Axios.get('http://localhost:8080/test');
  }

  executePlaceService() {
    return Axios.get('http://localhost:8080/api/content');
  }
}

export default new TestService();
