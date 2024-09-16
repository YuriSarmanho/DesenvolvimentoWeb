<script src="./todoProgressBar.js" />

<template>
  <div class="todo-progress-bar-container">
    <div class="todo-progress-bar">
      <div class="todo-progress-fill" :style="{ width: teskBarFill + '%' }">
        <p>{{ teskBarFill }} %</p>
      </div>
    </div>
  </div>
</template>