import{_ as s,c as a,o as l,a as e}from"./app.94a77c20.js";const F=JSON.parse('{"title":"String","description":"","frontmatter":{},"headers":[{"level":2,"title":"capitalize()","slug":"capitalize","link":"#capitalize","children":[]},{"level":2,"title":"isEmpty()","slug":"isempty","link":"#isempty","children":[]},{"level":2,"title":"isBlank()","slug":"isblank","link":"#isblank","children":[]},{"level":2,"title":"wrap()","slug":"wrap","link":"#wrap","children":[]},{"level":2,"title":"ellipsify()","slug":"ellipsify","link":"#ellipsify","children":[]}],"relativePath":"string.md"}'),n={name:"string.md"},t=e(`<h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#capitalize">capitalize()</a></li><li><a href="#isempty">isEmpty()</a></li><li><a href="#isblank">isBlank()</a></li><li><a href="#wrap">wrap()</a></li><li><a href="#ellipsify">ellipsify()</a></li></ul></nav><h2 id="capitalize" tabindex="-1">capitalize() <a class="header-anchor" href="#capitalize" aria-hidden="true">#</a></h2><p>capitalize the given string.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">capitalize</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>str</code></em> : string.</li></ul><blockquote><p>throws when <code>str</code> is not a function.</p></blockquote><h2 id="isempty" tabindex="-1">isEmpty() <a class="header-anchor" href="#isempty" aria-hidden="true">#</a></h2><p>checks if a string have no characters.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>value</code></em> : string.</li></ul><h2 id="isblank" tabindex="-1">isBlank() <a class="header-anchor" href="#isblank" aria-hidden="true">#</a></h2><p>checks if a string is blank or not.</p><p>a blank string is the one having no characters after being trimmed.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isBlank</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>value</code></em> : string.</li></ul><h2 id="wrap" tabindex="-1">wrap() <a class="header-anchor" href="#wrap" aria-hidden="true">#</a></h2><p>wrap a string.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">wrap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">wrapper</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">wrapperEnd</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>value</code></em> : string.</li><li><em><code>wrapper</code></em> : wrapper.</li><li><em><code>wrapperEnd</code></em> : the end wrapper. by default it takes the value of the wrapper.</li></ul><h2 id="ellipsify" tabindex="-1">ellipsify() <a class="header-anchor" href="#ellipsify" aria-hidden="true">#</a></h2><p>Trim and append ellipsis to the end of a string if the length is superior to the maximum provided.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ellipsify</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>text</code></em> : input string.</li><li><em><code>max</code></em> : maximum length.</li></ul><blockquote><p><em>throws when <code>text</code> is not a string.</em><em>throws when <code>max</code> is not a number.</em></p></blockquote>`,25),p=[t];function o(i,r,c,y,d,h){return l(),a("div",null,p)}const D=s(n,[["render",o]]);export{F as __pageData,D as default};
