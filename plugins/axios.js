export default function ({ $axios, store, $cookies }) {
  $axios.onResponse(response => {
    if (response.data.api_token) {
      $axios.setHeader('Authorization', `Bearer ${response.data.api_token}`);
      $cookies.set('test_api_token', response.data.api_token);
    }
  });

  $axios.onError(error => {
    if (error.response.status === 401) {
      store.commit('logout');
    }
  });
}