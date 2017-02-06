<template>
    <div class="home-page">
        <p>
            Over our phone call, I gathered that operating with the Vue and Vuex framework is an important part of this Front End Developer job. So I took time since the call familiarizing myself with the framework in order to give you confidence in my skilset. I built this sample app that acts as a psuedo food court prototype. You can select menu dishes from a number of restaurants and it will build up a ledger of costs in the Vuex store.
        </p>

        <p> The library draws from a CMU restaurant location api I found from <a href="https://scottylabs.org/dining-api/" target="_blank">ScottyLabs</a>. I create menu selections from words found in the API descriptions and I match them with adjectives and images fetched from the <a href="http://developers.gettyimages.com/en/" target="_blank">Getty Images API</a>.
        </p>

        <p style="text-align:center;width:100%;">
            <a href="https://scottylabs.org/dining-api/" target="_blank" style="display:inline-block;">
                <img src="https://pbs.twimg.com/profile_images/557299806788263937/OtdjyifH.jpeg" width="200px" >
            </a>

            <a href="http://developers.gettyimages.com/en/" target="_blank" style="display:inline-block;">
                <img src="http://resources.mynewsdesk.com/image/upload/t_next_gen_article_large_480/mr5irc3hkwdjaevjmfvv.jpg" width="200px" style="display:inline-block;">
            </a>
        </p>

        <p> 
            Thank you greatly for your time and for considering me for the position.
        </p>

        <p>
            All the best,
        </p>

        <p>
            <h3>Benjamin McFerren</h3>
        </p>

        <p>
            <a href="http://seasidesyndication.com/resume_mcferren.pdf" target="_blank">Resume</a>
        </p>
    </div>
</template>

<script>

    export default {
        name: 'homePage'
    }
</script>

<style scoped>

    .home-page {
        margin:68px 260px 0;
        position:absolute;
        border-left:solid 4px #990000;
        border-right:solid 4px #990000;
        z-index:0;
        min-height:1000px;
        padding:25px;
    }

    p {
        margin-bottom:14px;
    }

    @media (max-width: 900px), (max-device-width: 900px) {
        .home-page {
            margin:68px 0 0 260px;
            padding-bottom:130px;
        }
    }

    @media (max-width: 600px), (max-device-width: 600px) {
        .home-page {
            margin:0 0 0 0;
            padding-bottom:130px;
        }
    }
</style>
