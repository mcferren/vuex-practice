<template>
    <div class="heading">
        <router-link :to="{ name: 'home'}">
            <img src="../assets/cmu-computer-science.png">
        </router-link>
        <h3>McFerren Interview Vuex Sample Application</h3>
    </div>
</template>

<script>
    export default {
        name: 'heading'
    }
</script>

<style scoped>

    .heading {
        background: #990000;
        width:100%;
        overflow:hidden;
        height:68px;
        z-index:1;
    }

    @media (min-width: 600px) {
        .heading {
            position:fixed;
        }
    }

    img {
        margin:6px;
        cursor:pointer;
    }

    h3 {
        float:right;
        color:white;
        font-family:Arial Narrow;
        font-weight:100;
        font-size:24px;
        margin: 10px;
    }
</style>
