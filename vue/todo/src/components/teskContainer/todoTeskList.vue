<script src="./todoTeskList.js"/>

<template>
  <div class="todo-tesk-list">
    <todoTesk v-for="(tesk, index) in tesks" :key="index" :teskTitle="tesk" />
  </div>
</template> 