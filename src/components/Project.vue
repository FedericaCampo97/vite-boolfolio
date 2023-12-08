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
        const id_project = this.$route.query.id
        console.log(id_project);


    },
    methods: {
        async getProjects() {
            const data = await axios.get(this.base_url + this.blog_api)
            this.projects = data.data.results;
            console.log(this.projects);
        }
    }
}
</script>
<template>
    <div class="text-white">ciaoo</div>
</template>