import{_ as e,o as n,c as r,a as i}from"./app-4f7908e3.js";const d={},a=i(`<h1 id="vue错误处理" tabindex="-1"><a class="header-anchor" href="#vue错误处理" aria-hidden="true">#</a> Vue错误处理</h1><h2 id="先看错误" tabindex="-1"><a class="header-anchor" href="#先看错误" aria-hidden="true">#</a> 先看错误</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 错误1
&lt;div id=&quot;app&quot;&gt;
  hello, {{ name }}
&lt;/div&gt;

// 错误2
const app = new Vue({
  el: &#39;#app&#39;,
  computed: {
    name() {
      return x
    }
  }
})

// 错误3
&lt;div id=&quot;app&quot;&gt;
  &lt;button @click=&quot;doIt&quot;&gt;Do It&lt;/button&gt;
&lt;/div&gt;

const app = new Vue({
  el: &quot;#app&quot;,
  methods: {
    doIt() {
      return x;
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="官方解释" tabindex="-1"><a class="header-anchor" href="#官方解释" aria-hidden="true">#</a> 官方解释</h3><blockquote><p>如果在组件渲染时出现运行错误，错误将会被传递至全局 Vue.config.errorHandler 配置函数。利用这个钩子函数来配合错误跟踪服务。</p></blockquote><h3 id="技巧分类" tabindex="-1"><a class="header-anchor" href="#技巧分类" aria-hidden="true">#</a> 技巧分类</h3><h4 id="_1、errorhandler" tabindex="-1"><a class="header-anchor" href="#_1、errorhandler" aria-hidden="true">#</a> 1、errorHandler</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.config.errorHanlder = function(err, vm, info) {
  console.log(\`Error: \${err.toString()}\\n Info:\${info}\`)
}

// Error: ReferenceError: x is not define
// Info: render / v-on handler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、warnhandler" tabindex="-1"><a class="header-anchor" href="#_2、warnhandler" aria-hidden="true">#</a> 2、warnHandler</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(\`Warn: \${msg}\\nTrace: \${trace}\`)
}

// Warn: Property or method &#39;name&#39; is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
// Trace:

(found in &lt;Root&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、rendererror-only-for-develop-environment-with-component" tabindex="-1"><a class="header-anchor" href="#_3、rendererror-only-for-develop-environment-with-component" aria-hidden="true">#</a> 3、renderError - only for develop environment with component</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const app = new Vue({
  el: &quot;#app&quot;,
  renderError(h, err) {
    return h(&quot;pre&quot;, {style: {color: &quot;red&quot;}}, err.stack)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、errorcaptured" tabindex="-1"><a class="header-anchor" href="#_4、errorcaptured" aria-hidden="true">#</a> 4、errorCaptured</h4><blockquote><p>捕获一个来自子孙组件的错误信息，返回错误对象，发送错误组件实例和错误信息来源字符串。可以返回false阻止该错误继续向上传播</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
  ...
  errorCaptured(err, vm, info) {
    console.log(\`Error: \${err.toString()}\\ninfo: \${info}\`);
    return false;
  }
})

// Error: TypeError: dontexist is not a function
// info: render
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、window-onerror" tabindex="-1"><a class="header-anchor" href="#_5、window-onerror" aria-hidden="true">#</a> 5、window.onerror</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.onerror = function(message, source, line, column, error) {
  // msg of error
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优先级方面：errorHandler高于onerror</p><p>彩蛋：</p><ul><li>window.onerror = window.close</li><li>Fundebug ( https://www.fundebug.com/ )</li><li>Sentry ( https://sentry.io/welcome/ )</li></ul><h2 id="vue的错误原理" tabindex="-1"><a class="header-anchor" href="#vue的错误原理" aria-hidden="true">#</a> Vue的错误原理</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function handleError (err: Error, vm: any, info: string) {
  if (vm) {
    let cur = vm
    while ((cur = cur.$parent)) {
      const hooks = cur.$options.errorCaptured
      if (hooks) {
        for (let i = 0; i &lt; hooks.length; i++) {
          try {
            const capture = hooks[i].call(cur, err, vm, info) === false
            if (capture) return
          } catch (e) {
            globalHandleError(e, cur, &#39;errorCaptured hook&#39;)
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info)
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, &#39;config.errorHandler&#39;)
    }
  }
  logError(err, vm, info)
}

function logError (err, vm, info) {
  if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39;) {
    warn(\`Error in \${info}: &quot;\${err.toString()}&quot;\`, vm)
  }
  /* istanbul ignore else */
  if (inBrowser &amp;&amp; typeof console !== &#39;undefined&#39;) {
    console.error(err)
  } else {
    throw err
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
  ...
} catch (error) {
  handleError(error, vm, &#39;msg msg&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 errorCaptured 和 errorHandler 的触发时机都是相同的，不同的是 errorCaptured 发生在前，且如果某个组件的 errorCaptured 方法返回了 false，那么这个异常信息不会再向上冒泡也不会再调用 errorHandler 方法。</p><h2 id="how-about-react-error" tabindex="-1"><a class="header-anchor" href="#how-about-react-error" aria-hidden="true">#</a> How About React Error</h2><h3 id="errorboundary" tabindex="-1"><a class="header-anchor" href="#errorboundary" aria-hidden="true">#</a> ErrorBoundary</h3><p>自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。</p>`,27),l=[a];function s(o,v){return n(),r("div",null,l)}const c=e(d,[["render",s],["__file","error-handler.html.vue"]]);export{c as default};
