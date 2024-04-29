<script>
export default {
  methods: {
    defineTitle() {
      this.$emit('defineTitle', 'Contato')
    }
  },
  beforeMount() {
    this.defineTitle()
  }
}
</script>

<template>
  <p>
    Se você é dono de um estabelecimento, você pode anunciá-lo neste site! Se você é consumidor,
    você pode enviar dúvidas, elogios, críticas e sugestões.
  </p>
  <form id="contatoForm">
    <div id="contato">
      <div class="input-select">
        <label for="nome">Seu nome:</label>
        <input type="text" id="nome" class="tamanho" />
        <label for="email">Seu e-mail:</label>
        <input type="text" id="email" class="tamanho" />
        <label for="cliente">Você é:</label>
        <select name="cliente" id="cliente" class="tamanho">
          <option value="">(Escolha)</option>
          <option value="anunciante">Anunciante</option>
          <option value="consumidor">Consumidor</option>
        </select>
      </div>
      <div class="mensagem">
        <label for="mensagem">Mensagem:</label>
        <textarea class="tamanho" rows="7" id="mensagem"></textarea>
      </div>
      <div id="botao-submit">
        <input type="submit" id="enviar" value="" />
      </div>
    </div>
  </form>
</template>

<style scoped>
#contato {
  display: flex;
  width: 100%;
}
#contato label {
  display: inline-block;
  width: 80px;
}
.mensagem {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#enviar {
  width: 82px;
  height: 82px;
  background-image: url(../assets/enviar.png);
  border: none;
  margin-left: 30px;
}
#enviar:hover {
  background-image: url(../assets/enviar_on.png);
}
/* design responsivo */
@media only screen and (min-width: 414px) {
  #contato {
    flex-direction: column;
  }
  #contato div {
    width: auto;
  }
  .tamanho {
    width: 248px;
  }
  #botao-submit {
    margin-top: 10px;
    text-align: right;
  }
}
@media only screen and (min-width: 863px) {
  #contato {
    flex-direction: row;
  }
  .tamanho {
    width: 222px;
  }
}
@media only screen and (min-width: 1270px) {
  #contato {
    flex-direction: row;
  }
  #contato div {
    width: 500px;
  }
  .tamanho {
    width: 270px;
  }
  #botao-submit {
    text-align: left;
  }
}
</style>
