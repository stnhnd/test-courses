<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-3xl lg:px-8">
      <button class="p-3 px-6 text-white rounded bg-indigo-600 hover:bg-indigo-700 text-white" @click="backToBlog">
        Back to courses
      </button>
      <div class="mt-8 grid grid-cols-1 gap-y-20">
        <div class="relative">
          <div
            class="flex justify-center align-middle min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="getImgUrl(course.thumbnail_url)" :alt="course.name" v-if="getImgUrl(course.thumbnail_url) != null"
              class="h-full w-full object-cover object-center h-full w-full" />
              <img v-else class="py-28 object-center" src="~/assets/placeholder.svg" alt="placeholder">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-2xl text-gray-700 mb-4">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ course.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, redirect }) {
    const course = await $axios.$get(`/courses/${params.id}`);
    if (!course.id) {
      return redirect(404, '/error');
    }
    return {
      course: course.data
    }
  },
  methods: {
    getImgUrl(image) {
      try {
        return require(`~/assets/${image}`);
      } catch {
        return null;
      }
    },
    backToBlog() {
      if (process.client) {
        if (this.$nuxt.context.from === undefined) {
          this.$router.push('/courses/page/1');
        } else {
          this.$router.push(this.$nuxt.context.from.path)
        }
      }
    }
  },
}

</script>
