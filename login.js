const {createApp} = Vue
const app = createApp({
    data() {
        return {
            user: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            const apiUrl = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
            axios
                .post(apiUrl, this.user)
                .then((res) => {
                    console.log(123)
                    const { token, expired } = res.data;
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
                    window.location = 'index.html';
                })
                .catch((err) => {
                    console.log(456);
                });
        },
    },
}).mount("#app");