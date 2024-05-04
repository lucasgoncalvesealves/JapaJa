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
        Caso você seja dono de um estabelecimento, acesse o formulário através do botão no canto
        superior direito e anuncie seu negócio neste portal.
      </p>
      <p>
        Caso você seja consumidor, use este mesmo formulário para dúvidas, elogios, críticas e
        sugestões.
      </p>
      <p>Boa procura... e bom apetite!</p>
    </div>
    <div id="logo-framework">
      <img alt="Vue logo" src="@/assets/logo.svg" />
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
#instrucoes div {
  width: auto;
}
#logo-framework img {
  width: 125px;
  height: 125px;
  object-fit: contain;
}
/* design responsivo */
@media only screen and (min-width: 414px) {
  #instrucoes {
    flex-direction: column;
  }
  #logo-framework {
    margin: 20px auto 10px auto;
  }
}
@media only screen and (min-width: 863px) {
  #instrucoes {
    flex-direction: row;
  }
  #logo-framework {
    margin: auto;
  }
}
@media only screen and (min-width: 1270px) {
  #instrucoes {
    flex-direction: row;
  }
  #logo-framework {
    text-align: right;
    margin: auto 0 auto auto;
  }
}
</style>
