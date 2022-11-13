(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"virtual-box下centos-7-minimal配置网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtual-box下centos-7-minimal配置网络"}},[s._v("#")]),s._v(" Virtual Box下centOS 7 Minimal配置网络")]),s._v(" "),n("p",[s._v("网上已经有很多安装centOS的教程了,这里略.")]),s._v(" "),n("p",[s._v("对于新安装的输入centOS 7 Minimal, "),n("code",[s._v("ip addr")]),s._v("命令,除了"),n("code",[s._v("127.0.0.1")]),s._v(",你会发现缺少其他IP地址。")]),s._v(" "),n("p",[s._v("操作步骤如下:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ifcfg-enp0s3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在最后一行添加 "),n("code",[s._v("ONBOOT=yes")])]),s._v(" "),n("div",{staticClass:"language-15 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("TYPE=Ethernet\nPROXY_METHOD=none\nBROWSER_ONLY=no\nBOOTPROTO=dhcp\nDEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=enp0s3\nUUID=a880a364-cef3-45c2-8031-046739523a8f\nDEVICE=enp0s3\nONBOOT=yes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("执行"),n("code",[s._v("reboot")]),s._v("命令,重启系统.")]),s._v(" "),n("p",[s._v("重启后,重新输入 "),n("code",[s._v("ip addr")]),s._v(" 命令,如图，看到已经配置了新的ip地址了.\n"),n("img",{attrs:{src:"http://www.jeramysingleton.com/content/images/2015/09/select_network_settings-1.png",alt:"An image"}})]),s._v(" "),n("p",[s._v("按照图片,点击网络配置, 点击"),n("code",[s._v("advanced")]),s._v(", 如图添加一个网络配置\n"),n("img",{attrs:{src:"http://www.jeramysingleton.com/content/images/2015/09/port_forwarding.png",alt:"An image"}})]),s._v(" "),n("p",[n("a",{attrs:{href:"http://www.jeramysingleton.com/install-centos-7-minimal-in-virtualbox/",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考链接"),n("OutboundLink")],1)]),s._v(" "),n("h4",{attrs:{id:"我使用以下设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我使用以下设置"}},[s._v("#")]),s._v(" 我使用以下设置：")]),s._v(" "),n("ul",[n("li",[s._v("主机IP：127.0.0.1  - 这是主机操作系统（不是VM）的IP地址（本地主机）。")]),s._v(" "),n("li",[s._v("如果要从Internet上的任何位置访问VM，则需要使用计算机真实IP。")]),s._v(" "),n("li",[s._v("主机端口：2222  - 使用计算机上打开的端口。")]),s._v(" "),n("li",[s._v("访客IP  - 这是在VM命令行中键入ip addr时显示的IP地址。")]),s._v(" "),n("li",[s._v("在我的情况下，每次只有一个VM运行时它就是10.0.2.15。")]),s._v(" "),n("li",[s._v("Guest Port-  22是默认的ssh端口，这就是我们想要在这里使用的。")])]),s._v(" "),n("p",[s._v("最后使用ssh登录,在本地机器命令行输入")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v(" root@localhost\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("[完]")])])}),[],!1,null,null,null);n.default=t.exports}}]);