(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{500:function(s,n,a){"use strict";a.r(n);var t=a(25),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"directive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directive"}},[s._v("#")]),s._v(" directive")]),s._v(" "),a("p",[s._v("指令系统是计算机硬件的语言系统，也叫机器语言，它是系统程序员看到的计算机的主要属性。因此指令系统表征了计算机的基本功能决定了机器所要求的能力")]),s._v(" "),a("p",[s._v("在vue中提供了一套为数据驱动视图更为方便的操作，这些操作被称为指令系统")]),s._v(" "),a("p",[s._v("我们看到的v- 开头的行内属性，都是指令，不同的指令可以完成或实现不同的功能")]),s._v(" "),a("p",[s._v("除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令")]),s._v(" "),a("p",[s._v("指令使用的几种方式：")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v('//会实例化一个指令，但这个指令没有参数 \n`v-xxx`\n\n// -- 将值传到指令中\n`v-xxx="value"`  \n\n// -- 将字符串传入到指令中，如`v-html="\''),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("内容"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('\'"`\n`v-xxx="\'string\'"` \n\n// -- 传参数（`arg`），如`v-bind:class="className"`\n`v-xxx:arg="value"` \n\n// -- 使用修饰符（`modifier`）\n`v-xxx:arg.modifier="value"` \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("注册一个自定义指令有全局注册与局部注册")]),s._v(" "),a("p",[s._v("全局注册主要是通过Vue.directive方法进行注册")]),s._v(" "),a("p",[s._v("Vue.directive第一个参数是指令的名字（不需要写上v-前缀），第二个参数可以是对象数据，也可以是一个指令函数")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("// 注册一个全局自定义指令 `v-focus`\nVue.directive('focus', {\n  // 当被绑定的元素插入到 DOM 中时……\n  inserted: function (el) {\n    // 聚焦元素\n    el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能\n  }\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("局部注册通过在组件options选项中设置directive属性")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("directives: {\n  focus: {\n    // 指令的定义\n    inserted: function (el) {\n      el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能\n    }\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后你可以在模板中任何元素上使用新的 v-focus property，如下：")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-focus")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("自定义指令也像组件那样存在钩子函数：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置")])]),s._v(" "),a("li",[a("p",[s._v("inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)")])]),s._v(" "),a("li",[a("p",[s._v("update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新")])]),s._v(" "),a("li",[a("p",[s._v("componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用")])]),s._v(" "),a("li",[a("p",[s._v("unbind：只调用一次，指令与元素解绑时调用")])])]),s._v(" "),a("p",[s._v("所有的钩子函数的参数都有以下：")]),s._v(" "),a("ul",[a("li",[s._v("el：指令所绑定的元素，可以用来直接操作 DOM")]),s._v(" "),a("li",[s._v("binding：一个对象，包含以下 property：\n"),a("ul",[a("li",[s._v("name：指令名，不包括 v- 前缀。")]),s._v(" "),a("li",[s._v('value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。')]),s._v(" "),a("li",[s._v("oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。")]),s._v(" "),a("li",[s._v('expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。')]),s._v(" "),a("li",[s._v('arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。')]),s._v(" "),a("li",[s._v("modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }")])])]),s._v(" "),a("li",[s._v("vnode：Vue 编译生成的虚拟节点")]),s._v(" "),a("li",[s._v("oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用")])]),s._v(" "),a("p",[s._v("除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行")]),s._v(" "),a("p",[s._v("举个例子：")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-demo")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{ color: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v(", text: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("hello!"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v(" }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" binding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "white"')]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "hello!"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("p",[s._v("使用自定义指令可以满足我们日常一些场景，这里给出几个自定义指令的案例：")]),s._v(" "),a("h3",{attrs:{id:"表单防止重复提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单防止重复提交"}},[s._v("#")]),s._v(" 表单防止重复提交")]),s._v(" "),a("p",[s._v("表单防止重复提交这种情况设置一个v-throttle自定义指令来实现")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("// 1.设置v-throttle自定义指令\nVue.directive('throttle', {\n  bind: (el, binding) => {\n    let throttleTime = binding.value; // 节流时间\n    if (!throttleTime) { // 用户若不设置节流时间，则默认2s\n      throttleTime = 2000;\n    }\n    let cbFun;\n    el.addEventListener('click', event => {\n      if (!cbFun) { // 第一次执行\n        cbFun = setTimeout(() => {\n          cbFun = null;\n        }, throttleTime);\n      } else {\n        event && event.stopImmediatePropagation();\n      }\n    }, true);\n  },\n});\n// 2.为button标签设置v-throttle自定义指令\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("sayHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-throttle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("提交"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"图片懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[s._v("#")]),s._v(" 图片懒加载")]),s._v(" "),a("p",[s._v("设置一个v-lazy自定义指令完成图片懒加载")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("const LazyLoad = {\n    // install方法\n    install(Vue,options){\n    \t  // 代替图片的loading图\n        let defaultSrc = options.default;\n        Vue.directive('lazy',{\n            bind(el,binding){\n                LazyLoad.init(el,binding.value,defaultSrc);\n            },\n            inserted(el){\n                // 兼容处理\n                if('IntersectionObserver' in window){\n                    LazyLoad.observe(el);\n                }else{\n                    LazyLoad.listenerScroll(el);\n                }\n                \n            },\n        })\n    },\n    // 初始化\n    init(el,val,def){\n        // data-src 储存真实src\n        el.setAttribute('data-src',val);\n        // 设置src为loading图\n        el.setAttribute('src',def);\n    },\n    // 利用IntersectionObserver监听el\n    observe(el){\n        let io = new IntersectionObserver(entries => {\n            let realSrc = el.dataset.src;\n            if(entries[0].isIntersecting){\n                if(realSrc){\n                    el.src = realSrc;\n                    el.removeAttribute('data-src');\n                }\n            }\n        });\n        io.observe(el);\n    },\n    // 监听scroll事件\n    listenerScroll(el){\n        let handler = LazyLoad.throttle(LazyLoad.load,300);\n        LazyLoad.load(el);\n        window.addEventListener('scroll',() => {\n            handler(el);\n        });\n    },\n    // 加载真实图片\n    load(el){\n        let windowHeight = document.documentElement.clientHeight\n        let elTop = el.getBoundingClientRect().top;\n        let elBtm = el.getBoundingClientRect().bottom;\n        let realSrc = el.dataset.src;\n        if(elTop - windowHeight<0&&elBtm > 0){\n            if(realSrc){\n                el.src = realSrc;\n                el.removeAttribute('data-src');\n            }\n        }\n    },\n    // 节流\n    throttle(fn,delay){\n        let timer; \n        let prevTime;\n        return function(...args){\n            let currTime = Date.now();\n            let context = this;\n            if(!prevTime) prevTime = currTime;\n            clearTimeout(timer);\n            \n            if(currTime - prevTime > delay){\n                prevTime = currTime;\n                fn.apply(context,args);\n                clearTimeout(timer);\n                return;\n            }\n\n            timer = setTimeout(function(){\n                prevTime = Date.now();\n                timer = null;\n                fn.apply(context,args);\n            },delay);\n        }\n    }\n\n}\nexport default LazyLoad;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br")])]),a("h3",{attrs:{id:"一键-copy的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键-copy的功能"}},[s._v("#")]),s._v(" 一键 Copy的功能")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("import { Message } from 'ant-design-vue';\n\nconst vCopy = { //\n  /*\n    bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置\n    el: 作用的 dom 对象\n    value: 传给指令的值，也就是我们要 copy 的值\n  */\n  bind(el, { value }) {\n    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到\n    el.handler = () => {\n      if (!el.$value) {\n      // 值为空的时候，给出提示，我这里的提示是用的 ant-design-vue 的提示，你们随意\n        Message.warning('无复制内容');\n        return;\n      }\n      // 动态创建 textarea 标签\n      const textarea = document.createElement('textarea');\n      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域\n      textarea.readOnly = 'readonly';\n      textarea.style.position = 'absolute';\n      textarea.style.left = '-9999px';\n      // 将要 copy 的值赋给 textarea 标签的 value 属性\n      textarea.value = el.$value;\n      // 将 textarea 插入到 body 中\n      document.body.appendChild(textarea);\n      // 选中值并复制\n      textarea.select();\n      // textarea.setSelectionRange(0, textarea.value.length);\n      const result = document.execCommand('Copy');\n      if (result) {\n        Message.success('复制成功');\n      }\n      document.body.removeChild(textarea);\n    };\n    // 绑定点击事件，就是所谓的一键 copy 啦\n    el.addEventListener('click', el.handler);\n  },\n  // 当传进来的值更新的时候触发\n  componentUpdated(el, { value }) {\n    el.$value = value;\n  },\n  // 指令与元素解绑的时候，移除事件绑定\n  unbind(el) {\n    el.removeEventListener('click', el.handler);\n  },\n};\n\nexport default vCopy;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);