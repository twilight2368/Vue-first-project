<template>
    <div class="main-body">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'Body',   
}

</script>

<style scoped>
.main-body{
    min-height: 100vh;
}
</style>
