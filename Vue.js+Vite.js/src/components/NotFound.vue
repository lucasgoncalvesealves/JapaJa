<script>
  import TheSubheader from "./TheSubheader.vue";
  export default {
    name: "NotFound",
    components: {
      TheSubheader
    }
  }
</script>

<template>
  <TheSubheader title="Erro 404" />
  <span>A página que você procura não existe.</span>
  <p>Ela pode ter sido movida ou removida do sistema.</p>
  <ul>
    <li>Caso você tenha digitado um endereço no navegador, certifique-se que ele está correto;</li>
    <li>
      Caso você tenha clicado em um link defeituoso, entre em contato para que ele possa ser
      consertado;
    </li>
    <li>
      Recomendamos enfaticamente que você dê preferência para a ferramenta de busca no topo da tela.
    </li>
  </ul>
</template>

<style scoped>
span {
  font: bold 18px 'Trebuchet MS';
  color: #f63;
  transition: .25s;
  &:hover {
    color: #f99;
  }
}
p {
  font: 14px 'Trebuchet MS';
  padding-top: 12px;
}
ul {
  padding-inline-start: 32px;
}
li {
  margin-bottom: 7px;
  &::marker {
    color: #f63;
    transition: .25s;
    &:hover {
      color: #f99;
    }
  }
}
</style>
