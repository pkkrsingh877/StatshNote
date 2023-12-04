<template>
    <div class="columns is-centered">
        <div class="column is-half">
            <h1 class="title">Login Page</h1>
            <form action="" id="form" @submit="handleLogin">
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="username" id="username" v-model="username">
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
                        <input class="input" type="password" placeholder="password" id="password" v-model="password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" type="submit">
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
import { ref } from 'vue';
const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = async (e) => {
    e.preventDefault();
    const { message } = await useFetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        credentials: 'include'
    });
    router.push('/notes');
}
</script>

<style scoped></style>