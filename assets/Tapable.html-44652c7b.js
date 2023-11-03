import{_ as a,o as e,c as l,a as i}from"./app-4f7908e3.js";const o={},n=i(`<h1 id="tapable" tabindex="-1"><a class="header-anchor" href="#tapable" aria-hidden="true">#</a> Tapable</h1><p>Tapable提供各种hook来管理webpack的插件（内部或者外部插件），为了确保事件的执行顺序，提供了各种类型的Hook。</p><p>先通过一个例子来看下Tapable使用形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { SyncHook } = require(&#39;tapable&#39;)

const hook = new SyncHook([&#39;arg1&#39;, &#39;arg2&#39;])

hook.tap(&#39;a&#39;, function(arg1, arg2) {
  console.log(&#39;a&#39;)
})

hook.tap(&#39;b&#39;, function(arg1, arg2) {
  console.log(&#39;b&#39;)
})

hook.call(1, 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来事件注册、事件触发，但是Tapable相较于EventEmit功能更强大。</p><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2><ul><li>同步和异步（异步并行和异步串行）</li><li>Bail/Waterfall/Loop类型</li></ul><h3 id="_1、bailhook" tabindex="-1"><a class="header-anchor" href="#_1、bailhook" aria-hidden="true">#</a> 1、BailHook</h3><p>一个例子：如果一个模块M，如果它满足A、B或者C三者任何一个条件，就将其打包为一个单独文件。</p><ul><li>如果A、B、C不存在先后顺序，可以使用AsyncParallelBailHook，满足一个条件，其他无需判定</li><li>如果A、B、C存在先后顺序，需要使用SyncBailHook或者AsyncSeriseBailHook，抉择来自ABC的同步还是异步函数</li></ul><h3 id="_2、waterfall" tabindex="-1"><a class="header-anchor" href="#_2、waterfall" aria-hidden="true">#</a> 2、Waterfall</h3><p>类似reduce，如果前一个Hook函数的结果resule!==undefined，则result会作为后一个Hook函数的第一个参数</p><p>顺序执行的结果为：SyncWaterfallHook 和 AsyncSeriesWaterfallHook</p><h3 id="_3、loophook" tabindex="-1"><a class="header-anchor" href="#_3、loophook" aria-hidden="true">#</a> 3、LoopHook</h3><p>不停的循环执行Hook，直到所有函数结果result===undefined</p><p>对串行有依赖，所以只有SyncLoopHook 和 AsyncSeriesLoopHook</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><ul><li><p>hook事件注册</p><p>类实例的tap方法注册对应hook的处理函数</p><ul><li>tap</li><li>tapAsync</li><li>tapPromise</li></ul></li><li><p>hook触发</p><ul><li>call</li><li>callAsync</li><li>promise</li></ul></li><li><p>生成hook执行代码</p></li><li><p>执行</p></li></ul>`,18),r=[n];function d(s,c){return e(),l("div",null,r)}const h=a(o,[["render",d],["__file","Tapable.html.vue"]]);export{h as default};
