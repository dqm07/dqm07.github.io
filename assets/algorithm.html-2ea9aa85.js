import{_ as a,o as n,c as e,a as s}from"./app-4f7908e3.js";const i={},p=s(`<h1 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h1><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>是一种算法策略，相较于暴力方式找到答案，她是一种更加“聪明”的方式，而且时间复杂度上也不高。</p><h3 id="三要素" tabindex="-1"><a class="header-anchor" href="#三要素" aria-hidden="true">#</a> 三要素</h3><ul><li>存在最优子结构</li><li>存在重复子问题</li><li>无后效性</li></ul><h3 id="最优子结构" tabindex="-1"><a class="header-anchor" href="#最优子结构" aria-hidden="true">#</a> 最优子结构</h3><p>子问题的最优解可以推导出全局最优解，从问题中找到子问题，并且通过子问题的最优解建立与全局问题之间的关系，这个这个要素最关键也最难的地方。</p><p>举个栗子：爬楼梯问题中，爬的前几层则是走完全局的子问题，先找到前几层的最优解，那么爬完全局的最优路径可以从前几层的最优解中推导出来，因为后面的每一层都依赖前几层的结果。</p><h3 id="重复子问题" tabindex="-1"><a class="header-anchor" href="#重复子问题" aria-hidden="true">#</a> 重复子问题</h3><p>同一个子问题在不同场景下存在重复计算，重复计算的问题就不需要重复执行</p><p>同样是爬楼问题，例如爬到第二层还是第三层，那么第一层就是必经之层，这部分的计算无论计算第二层地三层都只会执行一次。</p><h3 id="无后效性" tabindex="-1"><a class="header-anchor" href="#无后效性" aria-hidden="true">#</a> 无后效性</h3><p>前面的选择不会影响后面的游戏规则</p><p>什么是有后效性呢？你的人生！那什么是没有后效性呢？背包问题、寻路等，这些的选择都不会影响背包大小和地图的地形。</p><h3 id="套路-状态转移方程" tabindex="-1"><a class="header-anchor" href="#套路-状态转移方程" aria-hidden="true">#</a> 套路-状态转移方程</h3><p>简而言之，通过之前某些步骤推导出未来步骤。<code>对于复杂问题，难在如何定义i的含义，以及下一步状态如何通过之前状态推导</code>。</p><p>看例子吧</p><h4 id="爬楼问题" tabindex="-1"><a class="header-anchor" href="#爬楼问题" aria-hidden="true">#</a> 爬楼问题</h4><blockquote><p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？（给定 n 是一个正整数）</p></blockquote><ul><li>明确子结构：第n阶一定可以从n-1和n-2推导出来，存在子结构</li><li>明确子问题：n阶的爬法存在n-1、n-2的爬法，n-1的爬法存在n-2爬法，存在重复问题</li><li>明确后效性：不存在，无论现在1阶还是2阶都不影响n的值，也不会影响下一次爬行的距离</li></ul><p>因此可以确认可以通过动态规划来处理，1、2无法运用通用状态转移方程，所以需要枚举，具体逻辑如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">i</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">dp</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们可以进一步优化逻辑，通过缓存减少dp的计算次数，甚至优化存储的冗余数据，因为我们每次只用前两次的数据。</p><h4 id="最大子序和" tabindex="-1"><a class="header-anchor" href="#最大子序和" aria-hidden="true">#</a> 最大子序和</h4><blockquote><p>给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p></blockquote><ul><li>dp(i) = dp(i-1) + nums[i], 如果dp(i-1) &gt; 0</li><li>dp(i) = nums[i], 如果dp(i-1) &lt;= 0</li></ul><h4 id="最长递增子序列——中等题" tabindex="-1"><a class="header-anchor" href="#最长递增子序列——中等题" aria-hidden="true">#</a> 最长递增子序列——中等题</h4><blockquote><p>给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。</p></blockquote><ul><li>dp(i) = max(dp[j]) + 1, 其中0 &lt;= j &lt; i &amp;&amp; num[j] &lt; num[i]</li></ul><h4 id="最长有效括号——困难题" tabindex="-1"><a class="header-anchor" href="#最长有效括号——困难题" aria-hidden="true">#</a> 最长有效括号——困难题</h4><blockquote><p>给你一个只包含 &#39;(&#39; 和 &#39;)&#39; 的字符串，找出最长有效（格式正确且连续）括号子串的长度。</p></blockquote><ul><li>dp(i) = dp(i-1) + dp(i - dp(i-1)), 如果i项与dp(i-1)前一项没有匹配</li><li>dp(i) = dp(i-1) + dp(i - dp(i-1) - 2) + 2, 如果i项与dp(i-1)前一项匹配了</li></ul><p><code>面对复杂问题，不要盯着全流程看，充分认可dp(i-x)已经计算出来的含义，进行高度抽象的思考。</code></p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li>定义清楚dp(i)是什么</li><li>定义状态转移方程，需要思考技巧</li><li>验证正确性</li></ul><h2 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h2><p>双指针场景，“快慢指针”也属于双指针场景。双指针滑动过程中会产生一个窗口，当窗口收缩到某种程度就可以得出一些结论。</p><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3><ul><li><code>数组</code>或者<code>链表</code>问题，尝试使用双指针</li><li><code>数组</code>存在规律</li><li><code>链表</code>问题限制多，低空间复杂度解决，尝试双指针</li></ul><h3 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和" aria-hidden="true">#</a> 三数之和</h3><blockquote><p>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。</p></blockquote><ul><li>先将数组进行排序，形成滑动窗口的前提</li><li>起点判定nums[i] &gt; 0，直接跳过，否则行程滑动窗口[i, i+1, n-1]</li><li>然后后两个变量行程小窗口</li><li>当前值 &gt; 0，移动右指针</li><li>当前值 &lt; 0，移动左指针</li><li>直到左右指针相遇</li></ul><h3 id="四数之和" tabindex="-1"><a class="header-anchor" href="#四数之和" aria-hidden="true">#</a> 四数之和</h3><p>同三数之和的思路</p><h3 id="无重复字符的最长子串" tabindex="-1"><a class="header-anchor" href="#无重复字符的最长子串" aria-hidden="true">#</a> 无重复字符的最长子串</h3><blockquote><p>给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。</p></blockquote><ul><li>设定left和right</li><li>有移right，如果出现重复字符，则left右移，直到消除这个重复字符为止</li></ul><h3 id="快慢指针——环形链表" tabindex="-1"><a class="header-anchor" href="#快慢指针——环形链表" aria-hidden="true">#</a> 快慢指针——环形链表</h3><blockquote><p>给定一个链表，判定链表中是否有环。</p></blockquote><p>类比操场，跑的快的人会遇到跑的慢的人，也就所谓的套圈。因此也就证明了他们在一个环上。</p><p>那么链表中怎么处理呢？如果想尽快证明有环，跑的慢的人最好不跑，跑的快的人遇到就是环。</p><p>但是链表不是一个完整的换，可能还是中间某处有环，也就是说，跑的快和跑的慢的人都需要在这个环里才能证明有环，那么怎么让跑的慢的人尽快进入环中，同时又能尽快的相遇，这是难点。</p><p>借鉴快排的思路（二分法），设定跑的快的人速度是慢的人的速度的二倍，过快过慢都会影响最终相遇的时间长度。</p><p><code>盛最多水的容器</code>、<code>接雨水</code>等都是经典的窗口算法模型</p>`,55),l=[p];function t(d,c){return n(),e("div",null,l)}const r=a(i,[["render",t],["__file","algorithm.html.vue"]]);export{r as default};
