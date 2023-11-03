import{_ as e,o as a,c as i,a as l}from"./app-4f7908e3.js";const o={},r=l('<h1 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx" aria-hidden="true">#</a> Mobx</h1><p>几个名词</p><ul><li>透明函数响应式编程</li><li>任何起源于应用状态的数据应该自动获取</li></ul><p>解释上面几个名词之前，我们先看几个核心概念</p><ul><li>observable &amp; observer Mobx会对 在执行 跟踪函数 期间读取的 任何现有的可观察属性 做出反应</li></ul><h2 id="mobx-三步骤" tabindex="-1"><a class="header-anchor" href="#mobx-三步骤" aria-hidden="true">#</a> Mobx 三步骤</h2><ul><li>定义状态并使得其可观察</li><li>创建视图以响应状态的变化</li><li>更改状态</li></ul><h2 id="mobx-几个概念和原则" tabindex="-1"><a class="header-anchor" href="#mobx-几个概念和原则" aria-hidden="true">#</a> Mobx 几个概念和原则</h2><ul><li>state——状态，不多解释</li><li>derivations——源自状态，并且不会再有进一步的相互作用的东西 <ul><li>computed values——计算属性</li><li>reactions——状态变化需要发生的副作用</li></ul></li><li>actions——状态的唯一修改入口</li></ul><h2 id="mobx的优缺点" tabindex="-1"><a class="header-anchor" href="#mobx的优缺点" aria-hidden="true">#</a> Mobx的\b优缺点</h2><ol><li>学习成本少 模板少 面向对象</li><li>太过自由可能存在规范问题，也就是应用在大应用中可能存在问题，扩展是问题，简单的使用背后是包裹了很多深层是逻辑，技术掌握上也就是停留在使用层面</li></ol><h2 id="mobx-vs-redux" tabindex="-1"><a class="header-anchor" href="#mobx-vs-redux" aria-hidden="true">#</a> Mobx vs Redux</h2><p>https://juejin.im/post/5a7fd72c5188257a766324ae#heading-12</p>',13),d=[r];function t(h,s){return a(),i("div",null,d)}const c=e(o,[["render",t],["__file","mobx.html.vue"]]);export{c as default};
