<template>
    <div class="columns is-centered">
        <div class="column is-half">
            <h1 class="title">Update Note</h1>
            <form action="" @submit="handleUpdateNote">
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
                    <button class="button is-primary" type="submit">Update</button>
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

// Fetch notes from the server
const fetchNote = async () => {
    try {
        const { id } = useRoute().params;
        const response = await fetch(`http://localhost:8000/notes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        });
        const data = await response.json();
        title.value = data.title;
        description.value = data.description;
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

// Call fetchNotes when the component is mounted
onMounted(fetchNote);

const handleUpdateNote = async (e) => {
    e.preventDefault();
    const { id } = useRoute().params;
    const { message } = await useFetch(`http://localhost:8000/notes/${id}`, {
        method: 'PATCH',
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