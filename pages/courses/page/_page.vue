<template>
  <main>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-3xl lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Our courses</h2>

        <div class="mt-8 grid grid-cols-1 gap-y-20" v-if="courses.length">
          <article v-for="course, idx in courses" :key="idx" class="group relative">
            <div
              class="flex justify-center align-middle min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img v-if="course.placeholder" class="py-28 object-center" src="~/assets/placeholder.svg" alt="placeholder">
              <img v-show="!course.placeholder" :src="course.thumbnail_url" :alt="course.name" @load="$store.commit('showImage', course.id)"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h2 class="text-2xl text-gray-700 mb-4">
                  <nuxt-link :to="`/courses/${course.id}`">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ course.name }}
                  </nuxt-link>
                </h2>
              </div>
            </div>
          </article>
        </div>

        <div v-else class="mt-10">No courses...</div>

        <div class="mt-10 flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          v-if="courses.length && pagination">
          <div class="sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <nuxt-link :to="`/courses/page/${i + 1}`" aria-current="page" v-for="page, i of pagination" :key="i"
                  :class='["relative", "z-10", "inline-flex", "items-center", "border", "px-4", "py-2", "text-sm", "font-medium", "focus:z-20", {"text-indigo-600": currentPage != page}, {"text-white": currentPage == page}, {"bg-indigo-700": currentPage == page}, {"border-indigo-500": currentPage == page}]'>
                  {{page}}</nuxt-link>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, store, params }) {
    const courses = await $axios.$get('/courses');
    const modifiedCourses = courses.data.map(course => {
      return {
        id: course.id,
        name: course.name,
        thumbnail_url: course.thumbnail_url,
        placeholder: true,
      } 
    })
    store.commit('setCourses', modifiedCourses)
    store.commit('setPage', params.page)
  },
  computed: {
    showAlert() {
      alert('yee!');
    },
    currentPage() {
      return this.$route.params.page
    },
    courses() {
      return this.$store.state.viewedCourses;
    },
    pagination() {
      return this.$store.state.pagination
    }
  }
}

</script>
