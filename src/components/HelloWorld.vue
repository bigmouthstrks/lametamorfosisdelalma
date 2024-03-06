<template>
  <div class="container">
    <img src="https://i.pinimg.com/originals/36/07/c6/3607c693b6c03fa234b7c0700f965526.jpg" alt="Fondo" class="background">
    <div class="content">
      <div class="centered-image-container">
        <img src="https://lametamorfosisdelalma.s3.sa-east-1.amazonaws.com/Captura+de+pantalla+2024-03-06+a+la(s)+10.52.10.png" alt="Imagen centrada" class="centered-image">
      </div>
      <div class="description-container">
        <h2><strong>Valentina Moraga Saré</strong></h2>
        <div>
          <p>Psicóloga ❋ Autora ❋ Intérprete de Arquetipos</p>
          <p class="description-small"><small>escribo en <a href="https://www.instagram.com/lametamorfosisdelalma/">@lametamorfosisdelalma</a></small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    justify-content: center;
  }

  .description-container {
    margin-left: 20px; /* Adjust as needed */
  }
}

.description-container {
  padding: 16px;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
  border-radius: 12px;
  margin-top: 20px; /* Adjust as needed */
}

.description-small {
  color: gray;
}

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
  filter: brightness(90%);
}

.centered-image-container {
  position: relative;
  border-radius: 50%;
  overflow: hidden;
}

.centered-image {
  width: 250px;
  height: 250%;
  opacity: 1; /* Opacidad del 40% */
  border-radius: 50%; /* Borde circular */
}
</style>
