<template>
    <div class="columns is-centered">
        <div class="column is-half">
            <h1 class="title">Create New Note</h1>
            <form action="" @submit="handleCreateNote">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="title" id="title" v-model="title">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Note</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="note" id="description" v-model="description"></textarea>
                    </div>
                </div>

                <div class="control">
                    <button class="button is-primary" type="submit">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const router = useRouter();
const title = ref('');
const description = ref('');

const handleCreateNote = async (e) => {
    e.preventDefault();
    const { data, error, pending } = await useFetch('http://localhost:8000/notes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            title: title.value,
            description: description.value
        }),
        credentials: 'include'
    });
    router.push('/notes');
}
</script>

<style lang="scss" scoped></style>