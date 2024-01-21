const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            apiUrl: 'https://vue3-course-api.hexschool.io',
            api_path: 'wei123',
            products: [],
            tempProduct: {},

        };
    },

    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios
                .post(url)
                .then(() => {
                    this.getProducts();
                })
                .catch((err) => {
                    alert(err.response.data.message);
                    window.location = 'login.html';
                });
        },
        getProducts() {
            const url = `${this.apiUrl}/api/${this.api_path}/admin/products/all`;
            axios.get(url)
                .then((res) => {
                    this.products = res.data.products;
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },

    
    },


    mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
},
}).mount('#app');