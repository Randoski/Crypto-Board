<template>
  <div class="container">
    <!-- Page headings -->
    <div class="page-settings">
      <!-- <h1 class="learn-header">Get Started with Crypto</h1>
      <p>
        We've compiled a couple of popular and important questions to help you understand
        the Crypto world.
      </p> -->
      <!-- Q & A Section -->
      <section id="q-a">
        <div class="q-a">
          <div
            v-for="(questionAndAnswer, index) in questionsAndAnswers"
            :key="index"
            class="single"
          >
            <h1>{{ questionAndAnswer.question }}</h1>
            <p>{{ questionAndAnswer.answer }}</p>
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
      // Sample Q&A data
      questionsAndAnswers: [
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
        {
          question: "What is xyz?",
          answer:
            "This is the answer to Question 1. The answer should literally be clear and rightly point a newbie to the right direction, add tables and links if necessary. Question Suggestions - What's crypto, how to make money in crypto, type of coin, crypto, tokens, coins, centralized and decentralized exchange, gas fee etc, DYOR",
        },
      ],
    };
  },
};
</script>

<style>
.learn-header {
  margin-top: 112px;
}
.single {
  padding-bottom: 48px !important;
}

#q-a {
  margin-top: 140px;
}
.q-a h1 {
  color: #0e8900 !important;
}

.q-a p {
  font-size: 10px;
  font-weight: bold;
}

@media (min-width: 850px) {
  .q-a p {
    font-size: 16px;
    width: 70%;
    margin-top: 16px;
  }
}
</style>
