! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {

        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/", r(r.s = 2)
}({
    2: function(t, e, r) {
        t.exports = r("Y/jY")
    },
    "Y/jY": function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("o0o1"),
            o = r.n(n);

        function i(t, e, r, n, o, i, c) {
            try {
                var u = t[i](c),
                    a = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(a) : Promise.resolve(a).then(n, o)
        }

        function c(t) {
            return function() {
                var e = this,
                    r = arguments;
                return new Promise((function(n, o) {
                    var c = t.apply(e, r);

                    function u(t) {
                        i(c, n, o, u, a, "next", t)
                    }

                    function a(t) {
                        i(c, n, o, u, a, "throw", t)
                    }
                    u(void 0)
                }))
            }
        }! function() {
            var t = sellify.ucd.jquery(),
                e = 0;

            function r(t) {
                return n.apply(this, arguments)
            }

            function n() {
                return (n = c(o.a.mark((function r(n) {
                    var c, u = arguments;
                    return o.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if ((c = u.length > 1 && void 0 !== u[1] && u[1]) || !sellify.ucd.discount || !sellify.ucd.discount.code || JSON.stringify(sellify.ucd.original_cart) !== JSON.stringify(sellify.ucd.previous_original_cart) && (sellify.ucd.previous_original_cart || sellify.ucd.original_cart.total_price !== sellify.ucd.discount.subtotal + sellify.ucd.discount.amount)) {
                                    r.next = 4;
                                    break
                                }
                                return t(".sellify-ucd-apply-discount-code").removeClass("is-loading"), r.abrupt("return");
                            case 4:
                                if (c || !((new Date).getTime() - e <= 3e3)) {
                                    r.next = 7;
                                    break
                                }
                                return sellify.ucd.log("Trying to apply discount code too fast. Returning without applying..."), r.abrupt("return");
                            case 7:
                                return e = (new Date).getTime(), sellify.ucd.discount = {}, t(".sellify-ucd-apply-discount-code").addClass("is-loading"), r.next = 12, fetch("/checkout?discount=".concat(n, "&t=").concat((new Date).getTime()), {
                                    headers: {
                                        "Content-Type": "text/html"
                                    }
                                }).then((function(t) {
                                    return t.text()
                                })).then((function(t) {
                                    i(t)
                                })).catch((function(e) {
                                    sellify.ucd.discount.error = e, t(".ucd-discount-error").html(sellify.ucd.discount.error), sellify.ucd.helpers.cookie.write("_discount_code", "")
                                })).finally((function() {
                                    t(".sellify-ucd-apply-discount-code").removeClass("is-loading")
                                }));
                            case 12:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))).apply(this, arguments)
            }

            function i(e) {
                e = t(e), sellify.ucd.discount.error = e.find("#error-for-reduction_code").text() || e.find(".order-summary__section--discount .notice__content .notice__text").html() || e.find(".page-error__title").text() || e.find(".content--desc:nth(1)").text(), sellify.ucd.discount.error = "string" == typeof sellify.ucd.discount.error ? sellify.ucd.discount.error.trim() : sellify.ucd.discount.error;
                var r = e.find('[data-reduction-form="true"] .reduction-code__text').text(),
                    n = parseInt(e.find(".total-line__price [data-checkout-discount-amount-target]").data("checkout-discount-amount-target"), 10);
                if (n = n > 0 ? n : 0, !sellify.ucd.discount.error && r) {
                    sellify.ucd.discount.code = r, sellify.ucd.discount.subtotal = parseInt(e.find(".total-line__price [data-checkout-subtotal-price-target]").data("checkout-subtotal-price-target"), 10), sellify.ucd.discount.total_price = parseInt(e.find(".total-line__price.payment-due [data-checkout-payment-due-target]").data("checkout-payment-due-target"), 10);
                    var o = parseInt(e.find(".total-line__price [data-checkout-total-taxes-target]").data("checkout-total-taxes-target"), 10);
                    o > 0 && (sellify.ucd.discount.taxes = o, sellify.ucd.discount.formatted_taxes = sellify.ucd.helpers.formatMoney(o));
                    var i = parseInt(e.find(".total-line__price [data-checkout-total-shipping-target]").data("checkout-total-shipping-target"), 10);
                    i > 0 && (sellify.ucd.discount.shipping = i, sellify.ucd.discount.formatted_shipping = sellify.ucd.helpers.formatMoney(i)), sellify.ucd.discount.amount = Math.abs(sellify.ucd.original_cart.total_price - sellify.ucd.discount.subtotal - n), sellify.ucd.discount.formatted_amount = sellify.ucd.helpers.formatMoney(sellify.ucd.discount.amount), sellify.ucd.discount.discount_code_amount = n, sellify.ucd.discount.formatted_discount_code_amount = sellify.ucd.helpers.formatMoney(n), sellify.ucd.discount.currency = e.find(".payment-due__currency").text(), sellify.ucd.discount.data = e, sellify.ucd.dispatchEvent("DiscountCodeApplied", {
                        discount: sellify.ucd.discount
                    })
                } else sellify.ucd.discount.error = sellify.ucd.discount.error || sellify.ucd.get_translation("discount_code.fallback_error_message") || "Something went wrong!", sellify.ucd.helpers.cookie.write("_discount_code", "");
                t(".ucd-discount-error").html(sellify.ucd.discount.error)
            }

            function getDiscountCodeToApply() {
                // var currentCode = sellify.ucd.helpers.cookie.read("_discount_code");
	
                var discountCodes = [];
                t.each(sellify.ucd.cart.items, function(i, val) {
                    if ((val.sku.indexOf("KAPOBLB") >= 0) || (val.sku.indexOf("KAPOBLW") >= 0) || (val.sku.indexOf("KAPOGYW") >= 0) || (val.sku.indexOf("KAPOGYY") >= 0) || (val.sku.indexOf("KAPOOLW") >= 0) || (val.sku.indexOf("KAPOOLB") >= 0)) {
                        discountCodes.push("FLAT50")
                    } else if ((val.sku.indexOf("OOOFGRY") >= 0)) {
                      	discountCodes.push("FLAT40")
                    } else if ((val.sku.indexOf("OOOF") >= 0) || (val.sku.indexOf("VRON") >= 0)) {
                        discountCodes.push("FLAT50")
                    }
                  	else {
                  		return "WELCOME10";
                  	}
                })

//                 if(discountCodes.indexOf("FLAT50") >= 0)
//                     return "FLAT50";
//               	else
//                   	return "WELCOME10";

               return "WELCOME10";
            }

            sellify.ucd.apply_discount_code = r, window.addEventListener("Sellify::UCD::BeforeCartBuilt", (function(ev) {
                var saleCookie = sellify.ucd.helpers.cookie.read("_fh_NEWBIE_Flag")
                var e = sellify.ucd.helpers.cookie.read("_discount_code")

                if(saleCookie) {
                    if(e && (e.indexOf('WELCOME10') > -1)) {
                        var discCode = getDiscountCodeToApply();
                        t('.sellify-ucd-drawer [name="discount"]').val(discCode);
                        r(discCode);
                    } else {
                        e && r(e)
                    }
                }
                else {
                    var discCode = getDiscountCodeToApply();
                    t('.sellify-ucd-drawer [name="discount"]').val(discCode);
                    r(discCode);
                    sellify.ucd.helpers.cookie.write("_fh_NEWBIE_Flag", "true")
                }
            })), t(document).on("click", ".sellify-ucd-apply-discount-code", (function() {
                var e = t('.sellify-ucd-drawer [name="discount"]').val();
                e && r(e, !0)
            // Flatheads custom code below
            })), t(document).on("change", "input[name='fhDiscountType']", (function(inp) {
                if(t(inp.target).val() == "sale"){
                    var discCode = getDiscountCodeToApply();
                    t('.sellify-ucd-drawer [name="discount"]').val(discCode)
                    r(discCode)
                }
                else {
                    t('.sellify-ucd-drawer [name="discount"]').val(""), sellify.ucd.helpers.cookie.write("_discount_code", ""), sellify.ucd.discount = {}, sellify.ucd.helpers.ajaxCart.buildCart(sellify.ucd.original_cart, !1)
                }
            })), window.addEventListener("Sellify::UCD::DiscountCodeAutoApply", (function() {
                // var e = t('.sellify-ucd-drawer [name="discount"]').val("KT20").val()
                e && r(e, !0)
            // Flatheads custom code above
            })), t(document).on("click", ".sellify-ucd-remove-discount-code", (function() {
                t('.sellify-ucd-drawer [name="discount"]').val(""), sellify.ucd.helpers.cookie.write("_discount_code", ""), sellify.ucd.discount = {}, sellify.ucd.helpers.ajaxCart.buildCart(sellify.ucd.original_cart, !1)
            })), window.addEventListener("Sellify::UCD::DiscountCodeApplied", (function(t) {
                sellify.ucd.helpers.ajaxCart.buildCart(sellify.ucd.original_cart, !1)
            })), sellify.ucd.filters.cart.push((function(t) {
                return sellify.ucd.discount && (sellify.ucd.discount.subtotal > 0 || 0 === sellify.ucd.discount.subtotal) && (t.discount = sellify.ucd.discount, t.total_price = t.discount.total_price, t.discount_code = t.discount.code, sellify.ucd.helpers.cookie.write("_discount_code", t.discount.code)), t
            }))
        }()
    },
    ls82: function(t, e, r) {
        var n = function(t) {
            "use strict";
            var e = Object.prototype,
                r = e.hasOwnProperty,
                n = "function" == typeof Symbol ? Symbol : {},
                o = n.iterator || "@@iterator",
                i = n.asyncIterator || "@@asyncIterator",
                c = n.toStringTag || "@@toStringTag";

            function u(t, e, r, n) {
                var o = e && e.prototype instanceof s ? e : s,
                    i = Object.create(o.prototype),
                    c = new b(n || []);
                return i._invoke = function(t, e, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw i;
                            return L()
                        }
                        for (r.method = o, r.arg = i;;) {
                            var c = r.delegate;
                            if (c) {
                                var u = _(c, r);
                                if (u) {
                                    if (u === l) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var s = a(t, e, r);
                            if ("normal" === s.type) {
                                if (n = r.done ? "completed" : "suspendedYield", s.arg === l) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg)
                        }
                    }
                }(t, r, c), i
            }

            function a(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = u;
            var l = {};

            function s() {}

            function d() {}

            function f() {}
            var y = {};
            y[o] = function() {
                return this
            };
            var h = Object.getPrototypeOf,
                p = h && h(h(k([])));
            p && p !== e && r.call(p, o) && (y = p);
            var v = f.prototype = s.prototype = Object.create(y);

            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                }))
            }

            function m(t, e) {
                var n;
                this._invoke = function(o, i) {
                    function c() {
                        return new e((function(n, c) {
                            ! function n(o, i, c, u) {
                                var l = a(t[o], t, i);
                                if ("throw" !== l.type) {
                                    var s = l.arg,
                                        d = s.value;
                                    return d && "object" == typeof d && r.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                        n("next", t, c, u)
                                    }), (function(t) {
                                        n("throw", t, c, u)
                                    })) : e.resolve(d).then((function(t) {
                                        s.value = t, c(s)
                                    }), (function(t) {
                                        return n("throw", t, c, u)
                                    }))
                                }
                                u(l.arg)
                            }(o, i, n, c)
                        }))
                    }
                    return n = n ? n.then(c, c) : c()
                }
            }

            function _(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, _(t, e), "throw" === e.method)) return l;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var n = a(r, t.iterator, e.arg);
                if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                var o = n.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function x(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function b(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function k(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            i = function e() {
                                for (; ++n < t.length;)
                                    if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return {
                    next: L
                }
            }

            function L() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return d.prototype = v.constructor = f, f.constructor = d, f[c] = d.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(v), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, g(m.prototype), m.prototype[i] = function() {
                return this
            }, t.AsyncIterator = m, t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var c = new m(u(e, r, n, o), i);
                return t.isGeneratorFunction(r) ? c : c.next().then((function(t) {
                    return t.done ? t.value : c.next()
                }))
            }, g(v), v[c] = "Generator", v[o] = function() {
                return this
            }, v.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(),
                    function r() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, t.values = k, b.prototype = {
                constructor: b,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                        for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function n(r, n) {
                        return c.type = "throw", c.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            c = i.completion;
                        if ("root" === i.tryLoc) return n("end");
                        if (i.tryLoc <= this.prev) {
                            var u = r.call(i, "catchLoc"),
                                a = r.call(i, "finallyLoc");
                            if (u && a) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            } else if (u) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var c = i ? i.completion : {};
                    return c.type = t, c.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(c)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                x(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: k(t),
                        resultName: e,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = n
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    },
    o0o1: function(t, e, r) {
        t.exports = r("ls82")
    }
});