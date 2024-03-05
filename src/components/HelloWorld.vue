<template>
  <div class="container">
    <img src="../assets/background.JPG" alt="Fondo" class="background">
    <div class="centered-image-container">
      <img src="../assets/avatar.jpg" alt="Imagen centrada" class="centered-image">
    </div>
    <h2 style="padding: 8px; color: white !important;"><strong>La Metamorfosis del Alma</strong></h2>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.centered-image-container {
  position: relative;
  border-radius: 50%;
  overflow: hidden;
}

.centered-image {
  width: 100%;
  height: 100%;
  opacity: 1; /* Opacidad del 40% */
  border-radius: 50%; /* Borde circular */
}
</style>