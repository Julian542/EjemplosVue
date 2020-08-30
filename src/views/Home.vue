<template>
    <b-container fluid>
      <b-row class="titulorow">
        <h1 class="titulo">A TODO MOTOR AUTOS</h1>
      </b-row>
      <b-row>
        <h2 class="descripcion">
          Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí ofertas en Efectivo de
          concesionarios registrados. ¡Súper! 
        </h2>
      </b-row>
      <b-row class="destacados">
        <h2 class="destacx">Destacados</h2>
      </b-row>
      <b-row>
        <b-col sm="3" v-for="auto in autos" :key="auto.localidad">
          <Auto 
          :autoParam="auto"></Auto>
        </b-col>
      </b-row>
    </b-container>
</template>

<style>
  .titulo{
    font-family: Verdana;
    font-size: 25px;
    font-weight: bold;
    color: red;
  }
  .descripcion{
    font-family: Verdana;
    font-size: 15px;
  }
  .destacados{
    background-color: orange;
  }
  .destacx{
    color: white;
  }
</style>

<script>
  import Auto from './Auto';

  export default{
    name:'Home',
    components:{
      Auto
    },
    mounted(){
      this.getAutos();
    },
    data(){
      return{
        autos : []
      };
    },
    methods:{
      async getAutos(){
        const res = await fetch('/autos.json');
        const autos = await res.json();
        const destacados = await autos.filter( auto => auto.destacado == 'Y');
        console.log(destacados);
        this.autos = destacados;
      }
    }
  }
</script>


