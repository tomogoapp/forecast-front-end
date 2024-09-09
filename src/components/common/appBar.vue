<script setup lang="ts">

  import imagePath from '@/assets/icon.png'

  const appBarColor = ref('transparent')

  const handleScroll = () => {
    appBarColor.value = window.scrollY > 50 ? 'primary' : 'transparent'
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

</script>

<template>
  <div>
    <v-app-bar 
      :elevation="0"
      :elevate-on-scroll="true"
      :color="appBarColor"
      flat
      class="pr-4 pl-4"
    >
      <img 
        :src="imagePath"
        alt="Weather Image" 
        :width="50"
      />
      <v-app-bar-title>Forecast.app</v-app-bar-title>

      <template v-slot:append>

        <v-btn icon="mdi-vuetify"></v-btn>
        <v-btn icon="mdi-nuxt"></v-btn>
        <v-btn icon="mdi-github"></v-btn>

      </template>
    </v-app-bar>
  </div>
</template>

<style scoped></style>
