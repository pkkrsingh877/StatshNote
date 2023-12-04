<template>
    <div class="container">
        <div class="section">
            <div v-if="notes.length === 0">
                No notes available.
            </div>
            <div v-else>
                <div v-for="note in notes" :key="note._id">
                    <div class="card  mb-4">
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
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
        if (data.message !== 'Unauthorized: No token provided') {
            notes.value = data;
        }
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

<style scoped>
.card {
    min-width: 2rem;
}
</style>