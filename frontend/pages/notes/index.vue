<template>
    <div class="container">
        <div class="columns is-centered">
            <div v-if="notes.length === 0">No notes available.</div>
            <div v-else>
                <div v-for="note in notes" :key="note._id" class="column is-9-desktop is-half-tablet is-offset-1-desktop">
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
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

// Notes data
const notes = ref([]);

// Fetch notes from the server
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
        notes.value = data; // Assuming the response is an array of notes
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

// Call fetchNotes when the component is mounted
onMounted(fetchNotes);
</script>

<style lang="scss" scoped></style>