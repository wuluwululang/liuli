import * as vue from 'vue';
import {defineComponent} from "vue";

const React = {createElement: vue.h, Fragment: vue.Fragment}

export default defineComponent(() => {
    const cancel = () => {

    }
    const apply = () => {

    }
    return () => (
        <div>
            <article>
                <nav style="padding: 0 0.5rem">
                    <ul>
                        <li><strong>任务编辑</strong></li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" onClick={cancel}>取消</a>
                        </li>
                        <li>
                            <a href="#" onClick={apply} role="button">应用</a>
                        </li>
                    </ul>
                </nav>
            </article>
        </div>
    )
})
