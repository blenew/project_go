 <template>
  <div class="inner">
    <Header />
    <section id="content" class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <!-- <component :is="Component" key="route.path" /> -->
          <component :is="Component" />
        </transition> 
      </router-view>
    </section>
    <Footer />
  </div>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<script>
  import Header from './components/layout/Header.vue';
  import Footer from './components/layout/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
  }
</script>