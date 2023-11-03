import{_ as e,o as i,c as l,a}from"./app-4f7908e3.js";const n={},d=a(`<h1 id="blob" tabindex="-1"><a class="header-anchor" href="#blob" aria-hidden="true">#</a> Blob</h1><blockquote><p>文件和二进制数据的操作</p></blockquote><p>Blob用来直接操作<code>二进制数据</code></p><h2 id="blob对象" tabindex="-1"><a class="header-anchor" href="#blob对象" aria-hidden="true">#</a> Blob对象</h2><p>blob对象代表着一段二进制数据，对象的生成有两种方式：</p><ul><li>构造函数</li><li>现有的对象进行slice（分片上传等）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let myBlob = new Blob(content, type)

let newBlob = oldBlob.slice(start, end)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filelist对象" tabindex="-1"><a class="header-anchor" href="#filelist对象" aria-hidden="true">#</a> FileList对象</h2><blockquote><p>针对表单的file控件来操作</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(&#39;input).files[0]

&lt;input type=&quot;file multiple onchange=&quot;console.log(this.files.length)&quot;&gt;

e.dataTransfer.files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> File</h2><blockquote><p>fileList里的单个成员，包含了文件的一些元信息</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: 
size: 
type: 
lastModified: 时间戳格式
lastModifiedDate: Date对象实例
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filereader" tabindex="-1"><a class="header-anchor" href="#filereader" aria-hidden="true">#</a> FileReader</h2><blockquote><p>将文件读取到内存里，入参是File对象或者Blob对象</p></blockquote><ul><li>readAsBinaryString(Blob|File)</li><li>readAsText(Blob|File, opt_encoding): 默认是utf-8的格式</li><li>readAsDataURL(Blob|File): 返回Base64编码的data-uri对象</li><li>readAsArrayBuffer(Blob|File): 返回一个ArrayBuffer对象</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// readAsArrayBuffer为例
let reader = new FileReader()
reader.onload = function(e) {
  let arrayBuffer = reader.result
}

reader.readAsArrayBuffer(file)

reader.abort() //中止
reader.onerror()
reader.onprogress()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url对象" tabindex="-1"><a class="header-anchor" href="#url对象" aria-hidden="true">#</a> URL对象</h2><blockquote><p>用来生成指向File对象或者Blob对象的URL</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 生成一个url，且同一个二进制数据每次执行后的结果都不一样
let _url = window.URL.createObjectURL(blob)

// 生成的url的失效时间跟随网页的刷新或者卸载，或者可以手动使得url失效
window.URL.revokeObjectURL(_url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[d];function s(t,c){return i(),l("div",null,r)}const u=e(n,[["render",s],["__file","file-binary.html.vue"]]);export{u as default};
