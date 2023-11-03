import{_ as e,o as n,c as d,a as i}from"./app-4f7908e3.js";const a={},s=i(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><h2 id="defer-vs-async" tabindex="-1"><a class="header-anchor" href="#defer-vs-async" aria-hidden="true">#</a> defer vs async</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 均为延迟执行，不影响页面渲染
// 多个defer是顺序延迟加载，多个async是乱序延迟加载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="undefined-vs-null" tabindex="-1"><a class="header-anchor" href="#undefined-vs-null" aria-hidden="true">#</a> undefined vs null</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 不需要显式地设置undefined
const a = undefined
const a

// 当你需要给a赋值一个对象，初始化需要显式设置Null，因为typeof Null === &#39;object&#39;
const a = null

// undefined派生自null
undefined == null  // true

# 逗号操作符
var num = (2, 4, 5, 9, 7)    // num 的值为 7  [:smile:]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[s];function r(c,t){return n(),d("div",null,l)}const v=e(a,[["render",r],["__file","index.html.vue"]]);export{v as default};
