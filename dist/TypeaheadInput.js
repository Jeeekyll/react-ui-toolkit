"use strict";var e=require("./_tslib-774feabd.js"),o=require("react"),n=require("classnames"),r=require("./Input.js"),t=require("./useDebounce-80ae39fa.js"),u=o.forwardRef((function(u,i){var a=u.testid,s=u.placeholder,l=u.name,c=u.type,d=void 0===c?"text":c,f=u.customClassName,m=u.onFocus,p=u.onBlur,v=u.id,h=u.role,y=u.onKeyDown,g=u.onQueryChange,D=u.isDisabled,b=void 0!==D&&D,q=u.leftIcon,C=u.rightIcon,I=u.initialValue,j=void 0===I?"":I,w=u.value,_=u.queryChangeDebounceTimeout,x=void 0===_?250:_,B=e.__read(t.useDebounce(g,j,x),2),E=B[0],F=B[1];return o.useEffect((function(){"string"==typeof w&&F(w)}),[w,F]),o.createElement(r,{ref:i,customClassName:n("typeahead-input",f),id:v,testid:a,name:l,type:d,placeholder:s,onChange:function(e){F(e.currentTarget.value)},onFocus:m,onBlur:p,onKeyDown:y,value:E,isDisabled:b,leftIcon:q,rightIcon:C,role:h})}));module.exports=u;
