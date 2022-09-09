<template>
  <div>
    <TheHeader></TheHeader>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['check-token', 'auth']
}
</script>