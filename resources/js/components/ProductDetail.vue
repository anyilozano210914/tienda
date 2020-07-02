<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="5">
                    <img :src="product.img" style="max-width: auto; height: 100%;" alt="">
                </v-col>
                <v-col md="7">
                    <h1>{{ product.name }}</h1>
                    <h3>{{ product.description }}</h3>
                    <h3>$ {{ product.price }}</h3>
                    <v-btn color="primary" @click="goToBack">Volver</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        params: '',
        products: []
    }),
    mounted(){
        this.getProducts();
        this.params = this.$route.params.id
    },
    computed: {
        product: function(){
            let product = {}
            this.products.map(item => {
                if(item.id == this.params){
                    product = item
                }
            })
            console.log(this.param)
            return product
        }
    },
    methods: {
        getProducts(){
            axios.get('/api/products/getProducts')
            .then(function(res) {
                if(res.data.transaction.status){
                    this.products = res.data.data
                }else{
                }
            }.bind(this)).catch(error => {
                console.log(error)
            })
        },

        goToBack(){
            window.location = '/'
        }
    },
}
</script>