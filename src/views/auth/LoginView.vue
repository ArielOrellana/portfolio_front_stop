<template>
    <div class="container" data-aos="flip-left">
        <div class="card shadow-lg bg-body-tertiary rounded margin">
            <div class="card-header bg-dark text-white text-center">
                Login
            </div>
            <div class="card-body text-center">
                <div v-if="error != ''" class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
                <form @submit.prevent="login">

                    <div class="form-floating mb-3">
                        <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                        <button class="btn btn-dark mt-5 me-4">Sign in</button>
                        <router-link to="/register" class="btn btn-dark mt-5">Register</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'login',
    mounted(){
        if(localStorage.getItem('access_token')){
            this.$router.push('admin');
        }
    },
    data() {
        return{
            email:'',
            password:'',
            error: '',
            
        }
    },
    methods:{
        async login(){
            axios.post('auth/login',{
                email: this.email,
                password: this.password,
            }).then( 
                response => {
                    this.error='';
                    localStorage.setItem('access_token', response.data.access_token);
                    this.$router.push('admin');
                }
            ).catch( 
                error => {
                    if(error.response.status == 400){
                        this.error='email o password inválidos';
                    }
                }
            );
            
        }
    }
}
</script>

<style>
body{
    background-color:rgba(68, 68, 68, 0.226);
}

.margin{
    margin: 10rem 15rem;
}
@media (max-width: 991.98px) {
    .margin{
        margin: 10rem 0;
    }
}
</style>