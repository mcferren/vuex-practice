import axios from 'axios'

const possiblefood = [
                        "sundaes", "milkshakes", "quesadillas", "cumin", "cilantro", "juice", "parfaits", 
                        "espresso", "cappuccino", "potatoes", "peppers", "avocado", "tacos", "burrito", 
                        "lime", "cheese", "jalapenos", "sushi", "seafood", "vegetables", "rice", "veggies", 
                        "grains", "bean", "portabella", "burgers", "steak", "fish", "chicken", "turkey", 
                        "pork", "sirloin", "masala", "oatmeal", "omelets", "frittatas", "pancakes", 
                        "waffles", "fruit", "yogurt", "noodle", "dumpling", "soup", "falafel", "shawarma", 
                        "sandwich", "hummus", "pizza", "pasta", "pie", "panini", "pastries", "dessert", 
                        "hamburger", "pasta", "breakfast", "desserts", "greens", "pho", "coffee", "salad", 
                        "wrap", "yogurt", "tea"
                     ];

const possibleadj  = [
                        "healthy", "delicious", "tasty", "appetizing", "delectable", "delightful", "enjoyable", 
                        "enticing", "exquisite", "heavenly", "luscious", "pleasant", "rich", "savory", "spicy", 
                        "sweet", "tasty", "yummy", "divine", "good", "mouthwatering", "scrumptious", "tasteful"
                     ];

const pricemin     = 5;
const pricemax     = 15;
const menuquant    = 12;

export const assembleNewMenu = (description, restaurantid) => {
        
    return new Promise((resolve, reject) => {

        let candidateobj = fetchRawDataObj(description);

        axios.all(candidateobj.promisearray).then(results => {

            resolve( shuffle( rollMenuArray(candidateobj.menuitems, results, restaurantid) ) );
        });
    });
}

export const rollRestaurantObjList = (locations) => {

    return locations.reduce((accum, element) => {

                let key = element.name.toLowerCase().replace(/ /g, "_");

                element.fetchkey = key;

                accum[key] = element;

                return accum;

           }, {});
}

const rollMenuArray = (menuitems, fetchresults, fetchkey) => {

    return menuitems.reduce((accum, element, idx) => {

                    let quantity = Math.round( menuquant / menuitems.length ) - 1;

                    while(quantity >= 0) {

                        accum.push({
                            image   :   fetchresults[idx].data.images[quantity] 
                                            ? fetchresults[idx].data.images[quantity].display_sizes[0].uri
                                            : fetchresults[idx].data.images[0].display_sizes[0].uri,
                            restid  :   fetchkey,
                            serial  :   Date.now() + Math.floor((Math.random() * 1000) + 1),
                            price   :   parseFloat((Math.random() * (pricemax - pricemin) + pricemin).toFixed(2)),
                            name    :   (possibleadj[idx + quantity] + " " + element).replace(/\w\S*/g, txt => {

                                            return txt.charAt(0).toUpperCase() +  txt.substr(1).toLowerCase();
                                        })
                        });

                        --quantity;
                    }

                    return accum;
           }, [])
}

const fetchRawDataObj = (description) => {

    return description.split(" ").reduce((accum, element) => {

                let inspectstring = element.replace(/\W+/g, "");

                if(possiblefood.indexOf( inspectstring ) != -1 && 
                   accum.menuitems.indexOf(inspectstring) == -1 &&  // guard set
                   accum.promisearray.length <= 4) { // getty request restriction

                    let fetch = axios.get('https://api.gettyimages.com/v3/search/images' + 
                                          '?fields=preview' + 
                                          '&page_size=10' +
                                          '&phrase=' + inspectstring, 
                                          { headers: { "Api-Key": "fp59ky6yreuw43yuzh58agd6" } });

                    accum.menuitems.push( inspectstring ); 
                    accum.promisearray.push( fetch );  
                }

                return accum;

           }, {
               menuitems           : [],
               promisearray        : []
           });
}

const shuffle = (array) => {

    for (let i = array.length; i; i--) {

        let j = Math.floor(Math.random() * i);

        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }

    return array;
}