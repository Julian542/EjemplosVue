<template>
  <div>
    <MenuSuperiorOpciones></MenuSuperiorOpciones>
    <router-view/>
  </div>
</template>
<script>
import MenuSuperiorOpciones from './views/MenuSuperiorOpciones';
export default {
  components:{
    MenuSuperiorOpciones
  }
}
</script>