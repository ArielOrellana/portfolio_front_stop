<template>
    <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-scrollable modal-lg modal-fullscreen-sm-down">
            <form action="">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 mb-3" v-for="d in dato" :key="d">
                                    <div v-if="d[0]!='updated_at' && d[0]!='created_at' && d[0]!='email_verified_at'">
                                        <div class="card">
                                            <div class="card-body">
                                                <label :for="d[0]" class="form-label">{{d[0]}}</label>
                                                <input type="text" :name="d[0]" :id="d[0]" class="form-control" :placeholder="(d[1])?d[1]:'inserte '+d[0]" :value="d[1]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name:'ModalComp',
    props:['ide'],
    data(){
        return{
            arr:[], 
        }
    },
    computed:{
        dato:function(){
            if(this.ide.admin===0){
                this.ide.admin='codigo';
                this.ide.index='codigo';
            }
            this.arr = Object.entries(this.ide);
            console.log( this.arr);
            return this.arr;
        }
    }
}
</script>

<style>

</style>