<script></script>

<template>
    <RouterLink to="/contact">
        <div alt="Formulário"></div>
    </RouterLink>
</template>

<style scoped>
    div {
        width: 82px; 
        height: 82px; 
        background-image: url(../assets/form.png); 
        margin-right: 7px; 
        transition: .25s;
        &:hover {
            background-image: url(../assets/form_on.png);
        }
    }
</style>