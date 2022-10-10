import { createApp } from 'vue'

import App from './app.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
