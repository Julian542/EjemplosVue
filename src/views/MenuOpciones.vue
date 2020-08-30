<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/home">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/nuestros-autos/todos">Nuestros Autos</b-nav-item>
        <b-nav-item href="/contacto">Contacto</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Busca un auto" v-model="buscar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="buscarAuto">Buscar</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name:'MenuOpciones',
  data(){
    return{
      buscar:""
    }
  },
  methods:{
    buscarAuto(){
      if(this.buscar != ""){
        window.location.href = "/nuestros-autos/" + this.buscar;
      }else{
        window.location.href = "/nuestros-autos/todos";
      }
    }
  }
}
</script>