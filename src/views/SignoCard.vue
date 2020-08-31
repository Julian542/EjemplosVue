<template>
    <div>
    <b-card
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-img alt="img" :src="'/img/'+signo.imagen"></b-card-img>
        <b-card-title> {{signo.signo}} </b-card-title>
        <b-button :href="'/detalle/'+signo.id" variant="primary">Ver Detalle</b-button>
    </b-card>
</div>
</template>
<script>
export default {
    name:"SignoCard",
    props:["signo"]
}
</script>