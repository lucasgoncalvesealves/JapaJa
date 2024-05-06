<script>
export default {
  methods: {
    defineTitle() {
      this.$emit('define-title', 'Sobre')
    }
  },
  beforeMount() {
    this.defineTitle()
  }
}
</script>

<template>
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
      <p>Boa procura... e bom apetite!</p>
    </div>
    <div id="logos">
      <img alt="Vue logo" src="@/assets/vuejs-logo.svg" />
      <img alt="Vite logo" src="@/assets/vitejs-logo.svg" />
    </div>
  </div>
</template>

<style scoped>
p {
  font: 14px 'Trebuchet MS';
}
#instrucoes {
  display: flex;
}
#logos {
  display: flex;
}
#logos img {
  width: 125px;
  height: 125px;
  object-fit: contain;
}
/* design responsivo */
@media only screen and (min-width: 414px) {
  #instrucoes {
    flex-direction: column;
  }
  #logos {
    margin: 20px auto 10px auto; 
    flex-direction: row;
  }
  #logos img {
    margin: 0 20px;
  }
}
@media only screen and (min-width: 863px) {
  #instrucoes {
    flex-direction: row;
  }
  #paragrafos {
    width: 500px;
  }
  #logos {
    margin: auto 0 auto auto; 
    flex-direction: column;
  }
  #logos img {
    margin: 10px 0;
  }
}
@media only screen and (min-width: 1270px) {
  #instrucoes {
    flex-direction: row;
  }
  #instrucoes div {
    width: auto;
  }
  #logos {
    text-align: right; 
    flex-direction: row;
  }
  #logos img {
    margin: 0 10px;
  }
}
</style>
