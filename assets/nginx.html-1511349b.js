import{_ as n,o as s,c as a,a as i}from"./app-4f7908e3.js";const l={},e=i(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><p>静态服务，高性能的http和反向代理服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>.              <span class="token comment"># 全局块</span>

events <span class="token punctuation">{</span>         <span class="token comment"># events模板</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>           <span class="token comment"># http块</span>
  <span class="token punctuation">..</span>.            <span class="token comment"># http全局块</span>

  server <span class="token punctuation">{</span>       <span class="token comment"># server块</span>
    <span class="token punctuation">..</span>.          <span class="token comment"># server全局块</span>

    location <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span> <span class="token punctuation">{</span>    <span class="token comment"># location块</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
    location <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span> <span class="token punctuation">{</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  server <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
  <span class="token punctuation">..</span>.       <span class="token comment"># http全局块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>全局块：nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入等全局的指令</li><li>events块：配置影响nginx服务器与用户的网络连接</li><li>http块：嵌套多个server，配置代理、缓存、日志定义等绝大多数功能和第三方模块的配置</li><li>server块：虚拟主机的相关配置</li><li>location块：配置请求的路由 <ol><li>匹配模式 <ol><li>location [ = | ~ | ~* | ^~ ] /URI { ... } <ol><li>= ： 精准匹配，匹配成功后停止搜索</li><li>^~ ： 正则匹配，匹配到就停止匹配</li><li>~ ： 正则匹配，区分大小写</li><li>~* ： 正则匹配，不区分大小写</li><li>空 ： 前缀匹配</li></ol></li><li>location @/name/ { ... } <ol><li>内部定向，即当找不到某个匹配文件走内部的location</li></ol></li></ol></li><li>alias与root的区别 <ol><li>root追加path，而alias是整个path别名，替代path</li></ol></li><li>try files <ol><li>try_files $uri /app/ @callback</li><li>顺序匹配文件，找到即返回，否则走到最后的一个内部重定向参数</li></ol></li><li>index <ol><li>默认index，按照顺序执行，最后一个可以是相对路径</li></ol></li><li>proxy_pass <ol><li>代理到某个Path，不影响浏览器的Url</li></ol></li><li>rewrite <ol><li>会替换掉浏览器的Url</li></ol></li></ol></li></ol><h2 id="平滑重启原理" tabindex="-1"><a class="header-anchor" href="#平滑重启原理" aria-hidden="true">#</a> 平滑重启原理</h2>`,5),t=[e];function c(o,p){return s(),a("div",null,t)}const d=n(l,[["render",c],["__file","nginx.html.vue"]]);export{d as default};
