<template>
    <div class="card text-center m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{link.txt}}</h5>
            <p class="card-text">{{ link.des }}</p>
            <router-link :to="link.link" class="btn btn-dark">Entrar <i class="bi bi-caret-right-fill"></i> </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:['link'],
}
</script>

<style>

</style>