<script></script>

<template>
  <header id="completo">
    <RouterLink to="/"><div id="simbolo"></div></RouterLink>
    <RouterLink to="/"><div id="logotipo"></div></RouterLink>
    <form id="buscaAmplo">
      <div id="digitar"><input type="text" class="preencher" value="buscar já!" /></div>
      <input type="submit" id="pesquisa" value="" href="#" />
    </form>
    <div id="nearby" href="#" alt="Por Perto"></div>
    <RouterLink to="/contact"><div id="formulario" href="../views/contato"></div></RouterLink>
  </header>
  <header id="reduzido">
    <form id="buscaReduz">
      <div id="digitar"><input type="text" class="preencher" value="buscar já!" /></div>
      <input type="submit" id="pesquisa" value="" href="#" />
    </form>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 82px;
}
#simbolo {
  width: 82px;
  height: 82px;
  margin-right: 7px;
  background-image: url(../assets/simbolo.png);
  transition: .25s;
}
#simbolo:hover {
  background-image: url(../assets/simbolo_on.png);
}
#logotipo {
  width: 173px;
  height: 82px;
  margin-right: 7px;
  background-image: url(../assets/logotipo.png);
  transition: .25s;
}
#logotipo:hover {
  background-image: url(../assets/logotipo_on.png);
}
header form {
  display: flex;
}
#digitar {
  height: 82px;
  text-align: center;
  margin-right: 3px;
  padding-left: 7px;
  border-radius: 7px;
  background-color: #f63;
  transition: .25s;
}
#digitar:hover,
#digitar:focus {
  background-color: #f99;
}
.preencher {
  border: none;
  height: 40px;
  margin-top: 20px;
  padding-left: 10px;
  font: normal 18px 'Trebuchet MS';
  background-color: #fff;
}
.preencher:focus,
.preencher:hover {
  background-color: #fff;
}
#pesquisa {
  background-image: url(../assets/pesquisa.png);
  width: 82px;
  height: 82px;
  border: none;
  margin-right: 7px;
  transition: .25s;
}
#pesquisa:hover {
  background-image: url(../assets/pesquisa_on.png);
}
#nearby {
  width: 82px; 
  height: 82px; 
  background-image: url(../assets/nearby.png); 
  margin-right: 7px;
  transition: .25s;
}
#nearby:hover {
  background-image: url(../assets/nearby_on.png);
}
#formulario {
  width: 82px;
  height: 82px;
  background-image: url(../assets/form.png);
  margin-right: 7px;
  transition: .25s;
}
#formulario:hover {
  background-image: url(../assets/form_on.png);
}

/* design responsivo */
@media only screen and (min-width: 414px) {
  #completo,
  #largo {
    display: none;
  }
  #reduzido {
    display: flex;
  }
  #digitar {
    width: 311px;
  }
  .preencher {
    width: 261px;
  }
}
@media only screen and (min-width: 863px) {
  #completo,
  #largo {
    display: flex;
  }
  #reduzido {
    display: none;
  }
  #digitar {
    width: 279px;
  }
  .preencher {
    width: 229px;
  }
}
@media only screen and (min-width: 1270px) {
  #reduzido {
    display: none;
  }
  #digitar {
    width: 694px;
  }
  .preencher {
    width: 644px;
  }
}
</style>
