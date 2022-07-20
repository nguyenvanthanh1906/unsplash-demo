<template>
    <div>
        <Header></Header>
        <Topic></Topic>
        <Nuxt />
    </div>
</template>
<script>
import Header from '~/components/client/Header'
import Topic from '~/components/client/Topic'

export default {
    name: 'Client',
    components: {
        Header,
        Topic,
    },
}
</script>
