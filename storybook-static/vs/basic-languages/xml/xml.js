/*! For license information please see xml.js.LICENSE.txt */
define("vs/basic-languages/xml/xml",["require","require"],(require=>(()=>{var e,u=Object.create,i=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,k=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,l=e=>i(e,"__esModule",{value:!0}),f=(e=function(e){if(void 0!==require)return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')},void 0!==require?require:"undefined"!=typeof Proxy?new Proxy(e,{get:(t,n)=>(void 0!==require?require:t)[n]}):e),m=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of p(t))!x.call(e,o)&&(n||"default"!==o)&&i(e,o,{get:()=>t[o],enumerable:!(r=g(t,o))||r.enumerable});return e},c=(e,t)=>m(l(i(null!=e?u(k(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),q=(e=>(t,n)=>e&&e.get(t)||(n=m(l({}),t,1),e&&e.set(t,n),n))("undefined"!=typeof WeakMap?new WeakMap:0),s=((e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports))(((v,d)=>{var N=c(f("vs/editor/editor.api"));d.exports=N})),I={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(I,{conf:()=>A,language:()=>C});var a={};m(a,c(s()));var A={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:a.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:a.languages.IndentAction.Indent}}]},C={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};return q(I)})()));