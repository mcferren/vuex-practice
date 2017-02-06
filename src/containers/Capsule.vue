<template>
    <div class="capsule">
        <heading />
        <locations :locationlist="fetchAllRestaurants"/>
        <home-page v-if="path_data == 'home'"/>
        <router-view class="wall"></router-view>
        <shopping-cart v-show="fetchTotalCartItems > 0"/>
    </div>
</template>

<script>

    import store            from '../vuex/store'

    import router           from '../router';

    import { mapGetters }   from 'vuex'

    import heading          from '../components/Heading'
    import locations        from '../components/Locations'
    import homePage         from '../components/HomePage'
    import shoppingCart     from './ShoppingCart'

    export default {
        name: 'capsule',
        components: {
            heading,
            shoppingCart,
            locations,
            homePage
        },
        computed: {
            ...mapGetters([
                'fetchAllRestaurants',
                'fetchTotalCartItems'   
            ]),
            path_data: function() {

                return this.$route.name;
            }
        },
        beforeRouteEnter (to, from, next) {

            store.dispatch('LOAD_RESTAURANT_LIST').then(res => {

                next();

            } );
        }
    }
</script>

<style scoped>

    .wall {
        position:absolute;
        border-left:solid 4px #990000;
        border-right:solid 4px #990000;
        z-index:0;
        min-height:1000px;
    }

    @media (min-width: 600px), (min-device-width: 600px) {
        .wall {
            margin:68px 260px 0;
        }
    }

    @media (max-width: 900px), (max-device-width: 900px) {
        .wall {
            margin:68px 0 0 260px;
        }
    }

    @media (max-width: 600px), (max-device-width: 600px) {
        .wall {
            margin:0 0 0 0;
            padding-bottom:130px;
        }
    }

</style>
