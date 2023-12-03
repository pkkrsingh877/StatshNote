<template>
    <div v-if="note.length === 0">No notes available.</div>
    <div v-else>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{ note.title }}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    {{ note.description }}
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Notes data
const note = ref('');

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
        note.value = data; // Assuming the response is an array of notes
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

// Call fetchNotes when the component is mounted
onMounted(fetchNote);
</script>

<style lang="scss" scoped></style>