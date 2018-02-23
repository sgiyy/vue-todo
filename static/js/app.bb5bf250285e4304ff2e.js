webpackJsonp([1],{"5GSc":function(e,o){},NHnr:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n("7+uW"),s={render:function(){var e=this.$createElement,o=this._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(e){n("5GSc")},null,null).exports,c=n("/ocq"),a=n("mvHQ"),d=n.n(a),r=function(e){localStorage.setItem("vuejs-todo",d()(e))},l=function(){return JSON.parse(localStorage.getItem("vuejs-todo")||"[]")},u=function(e){return e.filter(function(e){return!e.done})},v=function(e){return e.filter(function(e){return e.done})},h={data:function(){return{todos:l(),newTodo:"",isShowDone:!0}},watch:{todos:{handler:function(e){r(e)},deep:!0}},computed:{activeTodos:function(){return u(this.todos)||[]},doneTodos:function(){return v(this.todos)||[]}},methods:{getTodos:function(){},addTodo:function(){var e=this.newTodo&&this.newTodo.trim();e?(this.todos.push({id:(new Date).getTime(),content:e,done:!1}),this.newTodo=""):console.log("empty")},toggleTodo:function(e){e.done=!e.done},removeDone:function(e){confirm("确定要删除这件记事么？")&&this.todos.splice(this.todos.indexOf(e),1)},removeAllDone:function(e){this.todos=this.activeTodos},removeAllTodo:function(e){0!==this.todos.length&&confirm("确定要删除所有已完成记事么？")&&(this.todos=[])},showDoneList:function(){console.log(this.isShowDone),this.isShowDone=!this.isShowDone}}},p={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"todo"},[n("section",{staticClass:"add-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"add-todo",attrs:{autofocus:"",type:"text",placeholder:"准备做什么？"},domProps:{value:e.newTodo},on:{keyup:function(o){if(!("button"in o)&&e._k(o.keyCode,"enter",13,o.key))return null;e.addTodo(o)},input:function(o){o.target.composing||(e.newTodo=o.target.value)}}})]),e._v(" "),n("section",{staticClass:"main"},[n("div",{staticClass:"active-todos"},[0!=e.activeTodos.length?n("div",[n("h3",[e._v("待办事项")]),e._v(" "),n("ul",{},e._l(e.activeTodos,function(o){return n("li",{key:o.id,on:{click:function(n){e.toggleTodo(o)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:o.done,expression:"todo.done"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(o.done)?e._i(o.done,null)>-1:o.done},on:{change:function(n){var t=o.done,s=n.target,i=!!s.checked;if(Array.isArray(t)){var c=e._i(t,null);s.checked?c<0&&(o.done=t.concat([null])):c>-1&&(o.done=t.slice(0,c).concat(t.slice(c+1)))}else e.$set(o,"done",i)}}}),e._v(e._s(o.content)+"\n          ")])}))]):e._e(),e._v(" "),0===e.activeTodos.length?n("p",{staticClass:"list-empty"},[e._v("✔️ 恭喜你，所有的任务都完成了")]):e._e()]),e._v(" "),0!=e.doneTodos?n("div",{staticClass:"completed-todos"},[n("h3",[e._v("已完成")]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isShowDone,expression:"isShowDone"}]},e._l(e.doneTodos,function(o){return n("li",{key:o.id,on:{click:function(n){e.toggleTodo(o)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:o.done,expression:"todo.done"}],attrs:{type:"checkbox",checked:"",name:"",id:""},domProps:{checked:Array.isArray(o.done)?e._i(o.done,null)>-1:o.done},on:{change:function(n){var t=o.done,s=n.target,i=!!s.checked;if(Array.isArray(t)){var c=e._i(t,null);s.checked?c<0&&(o.done=t.concat([null])):c>-1&&(o.done=t.slice(0,c).concat(t.slice(c+1)))}else e.$set(o,"done",i)}}}),e._v(e._s(o.content)+"\n          "),n("span",{staticClass:"remove-todo",attrs:{title:"删除该条记录"},on:{click:function(n){e.removeDone(o)}}},[e._v("✖️")])])})),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.isShowDone,expression:"!isShowDone"}],staticStyle:{"text-align":"center",cursor:"pointer","font-size":".9em"},on:{click:e.showDoneList}},[e._v("点击查看已完成记事")])]):e._e()]),e._v(" "),n("section",{staticClass:"footer"},[n("div",{staticClass:"action"},[n("span",{on:{click:e.removeAllDone}},[e._v("✖️ 删除所有已完成记事")]),e._v(" "),n("span",{on:{click:e.removeAllTodo}},[e._v("✖️ 删除所有记事")]),e._v(" "),e.isShowDone?n("span",{on:{click:e.showDoneList}},[e._v("⚪️ 折叠已完成记事")]):n("span",{on:{click:e.showDoneList}},[e._v("⚪️ 显示已完成记事")])]),e._v(" "),n("div",{staticStyle:{"text-align":"center","font-size":".9em"}},[e._v("\n      输入框回车即可完成添加\n    ")])])])},staticRenderFns:[]};var f=n("VU/8")(h,p,!1,function(e){n("YsC6")},"data-v-104fcbf2",null).exports;t.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"ToDo",component:f}]});t.a.config.productionTip=!1,new t.a({el:"#app",router:m,components:{App:i},template:"<App/>"})},YsC6:function(e,o){}},["NHnr"]);
//# sourceMappingURL=app.bb5bf250285e4304ff2e.js.map