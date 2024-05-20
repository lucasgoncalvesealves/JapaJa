<script>
  import TheSubheader from "./TheSubheader.vue";
  export default {
    name: "TheNearby",
    components: {
      TheSubheader
    }
  }
</script>

<template>
  <TheSubheader title="Por Perto" />
  <div id="mapa">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14698.842363543252!2d-43.20081595!3d-22.924043150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurante%20japon%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1716193642248!5m2!1spt-BR!2sbr" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style>
  #mapa {
    padding-bottom: 79%;
    position: relative;
    height: 0;
    overflow: hidden;
    & iframe {
        left:0;
        top:0;
        border: 0;
        height: 100%;
        width: 100%;
        position:absolute;
    }
  }
</style>
