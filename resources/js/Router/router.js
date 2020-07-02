const routes = [
    { path: '/', name:'home', component: () => import('../components/home') },
    { path: '/new-product', name: 'new-product', component: () => import('../components/CreateProduct') },
    { path: '/editProduct/:id', name: 'product', component: () => import('../components/EditProduct') },
    { path: '/productDetail/:id', name: 'product', component: () => import('../components/ProductDetail') },
];

export default routes;