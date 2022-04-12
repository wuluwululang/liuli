<template>
  <main class="container">
    <article class="grid" style="display: flex;flex-direction: column;height: 500px">
      <nav style="padding: 0 0.5rem">
        <ul>
          <li><strong>任务编辑</strong></li>
        </ul>
        <ul>
          <li><a href="#" @click="cancel">取消</a></li>
          <li><a href="#" @click="apply" role="button">应用</a></li>
        </ul>
      </nav>
      <div class="grid">
        <article style="box-shadow: unset">
          <header>
            采集器
          </header>
          <div class="obj">
            微信
            <a @click="editCollector()">
              <svg class="icon" viewBox="0 0 1028 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" width="1rem"
                   height="1rem">
                <path
                    d="M1018.319924 112.117535q4.093748 9.210934 6.652341 21.492179t2.558593 25.585928-5.117186 26.609365-16.374994 25.585928q-12.281245 12.281245-22.003898 21.492179t-16.886712 16.374994q-8.187497 8.187497-15.351557 14.32812l-191.382739-191.382739q12.281245-11.257808 29.167958-27.121083t28.144521-25.074209q14.32812-11.257808 29.679676-15.863275t30.191395-4.093748 28.656239 4.605467 24.050772 9.210934q21.492179 11.257808 47.589826 39.402329t40.425766 58.847634zM221.062416 611.554845q6.140623-6.140623 28.656239-29.167958t56.289041-56.80076l74.710909-74.710909 82.898406-82.898406 220.038979-220.038979 191.382739 192.406177-220.038979 220.038979-81.874969 82.898406q-40.937484 39.914047-73.687472 73.175753t-54.242167 54.753885-25.585928 24.562491q-10.234371 9.210934-23.539054 19.445305t-27.632802 16.374994q-14.32812 7.16406-41.960921 17.398431t-57.824197 19.957024-57.312478 16.886712-40.425766 9.210934q-27.632802 3.070311-36.843736-8.187497t-5.117186-37.867173q2.046874-14.32812 9.722653-41.449203t16.374994-56.289041 16.886712-53.730448 13.304682-33.773425q6.140623-14.32812 13.816401-26.097646t22.003898-26.097646z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="obj">
            小说
          </div>
        </article>
        <article>
          <header>
            处理器
          </header>
          <div class="obj">
            广告标记
          </div>
        </article>
        <article>
          <header>
            分发器
          </header>
        </article>
      </div>
    </article>
    <div id="modal"/>
  </main>
</template>

<script lang="ts">
export default {
  created() {
    this.id = this.$route.params.id
  },
  data() {
    return {
      id: null,
      showModal: true,
      taskDetails: {
        "name": "feeddd",
        "author": "liuli_team",
        "doc_source": "liuli_wechat",
        "collector": {
          "wechat": {
            "feeds_dict": {
              "天眼透视": "https://api.feeddd.org/feeds/62308f26701766717146f267/rss",
              "唧唧堂": "https://api.feeddd.org/feeds/621ba34edca58a380c6bd7be/rss",
              "上海译文": "https://api.feeddd.org/feeds/62335fec701766717148c2f4/rss",
              "36氪": "https://api.feeddd.org/feeds/6131e1441269c358aa0e2141/rss"
            },
            "delta_time": 5,
            "spider_type": "feddd"
          }
        },
        "processor": {
          "before_collect": [],
          "after_collect": [{
            "func": "ad_marker",
            "cos_value": 0.6
          },
            {
              "func": "to_rss",
              "doc_source_list": ["liuli_wechat"],
              "link_source": "github"
            }
          ]
        },
        "sender": {
          "sender_list": ["tg"],
          "query_days": 7,
          "delta_time": 3
        },
        "backup": {
          "backup_list": ["mongodb"],
          "query_days": 7,
          "delta_time": 3,
          "init_config": {},
          "after_get_content": [{
            "func": "str_replace",
            "before_str": "data-src=\"",
            "after_str": "src=\"https://images.weserv.nl/?url="
          }]
        },
        "schedule": {
          "period_list": ["00:10", "12:10", "21:10"]
        }
      }
    }
  },
  methods: {
    apply() {
    },
    cancel() {
      this.$router.back()
    },
    editCollector() {
      this.showModal = true;
      console.log("---------------------")

    }
  },
};
</script>

<style>
main.container {
  display: flex;
  /*flex-direction: row;*/
  /*justify-content: center;*/
  min-height: calc(100vh);
  padding: 1rem 0;
}

article {
  padding: 1rem;
  /*overflow: hidden;*/
}

article div {
  padding: 0.5rem;
}

div.obj {
  border: 1px solid #1094c0;
  margin: 0.5rem;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


div.obj:hover {
  /*border: 1px solid #2eb0dc;*/
  background-color: #e5f5fb
}

article header {
  margin: unset;
  padding: 0.5rem;
}

article div article {
  padding: unset;
  margin: unset;
  box-shadow: unset;
  border: 1px solid #eee
}

</style>
