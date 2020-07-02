<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" v-model="valid" ref="form">
                <v-text-field v-model="product.name" label="Nombre producto"></v-text-field>
                    <v-text-field v-model="product.description" label="Descripción"></v-text-field>
                    <v-text-field v-model="product.img" label="Imagen"></v-text-field>
                    <v-text-field v-model="product.price" label="Precio" type="number"></v-text-field>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="EditProduct">Editar</v-btn>
            </v-form>
            <v-snackbar v-model="notification" :timeout="timeout" :top="true" :right="true">
                {{ message }}

                <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="notification = false"
                >
                    x
                </v-btn>
                </template>
                </v-snackbar>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        name: '',
        description: '',
        img: '',
        price: '',
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        products: []
    }),
    mounted(){
        this.getProducts();
        this.param = this.$route.params.id
    },
    computed: {
        product: function(){
            let product = {}
            this.products.map(item => {
                if(item.id == this.param){
                    product = item
                }
            })
            return product
        }
    },
    methods:{
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
            this.$router.push('/')
        },

        EditProduct(){
            if(!this.product.name){
                this.notification = true;
                this.message = 'No has introcido el nombre del producto';
                this.color = 'error';
            }else if(!this.product.description){
                this.notification = true;
                this.message = 'No has introcido la descripcion del producto';
                this.color = 'error';
            }else if(!this.product.img){
                this.notification = true;
                this.message = 'No has introcido la imagen  del producto';
                this.color = 'error';
            }else if(!this.product.price){
                this.notification = true;
                this.message = 'No has introcido el precio del producto';
                this.color = 'error';
            }else {
                let data = { id:this.product.id, name: this.product.name, description: this.product.description, img: this.product.img, price: this.product.price }
                axios.post('/api/products/EditProduct', data)
                .then(response => {
                    if(response.data.transaction.status == true){
                        this.notification = true;
                        this.message = response.data.data[0];
                        this.color = 'success';
                        window.location = '/'
                    }else {
                        this.notification = true;
                        this.message = 'No se proceso exitosamente el registro';
                        this.color = 'error'
                    }
                }).catch(error => {
                    console.log(error)
                }) 
            }
        }
    }
}
</script>