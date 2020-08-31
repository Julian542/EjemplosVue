<template>
   <b-container fluid>
       <b-row>
           <b-col sm="6">
               <b-row>
                   <img :src="'/img/'+data.imagen" alt="foto">
               </b-row>
               <b-row>
                   <h1>{{data.signo}}</h1>
               </b-row>
           </b-col>
           <b-col sm="6">
               <b-row>
                   <b-col sm="6"><h4>Elemento:</h4></b-col>
                   <b-col sm="6"><h5>{{data.elemento}}</h5></b-col>
               </b-row>
               <b-row>
                   <b-col sm="6"><h4>Simbolo</h4></b-col>
                   <b-col sm="6">
                       <h5>{{data.simbolo}}</h5>
                   </b-col>
               </b-row>
               <b-row>
                   <b-col sm="6"><h4>Meses: </h4></b-col>
                   <b-col sm="6"><h5 v-for="mes in meses" :key="mes">{{mes}}</h5> </b-col>
               </b-row>
               <b-row>
                   <b-col sm="6"><h4>Descripcion: </h4></b-col>
                   <b-col sm="6"><h5>{{data.descripcion}}</h5></b-col>
               </b-row>
           </b-col>
       </b-row>

   </b-container> 
</template>
<script>
export default {
    name:'Detalle',
    data(){
        return{
            data:{},
            meses:[]
        }
    },
    mounted(){
        this.getSigno();
    },
    methods:{
        async getSigno(){
            const res = await fetch('/zodiaco.json');
            const ajson = await res.json();
            const signo = await ajson.find(signo => signo.id == this.$route.params.id);
            this.getMeses(signo.meses);
            this.data = signo;
        },
        getMeses(arreglo){
            let nuevoArreglo = [];
            arreglo.forEach(mes => {
                console.log('metodo ', mes);
                if(mes == 1){
                    nuevoArreglo.push('Enero')
                }
                if(mes == 2){
                    nuevoArreglo.push('Febrero')
                }
                if(mes == 3){
                    nuevoArreglo.push('Marzo')
                }
                if(mes == 4){
                    nuevoArreglo.push('Abril')
                }
                if(mes == 5){
                    nuevoArreglo.push('Mayo')
                }
                if(mes == 6){
                    nuevoArreglo.push('Junio')
                }
                if(mes == 7){
                    nuevoArreglo.push('Julio')
                }
                if(mes == 8){
                    nuevoArreglo.push('Agosto')
                }
                if(mes == 9){
                    nuevoArreglo.push('Septiembre')
                }
                if(mes == 10){
                    nuevoArreglo.push('Octubre')
                }
                if(mes == 11){
                    nuevoArreglo.push('Noviembre')
                }
                if(mes == 12){
                    nuevoArreglo.push('Diciembre')
                }
                console.log(nuevoArreglo);
                this.meses = nuevoArreglo;
                console.log('mses final', this.meses);
            });
        }
    }
}
</script>