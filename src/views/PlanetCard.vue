<template>
    <div>
        <b-card>
            <b-card-img alt="planetafoto" :src="'/img/' + planeta.img"></b-card-img>
            <b-card-title>
            {{planeta.nombre}}
            </b-card-title>
            <b-button :href='"/detalle/"+planeta.codigo' variant="primary">Ver Detalle</b-button>
        </b-card>
    </div>
</template>
<script>
export default {
    name:'PlanetCard',
    props:['planeta']
}
</script>