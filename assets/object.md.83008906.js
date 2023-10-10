import{_ as s,c as a,o as l,a as n}from"./app.b5806b0d.js";const C=JSON.parse('{"title":"Object","description":"","frontmatter":{},"headers":[{"level":3,"title":"Types","slug":"types","link":"#types","children":[]},{"level":2,"title":"areEqual()","slug":"areequal","link":"#areequal","children":[]},{"level":2,"title":"copy()","slug":"copy","link":"#copy","children":[]},{"level":2,"title":"hasProperty()","slug":"hasproperty","link":"#hasproperty","children":[]},{"level":2,"title":"isFalsy()","slug":"isfalsy","link":"#isfalsy","children":[]},{"level":2,"title":"isFunction()","slug":"isfunction","link":"#isfunction","children":[]},{"level":2,"title":"isPrimitive()","slug":"isprimitive","link":"#isprimitive","children":[]},{"level":2,"title":"merge()","slug":"merge","link":"#merge","children":[]},{"level":2,"title":"isNumber()","slug":"isnumber","link":"#isnumber","children":[]},{"level":2,"title":"isString()","slug":"isstring","link":"#isstring","children":[]},{"level":2,"title":"isArray()","slug":"isarray","link":"#isarray","children":[]},{"level":2,"title":"isObject()","slug":"isobject","link":"#isobject","children":[]},{"level":2,"title":"isNull()","slug":"isnull","link":"#isnull","children":[]},{"level":2,"title":"isUndefined()","slug":"isundefined","link":"#isundefined","children":[]},{"level":2,"title":"isBoolean()","slug":"isboolean","link":"#isboolean","children":[]},{"level":2,"title":"isBigint()","slug":"isbigint","link":"#isbigint","children":[]},{"level":2,"title":"isSymbol()","slug":"issymbol","link":"#issymbol","children":[]},{"level":2,"title":"getType()","slug":"gettype","link":"#gettype","children":[]},{"level":2,"title":"forEachKey()","slug":"foreachkey","link":"#foreachkey","children":[]},{"level":2,"title":"pick()","slug":"pick","link":"#pick","children":[]},{"level":2,"title":"omit()","slug":"omit","link":"#omit","children":[]},{"level":2,"title":"keyHasCircularDependency()","slug":"keyhascirculardependency","link":"#keyhascirculardependency","children":[]}],"relativePath":"object.md"}'),e={name:"object.md"},o=n(`<h1 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h1><blockquote><p>individual package can be found here <a href="https://github.com/RiadhAdrani/obj-utils" target="_blank" rel="noreferrer"><code>@riadh-adrani/obj-utils</code></a>.</p></blockquote><br><nav class="table-of-contents"><ul><li><a href="#types">Types</a></li><li><a href="#areequal">areEqual()</a></li><li><a href="#copy">copy()</a></li><li><a href="#hasproperty">hasProperty()</a></li><li><a href="#isfalsy">isFalsy()</a></li><li><a href="#isfunction">isFunction()</a></li><li><a href="#isprimitive">isPrimitive()</a></li><li><a href="#merge">merge()</a></li><li><a href="#isnumber">isNumber()</a></li><li><a href="#isstring">isString()</a></li><li><a href="#isarray">isArray()</a></li><li><a href="#isobject">isObject()</a></li><li><a href="#isnull">isNull()</a></li><li><a href="#isundefined">isUndefined()</a></li><li><a href="#isboolean">isBoolean()</a></li><li><a href="#isbigint">isBigint()</a></li><li><a href="#issymbol">isSymbol()</a></li><li><a href="#gettype">getType()</a></li><li><a href="#foreachkey">forEachKey()</a></li><li><a href="#pick">pick()</a></li><li><a href="#omit">omit()</a></li><li><a href="#keyhascirculardependency">keyHasCircularDependency()</a></li></ul></nav><h3 id="types" tabindex="-1"><code>Types</code> <a class="header-anchor" href="#types" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">boolean</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bigint</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">symbol</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="areequal" tabindex="-1">areEqual() <a class="header-anchor" href="#areequal" aria-hidden="true">#</a></h2><p>perform deep comparison of two objects of any type.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">areEquals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">obj2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">depth</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>obj1</code></em> : first object.</li><li><em><code>obj2</code></em> : second object.</li><li><em><code>depth</code></em> : maximum comparison depth. <code>10</code> by default.</li></ul><h2 id="copy" tabindex="-1">copy() <a class="header-anchor" href="#copy" aria-hidden="true">#</a></h2><p>create a deep copy from the given object. Works only with plain JavaScript objects.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>source</code></em> : source object.</li></ul><h2 id="hasproperty" tabindex="-1">hasProperty() <a class="header-anchor" href="#hasproperty" aria-hidden="true">#</a></h2><p>checks if the given object has the named property as a key.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hasProperty</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>object</code></em> : source object.</li><li><em><code>property</code></em> : property name.</li></ul><h2 id="isfalsy" tabindex="-1">isFalsy() <a class="header-anchor" href="#isfalsy" aria-hidden="true">#</a></h2><p>checks if a value is falsy or not.</p><p>JavaScript falsy value are : <code>false</code>, <code>0</code>, <code>-0</code>, <code>&quot;&quot;</code>, <code>null</code>, <code>undefined</code>, <code>Nan</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFalsy</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">additionalFalsyList</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>value</code></em> : source object.</li><li><em><code>additionalFalsyList</code></em> : a list of additional value that should be considered falsy..</li></ul><h2 id="isfunction" tabindex="-1">isFunction() <a class="header-anchor" href="#isfunction" aria-hidden="true">#</a></h2><p>checks if an object is a function.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFunction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>object</code></em> : source object.</li></ul><h2 id="isprimitive" tabindex="-1">isPrimitive() <a class="header-anchor" href="#isprimitive" aria-hidden="true">#</a></h2><p>checks if an object is of a primitive type.</p><p>JavaScript primitive types : <code>string</code>, <code>number</code>, <code>bigint</code>, <code>boolean</code>, <code>undefined</code>, <code>symbol</code> and <code>null.</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isPrimitive</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>object</code></em> : source object.</li></ul><h2 id="merge" tabindex="-1">merge() <a class="header-anchor" href="#merge" aria-hidden="true">#</a></h2><p>perform deep merge of two <code>objects</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">&gt;&gt;(...</span><span style="color:#A6ACCD;font-style:italic;">objects</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>...objects</code></em> : objects to be merged.</li></ul><h2 id="isnumber" tabindex="-1">isNumber() <a class="header-anchor" href="#isnumber" aria-hidden="true">#</a></h2><p>checks if the object provided is a number.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isNumber</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isstring" tabindex="-1">isString() <a class="header-anchor" href="#isstring" aria-hidden="true">#</a></h2><p>checks if the object provided is a string.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isarray" tabindex="-1">isArray() <a class="header-anchor" href="#isarray" aria-hidden="true">#</a></h2><p>checks if the object provided is an array.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isArray</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isobject" tabindex="-1">isObject() <a class="header-anchor" href="#isobject" aria-hidden="true">#</a></h2><p>checks if the object provided is an object.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isnull" tabindex="-1">isNull() <a class="header-anchor" href="#isnull" aria-hidden="true">#</a></h2><p>checks if the object provided is null.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isNull</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isundefined" tabindex="-1">isUndefined() <a class="header-anchor" href="#isundefined" aria-hidden="true">#</a></h2><p>checks if the object provided is equal to <code>undefined</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isUndefined</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isboolean" tabindex="-1">isBoolean() <a class="header-anchor" href="#isboolean" aria-hidden="true">#</a></h2><p>checks if the object provided is of type <code>boolean</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBoolean</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="isbigint" tabindex="-1">isBigint() <a class="header-anchor" href="#isbigint" aria-hidden="true">#</a></h2><p>checks if the object provided is of type <code>bigint</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBigint</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="issymbol" tabindex="-1">isSymbol() <a class="header-anchor" href="#issymbol" aria-hidden="true">#</a></h2><p>checks if the object provided is of type <code>symbol</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSymbol</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="gettype" tabindex="-1">getType() <a class="header-anchor" href="#gettype" aria-hidden="true">#</a></h2><p>returns the <code>type</code> of the object.</p><p>This fucntion differntiate between <code>object</code>, <code>array</code> and <code>null</code>.</p><blockquote><p>check <a href="#types">Type</a> for the full list of values.</p></blockquote><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : any object.</li></ul><h2 id="foreachkey" tabindex="-1">forEachKey() <a class="header-anchor" href="#foreachkey" aria-hidden="true">#</a></h2><p>run a callback for each key in a <code>Record</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;)</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>callback</code></em> : callback to be executed.</li><li><em><code>object</code></em> : source object.</li></ul><blockquote><p><em>throws when object is not an object.</em></p></blockquote><h2 id="pick" tabindex="-1">pick() <a class="header-anchor" href="#pick" aria-hidden="true">#</a></h2><p>creates a new object with only the given keys.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;font-style:italic;">keys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Pick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>object</code></em> : source object.</li><li><em><code>...keys</code></em> : object&#39;s key to preserve.</li></ul><h2 id="omit" tabindex="-1">omit() <a class="header-anchor" href="#omit" aria-hidden="true">#</a></h2><p>creates a new object omitting the given keys.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">omit</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">object</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;font-style:italic;">keys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Omit</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>object</code></em> : source object.</li><li><em><code>...keys</code></em> : object&#39;s key to omit</li></ul><h2 id="keyhascirculardependency" tabindex="-1">keyHasCircularDependency() <a class="header-anchor" href="#keyhascirculardependency" aria-hidden="true">#</a></h2><p>detects if the given key have a circular dependency within.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hasCircularDependency</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">visited</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">unkown</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>o</code></em> : object</li><li><em><code>key</code></em> : specific key to be tested</li><li><em><code>visited</code></em> : a set of additional object that will be tested against each value within the specific key, empty by default.</li></ul>`,95),p=[o];function t(c,r,i,y,F,D){return l(),a("div",null,p)}const A=s(e,[["render",t]]);export{C as __pageData,A as default};