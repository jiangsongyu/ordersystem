<template>
	<div>
		<datagrid api="getmenu" params="主菜"></datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../menu/menu.vue'
	//generate three buttons
	//$prent
	export default {
		components: {
			datagrid
		}
	}
</script>