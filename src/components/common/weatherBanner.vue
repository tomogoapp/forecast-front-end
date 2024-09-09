<script setup lang='ts'>
  import type { Weather } from '~~/types'
  import imagePath from '@/assets/a.png'

  const props = defineProps<{ weather: Weather | null }>()

  const flag = ref<string | null>(null)

  watch(() => props.weather?.sys?.country, (newCountry) => {
    if (newCountry) {
      flag.value = newCountry.toLowerCase()
    }
  })
  
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
  <div class='main-container d-flex align-center pa-xl-10 pa-lg-10 pa-md-5 pa-sm-5 pa-4 pt-10 haze'>


    <v-row>
      <v-col
        cols='12'
        class='d-flex align-center justify-xl-center justify-lg-start justify-md-start justify-sm-start justify-center'
        xl='4'
        lg='4'
        md='4'
        sm='12'
      >
        <div>
          <h1 class='color-h1 sub-h1'><span :class='`fi fi-${flag}`'></span> {{ weather?.name }}</h1>
          <h1 class='max-h1'>{{ weather?.main.temp }}°C</h1>
        
          <div class='d-flex'>
            <v-list-item
              density='compact'
              prepend-icon='mdi-weather-windy'
            >
              <v-list-item-subtitle>{{ weather?.wind.speed }} km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
              density='compact'
              prepend-icon='mdi-weather-pouring'
            >
              <v-list-item-subtitle>{{ weather?.main.humidity }}%</v-list-item-subtitle>
            </v-list-item>
          </div>
        </div>
      </v-col>
      <v-col
        cols='12'
        class='d-flex align-center justify-center'
        xl='4'
        lg='4'
        md='4'
        sm='12'
      >
        <div>
          <v-img 
            class="img-weather"
            :src='imagePath'
            alt='Weather Image' 
            :width='400'
            aspect-ratio='1/1'
            cover
          />
        </div>
      </v-col>
      <v-col
        cols='12'
        class='d-flex align-center justify-center'
        xl='4'
        lg='4'
        md='4'
        sm='12'
      >
        
        <div
          style='width: 75%;'
        >
          <div class='py-2'>
          <v-slider
          v-model='data.time'
          :max='6'
          :step='1'
          :ticks='data.labels'
          class='mx-4'
          color='warning'
          density='compact'
          show-ticks='always'
          thumb-size='10'
          hide-details
          ></v-slider>
          </div>

          <v-list class='bg-transparent'>
          <v-list-item
          v-for='item in data.forecast'
          :key='item.day'
          :append-icon='item.icon'
          :subtitle='item.temp'
          :title='item.day'
          >
          </v-list-item>
          </v-list>
        </div>

      </v-col> 
    </v-row>

    <!-- <h1>Weather in {{ weatherData?.name }}</h1>
      <div v-if='weatherData'>
        data: {{ weatherData }}
        <p>Temperature: {{ weatherData.main.temp }}°C</p>
        <p>Weather: {{ weatherData.weather[0].description }}</p>
      </div>
      <div v-else-if='error'>
        <p>Error: {{ error }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div> -->


  </div>
</template>

<style scoped lang='scss'>
  //https://www.svgrepo.com/collection/weather-forecast/

  $dark-gray: #4a4a4a;
  $medium-gray: #7d7d7d;
  $light-gray: #bfbfbf;
  
  $medium-gray: #a9a9a9;
  $light-blue: #87cefa;  // Azul cielo claro
  $medium-blue: #4682b4; // Azul cielo más oscuro

  .main-container{
    height: 650px;
    //background-color: cyan;
  }

.haze {
  background: rgb(191,191,191);
  background: linear-gradient(0deg, rgba(191,191,191,1) 0%, rgba(130,130,130,1) 51%, rgba(91,91,91,1) 100%);
}


.rainy-clouds {
  background: rgb(210,210,210);
  background: linear-gradient(0deg, rgba(210,210,210,1) 0%, rgba(158,158,158,1) 51%, rgba(119,119,119,1) 100%);
}

.rainy-sky {
  background: linear-gradient(
    90deg,
    $light-blue 25%,
    $medium-gray 75%
  )
}

.rainy-sky .max-h1{
  color: #555555;
}

.rainy-clouds .max-h1{
  color: #c1c1c1;
}

.color-h1{
  color: #555555;
}

.max-h1 {
  font-size: 8rem;
}


@keyframes moving-clouds {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}


@keyframes drifting-clouds {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}

  @media (min-width: 0px) and (max-width: 600px) {

    .main-container {
      height: 100vh;
    }
    :deep(.img-weather) {
      width: 150px !important;
    }
    :deep(.max-h1) {
      font-size: 3.5rem;
      height: 64px;
      text-align: center;
    }

    :deep(.sub-h1) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

</style>
