app.component('product-detail', {
	props: {
	    details: {
		type: Array,
		required: true
	    }
	},
    
	template:
	/*HTML*/
	`
	 <ul>
	<li v-for="detail in details">{{detail}}</li> 
	</ul>`
})