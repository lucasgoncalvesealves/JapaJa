<script>
export default {
  methods: {
    defineTitle() {
      this.$parent.$emit('define-title', 'Sobre')
    }
  },
  beforeMount() {
    this.defineTitle()
  }
}
</script>

<template>
  <p>Encontre seu restaurante japonês no Rio de Janeiro com o Japa Já!</p>
  <p>
    Use nossa ferramenta de busca no topo da página para fazer sua pesquisa, de forma rápida e
    prática.
  </p>
  <p>
    Caso você seja dono de um estabelecimento, use o botão no canto superior direito para anunciar
    neste portal.
  </p>
  <p>
    Caso você seja consumidor, use este mesmo formulário para dúvidas, elogios, críticas e
    sugestões.
  </p>
  <p>Boa procura... e bom apetite!</p>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
</template>

<style scoped>
p {
  font: 14px 'Trebuchet MS';
}
.logo {
  display: block;
  margin: 0 auto;
}
</style>
