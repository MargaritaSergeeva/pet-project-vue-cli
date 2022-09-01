<template>
  <h1>{{ title }}</h1>
  <hr />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet cum,
    cumque delectus, dolores ducimus exercitationem, facilis harum id maxime
    neque numquam odit officia reprehenderit velit. Labore molestiae saepe sit?
  </p>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      title: "Title",
      data: [],
    };
  },
};
</script>
