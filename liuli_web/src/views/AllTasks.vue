<template>

</template>

<script lang="ts">
export default {
  setup() {

  },
  data() {
    return {
      allTasks: [
        {id: "0001", description: "测试任务 1", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0002", description: "测试任务 2", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0003", description: "测试任务 3", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0004", description: "测试任务 4", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0005", description: "测试任务 5", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
      ]
    }
  },
  methods: {
    getTimeUntilNow(mss: number) {
      mss = Date.now() - mss
      const days = Math.floor(mss / (1000 * 60 * 60 * 24));
      if (days > 0) {
        return `${days} 天前`;
      }
      const hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours > 0) {
        return `${hours} 小时前 `;
      }
      const minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
      if (minutes > 0) {
        return `${minutes} 分钟前 `;
      }
      return "刚刚 ";
    },

  },
};


</script>

<style>
main.container {

  /*padding: 1rem 0;*/
}

article {
  padding: 0;
  overflow: hidden;
}

li.task-item {

}

article div {
  padding: 1rem;
}

article.grid div.login-cover {
  display: none;
  background-color: #374956;
  background-image: url('https://cdn.jsdelivr.net/gh/howie6879/oss/uPic/ll_login_demo.jpg');
  background-position: center;
  background-size: cover;
}

@media (min-width: 992px) {
  article.grid div.login-cover {
    display: block;
  }
}
</style>
