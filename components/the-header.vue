<template>
  <header class="px-10 py-5 flex justify-between items-center logged-in border-b border-gray-300" v-if="authed">
    <nuxt-link to="/">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </nuxt-link>
    <button class="p-3 px-6 text-white rounded bg-indigo-600 hover:bg-indigo-700 text-white" @click="logout">Logout</button>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$cookies.set('test_api_token', null);
      this.$router.push('/');
    }
  },
  computed: {
    authed() {
        return this.$store.state.authed
      }
    }
  }
</script>