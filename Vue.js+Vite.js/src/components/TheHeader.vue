<script></script>

<template>
  <header id="completo">
    <RouterLink to="/"><div id="simbolo"></div></RouterLink>
    <RouterLink to="/"><div id="logotipo"></div></RouterLink>
    <form id="buscaAmplo" action="/search" method="get" role="search">
      <div id="digitar"><input type="text" placeholder="buscar já!" name="q" /></div>
      <input type="submit" id="pesquisa" value="" />
    </form>
    <RouterLink to="/nearby"><div id="nearby" alt="Por Perto"></div></RouterLink>
    <RouterLink to="/contact"><div id="formulario"></div></RouterLink>
  </header>
  <header id="reduzido">
    <form id="buscaReduz" action="/search" method="get" role="search">
      <div id="digitar"><input type="text" placeholder="buscar já!" name="q" /></div>
      <input type="submit" id="pesquisa" value="" />
    </form>
  </header>
</template>

<style scoped>
header {
    width: 100%;
    & form {
        display: flex;
    }
}
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
#logotipo {
    width: 173px; 
    height: 82px; 
    margin-right: 7px; 
    background-image:url(../assets/logotipo.png); 
    transition: .25s;
    &:hover {
        background-image:url(../assets/logotipo_on.png);
    }
}
#digitar {
    height: 82px; 
    text-align: center; 
    margin-right: 7px; 
    padding-left: 7px; 
    border-radius: 7px; 
    background-color: #F63; 
    transition: .25s;
    &:hover {
        background-color: #F99;
    }
    & input {
        border: none; 
        height: 40px; 
        margin: 20px 20px auto 10px; 
        padding-left: 10px; 
        font: normal 18px 'Trebuchet MS'; 
        background-color: #FFF;
        &:hover, &:focus {
            background-color: #FFF;
        }
    }
}
#pesquisa {
    background-image: url(../assets/pesquisa.png); 
    width: 82px;
    height: 82px; 
    border: none; 
    margin-right: 7px; 
    transition: .25s;
    &:hover {
        background-image: url(../assets/pesquisa_on.png);
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
@media only screen and (min-width: 414px)
{
    #completo, #largo {
        display: none;
    }
    #reduzido {
        display: flex;
    }
    #digitar {
        width: 311px;
        & input {
            width: 261px;
        }
    }
}
@media only screen and (min-width: 863px)
{
    #completo, #largo {
        display: flex;
    }
    #reduzido {
        display: none;
    }
    #digitar {
        width: 279px;
        & input {
            width: 229px;
        }
    }
}
@media only screen and (min-width: 1270px)
{
    #reduzido {
        display: none;
    }
    #digitar {
        width: 694px;
        & input {
            width: 644px;
        }
    }
}
</style>