<script></script>

<template>
    <form action="/search" method="get" role="search">
      <div><input type="text" placeholder="buscar já!" name="q" /></div>
      <input type="submit" id="pesquisa" value="" />
    </form>
</template>

<style scoped>
    div {
        height: 82px; 
        text-align: center; 
        margin-right: 7px; 
        padding-left: 7px; 
        border-radius: 7px; 
        background-color: #F63; 
        transition: .25s;
        &:hover {
            background-color: #F99;
        }
        & input {
            border: none; 
            height: 40px; 
            margin: 20px 20px auto 10px; 
            padding-left: 10px; 
            font: normal 18px 'Trebuchet MS'; 
            background-color: #FFF;
            &:hover, &:focus {
                background-color: #FFF;
            }
        }
    }
    #pesquisa {
        background-image: url(../assets/pesquisa.png); 
        width: 82px;
        height: 82px; 
        border: none; 
        margin-right: 7px; 
        transition: .25s;
        &:hover {
            background-image: url(../assets/pesquisa_on.png);
        }
    }
    
    /* design responsivo */
    @media only screen and (min-width: 348px)
    {
        div {
            width: 252px;
            & input {
                width: 205px;
            }
        }
    }
    @media only screen and (min-width: 863px)
    {
        div {
            width: 279px;
            & input {
                width: 229px;
            }
        }
    }
    @media only screen and (min-width: 1270px)
    {
        div {
            width: 694px;
            & input {
                width: 644px;
            }
        }
    }
</style>