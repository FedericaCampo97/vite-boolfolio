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
    <div class="block_titol text-center text-white">
        <h1>THE PROJECTS</h1>
        <h2>From theory to practice</h2>
    </div>
    <div class="container" style="height: 480px; margin-top: 50px;">
        <div class="row">
            <div class="col d-flex align-items-center justify-content-center text-white text-center">
                <h2>SIX MONTHS OF PROJECTS AND CREATIVITY</h2>
            </div>
            <div class="col">
                <div class="img_developer" style="border-radius: 20px;"></div>
            </div>
        </div>
    </div>
    <div class="container" style="height: 480px; margin-top: 50px;">
        <div class="row">
            <div class="col">
                <div class="img_developer2" style="border-radius: 20px;"></div>
            </div>
            <div class="col p-5 d-flex align-items-center justify-content-center">
                <p class="text-white fs-3 text-center">A structured path to
                    acquire the necessary skills in this dynamic sector, with a wide
                    range of topics,
                    from programming languages ​​and frameworks to responsive design and database management.</p>
            </div>
        </div>
    </div>
</template>