<script src="./todoInputTesk.js"/>

<template>
    <div class="todo-input-container">
        <input class="todo-input" type="text" v-model="teskTitle">
        <button class="todo-button" @click="addNewTesk()">enviar</button>
    </div>
</template>