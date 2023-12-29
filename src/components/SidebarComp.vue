<template>
  <aside id="sidebar" :class="{'active': sidebarOpen}" class="bg-dark">
    
    <!-- Botón para achicar/agrandar el Sidebar -->
    
    <!-- Contenido del Sidebar -->
    <div class="position-sticky" data-aos="fade-right">
      <ul class="nav flex-column simple-list-example-scrollspy">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link text-white"><h2><img src="../assets/arieldev.png" alt="">ArielDev</h2></router-link>
        </li>
        <li v-for="link in links" :key="link.link" class="nav-item">
          <router-link :to="link.link" class="nav-link text-white text"><i :class="link.class" class=" me-2 a"></i>{{link.txt}}</router-link>
        </li>
        
        <!-- Agrega más elementos de menú según sea necesario -->
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props:['links','sidebarOpen',],
  
};
</script>

<style scoped>
/* Estilos personalizados para el Sidebar */
#sidebar {
  width: 70px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  border-right: solid 2px rgb(41, 41, 41);
  overflow-y: auto;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
  padding: 20px;
  z-index: 500;
  transition: all 0.3s  ease-in;
  
}
#sidebar img{
  left: -20px;
  margin-top: -15px;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
}
#sidebar.active {
  width: 250px;
  display: flex;
  margin-right: 50px;
  height: 100% !important;
  }
/* Estilos adicionales para ocultar el Sidebar en pantallas pequeñas */
@media (max-width: 991.98px) {
  #sidebar {
    left: 0;
  }
  #sidebar.active {
    left: -250px;
  }
}

.nav-item {
  margin-bottom: 10px;
  align-items: center;
}

#sidebar.active .text{
  font-size: medium;
  }
#sidebar .text{
  font-size: 0;
  transition: all 0.2s ease-in;
}
#sidebar .a{
  font-size: medium;
  margin-left: -10px;
  transition: all 0.2s ease-in;
}
#sidebar h2{
  font-size: 0;
  transition: all 0.2s ease-in;
}
#sidebar.active h2{
  position: relative;
  font-size: 200%;
}

/* Estilos adicionales según tus necesidades */
</style>