<template>
    <aside id="sidebar" class="sidebar">
    	<MenuButton></MenuButton>
        <SidebarMenu></SidebarMenu>
        <SidebarSocial></SidebarSocial>
    </aside>
</template>

<script>
import SidebarMenu from './Menu.vue';
import SidebarSocial from './Social.vue';
import MenuButton from './MenuButton.vue';
export default {
  name: 'sidebar',
  components: {
        SidebarMenu, SidebarSocial, MenuButton
    }
}
</script>
<style lang="scss">
</style>
