import axios from 'axios';
export default {
  fetchData(url, methods, datas) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://127.0.0.1:8888' + url,
        method: methods,
        data: datas
      })
        .then(res => {
          resolve(res);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};