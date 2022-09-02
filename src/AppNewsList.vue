<template>
  <hr />
  <h4>{{ title }}</h4>
  <ul v-for="item in news" :key="item">
    <li>{{ item.title }} <span v-if="item.isRead">(прочитано)</span></li>
  </ul>
</template>

<script>
export default {
  inject: ["title", "news"],
};
</script>
