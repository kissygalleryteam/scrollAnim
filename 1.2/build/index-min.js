/*! scrollAnim - v1.2 - 2013-08-02 3:46:35 PM
* Copyright (c) 2013 mohen; Licensed  */
KISSY.add("gallery/scrollAnim/1.2/index",function(a,b){function c(){c.superclass.constructor.call(this)}var d,e=a.DOM,f=a.Event,g=[];return a.extend(c,b,{smoothWheelScroll:function(b){if(!a.isNumber(b)&&b>=1&&3>=b)return a.log("smoothScroll\u65b9\u6cd5\u7684\u53c2\u6570\u5fc5\u987b\u4e3a\u6570\u5b57\uff01\uff01\uff01"),null;var c,d=1,g=/webkit/i.test(navigator.userAgent)||"BackCompat"==document.compatMode?document.body:document.documentElement;f.on(document,"mousewheel",function(f){f.halt(),c&&(c.stop(),d++,d=d>b?b:d),c=a.Anim(g,{scrollTop:e.scrollTop()-100*d*f.deltaY},.5,"easeOut",function(){c=void 0,d=1}).run()})},smoothKeydownScroll:function(b){if(!a.isNumber(b)&&b>=1&&3>=b)return a.log("smoothScroll\u65b9\u6cd5\u7684\u53c2\u6570\u5fc5\u987b\u4e3a\u6570\u5b57\uff01\uff01\uff01"),null;var c,d=1,g=/webkit/i.test(navigator.userAgent)||"BackCompat"==document.compatMode?document.body:document.documentElement;f.on(document,"keydown",function(f){38==f.which&&(f.halt(),c&&(c.stop(),d++,d=d>b?b:d),c=a.Anim(g,{scrollTop:e.scrollTop()-100*d},.5,"easeOut",function(){c=void 0,d=1}).run()),40==f.which&&(f.halt(),c&&(c.stop(),d++,d=d>b?b:d),c=a.Anim(g,{scrollTop:e.scrollTop()+100*d},.5,"easeOut",function(){c=void 0,d=1}).run())})},scrollLineAnim:function(b,c,h,i){var j,k,l=["start_scroll","end_scroll","start_value","end_value"];if(!a.isString(b))return a.log("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9009\u62e9\u5668\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff01\uff01\uff01"),null;if(!a.isString(c))return a.log("\u60a8\u8f93\u5165\u7684\u5f85\u53d8\u5316\u7684\u5c5e\u6027\u5e94\u4e3a\u5b57\u7b26\u4e32\u683c\u5f0f\uff01\uff01\uff01"),null;if(!a.isObject(h))return a.log("\u60a8\u8f93\u5165\u7684\u914d\u7f6e\u4fe1\u606f\u5e94\u8be5\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff01\uff01\uff01"),null;for(j=0;j<l.length;j++)if(!h.hasOwnProperty(l[j]))return a.log("\u4f20\u5165\u7684json\u683c\u5f0f\u4e0d\u6b63\u786e\uff01\uff01\uff01\u5e94\u8be5\u5305\u542b"+l[j]+"\u5c5e\u6027"),null;return h.hasOwnProperty("isCallbackLoop")||(h.isCallbackLoop=!0),h.hasOwnProperty("isAnimLoop")||(h.isAnimLoop=!0),void 0==i||a.isFunction(i)?(k={},k.elem=b,k.attr=c,k.config=h,k.callback=i,k.lock=!1,k.all_lock=!1,g.push(k),f.on(window,"scroll",d=function(){var b,c,d,f,h=e.scrollTop(window);for(f=0;f<g.length;f++)if(b=void 0,c=void 0,!g[f].all_lock)if(h>=g[f].config.start_scroll&&h<=g[f].config.end_scroll){for(b=e.css(g[f].elem,g[f].attr),d=0;d<b.length;d++)if(!(b.substr(d,1)>="0"&&b.substr(d,1)<="9")&&"-"!=b.substr(d,1)&&"."!=b.substr(d,1)){c=b.substr(d,1);break}a.isUndefined(c)?e.css(g[f].elem,g[f].attr,g[f].config.start_value+(h-g[f].config.start_scroll)*((g[f].config.end_value-g[f].config.start_value)/(g[f].config.end_scroll-g[f].config.start_scroll))):(e.css(g[f].elem,g[f].attr,g[f].config.start_value+(h-g[f].config.start_scroll)*((g[f].config.end_value-g[f].config.start_value)/(g[f].config.end_scroll-g[f].config.start_scroll))+b.substring(b.indexOf(c))),b=b.substring(0,b.indexOf(c))),Math.abs(b-g[f].config.end_value)<Math.abs(.01*(g[f].config.end_value-g[f].config.start_value))?g[f].lock||(g[f].callback&&g[f].callback(),g[f].config.isAnimLoop||(g[f].all_lock=!0),g[f].lock=!0):g[f].config.isCallbackLoop&&(g[f].lock=!1)}else h>g[f].config.end_scroll&&0==g[f].lock&&(g[f].callback&&g[f].callback(),g[f].config.isAnimLoop||(g[f].all_lock=!0),g[f].lock=!0)}),void 0):(a.log("\u60a8\u8f93\u5165\u7684\u56de\u8c03\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a\u51fd\u6570\uff01\uff01\uff01"),null)}}),c},{requires:["base"]});