export default function ({ $axios, store, $cookies, redirect }) {
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
    // if (error.response.status === 404) {
    //   return redirect(404, '/error');
    // }
  });

  // $axios.onRequestError(err => {
  //   console.log(err);
  //   if (err.request.status === 404) {
  //     return redirect(404, '/error');
  //   }
  // })
}