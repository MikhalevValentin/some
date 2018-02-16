<template>
    <div id="btn" class="menu-button" >
        <span class="sidebar-menu__icon" v-bind:class="active" >
            <svg width="45" height="45" viewBox="0 0 32 32"><path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path> </svg>
        </span>
    </div>
</template>

<script>
export default {
  name: 'menu-btn',
  data () {isActive : true}
}
</script>
<style lang="scss">
</style>