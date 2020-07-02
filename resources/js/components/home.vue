<template>
    <div>
        <v-app>
            <v-container>
                <v-btn color="primary" @click="goToNewProduct">
                    Crear producto
                </v-btn>
            <v-data-table :headers="headers" :items="products" class="elevation-1">
                <template v-slot:item.name="{ item }">
                    <span @click="goToProduct(item)">{{ item.name }}</span>
                </template>
                <template v-slot:item.img="{ item }">
                    <img :src="item.img" style="max-width: auto; height: 100px" alt="">
                </template>
                <template v-slot:item.action="{ item }">
                    <v-dialog v-model="showModal" persistent max-width="100%">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" @click="goToEdit(item)" v-on="on" v-bind="attrs">editar</v-btn>
                        </template>
                        <v-card>
                            <v-cart-title>Hola </v-cart-title>
                        </v-card>
                    </v-dialog>
                    <v-btn color="blue" @click="deleteProduct(item)">
                        eliminar
                    </v-btn>
                    <v-btn color="green" @click="goToProduct(item)">
                        ver
                    </v-btn>
                </template>
            </v-data-table>
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
        </v-app>
    </div>
</template>
<script>
export default {
    data(){
        return {
            headers: [
            { text: 'Id', value: 'id' },
            { text: 'Imagen', value: 'img' },
            { text: 'Nombre', value: 'name' },
            { text: 'Descripcion', value: 'description' },
            { text: 'Precio', value: 'price' },
            { text: 'Acciones', value: 'action' }
        ],
        products: [],
        showModal: false,
        notification: false,
        message: '',
        color: '',
        timeout: 6000,
        fab:false,

        }
    },
    mounted(){
        this.getProducts();
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

        goToProduct(item){
            this.$router.push('/productDetail/'+ item.id);
        },

        deleteProduct(item){
            axios.delete('/api/products/deleteProduct/' + item.id)
            .then(res => {
                this.notification = true;
                this.message = res.data;
                this.color = 'success';
                this.getProducts()
            }).catch(err => {
                this.notification = true;
                this.message = 'Ocurrio un error al momento de eliminar el producto.'
                this.color = 'error';
            })
        },
        
        goToNewProduct(){
            this.$router.push('/new-product')
        },

        goToEdit(item){ 
            this.$router.push('/editProduct/'+item.id)
        }
    }
}
</script>