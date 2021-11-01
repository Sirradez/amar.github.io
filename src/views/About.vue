<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Amar Halilovic</strong>, a 4th year student in game design.<br/>
        I love programming games (mostly using Unity) and I love discussing and developing apps and games in general.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">games</router-link> in order to improve my skills in Unity and C#, because I want to make a career out of game development</div>

      <div style="margin-top: 40px;">I'm currently looking for a<strong> graduation assignment</strong> as a game programmer.<br> Please feel free to reach out to me at <a href="mailto:am.halilovic@outlook.com">am.halilovic@outlook.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/profileS.jpg" alt="Avatar of Amar" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>