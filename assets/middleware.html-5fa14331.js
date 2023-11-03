import{_ as e,o as i,c as n,a as d}from"./app-4f7908e3.js";const s={},l=d(`<h1 id="redux异步数据流" tabindex="-1"><a class="header-anchor" href="#redux异步数据流" aria-hidden="true">#</a> redux异步数据流</h1><p>createStore支持的是同步数据流，但是可以通过middleware来增加createStore的能力，实现异步数据流。</p><p>支持异步的middleware都包装了store的dispatch方法，依次来实现dispatch一些除了action之外的其他内容。</p><p>\b\b\b提示：middleware链\b中的最后一个middleware执行dispatch的时候，action必须是一个普通对象。（同步\b\b\b式的redux数据流）</p><h1 id="redux-middleware" tabindex="-1"><a class="header-anchor" href="#redux-middleware" aria-hidden="true">#</a> Redux Middleware</h1><blockquote><p>它提供的\b是位于action被发起之后，到达reducer之前的扩展点</p></blockquote><p>这个阶段可以做什么？</p><p>日志创建、创建崩溃报告、调用异步接口或者路由等。</p><p>那这个中间件的思维如何生成？可以\b自定义dis\bpatch能力</p><p>\b## 首先我们把redux流程化</p><p><img src="https://user-gold-cdn.xitu.io/2018/7/31/164edab5e41258c1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="alt text" title="redux flow"></p><p>核心部分就是在从action到reducer的过程中，那怎么处理呢？</p><p>以添加日志为例子</p><p>1、\b首先我们想在dispatch的前后打上日志，我们可以这么写</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;dispatching&#39;, action)
store.dispatch(action)
console.log(&#39;next state&#39;, store.getState())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面说过了我们可以针对dispatch进行扩展对吧，\b那么我们可以把上面的代码封装成一个函数同时取代dispatch本身</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>store.dispatch = (action) =&gt; {
  console.log(&#39;dispatching&#39;, action)
  let result = store.dispatch(action)
  console.log(&#39;next state&#39;, store.getState())
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们再次使用dispatch的时候自然会打出相应的log。那我们再将上面的方法\b扩展完善一下，我们不重写dispatch方法，而是将\b新的dispatch通过函数返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function logger(store) {
  let next = store.dispatch

  return function dispatchAndLog(action) {
    console.log(&#39;dispatching&#39;, action)
    let result = store.dispatch(action)
    console.log(&#39;next state&#39;, store.getState())
    return result
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做有什么好处呢？</p><p>将middleware串联起来的必要性：后面直接调用，其次后一个dispatch都可以操控前一个包装过的dispatch（所以有什么好处？？？？）。</p><p>链式middleware应该长这样吧</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function logger(store) {
  return function wrapDispatchAndLog(next) {
    return function dispatchAndLog(action) {
      console.log(&#39;dispatching&#39;, action)
      let result = store.dispatch(action)
      console.log(&#39;next state&#39;, store.getState())
      return result
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>next就是\b上一个middleware的dispatch</p><p>接下来看看集合这些middleware的\b方法是怎么实现的——MiddleWare</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()
  let dispatch = store.dispatch
  middlewares.forEach(middleware =&gt; (dispatch = middleware(store)(dispatch)))
  return Object.assign({}, store, {dispatch})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而其实redux本身实现了applyMiddleware方法，\b上述方法跟redux本身的实现非常接近了。有一些差别说明如下：</p><ul><li>这个方法只是暴露了store API的一个子集给middleware：dispatch和getState</li><li>确保所有的dispatch都经过middleware链</li><li>\b为了保证只应用middleware一次，方法作用在createStore上面，而不是store本身。</li></ul><h2 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子" aria-hidden="true">#</a> 举个例子</h2><p>我们很简单引用两个logger作用在middleware链上，会是怎么执行的呢？或许这里可以找到上面的设计思想。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// logger
const logger = store =&gt; next =&gt; action =&gt; {
  console.log(&#39;dispatching&#39;, action)
  let result = next(action)
  console.log(&#39;next state&#39;, store.getState())
  return result
}

// logger2
const logger2 = store =&gt; next =&gt; action =&gt; {
  console.log(&#39;dispatching 2&#39;, action)
  let result = next(action)
  console.log(&#39;next state 2&#39;, store.getState())
  return result
}

// 创建store并引用Middleware
createStore(
  reducer,
  applyMiddleware(logger2, logger)
)

// \b执行结果
// dispatching 2
// dispatching
// next state
// next state 2

// 同理我们换一个引用顺序
applyMiddleware(logger, logger2)

// \b执行结果
// dispatching
// dispatching 2
// next state 2
// next state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述结果表明了什么？ \b 满足了洋葱模型，让我们的dispatch执行middleware的顺序是从前到后，而后再从后回到前面。</p><p>这里解释了reverse()。</p><p>这篇文章不错 https://github.com/fi3ework/blog/issues/14</p>`,34),a=[l];function t(r,c){return i(),n("div",null,a)}const o=e(s,[["render",t],["__file","middleware.html.vue"]]);export{o as default};
