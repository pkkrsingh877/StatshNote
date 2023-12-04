<template>
    <div class="container">
        <div class="section">
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
                        <a :href="`/notes/${note._id}`" class="card-footer-item">View</a>
                        <a :href="`/notes/edit/${note._id}`" class="card-footer-item">Edit</a>
                        <a @click="deleteNote(note._id)" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const note = ref('');
const router = useRouter();

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
        if (data.message !== 'Unauthorized: No token provided') {
            note.value = data;
        }
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

onMounted(fetchNote);

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
        const data = await response.json();
        router.push('/');
    } catch (error) {
        console.error('Error deleting notes:', error);
    }
};
</script>

<style lang="scss" scoped></style>