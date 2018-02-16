<template>
    <nav id="sidebar-menu" class="menu sidebar-menu">
            <router-link class="sidebar-menu__item" v-bind:to="'/'">
                <span class="sidebar-menu__icon" >
                    <svg width="45" height="45" viewBox="0 0 32 32"><path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z"></path></svg>
                </span>
            Home
            </router-link>
            <router-link class="sidebar-menu__item" v-bind:to="'/about'">
                <span class="sidebar-menu__icon">
                    <svg width="45" height="45" viewBox="0 0 32 32"><path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28"></path></svg>
                </span>
                About
            </router-link>
            <router-link class="sidebar-menu__item" v-bind:to="'/articles'">
                <span class="sidebar-menu__icon icon--about">
                    <svg width="45" height="45" viewBox="0 0 32 32"><path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z"></path></svg>
                </span>
                Articles
            </router-link>
        </nav>
</template>

<script>
export default {
  name: 'sidebar-menu'
}
</script>
<style lang="scss">
</style>