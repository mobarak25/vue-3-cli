module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/sass/app.scss";
                `
            }
        }
    }
};