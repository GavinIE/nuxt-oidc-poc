// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: ['@pinia/nuxt'],
    runtimeConfig: {
        production: false,
        authorityUrl: '',
        clientId: '',
        clientSecret: '',
        clientScope: '',
        applicationUrl: '',
    }
})
