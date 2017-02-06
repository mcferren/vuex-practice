<template>
    <div class="food" :style="{ backgroundImage: 'url(' + fooddata.image + ')' }">
        <ul>
            <li>Name: {{fooddata.name}}</li>
            <li>Price: ${{fooddata.price.toFixed(2)}}</li>
        </ul>
        <hr>
        <button @click="addToCart">Add to Cart</button>
    </div>
</template>

<script>
    export default {
        name: 'food',
        props: ['fooddata'],
        methods: {
            addToCart () {
                this.$store.commit('ADD_TO_CART', { order: this.fooddata, id: this.fooddata.serial });
            }
        }
    }
</script>

<style scoped>

    div {
        display: inline-block;
        width: 20%;
        overflow: hidden;
        border: solid 4px #990000;
        border-radius: 15px;
        padding: 14px;
        margin:3%;
        background-size: cover;                     
        background-repeat: no-repeat;
        background-position: center center;  
    }

    ul {
        list-style:none;
    }

    button {
        cursor:pointer;
    }
</style>
