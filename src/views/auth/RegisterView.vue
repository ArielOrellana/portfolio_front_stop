<template>
    <div class="container" data-aos="flip-left">
        <div class="card shadow-lg bg-body-tertiary rounded margin">
            <div class="card-header bg-dark text-white text-center">
                Register
            </div>
            <div class="card-body text-center">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="name">
                    <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                    <router-link to="/login" class="btn btn-dark mt-5 me-4">Sign in</router-link>
                    <button class="btn btn-dark mt-5">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
body{
    background-color:rgba(68, 68, 68, 0.226);
}

.margin{
    margin: 5rem 15rem;
}
@media (max-width: 991.98px) {
    .margin{
        margin: 5rem 0;
    }
}
</style>