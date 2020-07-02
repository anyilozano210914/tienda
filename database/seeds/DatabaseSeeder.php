<?php

use App\Product;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Product::create([
        //     'name' => 'gel antibacterial',
        //     'description' => 'Aplicara alas manos',
        //     'img' => 'https://www.drogueriascafam.com.co/24415-large_default/comprar-en-cafam-gel-antibacterial-familia-frasco-con-40-ml-precio.jpg',
        //     'price' => '2500'
        // ]);

        // Product::create([
        //     'name' => 'mascarillas',
        //     'description' => 'Usar en el rostro',
        //     'img' => 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/04/15860060216226.jpg',
        //     'price' => '25000'
        // ]);

        // Product::create([
        //     'name' => 'pañitos',
        //     'description' => 'humecta tu colita',
        //     'img' => 'https://d50xhnwqnrbqk.cloudfront.net/images/products/large/Peque%C3%B1in-original-800x800.jpg',
        //     'price' => '10000'
        // ]);

        // Product::create([
        //     'name' => 'copitos',
        //     'description' => 'limpieza en tus oidos',
        //     'img' => 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3488793-750-750/7702560027642.jpg?v=637195356535570000',
        //     'price' => '3000'
        // ]);

        // Product::create([
        //     'name' => 'toallas',
        //     'description' => 'intimamente segura',
        //     'img' => 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3495847-1000-1000/7702027429569.jpg?v=637227485691370000',
        //     'price' => '2500'
        // ]);

        // Product::create([
        //     'name' => 'dolex',
        //     'description' => 'alivia la fiebre y dolor',
        //     'img' => 'https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/ninos2-jarabe/Ninos_455x455.png?auto=format',
        //     'price' => '11400'
        // ]);

        // Product::create([
        //     'name' => 'acetaminofen',
        //     'description' => 'alivia el dolor',
        //     'img' => 'https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwcbd1d3be/images/large/63417-1-ACETAMINOFEN-500MG-TAB-CAJ-X-20-MK.jpg?sw=1000&sh=1000',
        //     'price' => '16000'
        // ]);

        // Product::create([
        //     'name' => 'vasos',
        //     'description' => 'diseño para tu hogar',
        //     'img' => 'https://cdn.totalcode.com/easy/product-zoom/es/set-6-vasos-color-alto-1.jpg',
        //     'price' => '20000'
        // ]);

        // Product::create([
        //     'name' => 'sabanas',
        //     'description' => 'diseño para tu hogar y al dormir',
        //     'img' => 'https://http2.mlstatic.com/juego-sabanas-azul-oscuro-microfibra-semidoble-unicolor-D_NQ_NP_609769-MCO27621786361_062018-F.jpg',
        //     'price' => '45000'
        // ]);

        // Product::create([
        //     'name' => 'servilletas',
        //     'description' => 'diseño para la limpieza',
        //     'img' => 'https://previews.123rf.com/images/artcookstudio/artcookstudio1712/artcookstudio171200391/91123846-servilletas-y-pa%C3%B1os-de-cocina-de-diferentes-colores.jpg',
        //     'price' => '25000'
        // ]);

        User::create([
            'name' => 'anyi lozano',
            'email' => 'arelozano210914@gmail.com',
            'password' => Hash::make('123456')
        ]);


    }
}