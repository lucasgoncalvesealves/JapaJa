<script></script>

<template>
    <RouterLink to="/about">
        <div alt="Sobre"></div>
    </RouterLink>
</template>

<style scoped>
    div {
        width: 82px; 
        height: 82px; 
        background-image: url(../assets/sobre.png); 
        transition: .25s;
        &:hover {
            background-image: url(../assets/sobre_on.png);
        }
    }
</style>