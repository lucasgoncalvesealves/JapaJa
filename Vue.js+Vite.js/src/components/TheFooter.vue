<script>
  import ButtonHome from "./ButtonHome.vue";
  import ButtonNearby from "./ButtonNearby.vue";
  import ButtonForm from "./ButtonForm.vue";
  import ButtonAbout from "./ButtonAbout.vue";
  export default {
    name: "TheFooter",
    components: {
      ButtonAbout,
      ButtonHome,
      ButtonNearby,
      ButtonForm
    }
  }
</script>

<template>
  <footer id="menu-mobile">
    <ButtonHome />
    <ButtonNearby />
    <ButtonForm />
    <ButtonAbout />
  </footer>
  <RouterLink to="/about">
    <footer id="largo">
      © 2012/2024 Japa Já. 
      Todos os direitos reservados. 
      Design & Development by Gonçalves Alves. 
      Conheça aqui a ferramenta.
    </footer>
  </RouterLink>
</template>

<style scoped>
    footer {
        color: #FFF;
        transition: .25s;
        &:hover {
            color: #000;
        }
    }
    #largo {
        height: 22px; 
        padding: 6px; 
        float: left; 
        font-size: 12px; 
        background-color: #F63; 
        border-radius: 7px; 
        margin: 7px 0; 
        position: sticky;
        text-align: center; 
        text-decoration: none; 
        flex-direction:column; 
        justify-content: center; 
        transition: .25s;
        &:hover {
            background-color: #F99;
        }
    }
    #menu-mobile {
        height: 82px; 
        padding: 7px;
        width: 348px; 
        float: left; 
        background-color: #FFF;
        position: fixed;
        bottom: 0;
    }
    /* design responsivo */
    @media only screen and (min-width: 348px)
    {
        #largo {
            display: none;
        }
        #menu-mobile {
            display: flex;
        }
    }
    @media only screen and (min-width: 863px)
    {
        #largo {
            display: flex;
            width: 811px;
        }
        #menu-mobile {
            display: none;
        }
    }
    @media only screen and (min-width: 1270px)
    {
        #menu-mobile {
            display: none;
        }
        #largo {
            width: 1226px;
        }
    }
</style>