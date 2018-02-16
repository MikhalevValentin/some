<template>
  <div id="app">
    <headerApp></headerApp>
    <sidebarApp></sidebarApp>
    <main>
        <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
    import headerApp from './components/Header';
    import sidebarApp from './components/sidebar/Sidebar';
    export default {
      name: 'app',
      components: {
      	headerApp, sidebarApp
      }
    }
</script>

<style lang="scss">
    @import 'styles/main.scss'
</style>
