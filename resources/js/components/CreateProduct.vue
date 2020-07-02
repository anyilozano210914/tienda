<template>
    <div>
        <v-container>
            <v-form :lazy-validation="true" v-model="valid" ref="form">
                <v-text-field v-model="name" label="Nombre producto"></v-text-field>
                    <v-text-field v-model="description" label="Descripción"></v-text-field>
                    <v-text-field v-model="img" label="Imagen"></v-text-field>
                    <v-text-field v-model="price" label="Precio" type="number"></v-text-field>
                    <v-btn @click="goToBack">Volver</v-btn>
                    <v-btn color="primary" @click="SaveProduct">Crear</v-btn>
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
    }),
    methods:{
        goToBack(){
            this.$router.push('/')
        },

        SaveProduct(){
            if(!this.name){
                this.notification = true;
                this.message = 'No has introcido el nombre del producto';
                this.color = 'error';
            }else if(!this.description){
                this.notification = true;
                this.message = 'No has introcido la descripcion del producto';
                this.color = 'error';
            }else if(!this.img){
                this.notification = true;
                this.message = 'No has introcido la imagen  del producto';
                this.color = 'error';
            }else if(!this.price){
                this.notification = true;
                this.message = 'No has introcido el precio del producto';
                this.color = 'error';
            }else {
                let data = { name: this.name, description: this.description, img: this.img, price: this.price }
                axios.post('/api/products/SaveProduct', data)
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