<script>
  import TheSubheader from "./TheSubheader.vue";
  export default {
    name: "TheInstructions",
    components: {
      TheSubheader
    }
  }
</script>

<template>
  <TheSubheader title="Sobre" />
  <div id="instrucoes">
    <div id="paragrafos">
      <p>Encontre seu restaurante japonês no Rio de Janeiro com o Japa Já!</p>
      <p>
        Use nossa ferramenta de busca no topo da página para fazer sua pesquisa, de forma rápida e
        prática.
      </p>
      <p>
        Caso você esteja procurando um restaurante nas suas redondezas, simplesmente acione o botão com o apontador.
      </p>
      <p>
        Caso você possua um estabelecimento, acesse o formulário através do botão com a carta
        e anuncie seu negócio aqui.
      </p>
      <p>
        Caso você seja consumidor, use este mesmo formulário para dúvidas, elogios, críticas e
        sugestões.
      </p>
      <p>E você pode voltar à página inicial a qualquer momento através do símbolo ou do logotipo.</p>
      <p style="margin-bottom: 0;">Boa procura... e bom apetite!</p>
      <span>Design & Development by Gonçalves Alves.</span>
    </div>
    <div id="logos">
      <img alt="Vue logo" src="@/assets/vuejs-logo.svg" />
      <img alt="Vite logo" src="@/assets/vitejs-logo.svg" />
    </div>
  </div>
</template>

<style scoped>
  #instrucoes {
      display: flex;
  }
  #logos {
      display: flex;
      & img {
          width: 125px; 
          height: 125px; 
          object-fit: contain;
      }
  }
  span {
      margin: 14px 0 0 0;
      font-style: italic;
      font-weight: bold;
      color: #F63;
      &:hover {
          color: #F99;
      }
  }

  /* design responsivo */
  @media only screen and (min-width: 414px)
  {
      #instrucoes {
          flex-direction: column;
      }
      #logos {
          margin: 25px auto 10px auto; 
          flex-direction: row;
          & img {
              margin: 0 20px;
          }
      }
      span {
          display: block;
      }
  }
  @media only screen and (min-width: 863px)
  {
      #instrucoes {
          flex-direction: row;
      }
      #paragrafos {
          width: 500px;
      }
      #logos {
          margin: auto 0 auto auto; 
          flex-direction: column;
          & img {
              margin: 10px 0;
          }
      }
      span {
          display: none;
      }
  }
  @media only screen and (min-width: 1270px)
  {
      #instrucoes {
          flex-direction: row;
          & div {
              width: auto;
          }
      }
      #logos {
          text-align: right; 
          flex-direction: row;
          & img {
              margin: 0 5px;
          }
      }
  }
</style>