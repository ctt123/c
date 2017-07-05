import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/HomePage'
import HomePageUser from '@/components/HomePageUser/HomePage'
import HomePageContent from '@/components/HomePageContent/HomePageContent'
import Logined from '@/components/Logined/Logined'
import Personality from '@/components/Personality/Personality'
// import Login from '@/components/Login/Login'
import ServiceTopic from '@/components/ServiceTopic/ServiceTopic'
import ItemDetail from '@/components/ItemDetail/ItemDetail'
// import Login from '@/components/Login/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      components: {
        default: HomePage
      },
      children: [{
        path: '',
        component: HomePageContent
      }]
    },
    {
      path: '/user',
      name: 'HomePageUser',
      components: {
        default: HomePageUser
      },
      children: [{
        path: '',
        component: HomePageContent
      }, {
        path: 'serviceTopics/:serviceTopic',
        name: 'serviceTopics',
        components: {
          default: ServiceTopic
        }
      }, {
        path: '/itemDetail/:id',
        name: 'itemDetail',
        component: ItemDetail
      }, {
        path: 'personality',
        name: 'personality',
        component: Personality
      }

      ]
    },
    {
      path: '/user',
      name: 'HomePaged',
      components: {
        default: HomePageContent,
        Header: Logined
      }
    },
    {
      path: '/serviceTopics/:serviceTopic',
      name: 'serviceTopics',
      components: {
        default: ServiceTopic
      }
    },
    {
      path: '/itemDetail/:id',
      name: 'itemDetail',
      component: ItemDetail
    }
  ]
})
