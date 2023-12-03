<template>
    <nav class="">
        <h1 class="h-1 p-3">Notes App</h1>
        <ul class="flex flex-col lg:flex-row">
            <li class="p-3">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="p-3">
                <NuxtLink to="/auth/login">Login</NuxtLink>
            </li>
            <li class="p-3">
                <NuxtLink to="/about">About</NuxtLink>
            </li>
        </ul>
    </nav>

    <div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
</style>