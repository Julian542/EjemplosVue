<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/home/planetas">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/ordenados">Ordenados por Diametro</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar" v-model="buscar"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="buscador">Buscar</b-button>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{
            buscar:''
        }
    },
    methods:{
        buscador(){
            if(this.buscar == ''){
                window.location.href = '/home/planetas';
            }else{
                 window.location.href = `/home/${this.buscar}`;
            }
        }
    }
}
</script>