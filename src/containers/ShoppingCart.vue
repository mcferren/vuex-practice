<template>
    <div class="shopping-cart">
        Total Price: ${{fetchTotalPrice.toFixed(2)}}
        <br/>
        <br/>
        <button @click="checkOut">Check Out</button>
        <br/>
        <br/>
        <ledger v-for="(purchaseobj, key) in fetchShoppingCart" :ledgerdata="purchaseobj" :ledgerid="key"/>
    </div>
</template>

<script>

    import { mapGetters }   from 'vuex'

    import router           from '../router';

    import ledger           from '../components/Ledger'

    export default {
        name: 'shoppingCart',
        components: {
            ledger
        },
        methods: {
            checkOut: function (event) { 

                this.$store.dispatch('PROCESS_CHECK_OUT').then(res => {

                    alert("Thank you for Shopping");

                    router.push({ name: 'home' });
                });
            }
        },
        computed: {
            ...mapGetters([
                'fetchShoppingCart',
                'fetchTotalPrice'
            ])
        }
    }
</script>

<style scoped>

    .shopping-cart {
        margin-top:68px;
        float:right;
        width: 200px;
        padding: 20px;
    }

    @media (max-width: 900px), (max-device-width: 900px) {
        .shopping-cart {
            display:none;
        }
    }

    button {
        cursor:pointer;
    }
</style>
