<script>
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import * as bootstrap from 'bootstrap'
export default {
  name: 'AppVue',
  data() {
    question: '';
  },
  watch: {
    activeMenu() {
      console.log('ciao');
      return window.location.hash
    }
  }
}
</script>

<template>
  <body>
    <header>
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <h2><a class="navbar-brand text-white" href="/">BOOLPRESS</a></h2>
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <router-link class="nav-link active text-white" to="/" aria-current="page">HOME<span
                  class="visually-hidden text-white">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/blog">BLOG</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link text-white" to="/contacts">CONTACTS</router-link>
            </li>
          </ul>
          <div class="admin ">
            <h3><a href="http://127.0.0.1:8001/admin" class="btn text-white" target="__blank">
                Admin <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                  <path fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
              </a></h3>
          </div>
        </div>
      </nav>

    </header>




    <main>
      <router-view></router-view>
    </main>

    <footer class="py-5 bg_footer text-light">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h3>More info</h3>
            <ul class="list-unstyled">
              <li><a href="#">Chi siamo</a></li>
              <li><a href="#">Recensioni</a></li>
              <li><a href="#">Lavora con noi</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Services</h3>
            <ul class="list-unstyled">
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Companies</h3>
            <ul class="list-unstyled">
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

  

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
