<template>
    <div>
      <b-card
        :title="autoParam.marca"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
      <a :href="'/detalle/'+autoParam.localidad"><img img-top :src="'/img/'+autoParam.imagen" alt="auto"></a>
        <b-card-text>
           <h2>{{autoParam.modelo}} {{autoParam.anio}}</h2>
           <h3 class="color" v-if="autoParam.precio != '0'"> $ {{autoParam.precio}}</h3>
           <h3 class="color" v-else>Consultar Precio con vendedor</h3>
        </b-card-text>
      </b-card>
  </div> 
</template>
<style>
   .color{
     color: orangered;
   }
</style>
<script>
export default {
    name:'Auto',
    props:['autoParam']
}
</script>