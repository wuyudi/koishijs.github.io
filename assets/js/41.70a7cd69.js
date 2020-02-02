(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{242:function(t,o,s){"use strict";s.r(o);var a=s(0),c=Object(a.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"编写和查看帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写和查看帮助"}},[t._v("#")]),t._v(" 编写和查看帮助")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("阅读本章前，你最好先对 Koishi 的 "),s("router-link",{attrs:{to:"/guide/command-system.html"}},[s("strong",[t._v("指令系统")])]),t._v(" 有一个系统的认识。")],1)]),t._v(" "),s("h2",{attrs:{id:"查看帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助"}},[t._v("#")]),t._v(" 查看帮助")]),t._v(" "),s("p",[t._v("Koishi 拥有着强大的指令系统，然而过于复杂的功能也会困扰使用者。因此，Koishi 也内置了 help 指令，用于输出全部或特定指令的使用方法。你可以这样调用它：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("help")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("                ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 显示一级指令列表")]),t._v("\n"),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("help")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("           ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 显示 echo 指令的信息")]),t._v("\n"),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" -h             ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 显示 echo 指令的信息（与上面相同，且 -h 可以替换成 --help）")])])])]),s("p",[t._v("这里的信息可以包含很多内容，比如指令的名词，参数，选项，子指令，权限设置等等。")]),t._v(" "),s("p",[t._v("此外，尽管上面的 echo 是指令名，但是也可以换成别名甚至快捷调用，help 指令照样可以识别。")]),t._v(" "),s("h3",{attrs:{id:"查看子指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看子指令"}},[t._v("#")]),t._v(" 查看子指令")]),t._v(" "),s("p",[t._v("在 "),s("router-link",{attrs:{to:"/guide/command-system.html#子指令"}},[t._v("子指令")]),t._v(" 一节中我们已经透露了 help 指令在查看子指令方面的行为。让我们先回顾一下 Koishi 支持的两种子指令格式。一种是"),s("strong",[t._v("层级式")]),t._v("（例如 foo/bar），另一种则叫"),s("strong",[t._v("派生式")]),t._v("（例如 foo.bar）。它们在使用上有所不同，层级式可以直接通过最后一级进行调用，而派生式则需要写全指令名。")],1),t._v(" "),s("p",[t._v("尽管有这些不同，但是上述两个指令都属于 foo 的子指令，因此它们")]),t._v(" "),s("ol",[s("li",[t._v("都不会显示在 "),s("code",[t._v("help")]),t._v(" 的输出中（因为它们都不是一级指令）")]),t._v(" "),s("li",[t._v("都会显示在 "),s("code",[t._v("help foo")]),t._v(" 的输出中（因为它们都是 foo 的子指令）")])]),t._v(" "),s("p",[t._v("但是，我们又知道，foo/bar 是可以直接作为 bar 来调用的，而 foo.bar 不行，那么有没有一种方法可以插件全部可以直接调用的指令列表呢？Koishi 也提供了方法（这里的 -e 是 --expand 的缩写）：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("help")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" -e             ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 显示全部可以直接调用的指令列表")]),t._v("\n"),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("help")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" baz -e         ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 显示指令 baz 的信息，以及全部可以直接调用的 baz 的子指令列表")])])])]),s("h3",{attrs:{id:"查看快捷方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看快捷方式"}},[t._v("#")]),t._v(" 查看快捷方式")]),t._v(" "),s("p",[t._v("我们已经学会了搜索特定指令，特定快捷方式和搜索全部指令，那么自然也有搜索全部快捷方式的方法（这里的 -s 是 --shortcut 的缩写）：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("help")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" -s             ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 显示全部指令的快捷方式列表（无论是不是一级指令）")])])])]),s("h2",{attrs:{id:"编写帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写帮助"}},[t._v("#")]),t._v(" 编写帮助")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("下面的 echo 指令是为了理解方便而举的例子，与真实的内置 echo 指令可能不同。")])]),t._v(" "),s("p",[t._v("之前已经介绍了 "),s("code",[t._v("ctx.command()")]),t._v(" 和 "),s("code",[t._v("cmd.option()")]),t._v(" 这两个方法，它们都能传入第二个字符串作为参数。这个字符串会作为这个指令或选项的描述文字。就像这样：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'echo <message...>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'输出收到的信息'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("option")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'-t, --timeout <seconds>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'设定延迟发送的时间'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])])])]),s("p",[t._v("那么这些内容如何才能让用户看到呢？别担心，koishi-plugin-common 中内置了一个强大的 help 指令，可以让你方便地查看一个指令的帮助文档。调用 "),s("code",[t._v("help echo")]),t._v(" 或者 "),s("code",[t._v("echo -h")]),t._v("（这个默认情况下会被 Koishi 自动转化为 help 指令调用），你会看到这样的回复：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",[s("code",[t._v("echo <message...>\n输出收到的信息\n可用的选项有：\n    -t, --timeout <seconds>  设定延迟发送的时间\n")])])]),s("h3",{attrs:{id:"添加用法和使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加用法和使用示例"}},[t._v("#")]),t._v(" 添加用法和使用示例")]),t._v(" "),s("p",[t._v("当然，我们还可以加入具体的用法和使用示例，进一步丰富这则使用说明：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'echo <message...>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'输出收到的信息'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("option")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'-t, --timeout <seconds>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'设定延迟发送的时间'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("usage")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'注意：参数请写在最前面，不然会被当成 message 的一部分！'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("example")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'echo -t 300 Hello World  五分钟后发送 Hello World'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])])])]),s("p",[t._v("这时再调用 "),s("code",[t._v("help echo")]),t._v(" 或者 "),s("code",[t._v("echo -h")]),t._v("，你便会发现使用说明中已经添加了你刚刚的补充文本：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",[s("code",[t._v("echo <message...>\n输出收到的信息\n注意：参数请写在最前面，不然会被当成 message 的一部分！\n可用的选项有：\n    -t, --timeout <seconds>  设定延迟发送的时间\n使用示例：\n    echo -t 300 Hello World  五分钟后发送 Hello World\n")])])]),s("p",[t._v("最后，如果直接调用 "),s("code",[t._v("help")]),t._v("，输出的会是全部指令组成的列表。")]),t._v(" "),s("h3",{attrs:{id:"手动禁用-h-help-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动禁用-h-help-选项"}},[t._v("#")]),t._v(" 手动禁用 -h, --help 选项")]),t._v(" "),s("p",[t._v("如果你编写的某个指令希望把 -h, --help 用作其他目的，你也可以在手动禁用内置的选项：")]),t._v(" "),s("CodeContainer",{attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'echo <message...>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'输出收到的信息'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", { noHelpOption: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("true")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" })")])])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("作为内置选项，仅用 "),s("code",[t._v("cmd.removeOption()")]),t._v(" 方法虽然能够将 -h, --help 的帮助删除，但是不能改变调用指令时显示帮助的行为。你应当确保通过 "),s("code",[t._v("noHelpOption")]),t._v(" 来控制这个行为。")])])],1)}),[],!1,null,null,null);o.default=c.exports}}]);