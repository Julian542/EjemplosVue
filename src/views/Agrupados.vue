<template>
    <b-table-simple>
        <b-thead>
            <b-th> Elemento </b-th>
             <b-th> Signo </b-th>
        </b-thead>
        <b-tbody>
            <b-tr >
                <b-td>
                   <b>Agua</b> 
                </b-td>
                <b-td  v-for="signo in signos" :key="signo.id">
                    <div v-if="signo.elemento == 'Agua'"> {{signo.signo}}</div>
                </b-td>
            </b-tr>
            <b-tr >
                <b-td>
                   <b>Tierra</b> 
                </b-td>
                <b-td  v-for="signo in signos" :key="signo.id">
                    <div v-if="signo.elemento == 'Tierra'"> {{signo.signo}}</div>
                </b-td>
            </b-tr>
            <b-tr >
                <b-td>
                   <b>Aire</b> 
                </b-td>
                <b-td  v-for="signo in signos" :key="signo.id">
                    <div v-if="signo.elemento == 'Aire'"> {{signo.signo}}</div>
                </b-td>
            </b-tr>
            <b-tr >
                <b-td>
                   <b>Fuego</b> 
                </b-td>
                <b-td  v-for="signo in signos" :key="signo.id">
                    <div v-if="signo.elemento == 'Fuego'"> {{signo.signo}}</div>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>
<script>
export default {
    name:'Agrupados',
    data(){
        return{
            signos : [],
        }
    },
    mounted(){
        this.getSignos();
    },
    methods:{
        async getSignos(){
            const res = await fetch('/zodiaco.json');
            const json = await res.json();
            this.signos = json;
        }
    }
}
</script>