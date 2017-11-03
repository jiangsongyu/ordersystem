<template>
    <div>
        <datagrid api="getgoods"></datagrid>
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