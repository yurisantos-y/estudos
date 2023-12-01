<!-- <template>
    <div>
        <h1>Hello, {{ nome }}</h1>
        <input type="text" v-model="nome">
        <br>
        <a :href="link">Acesse o curso Vue</a>
    </div>
</template>

<script>
    export default {
        data: () => ({
            nome: "yuri",
            link: 'https://treinamento.vuejsbrasil.org'
        })
    }
</script> -->


<template>
  <div>
    <h1>Minha Lista de Tasks!</h1>

    <button @click="() => showList = !showList">
        Ver a lista
    </button>

    <br>

    <input type="text" v-focus>

    <ul v-if="showList">
        <li v-for="(task, index) in tasks" :key="`${task}-${index}`">
            {{ task.name }}
        </li>
    </ul>
    <p v-else> Listas de tarefas escondidas</p>
  </div>
</template>

<script>
const focus = {
    inserted: (el) => {
        el.focus()
    }
}
export default {
    directives: {
        focus,
    },
    data: () => ({
        showList: false,
        tasks: [
            { name: 'Fazer o curso', isDone: false }
        ]
    })
}
</script>

<style>

</style>