<template>
    <b-container fluid>
        <b-row>
            <b-button variant="danger" @click="$router.go(-1)">Volver</b-button>
        </b-row>
        <b-row>
            <img :src="'/img/'+auto.imagen" alt="xd">
            <h1>{{auto.marca}} {{auto.modelo}}</h1>
        </b-row>
        <b-row>
          <p><b>Año</b>: {{ auto.anio }}</p>
        </b-row>
        <b-row>
          <p><b>Localidad</b>: {{ auto.localidad }}</p>
        </b-row>
        <b-row class="color">
          <div v-if="Number(auto.precio) > 0">
            <p>$ {{ auto.precio }}</p>
          </div>
          <div v-else>
            <p>Consultar</p>
          </div>
        </b-row>
    </b-container>
</template>
<style scoped>
    .color{
        color: orangered;
    }
</style>
<script>
export default {
   name:'Detalle',
   mounted(){
       this.getAuto();
   },
   data(){
       return{
           auto : {}
       }
   },
   methods:{
       async getAuto(){
           const id = this.$route.params.id;
           const res = await fetch('/autos.json');
           const resjson = await res.json();
           const auto = await resjson.find(auto => auto.localidad == id);
           console.log('auto',auto);
           this.auto = auto;
       }
   }
}
</script>