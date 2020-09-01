<template>
    <b-table-simple>
        <b-thead head-variant="dark">
            <b-th >Planeta</b-th>
            <b-th >Diametro</b-th>
        </b-thead>
        <b-tbody>
            <b-tr v-for="planeta in planetas" :key="planeta.codigo">
                <b-td>
                    {{planeta.nombre}}
                </b-td>
                <b-td>
                    {{planeta.diametro}}
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>
<script>
export default {
    name:'Ordenados',
    data(){
        return{
            planetas:[]
        }
    },
    mounted(){
        this.getPlanetas();
    },
    methods:{
        async getPlanetas(){
            const res = await fetch('/sistema_solar.json');
            const ajson = await res.json();
            const ordenados = await this.ordenaPlanetas(ajson);
            this.planetas = ordenados;
            console.log('ordenados', this.planetas);
        },
        ordenaPlanetas(array){
            array.sort(function(a,b){
                return (b.diametro - a.diametro);
            });
            return array;
        }
    }
}
</script>