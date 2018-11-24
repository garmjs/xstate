(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{160:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",function(){return p});var t=n(167),s=n.n(t),c=n(0),l=n.n(c),o=n(168),m=n(169);a.default=function(e){var a=e.components,n=s()(e,["components"]);return l.a.createElement(o.MDXTag,{name:"wrapper",Layout:m.a,layoutProps:n,components:a},l.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"parallel-state-nodes"}},l.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#parallel-state-nodes","aria-hidden":!0,class:"anchor"}}),"Parallel State Nodes"),l.a.createElement(o.MDXTag,{name:"p",components:a},"A parallel state node represents multiple ",l.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"orthogonal")," child state nodes; that is, a parallel state is in ",l.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"all")," of its child states at the same time. The key word here is ",l.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"p"},"parallel")," (or orthogonal) - the states are not directly dependent on each other, and no transitions should exist between parallel state nodes."),l.a.createElement(o.MDXTag,{name:"p",components:a},"A parallel state node is specified on the machine and/or any nested compound state by setting ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type: 'parallel'"),"."),l.a.createElement(o.MDXTag,{name:"p",components:a},"For example, the machine below allows the ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"upload")," and ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"download")," compound states to be simultaneously active. Imagine that this represents an application where you can download and upload files at the same time:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token keyword"},"const")," fileMachine ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token function"},"Machine"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'file'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ","type",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'parallel'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","upload",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'idle'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","idle",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",l.a.createElement("span",{className:"token constant"},"INIT_UPLOAD"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'pending'"),"\n","          ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","        ","pending",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",l.a.createElement("span",{className:"token constant"},"UPLOAD_COMPLETE"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'success'"),"\n","          ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","        ","success",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","    ","download",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'idle'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","idle",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",l.a.createElement("span",{className:"token constant"},"INIT_DOWNLOAD"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'pending'"),"\n","          ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","        ","pending",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",l.a.createElement("span",{className:"token constant"},"DOWNLOAD_COMPLETE"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'success'"),"\n","          ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","        ","success",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),l.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";"),"\n","\n","console",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"log"),l.a.createElement("span",{className:"token punctuation"},"("),"fileMachine",l.a.createElement("span",{className:"token punctuation"},"."),"initialState",l.a.createElement("span",{className:"token punctuation"},"."),"value",l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";"),"\n",l.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",l.a.createElement("span",{className:"token comment"},"//","   ","upload: 'idle',"),"\n",l.a.createElement("span",{className:"token comment"},"//","   ","download: 'idle'"),"\n",l.a.createElement("span",{className:"token comment"},"// ","}")))),l.a.createElement(o.MDXTag,{name:"p",components:a},"A parallel state node's state value is represented as an object, since objects naturally represent orthogonality via separate keys and values. This object state value can be used to further transition to different states in a parallel state node:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},"console",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"log"),l.a.createElement("span",{className:"token punctuation"},"("),"\n","  ","fileMachine",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"transition"),l.a.createElement("span",{className:"token punctuation"},"("),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","upload",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'pending'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","      ","download",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'idle'"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","    ",l.a.createElement("span",{className:"token string"},"'UPLOAD_COMPLETE'"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},"."),"value","\n",l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";"),"\n",l.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",l.a.createElement("span",{className:"token comment"},"//","   ","upload: 'success',"),"\n",l.a.createElement("span",{className:"token comment"},"//","   ","download: 'idle'"),"\n",l.a.createElement("span",{className:"token comment"},"// ","}")))),l.a.createElement(o.MDXTag,{name:"p",components:a},"A compound state node can contain parallel state nodes. The configuration is the same for nested state nodes:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token keyword"},"const")," lightMachine ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token function"},"Machine"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token comment"},"// not a parallel machine"),"\n","  ","id",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'light'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'green'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","green",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token constant"},"TIMER"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'yellow'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","    ","yellow",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token constant"},"TIMER"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'red'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","\n","    ",l.a.createElement("span",{className:"token comment"},"// nested parallel machine"),"\n","    ","red",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","type",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'parallel'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","walkSign",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","initial",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'solid'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","          ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ","solid",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token constant"},"COUNTDOWN"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'flashing'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","            ","flashing",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token constant"},"STOP_COUNTDOWN"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'solid'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","          ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","        ","pedestrian",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","initial",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'walk'"),l.a.createElement("span",{className:"token punctuation"},","),"\n","          ","states",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ","walk",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token constant"},"COUNTDOWN"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'wait'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","            ","wait",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token constant"},"STOP_COUNTDOWN"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'stop'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","            ","stop",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","type",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'final'"),"\n","            ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","          ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";"),"\n","\n","console",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"log"),l.a.createElement("span",{className:"token punctuation"},"("),"lightMachine",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"transition"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'yellow'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'TIMER'"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},"."),"value",l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";"),"\n",l.a.createElement("span",{className:"token comment"},"// ","{"),"\n",l.a.createElement("span",{className:"token comment"},"//","   ","red: ","{"),"\n",l.a.createElement("span",{className:"token comment"},"//","     ","walkSign: 'solid',"),"\n",l.a.createElement("span",{className:"token comment"},"//","     ","pedestrian: 'walk'"),"\n",l.a.createElement("span",{className:"token comment"},"//","   ","}"),"\n",l.a.createElement("span",{className:"token comment"},"// ","}")))))};var p={}}}]);
//# sourceMappingURL=component---src-pages-guides-parallel-mdx-02d40a19737a0e8cc682.js.map