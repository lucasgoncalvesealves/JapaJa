<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
    main {
        text-align: left; 
        padding: 20px;
        background-color: #FFF;
        border: 3px solid #F63; 
        border-radius: 7px;
        transition: .25s;
        & p {
            font: 14px 'Trebuchet MS';
            margin: 0 auto 1em auto;
        }
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
    /* design responsivo */
    @media only screen and (min-width: 348px)
    {
        main {
            width: 302px;
            height: calc(100% - 238px);
            overflow: auto;
            margin: 96px 0 0 7px;
        }
    }
    @media only screen and (min-width: 863px)
    {
        main {
            width: 777px;
            height: auto;
            margin: 7px 0 0 0;
        }
    }
    @media only screen and (min-width: 1270px)
    {
        main {
            width: 1193px;
        }
    }
</style>
