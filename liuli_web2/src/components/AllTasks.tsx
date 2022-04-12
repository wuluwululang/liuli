import * as vue from 'vue';
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

const React = {createElement: vue.h, Fragment: vue.Fragment}

export default defineComponent(() => {
    const items = [
        {id: "0001", description: "测试任务 1", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0002", description: "测试任务 2", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0003", description: "测试任务 3", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0004", description: "测试任务 4", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
        {id: "0005", description: "测试任务 5", lastUpdated: Date.now() - Math.random() * 1000 * 60 * 60},
    ]
    const getTimeUntilNow = (mss: number) => {
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
    }

    const edit = (id: string) => {
        useRouter().push(`/tasks/${id}/edit`).then()
        console.log("!!!!!!!")
    }
    return (() => (
            <main>
                <article class="grid">
                    <ol style="margin: unset">
                        {
                            items.map(item => (
                                <li style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <div style="display: flex;">
                                        {item.id}
                                        {item.description}
                                    </div>
                                    <div style="display: flex;align-items: center;">
                                        {getTimeUntilNow(item.lastUpdated)}
                                        <button style="width: 100px;margin: unset;margin-left: 8px;padding:4px">执行
                                        </button>
                                        <div/>
                                        <button style="width: 100px;margin: unset;padding:4px"
                                                onClick={() => edit(item.id)}>编辑
                                        </button>
                                    </div>
                                </li>
                            ))
                        }

                    </ol>
                </article>
            </main>
        )
    )
})
