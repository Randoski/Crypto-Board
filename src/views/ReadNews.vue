<template>
  <div class="container">
    <div class="article-details" v-if="article">
      <div>
        <h1>{{ article.title }}</h1>
        <p>By {{ article.author }} of {{ article.source.name }}</p>
        <p>Published on {{ article.publishedAt }}</p>
        <img :src="article.urlToImage" :alt="article.title" class="article-image" />
        <p>{{ article.content }}</p>
        <router-link to="/news">Back to News</router-link>
      </div>

      <!-- Random Articles -->
      <div class="random-articles">
        <div
          v-for="(article, index) in randomArticles"
          :key="index"
          class="random-article"
        >
          <h2>{{ article.title }}</h2>
          <p>By {{ article.author }} of {{ article.source.name }}</p>
          <p>Published on {{ article.publishedAt }}</p>
          <img
            :src="article.urlToImage"
            :alt="article.title"
            class="random-article-image"
          />
          <p>{{ article.description }}</p>
        </div>
      </div>
    </div>

    <div v-else class="loading-indicator news-length">
      <!-- Loading indicator content -->
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Fetching-coins...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      article: null,
      randomArticles: [],
    };
  },
  created() {
    this.fetchArticle();
    this.fetchRandomArticles();
  },
  methods: {
    fetchArticle() {
      const article = JSON.parse(this.$route.query.article);
      this.article = article;
    },

    fetchRandomArticles() {
      // Fetch the initial articles from the API
      fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ec59c40683fa4213aaaa5e2b4de1d65c"
      )
        .then((res) => res.json())
        .then((data) => {
          // Get 8 random articles from the initial articles
          const initialArticles = data.articles;
          const randomIndexes = this.getRandomIndexes(initialArticles.length, 8);
          this.randomArticles = randomIndexes.map((index) => initialArticles[index]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getRandomIndexes(max, count) {
      const indexes = [];
      while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      return indexes;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.random-articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-x: auto;
}

.random-article {
  width: 300px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.random-article h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.random-article p {
  font-size: 14px;
  margin-bottom: 5px;
}

.random-article-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
