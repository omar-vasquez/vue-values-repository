repo = require('../lib/index')

// Without options
Vue.use(repo)


const app = new Vue({
    el: "#app",
    data() {
        return {
            message: "Hola mundo"
        }
    }
});