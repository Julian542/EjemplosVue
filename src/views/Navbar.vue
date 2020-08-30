<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/grilla/todos">Tema 2</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/detalle/mejoralumno">MEJOR ALUMNO</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form >
          <b-nav-item>Legajo:</b-nav-item>
          <b-form-input size="sm" class="mr-sm-2" v-model="legajo" placeholder="Busca por Legajo"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="submitLegajo">Buscar</b-button>
        </b-nav-form>
        <b-nav-form >
          <b-nav-item>Nombre:</b-nav-item>
          <b-form-input size="sm" class="mr-sm-2" v-model="nombre" placeholder="Busca por Nombre"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="submitNombre">Buscar</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style>
    .form-inline{
        margin: 6px;
    }
</style>
<script>

    export default {
        name:'Navbar',
        data(){
            return{
                nombre:'',
                legajo:''
            }
        },
        methods:{
            submitLegajo(){
                if(this.legajo != ""){
                  window.location.href = "/grilla/legajo/"+this.legajo;
                }else{
                  window.location.href = "/grilla/todos";
                }
            },
            submitNombre(){
                if(this.nombre != ""){
                  window.location.href = "/grilla/nombre/"+this.nombre;
                }else{
                  window.location.href = "/grilla/todos";
                }
            }
        }
    }
</script>