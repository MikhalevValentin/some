<template>
    <div id="btn" class="menu-button" v-on:click="say()">
        <div class='sandwich' v-on:click="toggle" v-bind:class="{'active': expanded}">
					<div class='sw-topper'></div>
					<div class='sw-bottom'></div>
					<div class='sw-footer'></div>
				</div>
        <div class="some" v-bind:class="{'open': expanded}">
					<SidebarMenu></SidebarMenu>
        	<SidebarSocial></SidebarSocial>
        </div>
    </div>
</template>

<script>
import SidebarMenu from './Menu.vue';
import SidebarSocial from './Social.vue';
export default {
  name: 'menu-btn',
	data () {
    return {
      msg: 'home',
			expanded: false
    }
  },
  methods: {
    toggle: function () {
      this.expanded = !this.expanded;
    }
  },
	components: {
  	SidebarMenu, SidebarSocial
  }
}
</script>
<style lang="scss">
	.sandwich {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.sw-topper {
		position: relative;
		top: 7px;
		width: 40px;
		height: 3px;
		background: #fff;
		border: none;
		border-radius: 4px 4px 4px 4px;
		transition: transform 0.5s, top 0.2s;
	/* transition-delay: 0.2s, 0s; */
	}
	.sw-bottom {
		position: relative;
		width: 40px;
		height: 3px;
		top: 15px;
		background: #fff;
		border: none;
		border-radius: 4px 4px 4px 4px;
		transition: transform 0.5s, top 0.2s;
		transition-delay: 0.2s, 0s;
	}
	.sw-footer {
		position: relative;
		width: 40px;
		height: 3px;
		top: 24px;
		background: #fff;
		border: none;
		border-radius: 4px 4px 4px 4px;
		transition: all 0.5s;
		transition-delay: 0.1s;
	}
	.sandwich.active .sw-topper {
		top: 20px;
		transform: rotate(140deg);
	}
	.sandwich.active .sw-bottom {
		top: 17px;
		transform: rotate(-140deg);
	}
	.sandwich.active .sw-footer {
		opacity: 0;
		top: 0;
		transform: rotate(180deg);
	}
</style>