import AntComponentLibrary from '@antcde/component-library'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './lang/language.ts'
import { provideContext } from './plugins/context.ts'
import { vuetify } from './plugins/vuetify.ts'
import 'virtual:uno.css'

createApp(App)
    .use(vuetify)
    .use(i18n)
    .use(AntComponentLibrary)
    .use(provideContext)
    .mount('#app')
