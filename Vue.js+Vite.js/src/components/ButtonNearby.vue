<script></script>

<template>
    <RouterLink to="/nearby">
        <div alt="Por Perto"></div>
    </RouterLink>
</template>

<style scoped>
    div {
        width: 82px; 
        height: 82px; 
        background-image: url(../assets/nearby.png); 
        margin-right: 7px; 
        transition: .25s;
        &:hover {
            background-image: url(../assets/nearby_on.png);
        }
    }
</style>