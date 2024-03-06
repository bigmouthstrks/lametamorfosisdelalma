<template>
  <div class="container">
    <img src="https://i.pinimg.com/originals/36/07/c6/3607c693b6c03fa234b7c0700f965526.jpg" alt="Fondo" class="background">
    <div class="content">
      <div class="centered-image-container">
        <img src="https://lametamorfosisdelalma.s3.sa-east-1.amazonaws.com/Captura+de+pantalla+2024-03-06+a+la(s)+10.52.10.png" alt="Imagen centrada" class="centered-image">
      </div>
      <div class="description-container">
        <h1>Valentina Moraga Saré</h1>
        <div>
          <p>Psicóloga ❋ Autora ❋ Intérprete de Arquetipos</p>
          <div style="padding: 8px">
            <ul class="concepts">
              <li>
                <a class="concept-link" target="_blank" href="https://tr.ee/7pvdsSlydA">
                  ¡Consigue mi primera publicación digital!
                </a>
              </li>
              <li>
                <a class="concept-link" target="_blank" href="https://wa.me/message/DWVY2B3S7XKUC1">
                  Descubre el mensaje de los Arquetipos
                </a>
              </li>
              <li>
                <a class="concept-link" target="_blank" href="https://tr.ee/5IfPj-WhB6">
                  Hablemos, ¡Agenda nuestra sesión!
                </a>
              </li>
            </ul>
          </div>
          <p class="description-small"><small>escribo en <a class="instagram-link" target="_blank" href="https://www.instagram.com/lametamorfosisdelalma/">@lametamorfosisdelalma</a></small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.instagram-link {
  color: #e65218;
  text-decoration: none;
}

.instagram-link:hover {
  text-decoration: none;
  color: #383838;
}

.instagram-link:active {
  text-decoration: none;
}

.instagram-link:visited {
  text-decoration: none;
}

.concept-link {
  color: #383838;
  text-decoration: none;
}

.concept-link:hover {
  text-decoration: none;
  color: #ff976e;
}

.concept-link:active {
  text-decoration: none;
}

.concept:visited {
  text-decoration: none;
}

.concepts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.concepts li {
  padding: 2px;
  padding-left: 1rem;
  text-indent: -0.75rem;
}

.concepts li:nth-child(1)::before {
  content: '📓 ';
}
.concepts li:nth-child(2)::before {
  content: '🦋 ';
}
.concepts li:nth-child(3)::before {
  content: '📲 ';
}

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
  color: #383838;
  background-color: rgba(255, 255, 255, 0.76);
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
