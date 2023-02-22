<template>
    <div>
        <h1>Home Page</h1>
        <h1>{{ user?.profile.FirstName }} {{ user?.profile.LastName }}</h1>
        <NuxtLink to="logout">Log Out</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const services = useServices()

const user = await services.$auth.getUser()
console.log(user?.profile)


</script>

<style scoped>

</style>