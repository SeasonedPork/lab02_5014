const app = Vue.createApp({
    data() {
        return {
            text: 'something',
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
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
        changeText(){
            if(inStock==true){
                text = 'Add to Cart'
            }
            else
            text ='Out of Stock',
            image ='./assets/images/OutOfStock.jpg'
        }
    }
})