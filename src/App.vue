<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import MenuOpciones from './views/MenuOpciones';

export default {
  components:{
    'navbar': MenuOpciones
  }
}
</script>
