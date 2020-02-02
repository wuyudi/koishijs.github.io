(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{251:function(t,e,s){"use strict";s.r(e);var a=s(0),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("p",[t._v("Koishi CLI 只提供了两个命令："),s("code",[t._v("koishi init")]),t._v(" 和 "),s("code",[t._v("koishi run")]),t._v("。前者用于初始化一个配置文件，后者用于运行一个配置文件。而这个配置文件的大部分参数又可以直接传入 App 的构造函数中。可见，理解这些配置项是理解 Koishi 工作原理的关键。本章就详细介绍每个配置项的功能和使用方式。")]),t._v(" "),s("p",[t._v("标有 "),s("Badge",{attrs:{text:"CLI",vertical:"baseline"}}),t._v(" 表示只能在配置文件中使用。")],1),t._v(" "),s("h2",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),s("p",[t._v("机器人的通信方式，目前支持 "),s("code",[t._v("'http'")]),t._v(" 和 "),s("code",[t._v("'ws'")]),t._v(" 两种。特别地，如果这个配置缺省，Koishi 也会读取你的 "),s("code",[t._v("server")]),t._v(" 选项，根据你配置的服务器 URL 进行适配。")]),t._v(" "),s("p",[t._v("相关 CQHTTP 配置："),s("code",[t._v("use_http")]),t._v(", "),s("code",[t._v("use_ws")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("有关 HTTPS/WSS")]),t._v(" "),s("p",[t._v("由于目前 CoolQ HTTP API 本身不支持直接配置 SSL/TLS 证书，因此如果要使用 HTTPS/WSS 需要使用第三方软件进行代理。这里有一篇 "),s("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/wiki/HTTPS",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关文档"),s("OutboundLink")],1),t._v(" 可供参考。")])]),t._v(" "),s("h2",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),s("p",[t._v("服务器监听的端口。")]),t._v(" "),s("p",[t._v("相关 CQHTTP 配置："),s("code",[t._v("post_url")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("CQHTTP 上报信息的默认值为 "),s("code",[t._v("http://localhost:8080")]),t._v("，但 Koishi 中不会提供默认行为，你需要在构造函数中显式的配置它或使用 "),s("code",[t._v("koishi init")]),t._v(" 命令生成含该配置的文件。")])]),t._v(" "),s("h2",{attrs:{id:"server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" server")]),t._v(" "),s("p",[t._v("如果使用了 HTTP，则该配置将作为发送信息的服务端；如果使用了 WebSocket，则该配置将作为监听事件和发送信息的服务端。")]),t._v(" "),s("p",[t._v("相关 CQHTTP 配置："),s("code",[t._v("host")]),t._v(", "),s("code",[t._v("port")]),t._v(", "),s("code",[t._v("ws_host")]),t._v(", "),s("code",[t._v("ws_port")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("CQHTTP 的 HTTP 服务器默认监听 5700 端口，WebSocket 服务器默认监听 6700 端口，但 Koishi 中不会提供默认行为，你需要在构造函数中显式的配置它或使用 "),s("code",[t._v("koishi init")]),t._v(" 命令生成含该配置的文件。")])]),t._v(" "),s("h2",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" token")]),t._v(" "),s("p",[t._v("发送信息时用于验证的字段，应与 CQHTTP 的 "),s("code",[t._v("access_token")]),t._v(" 配置保持一致。")]),t._v(" "),s("h2",{attrs:{id:"secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secret"}},[t._v("#")]),t._v(" secret")]),t._v(" "),s("p",[t._v("接收信息时用于验证的字段，应与 CQHTTP 的 "),s("code",[t._v("secret")]),t._v(" 配置保持一致。")]),t._v(" "),s("h2",{attrs:{id:"selfid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selfid"}},[t._v("#")]),t._v(" selfId")]),t._v(" "),s("p",[t._v("机器人自己的 QQ 号。这个选项通常是可选的，因为 Koishi 在大部分情况下可以自动获取机器人的 QQ 号。但是在 CQHTTP 版本低于 3.4 的情况下，你需要手动配置它。此外，预先配置 selfId 对安装了特定插件的应用可能拥有更快的启动速度。参见 "),s("router-link",{attrs:{to:"/guide/multiple-bots.html#qq-号自动获取"}},[s("strong",[t._v("QQ 号自动获取")])]),t._v(" 一节。")],1),t._v(" "),s("h2",{attrs:{id:"database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" database")]),t._v(" "),s("p",[t._v("要安装的数据库配置信息。参见 "),s("router-link",{attrs:{to:"/guide/using-database.html"}},[s("strong",[t._v("使用数据库")])]),t._v(" 一章。")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果是在 CLI 中，Koishi 会自动对使用的数据库进行注册；而直接使用 API 则不会，因此你需要手动注册它们。")])]),t._v(" "),s("h2",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins "),s("Badge",{attrs:{text:"CLI"}})],1),t._v(" "),s("p",[t._v("要安装的插件列表。如果传入一个列表，则依次安装列表中的插件；如果传入一个对象，则以对象的键为上下文依次注册对应的值中的插件。参见 "),s("router-link",{attrs:{to:"/guide/plugin-and-context.html"}},[s("strong",[t._v("插件与上下文")])]),t._v(" 一章。")],1),t._v(" "),s("h2",{attrs:{id:"nickname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nickname"}},[t._v("#")]),t._v(" nickname")]),t._v(" "),s("p",[t._v("机器人的昵称，可以是字符串或字符串数组。将用于指令前缀的匹配。例如，如果配置该选项为 "),s("code",[t._v("'恋恋'")]),t._v("，则你可以通过 "),s("code",[t._v("恋恋，help")]),t._v(" 来进行 help 指令的调用。参见 "),s("router-link",{attrs:{to:"/guide/command-system.html#指令前缀"}},[s("strong",[t._v("指令前缀")])]),t._v(" 一节。")],1),t._v(" "),s("h2",{attrs:{id:"commandprefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commandprefix"}},[t._v("#")]),t._v(" commandPrefix")]),t._v(" "),s("p",[t._v("指令前缀字符，可以是字符串或字符串数组。将用于指令前缀的匹配。例如，如果配置该选项为 "),s("code",[t._v(".")]),t._v("，则你可以通过 "),s("code",[t._v(".help")]),t._v(" 来进行 help 指令的调用。参见 "),s("router-link",{attrs:{to:"/guide/command-system.html#指令前缀"}},[s("strong",[t._v("指令前缀")])]),t._v(" 一节。")],1),t._v(" "),s("h2",{attrs:{id:"maxmiddlewares"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxmiddlewares"}},[t._v("#")]),t._v(" maxMiddlewares")]),t._v(" "),s("p",[t._v("最大中间件的数量。如果超过这个数量，Koishi 会认定为发生了内存泄漏，将产生一个错误事件，并停止新中间件的安装。默认值为 "),s("code",[t._v("64")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"similaritycoefficient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#similaritycoefficient"}},[t._v("#")]),t._v(" similarityCoefficient")]),t._v(" "),s("p",[t._v("用于模糊匹配的相似系数，应该是一个 0 到 1 之间的数值。数值越高，模糊匹配越严格。设置为 1 可以完全禁用模糊匹配。参见 "),s("router-link",{attrs:{to:"/guide/command-system.html#模糊匹配"}},[s("strong",[t._v("模糊匹配")])]),t._v(" 一节。")],1),t._v(" "),s("h2",{attrs:{id:"quickoperationtimeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quickoperationtimeout"}},[t._v("#")]),t._v(" quickOperationTimeout")]),t._v(" "),s("p",[t._v("快捷操作的时间限制，单位为毫秒。如果配置了这个选项且使用了 HTTP 通信方式，则在这段时间内的首次调用 "),s("code",[t._v("meta.$send()")]),t._v(" 或类似的方法将不产生新的 HTTP 请求。默认值为 "),s("code",[t._v("0")]),t._v("。参见 "),s("router-link",{attrs:{to:"/guide/receive-and-send.html#快捷操作"}},[s("strong",[t._v("快捷操作")])]),t._v(" 一节。")],1),t._v(" "),s("h2",{attrs:{id:"loglevel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loglevel"}},[t._v("#")]),t._v(" logLevel "),s("Badge",{attrs:{text:"CLI"}}),s("Badge",{attrs:{text:"1.3.0+"}})],1),t._v(" "),s("p",[t._v("默认的输出等级。默认值为 "),s("code",[t._v("2")]),t._v("。参见 "),s("router-link",{attrs:{to:"/guide/logger.html#设置输出等级"}},[s("strong",[t._v("设置输出等级")])]),t._v(" 一节。")],1),t._v(" "),s("h2",{attrs:{id:"logfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logfilter"}},[t._v("#")]),t._v(" logFilter "),s("Badge",{attrs:{text:"CLI"}}),s("Badge",{attrs:{text:"1.3.0+"}})],1),t._v(" "),s("p",[t._v("用于在某些范围覆盖默认的输出等级。参见 "),s("router-link",{attrs:{to:"/guide/logger.html#过滤输出"}},[s("strong",[t._v("过滤输出")])]),t._v(" 一节。")],1)])}),[],!1,null,null,null);e.default=v.exports}}]);