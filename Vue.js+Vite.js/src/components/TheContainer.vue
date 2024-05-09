<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    receiveTitle(title) {
      this.title = title
    }
  }
}
</script>

<template>
  <div id="conteudo">
    <div id="subheader">
      <h1>{{ title }}</h1>
      <a id="voltar" href="javascript:history.go(-1)"></a>
    </div>
    <RouterView @define-title="receiveTitle" />
  </div>
</template>

<style>
#conteudo {
  height: auto;
  padding: 20px;
  text-align: left;
  margin-top: 7px;
  background-color: #fff;
  border: 3px solid #f63;
  border-radius: 7px;
  transition: .25s;
  &:hover {
    border: 3px solid #f99;
  }
  & p {
    font: 14px 'Trebuchet MS';
  }
  & form {
    margin-top: 40px;
  }
}
#subheader {
  width: 100%;
  height: 73px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
h1 {
  font: normal 40px 'GalaBold';
  width: auto;
  color: #f63;
  padding-right: 20px;
  margin: 0;
  transition: .25s;
  &:hover {
    color: #f99;
  }
}
#voltar {
  background-image: url(../assets/voltar.png);
  background-size: cover;
  width: 82px;
  height: 30px;
  transition: .25s;
  &:hover {
    background-image: url(../assets/voltar_on.png);
  }
}

/* incorporando a fonte Gala */
@font-face {
  font-family: 'GalaBold';
  src: url('../assets/font/gala_bold-webfont.eot');
  src:
    url('../assets/font/gala_bold-webfont.eot?#iefix') format('embedded-opentype'),
    url('../assets/font/gala_bold-webfont.woff') format('woff'),
    url('../assets/font/gala_bold-webfont.ttf') format('truetype'),
    url('../assets/font/gala_bold-webfont.svg#GalaRegular') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* design responsivo */
@media only screen and (min-width: 414px) {
  #conteudo {
    width: 362px;
  }
}
@media only screen and (min-width: 863px) {
  #conteudo {
    width: 778px;
  }
}
@media only screen and (min-width: 1270px) {
  #conteudo {
    width: 1193px;
  }
}
</style>