import{_ as e,o as i,c as t,a as n}from"./app-4f7908e3.js";const a={},d=n(`<h1 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> redux</h1><h2 id="redux思想" tabindex="-1"><a class="header-anchor" href="#redux思想" aria-hidden="true">#</a> redux思想</h2><ul><li>state</li><li>action</li><li>reducer</li></ul><h3 id="思想简介" tabindex="-1"><a class="header-anchor" href="#思想简介" aria-hidden="true">#</a> 思想简介</h3><blockquote><p>思想很简单</p></blockquote><p>1、state是什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  todos: [{
    text: &#39;eat&#39;
  }, {
    text: &#39;drink&#39;
  }],
  visibilityFilter: &#39;SHOW_COMPLETED&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以是什么？状态树（一个包含所有状态的一个对象）。但是我们只能看不能动手改，也就是说我们可以取值不可以修改值，那我们是不是得需要有修改的能力？</p><p>蹡蹡</p><p>2、action出场，这是个什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{type: &#39;ADD_TODO&#39;, text: &#39;play&#39;}
{type: &#39;TOGGLE_TODO&#39;, index: 1}
{type: &#39;SET_VISIBILITY_FILTER&#39;, filter: &#39;SHOW_ALL&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>action看起来很简单，有没有一种语义化代码的意思，\b好像看到一个对象就知道这是做什么的。对！这就是action的意义，一个是发起修改，二是告知你们我的修改\b细节。</p><p>但是。。。action也并没有真正的修改state，他只是描述了有事情发送了这一事实，这个时候需要一个方式衔接action和state</p><p>3、reducer出场</p><p>不难理解这就是一个函数，拿到state和action，然后返回一个新的state。 \b 但是一个大的应用里我们不可能把所有的逻辑管理放在这样一个函数里，我们可以拆分很多小的函数各自管理各自的state，也就是拆分state tree。大概长这样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function visibilityFilter(state = &#39;SHOW_ALL&#39;, action) {
  if (action.type === &#39;SET_VISIBILITY_FILTER&#39;) {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case &#39;ADD_TODO&#39;:
      return state.concat([{text: action.text}])
    case &#39;TOGGLE_TODO&#39;:
      return state.map((todo, index) =&gt; {
        action.index === index
          ? {text: todo.text} 
          : todo
      })
    default:
      return state  
  }
}

// 再加一个reducer来调用这两个reducer
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于reducer的注意点：如果状态有变化，一定要返回新的state；如果\b没有命中\btype，要返回默认的state来兜底</p><p>That&#39;s all! 是不是很简单啊。</p><h3 id="三个原则" tabindex="-1"><a class="header-anchor" href="#三个原则" aria-hidden="true">#</a> 三个原则</h3><ul><li>单一数据源，确保state的唯一性</li><li>state的修改只能来自action，store.dispatch(action)</li><li>reducer是个纯函数</li></ul><h3 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> store</h3><p>忘记介绍store</p><p>store是衔接state/action/reducer之间的对象。他有一些额外的方法：</p><ul><li>getState()</li><li>dispatch(action)</li><li>subscribe() 注册监听器</li><li>subscribe() 返回的\b函数注销监听器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createStore } from &#39;redux&#39;
import todoApp from &#39;./reducers&#39;

let store = createStore(todoApp)

// store 注入reducer然后调用\b方法执行action完成对state的更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><ul><li>调用store.dispatch(action)</li><li>store调用传入的reducer</li><li>根reducer应该将多个子reducers的state合并成一个大的state</li><li>store保存了根reducer返回的state</li></ul><h2 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> provider</h2><p>提供一个容器，可以存放store。</p><h2 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> connect</h2><p>将\bstore里的数据通过props透传给模板函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const A = connect(
  mapStateToProps,
  mapDispatchToProps
)(template Fun)
// 最终在外层引用这个\b\b对象进行渲染
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例总结" tabindex="-1"><a class="header-anchor" href="#示例总结" aria-hidden="true">#</a> 示例总结</h2><ul><li>action定义最简单的行为：type &amp; 其他参数，type对应到reducers</li><li>reducers根据type处理state，返回新的state</li><li>总的reducers会combineReducers</li><li>\bconnect可以将store和模板连接，而且store到props的逻辑都在connect之前处理，connect\b之后通过props获取</li></ul><h2 id="redux开发步骤" tabindex="-1"><a class="header-anchor" href="#redux开发步骤" aria-hidden="true">#</a> \b\bRedux开发步骤</h2><ul><li>Provider 引入store</li><li>Store示例化通过CreateStore(rootReducer)</li><li>rootReducer可以拆成几个store，分别存储 <ul><li>reducer是修改state的纯函数</li><li>并且不可以返回在state本身上面修改的结果，需要返回一个新的state</li></ul></li><li>action定义操作类型和修改值，通过dispatch调用，并且action的type与reducer里的type匹配</li><li>关键步骤：将模板和state连接，connect即可，两个参数mapStateToProps /mapDispatchToProps，将整个state中需要在本模板使用的参数和方法引用一下。注意：返回的是({})，不是函数。</li><li>此时，我们可以在模板里直接通过props调用定义在map里的key对应的值进行操作</li><li>reducer参与store的初始化，action放在map函数里通过dispatch调用，且调用dispatch的本质就是执行reducer的state修改</li></ul>`,36),s=[d];function r(l,c){return i(),t("div",null,s)}const o=e(a,[["render",r],["__file","redux.html.vue"]]);export{o as default};
