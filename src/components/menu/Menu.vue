<template>
    <nav id="menu">
        <router-link class="menu-item" v-bind:to="'/'">Home</router-link>
        <router-link class="menu-item" v-bind:to="'/about'">About</router-link>
    </nav>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style>
</style>
