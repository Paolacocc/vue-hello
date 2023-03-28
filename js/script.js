const { createApp } = Vue;

createApp( {
    data() {
        return {
            message: "Hello world!",
            header: "ms_header",
            fontStyle: "ms_font",
            img: "img/ross-findon-mG28olYFgHI-unsplash.jpg",
            slogan: "If you are ready, go for it!",
            btn: "btn",
            textAlign: "ms_text"
        }
    },
    methods: {
        reactionBtn() {
            alert("Well done!") 
        }
    }
}).mount("#app");