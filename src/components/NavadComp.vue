<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="border-bottom: solid 2px rgb(41, 41, 41); ">
      <div class="container">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button @click="logout" class="nav-link">Logout</button>
          </li>
          <!-- Agrega más elementos de menú según sea necesario -->
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    methods:{
      logout(){
        localStorage.removeItem('access_token');
        this.$router.push('/login');
      }
    }
    
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para el Navbar */
  </style>