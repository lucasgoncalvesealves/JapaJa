<template>
  <div id="container">
    <RouterView />
  </div>
</template>

<style>
#container {
    height: auto; 
    text-align: left; 
    background-color: #FFF; 
    transition: .25s;
    & p {
        font: 14px 'Trebuchet MS';
        margin: 0 auto 1em auto;
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
    src: url('../assets/font/gala_bold-webfont.eot');
    src: url('../assets/font/gala_bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('../assets/font/gala_bold-webfont.woff') format('woff'),
         url('../assets/font/gala_bold-webfont.ttf') format('truetype'),
         url('../assets/font/gala_bold-webfont.svg#GalaRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

/* design responsivo */
@media only screen and (min-width: 414px)
{
    #container {
        width: 362px;
        border: 3px solid #F63; 
        border-radius: 7px;
        overflow: auto;
        height: 100%;
        margin: 96px 0 0 7px;
        padding: 20px;
        &:hover {
            border: 3px solid #F99;
        }
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #FFF;
        } 
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #CCC;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #AAA; 
        }
    }
}
@media only screen and (min-width: 863px)
{
    #container {
        width: 777px;
        height: auto;
        margin: 7px 0 0 0;
    }
}
@media only screen and (min-width: 1270px)
{
    #container {
        width: 1193px;
    }
}
</style>
