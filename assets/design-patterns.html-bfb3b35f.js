import{_ as n,o as a,c as s,a as e}from"./app-4f7908e3.js";const t={},p=e(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> 依赖注入</h2><p>控制反转 &amp; 依赖注入，控制反转是解耦的解决思想，依赖注入则是设计模式</p><h3 id="控制反转" tabindex="-1"><a class="header-anchor" href="#控制反转" aria-hidden="true">#</a> 控制反转</h3><p>代码耦合一直开发者需要关注的点，模块之间的因为业务发展耦合性会越来越高，控制反转就是解决代码之间耦合的一种解决思想：通过一个三方Ioc来处理模块之间耦合问题，进而降低维护成本</p><p>以前模块A调用模块B的主动行为，因为Ioc的三方存在导致被动输入，控制权颠倒过来，这就是控制反转的由来</p><h3 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h3><p>依赖注入是将实例变量传入到一个对象中去</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// original</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    Father father<span class="token punctuation">;</span>
    <span class="token operator">...</span>
    <span class="token keyword">public</span> <span class="token function">Human</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// DI</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    Father father<span class="token punctuation">;</span>
    <span class="token operator">...</span>
    <span class="token keyword">public</span> <span class="token function">Human</span><span class="token punctuation">(</span><span class="token parameter">Father father</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>father <span class="token operator">=</span> father<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function i(o,l){return a(),s("div",null,c)}const d=n(t,[["render",i],["__file","design-patterns.html.vue"]]);export{d as default};
