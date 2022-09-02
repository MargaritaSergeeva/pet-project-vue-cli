<template>
  <div class="container pt-1">
    <div class="card center">
      <h2>Актуальные новости на {{ now }}</h2>
      <span>
        Открыто: <strong>{{ openRate }}</strong> | Прочитано:
        <strong>{{ readRate }}</strong>
      </span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :is-read="item.isRead"
      @open-news="openNews"
      @read-news="readNews"
      @unread-news="unreadNews"
    ></app-news>
  </div>
</template>

<script>
import AppNews from "@/AppNews";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: "Отличная новость",
          id: 1,
          isOpen: false,
          isRead: false,
        },
        {
          title: "Хорошая новость",
          id: 2,
          isOpen: false,
          isRead: false,
        },
        {
          title: "Плохая новость",
          id: 3,
          isOpen: false,
          isRead: false,
        },
      ],
    };
  },
  provide() {
    return {
      title: "Список всех новостей",
      news: this.news,
    };
  },
  components: {
    AppNews,
  },
  methods: {
    openNews() {
      this.openRate++;
    },
    readNews(id) {
      this.readRate++;
      const index = this.news.findIndex((i) => i.id === id);
      this.news[index].isRead = true;
    },
    unreadNews(id) {
      this.readRate--;
      const index = this.news.findIndex((i) => i.id === id);
      this.news[index].isRead = false;
    },
  },
};
</script>
