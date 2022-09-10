export default function ({ $axios, store, $cookies, redirect }) {
  $axios.onResponse(response => {
    if (response.data.api_token) {
      $axios.setHeader('Authorization', `Bearer ${response.data.api_token}`);
      $cookies.set('test_api_token', response.data.api_token);
    }
  });

  $axios.onError(err => {
    if (err.response.status == 403 || err.response.status == 404) {
      return redirect('/error');
    }
  });
}