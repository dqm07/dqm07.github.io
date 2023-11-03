import{_ as n,o as s,c as a,a as e}from"./app-4f7908e3.js";const p={},t=e(`<h1 id="vue3-0" tabindex="-1"><a class="header-anchor" href="#vue3-0" aria-hidden="true">#</a> Vue3.0</h1><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2><p>取代beforeCreated和created，作为composition API新特性提供了统一入口</p><h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2><p>新的响应式数据的写法</p><h2 id="ref-isref-torefs" tabindex="-1"><a class="header-anchor" href="#ref-isref-torefs" aria-hidden="true">#</a> ref &amp; isRef &amp; toRefs</h2><p>返回值是一个对象，对象上只包含一个value属性。<code>这是性能优化</code></p><h2 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h2><p>新的写法，返回的值是一个ref对象。</p><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2><p>写法更加收敛，且提供了stop的能力。<code>这是性能优化</code></p><h2 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> LifeCycle Hooks</h2><p>setup里订制，可以实现按需导入到组件里。<code>这是优化性能</code></p><h2 id="template-refs" tabindex="-1"><a class="header-anchor" href="#template-refs" aria-hidden="true">#</a> Template refs</h2><p><code>Vue3.0的使用方案</code></p><h2 id="suspense组件" tabindex="-1"><a class="header-anchor" href="#suspense组件" aria-hidden="true">#</a> suspense组件</h2><p>defineAsyncComponent，模拟React.lazy() + suspense。<code>这是优化性能</code></p><h2 id="teleport组件" tabindex="-1"><a class="header-anchor" href="#teleport组件" aria-hidden="true">#</a> Teleport组件</h2><p>将组件挂载到指定Dom下的某个父节点下呈现HTML</p><h2 id="完整模板" tabindex="-1"><a class="header-anchor" href="#完整模板" aria-hidden="true">#</a> 完整模板</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    computed<span class="token punctuation">,</span>
    watch<span class="token punctuation">,</span>
    defineComponent<span class="token punctuation">,</span>
    getCurrentInstance<span class="token punctuation">,</span>
    onMounted<span class="token punctuation">,</span>
    PropType<span class="token punctuation">,</span>
    reactive<span class="token punctuation">,</span>
    ref<span class="token punctuation">,</span>
    toRefs
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">interface</span> <span class="token class-name">IState</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>object<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token keyword">null</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;vue3.x&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Array <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>object<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// props从父组件传递过来</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 定义reactive的响应式数据，返回一个对象</span>
      <span class="token keyword">const</span> state <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>IState<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue3.0 组件&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// compunted的使用方式</span>
      <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

      <span class="token comment">// watch的使用方式</span>
      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newName<span class="token punctuation">,</span> newCount<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>oldName<span class="token punctuation">,</span> oldCount<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>

      <span class="token comment">// 自定义生命周期</span>
      <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">handleClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;emits-name&#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
        handleClick
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","Vue3.0.html.vue"]]);export{u as default};
