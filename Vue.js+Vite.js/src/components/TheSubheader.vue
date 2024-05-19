<script>
    export default {
        name: "TheSubheader",
        props: {
            title: String
        },
    };
</script>

<template>
    <header id="subheader">
      <h1>{{ title }}</h1>
      <a id="voltar" href="javascript:history.go(-1)"></a>
    </header>
</template>

<style>
    h1 {
        font: normal 40px 'GalaBold'; 
        float: left; 
        width: auto; 
        color: #F63; 
        padding-right: 20px; 
        margin: 0; 
        transition: .25s;
        &:hover {
            color: #F99;
        }
    }
    #subheader {
        width: 100%;
        margin-bottom: 40px;
        display: flex; 
        justify-content: space-between;
    }
    #voltar {
        width: 82px; 
        height: 30px; 
        background-image: url(../assets/voltar.png); 
        background-size: cover; 
        transition: .25s;
        &:hover {
            background-image: url(../assets/voltar_on.png);
        }
    }
    /* incorporando a fonte Gala Bold */
    @font-face 
    {
        font-family: 'GalaBold';
        src: url(../assets/font/gala_bold-webfont.eot);
        src: url(../assets/font/gala_bold-webfont.eot?#iefix) format('embedded-opentype'),
             url(../assets/font/gala_bold-webfont.woff) format('woff'),
             url(../assets/font/gala_bold-webfont.ttf) format('truetype'),
             url(../assets/font/gala_bold-webfont.svg#GalaRegular) format('svg');
        font-weight: normal;
        font-style: normal;
    }
</style>