import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import './css/reset.css';
import './css/type.css';
import './css/layout.css';
import './css/page.css';

import App from './App.vue';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';
import Wallet from './views/Wallet.vue';
import WalletList from './views/WalletList.vue';
import WalletMake from './views/WalletMake.vue';
import WalletViewItem from './views/WalletViewItem.vue';
import Join from './views/Join.vue';
import MyHome from './views/MyHome.vue';
import MyInfo from './views/MyInfo.vue';
import Pin from './views/Pin.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },        
        {
            path: '/detail',
            components: {
                default: Detail,
                modal: Wallet
            },
            children: [
                {
                    path: '/',
                    components: {
                        default: Detail,
                        modal: Wallet
                    }
                },                
                {
                    path: 'wallet',
                    components: {
                        default: Detail,
                        modal: Wallet
                    }
                },
                {
                    path: 'wallet-list',
                    components: {
                        default: Detail,
                        modal: WalletList
                    }
                },                
            ],            
        },
        {
            path: '/wallet',
            component: Wallet
        },
        {
            path: '/wallet-list',
            component: WalletList
        },
        {
            path: '/wallet-make',
            component: WalletMake
        },
        {
            path: '/wallet-viewitem',
            component: WalletViewItem
        },
        {
            path: '/join',
            component: Join
        },
        {
            path: '/myhome',
            component: MyHome
        },
        {
            path: '/myinfo',
            component: MyInfo
        },                   
        {
            path: '/pin',
            component: Pin
        },  
        {
            path: '/test',
            components: {
                default: Home,
                modal: Wallet
            }
        },                                             
    ],
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    },
});

const app = createApp(App);
app.use(router);
app.mount('#wrapper');
