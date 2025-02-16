import jQuery from 'jquery';
(function(o) {
    var t = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };

    o.zoom = function(t, n, e, i) {
        var u, c, a, r, m, l, s, f = o(t),
            h = f.css("position");
        
        t.style.position = /(absolute|fixed)/.test(h) ? h : "relative";
        t.style.overflow = "hidden";
        
        e.style.width = "";
        e.style.height = "";
        
        o(e).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: e.width * i,
            height: e.height * i,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(t);

        return {
            init: function() {
                c = f.outerWidth();
                u = f.outerHeight();

                if (n === t) {
                    r = c;
                    a = u;
                } else {
                    r = o(n).outerWidth();
                    a = o(n).outerHeight();
                }

                m = (e.width - c) / r;
                l = (e.height - u) / a;
                s = o(n).offset();
            },
            move: function(o) {
                var t = o.pageX - s.left,
                    n = o.pageY - s.top;
                
                n = Math.max(Math.min(n, a), 0);
                t = Math.max(Math.min(t, r), 0);
                
                e.style.left = -t * m + "px";
                e.style.top = -n * l + "px";
            }
        };
    };

    o.fn.zoom = function(n) {
        return this.each(function() {
            var e = o.extend({}, t, n || {}),
                i = e.target && o(e.target)[0] || this,
                u = this,
                c = o(u),
                a = document.createElement("img"),
                r = o(a);

            var l = false; // Declaration for variable 'l'

            if (!e.url) {
                var m = u.querySelector("img");
                if (m) {
                    e.url = m.getAttribute("data-src") || m.currentSrc || m.src;
                }
                if (!e.url) return;
            }

            c.one("zoom.destroy", function(o, t) {
                c.off(".zoom");
                i.style.position = o;
                i.style.overflow = t;
                a.onload = null;
                r.remove();
            }.bind(this, i.style.position, i.style.overflow));

            a.onload = function() {
                function t(t) {
                    f.init();
                    f.move(t);
                    r.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1);
                }

                function n() {
                    r.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1);
                }

                var s = false; // Declaration for variable 's'
                var f = o.zoom(i, u, a, e.magnify);

                if ("grab" === e.on) {
                    c.on("mousedown.zoom", function(e) {
                        if (1 === e.which) {
                            o(document).one("mouseup.zoom", function() {
                                n();
                                o(document).off("mousemove.zoom", f.move);
                            });

                            t(e);
                            o(document).on("mousemove.zoom", f.move);
                            e.preventDefault();
                        }
                    });
                } else if ("click" === e.on) {
                    c.on("click.zoom", function(e) {
                        if (!l) {
                            l = !0;
                            t(e);
                            o(document).on("mousemove.zoom", f.move);
                            o(document).one("click.zoom", function() {
                                n();
                                l = !1;
                                o(document).off("mousemove.zoom", f.move);
                            });
                            e.preventDefault();
                        }
                    });
                } else if ("toggle" === e.on) {
                    c.on("click.zoom", function(o) {
                        l ? n() : t(o);
                        l = !l;
                    });
                } else if ("mouseover" === e.on) {
                    f.init();
                    c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on("mousemove.zoom", f.move);
                }

                if (e.touch) {
                    c.on("touchstart.zoom", function(o) {
                        o.preventDefault();
                        if (s) {
                            s = !1;
                            n();
                        } else {
                            s = !0;
                            t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]);
                        }
                    }).on("touchmove.zoom", function(o) {
                        o.preventDefault();
                        f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]);
                    }).on("touchend.zoom", function(o) {
                        o.preventDefault();
                        if (s) {
                            s = !1;
                            n();
                        }
                    });
                }

                if (o.isFunction(e.callback)) {
                    e.callback.call(a);
                }
            };

            a.setAttribute("role", "presentation");
            a.alt = "";
            a.src = e.url;
        });
    };

    o.fn.zoom.defaults = t;
})(jQuery);
