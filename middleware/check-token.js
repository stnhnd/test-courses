export default function ({ $axios, $cookies, store }) {
  const tokenInLocalStorage = $cookies.get('test_api_token');
  if (tokenInLocalStorage) {
    $axios.setHeader('Authorization', `Bearer ${tokenInLocalStorage}`);
    store.commit('login');
  }
}