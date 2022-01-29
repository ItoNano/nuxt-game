export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'blog',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/scss/main.scss', '@/assets/scss/reset.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: process.env.FIREBASE_API_KEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STOROGA_BUCKET,
                    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                    appId: process.env.FIREBASE_APP_ID,
                    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
                },
                services: {
                    database: true, // Realtime Databaseの使用を宣言
                },
            },
        ],
    ],
    // 全ファイルで読み込まれるので最低限のファイル指定にする
    styleResources: {
        scss: ['@/assets/scss/common.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
