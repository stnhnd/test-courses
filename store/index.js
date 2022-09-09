export const state = () => ({
  authed: false,
  views: 3,
  pagination: 0,
  viewedCourses: [],
  viewedCourse: null,
  courses: []
})

export const mutations = {
  setCourses(state, courses) {
    state.courses = courses;
  },
  setPage(state, page) {
    let courses = [...state.courses];
    if (page == 1) {
      state.viewedCourses = courses.slice(0, 3);
    } else {
      state.viewedCourses = courses.splice((page * state.views) - state.views, state.views);
    }
    state.pagination = state.courses.length ? Math.ceil(state.courses.length / state.views) : state.courses.length
  },
  login(state) {
    state.authed = true;
  },
  logout(state) {
    state.authed = false;
  }
}