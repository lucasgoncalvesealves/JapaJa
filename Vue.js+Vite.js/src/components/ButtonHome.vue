<script></script>

<template>
    <RouterLink to="/">
        <div alt="Página Inicial"></div>
    </RouterLink>
</template>

<style scoped>
    div {
        width: 82px; 
        height: 82px; 
        margin-right: 7px; 
        background-image: url(../assets/simbolo.png); 
        transition: .25s;
        &:hover {
            background-image:url(../assets/simbolo_on.png);
        }
    }
</style>