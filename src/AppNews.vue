<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </app-button>
    <app-button v-if="isRead" color="danger" @action="unread">
      Отметить непрочитанной
    </app-button>
    <div v-if="isNewsOpen">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor
        ipsum labore quae rem! Adipisci culpa dignissimos dolor eos fuga harum
        magna natus quasi tenetur. Alias necessitatibus quisquam reprehenderit
        venial.
      </p>
      <app-button v-if="!isRead" color="primary" @action="read">
        Прочитать новость
      </app-button>
    </div>

    <app-news-list></app-news-list>
  </div>
</template>

<script>
import AppButton from "../AppButton";
import AppNewsList from "@/AppNewsList";

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
  components: {
    AppButton,
    AppNewsList
  },
};
</script>
