<template>
    <div>
        <div class="card mb-3 m-2" style="width: 100%;" data-aos="zoom-in">
            <div class="card-header text-white bg-dark">
                <div class="row">
                    <div class="col-6"><h3>Lista Usuarios</h3></div>
                    <div class="col-6">
                        <div class="d-flex">
                            <router-link to="/admin/usuario/crear" class="btn btn-outline-success me-2" type="submit">Crear</router-link>
                            <input v-model="buscar" class="form-control me-2" type="text" placeholder="Buscar Email" aria-label="Search" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive" >
                    <table class="table table-dark table-striped" style="margin-top: 15px; font-size: small; ">
                        <thead>
                            <tr style="text-transform: uppercase;">
                                <th scope="col">id</th>
                                <th scope="col">index</th>
                                <th scope="col">imagen</th>
                                <th scope="col">nombre</th>
                                <th scope="col">admin</th>
                                <th scope="col">profesión</th>
                                <th scope="col">descripción</th>
                                <th scope="col">cumpleaños</th>
                                <th scope="col">email</th>
                                <th scope="col">LinkedIn</th>
                                <th scope="col">GitHub</th>
                                <th scope="col">GitLab</th>
                                <th scope="col" colspan="2" class=""></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="cargando">
                                <td class="text-center" colspan="13">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </td>
                            </tr>
                            <tr v-for="d in filteredDato" :key="d" >
                                <td>{{d.id}}</td>
                                <td>{{d.index}}</td>
                                <td>{{d.image_profile}}</td>
                                <td>{{d.name}}</td>
                                <td>{{d.admin}}</td>
                                <td>{{d.profession}}</td>
                                <td>{{d.description}}</td>
                                <td>{{d.birtday}}</td>
                                <td>{{d.email}}</td>
                                <td>{{d.linkedin}}</td>
                                <td>{{d.github}}</td>
                                <td>{{d.gitlab}}</td>
                                <td><button type="button" @click="getId(d)"  class="btn btn-outline-primary d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar <i class="bi bi-pencil ms-2"></i></button></td>
                                <td>
                                    <button v-if="d.id != user.id && !d.admin" type="button" class="btn btn-outline-danger d-flex">Eliminar<i class="bi bi-trash ms-2"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div>
            <ModalComp :ide="id_user"/>
        </div>
    </div>
</template>

<script>
import ModalComp from "@/components/ModalComp.vue";
import axios from 'axios';
export default {
    name:'user',
    components: {
        ModalComp,
    },
    props:['user'],
    data(){
        return{
            dato: [],
            cargando:false,
            id_user:[],
            buscar:'',
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            this.cargando = true;
            axios.get('user').then(
                res =>{
                    this.dato =  Array.isArray(res.data) ? res.data : [res.data];
                    this.cargando = false;
                }
            )
        },
        getId(id){
            this.id_user=id;
        }
    },
    computed: {
        filteredDato:function(){
            return this.dato.filter((d) => {
                return d.email.match(this.buscar);
            });
        }
    }
}
</script>

<style scoped>

</style>