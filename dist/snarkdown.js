!function(n,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():n.snarkdown=e()}(void 0,function(){function n(n,e){var t=e.replace(/\*/g,"_").replace(/^(  \n\n*|\n{2,})/g,"\n\n"),r=n[n.length-1]===e,c=o[t];return c?c[1]===!1?c[0]:(n[r?"pop":"push"](e),c[r?1:0]):e}function e(n,e){return e=(e||"")+(n.match(/^(\t|  )+/m)||["[\\t ]*"])[0],n.replace(new RegExp("^"+e,"gm"),"")}function t(n){return n.replace(/(^\n+|\n+$)/g,"")}function r(l){var s,a,p,u,g,i,d=/(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\[([^\]]+?)\]\(([^\)]+?)\)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]))/gm,f=[],m="",h=0;for(l=t(l),d.lastIndex=0;p=d.exec(l);)a=l.substring(h,p.index),h=d.lastIndex,s=p[0],c.lastIndex=0,c.test(a)||(p[2]?s='\n<pre class="code '+String(p[1]).toLowerCase()+'">'+p[2]+"</pre>\n":p[3]?s='\n<pre class="code poetry">'+t(e(p[3]))+"</pre>\n":p[5]?(g=p[5],"."===g.charAt(g.length-1)&&(g=".",p[4]=p[4].replace(/^\d+/gm,"")),u=r(e(p[4],"[>*+-.]")),">"!==g&&(g="."===g?"#":"*",u=u.replace(/^(.*)$/gm,"\t<li>$1</li>")),s="\n"+o[g][0]+"\n"+u+"\n"+o[g][1]+"\n"):p[6]?s=p[6].link(p[7].replace(/^javascript\:/g,"")):p[8]||p[10]?(g="h"+(p[10]?p[10].length:"="===p[9][0]?1:2),s="\n\n<"+g+">"+r(p[8]||p[11])+"</"+g+">\n"):p[12]?s="<code>"+p[12]+"</code>":p[13]&&(s=n(f,p[13]))),m+=a,m+=s;for(m+=l.substring(h),i=f.length;i--;)m+=n(f,f[i]);return t(m)}var o={_:["<em>","</em>"],__:["<strong>","</strong>"],"\n\n":["<br />\n\n",!1],">":["<blockquote>","</blockquote>"],"*":["<ul>","</ul>"],"#":["<ol>","</ol>"]},c=/[^\\](\\\\)*\\$/g;return r.parse=r,r});
//# sourceMappingURL=snarkdown.js.map