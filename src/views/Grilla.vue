<template>
  <div>
    <b-table-simple>
       <b-thead head-variant="dark">
           <b-th>
             Alumno
           </b-th>
           <b-th>
             Legajo
           </b-th>
           <b-th>
             Fecha Nacimiento
           </b-th>
           <b-th>
             Promedio Notas
           </b-th>
           <b-th>
              
           </b-th>
       </b-thead >
       <b-tbody>
          <b-tr v-for="alumno in alumnos" :key="alumno.key">
            <b-td>
              {{alumno.alumno}}
            </b-td>
            <b-td>
              {{alumno.legajo}}
            </b-td>
            <b-td>
              {{alumno.fecha}}
            </b-td>
            <b-td>
              {{alumno.promedio}}
            </b-td>
            <b-td>
               <a :href="'/detalle/' + alumno.legajo">VER DETALLE</a>
            </b-td>
          </b-tr>         
       </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
  export default {
    name:'Grilla',
    data(){
      return{
        alumnos:[]
      }
    },
    mounted(){
      this.getAlumnos();
    },
    methods:{
      async getAlumnos(){
        console.log('ruta', this.$route.params.id);
        let path =  this.$route.path;
        if( path.includes('nombre')){
          const nombre =  this.$route.params.id;
          const res = await fetch('/alumnos.json');
          const res2 = await res.json();
          const nombres = await res2.filter(alumno => alumno.alumno.toLowerCase().includes(nombre.toLowerCase()));
          console.log(res2);
          const other = await nombres.map(alumno => {
            let objeto = { 
              alumno: alumno.alumno,
              legajo: alumno.legajo,
              fecha: alumno.fechaNacimiento,
              promedio:0
            }

            let subnota= 0, notaFinal = 0;
            alumno.notas.forEach(nota => subnota += nota);
            notaFinal = subnota / alumno.notas.length;
            
            objeto.promedio = notaFinal;
            this.alumnos.push(objeto);
            console.log(objeto);
          });
          console.log(other);
        }else if(path.includes('legajo')){
          const res = await fetch('/alumnos.json');
          const res2 = await res.json();
          const legajo = await res2.filter( alumno => alumno.legajo == this.$route.params.id);
          console.log(legajo);
          const other = await legajo.map(alumno => {
            let objeto = { 
              alumno: alumno.alumno,
              legajo: alumno.legajo,
              fecha: alumno.fechaNacimiento,
              promedio:0
            }

            let subnota= 0, notaFinal = 0;
            alumno.notas.forEach(nota => subnota += nota);
            notaFinal = subnota / alumno.notas.length;
            
            objeto.promedio = notaFinal;
            this.alumnos.push(objeto);
            console.log(objeto);
          });
          console.log(other);
        }else if(path.includes('todos')){
          const res = await fetch('/alumnos.json');
          const res2 = await res.json();
          console.log(res2);
          const other = await res2.map(alumno => {
            let objeto = { 
              alumno: alumno.alumno,
              legajo: alumno.legajo,
              fecha: alumno.fechaNacimiento,
              promedio:0
            }

            let subnota= 0, notaFinal = 0;
            alumno.notas.forEach(nota => subnota += nota);
            notaFinal = subnota / alumno.notas.length;
            
            objeto.promedio = notaFinal;
            this.alumnos.push(objeto);
            console.log(objeto);
          });
          console.log(other);
        }
        
      },
      checkBuscar(alumno, nombre){
        const a = alumno.toLowerCase();
        const n = nombre.toLowerCase();
        if( a.includes(n)){
          return true;
        }else{
          return false;
        }
      }

    }
  }
</script>