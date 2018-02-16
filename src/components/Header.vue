<template>
	<header id="header-app" class="header">
		<div class="header-app-item">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Tempore, repellat officia. Facere aliquam consequuntur nesciunt asperiores officia impedit sequi dicta.
		</div>
		<div class="header-app-item">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Tempore, repellat officia. Facere aliquam consequuntur nesciunt asperiores officia impedit sequi dicta.
		</div>
		<div class="header-app-item">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Tempore, repellat officia. Facere aliquam consequuntur nesciunt asperiores officia impedit sequi dicta.
		</div>
	</header>
</template>

<script>
	export default {
		name: 'header-app',
		components: {}
	}
</script>

<style lang="scss">
    .header {
        background-color: #eee;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    justify-content: space-between;
	    align-content: space-around;
	    align-items: center;
		&-app-item {
		    flex: 0 1 auto;
		    align-self: stretch;
			padding: 20px;
		}
    }
	.logo {
		width: 75px;
	}
</style>
