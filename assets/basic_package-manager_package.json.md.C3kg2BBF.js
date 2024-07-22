import{_ as e,c as a,o as s,a1 as n}from"./chunks/framework.DwaB85k5.js";const g=JSON.parse('{"title":"package.json","description":"","frontmatter":{},"headers":[],"relativePath":"basic/package-manager/package.json.md","filePath":"basic/package-manager/package.json.md","lastUpdated":1720071416000}'),i={name:"basic/package-manager/package.json.md"},p=n(`<h1 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h1><ul><li><p>devDependencies</p><ul><li>开发依赖管理</li></ul></li><li><p>dependencies</p><ul><li>生产依赖管理</li></ul></li></ul><p>dependencies 和 devDependencies 是 package.josn 中的一个属性，其中放着运行代码时所需的依赖；</p><p>在 npm install 时，这些依赖包会被安装；打包项目时， dependencies 中的包会被打包进去。</p><h2 id="peerdependencies-对等依赖" tabindex="-1">peerDependencies（对等依赖） <a class="header-anchor" href="#peerdependencies-对等依赖" aria-label="Permalink to &quot;peerDependencies（对等依赖）&quot;">​</a></h2><p>peerDependencies 中的包是没有显式依赖的，它默认库的使用者项目内已经安装过相关依赖，但是它不会自动检测并帮你安装。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;peerDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;echarts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^5.3.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^3.2.25&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当前库进行打包的时候，vue 和 echarts 这两个库就不会被打包进去。但是使用这个 npm 库的用户，需要在自己的项目中额外安装 vue 和 echarts 这两个依赖库。</p><p>在 npm2 中，packageName 包中 peerDependencies 的依赖会随着 npm install packageName 一起被强制安装。所以不需要库的使用者额外安装 peerDependencies 所需的依赖。</p><p>在 npm3+ 中，则不会强制安装 peerDependencies 中的依赖。但是使用者没有提前安装 peerDependencies 中所需依赖的话， npm3 会在安装结束后打印警告信息：xxx 是一个需要的依赖，但是没有被安装。此时，使用者需要手动的在项目中安装 xxx 依赖。</p><p>npm 文档中对 peerDependencies 的介绍：</p><blockquote><p>在开发插件时，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主回去安装这些依赖。此时就可以用 peerDependencies 去声明一下需要依赖的插件和版本。如果出问题的话，npm 会有警告来提示使用者去解决版本中的冲突。</p></blockquote><h2 id="版本号" tabindex="-1">版本号 <a class="header-anchor" href="#版本号" aria-label="Permalink to &quot;版本号&quot;">​</a></h2><ul><li>~：匹配最新的版本号，例如 ~2.3.0 会匹配最新的 2.3.x 版本</li><li>^：匹配次要的版本号，例如 ^2.0.0 会匹配最新的 2.x.x 版本</li><li>&gt; 、&lt;、&gt;=、&lt;=：匹配区间的版本号：例如 &gt;=2.0.0 会匹配 2.0.0 版本之后的版本</li></ul>`,14),t=[p];function l(c,r,d,o,h,k){return s(),a("div",null,t)}const m=e(i,[["render",l]]);export{g as __pageData,m as default};
