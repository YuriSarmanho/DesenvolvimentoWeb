<script src="./todoProgressBar.js" />

<template>
  <div class="todo-progress-bar-container">
    <div class="todo-progress-bar">
      <div class="todo-progress-fill" :style="{ width: teskFinished + '%' }">
        <p>{{ teskFinished }} %</p>
      </div>
    </div>
  </div>
</template>