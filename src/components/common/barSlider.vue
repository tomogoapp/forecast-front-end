<script setup lang="ts">
</script>

<template>
  <div>
    <div class="marquee-container d-flex">
      <div style='background-color: red; width: fit-content; position: absolute; z-index: 9999;'>⚠️</div>
      <div class="marquee-content">This is a test This is a test This is a test  This is a test This is a test This is a test This is a test </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .marquee-container {
    width: 100%; // Ancho del contenedor
    overflow: hidden; // Oculta el contenido desbordado
    white-space: nowrap; // Evita que el texto se divida en varias líneas
    box-sizing: border-box;
    color: white;
    background-color: red;
    position: relative; // Asegura que el símbolo ⚠️ esté bien posicionado
  }

  .marquee-content {
    display: inline-block;
    padding-left: 100%; // Esto asegura que el texto comienza fuera de la vista
    animation: marquee 25s linear infinite;
    white-space: nowrap; // Mantiene el texto en una sola línea
  }

  // Ajusta la duración de la animación según la longitud del texto
  // Puedes ajustar el tiempo de animación (10s) para que el texto se desplace más rápido o más lento.

</style>
