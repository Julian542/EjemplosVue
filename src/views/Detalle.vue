<template>
    <b-container fluid>
        <b-row>
            <b-col sm="6">
                <b-img alt="foto" :src="'/img/'+planeta.img"></b-img>
                <h1>{{planeta.nombre}}</h1>
            </b-col>
            <b-col sm="6">
                <b-row>
                    Diametro KM: {{planeta.diametro}}KM
                </b-row>
                <b-row>
                    Rotacion: {{planeta.rotacionDias}} dias
                </b-row>
                <b-row>
                    Temperatura: {{planeta.temperatura}} grados
                </b-row>
                <b-row>
                    Descripcion: 
                    {{planeta.descripcion}}
                </b-row>
                <div>
                    SATELITES:
                    <div v-if="length != 0">
                        <b-row  v-for="satelite in planeta.satelites" :key="satelite">
                         
                         <h1>{{satelite}}</h1> 
                    </b-row>
                    </div>
                    <b-row v-else >
                       <h1>NO POSEE SATELITES</h1>
                    </b-row>
                </div>
                
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name:'Detalle',
    data(){
        return{
            planeta : {},
            length : 0
        }
    },
    mounted(){
        this.getPlaneta();
    },
    methods:{
        async getPlaneta(){
            let parametro = await this.$route.params.id;
            const res = await fetch('/sistema_solar.json');
            const ajson = await res.json();
            this.planeta = ajson.find(planeta => planeta.codigo == parametro);
            this.length = this.planeta.satelites.length;
            console.log('Planeta',this.planeta);
        }
    }
}
</script>