<script setup lang="ts">
  import imagePath from '@/assets/c.png'
  const data = reactive({
    labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
    expand: false,
    time: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
    ], 
  })

</script>

<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="368"
    >
    <v-card-item>
      <template #title>
        <span :class="`fi fi-us`"></span> <span class="custom-class">Florida</span>
      </template>
    <template v-slot:subtitle>
    <v-icon
    class="me-1 pb-1"
    color="error"
    icon="mdi-alert"
    size="18"
    ></v-icon>

    Extreme Weather Alert
    </template>
    </v-card-item>

    <v-card-text class="py-0">
    <v-row align="center" no-gutters>
    <v-col
    class="text-h3"
    cols="6"
    >
    32.5&deg;C
    </v-col>

    <v-col class="text-right" cols="6">
    <v-img 
      :src="imagePath"
      alt="Weather Image" 
      :width="100"
      aspect-ratio="1/1"
      cover
    />
    </v-col>
    </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
    <v-list-item
    density="compact"
    prepend-icon="mdi-weather-windy"
    >
    <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item
    density="compact"
    prepend-icon="mdi-weather-pouring"
    >
    <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="data.expand">
      <div class="py-2">
      <v-slider
      v-model="data.time"
      :max="6"
      :step="1"
      :ticks="data.labels"
      class="mx-4"
      color="primary"
      density="compact"
      show-ticks="always"
      thumb-size="10"
      hide-details
      ></v-slider>
      </div>

      <v-list class="bg-transparent">
      <v-list-item
      v-for="item in data.forecast"
      :key="item.day"
      :append-icon="item.icon"
      :subtitle="item.temp"
      :title="item.day"
      >
      </v-list-item>
      </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
    <v-btn
    :text="!data.expand ? 'Full Report' : 'Hide Report'"
    @click="data.expand = !data.expand"
    ></v-btn>
    </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped></style>
