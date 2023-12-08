<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            base_url: 'http://127.0.0.1:8001',
            blog_api: '/api/testapi',
            projects: []
        }
    },
    mounted() {
        this.getProjects()

    },
    methods: {
        async getProjects() {
            const data = await axios.get(this.base_url + this.blog_api)
            this.projects = data.data.results;

        }
    }
}
</script>
<template>
    <div class="container mt-5 mb-5">
        <h1 class="text-center titol_blog">PROJECTS</h1>

        <div class="row">
            <div class="col" v-for="project in  projects ">
                <div class="card m-3 card_projects demo" style="width: 18rem;">
                    <img :src="project.cover_image" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>
                        <router-link class="btn btn-primary text-white" :to="'/project?id=' + project.id">GO TO
                            PROJECT</router-link>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>