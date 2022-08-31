<template>
    <header>
        <div class="inner">
            <h1 v-if="mobile==false || (CurrentRoute=='/' || CurrentRoute=='/home' || CurrentRoute=='/detail' || CurrentRoute=='/product')"><router-link to="/"><img src="../../assets/common/logo.svg" alt="원하고" /></router-link></h1>
            <p v-if="mobile==true && (CurrentRoute=='/' && CurrentRoute=='/home' && CurrentRoute=='/detail' && CurrentRoute=='/product')" id="btn_prev">
                <a href="javascript:" @click="$router.go(-1)">
                    <img src="../../assets/common/ico-22-back.svg" alt="뒤로" />
                    <h1 v-if="CurrentRoute==='/wallet' || CurrentRoute==='/wallet-list' || CurrentRoute==='/wallet-make' || CurrentRoute==='/wallet-viewitem'">홍길동님 지갑</h1>
                    <h1 v-else-if="CurrentRoute==='/myhome' || CurrentRoute==='/myinfo' || CurrentRoute==='/pin'">홍길동님 안녕하세요</h1>
                    <h1 v-else-if="CurrentRoute==='/join'">회원가입</h1>
                </a>
            </p>
            <nav :class="{ active: showMenu }">
                <ul>
                    <li><router-link @click="showMenu=false" :class="{ active: CurrentRoute==='/'||CurrentRoute==='/index' }" to="/">홈</router-link></li>
                    <li><router-link to="">회사소개</router-link></li>
                    <li><router-link to="">서비스</router-link></li>
                    <li><router-link to="">WONT SCAN</router-link></li>
                    <li><router-link to="">로그인</router-link></li>
                </ul>
                <a v-if="mobile" id="btn_close" href="javascript:" @click="showMenu=false"><img src="../../assets/common/ico-24-close.svg" alt="닫기" /></a>
            </nav>
            <p v-if="mobile" id="btn_menu"><a href="javascript:" :class="{ active: showMenu }" @click="showMenu=true"><img src="../../assets/common/ico-24-nav.svg" alt="메뉴" /></a></p>
            <div id="btn_wallet">
                <router-link to="/wallet" v-if="mobile">
                    <img v-if="mobile==true && (CurrentRoute!=='/' && CurrentRoute!=='/detail')" src="../../assets/common/ico-24-wallet-active.svg" alt="지갑" />
                    <img v-else src="../../assets/common/ico-24-wallet.svg" alt="지갑" />
                </router-link>
                <a href="javascript:" :class="{ active: showModal }" @click="showModal = !showModal" v-else>
                    <img v-if="showModal" src="../../assets/common/ico-24-wallet-active.svg" alt="지갑" />
                    <img v-else src="../../assets/common/ico-24-wallet.svg" alt="지갑" />
                    <span>홍길동님 지갑</span>
                </a>
                <router-view v-slot="{ Component }" name="modal">
                    <transition name="fade" mode="out-in">
                        <div id="modal_wallet" v-if="showModal">
                            <component :is="Component" />
                        </div>
                    </transition>
                </router-view>
            </div>
        </div>
    </header>
</template>

<script>
var mobile=0;
function w_resize(){
    if (window.innerWidth >= 1000) {
        mobile=0;
    } else {
        mobile=1;
    }
} w_resize();

export default {
    data() {  
        return {
            CurrentRoute: this.$route.path,
            mobile,
            showModal: false,
            showMenu: false,
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                this.CurrentRoute=to.path;
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
	},
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize(event) {
            w_resize();
            return this.mobile = mobile;               
        }
    }    
}
</script>