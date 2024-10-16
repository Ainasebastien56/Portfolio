import './assets/main.css'

import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/flowbite-vue/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faBars, faArrowRight, faCheckCircle, 
        faArrowAltCircleDown, faCode, faCloud, faServer, faTh,faGlobe
         } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook, faInstagram, faWhatsapp, faMailchimp} from '@fortawesome/free-brands-svg-icons'

library.add(faXmark, faBars, faArrowRight, faCheckCircle,
             faArrowAltCircleDown, faCode, faCloud,
             faServer, faTh, faGlobe, faGithub, faMailchimp,
             faLinkedin, faFacebook, faInstagram, faWhatsapp,
    );


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
