
import {createRouter, createWebHashHistory} from 'vue-router'

import Index from './pages/Home/Index.vue'
import Sobre from './pages/Sobre.vue'
import FaleConosco from './pages/FaleConosco.vue'
import Promocoes from './pages/Promocoes.vue'

import PizzaSalgadas from './pages/PizzasSalgadas.vue'
import PizzasDoces from './pages/PizzasDoces.vue'
import Refrigerantes from './pages/Refrigerantes.vue'
import Cervejas from './pages/Cervejas.vue'
import Sucos from './pages/Sucos.vue'
import Vinhos from './pages/Vinhos.vue'
import Drinks from './pages/Drinks.vue'

import CardapioSingle from './pages/CardapioSingle.vue'

import Pedidos from './pages/Pedidos.vue'
import EntregaPagamento from './pages/EntregaPagamento.vue'

import PoliticaPrivacidade from './pages/PoliticaPrivacidade.vue'

const routes = [
  {path: '/', component: Index},
  {path: '/sobre', component: Sobre},
  {path: '/fale-conosco', component: FaleConosco},
  {path: '/promo%C3%A7%C3%B5es', component: Promocoes},
  {path: '/promoções', redirect: '/promo%C3%A7%C3%B5es'},

  {path: '/pizzas-salgadas', component: PizzaSalgadas},
  {path: '/pizzas-doces', component: PizzasDoces},
  {path: '/refrigerantes', component: Refrigerantes},
  {path: '/cervejas', component: Cervejas},
  {path: '/sucos', component: Sucos},
  {path: '/vinhos', component: Vinhos},
  {path: '/drinks', component: Drinks},

  {path: '/cardapio-single', component: CardapioSingle},

  {path: '/pedidos', component: Pedidos},
  {path: '/entregapagamento', component: EntregaPagamento},
  {path: '/politica-e-peivacidade', component: PoliticaPrivacidade}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  }
})

export default router
