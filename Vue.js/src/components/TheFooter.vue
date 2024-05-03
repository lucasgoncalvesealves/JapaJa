<script></script>

<template>
  <footer id="menu-mobile">
    <RouterLink to="/"><div id="simbolo"></div></RouterLink>
    <RouterLink to="/contact"><div id="formulario"></div></RouterLink>
    <RouterLink to="/about"><div id="sobre"></div></RouterLink>
  </footer>
  <RouterLink to="/about">
    <footer id="largo">
      © 2012/2024 Japa Já. Todos os direitos reservados. Design by Gonçalves Alves. Conheça aqui a
      ferramenta.
    </footer>
  </RouterLink>
</template>

<style scoped>
#largo {
  height: 22px;
  padding: 6px;
  float: left;
  font-size: 12px;
  background-color: #f63;
  border-radius: 7px;
  margin: 7px 0;
  text-align: center;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
}
#largo:hover {
  background-color: #f99;
}
a footer {
  color: #fff;
}
a footer:hover {
  color: #000;
}
#menu-mobile {
  height: 82px;
  margin: 7px 0;
  flex-direction: row;
  width: 408px;
  float: left;
  justify-content: space-between;
}

/* botões */
#simbolo {
  width: 82px;
  height: 82px;
  margin-right: 7px;
  background-image: url(../assets/simbolo.png);
}
#simbolo:hover {
  background-image: url(../assets/simbolo_on.png);
}
#formulario {
  width: 82px;
  height: 82px;
  background-image: url(../assets/form.png);
  margin-right: 7px;
}
#formulario:hover {
  background-image: url(../assets/form_on.png);
}
#sobre {
  width: 82px;
  height: 82px;
  background-image: url(../assets/sobre.png);
}
#sobre:hover {
  background-image: url(../assets/sobre_on.png);
}

/* design responsivo */
@media only screen and (min-width: 414px) {
  #menu-mobile {
    display: flex;
  }
  #largo {
    display: none;
  }
}
@media only screen and (min-width: 863px) {
  #menu-mobile {
    display: none;
  }
  #largo {
    display: flex;
    width: 811px;
  }
}
@media only screen and (min-width: 1270px) {
  #largo {
    width: 1226px;
  }
}
</style>
