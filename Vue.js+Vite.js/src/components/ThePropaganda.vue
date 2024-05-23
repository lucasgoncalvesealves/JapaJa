<template>
  <div id="promocoes">
    <div class="propaganda"><img src="@/assets/geisha.png" /></div>
    <div class="propaganda"><img src="@/assets/ie.png" /></div>
    <div class="propaganda"><img src="@/assets/konistore.png" /></div>
    <div class="propaganda"><img src="@/assets/konomiai.png" /></div>
    <div class="propaganda"><img src="@/assets/lapamaki.png" /></div>
    <div class="propaganda"><img src="@/assets/manekineko.png" /></div>
    <div class="propaganda"><img src="@/assets/yakiniku.png" /></div>
    <div class="propaganda"><img src="@/assets/samurai.png" /></div>
    <div class="propaganda"><img src="@/assets/gendai.png" /></div>
    <div class="propaganda"><img src="@/assets/gohan.png" /></div>
    <div class="propaganda"><img src="@/assets/t-maki.png" /></div>
    <div class="propaganda"><img src="@/assets/japax.png" /></div>
  </div>
</template>

<style scoped>
    .propaganda {
        float: left; 
        margin: 7px 7px 0 0; 
        border-radius: 7px; 
        display: flex; 
        overflow: hidden;
        & img {
            width: 100%;
            object-fit: cover; 
            object-position: top left; 
            transition: transform .5s ease;
            &:hover {
                transform: scale(1.2);
            }
        }
    }

    /* design responsivo */
    @media only screen and (min-width: 348px)
    {
        #promocoes {
            flex-direction: column;
            margin: 89px 0 0 7px;
            padding-bottom: 96px;
        }
        .propaganda {
            width: 348px; 
            height: 164px;
        }
    }
    @media only screen and (min-width: 863px)
    {
        #promocoes {
            margin: 0;
            padding: 0;
        }
        .propaganda {
            width: 408px; 
            height: 193px; 
        }
    }
</style>
