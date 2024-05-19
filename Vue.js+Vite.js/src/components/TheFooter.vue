<script></script>

<template>
  <footer id="menu-mobile">
    <RouterLink to="/"><div id="simbolo" alt="Página Inicial"></div></RouterLink>
    <RouterLink to="/nearby"><div id="nearby" alt="Por Perto"></div></RouterLink>
    <RouterLink to="/contact"><div id="formulario"  alt="Contato"></div></RouterLink>
    <RouterLink to="/about"><div id="sobre" alt="Sobre"></div></RouterLink>
  </footer>
  <RouterLink to="/about">
    <footer id="largo">
      © 2012/2024 Japa Já. Todos os direitos reservados. Design by Gonçalves Alves. Conheça aqui a
      ferramenta.
    </footer>
  </RouterLink>
</template>

<style scoped>
  #simbolo {
      width: 82px; 
      height: 82px; 
      margin-right: 7px; 
      background-image: url(../assets/simbolo.png); 
      transition: .25s;
      &:hover {
          background-image:url(../assets/simbolo_on.png);
      }
  }
  #nearby {
      width: 82px; 
      height: 82px; 
      background-image: url(../assets/nearby.png); 
      margin-right: 7px; 
      transition: .25s;
      &:hover {
          background-image: url(../assets/nearby_on.png);
      }
  }
  #formulario {
      width: 82px; 
      height: 82px; 
      background-image: url(../assets/form.png); 
      margin-right: 7px; 
      transition: .25s;
      &:hover {
          background-image: url(../assets/form_on.png);
      }
  }
  #sobre {
      width: 82px; 
      height: 82px; 
      background-image: url(../assets/sobre.png); 
      transition: .25s;
      &:hover {
          background-image: url(../assets/sobre_on.png);
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
      text-align: center; 
      text-decoration: none; 
      flex-direction: column; 
      justify-content: center; 
      transition: .25s;
      &:hover {
          background-color: #F99;
      }
  }
  a footer {
      color: #FFF;
      &:hover {
          color: #000;
      }
  }
  #menu-mobile {
      height: 82px; 
      padding: 7px 0; 
      flex-direction: row; 
      width: 408px; 
      float: left; 
      justify-content: space-between;
      position: sticky;
      bottom: 0;
      background-color: #FFF;
  }

  /* design responsivo */
  @media only screen and (min-width: 414px)
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
