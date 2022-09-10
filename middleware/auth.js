export default function ({ $axios, store, route, redirect }) {
  if (!store.state.authed && route.name != 'index') {
    return redirect('/')
  }
  // if (route.name == 'index') {
  //   return redirect('/courses/page/1')
  // }
}