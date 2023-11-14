(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{368:function(e,v,_){"use strict";_.r(v);var a=_(25),s=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("缓存可以说是性能优化中简单高效的一种优化方式了，它可以显著减少网络传输所带来的损耗。")]),e._v(" "),_("p",[e._v("对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。")]),e._v(" "),_("p",[e._v("接下来的内容中我们将通过以下几个部分来探讨浏览器缓存机制：")]),e._v(" "),_("ul",[_("li",[e._v("缓存位置")]),e._v(" "),_("li",[e._v("缓存策略")]),e._v(" "),_("li",[e._v("实际场景应用缓存策略")])]),e._v(" "),_("h2",{attrs:{id:"缓存位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[e._v("#")]),e._v(" 缓存位置")]),e._v(" "),_("p",[e._v("从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"performance-optimization-performance-optimization-service-worker"}},[e._v("Service Worker")])]),e._v(" "),_("li",[e._v("Memory Cache")]),e._v(" "),_("li",[e._v("Disk Cache")]),e._v(" "),_("li",[e._v("Push Cache")]),e._v(" "),_("li",[e._v("网络请求")])]),e._v(" "),_("p",[e._v("当 "),_("code",[e._v("Service Worker")]),e._v(" 没有命中缓存的时候，我们需要去调用 "),_("code",[e._v("fetch")]),e._v(" 函数获取数据。也就是说，如果我们没有在 "),_("code",[e._v("Service Worker")]),e._v(" 命中缓存的话，会根据"),_("code",[e._v("缓存查找优先级")]),e._v("去查找数据。但是不管我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容。")]),e._v(" "),_("p",[e._v("Memory Cache")]),e._v(" "),_("h3",{attrs:{id:"memory-cache"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[e._v("#")]),e._v(" Memory Cache")]),e._v(" "),_("p",[e._v("Memory Cache 也就是内存中的缓存、读取内存中的数据肯定比磁盘快。"),_("strong",[e._v("但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。")]),e._v(" 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。")]),e._v(" "),_("p",[e._v("当我们访问过页面以后，再次刷新页面，可以发现很多数据都\b来自于内存缓存")]),e._v(" "),_("p",[e._v("那么既然内存缓存这么高效，我们是不是\b能让数据都存放在内存中呢？")]),e._v(" "),_("p",[e._v("先说结论，这是"),_("code",[e._v("不可能")]),e._v("的。首先计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。内存中其实可以存储大部分的文件，比如说 JSS、HTML、CSS、图片等等。但是浏览器会把哪些文件丢进内存这个过程就很玄学了，我查阅了很多资料都没有一个定论。")]),e._v(" "),_("p",[e._v("当然，我通过一些实践和猜测也得出了一些结论：")]),e._v(" "),_("ul",[_("li",[e._v("对于大文件来说，大概率是不存储在内存中的，反之优先")]),e._v(" "),_("li",[e._v("当前系统内存使用率高的话，文件优先存储进硬盘")])]),e._v(" "),_("h3",{attrs:{id:"disk-cache"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[e._v("#")]),e._v(" Disk Cache")]),e._v(" "),_("p",[e._v("Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache "),_("strong",[e._v("胜在容量和存储时效性上。")])]),e._v(" "),_("p",[e._v("在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 "),_("code",[e._v("HTTP Herder 中的字段")]),e._v("判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。"),_("strong",[e._v("并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。")])]),e._v(" "),_("h3",{attrs:{id:"push-cache"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[e._v("#")]),e._v(" Push Cache")]),e._v(" "),_("p",[e._v("Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。\n"),_("code",[e._v("并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。")])]),e._v(" "),_("p",[e._v("Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及，但是 HTTP/2 将会是日后的一个趋势。\n这里推荐阅读 "),_("a",{attrs:{href:"https://jakearchibald.com/2017/h2-push-tougher-than-i-thought",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP/2 push is tougher than I thought"),_("OutboundLink")],1),e._v(" 这篇文章。")]),e._v(" "),_("ul",[_("li",[e._v("所有的资源都能被推送，但是 Edge 和 Safari 浏览器兼容性不怎么好")]),e._v(" "),_("li",[e._v("可以推送 no-cache 和 no-store 的资源")]),e._v(" "),_("li",[e._v("一旦连接被关闭，Push Cache 就被释放")]),e._v(" "),_("li",[e._v("多个页面可以使用相同的 HTTP/2 连接，也就是说能使用同样的缓存")]),e._v(" "),_("li",[e._v("Push Cache 中的缓存只能被使用一次")]),e._v(" "),_("li",[e._v("浏览器可以拒绝接受已经存在的资源推送")]),e._v(" "),_("li",[e._v("可以给其他域名推送资源")])]),e._v(" "),_("h3",{attrs:{id:"网络请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[e._v("#")]),e._v(" 网络请求")]),e._v(" "),_("p",[e._v("如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。")]),e._v(" "),_("p",[e._v("那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，接下来我们就来学习缓存策略这部分的内容。")]),e._v(" "),_("h2",{attrs:{id:"缓存策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[e._v("#")]),e._v(" 缓存策略")]),e._v(" "),_("p",[e._v("通常浏览器缓存策略分为两种："),_("code",[e._v("强缓存")]),e._v("和"),_("code",[e._v("协商缓存")]),e._v("，\n并且缓存策略都是通过设置 HTTP Header 来实现的。")]),e._v(" "),_("p",[_("strong",[e._v("强缓存")])]),e._v(" "),_("p",[e._v("强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control 。\n强缓存表示在缓存期间不需要请求，state code 为 200。")]),e._v(" "),_("p",[e._v("Expires")]),e._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[e._v("  Expires"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Wed"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(" Oct "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("2018")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("41")]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),_("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token constant"}},[e._v("GMT")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[e._v("Expires 是 HTTP/1 的产物，表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。\n并且 Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")]),e._v(" "),_("p",[e._v("Cache-control")]),e._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[e._v("  Cache"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("control\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[_("code",[e._v("Cache-Control")]),e._v(" 出现于 HTTP/1.1，"),_("strong",[e._v("优先级高于 "),_("code",[e._v("Expires")])]),e._v(" 。\n该属性值表示资源会在 30 秒后过期，需要再次请求。")]),e._v(" "),_("p",[e._v("Cache-Control 可以在请求头或者响应头中设置，并且可以组合使用多种指令")]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/images/cache-control.png",alt:"img"}})]),e._v(" "),_("p",[e._v("从图中我们可以看到，我们可以将多个指令配合起来一起使用，达到多个目的。比如说我们希望资源能被缓存下来，并且是客户端和代理服务器都能缓存，还能设置缓存失效时间等等。")]),e._v(" "),_("p",[e._v("接下来我们就来学习一些常见指令的作用")]),e._v(" "),_("p",[_("img",{attrs:{src:"assets/images/http-state.png",alt:"img"}})]),e._v(" "),_("p",[_("strong",[e._v("协商缓存")])]),e._v(" "),_("p",[e._v("如果缓存过期了，就需要发起请求验证资源是否有更新。\n协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。")]),e._v(" "),_("p",[e._v("当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/images/%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98.png",alt:"img"}})]),e._v(" "),_("p",[e._v("Last-Modified 和 If-Modified-Since")]),e._v(" "),_("p",[e._v("Last-Modified 表示本地文件最后修改日期，\nIf-Modified-Since 会将 Last-Modified 的值发送给服务器，\n询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。")]),e._v(" "),_("p",[e._v("但是 "),_("code",[e._v("Last-Modified")]),e._v(" 存在一些弊端：")]),e._v(" "),_("p",[e._v("如果本地打开缓存文件，即使没有对文件进行修改，\n但还是会造成 "),_("code",[e._v("Last-Modified")]),e._v(" 被修改，服务端不能命中缓存导致发送相同的资源\n因为 "),_("code",[e._v("Last-Modified")]),e._v(" 只能以秒计时，如果在不可感知的时间内修改完成文件，\n那么服务端会认为资源还是命中了，不会返回正确的资源")]),e._v(" "),_("p",[e._v("因为以上这些弊端，所以在 HTTP / 1.1 出现了 "),_("code",[e._v("ETag")]),e._v(" 。")]),e._v(" "),_("p",[_("strong",[e._v("ETag 和 If-None-Match")])]),e._v(" "),_("p",[e._v("ETag 类似于文件指纹，"),_("code",[e._v("If-None-Match")]),e._v(" 会将当前 "),_("code",[e._v("ETag")]),e._v(" 发送给服务器，询问该资源 ETag 是否变动，\n有变动的话就将新的资源发送回来。并且 "),_("code",[e._v("ETag")]),e._v(" 优先级比 "),_("code",[e._v("Last-Modified")]),e._v(" 高。")]),e._v(" "),_("p",[e._v("以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。\n"),_("strong",[e._v("如果什么缓存策略都没设置，那么浏览器会怎么处理？")])]),e._v(" "),_("p",[e._v("对于这种情况，浏览器会采用一个启发式的算法，\n通常会取响应头中的 "),_("code",[e._v("Date")]),e._v(" 减去 "),_("code",[e._v("Last-Modified")]),e._v(" 值的 10% 作为缓存时间。")]),e._v(" "),_("h2",{attrs:{id:"实际场景应用缓存策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实际场景应用缓存策略"}},[e._v("#")]),e._v(" 实际场景应用缓存策略")]),e._v(" "),_("p",[e._v("单纯了解理论而不付诸于实践是没有意义的，接下来我们来通过几个场景学习下如何使用这些理论。")]),e._v(" "),_("p",[_("strong",[e._v("频繁变动的资源")])]),e._v(" "),_("p",[e._v("对于频繁变动的资源，首先需要使用 "),_("code",[e._v("Cache-Control: no-cache")]),e._v(" 使浏览器每次都请求服务器，\n然后配合 ETag 或者 Last-Modified 来验证资源是否有效。\n这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。")]),e._v(" "),_("p",[_("strong",[e._v("代码文件")])]),e._v(" "),_("p",[e._v("这里特指除了 HTML 外的代码文件，因为 HTML 文件一般不缓存或者缓存时间很短。")]),e._v(" "),_("p",[e._v("一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，\n只有当代码修改后才会生成新的文件名。\n基于此，我们就可以给代码文件设置缓存有效期一年 Cache-Control: max-age=31536000，\n这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。")]),e._v(" "),_("h2",{attrs:{id:"浏览器渲染原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理"}},[e._v("#")]),e._v(" 浏览器渲染原理")]),e._v(" "),_("p",[e._v("执行 js  有一个 js 引擎，那么执行渲染也有一个渲染引擎。通用，渲染引擎在不同的浏览器\n中也不是都相同的。比如在 firefox 中叫做 Gecko， 在 Chrome 和 Safari 中都是基于\n"),_("strong",[e._v("WebKit")]),e._v(" 开发的。")]),e._v(" "),_("p",[e._v("主要学习的就是关于 WebKit 这部分的渲染引擎内容")])])}),[],!1,null,null,null);v.default=s.exports}}]);