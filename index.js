Vue.createApp({
    data() {
        return {
            counter : 0,
        }
    },
    methods: {
        // In the browsers console window (sources tab):
        //   change the increment to this.count += 10
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
}).mount("#app")