<template>
    <div class="row mx-0" data-aos="zoom-in">
        <div v-for="link in links" :key="link.link" class="col-md-auto">
                <CardComp :link="link" />
        </div>
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
export default {
    name: 'ruta',
    props:['links',],
    components: {
        CardComp,
    },
}
</script>

<style>

</style>