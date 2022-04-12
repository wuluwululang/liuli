import * as vue from 'vue';
import {defineComponent} from "vue";

const React = {createElement: vue.h, Fragment: vue.Fragment}

export default defineComponent(() => {
    return () => <main class="container">
        <article class="grid">
            <div style={{
                display: "none",
                backgroundColor: '#374956',
                backgroundImage: 'https://cdn.jsdelivr.net/gh/howie6879/oss/uPic/ll_login_demo.jpg',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}/>
            <div>
                <hgroup>
                    <h1>Liuli</h1>
                    <h2>琉璃开净界，薜荔启禅关</h2>
                </hgroup>
                <form>
                    <input
                        type="text"
                        name="login"
                        placeholder="用户名"
                        aria-label="Login"
                        autocomplete="nickname"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="密码"
                        aria-label="Password"
                        autocomplete="current-password"
                        required
                    />
                    <fieldset>
                        <label>
                            <input type="checkbox" role="switch" id="remember" name="remember"/>
                            记住我
                        </label>
                    </fieldset>
                    <button type="submit" class="contrast" onClick={() => console.log('login...')}>
                        登录
                    </button>
                </form>
            </div>
        </article>
    </main>

})
