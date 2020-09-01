<template>
  <div class="home">
      <b-row>
        <b-col sm="3" v-for="planet in planetas" :key="planet.codigo">
           <PlanetCard :planeta="planet"></PlanetCard>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import PlanetCard from './PlanetCard';

export default {
  name: 'Home',
  components: {
     PlanetCard
  },
  data(){
    return{
      planetas:[]
    }
  }
  ,
  mounted(){
    this.getPlanetas();
  },
  methods:{
    async getPlanetas(){
      const res = await fetch('/sistema_solar.json');
      if(this.$route.params.id != 'planetas'){
        const ajson = await res.json();
        const parametro = this.$route.params.id;
        this.planetas = ajson.filter(planeta => planeta.descripcion.toLowerCase().includes(parametro.toLowerCase()));
        console.log(ajson);
      }else{
        const ajson = await res.json();
        this.planetas = ajson;
        console.log(ajson);
      }
    }
  }
}
</script>
