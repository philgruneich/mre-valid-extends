<script>
export default {
    name: 'Example',
    props: {
        msg: {
            type: String,
            default: "MESSAGE"
        }
    }
}
</script>

<template>
  <h1>{{ msg }} </h1>
</template>