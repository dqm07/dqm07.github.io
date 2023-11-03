import{_ as l,o as i,c as e,a}from"./app-4f7908e3.js";const t={},r=a('<h1 id="服务端稳定性" tabindex="-1"><a class="header-anchor" href="#服务端稳定性" aria-hidden="true">#</a> 服务端稳定性</h1><h2 id="认知" tabindex="-1"><a class="header-anchor" href="#认知" aria-hidden="true">#</a> 认知</h2><p>我是一名前端工程师，对于后端开发，尤其要做一个复杂高流量的后端服务的时候，首先需要明确一个自身的认知问题：任何服务都不可能做到一直稳定，不是要做到一个不出问题的服务端，而是针对每种问题都能做到及时止损，减少故障范围，尽可能提升系统的可用率。</p><h2 id="有哪些问题" tabindex="-1"><a class="header-anchor" href="#有哪些问题" aria-hidden="true">#</a> 有哪些问题</h2><ul><li>降级 <ul><li>主要应对在流量激增的时候，做到服务中的功能保大舍小，确保重点功能稳定，确保整体的负荷</li></ul></li><li>熔断 <ul><li>针对依赖的下游服务异常触发熔断，避免引发当前系统的崩溃</li></ul></li><li>限流 <ul><li>限制请求的并发量，超过阈值则拒绝</li></ul></li><li>切流 <ul><li>将线上流量从故障集群切换到正常的集群上面</li></ul></li><li>容灾 <ul><li>冗余备份，确保主服务出现异常的情况，启动备份，确保服务可用性</li></ul></li><li>容错 <ul><li>代码运行中出现错误还能确保服务的稳定运行</li></ul></li><li>隔离 <ul><li>功能隔离并独立部署，或者按照人进行隔离请求</li></ul></li></ul>',5),u=[r];function c(h,d){return i(),e("div",null,u)}const s=l(t,[["render",c],["__file","stable.html.vue"]]);export{s as default};