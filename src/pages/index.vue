<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for='n in 3'
          :key="n"
        >
          <CommonWeatherCard/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">

</script>
