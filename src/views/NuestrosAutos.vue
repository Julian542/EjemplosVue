<template>
    <b-container fluid>
      <b-row>
          <b-col sm="3" v-for="auto in autos" :key="auto.localidad"> 
              <Auto
                :autoParam="auto"
                ></Auto>
          </b-col>
      </b-row>  
    </b-container>
</template>
<script>
import Auto from './Auto';
export default {
    name:'nuestros-autos',
    components:{
        Auto
    },
    data(){
        return{
            autos:[]
        }
    },
    methods:{
        async getAutos(){
            const parametro = this.$route.params.id;
            if(parametro == undefined || parametro == 'todos'){
                const res = await fetch('/autos.json');
                const jsonr = await res.json();
                console.log(jsonr);
                this.autos = jsonr;
            }else{
               const res = await fetch('/autos.json');
                const jsonr = await res.json();
                const buscados = [];
                const autosBuscados = await jsonr.map( auto =>{
                    if(this.includeCheck(auto.modelo, parametro) || this.includeCheck(auto.marca, parametro) || this.includeCheck(auto.anio, parametro)){
                        buscados.push(auto);
                    }
                });
                console.log(autosBuscados);
                this.autos = buscados;
            }
        },
        includeCheck(auto, buscar){
            const a = auto.toLowerCase();
            const b = buscar.toLowerCase();
            if(a.includes(b)){
                return true;
            }else{
                return false;
            }
        }
    },
    mounted(){
        this.getAutos();
    }
}
</script>