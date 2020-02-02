(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{224:function(e,v,t){"use strict";t.r(v);var s=t(0),r=Object(s.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"测试工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试工具"}},[e._v("#")]),e._v(" 测试工具 (Test Utils)")]),e._v(" "),t("p",[e._v("包含了被 Koishi 使用的测试工具，它们由 "),t("code",[e._v("koishi-test-utils")]),e._v(" 包提供。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("本页显示的版本号都表示对应的 koishi-test-utils 版本号（而不是对应的 koishi 版本号）。")])]),e._v(" "),t("h2",{attrs:{id:"testdatabase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testdatabase"}},[e._v("#")]),e._v(" testDatabase(options, hooks)")]),e._v(" "),t("p",[e._v("测试全部内置数据库方法。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("options:")]),e._v(" "),t("code",[e._v("AppOptions")]),e._v(" App 的构造函数的 database 字段，参见 "),t("router-link",{attrs:{to:"/guide/using-database.html"}},[e._v("使用数据库")])],1),e._v(" "),t("li",[t("strong",[e._v("hooks:")]),e._v(" 测试中执行的钩子函数，每一个函数都传入一个 App 实例作为参数：\n"),t("ul",[t("li",[t("strong",[e._v("hooks.beforeEachUser:")]),e._v(" 当每个用户测试执行前调用")]),e._v(" "),t("li",[t("strong",[e._v("hooks.afterEachUser:")]),e._v(" 当每个用户测试执行后调用")]),e._v(" "),t("li",[t("strong",[e._v("hooks.beforeEachGroup:")]),e._v(" 当每个群测试执行前调用")]),e._v(" "),t("li",[t("strong",[e._v("hooks.afterEachGroup:")]),e._v(" 当每个群测试执行后调用")])])]),e._v(" "),t("li",[e._v("返回值: "),t("router-link",{attrs:{to:"/api/app.html"}},[t("code",[e._v("App")])]),e._v(" 用于测试的 App 实例")],1)]),e._v(" "),t("h2",{attrs:{id:"createhttpserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#createhttpserver"}},[e._v("#")]),e._v(" createHttpServer(token?) "),t("Badge",{attrs:{text:"1.1.0+"}})],1),e._v(" "),t("p",[e._v("模拟一个 CQHTTP HTTP 服务器。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("token:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 验证字段")]),e._v(" "),t("li",[e._v("返回值: "),t("a",{attrs:{href:"#%E7%B1%BB%EF%BC%9Ahttpserver"}},[t("code",[e._v("Promise<HttpServer>")])])])]),e._v(" "),t("h2",{attrs:{id:"createwsserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#createwsserver"}},[e._v("#")]),e._v(" createWsServer(token?) "),t("Badge",{attrs:{text:"1.1.0+"}})],1),e._v(" "),t("p",[e._v("模拟一个 CQHTTP WebSocket 服务器。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("token:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 验证字段")]),e._v(" "),t("li",[e._v("返回值: "),t("a",{attrs:{href:"#%E7%B1%BB%EF%BC%9Awsserver"}},[t("code",[e._v("Promise<WsServer>")])])])]),e._v(" "),t("h2",{attrs:{id:"类：mockedserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类：mockedserver"}},[e._v("#")]),e._v(" 类：MockedServer "),t("Badge",{attrs:{text:"2.0.0+"}})],1),e._v(" "),t("p",[e._v("封装了一些用于测试的 API。上面所说的 HttpServer, WsServer 都是它的子类，而下面要介绍的 MockedApp 也实现了它的所有方法。")]),e._v(" "),t("h3",{attrs:{id:"mocked-shouldhavelastrequest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mocked-shouldhavelastrequest"}},[e._v("#")]),e._v(" mocked.shouldHaveLastRequest(method, params?)")]),e._v(" "),t("p",[e._v("断言最后发送的请求，并清空请求列表。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("method:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 请求名称，不用写 async")]),e._v(" "),t("li",[t("strong",[e._v("params:")]),e._v(" "),t("code",[e._v("Record<string, any>")]),e._v(" 请求参数，可以略去部分")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"mocked-shouldhavelastrequests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mocked-shouldhavelastrequests"}},[e._v("#")]),e._v(" mocked.shouldHaveLastRequests(requests)")]),e._v(" "),t("p",[e._v("按时间顺序断言最后发送的若干个请求，并清空请求列表。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("requests:")]),e._v(" "),t("code",[e._v("[string, Record<string, any>?][]")]),e._v(" 请求的名称和参数")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"mocked-shouldhavenorequests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mocked-shouldhavenorequests"}},[e._v("#")]),e._v(" mocked.shouldHaveNoRequests()")]),e._v(" "),t("p",[e._v("断言没有发送任何请求。")]),e._v(" "),t("ul",[t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"mocked-shouldmatchsnapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mocked-shouldmatchsnapshot"}},[e._v("#")]),e._v(" mocked.shouldMatchSnapshot(name?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("断言发送的请求与快照相符。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("name:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 快照名")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"mocked-clearrequests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mocked-clearrequests"}},[e._v("#")]),e._v(" mocked.clearRequests()")]),e._v(" "),t("p",[e._v("清空请求列表。")]),e._v(" "),t("ul",[t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"mocked-setresponse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mocked-setresponse"}},[e._v("#")]),e._v(" mocked.setResponse(method, data, retcode?)")]),e._v(" "),t("p",[e._v("预先设置客户端请求的结果。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("method:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 请求名称")]),e._v(" "),t("li",[t("strong",[e._v("data:")]),e._v(" 响应数据，支持以下两种格式：\n"),t("ul",[t("li",[t("code",[e._v("Record<string, any>")]),e._v(" 响应的 data 字段")]),e._v(" "),t("li",[t("code",[e._v("(params: Record<string, any>) => Partial<CQResponse>")]),e._v(" 传入请求参数，返回的对象将作为响应本身 "),t("Badge",{attrs:{text:"2.0.0+",vertical:"baseline"}})],1)])]),e._v(" "),t("li",[t("strong",[e._v("retcode:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 返回的错误码，默认为 "),t("code",[e._v("0")]),e._v("（仅对 data 不是函数的时候有效）")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h2",{attrs:{id:"类：mockedapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类：mockedapp"}},[e._v("#")]),e._v(" 类：MockedApp "),t("Badge",{attrs:{text:"1.1.0+"}})],1),e._v(" "),t("p",[e._v("MockedApp 是最常用的测试工具类。它是一个无需网络的 App 实例。借助它你可以方便地创建到 Koishi 的上报数据和处理 Koishi 发出的请求，从而完成对业务代码的测试工作。")]),e._v(" "),t("p",[e._v("MockedApp 会截获从 Sender API 发出的所有请求，因而实现了 MockedServer 的方法。")]),e._v(" "),t("h3",{attrs:{id:"new-mockedapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-mockedapp"}},[e._v("#")]),e._v(" new MockedApp(options?)")]),e._v(" "),t("p",[e._v("创建一个无网络 App 实例。参见 "),t("router-link",{attrs:{to:"/guide/unit-tests.html#模拟事件上报"}},[e._v("模拟事件上报")]),e._v("。")],1),e._v(" "),t("ul",[t("li",[t("strong",[e._v("options:")]),e._v(" "),t("code",[e._v("AppOptions")]),e._v(" 参见 "),t("router-link",{attrs:{to:"/guide/config-file.html"}},[e._v("配置列表")])],1),e._v(" "),t("li",[e._v("返回值: "),t("a",{attrs:{href:"#%E7%B1%BB%EF%BC%9Amockedapp"}},[t("code",[e._v("MockedApp")])])])]),e._v(" "),t("h3",{attrs:{id:"app-receive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receive"}},[e._v("#")]),e._v(" app.receive(meta) "),t("Badge",{attrs:{text:"2.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("meta:")]),e._v(" "),t("code",[e._v("Meta")]),e._v(" 事件元信息对象")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivemessage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivemessage"}},[e._v("#")]),e._v(" app.receiveMessage(type, message, userId, ctxId?) "),t("Badge",{attrs:{text:"2.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 message 事件上报。当这个消息对应的 "),t("router-link",{attrs:{to:"/api/receiver.html#事件：after-middleware"}},[e._v("after-middleware")]),e._v(" 事件触发时返回。")],1),e._v(" "),t("ul",[t("li",[t("strong",[e._v("type:")]),e._v(" "),t("code",[e._v("'private' | 'group' | 'discuss'")]),e._v(" 事件的类型")]),e._v(" "),t("li",[t("strong",[e._v("message:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 消息文本")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 发消息者 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("ctxId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 上下文 ID（如果是群消息这里就是群号；如果是讨论组消息这里就是讨论组号；如果是私聊则这个参数不用写）")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("p",[e._v("此外，你也可以直接向这个方法传入一个等价的 Meta 对象，效果相同。")]),e._v(" "),t("h3",{attrs:{id:"app-receivefriendrequest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivefriendrequest"}},[e._v("#")]),e._v(" app.receiveFriendRequest(userId, flag?) "),t("Badge",{attrs:{text:"2.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 request/friend 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 用户 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("flag:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 请求 flag，默认为 "),t("code",[e._v("flag")])]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivegrouprequest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivegrouprequest"}},[e._v("#")]),e._v(" app.receiveGroupRequest(type, userId, groupId?, flag?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 request/group 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 用户 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("type:")]),e._v(" "),t("code",[e._v("'add' | 'invite'")]),e._v(" 事件的子类型")]),e._v(" "),t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[t("strong",[e._v("flag:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 请求 flag，默认为 "),t("code",[e._v("flag")])]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivegroupupload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivegroupupload"}},[e._v("#")]),e._v(" app.receiveGroupUpload(file, userId, groupId?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 group-upload 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 上传者 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivegroupadmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivegroupadmin"}},[e._v("#")]),e._v(" app.receiveGroupAdmin(subType, userId, groupId?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 group-admin 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("subType:")]),e._v(" "),t("code",[e._v("'set' | 'unset'")]),e._v(" 事件的子类型")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 目标 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivegroupincrease"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivegroupincrease"}},[e._v("#")]),e._v(" app.receiveGroupIncrease(subType, userId, groupId?, operatorId?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 group-increase 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("subType:")]),e._v(" "),t("code",[e._v("'approve' | 'invite'")]),e._v(" 事件的子类型")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 目标 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[t("strong",[e._v("operatorId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 操作者 QQ 号")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivegroupdecrease"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivegroupdecrease"}},[e._v("#")]),e._v(" app.receiveGroupDecrease(subType, userId, groupId?, operatorId?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 group-decrease 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("subType:")]),e._v(" "),t("code",[e._v("'leave' | 'kick' | 'kick_me'")]),e._v(" 事件的子类型")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 目标 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[t("strong",[e._v("operatorId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 操作者 QQ 号")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivegroupban"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivegroupban"}},[e._v("#")]),e._v(" app.receiveGroupBan(subType, duration, userId, groupId?, operatorId?) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 group-ban 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("subType:")]),e._v(" "),t("code",[e._v("'ban' | 'lift_ban'")]),e._v(" 事件的子类型")]),e._v(" "),t("li",[t("strong",[e._v("duration:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 禁言时长")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 目标 QQ 号")]),e._v(" "),t("li",[t("strong",[e._v("groupId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号")]),e._v(" "),t("li",[t("strong",[e._v("operatorId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 操作者 QQ 号")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-receivefriendadd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-receivefriendadd"}},[e._v("#")]),e._v(" app.receiveFriendAdd(userId) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟一次 friend-add 事件上报。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 目标 QQ 号")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("void")])])]),e._v(" "),t("h3",{attrs:{id:"app-createsession"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-createsession"}},[e._v("#")]),e._v(" app.createSession(ctxType, userId, ctxId?)")]),e._v(" "),t("p",[e._v("创建一个会话。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("ctxType:")]),e._v(" "),t("code",[e._v("'user' | 'group' | 'discuss'")]),e._v(" 上下文类型")]),e._v(" "),t("li",[t("strong",[e._v("userId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 发言用户 ID")]),e._v(" "),t("li",[t("strong",[e._v("ctxId:")]),e._v(" "),t("code",[e._v("number")]),e._v(" 群号或讨论组号（如果是私聊则不需要这个参数）")]),e._v(" "),t("li",[e._v("返回值: "),t("a",{attrs:{href:"#%E7%B1%BB%EF%BC%9Asession"}},[t("code",[e._v("Session")])]),e._v(" 会话对象")])]),e._v(" "),t("h2",{attrs:{id:"类：session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类：session"}},[e._v("#")]),e._v(" 类：Session "),t("Badge",{attrs:{text:"1.1.0+"}})],1),e._v(" "),t("p",[t("strong",[e._v("会话")]),e._v("是对同一上下文的多次消息的一个抽象。它使用 "),t("code",[e._v("app.createSession()")]),e._v(" 方法创建，并借助 "),t("code",[e._v("app.receiveMessage()")]),e._v(" 实现其功能。因此，这个类下的大部分方法的返回都基于 "),t("router-link",{attrs:{to:"/api/receiver.html#事件：after-middleware"}},[e._v("after-middleware")]),e._v(" 事件。在提供了极大方便的同时，会话也存在一些限制。")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("严格上说 after-middleware 事件不能够代表一条信息被处理完成，因为存在以下几种特殊情况：")]),e._v(" "),t("ul",[t("li",[e._v("异步的 message 事件监听器可能仍未处理完成")]),e._v(" "),t("li",[e._v("中间件和指令中可能存在未阻塞的异步操作")])]),e._v(" "),t("p",[e._v("因此，如果你的插件存在上面的某种情况，这个类的方法可能会返回预料之外的结果。你可以通过手动调用 "),t("router-link",{attrs:{to:"/api/utils.html#sleep"}},[t("code",[e._v("sleep()")])]),e._v(" 函数，让测试等待一段时间，来完成剩下的操作。")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("会话的另一个限制是它的实现基于 Meta 方法和 "),t("router-link",{attrs:{to:"/guide/receive-and-send.html#快捷操作"}},[e._v("快捷操作")]),e._v(" 技术。因此它无法用于测试下列两种行为：")],1),e._v(" "),t("ul",[t("li",[e._v("通过直接调用 Sender API 而非 Meta 方法的行为")]),e._v(" "),t("li",[e._v("对单一信息可能存在多条回复的行为")])]),e._v(" "),t("p",[e._v("在这两种情况下，你仍然可以使用上面所述的 MockedServer API 来解决你的问题。")])]),e._v(" "),t("h3",{attrs:{id:"session-send"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-send"}},[e._v("#")]),e._v(" session.send(message) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("模拟发送一条消息。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("message:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 要发送的信息")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<string[]>")]),e._v(" 收到的回复列表")])]),e._v(" "),t("h3",{attrs:{id:"session-shouldhavereply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-shouldhavereply"}},[e._v("#")]),e._v(" session.shouldHaveReply(message, reply?)")]),e._v(" "),t("p",[e._v("断言某条信息应存在某些回复。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("message:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 要发送给机器人的信息")]),e._v(" "),t("li",[t("strong",[e._v("reply:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 应有的回复，如果略去则不会进行比较")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h3",{attrs:{id:"session-shouldmatchsnapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-shouldmatchsnapshot"}},[e._v("#")]),e._v(" session.shouldMatchSnapshot(message)")]),e._v(" "),t("p",[e._v("断言某条信息应存在与快照一致的回复。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("message:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 要发送给机器人的信息")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h3",{attrs:{id:"session-shouldhavenoreply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-shouldhavenoreply"}},[e._v("#")]),e._v(" session.shouldHaveNoReply(message) "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("断言某条信息不应存在任何回复。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("message:")]),e._v(" "),t("code",[e._v("string")]),e._v(" 要发送给机器人的信息")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h2",{attrs:{id:"类：httpserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类：httpserver"}},[e._v("#")]),e._v(" 类：HttpServer "),t("Badge",{attrs:{text:"1.1.0+"}})],1),e._v(" "),t("p",[e._v("用于测试的 CQHTTP HTTP 服务器。")]),e._v(" "),t("h3",{attrs:{id:"server-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-post"}},[e._v("#")]),e._v(" server.post(meta?)")]),e._v(" "),t("p",[e._v("向 Koishi 上报事件。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("meta:")]),e._v(" "),t("code",[e._v("Meta")]),e._v(" 事件元信息对象")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<AxiosResponse<any>>")])])]),e._v(" "),t("h3",{attrs:{id:"server-createboundapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-createboundapp"}},[e._v("#")]),e._v(" server.createBoundApp(options?)")]),e._v(" "),t("p",[e._v("创建一个与当前服务器相关联的 App 实例。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("options:")]),e._v(" "),t("code",[e._v("AppOptions")]),e._v(" 参见 "),t("router-link",{attrs:{to:"/guide/config-file.html"}},[e._v("配置列表")])],1),e._v(" "),t("li",[e._v("返回值: "),t("router-link",{attrs:{to:"/api/app.html"}},[t("code",[e._v("App")])])],1)]),e._v(" "),t("h3",{attrs:{id:"server-close"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-close"}},[e._v("#")]),e._v(" server.close()")]),e._v(" "),t("p",[e._v("关闭服务端和所有关联的 App 实例。")]),e._v(" "),t("ul",[t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h2",{attrs:{id:"类：wsserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类：wsserver"}},[e._v("#")]),e._v(" 类：WsServer "),t("Badge",{attrs:{text:"1.1.0+"}})],1),e._v(" "),t("p",[e._v("用于测试的 CQHTTP WebSocket 服务器。")]),e._v(" "),t("h3",{attrs:{id:"server-post-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-post-2"}},[e._v("#")]),e._v(" server.post(meta?)")]),e._v(" "),t("p",[e._v("向 Koishi 上报事件。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("meta:")]),e._v(" "),t("code",[e._v("Meta")]),e._v(" 事件元信息对象")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h3",{attrs:{id:"server-nexttick"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-nexttick"}},[e._v("#")]),e._v(" server.nextTick()")]),e._v(" "),t("p",[e._v("等待任意一条请求。由于 WsServer 的 "),t("code",[e._v("post")]),e._v(" 方法无法得知访问结果，因此最好与之结合使用。")]),e._v(" "),t("ul",[t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h3",{attrs:{id:"server-createboundapp-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-createboundapp-2"}},[e._v("#")]),e._v(" server.createBoundApp(options?)")]),e._v(" "),t("p",[e._v("创建一个与当前服务器相关联的 App 实例。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("options:")]),e._v(" "),t("code",[e._v("AppOptions")]),e._v(" 参见 "),t("router-link",{attrs:{to:"/guide/config-file.html"}},[e._v("配置列表")])],1),e._v(" "),t("li",[e._v("返回值: "),t("router-link",{attrs:{to:"/api/app.html"}},[t("code",[e._v("App")])])],1)]),e._v(" "),t("h3",{attrs:{id:"server-close-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-close-2"}},[e._v("#")]),e._v(" server.close()")]),e._v(" "),t("p",[e._v("关闭服务端和所有关联的 App 实例。")]),e._v(" "),t("ul",[t("li",[e._v("返回值: "),t("code",[e._v("Promise<void>")])])]),e._v(" "),t("h2",{attrs:{id:"koishi-utils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koishi-utils"}},[e._v("#")]),e._v(" koishi-utils "),t("Badge",{attrs:{text:"3.0.0+"}})],1),e._v(" "),t("p",[e._v("koishi-test-utils 导出了一个 "),t("code",[e._v("utils")]),e._v(" 对象作为 koishi-utils 的副本，同时增加了手动控制其中部分函数返回值的机制。所有的 random 函数和 sleep 函数都将是 mockFn 实例，你可以在 "),t("a",{attrs:{href:"https://jestjs.io/docs/zh-Hans/mock-function-api",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("这里")]),t("OutboundLink")],1),e._v(" 看到它们的详细文档。")]),e._v(" "),t("p",[e._v("除此以外，koishi-test-utils 还扩展了以下几个方法：")]),e._v(" "),t("h3",{attrs:{id:"utils-randompick-mockindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-randompick-mockindex"}},[e._v("#")]),e._v(" utils.randomPick.mockIndex(index)")]),e._v(" "),t("p",[e._v("控制此后 randomPick 函数返回的数组元素。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("index:")]),e._v(" "),t("code",[e._v("number")]),e._v("  元素下标")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("this")]),e._v(" randomPick 函数本身")])]),e._v(" "),t("h3",{attrs:{id:"utils-randompick-mockindexonce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-randompick-mockindexonce"}},[e._v("#")]),e._v(" utils.randomPick.mockIndexOnce(index)")]),e._v(" "),t("p",[e._v("控制下一次 randomPick 函数返回的数组元素。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("index:")]),e._v(" "),t("code",[e._v("number")]),e._v("  元素下标")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("this")]),e._v(" randomPick 函数本身")])]),e._v(" "),t("h3",{attrs:{id:"utils-randomsplice-mockindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-randomsplice-mockindex"}},[e._v("#")]),e._v(" utils.randomSplice.mockIndex(index)")]),e._v(" "),t("p",[e._v("控制此后 randomSplice 函数返回的数组元素。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("index:")]),e._v(" "),t("code",[e._v("number")]),e._v("  元素下标")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("this")]),e._v(" randomSplice 函数本身")])]),e._v(" "),t("h3",{attrs:{id:"utils-randomsplice-mockindexonce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-randomsplice-mockindexonce"}},[e._v("#")]),e._v(" utils.randomSplice.mockIndexOnce(index)")]),e._v(" "),t("p",[e._v("控制下一次 randomSplice 函数返回的数组元素。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("index:")]),e._v(" "),t("code",[e._v("number")]),e._v("  元素下标")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("this")]),e._v(" randomSplice 函数本身")])]),e._v(" "),t("h3",{attrs:{id:"utils-randommultipick-mockindices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-randommultipick-mockindices"}},[e._v("#")]),e._v(" utils.randomMultiPick.mockIndices(...indices)")]),e._v(" "),t("p",[e._v("控制此后 randomMultiPick 函数返回的数组元素。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("indices:")]),e._v(" "),t("code",[e._v("number")]),e._v("  元素下标列表")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("this")]),e._v(" randomMultiPick 函数本身")])]),e._v(" "),t("h3",{attrs:{id:"utils-randommultipick-mockindicesonce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utils-randommultipick-mockindicesonce"}},[e._v("#")]),e._v(" utils.randomMultiPick.mockIndicesOnce(...indices)")]),e._v(" "),t("p",[e._v("控制下一次 randomMultiPick 函数返回的数组元素。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("indices:")]),e._v(" "),t("code",[e._v("number")]),e._v("  元素下标列表")]),e._v(" "),t("li",[e._v("返回值: "),t("code",[e._v("this")]),e._v(" randomMultiPick 函数本身")])])])}),[],!1,null,null,null);v.default=r.exports}}]);