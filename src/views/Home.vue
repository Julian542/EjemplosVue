<template>
  <b-row>
    <b-col sm="3" v-for="sign in data" :key="sign.id">
      <SignoCard :signo="sign"></SignoCard>
    </b-col>
  </b-row>
</template>

<script>
import SignoCard from './SignoCard';
export default {
  name: 'Home',
  mounted(){
    this.getSignos();
  },
  data(){
    return{
      data : []
    }
  },
  methods:{
    async getSignos(){
      const parametro = this.$route.params.id;
      console.log('parametro',parametro);
      if(parametro != 'todos'){
        const res = await fetch('/zodiaco.json');
        const conver = await res.json();
        this.buscaPorMes(conver, parametro);
      }else{
        const res = await fetch('/zodiaco.json');
        const conver = await res.json();
        this.data = await conver;
        console.log(conver);
      }
    },
    buscaPorMes(signos, parametro){
      let nuevoArray = [];
      for (let index = 0; index < signos.length; index++) {
         for (let j = 0; j < signos[index].meses.length; j++) {
           if(signos[index].meses[j] == parametro){
             nuevoArray.push(signos[index]);
           }
        }  
      }
      this.data = nuevoArray;
    }
  },
  components:{
    SignoCard
  }
}
</script>
