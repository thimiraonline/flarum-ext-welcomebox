module.exports=function(e){var t={};function o(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=8)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["utils/formatNumber"]},function(e,t){e.exports=flarum.core.compat["common/helpers/username"]},function(e,t){e.exports=flarum.core.compat["helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["components/AvatarEditor"]},function(e,t){e.exports=flarum.core.compat["components/SignUpModal"]},function(e,t,o){"use strict";o.r(t);var a=o(1),r=o(0),n=o.n(r),s=o(2),c=o.n(s),u=o(4),i=o.n(u),l=o(3),f=o.n(l),d=o(5),p=o.n(d),b=o(6),x=o.n(b),v=o(7),g=o.n(v);n.a.initializers.add("justoverclock/flarum-ext-welcomebox",(function(){Object(a.extend)(c.a.prototype,"sidebarItems",(function(e){var t=n.a.session.user,o=(n.a.forum.attribute("baseUrl"),n.a.route("settings"));n.a.session.user&&e.add("welcomeBox",m("div",{className:"containerwb"},m("div",{className:"backgrwb"},[m("div",m("a",{href:n.a.route.user(t)},m("div",{className:"avatarwb"},x.a.component({user:t})))),m("div",{className:"contentwb"},m("div",{className:"textinfo"},n.a.translator.trans("flarum-ext-welcomebox.forum.wback"),m("br"),m("strong",i()(t))),m("div",{className:"cont"},m("div",{className:"circletop"},[m("a",{href:o,title:n.a.translator.trans("core.forum.settings.title")},m("i",{className:"menuicon fas fa-tasks"})),m("a",{href:n.a.route.user(t),title:"profile"},m("i",{className:"menuicon far fa-user"})),m("a",{href:n.a.route.user(t)+"/mentions",title:"Mentions"},m("i",{className:"menuicon fas fa-at"})),m("a",{href:n.a.route.user(t)+"/discussions",title:"Discussion list"},m("i",{className:"menuicon far fa-list-alt"}))]))),m("div",{className:"iconbadge"},p()(t.badges().toArray())),m(".ulwb",{className:"contentwb"},[m("li",[m("label",{className:"textinfo"},n.a.translator.trans("flarum-ext-welcomebox.forum.npost")),": ",m("strong",{className:"textinfo"},f()(t.commentCount()))]),m("li",[m("label",{className:"textinfo"},n.a.translator.trans("flarum-ext-welcomebox.forum.discussion")),": ",m("strong",{className:"textinfo"},f()(t.discussionCount()))])])])),20)}))})),Object(a.extend)(c.a.prototype,"sidebarItems",(function(e){var t=n.a.forum.attribute("baseUrl")+"/assets/extensions/justoverclock-welcomebox/reg-img.png";n.a.session.user||!0===n.a.forum.attribute("HideGuestBox")&&e.add("welcomeBoxGuest",m("div",{className:"containerwb"},m("div",{className:"backgrwbguest"},[m("div",{className:"guesttext"},n.a.translator.trans("flarum-ext-welcomebox.forum.welcomeguest")),m("p",{className:"guestdesc"},n.a.translator.trans("flarum-ext-welcomebox.forum.notregistered")),m("button",{className:".SplitDropdown-button Button Button--primary hasIcon",type:"button",onclick:function(){return n.a.modal.show(g.a)}},n.a.translator.trans("core.forum.header.sign_up_link")),m("div",{className:"contentwb"},m("div",m("img",{className:"ingwbox",src:t})))])),20)}))}]);
//# sourceMappingURL=forum.js.map