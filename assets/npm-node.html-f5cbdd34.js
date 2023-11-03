import{_ as n,o as s,c as a,a as e}from"./app-4f7908e3.js";const i={},l=e(`<h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1><p>最大的软件注册地，三部分组成：官网、cli和npm包集合。对于Npm包的集中管理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> view npm-package version<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token comment">## 查看npm包的版本号，不含s的情况下是最新版本</span>

<span class="token function">npm</span> info npm-package
<span class="token comment">## 查看所有版本号，但是信息会更全</span>

<span class="token function">npm</span> <span class="token function">ls</span> npm-package（-g）
<span class="token comment">## 查看本地的npm包版本（全局）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="npx" tabindex="-1"><a class="header-anchor" href="#npx" aria-hidden="true">#</a> npx</h1><p>执行npm包不用下载包</p><h1 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> n</h1><p>交互式node版本管理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n

<span class="token comment">## n &lt;version&gt;</span>
<span class="token comment">## 安装某个版本，如果已经安装那么n会从缓存中安装，并切换到当前版本</span>
n <span class="token number">10.16</span>.0
n lts <span class="token comment">##安装最新版本</span>

<span class="token comment">## n</span>
<span class="token comment">## 查看node的已安装版本</span>
n

<span class="token comment">## rm</span>
n <span class="token function">rm</span> <span class="token number">0.9</span>.4 v0.10.0

<span class="token comment">## prune 删除当前版本之外的全部</span>
n prune

<span class="token comment">## uninstall</span>
n uninstall

<span class="token comment">## 三种不安装node直接使用的方式</span>
<span class="token comment">## 1、直接查到node地址使用</span>
n <span class="token function">which</span> version
<span class="token comment">## 2、run命令指定下载版本执行</span>
n run version <span class="token parameter variable">--debug</span> test.js
<span class="token comment">## 3、exec</span>
n <span class="token builtin class-name">exec</span> version <span class="token function">zsh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h1><p>功能与n相同，不同的是nvm是独立的软件包，能力相较于n更强大</p><h1 id="nrm" tabindex="-1"><a class="header-anchor" href="#nrm" aria-hidden="true">#</a> nrm</h1><p>简单快捷地切换npm源，目前包含了npm、cnpm、taobao、nj(nodejitsu)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm

<span class="token comment">## 查看源列表</span>
nrm <span class="token function">ls</span>

<span class="token comment">## 切换源</span>
nrm use registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[l];function d(m,p){return s(),a("div",null,c)}const t=n(i,[["render",d],["__file","npm-node.html.vue"]]);export{t as default};
