(this["webpackJsonppanier-achats"]=this["webpackJsonppanier-achats"]||[]).push([[0],{36:function(e){e.exports=JSON.parse('[{"nom":"Chandail homme 1","prix":19.5,"id":"prd0001"},{"nom":"Chandail homme 2 - produit avec un nom plus long que les autres","prix":12.89,"id":"prd0002"},{"nom":"Chandail homme 3","prix":22.8,"id":"prd0003"},{"nom":"Pantalon femme 1","prix":32.56,"id":"prd0004"},{"nom":"Pantalon femme 2 - produit avec un nom plus long que les autres","prix":42.89,"id":"prd0005"},{"nom":"Chandail femme 1","prix":19.89,"id":"prd0006"}]')},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(18),i=n.n(a),r=n(13),o=(n(42),n(43),n(14)),j=(n(44),n(34)),l=n.n(j),d=n(73),u=(n(45),n(1));function b(e){var t=e.panier,n=e.affichable,c=function(e){var t=Object.values(e),n={nbArticles:0,totalItem:0,st:0,tps:0,tvq:0,total:0};n.nbArticles=t.length,n.totalItem=t.reduce((function(e,t){return e+t.qte}),0);var c=t.reduce((function(e,t){return e+t.prix*t.qte}),0);n.st=c.toFixed(2);var s=.05*c;n.tps=s.toFixed(2);var a=.09975*c;return n.tvq=a.toFixed(2),n.total=(c+s+a).toFixed(2),n}(t);return Object(u.jsxs)("div",{className:"SommairePanier"+(n?"":" cacher"),children:[Object(u.jsxs)("span",{children:["Articles diff\xe9rents : ",c.nbArticles," "]}),Object(u.jsxs)("span",{children:["Total # items : ",c.totalItem," "]}),Object(u.jsxs)("span",{children:["Sous-total : ",c.st," "]}),Object(u.jsxs)("span",{children:["TPS : ",c.tps," "]}),Object(u.jsxs)("span",{children:["TVQ : ",c.tvq," "]}),Object(u.jsxs)("span",{children:["Total : ",c.total," "]})]})}function x(e){var t=e.etatPanier,n=Object(o.a)(t,1)[0],s=Object.values(n),a=Object(c.useState)(!1),i=Object(o.a)(a,2),j=i[0],x=i[1];return Object(u.jsxs)("header",{className:"Entete",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(r.b,{to:"/",activeClassName:"navActive",exact:!0,children:"MagasinLogo"})}),Object(u.jsxs)("ul",{className:"navPrincipale",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/nos-produits",activeClassName:"navActive",children:"Produits"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/a-propos-de-nous",activeClassName:"navActive",children:"\xc0 propos de nous"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/contactez-nous",activeClassName:"navActive",children:"Contactez-nous"})})]}),Object(u.jsxs)("ul",{className:"navUtilisateur",children:[Object(u.jsxs)("li",{children:["Panier d'achats",Object(u.jsx)(d.a,{onClick:function(){x(!j)},badgeContent:s.reduce((function(e,t){return e+t.qte}),0),color:"primary",children:Object(u.jsx)(l.a,{})}),Object(u.jsx)(b,{panier:n,affichable:j})]}),Object(u.jsx)("li",{children:"Mon compte"})]})]})}n(53),n(54);function O(e){var t=e.onClick,n=e.qte,c=e.texte,s=e.classeCss;return Object(u.jsx)(d.a,{badgeContent:n,color:"primary",children:Object(u.jsx)("button",{onClick:t,className:"BtnAjoutPanier ".concat(s),children:c})})}n(55);var h=n(35),p=n.n(h);function m(e){var t=e.nom,n=e.prix,c=e.id,s=e.etatPanier,a=Object(o.a)(s,2),i=a[0],r=a[1];var j=0,l="Ajouter au panier",d="";return i[c]&&(j=i[c].qte,l=Object(u.jsx)(p.a,{}),d="rouge"),Object(u.jsxs)("li",{className:"Produit",children:[Object(u.jsx)("img",{src:"images-produits/"+c+".webp",alt:""}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("p",{className:"nom",children:t}),Object(u.jsx)("p",{className:"prix",children:n})]}),Object(u.jsx)(O,{onClick:function(){i[c]?i[c].qte++:i[c]={nom:t,prix:n,qte:1},r(JSON.parse(JSON.stringify(i)))},qte:j,texte:l,classeCss:d})]})}var v=n(36);function f(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"ListeProduits",children:[Object(u.jsx)("h2",{children:"Produits disponobles"}),Object(u.jsx)("ul",{children:v.map((function(t){return Object(u.jsx)(m,{etatPanier:e.etatPanier,nom:t.nom,prix:t.prix,id:t.id},t.id)}))})]})})}n(56);function N(e){var t=(new Date).getFullYear();return Object(u.jsxs)("footer",{className:"PiedDePage",children:["\xa9",t," - TIM - Tous droits r\xe9serv\xe9s."]})}var g=n(3);function P(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Accueil",children:[Object(u.jsx)("h2",{children:"Magasin"}),Object(u.jsx)("p",{children:"Page d'accueil en construction"})]})})}function C(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Apropos",children:[Object(u.jsx)("h2",{children:"\xc0 Propos"}),Object(u.jsx)("p",{children:"Patati patata"})]})})}function q(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Contact",children:[Object(u.jsx)("h2",{children:"Contact"}),Object(u.jsx)("p",{children:"Numero"})]})})}var A=function(){var e=function(e,t){var n=Object(c.useState)((function(){return JSON.parse(window.localStorage.getItem(t))||e})),s=Object(o.a)(n,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(a))}),[a]),[a,i]}({},"panier");return Object(u.jsxs)("div",{className:"Appli",children:[Object(u.jsx)(x,{etatPanier:e}),Object(u.jsx)("section",{className:"contenuPrincipal",children:Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/",exact:!0,children:Object(u.jsx)(P,{})}),Object(u.jsx)(g.a,{path:"/nos-produits",children:Object(u.jsx)(f,{etatPanier:e})}),Object(u.jsx)(g.a,{path:"/a-propos-de-nous",children:Object(u.jsx)(C,{})}),Object(u.jsx)(g.a,{path:"/contactez-nous",children:Object(u.jsx)(q,{})})]})}),Object(u.jsx)(N,{})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(A,{})})}),document.getElementById("racine"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ca29c670.chunk.js.map