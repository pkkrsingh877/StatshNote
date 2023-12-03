<template>
    <div class="columns is-centered">
        <div class="column is-half">
            <h1 class="title">Login Page</h1>
            <form action="">
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="username" value="">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                            Login
                        </button>
                    </p>
                </div>
            </form>
            <NuxtLink to="/auth/signup">Don't have an account yet?</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>