<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">Открыть</button>
    <button v-if="isRead" class="btn danger" @click="unread">
      Отметить непрочитанной
    </button>
    <div v-if="isNewsOpen">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
        ipsum labore quae rem! Adipisci culpa dignissimos dolor eos fuga harum
        magna natus quasi tenetur. Alias necessitatibus quisquam reprehenderit
        venial.
      </p>
      <button v-if="!isRead" class="btn primary" @click="read">
        Прочитать новость
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
      validator(value) {
        return value === true || value === false;
      },
    },
    isRead: {
      type: Boolean,
      default: false,
      validator(value) {
        return value === true || value === false;
      },
    },
  },
  emits: {
    "open-news": null,
    "read-news": null,
    "unread-news"(id) {
      if (id) {
        return true;
      }
      console.warn("Не передан id в emit unread-news");
    },
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news");
      }
    },
    read() {
      this.isNewsOpen = false;
      this.$emit("read-news", this.id);
    },
    unread() {
      this.isNewsOpen = true;
      this.$emit("unread-news", this.id);
    },
  },
};
</script>
