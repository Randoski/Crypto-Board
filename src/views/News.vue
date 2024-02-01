<template>
  <div class="container">
    <div class="page-settings">
      <!-- Blog Content -->
      <section>
        <div v-if="news.length" class="blog-section">
          <!-- Main Content -->
          <div class="col-md-12">
            <!-- Blog Post 1 -->
            <div class="blog-post" v-for="(post, index) in news" :key="post.id">
              <router-link
                :to="{
                  name: 'ReadNews',
                  params: { id: index },
                  query: { article: JSON.stringify(post) },
                }"
              >
                <h2 class="blog-title">{{ post.title }}</h2>
                <img
                  :src="post.urlToImage"
                  :alt="'Blog Post Image ' + (index + 1)"
                  class="blog-image-long"
                />
                <!-- Author and Source -->
                <div>
                  <p>
                    By <span>{{ post.author }}</span> of
                    <span>{{ post.source.name }}</span>
                  </p>
                </div>
                <p class="blog-date">Published on {{ post.publishedAt }}</p>
                <p class="blog-content">{{ post.description }}</p>
              </router-link>
            </div>
          </div>
        </div>

        <!--  Loading State -->
        <div v-else class="loading-indicator news-length">
          <!-- Loading indicator content -->
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Fetching-coins...</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    };
  },

  mounted() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ec59c40683fa4213aaaa5e2b4de1d65c"
    )
      .then((res) => res.json())
      .then((data) => (this.news = data.articles))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style>
.blog-section {
  margin-top: 110px !important;
}

.news-length {
  height: 85vh !important;
}

.blog-post {
  margin-bottom: 40px;
}

.blog-image {
  width: 100%;
  max-height: 200px; /* Adjust as needed */
  object-fit: cover;
  border-radius: 8px;
}

.blog-title {
  font-size: 24px;
  font-weight: 700;
  color: #454242;
}

.blog-date {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

.blog-content {
  font-size: 16px;
  color: #454242;
  line-height: 1.6;
}

.blog-sidebar {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.blog-sidebar-header {
  font-size: 20px;
  font-weight: 700;
  color: #454242;
  margin-bottom: 20px;
}

.blog-image-long {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.related-articles {
  list-style: none;
  padding: 0;
}

.related-articles li {
  margin-bottom: 10px;
}

.related-articles li a {
  color: #777;
  text-decoration: none;
}

.related-articles li a:hover {
  color: #0e8900;
}
</style>
