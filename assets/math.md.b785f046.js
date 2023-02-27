import{_ as s,c as a,o as n,a as e}from"./app.94a77c20.js";const C=JSON.parse('{"title":"Math","description":"","frontmatter":{},"headers":[{"level":2,"title":"isInInterval()","slug":"isininterval","link":"#isininterval","children":[]},{"level":2,"title":"clamp()","slug":"clamp","link":"#clamp","children":[]},{"level":2,"title":"calcDistance()","slug":"calcdistance","link":"#calcdistance","children":[]},{"level":2,"title":"calcDistance3d()","slug":"calcdistance3d","link":"#calcdistance3d","children":[]},{"level":2,"title":"random()","slug":"random","link":"#random","children":[]}],"relativePath":"math.md"}'),l={name:"math.md"},o=e(`<h1 id="math" tabindex="-1">Math <a class="header-anchor" href="#math" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#isininterval">isInInterval()</a></li><li><a href="#clamp">clamp()</a></li><li><a href="#calcdistance">calcDistance()</a></li><li><a href="#calcdistance3d">calcDistance3d()</a></li><li><a href="#random">random()</a></li></ul></nav><h2 id="isininterval" tabindex="-1">isInInterval() <a class="header-anchor" href="#isininterval" aria-hidden="true">#</a></h2><p>checks if the given value is within the [<code>min</code>...<code>max</code>] interval.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isInInterval</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">min</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>min</code></em> : minimum value.</li><li><em><code>max</code></em> : maximum value.</li><li><em><code>value</code></em> : tested value.</li></ul><blockquote><p><em>throws when one/more argument/s is/are not of type number.</em></p></blockquote><blockquote><p><em>throws when <code>min</code> is superior to max.</em></p></blockquote><h2 id="clamp" tabindex="-1">clamp() <a class="header-anchor" href="#clamp" aria-hidden="true">#</a></h2><p>clamp a number between two values.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">clamp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">min</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>min</code></em> : minimum value.</li><li><em><code>max</code></em> : maximum value.</li><li><em><code>value</code></em> : number to be clamped.</li></ul><blockquote><p><em>throws when one/more argument/s is/are not of type number.</em></p></blockquote><blockquote><p><em>throws when <code>min</code> is superior to max.</em></p></blockquote><h2 id="calcdistance" tabindex="-1">calcDistance() <a class="header-anchor" href="#calcdistance" aria-hidden="true">#</a></h2><p>calculate a distance between two points in a 2D space.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calcDistance</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>x1</code></em> : first point x coordinate.</li><li><em><code>y1</code></em> : first point y coordinate.</li><li><em><code>x2</code></em> : second point x coordinate.</li><li><em><code>y2</code></em> : second point y coordinate.</li></ul><blockquote><p><em>throws when one/more argument/s is/are not of type number.</em></p></blockquote><h2 id="calcdistance3d" tabindex="-1">calcDistance3d() <a class="header-anchor" href="#calcdistance3d" aria-hidden="true">#</a></h2><p>calculate a distance between two points in a 3D space.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calcDistance</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">x1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">y1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">z1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">x2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">y2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">z2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>x1</code></em> : first point x coordinate.</li><li><em><code>y1</code></em> : first point y coordinate.</li><li><em><code>z1</code></em> : first point z coordinate.</li><li><em><code>x2</code></em> : second point x coordinate.</li><li><em><code>y2</code></em> : second point y coordinate.</li><li><em><code>z2</code></em> : second point z coordinate.</li></ul><blockquote><p><em>throws when one/more argument/s is/are not of type number.</em></p></blockquote><h2 id="random" tabindex="-1">random() <a class="header-anchor" href="#random" aria-hidden="true">#</a></h2><p>generate a random number in a given interval.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">random</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">min</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">float</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><em><code>min</code></em> : minimum value.</li><li><em><code>max</code></em> : maximum value, exclusive.</li><li><em><code>float</code></em> : allow float values. <code>false</code> by default.</li></ul><blockquote><p><em>throws when one/more argument/s is/are not of type number.</em> &gt; <em>throws when <code>min</code> is greater than <code>max</code>.</em></p></blockquote>`,29),t=[o];function p(c,r,i,y,d,m){return n(),a("div",null,t)}const F=s(l,[["render",p]]);export{C as __pageData,F as default};
