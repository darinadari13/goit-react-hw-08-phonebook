"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[561],{1328:function(e,n,r){r.d(n,{Z:function(){return i}});var a=r(2791),t="SignForm_formSpan__g8TJv",s=r(184);function i(e){var n=e.onSubmit,r=e.isLoginForm,i=void 0!==r&&r,u=(0,a.useRef)(),l=(0,a.useRef)(),o=(0,a.useRef)();return(0,s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i){var r={email:l.current.value,password:o.current.value};n(r)}else{var a={name:u.current.value,email:l.current.value,password:o.current.value};n(a)}e.target.reset()},children:[(0,s.jsx)("h2",{children:i?"Sign In":"Sign up"}),i?null:(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:t,children:"Name"}),(0,s.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name",ref:u,required:!0})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:t,children:"E-mail"}),(0,s.jsx)("input",{type:"email",name:"email",placeholder:"Enter your e-mail",ref:l,required:!0})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:t,children:"Password"}),(0,s.jsx)("input",{type:"password",name:"password",minLength:7,placeholder:"Enter your password",ref:o,required:!0})]}),(0,s.jsx)("button",{type:"submit",children:i?"Sign In":"Sign up"})]})}},561:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});r(2791);var a=r(7689),t=r(1328),s=r(9434),i=r(7578),u=r(9562),l=r(4025),o=r(184);function c(){var e=(0,s.I0)(),n=(0,s.v9)(u.xU),r=(0,a.s0)();return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.Z,{onSubmit:function(n){e((0,i.Qb)(n)).then((function(e){var n=e.payload;localStorage.setItem("token",n.token),r("/contacts")}))},isLoginForm:!0}),n&&(0,o.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=561.0e975411.chunk.js.map