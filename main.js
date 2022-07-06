const app = Vue.createApp({
    data() {
        return {
            text: 'something',
            product: 'Shoes',
            brand:'SE 331',
            onsale:true,
            image: './assets/images/socks_green.jpg',
            inStock: false,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' ,quantity: 0},
            ],
            cart: 0

        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        setPic(){
            if(inStock==true){
                text = 'Add to Cart'
            }
            else
            text ='Out of Stock',
            image ='./assets/images/OutOfStock.jpg'
        },
        upateVariant(index){
            this.selectedVariant = index;
        }
    },

    computed: {
        title(){
            if(this.onsale == true){
            return this.brand + '\n' + this.product + '\n'+'is on sale'
            }
            else return this.brand + '' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onsaleCheck(){
            //this is checked condition can be use to make onsale boolean variable to false or true
        }
    }
})