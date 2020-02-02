(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{240:function(t,a,c){"use strict";c.r(a);var s=c(0),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"消息的发送"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#消息的发送"}},[t._v("#")]),t._v(" 消息的发送")]),t._v(" "),c("h2",{attrs:{id:"发送消息到特定的上下文"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#发送消息到特定的上下文"}},[t._v("#")]),t._v(" 发送消息到特定的上下文")]),t._v(" "),c("p",[t._v("你可以使用 echo 指令发送消息到特定的上下文：")]),t._v(" "),c("CodeContainer",{attrs:{title:""}},[c("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[c("code",[c("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" [-u ids] [-g ids] [-d ids] ")]),c("span",{staticStyle:{color:"#F92672"}},[t._v("<")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("text...")]),c("span",{staticStyle:{color:"#F92672"}},[t._v(">")]),t._v("\n"),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" foo bar              ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 向你发送 foo bar")]),t._v("\n"),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" -u 123 foo bar       ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 向用户 123 私聊发送 foo bar")]),t._v("\n"),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" -g 456,789 foo bar   ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 向群 456 和 789 同时发送 foo bar")])])])]),c("div",{staticClass:"custom-block tip"},[c("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),c("p",[t._v("echo 指令的消息是一个 "),c("router-link",{attrs:{to:"/guide/command-system.html#长参数"}},[t._v("长参数")]),t._v("，因此你应该把所有的选项写到消息前面，否则会被认为是消息的一部分。")],1)]),t._v(" "),c("h2",{attrs:{id:"向所有群广播消息"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#向所有群广播消息"}},[t._v("#")]),t._v(" 向所有群广播消息")]),t._v(" "),c("p",[t._v("broadcast 指令用于按照 "),c("code",[t._v("assignee")]),t._v(" 字段向所有 Bot 所负责的群发送一段文本。你可以这样调用它：")]),t._v(" "),c("CodeContainer",{attrs:{title:""}},[c("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[c("code",[c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("broadcast foo bar baz     ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 向所有群发送 foo bar baz")])])])]),c("p",[t._v("这看起来只是 echo 的一个简写版本，但实际上这两个指令有下面的差别：")]),t._v(" "),c("table",[c("thead",[c("tr",[c("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),c("th",{staticStyle:{"text-align":"center"}},[t._v("echo")]),t._v(" "),c("th",{staticStyle:{"text-align":"center"}},[t._v("broadcast")])])]),t._v(" "),c("tbody",[c("tr",[c("td",{staticStyle:{"text-align":"center"}},[t._v("输出上下文")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("可自行指定任意上下文")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("所有 Bot 负责的所有群")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"center"}},[t._v("需要数据库")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"center"}},[t._v("支持多 App")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"center"}},[t._v("发送间隔")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("同时")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("可自行指定时间间隔")])])])]),t._v(" "),c("h3",{attrs:{id:"指定发送间隔"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#指定发送间隔"}},[t._v("#")]),t._v(" 指定发送间隔")]),t._v(" "),c("p",[t._v("如果你的机器人加了很多群，你可能希望指定发送间隔以避免封号：")]),t._v(" "),c("CodeContainer",{attrs:{title:"koishi.config.js"}},[c("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[c("code",[c("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),c("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  plugins: [[")]),c("span",{staticStyle:{color:"#E6DB74"}},[t._v("'common'")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    broadcastInterval: ")]),c("span",{staticStyle:{color:"#AE81FF"}},[t._v("1000")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("// 默认值为 1s")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }]],")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),c("h2",{attrs:{id:"模拟其他上下文发送信息"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#模拟其他上下文发送信息"}},[t._v("#")]),t._v(" 模拟其他上下文发送信息")]),t._v(" "),c("p",[t._v("与上面的两个指令相反，contextify 指令可以让你临时切换上下文调用指令。例如你在私聊上下文：")]),t._v(" "),c("CodeContainer",{attrs:{title:""}},[c("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[c("code",[c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("teach foo bar                       ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 无效，因为 teach 指令只对群上下文生效")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("contextify -g 456 teach foo bar     ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 有效，相当于在群 456 调用 teach foo bar")])])])]),c("p",[t._v("除此以外，你还可以模拟其他上下文调用（假设你现在在群 123 中调用指令）：")]),t._v(" "),c("CodeContainer",{attrs:{title:""}},[c("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[c("code",[c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctxf -g 456 ")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("command")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("                 ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 模拟你在群 456 的上下文")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctxf -d 456 ")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("command")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("                 ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 模拟你在讨论组 456 的上下文")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctxf -u 789 ")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("command")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("                 ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 模拟用户 789 的私聊上下文")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctxf -m 789 ")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("command")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("                 ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 模拟用户 789 在当前群的上下文")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctxf -u 789 -g 456 ")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("command")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("          ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 模拟用户 789 在群 456 的上下文")]),t._v("\n"),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctxf -u 789 -d 456 ")]),c("span",{staticStyle:{color:"#66D9EF"}},[t._v("command")]),c("span",{staticStyle:{color:"#F8F8F2"}},[t._v("          ")]),c("span",{staticStyle:{color:"#75715E"}},[t._v("# 模拟用户 789 在讨论组 456 的上下文")])])])]),c("p",[t._v("尽管切换了调用上下文，但 contextify 指令的输出仍然产生在原上下文中。这在你想调用群指令的时候是很有用的。")]),t._v(" "),c("div",{staticClass:"custom-block tip"},[c("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),c("p",[t._v("为了安全性考虑，contextify 命令设计的最低使用权限为 3 级，同时切换的用户等级不能高于或等于调用者自身。")])])],1)}),[],!1,null,null,null);a.default=o.exports}}]);