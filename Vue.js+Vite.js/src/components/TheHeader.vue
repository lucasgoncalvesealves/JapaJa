<script>
  import ButtonHome from "./ButtonHome.vue";
  import ButtonLogo from "./ButtonLogo.vue";
  import ButtonNearby from "./ButtonNearby.vue";
  import ButtonForm from "./ButtonForm.vue";
  import SearchBar from "./SearchBar.vue";
  export default {
    name: "TheHeader",
    components: {
      ButtonHome,
      ButtonLogo,
      ButtonNearby,
      ButtonForm,
      SearchBar
    }
  }
</script>

<template>
  <header id="completo">
    <ButtonHome />
    <ButtonLogo />
    <SearchBar />
    <ButtonNearby />
    <ButtonForm />
  </header>
  <header id="reduzido">
    <SearchBar />
  </header>
</template>

<style scoped>
header {
    width: 100%;
    & form {
        display: flex;
    }
}
#reduzido {
    top: 0;
    padding: 7px;
    background-color: #FFF;
    position: fixed;
    z-index: 1;
}
#completo {
    height: 82px;
}
/* design responsivo */
@media only screen and (min-width: 348px)
{
    #completo {
        display: none;
    }
    #reduzido {
        display: flex;
    }
}
@media only screen and (min-width: 863px)
{
    #completo {
        display: flex;
    }
    #reduzido {
        display: none;
    }
}
@media only screen and (min-width: 1270px)
{
    #reduzido {
        display: none;
    }
}
</style>