<template>
    <div class="container">
        <section class="section">
            <div class="columns is-centered">
                <div v-if="notes.length === 0" class="column">
                    No notes available.
                </div>
                <div v-else>
                    <div v-for="note in notes" :key="note._id"
                        class="column is-12-desktop is-half-tablet is-offset-1-desktop">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">{{ note.title }}</p>
                            </header>
                            <div class="card-content">
                                <div class="content">{{ note.description }}</div>
                            </div>
                            <footer class="card-footer">
                                <a :href="`/notes/${note._id}`" class="card-footer-item">View</a>
                                <a :href="`/notes/edit/${note._id}`" class="card-footer-item">Edit</a>
                                <a @click="deleteNote(note._id)" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const router = useRouter();
const notes = ref([]);

const fetchNotes = async () => {
    try {
        const response = await fetch('http://localhost:8000/notes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        });
        const data = await response.json();
        notes.value = data;
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

onMounted(fetchNotes);

const status = ref('');

const deleteNote = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        });
        notes.value.splice(id, 1);
    } catch (error) {
        console.error('Error deleting notes:', error);
    }
};
</script>

<style lang="scss" scoped></style>