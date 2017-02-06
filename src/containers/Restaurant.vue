<template>
    <div>
        <ul>
            <li><h1>{{rest_data.name}}</h1></li>
            <li>{{rest_data.description}}</li>
            <li>{{rest_data.location}}</li>
        </ul>
        <food v-for="dish in rest_data.menu" :fooddata="dish" />
    </div>
</template>

<script>

    import store    from '../vuex/store';

    import router   from '../router';

    import food     from '../components/Food';

    export default {
        name: 'restaurant',
        components: {
            food
        },
        computed: {
            rest_data: function() {

                return this.$store.getters.fetchRestaurantById(this.$route.params.id);
            }
        },
        beforeRouteUpdate (to, from, next) {

            store.dispatch('MEMOIZE_RESTAURANT_MENU', { restaurantid: to.params.id } )
                 .then(res => { next(); }, 
                       err => { router.push({ name: 'home' }); }
                 );
        },
        beforeRouteEnter (to, from, next) {

            store.dispatch('MEMOIZE_RESTAURANT_MENU', { restaurantid: to.params.id } )
                 .then(res => { next(); }, 
                       err => { router.push({ name: 'home' }); }
                 );
        }
    }
</script>

<style scoped>

    h1 {
        margin:0 0 10px 0;
    }

    ul {
        font-size:24px;
        margin-bottom: 24px;
        padding: 10px 10px 30px 10px;
        list-style:none;
    }

    li:nth-child(2) {
        text-align:justify;
    }

    li:last-child {
        margin-top:8px;
        float:right;
        font-size:14px;
    }
</style>
