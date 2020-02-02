(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{256:function(t,a,e){"use strict";e.r(a);var v=e(0),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"全局-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局-api"}},[t._v("#")]),t._v(" 全局 API")]),t._v(" "),e("p",[t._v("本章节收录了由包 koishi-core 导出的主要 API。")]),t._v(" "),e("h2",{attrs:{id:"new-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-app"}},[t._v("#")]),t._v(" new App(options?)")]),t._v(" "),e("p",[t._v("机器人实例的构造函数。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("options:")]),t._v(" "),e("code",[t._v("AppOptions")]),t._v(" 参见 "),e("router-link",{attrs:{to:"/guide/config-file.html"}},[t._v("配置列表")])],1),t._v(" "),e("li",[t._v("返回值: "),e("router-link",{attrs:{to:"/api/app.html"}},[e("code",[t._v("App")])])],1)]),t._v(" "),e("h2",{attrs:{id:"applist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applist"}},[t._v("#")]),t._v(" appList")]),t._v(" "),e("p",[t._v("当前所有 "),e("router-link",{attrs:{to:"/api/app.html"}},[t._v("App")]),t._v(" 实例构成的数组。")],1),t._v(" "),e("h2",{attrs:{id:"appmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appmap"}},[t._v("#")]),t._v(" appMap")]),t._v(" "),e("p",[t._v("当前所有 "),e("router-link",{attrs:{to:"/api/app.html"}},[t._v("App")]),t._v(" 实例构成的键值对，键为对应的 QQ 号。")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("由于 Koishi 的 QQ 号是一项可选配置，因此当程序未收到任何事件上报，也未主动调用过 "),e("a",{attrs:{href:"#getselfids"}},[e("code",[t._v("getSelfIds()")])]),t._v(" 时，这个键值对可能并不会包含所有 App 实例的信息。但一旦通过上述两种方式获得了 QQ 号，相应的 App 实例也会立即绑定到这个对象上。")])]),t._v(" "),e("h2",{attrs:{id:"startall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#startall"}},[t._v("#")]),t._v(" startAll()")]),t._v(" "),e("p",[t._v("启动所有机器人。")]),t._v(" "),e("ul",[e("li",[t._v("返回值: "),e("code",[t._v("Promise<void>")])])]),t._v(" "),e("h2",{attrs:{id:"onstart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onstart"}},[t._v("#")]),t._v(" onStart(callback)")]),t._v(" "),e("p",[t._v("添加启动钩子。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("callback:")]),t._v(" "),e("code",[t._v("() => any")]),t._v(" 当全部机器人启动完毕后会调用此函数")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h2",{attrs:{id:"stopall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stopall"}},[t._v("#")]),t._v(" stopAll()")]),t._v(" "),e("p",[t._v("停止所有机器人。")]),t._v(" "),e("ul",[e("li",[t._v("返回值: "),e("code",[t._v("Promise<void>")])])]),t._v(" "),e("h2",{attrs:{id:"onstop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onstop"}},[t._v("#")]),t._v(" onStop(callback)")]),t._v(" "),e("p",[t._v("添加停止钩子。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("callback:")]),t._v(" "),e("code",[t._v("() => any")]),t._v(" 当全部机器人停止运行后会调用此函数")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h2",{attrs:{id:"数据库相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库相关"}},[t._v("#")]),t._v(" 数据库相关")]),t._v(" "),e("p",[t._v("这里包含了一些数据库相关的全局方法。")]),t._v(" "),e("h3",{attrs:{id:"userflag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#userflag"}},[t._v("#")]),t._v(" UserFlag")]),t._v(" "),e("p",[t._v("所有用户状态标签构成的枚举类型。参见 "),e("router-link",{attrs:{to:"/guide/authorization.html#状态标签"}},[t._v("状态标签")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"userfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#userfields"}},[t._v("#")]),t._v(" userFields")]),t._v(" "),e("p",[t._v("所有用户字段构成的列表。")]),t._v(" "),e("h3",{attrs:{id:"extenduser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extenduser"}},[t._v("#")]),t._v(" extendUser(getter)")]),t._v(" "),e("p",[t._v("扩展用户字段。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("getter:")]),t._v(" "),e("code",[t._v("(id: number, authority: number) => object")]),t._v(" 新字段的初始化函数，返回值应该是一个由要扩展的字段和它们的默认值构成的键值对")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h3",{attrs:{id:"createuser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createuser"}},[t._v("#")]),t._v(" createUser(id, authority)")]),t._v(" "),e("p",[t._v("创建一个新用户数据对象。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("id:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 用户 ID")]),t._v(" "),e("li",[e("strong",[t._v("authority:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 权限等级")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("UserData")])])]),t._v(" "),e("h3",{attrs:{id:"groupflag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groupflag"}},[t._v("#")]),t._v(" GroupFlag")]),t._v(" "),e("p",[t._v("所有群状态标签构成的枚举类型。参见 "),e("router-link",{attrs:{to:"/guide/authorization.html#状态标签"}},[t._v("状态标签")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"groupfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groupfields"}},[t._v("#")]),t._v(" groupFields")]),t._v(" "),e("p",[t._v("所有群字段构成的列表。")]),t._v(" "),e("h3",{attrs:{id:"extendgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extendgroup"}},[t._v("#")]),t._v(" extendGroup(getter)")]),t._v(" "),e("p",[t._v("扩展群字段。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("getter:")]),t._v(" "),e("code",[t._v("(id: number, assignee: number) => object")]),t._v(" 新字段的初始化函数，返回值应该是一个由要扩展的字段和它们的默认值构成的键值对")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h3",{attrs:{id:"creategroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creategroup"}},[t._v("#")]),t._v(" createGroup(id, assignee)")]),t._v(" "),e("p",[t._v("创建一个新群数据对象。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("id:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 用户 ID")]),t._v(" "),e("li",[e("strong",[t._v("assignee:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 代理者的 ID")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("GroupData")])])]),t._v(" "),e("h3",{attrs:{id:"registerdatabase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registerdatabase"}},[t._v("#")]),t._v(" registerDatabase(name, subdatabase)")]),t._v(" "),e("p",[t._v("注册一种新数据库。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 数据库名")]),t._v(" "),e("li",[e("strong",[t._v("subdatabase:")]),t._v(" "),e("code",[t._v("new (config) => object")]),t._v(" 新的数据库类，参见 "),e("router-link",{attrs:{to:"/guide/using-database.html#定义新的数据库"}},[t._v("定义新的数据库")])],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h3",{attrs:{id:"injectmethods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#injectmethods"}},[t._v("#")]),t._v(" injectMethods(name, methods, config?)")]),t._v(" "),e("p",[t._v("向某个数据库注入一批方法。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 表名")]),t._v(" "),e("li",[e("strong",[t._v("methods:")]),t._v(" "),e("code",[t._v("Record<string, Function>")]),t._v(" 要注入的方法")]),t._v(" "),e("li",[e("strong",[t._v("config:")]),t._v(" "),e("code",[t._v("any")]),t._v(" 对应表的配置")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h2",{attrs:{id:"command-静态方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-静态方法"}},[t._v("#")]),t._v(" Command 静态方法")]),t._v(" "),e("p",[t._v("这里包含了 "),e("router-link",{attrs:{to:"/api/command.html"}},[t._v("Command")]),t._v(" 类的静态方法。")],1),t._v(" "),e("h3",{attrs:{id:"command-attachuserfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-attachuserfields"}},[t._v("#")]),t._v(" Command.attachUserFields(fields, argv)")]),t._v(" "),e("p",[t._v("按照 argv 中的 command 属性向 fields 添加所需的用户字段。它是一个内置的 before-user 监听器。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("fields:")]),t._v(" "),e("code",[t._v("Set<UserField>")]),t._v(" 用户字段集合")]),t._v(" "),e("li",[e("strong",[t._v("argv:")]),t._v(" "),e("router-link",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")])]),t._v(" 只需确保其中存在 command 属性即可")],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h3",{attrs:{id:"command-attachgroupfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-attachgroupfields"}},[t._v("#")]),t._v(" Command.attachGroupFields(fields, argv)")]),t._v(" "),e("p",[t._v("按照 argv 中的 command 属性向 fields 添加所需的群字段。它是一个内置的 before-group 监听器。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("fields:")]),t._v(" "),e("code",[t._v("Set<GroupField>")]),t._v(" 群字段集合")]),t._v(" "),e("li",[e("strong",[t._v("argv:")]),t._v(" "),e("router-link",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")])]),t._v(" 只需确保其中存在 command 属性即可")],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h2",{attrs:{id:"运行时工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行时工具"}},[t._v("#")]),t._v(" 运行时工具")]),t._v(" "),e("p",[t._v("这里包含了一些运行时的工具。")]),t._v(" "),e("h3",{attrs:{id:"getselfids"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getselfids"}},[t._v("#")]),t._v(" getSelfIds()")]),t._v(" "),e("p",[t._v("获取所有机器人的 QQ 号。已经获取到的将不再获取。")]),t._v(" "),e("ul",[e("li",[t._v("返回值: "),e("code",[t._v("Promise<number[]>")]),t._v(" 所有机器人的 QQ 号")])]),t._v(" "),e("h3",{attrs:{id:"gettargetid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gettargetid"}},[t._v("#")]),t._v(" getTargetId(target)")]),t._v(" "),e("p",[t._v("获得目标用户 QQ 号。传入一个字符串，可能是 QQ 号本身或是 @ 群内成员。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("target:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 要解析的字符串")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("number")]),t._v(" 目标 QQ 号")])]),t._v(" "),e("h3",{attrs:{id:"showsuggestions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#showsuggestions"}},[t._v("#")]),t._v(" showSuggestions(options) "),e("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._v(" "),e("p",[t._v("尝试显示候选输入。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("options.target:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 源字符串")]),t._v(" "),e("li",[e("strong",[t._v("options.items:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 目标字符串列表")]),t._v(" "),e("li",[e("strong",[t._v("options.meta:")]),t._v(" "),e("router-link",{attrs:{to:"/guide/receive-and-send.html#深入-meta-对象"}},[e("code",[t._v("Meta")])]),t._v(" 元信息对象")],1),t._v(" "),e("li",[e("strong",[t._v("options.next:")]),t._v(" "),e("router-link",{attrs:{to:"/guide/receive-and-send.html#中间件"}},[e("code",[t._v("NextFunction")])]),t._v(" 回调函数")],1),t._v(" "),e("li",[e("strong",[t._v("options.prefix:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 显示在候选输入前的文本")]),t._v(" "),e("li",[e("strong",[t._v("options.suffix:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 当只有一个选项时，显示在候选输入后的文本")]),t._v(" "),e("li",[e("strong",[t._v("options.coefficient:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 用于模糊匹配的相似系数")]),t._v(" "),e("li",[e("strong",[t._v("options.command:")]),t._v(" "),e("code",[t._v("Command | ((suggestion: string) => Command)")]),t._v(" 相关指令")]),t._v(" "),e("li",[e("strong",[t._v("options.execute:")]),t._v(" "),e("code",[t._v("(suggestion: string, meta: MessageMeta, next: NextFunction) => void")]),t._v(" 确认后执行的操作")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("Promise<void>")])])]),t._v(" "),e("h3",{attrs:{id:"getusage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getusage"}},[t._v("#")]),t._v(" getUsage(name, user) "),e("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),e("Badge",{attrs:{text:"1.6.0+",type:"warn"}})],1),t._v(" "),e("p",[t._v("获得用户的使用数据（如果不存在则会创建）。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 标识符（如果是指令的话就是指令名）")]),t._v(" "),e("li",[e("strong",[t._v("user:")]),t._v(" "),e("code",[t._v("UserData")]),t._v(" 用户数据")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("Usage")])])]),t._v(" "),e("CodeContainer",{attrs:{title:""}},[e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[e("code",[e("span",{staticStyle:{color:"#F92672"}},[t._v("export")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("interface")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("Usage")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),e("span",{staticStyle:{color:"#75715E"}},[t._v("// 最后一次调用的时间戳")]),t._v("\n"),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  last")]),e("span",{staticStyle:{color:"#F92672"}},[t._v("?:")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("number")]),t._v("\n"),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),e("span",{staticStyle:{color:"#75715E"}},[t._v("// 当日已经调用的次数")]),t._v("\n"),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  count")]),e("span",{staticStyle:{color:"#F92672"}},[t._v("?:")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("number")]),t._v("\n"),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),e("h3",{attrs:{id:"updateusage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updateusage"}},[t._v("#")]),t._v(" updateUsage(name, user, maxUsage?, minInterval?) "),e("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),e("Badge",{attrs:{text:"1.6.0+",type:"warn"}})],1),t._v(" "),e("p",[t._v("更新用户的使用数据（如果不存在则会创建）。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 标识符（如果是指令的话就是指令名）")]),t._v(" "),e("li",[e("strong",[t._v("user:")]),t._v(" "),e("code",[t._v("UserData")]),t._v(" 用户数据")]),t._v(" "),e("li",[e("strong",[t._v("maxUsage:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 每天最大调用次数，默认为 "),e("code",[t._v("Infinity")])]),t._v(" "),e("li",[e("strong",[t._v("minInterval:")]),t._v(" "),e("code",[t._v("number")]),t._v(" 调用最小时间间隔，默认为 "),e("code",[t._v("0")])]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("string")]),t._v(" 如果无法调用则返回错误信息，如果可以调用则没有返回值")])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);