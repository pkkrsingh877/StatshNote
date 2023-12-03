<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item title navbar-brand" to="/">
                Notes App
            </NuxtLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <NuxtLink class="navbar-item" to="/">
                    Home
                </NuxtLink>
                <NuxtLink class="navbar-item" to="/about">
                    About
                </NuxtLink>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <NuxtLink class="button is-primary" to="/auth/signup">
                            <strong>Sign up</strong>
                        </NuxtLink>
                        <NuxtLink class="button is-light" to="/auth/login">
                            Log in
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div>
        <slot />
    </div>
</template>

<script setup>
const onBurgerClick = () => {
  const navbarBurger = document.querySelector('.navbar-burger');
  const navItems = document.querySelector('#navbarBasicExample');
  navbarBurger.classList.toggle('is-active');
  navItems.classList.toggle('is-active');
};

if (process.client) {
  const navbarBurger = document.querySelector('.navbar-burger');
  navbarBurger.addEventListener('click', onBurgerClick);
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
</style>