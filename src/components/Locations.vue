<template>
    <div class="locations">
        <ul>
            <li v-for="restobj in locationlist">
                <router-link :to="{ name: 'restaurant', params: { id: restobj.fetchkey }}">

                    {{restobj.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'locations',
        props: ['locationlist']
    }
</script>

<style scoped>

    .locations {
        width: 200px;
        padding: 20px;
        float:left;
    }

    @media (min-width: 600px), (min-device-width: 600px) {
        .locations {
            margin-top:68px;
        }
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom:6px;
        font-size:14px;
    }

    @media (max-width: 600px), (max-device-width: 600px) {
        .locations {
            position:fixed;
            bottom:0px;
            width:100%;
            height:130px;
            background: #990000;
            z-index:1;
            text-align:center;
            overflow:scroll;
            padding:0;
        }

        li {
            display:inline-block;
            margin:8px 11px;
        }

        li a {
            color: white;
            text-decoration:none;
            font-size:18px;
        }
    }

</style>
