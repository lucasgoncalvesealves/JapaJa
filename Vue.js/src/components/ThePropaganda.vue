<template>
    <div id="wrapper">
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
    #wrapper {display:contents;}
    .propaganda {margin: 7px 7px 0 0; float: left;}
    .propaganda img {width: 408px; height: 193px; border-radius: 7px; object-fit: cover; object-position: top left}

    /* design responsivo */
@media only screen and (min-width: 414px)
{ #wrapper {width: 364px;} }
@media only screen and (min-width: 863px)
{ #wrapper {width: 779px;} }
@media only screen and (min-width: 1270px)
{ #wrapper {width: 1194px;} }
</style>