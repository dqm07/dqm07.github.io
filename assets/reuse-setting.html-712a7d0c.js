import{_ as a,o as n,c as e,a as s}from"./app-4f7908e3.js";const i={},l=s(`<h1 id="复用的粒度" tabindex="-1"><a class="header-anchor" href="#复用的粒度" aria-hidden="true">#</a> 复用的粒度</h1><p>这是一次没有标准答案的探索，但是我们还是有一些原则可依据，需要<code>因地制宜</code>地去约定复用的粒度。</p><h2 id="具备抽象意识" tabindex="-1"><a class="header-anchor" href="#具备抽象意识" aria-hidden="true">#</a> 具备抽象意识</h2><p>探讨粒度的前提是要有抽象的意识，不再是面向过程的开发流程，抽象思维就是看需求共性，下沉基础能力。首先是有抽象意识，自己要意识到我要抽象，其次就是怎么抽象。 看一个例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>fangyuan<span class="token punctuation">.</span>intra<span class="token punctuation">.</span>xiaojukeji<span class="token punctuation">.</span>com<span class="token operator">/</span>#<span class="token operator">/</span>rules<span class="token operator">/</span>modifyV3<span class="token operator">/</span><span class="token number">30105</span>
<span class="token comment">// 规则/策略背景</span>
<span class="token comment">// 规则内容</span>
<span class="token comment">// 面相过程怎么开发</span>
自上而下的开发，完成需求功能即可，反观代码会有很多的重复代码
<span class="token comment">// 抽象思考怎么开发</span>
<span class="token number">1</span>、label <span class="token operator">+</span> input下沉
<span class="token number">2</span>、大模块的抽象配置化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何抽象" tabindex="-1"><a class="header-anchor" href="#如何抽象" aria-hidden="true">#</a> 如何抽象</h2><p>这背后其实就是抽象的粒度，一定抽的越细致约好吗，不抽象是不是也可以？</p><p>不抽象——————————————————————————————过度抽象</p><p>我们探讨的是中间态，有一些原则可提供。</p><h3 id="原则" tabindex="-1"><a class="header-anchor" href="#原则" aria-hidden="true">#</a> 原则</h3><blockquote><p>适合的例子+原则，最后需要一个总结 对于前端的复用：视图复用、逻辑复用、业务复用 复用中解耦可扩展的思考</p></blockquote><ul><li>repeat &gt;= 2就是有意义 （solid but 没有营养地的理由）</li></ul><p>先从一个例子入手看看，参与互动，怎么抽象，这其中我们用到了哪些原则</p><ul><li>原子组件：不可再拆分（UI组件、逻辑组件）</li><li>分子组件：存在一定可操作性【label + input】（antd\\elementui）</li><li>生物组件：环境产物【label + input + search + reset】(业务组件)</li><li>模板组件：复杂的生物组件、逻辑组件，最终归并到页面中（容器组件）</li><li>组件化和分层</li></ul><p>一些经验谈</p><ul><li>“状态组件无模板，模板组件无状态”</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 状态组件无模板 <span class="token operator">-</span> hooks
# 模板组件无状态 <span class="token operator">-</span> <span class="token constant">UI</span>组件

很好理解，不做过多地解释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>业务复用 &gt; 代码复用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 举一个例子
分层的概念：业务层的复用价值更大，代码复用解决不了业务重写的问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分而治之，降低维护成本</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 介绍tailwindcss粒度很细的一种方案
  # 维护成本
  <span class="token operator">-</span> 一层，不会出现嵌套的结构，为什么嵌套不好用
  <span class="token operator">-</span> 各个样式之间解耦性比较好
  <span class="token operator">-</span> 组合优于继承，更好扩展
  <span class="token operator">-</span> 可以组合成更复杂的集合
  <span class="token operator">-</span> 自定义简单
# 由此反之推理不适合这些维护成本的都不需要拆分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>状态管理建议props或者hooks，组件的原则</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 更好地解耦 hooks <span class="token operator">&amp;</span> composition <span class="token function">api</span> <span class="token punctuation">(</span>optional api<span class="token punctuation">)</span>
# 如果嵌入状态有什么问题，混乱的问题、违背了组件化的概念
# mixin就是个例子，不纯粹的组合形式带来的是灾难
# slot和高阶组件的逻辑，只有不混乱才能更好地维护
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不确定的项目可以尝试渐进的方式趋于完善</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 渐进式：egg中的插件与中间件的关系
# 项目里可以进行逐层的下沉，局部下沉，不断抽共性，没有粒度界定的复杂把控，同时可以不断地抽离沉淀
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开闭原则, 对修改关闭, 对扩展开放</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Membrane Mode: https://mp.weixin.qq.com/s/BYIay7w7BRRfar6zbzuNOw
我有个一组按钮的样式，我想复用但是颜色和功能上有些许的差异
- 限制层级数
- 通过重载进行内部扩展，内部逻辑不受影响
- 原子级的理念

webpack4 &amp; plugin，固定阶段暴露hook给用户自定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3的原则</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 三比较容易维护
# 第一次实现、第二次思考复用抽离、第三次直接复用
# 三层符合人类的记忆，拆分是否再有必要？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>通用的可复用原则：</p><ul><li>拆分不超过三层</li><li>一个层级里的逻辑能够尽量解耦</li><li>不明确的项目可以渐进式的拆分</li><li>状态的管理方式坚持props和hook的方案，即单向流或者完全解耦的形式</li></ul><p>反之，就不适合考虑复用的场景</p>`,33),d=[l];function r(c,t){return n(),e("div",null,d)}const o=a(i,[["render",r],["__file","reuse-setting.html.vue"]]);export{o as default};
