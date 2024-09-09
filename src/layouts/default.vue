<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Weather } from '~~/types';
import { useGetUserLocation } from '~/composables/getUserLocation';
import { useFetch, useRuntimeConfig } from '#app';

const position = ref<GeolocationPosition | null>(null);
const city = ref<string>('');  
const weatherData = ref<Weather | null>(null);
const error = ref<string | null>(null);

const { getUserLocation } = useGetUserLocation();
const config = useRuntimeConfig();

onMounted(async () => {
  try {
    const userPosition = await getUserLocation();
    position.value = userPosition;

    const { latitude, longitude } = userPosition.coords;

    city.value = `lat=${latitude}&lon=${longitude}`; 

    const { data, error } = await useFetch<Weather>(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: config.public.openWeatherMapApiKey,
        units: 'metric',
      },
    })

    weatherData.value = data.value;
  } catch (err) {
    error.value = (err as Error).message;
    alert('Error obteniendo la ubicación o el clima:');
  }
});
</script>

<template>
  <div>
    <v-app>
      <CommonAppBar />
      <CommonWeatherBanner 
          :weather='weatherData'
      />
      <v-main>
        <slot></slot>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped></style>
