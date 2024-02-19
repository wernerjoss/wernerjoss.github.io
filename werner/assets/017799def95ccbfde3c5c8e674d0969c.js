// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});
;
((function(){
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var findAncestor = function(el, selector) {
        while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, selector))) {}
        return el;
    };

    var fields = document.querySelectorAll('input[name="searchfield"][data-search-input]');
    Array.prototype.forEach.call(fields, function(field) {
        var form = findAncestor(field, 'form[data-simplesearch-form]'),
            min = field.getAttribute('data-min') || false,
            location = field.getAttribute('data-search-input'),
            separator = field.getAttribute('data-search-separator');

        if (min) {
            var invalid = field.getAttribute('data-search-invalid');
            field.addEventListener('keydown', function() {
                field.setCustomValidity(field.value.length >= min ? '' : invalid);
            });
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (field.checkValidity()) {
                window.location.href = location + separator + field.value;
            }
        });
    });
})());
;
/*!
* metismenu https://github.com/onokumus/metismenu#readme
* A jQuery menu plugin
* @version 3.0.6
* @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* @license: MIT 
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):(e=e||self).metisMenu=n(e.jQuery)}(this,function(o){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;var i,n,r,s=(n="transitionend",r={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(e){i(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)}},(i=o).fn.mmEmulateTransitionEnd=e,i.event.special[r.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(i(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},r);function e(e){var n=this,t=!1;return i(this).one(r.TRANSITION_END,function(){t=!0}),setTimeout(function(){t||r.triggerTransitionEnd(n)},e),this}var t="metisMenu",g="metisMenu",l="."+g,h=o.fn[t],f={toggle:!0,preventDefault:!0,triggerElement:"a",parentTrigger:"li",subMenu:"ul"},d={SHOW:"show"+l,SHOWN:"shown"+l,HIDE:"hide"+l,HIDDEN:"hidden"+l,CLICK_DATA_API:"click"+l+".data-api"},u="metismenu",c="mm-active",p="mm-show",m="mm-collapse",T="mm-collapsing",v=function(){function r(e,n){this.element=e,this.config=a({},f,{},n),this.transitioning=null,this.init()}var e=r.prototype;return e.init=function(){var a=this,s=this.config,e=o(this.element);e.addClass(u),e.find(s.parentTrigger+"."+c).children(s.triggerElement).attr("aria-expanded","true"),e.find(s.parentTrigger+"."+c).parents(s.parentTrigger).addClass(c),e.find(s.parentTrigger+"."+c).parents(s.parentTrigger).children(s.triggerElement).attr("aria-expanded","true"),e.find(s.parentTrigger+"."+c).has(s.subMenu).children(s.subMenu).addClass(m+" "+p),e.find(s.parentTrigger).not("."+c).has(s.subMenu).children(s.subMenu).addClass(m),e.find(s.parentTrigger).children(s.triggerElement).on(d.CLICK_DATA_API,function(e){var n=o(this);if("true"!==n.attr("aria-disabled")){s.preventDefault&&"#"===n.attr("href")&&e.preventDefault();var t=n.parent(s.parentTrigger),i=t.siblings(s.parentTrigger),r=i.children(s.triggerElement);t.hasClass(c)?(n.attr("aria-expanded","false"),a.removeActive(t)):(n.attr("aria-expanded","true"),a.setActive(t),s.toggle&&(a.removeActive(i),r.attr("aria-expanded","false"))),s.onTransitionStart&&s.onTransitionStart(e)}})},e.setActive=function(e){o(e).addClass(c);var n=o(e).children(this.config.subMenu);0<n.length&&!n.hasClass(p)&&this.show(n)},e.removeActive=function(e){o(e).removeClass(c);var n=o(e).children(this.config.subMenu+"."+p);0<n.length&&this.hide(n)},e.show=function(e){var n=this;if(!this.transitioning&&!o(e).hasClass(T)){var t=o(e),i=o.Event(d.SHOW);if(t.trigger(i),!i.isDefaultPrevented()){if(t.parent(this.config.parentTrigger).addClass(c),this.config.toggle){var r=t.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+p);this.hide(r)}t.removeClass(m).addClass(T).height(0),this.setTransitioning(!0);t.height(e[0].scrollHeight).one(s.TRANSITION_END,function(){n.config&&n.element&&(t.removeClass(T).addClass(m+" "+p).height(""),n.setTransitioning(!1),t.trigger(d.SHOWN))}).mmEmulateTransitionEnd(350)}}},e.hide=function(e){var n=this;if(!this.transitioning&&o(e).hasClass(p)){var t=o(e),i=o.Event(d.HIDE);if(t.trigger(i),!i.isDefaultPrevented()){t.parent(this.config.parentTrigger).removeClass(c),t.height(t.height())[0].offsetHeight,t.addClass(T).removeClass(m).removeClass(p),this.setTransitioning(!0);var r=function(){n.config&&n.element&&(n.transitioning&&n.config.onTransitionEnd&&n.config.onTransitionEnd(),n.setTransitioning(!1),t.trigger(d.HIDDEN),t.removeClass(T).addClass(m))};0===t.height()||"none"===t.css("display")?r():t.height(0).one(s.TRANSITION_END,r).mmEmulateTransitionEnd(350)}}},e.setTransitioning=function(e){this.transitioning=e},e.dispose=function(){o.removeData(this.element,g),o(this.element).find(this.config.parentTrigger).children(this.config.triggerElement).off(d.CLICK_DATA_API),this.transitioning=null,this.config=null,this.element=null},r.jQueryInterface=function(i){return this.each(function(){var e=o(this),n=e.data(g),t=a({},f,{},e.data(),{},"object"==typeof i&&i?i:{});if(n||(n=new r(this,t),e.data(g,n)),"string"==typeof i){if(void 0===n[i])throw new Error('No method named "'+i+'"');n[i]()}})},r}();return o.fn[t]=v.jQueryInterface,o.fn[t].Constructor=v,o.fn[t].noConflict=function(){return o.fn[t]=h,v.jQueryInterface},v});
/*!
* slideout.js
* https://github.com/mango/slideout
* MIT License
*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Slideout=t()}}(function(){var t,e,n;return function i(t,e,n){function o(r,a){if(!e[r]){if(!t[r]){var u=typeof require=="function"&&require;if(!a&&u)return u(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var h=e[r]={exports:{}};t[r][0].call(h.exports,function(e){var n=t[r][1][e];return o(n?n:e)},h,h.exports,i,t,e,n)}return e[r].exports}var s=typeof require=="function"&&require;for(var r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,n){"use strict";var i=t("decouple");var o=t("emitter");var s;var r=false;var a=window.document;var u=a.documentElement;var l=window.navigator.msPointerEnabled;var h={start:l?"MSPointerDown":"touchstart",move:l?"MSPointerMove":"touchmove",end:l?"MSPointerUp":"touchend"};var f=function v(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;var e=a.getElementsByTagName("script")[0].style;for(var n in e){if(t.test(n)){return"-"+n.match(t)[0].toLowerCase()+"-"}}if("WebkitOpacity"in e){return"-webkit-"}if("KhtmlOpacity"in e){return"-khtml-"}return""}();function c(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function p(t,e){t.prototype=c(t.prototype||{},e.prototype)}function d(t){while(t.parentNode){if(t.getAttribute("data-slideout-ignore")!==null){return t}t=t.parentNode}return null}function _(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this.panel=t.panel;this.menu=t.menu;this._touch=t.touch===undefined?true:t.touch&&true;this._side=t.side||"left";this._easing=t.fx||t.easing||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=this._side==="right"?-1:1;this._translateTo*=this._orientation;if(!this.panel.classList.contains("slideout-panel")){this.panel.classList.add("slideout-panel")}if(!this.panel.classList.contains("slideout-panel-"+this._side)){this.panel.classList.add("slideout-panel-"+this._side)}if(!this.menu.classList.contains("slideout-menu")){this.menu.classList.add("slideout-menu")}if(!this.menu.classList.contains("slideout-menu-"+this._side)){this.menu.classList.add("slideout-menu-"+this._side)}if(this._touch){this._initTouchEvents()}}p(_,o);_.prototype.open=function(){var t=this;this.emit("beforeopen");if(!u.classList.contains("slideout-open")){u.classList.add("slideout-open")}this._setTransition();this._translateXTo(this._translateTo);this._opened=true;setTimeout(function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="";t.emit("open")},this._duration+50);return this};_.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._setTransition();this._translateXTo(0);this._opened=false;setTimeout(function(){u.classList.remove("slideout-open");t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[f+"transform"]=t.panel.style.transform="";t.emit("close")},this._duration+50);return this};_.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};_.prototype.isOpen=function(){return this._opened};_.prototype._translateXTo=function(t){this._currentOffsetX=t;this.panel.style[f+"transform"]=this.panel.style.transform="translateX("+t+"px)";return this};_.prototype._setTransition=function(){this.panel.style[f+"transition"]=this.panel.style.transition=f+"transform "+this._duration+"ms "+this._easing;return this};_.prototype._initTouchEvents=function(){var t=this;this._onScrollFn=i(a,"scroll",function(){if(!t._moved){clearTimeout(s);r=true;s=setTimeout(function(){r=false},250)}});this._preventMove=function(e){if(t._moved){e.preventDefault()}};a.addEventListener(h.move,this._preventMove);this._resetTouchFn=function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;t._preventOpen=!t._touch||!t.isOpen()&&t.menu.clientWidth!==0};this.panel.addEventListener(h.start,this._resetTouchFn);this._onTouchCancelFn=function(){t._moved=false;t._opening=false};this.panel.addEventListener("touchcancel",this._onTouchCancelFn);this._onTouchEndFn=function(){if(t._moved){t.emit("translateend");t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false};this.panel.addEventListener(h.end,this._onTouchEndFn);this._onTouchMoveFn=function(e){if(r||t._preventOpen||typeof e.touches==="undefined"||d(e.target)){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var o=n*t._orientation;if(t._opened&&o>0||!t._opened&&o<0){return}if(!t._moved){t.emit("translatestart")}if(o<=0){i=n+t._padding*t._orientation;t._opening=false}if(!(t._moved&&u.classList.contains("slideout-open"))){u.classList.add("slideout-open")}t.panel.style[f+"transform"]=t.panel.style.transform="translateX("+i+"px)";t.emit("translate",i);t._moved=true}};this.panel.addEventListener(h.move,this._onTouchMoveFn);return this};_.prototype.enableTouch=function(){this._touch=true;return this};_.prototype.disableTouch=function(){this._touch=false;return this};_.prototype.destroy=function(){this.close();a.removeEventListener(h.move,this._preventMove);this.panel.removeEventListener(h.start,this._resetTouchFn);this.panel.removeEventListener("touchcancel",this._onTouchCancelFn);this.panel.removeEventListener(h.end,this._onTouchEndFn);this.panel.removeEventListener(h.move,this._onTouchMoveFn);a.removeEventListener("scroll",this._onScrollFn);this.open=this.close=function(){};return this};e.exports=_},{decouple:2,emitter:3}],2:[function(t,e,n){"use strict";var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t,e,n){var o,s=false;function r(t){o=t;a()}function a(){if(!s){i(u);s=true}}function u(){n.call(t,o);s=false}t.addEventListener(e,r,false);return r}e.exports=o},{}],3:[function(t,e,n){"use strict";var i=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};n.__esModule=true;var o=function(){function t(){i(this,t)}t.prototype.on=function e(t,n){this._eventCollection=this._eventCollection||{};this._eventCollection[t]=this._eventCollection[t]||[];this._eventCollection[t].push(n);return this};t.prototype.once=function n(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};t.prototype.off=function o(t,e){var n=undefined;if(!this._eventCollection||!(n=this._eventCollection[t])){return this}n.forEach(function(t,i){if(t===e||t.listener===e){n.splice(i,1)}});if(n.length===0){delete this._eventCollection[t]}return this};t.prototype.emit=function s(t){var e=this;for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++){i[o-1]=arguments[o]}var s=undefined;if(!this._eventCollection||!(s=this._eventCollection[t])){return this}s=s.slice(0);s.forEach(function(t){return t.apply(e,i)});return this};return t}();n["default"]=o;e.exports=n["default"]},{}]},{},[1])(1)});
//initialize metismenu
$("#metismenu").metisMenu();

//initialize slideout
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 320,
    'tolerance': 70
});

//for closing menu on page click
function close(eve) {
    eve.preventDefault();
    slideout.close();
}

//make the hamburger animation correct when using touch events and add classes based on context
slideout
    .on('beforeopen', function() { 
        this.panel.classList.add('panel-open');
        $(".hamburger").toggleClass("is-active");
        $(".header-hamburger").toggleClass("fixed-open");
    })
    .on('open', function() {
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
        $(".hamburger").removeClass("is-active");
        $(".header-hamburger").removeClass("fixed-open");
    });

// Toggle button
$('.toggle-button').on('click', function() {
    slideout.toggle();
});

//Uncomment to have the menu opend on page load. For developing...
// $( document ).ready(function() {  
//    slideout.toggle();
// }); 
;
