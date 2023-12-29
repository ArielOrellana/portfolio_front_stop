<template>
 <div class="" >
    <!-- Navbar -->
    <NavadComp data-aos="fade-down" />
    
    <!-- Contenido principal con Sidebar -->
    <div id="content" class="d-flex">
      <!-- Sidebar -->
      <div class="">
        <div class=" boton-flotante " :class="{'boton-flotante-active': sidebarOpen}">
          <button @click="toggleSidebar" class="boton">
            <i :class="{'bi bi-caret-left-fill': sidebarOpen, 'bi bi-caret-right-fill': !sidebarOpen}"></i>
          </button>
        </div>
        <SidebarComp :links="links" :sidebarOpen="sidebarOpen" />
      </div>
      
      <!-- Contenido principal -->
      <div class="container" :class="{'content-shifted': sidebarOpen}" >
          <!-- Tu contenido principal aquí -->
          <router-view :links="links" :user="user"></router-view>

      </div>
    </div>
  </div>
</template>
<script>
import NavadComp from '../components/NavadComp.vue';
import SidebarComp from '../components/SidebarComp.vue';
import axios from 'axios';
import tokenService from '@/api';
export default {
  name: 'AdminView',
  components: {
    SidebarComp,
    NavadComp
  },
  data(){
    return{
      sidebarOpen: true,
      user:'',
      links: [
        {
          link: '/admin/usuario',
          class: 'bi bi-person',
          des: 'Listas de Usuarios',
          txt:'Usuario'
        },
        {
          link: '/admin/proyectos',
          class: 'bi bi-stickies',
          des: 'Listas de Proyectos',
          txt:'Proyectos'
        },
        {
          link: '/admin/estudios',
          class: 'bi bi-backpack3',
          des: 'Listas de Estudios',
          txt:'Estudios'
        },
        {
          link: '/admin/experiencia',
          class: 'bi bi-person-workspace',
          des: 'Listas de usuarios',
          txt:'Experiencia'
        },
        {
          link: '/admin/habilidades',
          class: 'bi bi-clipboard2-check',
          des: 'Listas de Habilidades',
          txt:'Habilidades'
        },
        {
          link: '/admin/hab-tech',
          class: 'bi bi-code-square',
          des: 'Listas de Habilidades Tech',
          txt:'Habilidades Tech'
        },
      ]
    };
  },
  mounted(){
    if(!localStorage.getItem('access_token')){
      console.log(localStorage.getItem('access_token'));
      return this.$router.push('/login');
    }
  },
  async created(){
    var error='';
    var response = axios.post('auth/me').then(
      res=>{
        this.user=res.data;
      }
    ).catch(
      err=>{
        if (err.response.status === 401) {
          // El token de acceso ha expirado. Intenta renovarlo.
          try {
            const newAccessToken = tokenService.refreshToken();
            // Actualiza el token de acceso en las cabeceras de Axios.
            this.$axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
            console.log('si');
            // Almacenar el nuevo token de acceso.
            // Redirigir al usuario a la página de inicio.
            this.$router.push('/admin');
          } catch (refreshError) {
            console.error('Error de renovación de tokens:', refreshError);
          }
        }
      }
    );
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
  computed: {
    
  }
}

</script>
<style scoped>

.container{
  margin: auto;
  max-width: 895px;
  transition: all 0.3s  ease-in;
}
.content-shifted {
  margin-left: 350px; /* Ajusta el margen izquierdo cuando el Sidebar está abierto */
  transition: all 0.3s  ease-in; /* Agregamos una transición para suavizar el movimiento */ 
}
.boton-flotante{
  position: fixed; 
  margin-left: 40px; 
  margin-top: 500px;
  transition: all 0.3s ease-in;
  overflow-y: auto;
  z-index: 50000;
  border: none;
}
.boton-flotante-active{
  margin-left: 220px;
}
.boton{
  border-radius: 50%;
  background-color: rgb(29, 29, 29);
  border: 1px solid rgba(12, 12, 12, 0.349);
  align-items: center;
  color: white;
  padding: 5px 9px;
}
.boton:hover{

  background-color: rgb(14, 14, 14);
  border: 1px solid rgba(12, 12, 12, 0.705);
  color: rgba(255, 255, 255, 0.562);
}
.boton:active{
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(12, 12, 12, 0.932);
  color: rgb(196, 196, 196);
  box-shadow: 0 0 15px #0000008f;
}

@media (max-width: 991.98px) {
  .container{
      margin: 4em auto;
  }
  .content-shifted {
    margin-left: 0;
  }
  .boton-flotante{
    margin-left: 40px; 
    margin-top: 400px;
  }
  .boton-flotante-active{
    margin-left: -10px;
    margin-top: 400px;
  }
}
</style>