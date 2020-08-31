<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/home/todos">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/agrupados">Agrupados por Elemento</b-nav-item>
        <b-nav-item-dropdown text="Seleccione un mes" >
            <div right v-for="mes in meses" :key="mes.numero">
                <b-dropdown-item :href="'/home/'+ mes.numero" >{{mes.mes}}</b-dropdown-item>
            </div>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
    name:'MenuSuperiorOpciones',
    data(){
        return{
            meses : [
                {
                    mes:'Enero',
                    numero:1
                },
                {
                   mes:'Febrero',
                   numero:2 
                },
                {
                   mes:'Marzo',
                   numero:3 
                },
                {
                   mes:'Abril',
                   numero: 4
                },
                {
                   mes:'Mayo',
                   numero: 5
                },
                {
                   mes:'Junio',
                   numero: 6
                },
                {
                    mes:'Julio',
                    numero:7
                },
                {
                   mes:'Agosto',
                   numero:8 
                },
                {
                   mes:'Septiembre',
                   numero:9 
                },
                {
                   mes:'Octubre',
                   numero: 10
                },
                {
                   mes:'Noviembre',
                   numero: 11
                },
                {
                   mes:'Diciembre',
                   numero: 12
                }]
        }
    }
}
</script>