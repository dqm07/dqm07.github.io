import{_ as e,o as n,c as i,a as l}from"./app-4f7908e3.js";const a={},d=l(`<h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><h2 id="函数式组件和类组件" tabindex="-1"><a class="header-anchor" href="#函数式组件和类组件" aria-hidden="true">#</a> 函数式组件和类组件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 函数式组件
function Welcome(props) {
    return &lt;h1&gt;hello, {props.name}&lt;/h1&gt;
}

// 类组件
class Welcome extends React.Component {
    render() {
        return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>组件名称首字母大写；提取可复用的组件；所有的react组件必须纯函数，即不可以修改props</p></blockquote><h2 id="state-——-类比vue里的data" tabindex="-1"><a class="header-anchor" href="#state-——-类比vue里的data" aria-hidden="true">#</a> state —— 类比vue里的data</h2><p>类组件里增加state</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }
    
    render() {
        return (
            &lt;div&gt;{this.state.date}&lt;/div&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state的正确使用方法</p><ul><li>不能直接修改state —— 直接修改不会渲染，setState修改</li><li>state更新可能是异步的 —— 使用接受函数的形式，上一个状态和props</li><li>state状态会被合并</li></ul><p>==数据单向流==</p><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><p>getDefaultProps() —— 对应Vue的beforeCreated</p><p>getInitialState() —— 对应Vue的created</p><p>componentWillMount() —— 对应Vue的beforeMounted</p><p>render() —— 无（创建虚拟dom，进行diff算法和更新dom树都在此）</p><p>componentDidMount() —— 对应vue的Mounted 即组件挂载。</p><p>componentWillReceiveProps —— 无</p><p>shouldComponentUpdate —— 无</p><p>componentWillUpdate —— 对应Vue的beforeUpdate</p><p>componentDidUpdate —— 对应Vue的updated</p><p>componentWillUnmount() —— 对应vue的destroy 即组件销毁</p><h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2><p>事件使用驼峰命名</p><p>函数进行事件处理</p><p>阻止本身不能使用return false, 而是preventDefault</p><p>es6定义一个组件，定义的方法必须绑定this，否则this为undefined</p><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2><ul><li>元素变量</li><li>逻辑&amp;&amp;操作符的内联if</li><li>if else</li><li>防止组件渲染 组件里return null</li></ul><h2 id="状态提升" tabindex="-1"><a class="header-anchor" href="#状态提升" aria-hidden="true">#</a> 状态提升</h2><p>共享状态：通过将其移动到需要它的组件的最接近的共同祖先组件来实现。</p><p>状态提升：某个组件里的状态需要在其他组件里使用，那么将这个组件的状态提升到二者的共同最近的父组件即可</p><h2 id="组合和继承" tabindex="-1"><a class="header-anchor" href="#组合和继承" aria-hidden="true">#</a> 组合和继承</h2><p>包含：children === vue 之 slot default</p><p>props === slot + name</p><p>props + children 充分完善占位和包含的关系</p><h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2><p>组件引用首字符大写，否则默认为html标签。如果定义小写字母的组件，请将其赋值给大写字母的变量，然后引用大写字母的变量组件。</p><h3 id="jsx里的props" tabindex="-1"><a class="header-anchor" href="#jsx里的props" aria-hidden="true">#</a> jsx里的Props</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// {}
&lt;MyComponent foo={1+2+3+4} /&gt;

// if和for不能直接作用在jsx中，在附件即可。

// 默认值为true
&lt;MyComponent autocomplete&gt;
&lt;MyComponent autocomplete={true}&gt;

// 扩展操作符
function App2() {
  const props = {firstName: &#39;Ben&#39;, lastName: &#39;Hector&#39;};
  return &lt;Greeting {...props} /&gt;;
}

// 不渲染
&lt;div /&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;{false}&lt;/div&gt;
&lt;div&gt;{null}&lt;/div&gt;
&lt;div&gt;{undefined}&lt;/div&gt;
&lt;div&gt;{true}&lt;/div&gt;

但是false中为0也会渲染，例如某个List.length===0后面的组件一样渲染，解决这个问题&gt;0。
想要输出false undefined null String(variable)就好了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proptypes" tabindex="-1"><a class="header-anchor" href="#proptypes" aria-hidden="true">#</a> PropTypes</h2><p>类型检测，简单示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import PropTypes from &#39;prop-types&#39;

class Greeting extends React.Component {
    render() {
        return (
            &lt;h1&gt;hello, {this.props.name}&lt;/h1&gt;
        )
    }
}

Greeting.propTypes = {
    name: PropTypes.string
}

// 还有个defaultProps用于设置默认值，用法雷同propTypes
Greeting.defaultProps = {
    name: &#39;Stranger&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型很多，方式不同，使用可查</p><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2><p>ref 接受回调函数，mounted和unmounted都会立即执行</p><ul><li>html元素上添加ref，回调接受底层dom元素，卸载的时候传递null，在componentDidMount和componentDidUpdate这些生命周期之前执行ref回调</li><li>class组件添加ref，回调返回组件实例</li><li>不可以在函数式组件上使用ref，因为没有实例，也就没有dom；但是函数式组件内部可以使用ref引用dom或者class</li><li>对父组件暴露dom节点：不建议做，展示一个简单例子，同时可以多层级传递使用。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function CustomTextInput(props) {
  return (
    &lt;div&gt;
      &lt;input ref={props.inputRef} /&gt;
    &lt;/div&gt;
  );
}

class Parent extends React.Component {
  render() {
    return (
      &lt;CustomTextInput
        inputRef={el =&gt; this.inputElement = el}
      /&gt;
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不受控组件" tabindex="-1"><a class="header-anchor" href="#不受控组件" aria-hidden="true">#</a> 不受控组件</h2><p>受控组件：数据的获取和管理由react 不受控组件：数据的获取管理由开发者，获取来自dom元素本身处理</p><p>表单书写中不受控组件可能会节省代码，但是何时选择受控组件和不受控组件呢？</p><p>那就是看看需求是不是充分需要使用state的能力，如果逻辑足够简单，不需要通过一个state来管理我们的数据，那么就用非受控组件吧，不用在意那些说关于refs不提倡的建议。这么看来默认受控组件是万金油。</p><h2 id="优化性能" tabindex="-1"><a class="header-anchor" href="#优化性能" aria-hidden="true">#</a> 优化性能</h2><ul><li>shouldComponentUpdate: false。手动控制不需要重新渲染的组件，或者通过继承React.pureComponent，通过比较两次的state和props来断定是否需要重新渲染。</li><li>面对复杂的数据结构，我们进行数据的前后比较可能存在不更新的情况，这个跟vue很类似，例如数组和对象，因为引用的关系，导致内部的值的变化不会引起数据结构的浅检测，因此不更新，我们可以通过其他方式拷贝赋值，产生新对象的形式实现数据的变化更新。（对象扩展符）</li><li>immutatable：一旦生成不可以修改、原集合仍旧可以使用和结构共享（不存在复制的问题）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const a = {&#39;foo&#39;: &#39;bar&#39;}
let b = a
b.foo = &#39;baz&#39;
a === b // true，因为b一直在引用a，可以理解为浅比较

const someRecord = Immutable.Record({foo: null})
const x = new someRecord({foo: &#39;aaa&#39;})
const y = x.set(&#39;foo&#39;, &#39;bbb&#39;)
const z = x.set(&#39;foo&#39;, &#39;aaa&#39;)

x === y // false，因为针对immutable数据修改了x，生成新的对象
x === z // true，没有改变x，因此不会产生新对象
上面示例的好处在于：当我们再处理数组的时候，如果内部结构改变了，产生新的对象，如果没有变化那么不会产生，因此完美解决了上面浅比较的问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不使用es6" tabindex="-1"><a class="header-anchor" href="#不使用es6" aria-hidden="true">#</a> 不使用ES6</h2><p>根据传统的ES6，我们可以使用create-react-class，功能雷同React.Component。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let createReactClass = require(&#39;create-react-class&#39;)

let Greeting = createReactClass({
    // 获取默认值
    getDefaultProps: function() {
        return {
            name: &#39;Mary&#39;
        }  
    },
    // 定义初始状态
    getInitalState: function() {
        return {
            count: this.props.initCount
        }  
    },
    render: function() {
        return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为es6 class语法限制，方法不自动绑定this到实例上，因此我们在使用class进行组件封装的方法时候需要手动绑定this，但是在非es6方法里不需要。</p><p>不提倡使用mixin，因为es6不支持。功能像VUE那样使用。</p><h2 id="不使用jsx" tabindex="-1"><a class="header-anchor" href="#不使用jsx" aria-hidden="true">#</a> 不使用JSX</h2><p>取代JSX的功能是React.createElement(domNode, attr, children)</p><h2 id="一致性比较——diff算法" tabindex="-1"><a class="header-anchor" href="#一致性比较——diff算法" aria-hidden="true">#</a> 一致性比较——diff算法</h2><ul><li>父组件更新，子组件更新，无论子组件是否需要更新</li><li>dom相同节点不更新，类型相同的组件实例不重新生成</li><li>绑定Key更新提升效率</li><li>同级更新</li><li>key值保持唯一性</li></ul><h2 id="实验性api——context" tabindex="-1"><a class="header-anchor" href="#实验性api——context" aria-hidden="true">#</a> 实验性api——context</h2><p>实验性意味着未来可能会在react规范里被删除掉，因此不建议直接使用。</p><p>context的作用是实现组件state同步，而不需要逐层传递状态的一种方式。</p><p>更好的方案是redux和mobx这类state状态管理库。</p><blockquote><p>不建议使用context，就算使用也要作用域在小范围里的使用，同时直接使用context，方便升级。</p></blockquote><p>暂时先不使用，也就不学习了~</p><h2 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments" aria-hidden="true">#</a> fragments</h2><p>类似vue里的template，但是又不全是。这里存在是为了生成子元素列表，如果一般方式返回的子元素列表需要一个root，因此在调用子元素列表中会莫名生成一个div（举例） root，为了解决这个问题提出了React.Fragment作为一个不会实际生成的节点作为root。这个root还会绑定key值</p><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>vue里的slot，有没有</p><p>使用规范：reactDom.createPortal(this.props.children, domNode)</p><h2 id="错误边界" tabindex="-1"><a class="header-anchor" href="#错误边界" aria-hidden="true">#</a> 错误边界</h2><p>部分ui的js错误不应该影响整个应用程序。一旦捕捉到错误边界以后直接将错误的组件模块卸载掉，从而不影响其他组件的使用。</p><p>错误边界定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    
    // error: 错误信息 info：包含componentStack属性
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
        
        logErrorToMyService(error, info)
    }
    
    render() {
        if(this.state.hasError) {
            return &lt;h1&gt;Something went wrong&lt;/h1&gt;
        }
        
        return this.props.children
    }
}


&lt;ErrorBoundary&gt;
    &lt;Component /&gt;
&lt;/ErrorBoundary&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间处理器内部的错误通过try/catch来处理，声明式的代码不使用try/catch，命令式使用try/catch</p><blockquote><p>ps: &lt;= version 15 unstable_handleError or componentDidCatch</p></blockquote><h2 id="web组件" tabindex="-1"><a class="header-anchor" href="#web组件" aria-hidden="true">#</a> web组件</h2><p>若想使用web组件，通过react封装组件可以使用web组件暴露的api</p><p>同时web组件不能正确通过react渲染，因此不能通过冒泡捕获，需要手动捕获事件。</p><h2 id="高阶组件" tabindex="-1"><a class="header-anchor" href="#高阶组件" aria-hidden="true">#</a> 高阶组件</h2><ul><li>本着不修改被包裹组件的逻辑，就是纯函数</li><li>高阶组件不宜在render函数里使用，每次render会重新创建</li><li>refs不传递，跟key不一样，refs是个伪属性，这不是组件本身产生，而是react特殊处理。如果在高阶组件里传递refs并不会定位到被包裹的组件里，而是外部包裹组件示例上了。</li></ul><h2 id="三方库协作" tabindex="-1"><a class="header-anchor" href="#三方库协作" aria-hidden="true">#</a> 三方库协作</h2><ul><li>react会维护一套dom，而jquery是进行dom操作，因此我们需要针对dom操作的时候区分谁在处理即可。</li><li>简单方案就是组织react去更新外部dom操作，通过生成一个react根本不更新的元素la实现，例如返回一个空的<div></div></li><li>其他插件修改某个dom节点，保证react不会同时去修改这个节点，例如div包含一个组件，react在渲染默认就一个子组件，而jQuery在操作的是react节点后面的新增dom，这俩互相不影响。</li><li>如何触发其他库的dom操作？—— 通过react的Props.children来手动触发dom操作</li></ul><h2 id="react顶层api" tabindex="-1"><a class="header-anchor" href="#react顶层api" aria-hidden="true">#</a> react顶层API</h2><ul><li>组件 React.Component / React.PureComponent / create-react-class(Es5)</li></ul><blockquote><p>React.PureComponent: shouleComponentUpdate()进行==浅比较==，同时该方法会跳过整个组件子树的Props更新。</p></blockquote><p>==生命周期==</p><ol><li>Mounting</li></ol><p>constructor() componentWillMount() render() componentDidMount()</p><ol start="2"><li>Updating</li></ol><p>componentWillReceiveProps() shouldComponentUpdate() componentWillUpdate() render() componentDidUpdate()</p><ol start="3"><li>Unmounting</li></ol><p>componentWillUnmount()</p><p>==其他APIs==</p><p>setState() forceUpdate()</p><p>==类属性==</p><p>defaultProps displayName</p><p>==实例属性==</p><p>props state</p><ul><li>创建元素</li></ul><p>createElement / createFactory</p><ul><li>转换元素</li></ul><p>cloneElement / isValidElement / React.Children</p><ol><li>React.Children.map</li><li>React.Children.forEach</li><li>React.Children.count</li><li>React.Children.only</li><li>React.Children.toArray</li></ol><ul><li>ReactDOM &amp; ReactDOMServer</li></ul><ol><li>render()</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ReactDOM.render(
    element,   // react元素
    container,   // 被添加到的dom节点
    [callback]   // 渲染或者更新以后的回调
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>hydrate()</li><li>unmountComponentAtNode()</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 卸载成功返回true，没有组件卸载返回false
ReactDOM.unmountComponentAtNode(container)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>findDOMNode()</li><li>createPortal()</li></ol><h2 id="dom元素-elements" tabindex="-1"><a class="header-anchor" href="#dom元素-elements" aria-hidden="true">#</a> DOM元素(elements)</h2><h2 id="合成事件" tabindex="-1"><a class="header-anchor" href="#合成事件" aria-hidden="true">#</a> 合成事件</h2><p>关于合成事件和原生事件你应该知道的两三事</p><ul><li>合成事件注册在document上面，且只有冒泡阶段</li><li>合成事件执行晚于原生事件，这个前提也是原生事件绑定了捕获阶段执行</li><li>stopPropagation阻止原生事件的冒泡后，会阻止合成事件的执行，这个也是需要将原生事件绑定捕获阶段</li><li>合成事件里的stopPropgation只会阻止合成事件的冒泡，不会阻止原生事件的执行</li><li>合成事件里使用stopImediatePropgation会阻止原生的冒泡，但是不会阻止合成事件里的其他事件执行</li></ul><h2 id="setstate一二三" tabindex="-1"><a class="header-anchor" href="#setstate一二三" aria-hidden="true">#</a> setState一二三</h2><ul><li>setState 只在==合成事件和钩子函数==中是“异步”的，在原生事件和setTimeout 中都是同步的。</li><li>setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是==合成事件和钩子函数的调用顺序在更新之前==，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。</li><li>setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，==在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖==，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。</li></ul><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h2><ul><li>共享那些被认为对于一个组件树而言是“全局”的数据</li><li>不要为了避免层级之间的props传递而使用context，她存在的意义是多个层级的组件都在使用的相同数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Consumer使用上级的Provider，如果没有的话使用默认的defaultValue
const {Provider, Consumer} = React.createContext(defaultValue)

// Provider
&lt;Provider value={/* some value */}&gt;

// Consumer
&lt;Consumer&gt;
    {value =&gt; /* render sth based on the context value */}
&lt;/Consumer&gt;

// Provider更新会触发Consumer更新，这个更新不受shouldComponentUpdate影响

// 组件树中更新context，context可以向下传递一个函数
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () =&gt; {}
})

...
return (
    &lt;ThemeContext.Consumer&gt;
      {({theme, toggleTheme}) =&gt; (
        &lt;button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}&gt;
          Toggle Theme
        &lt;/button&gt;
      )}
    &lt;/ThemeContext.Consumer&gt;
);
...

// 多个上下文嵌套使用，将这样的嵌套抽离成一个独立的组件，有利于快速渲染
// 生命周期里使用context通过props即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123),s=[d];function t(r,c){return n(),i("div",null,s)}const u=e(a,[["render",t],["__file","base.html.vue"]]);export{u as default};
