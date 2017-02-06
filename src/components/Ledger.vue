<template>
    <div class="ledger">
        <ul>
            <li>{{ledgerdata.foodname}}</li>
            <li>Amount: ${{totalcost.toFixed(2)}}</li>
            <li>Quantity: {{ledgerdata.orderlist.length}}
        </ul>
        <hr>
        <button @click="removeFromCart">Remove From Cart</button>
    </div>
</template>

<script>
    export default {
        name: 'ledger',
        props: ['ledgerdata', 'ledgerid'],
        methods: {
            removeFromCart () {
                this.$store.commit('REMOVE_FROM_CART', { id: this.ledgerid });
            }
        },
        computed: {
            totalcost() {
                return this.ledgerdata.amount * this.ledgerdata.orderlist.length;
            }
        },
    }
</script>

<style scoped>

    .ledger {
        background: #990000;
        padding: 8px;
        color: white;
        font-family: arial;
        margin-bottom: 10px;
        border-radius: 8px;
        width:166px;
    }

    li {
        margin-bottom:5px;
        font-size:12px;
    }

    li:first-child {
        font-size:16px;
    }

    button {
        cursor:pointer;
    }
</style>
