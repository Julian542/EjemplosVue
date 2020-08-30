<template>
    <b-container fluid>
        <b-row>
            <b-col sm="6">
                <img :src="'/img/' + alumno.foto" alt="foto">
            </b-col>
            <b-col sm="6">
                <h1> {{alumno.alumno}} </h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="6"> <h5>Legajo: </h5> </b-col>
            <b-col sm="6"> <p>{{alumno.legajo}}</p></b-col>
        </b-row>
        <b-row>
            <b-col sm="6"> <h5>Carrera: </h5> </b-col>
            <b-col sm="6"><p>{{alumno.carrera}}</p></b-col>
        </b-row>
        <b-row>
            <b-col sm="6"> <h5>Estado Activo: </h5> </b-col>
            <b-col sm="6">
                <p v-if="alumno.estaActivo == true">Si</p>
                <p v-else>No</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="6"> <h5>Notas: </h5> </b-col>
            <b-col sm="6">
                <ul>
                  <li v-for="nota in alumno.notas" :key="nota"> {{nota}} </li>  
                </ul>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="6"> <h5>Promedio: </h5> </b-col>
            <b-col sm="6"><p>{{promedio}}</p></b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name:'Detalle',
    data(){
        return{
            alumno:{},
            promedio:0
        }
    },
    mounted(){
        this.getAlumno();
    },
    methods:{
        async getAlumno(){
            const parametro = this.$route.params.id;
            if (parametro == 'mejoralumno'){
                const res = await fetch('/alumnos.json');
                const conver = await res.json();
                const mejor = await this.mejorPromedio(conver);
                this.alumno = await conver.find(alumno => alumno.alumno == mejor.nombre);
                this.promedio = await mejor.promedio;
            }else{
                const res = await fetch('/alumnos.json');
                const conver = await res.json();
                this.alumno = await conver.find(alumno => alumno.legajo == parametro);
                this.promedio = await this.sacarPromedio(this.alumno); 
                console.log(this.alumno);
            } 
        },
        sacarPromedio(alumno){
            let subtotal = 0, notaFinal = 0;
            alumno.notas.forEach(notas => subtotal += notas);
            notaFinal = subtotal / alumno.notas.length;
            return notaFinal;
        },
        mejorPromedio(alumnos){
            let persona = [], notas = [];
            alumnos.map(alumno =>{
                let subtotal = 0, notaFinal = 0;
                alumno.notas.forEach(notas => subtotal += notas);
                notaFinal = subtotal / alumno.notas.length;
                let objeto = {
                    nombre : alumno.alumno,
                    promedio : notaFinal
                }
                notas.push(notaFinal);
                persona.push(objeto);
            });
            let mejorNota = Math.max.apply(null, notas);
            let mejorAlumno = persona.find(ref => ref.promedio == mejorNota);
            console.log('Mejor Alumno' ,mejorAlumno);
            return mejorAlumno;
        }
    }
}
</script>