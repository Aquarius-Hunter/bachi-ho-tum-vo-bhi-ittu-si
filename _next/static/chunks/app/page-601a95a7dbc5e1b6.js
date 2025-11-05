(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    6509: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 7534));
    },
    7534: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => O });
      var i = a(5155),
        s = a(2115),
        n = a(6497),
        l = a(1733);
      function r(e) {
        let { onDone: t } = e,
          [a, n] = (0, s.useState)(3);
        return (
          (0, s.useEffect)(() => {
            let e = setInterval(() => {
              n((a) =>
                a <= 1
                  ? (clearInterval(e),
                    setTimeout(() => (null == t ? void 0 : t()), 420),
                    0)
                  : a - 1
              );
            }, 900);
            return () => clearInterval(e);
          }, []),
          (0, i.jsxs)("div", {
            className: "w-full grid place-items-center",
            children: [
              (0, i.jsxs)("div", {
                className: "relative",
                children: [
                  (0, i.jsx)("div", {
                    className: "spinner",
                    children: (0, i.jsx)("div", { className: "spinner1" }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
                    children: (0, i.jsx)(
                      l.P.div,
                      {
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        className:
                          "text-[110px] md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.25)] p-0.5 pt-7",
                        children: a,
                      },
                      a
                    ),
                  }),
                ],
              }),
              (0, i.jsx)(l.P.h1, {
                className:
                  "text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 mt-14 text-center py-1.5",
                animate: { opacity: [0.8, 1, 0.8] },
                transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
                children: "Crafting your special moment...",
              }),
            ],
          })
        );
      }
      let o = [
        "./images/1.png",
        "./images/2.png",
        "./images/3.png",
        "./images/4.png",
        "./images/5.png",
        "./images/6.png",
        "./images/7.png",
        "./images/8.png",
        "./images/9.png",
        "./images/10.png",
        "./images/11.png",
        "./images/12.png",
        "./images/13.png",
        "./images/14.png",
        "./images/15.png",
        "./images/16.png",
        "./images/17.png",
        "./images/18.png",
        "./images/19.png",
        "./images/20.png",
        "./images/21.png",
        "./images/22.png",
        "./images/23.png",
        "./images/24.png",
        "./images/25.png",
      ];
      function c(e) {
        let { className: t = "", children: a, ...s } = e;
        return (0, i.jsx)("button", {
          ...s,
          className: [
            "px-10 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 shadow-[0_0_28px_rgba(244,114,182,0.35)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/70 flex gap-2",
            t,
          ].join(" "),
          children: a,
        });
      }
      var d = a(709);
      function x(e) {
        let { onNext: t, onStartMusic: a } = e;
        return (0, i.jsx)("div", {
          className: "py-10 md:py-14 text-center",
          children: (0, i.jsxs)("div", {
            className: "flex flex-col items-center gap-6",
            children: [
              (0, i.jsx)("img", {
                src: "./gifs/intro.gif",
                alt: "Cute birthday animation topper",
                className: "w-[140px] md:w-[180px]  object-cover",
              }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("h1", {
                    className:
                      "text-pretty text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight",
                    style: {
                      filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
                    },
                    children: "A Cutiepie was born today, Meri Kuchu Puchu Baby!",
                  }),
                  (0, i.jsx)("p", {
                    className: "mt-4 text-xl text-pink-200",
                    children: "Yes, it’s YOU, ittu si hi ho tum👨‍🍼 Meri Princess! A little surprise awaits...",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-8",
                children: (0, i.jsxs)(c, {
                  onClick: () => {
                    null == a || a(), null == t || t();
                  },
                  children: [
                    (0, i.jsx)(d.A, { size: 20 }),
                    "Start the surprise",
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var p = a(1708),
        m = a(6667),
        u = a(8198),
        h = a(2987);
      let f = ["#FF3CAC", "#F687B3", "#D8B4FE", "#C084FC", "#F472B6"];
      function y(e) {
        let { onNext: t, onDecorate: a } = e,
          [r, o] = (0, s.useState)(!1),
          [d, x] = (0, s.useState)(!1),
          y = () => {
            (0, p.A)({
              particleCount: 140,
              spread: 90,
              origin: { y: 0.6 },
              colors: f,
            });
          };
        return (0, i.jsxs)("div", {
          className: "px-4 md:px-6 py-10 text-center relative",
          children: [
            d &&
              (0, i.jsxs)(l.P.div, {
                className:
                  "fixed top-46 lg:top-60 left-0 w-full text-center text-[40px] md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 drop-shadow leading-tight px-4",
                style: {
                  filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
                },
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, ease: "easeOut", delay: 1.5 },
                children: ["Happy Birthday, ", "Cutiepiee!"],
              }),
            (0, i.jsxs)("div", {
              className:
                "relative flex flex-col items-center gap-8 mt-72 md:mt-56",
              children: [
                (0, i.jsx)("div", {
                  className: "relative mb-6",
                  children: (0, i.jsx)(g, { lit: d }),
                }),
                (0, i.jsx)(n.N, {
                  mode: "wait",
                  children: r
                    ? d
                      ? (0, i.jsx)(
                          l.P.div,
                          {
                            initial: { opacity: 0, scale: 0.8 },
                            animate: {
                              opacity: 1,
                              scale: 1,
                              transition: { duration: 0.5, delay: 2 },
                            },
                            transition: { duration: 0.5, ease: "easeOut" },
                            children: (0, i.jsxs)(c, {
                              onClick: t,
                              children: [
                                "Now it's time.. for what?? bhul gya😩 noiii vo tumhara kaam hai ummm🤔🤔 ha it's time To Pop the Balloons, obviously😏. It’s a party starter for your soul. You built this magic—now hit it and let the celebration begin, I'm ready to dance hold you close and dance n celebrate my love. You're Precious to me.",
                                (0, i.jsx)(h.A, {
                                  size: 20,
                                  className: "mt-0.5",
                                }),
                              ],
                            }),
                          },
                          "next"
                        )
                      : (0, i.jsx)(
                          l.P.div,
                          {
                            initial: { opacity: 0, scale: 0.8 },
                            animate: {
                              opacity: 1,
                              scale: 1,
                              transition: { duration: 0.5, delay: 0.5 },
                            },
                            exit: { opacity: 0, scale: 0.8 },
                            transition: { duration: 0.5, ease: "easeOut" },
                            children: (0, i.jsxs)(c, {
                              onClick: () => {
                                d ||
                                  (x(!0),
                                  setTimeout(() => y(), 500),
                                  setTimeout(() => y(), 1e3));
                              },
                              children: [
                                (0, i.jsx)(u.A, { size: 20 }),
                                "See Maine Bola tha na Magician Ho Tum Meri Jaan😱🤯.. Now Take the spark you’ve always had inside—the one that lights up when you smile, when you care, when you just *are*. Light that candle with it. Let your warmth push back the dark. Your energy is one of a kind, real and strong, born from every hard day you got through and every kind word you gave. Share it. Let it glow. You’re the brightness that's been missing for centuries from this World. You're Born To Shine Meri Ardhangni.",
                              ],
                            }),
                          },
                          "light"
                        )
                    : (0, i.jsx)(
                        l.P.div,
                        {
                          initial: { opacity: 0, scale: 0.8 },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5, delay: 0.5 },
                          },
                          exit: { opacity: 0, scale: 0.8 },
                          transition: { duration: 0.5, ease: "easeOut" },
                          children: (0, i.jsxs)(c, {
                            onClick: () => {
                              r ||
                                (o(!0),
                                setTimeout(() => {
                                  a();
                                }, 500));
                            },
                            children: [
                              (0, i.jsx)(m.A, { size: 20 }),
                              "Yk babe there is a magic lies in your every touch, wanna see one.. umm click here and things will start Decorating Just By Your Touch Like My Life Started When You Came! Meri Jaan It's Your Birthday The Most Special and Precious Day For Me aahhhhhh I'm Every Excited🥳",
                            ],
                          }),
                        },
                        "decorate"
                      ),
                }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { lit: t } = e;
        return (0, i.jsx)("div", {
          className: "flex flex-col items-center",
          children: (0, i.jsxs)("div", {
            className: "cake",
            children: [
              (0, i.jsx)("div", { className: "plate" }),
              (0, i.jsx)("div", { className: "layer layer-bottom" }),
              (0, i.jsx)("div", { className: "layer layer-middle" }),
              (0, i.jsx)("div", { className: "layer layer-top" }),
              (0, i.jsx)("div", { className: "icing" }),
              (0, i.jsx)("div", { className: "drip drip1" }),
              (0, i.jsx)("div", { className: "drip drip2" }),
              (0, i.jsx)("div", { className: "drip drip3" }),
              (0, i.jsx)("div", {
                className: "candle",
                children:
                  t &&
                  (0, i.jsx)(l.P.div, {
                    initial: { opacity: 0, scaleY: 0.2, y: 10 },
                    animate: { opacity: 1, scaleY: 1, y: 0 },
                    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
                    className: "flame",
                  }),
              }),
            ],
          }),
        });
      }
      let j = ["You're", "My", "परमसुन्दरी", "The most beautiful one; beyond all beauty"],
        v = [
          { id: 1, xPct: 20, topPct: 18, color: "#fb7185" },
          { id: 2, xPct: 40, topPct: 24, color: "#f59e0b" },
          { id: 3, xPct: 60, topPct: 24, color: "#22c55e" },
          { id: 4, xPct: 80, topPct: 18, color: "#38bdf8" },
        ];
      function b(e) {
        let { onNext: t } = e,
          [a, r] = (0, s.useState)([]),
          o = 4 === a.length,
          d = (0, s.useRef)(null),
          [x, m] = (0, s.useState)({ w: 0, h: 0 }),
          [u, f] = (0, s.useState)(0),
          [y, g] = (0, s.useState)({}),
          b = (0, s.useRef)(new Map()),
          w = () => {
            var e;
            let t =
              null == (e = d.current) ? void 0 : e.getBoundingClientRect();
            if (!t) return;
            let a = {};
            v.forEach((e) => {
              let i = b.current.get(e.id);
              if (!i) return;
              let s = i.getBoundingClientRect();
              a[e.id] = {
                x: s.left - t.left + s.width / 2,
                y: s.top - t.top + s.height / 2,
              };
            }),
              g(a);
          };
        return (
          (0, s.useEffect)(() => {
            let e = new ResizeObserver(() => {
              d.current &&
                (m({ w: d.current.clientWidth, h: d.current.clientHeight }),
                w());
            });
            return d.current && e.observe(d.current), () => e.disconnect();
          }, []),
          (0, s.useEffect)(() => {
            let e,
              t = () => {
                f((e) => (e + 0.02) % (2 * Math.PI)),
                  w(),
                  (e = requestAnimationFrame(t));
              };
            return (
              (e = requestAnimationFrame(t)), () => cancelAnimationFrame(e)
            );
          }, []),
          (0, s.useEffect)(() => {
            o &&
              (0, p.A)({
                particleCount: 180,
                spread: 85,
                startVelocity: 38,
                origin: { y: 0.6 },
                ticks: 190,
                colors: ["#FF3CAC", "#F687B3", "#D8B4FE", "#C084FC", "#F472B6"],
              });
          }, [o]),
          (0, i.jsxs)("section", {
            className: "px-3 md:px-6 py-10",
            children: [
              (0, i.jsxs)(l.P.div, {
                layout: !0,
                ref: d,
                className:
                  "relative h-[68vh] md:h-[60vh] w-full overflow-visible rounded-3xl backdrop-blur-xl bg-gradient-to-b from-pink-950/35 via-fuchsia-950/30 to-purple-950/35",
                children: [
                  !o &&
                    (0, i.jsx)("div", {
                      className:
                        "absolute top-4 left-1/2 -translate-x-1/2 text-pink-50/90 text-sm md:text-sm",
                      children: "Pop all 4 balloons—and watch every worry burst into confetti! and feel the weight you never asked to carry shatter in one quiet burst. They explode into color, then vanish, leaving only space—space for your pure heart to beat louder, your smile to stretch wider, your tomorrow n everyday to start fresh with that smile Mela Bacha. The first pops and releases the fear you’d never be enough, a soft crack that loosens the knot in your chest. The second bursts the silence you kept to stay safe, and the air tastes like your own voice finally free. The third shatters the dream you almost let die, scattering sparks of yes, now that swirl into a thousand tiny sunrises, each one whispering go, live, shine. The fourth dissolves tomorrow’s worries into bright confetti. Four small sounds, four weights gone, and suddenly joy floods the empty space—warm, wild, unstoppable—lifting you like laughter you didn’t know you were holding. You’re lighter, freer, grinning at the sky that just opened wider, arms wide, heart racing, ready to chase every spark into a life that’s finally, beautifully yours. The first pops and releases the fears that are there, a soft crack that loosens the knot in your chest. The second bursts the silence you kept to stay safe, and in the quiet after, the air hums with your voice, alive and unafraid. The third shatters the dreams left behind in the play of time somewhere, scattering sparks every piece of them of Yes Yes Yes you can do anything, now that swirl into a thousand tiny sunrises, each one whispering go, live, shine. The fourth dissolves tomorrow’s worries into bright confetti of today live in present. Four small sounds, four weights gone, and suddenly joy floods the empty space—warm, wild, unstoppable—lifting you like laughter you didn’t know you were holding. You’re lighter, freer, grinning at the sky that just opened wider, arms wide, heart racing, ready to chase every spark into a life that’s finally, beautifully yours Meri Jaan, You're Born to shine, You're Unstoppable, I'm with You.",
                    }),
                  v.map((e, t) =>
                    (0, i.jsx)(
                      l.P.div,
                      {
                        className:
                          "absolute text-xl md:text-2xl font-semibold pointer-events-none",
                        style: {
                          left: "".concat(e.xPct, "%"),
                          top: "".concat(
                            e.topPct + (window.innerWidth > 768 ? 14 : 12),
                            "%"
                          ),
                          transform: "translateX(-50%)",
                        },
                        initial: { opacity: 0 },
                        animate: { opacity: +!!a.includes(e.id) },
                        children: (0, i.jsx)("span", {
                          className:
                            "text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400 drop-shadow",
                          children: j[t],
                        }),
                      },
                      "word-".concat(e.id)
                    )
                  ),
                  (0, i.jsx)(n.N, {
                    children: v.map((e) => {
                      let t;
                      return (0, i.jsx)(
                        N,
                        {
                          data: e,
                          popped: a.includes(e.id),
                          onPop: () => {
                            var t;
                            return (
                              (t = e.id),
                              void (
                                !a.includes(t) &&
                                (r((e) => [...e, t]),
                                (0, p.A)({
                                  particleCount: 45,
                                  spread: 45,
                                  startVelocity: 28,
                                  origin: { y: 0.7 },
                                  ticks: 100,
                                  colors: [
                                    "#FF3CAC",
                                    "#F687B3",
                                    "#D8B4FE",
                                    "#C084FC",
                                    "#F472B6",
                                  ],
                                }))
                              )
                            );
                          },
                          registerKnot:
                            ((t = e.id),
                            (e) => {
                              e && b.current.set(t, e);
                            }),
                        },
                        e.id
                      );
                    }),
                  }),
                  (0, i.jsxs)("svg", {
                    className: "pointer-events-none absolute inset-0 -z-10",
                    width: x.w,
                    height: x.h,
                    children: [
                      v.map((e, t) => {
                        let a = ((e, t) => {
                          let a = y[e.id];
                          if (!a || !x.w || !x.h) return "";
                          let i = a.x,
                            s = a.y,
                            n = 18 * Math.sin(u + t),
                            l = 0.5 * x.w + 0.2 * n,
                            r = 0.7 * x.h,
                            o = 0.5 * x.w,
                            c = x.h;
                          return "M "
                            .concat(i, " ")
                            .concat(s, " C ")
                            .concat(i + 0.4 * n, " ")
                            .concat(s + 80, ", ")
                            .concat(l, " ")
                            .concat(r, ", ")
                            .concat(o, " ")
                            .concat(c);
                        })(e, t);
                        return a
                          ? (0, i.jsx)(
                              "path",
                              {
                                d: a,
                                stroke: "rgba(255,255,255,0.75)",
                                strokeWidth: "1.4",
                                fill: "none",
                              },
                              "str-".concat(e.id)
                            )
                          : null;
                      }),
                      (0, i.jsx)("circle", {
                        cx: 0.5 * x.w,
                        cy: x.h,
                        r: "5",
                        fill: "rgba(255,255,255,0.75)",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-8 flex justify-center",
                children: (0, i.jsx)(n.N, {
                  children:
                    o &&
                    (0, i.jsx)(l.P.div, {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.5 },
                      },
                      transition: { duration: 1.4, ease: "easeOut" },
                      children: (0, i.jsxs)(c, {
                        onClick: t,
                        children: [
                          "Next",
                          (0, i.jsx)(h.A, { size: 20, className: "mt-0.5" }),
                        ],
                      }),
                    }),
                }),
              }),
            ],
          })
        );
      }
      function N(e) {
        let { data: t, onPop: a, popped: s, registerKnot: n } = e,
          { id: r, xPct: o, topPct: c, color: d } = t;
        return (0, i.jsx)(l.P.button, {
          onClick: a,
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: +!s, scale: s ? 1.12 : 1 },
          exit: { opacity: 0, scale: 1.25, transition: { duration: 0.22 } },
          transition: {
            y: { repeat: 1 / 0, duration: 2.8, ease: "easeInOut" },
          },
          className: "absolute -translate-x-1/2",
          style: {
            left: "".concat(o, "%"),
            top: "".concat(c, "%"),
            transform: "translateX(-50%)",
          },
          "aria-label": "Balloon ".concat(r),
          children: (0, i.jsxs)("div", {
            className: "relative",
            children: [
              (0, i.jsx)("div", {
                className:
                  "h-24 w-20 md:h-28 md:w-22 rounded-[50%_50%_45%_45%/55%_55%_45%_45%]",
                style: {
                  background:
                    "radial-gradient(60% 60% at 35% 35%, rgba(255,255,255,0.6) 0 26%, transparent 27%), linear-gradient(145deg, ".concat(
                      d,
                      ", rgba(255,255,255,0.3))"
                    ),
                  boxShadow:
                    "inset -6px -10px 16px rgba(0,0,0,0.18), 0 10px 22px rgba(0,0,0,0.22)",
                },
              }),
              (0, i.jsx)("div", {
                ref: n,
                className: "mx-auto -mt-1 h-3 w-3 rotate-45 relative z-10",
                style: { background: d },
              }),
            ],
          }),
        });
      }
      var w = a(4551),
        k = a(4960);
      a(4062), a(4809);
      var C = a(3457),
        P = a(3664);
      function F(e) {
        let { onNext: t } = e,
          a = (0, s.useRef)(null);
        return (0, i.jsxs)("div", {
          className: "px-4 md:px-6 py-10 pt-20",
          children: [
            (0, i.jsxs)("div", {
              className: "text-center mb-6",
              children: [
                (0, i.jsx)(l.P.h2, {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  className:
                    "text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow",
                  children: "US",
                }),
                (0, i.jsx)("p", {
                  className: "text-sm text-rose-100/90 mt-1",
                  children: "🫂🫂❤️❤️❤️❤️❤️❤️🤴👸❤️❤️❤️❤️❤️❤️❤️🫂🫂",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "relative flex justify-center",
              children: (0, i.jsx)(l.P.div, {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1 },
                children: (0, i.jsx)(w.RC, {
                  effect: "cards",
                  grabCursor: !0,
                  modules: [k.ZD, k.Ij],
                  autoplay: { delay: 3e3, disableOnInteraction: !1 },
                  onSwiper: (e) => (a.current = e),
                  className: "w-[280px] h-[360px] md:w-[340px] md:h-[420px]",
                  children: o.map((e, t) =>
                    (0, i.jsx)(
                      w.qr,
                      {
                        children: (0, i.jsx)(l.P.div, {
                          className:
                            "h-full w-full rounded-3xl p-2 bg-gradient-to-br from-pink-400/50 via-rose-400/50 to-purple-400/50 backdrop-blur-sm",
                          children: (0, i.jsxs)("div", {
                            className:
                              "relative h-full w-full rounded-xl overflow-hidden ",
                            children: [
                              (0, i.jsx)(C.A, {
                                className:
                                  "absolute top-2 left-2 text-xl z-10 text-pink-500 fill-pink-500 opacity-90",
                              }),
                              (0, i.jsx)(C.A, {
                                className:
                                  "absolute top-2 right-2 text-xl z-10 text-pink-500 fill-pink-500 opacity-90",
                              }),
                              (0, i.jsx)("img", {
                                src: e,
                                alt: "Memory ".concat(t + 1),
                                className:
                                  "h-full w-full rounded-2xl object-cover",
                                style: {
                                  filter:
                                    "drop-shadow(0 8px 16px rgba(244, 114, 182, 0.2))",
                                },
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-tr from-transparent via-black/10 to-pink-100/10 pointer-events-none rounded-2xl",
                              }),
                            ],
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              }),
            }),
            (0, i.jsx)(l.P.div, {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
              transition: { duration: 1.4, ease: "easeOut" },
              className: "mt-8 flex justify-center",
              children: (0, i.jsxs)(c, {
                onClick: t,
                children: [
                  (0, i.jsx)(P.A, { size: 20, className: "mt-0.5" }),
                  " Open My Message",
                ],
              }),
            }),
          ],
        });
      }
      function z(e) {
        let { onNext: t } = e,
          [a, n] = (0, s.useState)(!1);
        return (0, i.jsxs)("div", {
          className: "px-4 md:px-6 py-10 pt-20 text-center",
          children: [
            (0, i.jsx)(l.P.h2, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className:
                "text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight",
              children: "A Special Message",
            }),
            (0, i.jsx)("div", {
              className: "mx-auto relative w-full max-w-3xl",
              children: (0, i.jsxs)(l.P.div, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1 },
                className:
                  "card  w-[300px] h-[425px] max-[360px]:w-[250px] max-[360px]:h-[370px] md:w-[350px] md:h-[500px] mx-auto cursor-pointer flex items-center ".concat(
                    a ? "flipped" : ""
                  ),
                onClick: () => n(!a),
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "back w-[300px] h-[425px] max-[360px]:w-[250px] max-[360px]:h-[370px] md:w-[350px] md:h-[500px] -ml-[10px]",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "front w-[300px] h-[425px] max-[360px]:w-[250px] max-[360px]:h-[370px] md:w-[350px] md:h-[500px] -ml-[10px]",
                    children: [
                      (0, i.jsx)("div", {
                        className: "imgset h-full",
                        children: (0, i.jsx)("img", {
                          width: "100%",
                          className: "h-full",
                          src: "./images/cover.png",
                        }),
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "absolute left-1/2 bottom-4 md:bottom-6 -translate-x-1/2 bg-pink-500 text-pink-50 z-10 w-32 md:w-40 rounded-lg py-0.5",
                        children: "Tap to Open",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "w-[85%] h-[80%] mx-auto text-[#301733] text-lg",
                    children: (0, i.jsx)("p", {
                      className: "overflow-y-auto h-full pr-2",
                      children:
                        "Happy Birthday Meri Jaan dekho ab to cake bhi cut karliya🥳😍, Cutiepie! Today isn’t just a date so stop saying bdy hi to hai kya ho gya chuppp hupppp; it’s the day my love when the universe decided to bridge worlds with your voice, pulling me across miles into something that feels like fate. Cake? Presents? They’re whispers compared to the way my heart races every time your name lights up on my screen. Before you, mera bacha, life was umm like song yk I could sing but never truly hear—the notes there it was pretty hectic and flat, echoing in empty spaces in my head. Then your call came through, meli cutiepiee ki (I'm not talking about phone here), and suddenly there was rhythm in my days, a harmony in the quiet hours that only your laugh could unlock. You didn’t add color; you became the color, golumolu baby💋💋💃, every photo you sent in saree it just ahhhhhh, every spark in your eyes from that video where you’re just being you and that was perfect that's what I like the most. If only you could hear yourself through my heart for one quiet moment, meri jaan. You’d catch that soft lilt in your voice when you’re sharing a story, mela kuchupuchu baby, and you’d know it’s the sweetest melody I replay in my dreams some other thinsg too yk that covers major part but still yeah we're talking abt the melody. You’d feel the quiet strength in every word you choose, the way you lift me without even trying, turning my doubts into echoes of your encouragement. And your beauty? Jaan, it’s in the unguarded glow of your smile in those photos, the way your eyes crinkle— it sneaks in through the screen and settles deep, making the distance feel like a promise instead of a wall. I’m biased, yes, but I’m also right, meri ardhangni, because no one else gets to hear you hum and still feel like the luckiest man alive😅💕. I used to think love was a destination, a place you finally land. You showed me it’s the bridge we build call by call, by every message and every video, every picture, every song you sing every thing we shared and not just shared good things but put forward our all the insecurities and the things we wont's share to any other person not even a single soul meri dharmpatni, voice note by voice note, across every mile that tries to pull us apart. It’s the million little echoes: the comfortable pauses on our late-night talks where silence feels like the deepest conversation; the way you send a song you’re singing just for me, and I hit play feeling like you’re right here; the inside jokes that crackle through the line, leaving us both breathless with laughter. “Us” isn’t a word; it’s our shared playlist of voice memos and photos that say I miss you, but I’m here, a rhythm only we know. but tbh what I was thinking of is like I wish you could see yourself through my eyes, just for a second, so that you see how beautiful, how much strong, and more than enough you're for me.. you'd see that you're the most gorgeous women in in this whole wide world. You’re my anchor when the days stretch too long, meri jaan, your steady voice grounding me through the static of time zones. And my sail too, the one that catches your stories and dreams, urging me to dream bigger, to hold on tighter to the day we close this gap. It’s the most beautiful pull, and it’s all you. only you🫂. So today, my wish is simple but endless: yet it’s the most important thing in the world: I want you to feel it, with every fiber of your being, the immense love that surrounds you. I wish for days filled with laughter that makes your stomach hurt, nights filled with peaceful sleep in my arms and cuddling, and a heart that is always hopeful. May you never forget how capable you are, how deserving you are of every good thing, and how deeply, profoundly, and completely you are loved by me. well My deepest wish for you is peace. The peace of knowing you are enough, exactly as you are not just jusr enough but more than enough. The peace of pursuing your dreams without fear. The peace of a heart that is full and a spirit that is free. May this year bring you closer to the person you are destined, wished, planning and working towards to become, and may you find joy in every step of this beautiful journey and Your Patidev is with you in this whole journey. I want you to feel it, woven into every fiber, how completely, wildly, achingly you are loved by me—across every unanswered text, every saved voice note, every photo that makes my chest tighten. Chase that spark in your voice, cutiepie; the one that lights up when you talk about your day—I’ll be listening, cheering with my worst puns and all my heart. And for us, I want more—more voice notes that feel like whispers in the dark, more videos, more ordinary shares that turn miles into moments mela golumolu baby. ummm wish... My wish for you is not for a perfect day, but for a life that is perfectly, unapologetically yours. I wish for you to always chase the spark that makes your eyes light up. I wish for you to never lose the beautiful, compassionate heart that guides you well that is the place where is live tho thichuk tichuk😍🙌🥳. And above all, I wish for you to know, deep in your very soul, how extraordinarily loved you are—not just by me, but by the universe that is so much luck and blessed for having you, a pure soul with pure heart and behad sundar face... dayummm kaafi dangerous combo hai damnn. meri pretty lil baby kuchu puchu baby🫂🫂💋💋💋💋💕💕... And for us, I wish for a lifetime of building our world together, brick by brick, with love, trust, and an unbreakable bond. I wish for a future as boundless as the love and about min 10 Kids. I wish for a love that continues to grow deeper, stronger, and more resilient with every passing season. And always remember this Rakshash will always be your partner in everything, your shelter from any storm, and your loudest cheerleader. My wish for us is a lifetime of more. More mornings waking up together, more adventures that turn into stories, more quiet nights that feel like everything with some pyaar yk, and more and more....... Meri Pyari Dharampatni Happy Birthday, meri bachi ho tum chutuuuuuu si inuuuuuuuu si samhi hmm, my everything. You are my past, my present, and every tomorrow I’m counting down to. Don’t you ever forget that. my beautiful girl. You are, and always will be, my greatest blessing. You're Precious to me You're Perfect to me as the way You're.. I Love You So Much Meri Dharampatni Forever❤️👸🫂💋💕 \uD83D\uDC97",
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(l.P.div, {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
              transition: { duration: 1.4, ease: "easeOut" },
              className: "mt-8 flex justify-center",
              children: (0, i.jsxs)(c, {
                onClick: () => {
                  n(!1), t();
                },
                children: [
                  "Next",
                  (0, i.jsx)(h.A, { size: 20, className: "mt-0.5" }),
                ],
              }),
            }),
          ],
        });
      }
      var A = a(3141);
      function M(e) {
        let { onReplay: t } = e,
          [a, r] = (0, s.useState)(!1),
          o = () => {
            (0, p.A)({
              particleCount: 100,
              angle: 90,
              spread: 180,
              startVelocity: 45,
              gravity: 1.2,
              origin: { y: 0.6 },
              colors: ["#FF3CAC", "#F687B3", "#D8B4FE", "#C084FC", "#F472B6"],
            });
          };
        return (0, i.jsxs)("div", {
          className: "px-4 md:px-6 py-10 text-center",
          children: [
            (0, i.jsx)(l.P.h2, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className:
                "text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-4 leading-tight",
              children: "One Last Thing...",
            }),
            (0, i.jsxs)("div", {
              className: "flex flex-col items-center gap-3",
              children: [
                (0, i.jsx)(l.P.button, {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 1 },
                  className:
                    "group relative hover:scale-105 transition-transform duration-300 active:scale-95",
                  onClick: () => {
                    r(!0), o(), setTimeout(o, 300);
                  },
                  children: (0, i.jsx)("img", {
                    src: "./gifs/gift.gif",
                    alt: "Gift box",
                    className: "h-44 w-44 md:h-52 md:w-52 object-cover",
                  }),
                }),
                (0, i.jsx)(l.P.div, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0, transition: { delay: 1 } },
                  transition: { duration: 1.4, ease: "easeOut" },
                  className:
                    "text-pretty text-xl md:text-2xl font-semibold text-pink-200/90 drop-shadow",
                  children: "Tap the gift",
                }),
              ],
            }),
            (0, i.jsx)(n.N, {
              children:
                a &&
                (0, i.jsx)(l.P.div, {
                  className:
                    "fixed p-4 inset-0 z-10 grid place-items-center bg-black/65 backdrop-blur-lg",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 1 },
                  children: (0, i.jsxs)(l.P.div, {
                    initial: { scale: 0.75, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.97, opacity: 0 },
                    transition: { duration: 1, type: "spring", stiffness: 200 },
                    className:
                      "relative z-10 max-w-xl rounded-2xl p-6 text-center bg-gradient-to-br from-pink-950 border-1 border-pink-300/80 via-purple-950 to-indigo-950 drop-shadow-2xl",
                    children: [
                      (0, i.jsx)("img", {
                        src: "./gifs/surprise.gif",
                        alt: "surprise",
                        className: "mx-auto w-44 md:w-52 object-cover",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-xl text-pink-300 font-semibold mt-2 drop-shadow-xl",
                        children: "LI love you so much soooooo muchhhh bhoooooot sara Meri Pyari Dharampatni ❤️",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "text-pretty text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-purple-200 drop-shadow-xl mt-5",
                        children:
                          "Once again, Happy Birthday Nikku, Meri Bachi.. You're Very Precious to Me Meri Jaan.",
                      }),
                      (0, i.jsx)("div", {
                        className: "mt-6 flex justify-center",
                        children: (0, i.jsxs)(c, {
                          onClick: t,
                          children: [
                            (0, i.jsx)(A.A, { size: 20, className: "mt-0.5" }),
                            " Replay",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
      function _() {
        function e(e, t, a, i) {
          let s = 1 - e;
          return {
            x: s * s * t.x + 2 * s * e * a.x + e * e * i.x,
            y: s * s * t.y + 2 * s * e * a.y + e * e * i.y,
          };
        }
        function t(e, t, a, i) {
          let s = 2 * (1 - e) * (a.x - t.x) + 2 * e * (i.x - a.x),
            n = 2 * (1 - e) * (a.y - t.y) + 2 * e * (i.y - a.y),
            l = Math.hypot(s, n) || 1;
          return { x: s / l, y: n / l };
        }
        function a(a, i) {
          let s = { x: 0, y: 50 },
            n = { x: 250, y: 140 },
            l = { x: 500, y: 0 },
            r = { x: 1e3, y: 50 },
            o = { x: 750, y: 140 },
            c = { x: 500, y: 0 },
            d = "left" === i ? e(a, s, n, l) : e(a, r, o, c),
            x = "left" === i ? t(a, s, n, l) : t(a, r, o, c),
            p = (window.innerWidth > 768 ? 40 : 60) / 2,
            m = x.x,
            u = x.y,
            h = -u,
            f = m;
          f < 0 && ((h = -h), (f = -f));
          let y = d.x - m * p,
            g = d.y - u * p,
            j = d.x + m * p,
            v = d.y + u * p,
            b = d.x + 38 * h,
            N = d.y + 38 * f;
          return ""
            .concat(y.toFixed(2), ",")
            .concat(g.toFixed(2), " ")
            .concat(j.toFixed(2), ",")
            .concat(v.toFixed(2), " ")
            .concat(b.toFixed(2), ",")
            .concat(N.toFixed(2));
        }
        let s = [
            "fill-rose-400",
            "fill-sky-400",
            "fill-amber-400",
            "fill-emerald-400",
            "fill-fuchsia-400",
          ],
          n = window.innerWidth > 768 ? 10 : 7;
        return (0, i.jsxs)("div", {
          className: "pointer-events-none fixed inset-0  z-40",
          children: [
            (0, i.jsx)("div", {
              className: "relative h-28 md:h-32 lg:h-48 w-full",
              children: (0, i.jsxs)("svg", {
                className: "absolute inset-0 h-full w-full",
                viewBox: "0 0 1000 160",
                preserveAspectRatio: "none",
                children: [
                  (0, i.jsx)("path", {
                    d: "M 0 50 Q 250 140 500 0",
                    className: "fill-none stroke-rose-300/90",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }),
                  (0, i.jsx)("path", {
                    d: "M 1000 50 Q 750 140 500 0",
                    className: "fill-none stroke-violet-300/90",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }),
                  Array.from({ length: n }).map((e, t) => {
                    let l = (t + 1) / (n + 1),
                      r = s[t % s.length];
                    return (0, i.jsx)(
                      "polygon",
                      {
                        points: a(l, "left"),
                        className: "".concat(r, " opacity-95 drop-shadow"),
                      },
                      "L".concat(t)
                    );
                  }),
                  Array.from({ length: n }).map((e, t) => {
                    let l = (t + 1) / (n + 1),
                      r = s[(t + 1) % s.length];
                    return (0, i.jsx)(
                      "polygon",
                      {
                        points: a(l, "right"),
                        className: "".concat(r, " opacity-95 drop-shadow"),
                      },
                      "R".concat(t)
                    );
                  }),
                ],
              }),
            }),
            (0, i.jsxs)("svg", {
              className: "absolute left-2 top-0 h-40 w-16 md:h-48 md:w-18 -z-1",
              viewBox: "0 0 64 160",
              preserveAspectRatio: "none",
              children: [
                (0, i.jsx)("defs", {
                  children: (0, i.jsxs)("linearGradient", {
                    id: "leftRibbon",
                    x1: "0",
                    x2: "1",
                    children: [
                      (0, i.jsx)("stop", {
                        offset: "0%",
                        stopColor: "#f472b6",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "100%",
                        stopColor: "#60a5fa",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("path", {
                  d: "M16 0 C 6 28, 32 56, 12 84 C -4 112, 28 128, 10 156",
                  stroke: "url(#leftRibbon)",
                  strokeWidth: "5",
                  fill: "none",
                  strokeLinecap: "round",
                  className: "drop-shadow",
                }),
              ],
            }),
            (0, i.jsxs)("svg", {
              className:
                "absolute right-2 top-0 h-40 w-16 md:h-48 md:w-18 -z-1",
              viewBox: "0 0 64 160",
              preserveAspectRatio: "none",
              children: [
                (0, i.jsx)("defs", {
                  children: (0, i.jsxs)("linearGradient", {
                    id: "rightRibbon",
                    x1: "0",
                    x2: "1",
                    children: [
                      (0, i.jsx)("stop", {
                        offset: "0%",
                        stopColor: "#a78bfa",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "100%",
                        stopColor: "#34d399",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("path", {
                  d: "M48 0 C 58 28, 32 56, 52 84 C 68 112, 36 128, 54 156",
                  stroke: "url(#rightRibbon)",
                  strokeWidth: "5",
                  fill: "none",
                  strokeLinecap: "round",
                  className: "drop-shadow",
                }),
              ],
            }),
          ],
        });
      }
      function B() {
        let [e, t] = (0, s.useState)([]),
          a = [
            "text-pink-400",
            "text-rose-400",
            "text-red-400",
            "text-pink-400",
            "text-rose-400",
          ];
        return (
          (0, s.useEffect)(() => {
            t(
              Array.from(
                { length: Math.floor(6 * Math.random()) + 10 },
                (e, t) => ({
                  id: t,
                  top: 100 * Math.random(),
                  left: 100 * Math.random(),
                  delay: 5 * Math.random(),
                  duration: 15 * Math.random() + 20,
                  size: 16 * Math.random() + 14,
                  color: a[Math.floor(Math.random() * a.length)],
                })
              )
            );
          }, []),
          (0, i.jsx)("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: e.map((e) =>
              (0, i.jsx)(
                "div",
                {
                  className: "heart-drift ".concat(e.color),
                  style: {
                    top: "".concat(e.top, "%"),
                    left: "".concat(e.left, "%"),
                    width: "".concat(e.size, "px"),
                    height: "".concat(e.size, "px"),
                    animation: "drift "
                      .concat(e.duration, "s ease-in-out ")
                      .concat(e.delay, "s infinite"),
                  },
                  children: (0, i.jsx)(C.A, {
                    size: e.size,
                    fill: "currentColor",
                    strokeWidth: 0,
                    className: "opacity-20",
                  }),
                },
                e.id
              )
            ),
          })
        );
      }
      function S(e) {
        let { shouldPlay: t } = e,
          a = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            t &&
              a.current &&
              ((a.current.volume = 0.7), a.current.play().catch(console.log));
          }, [t]),
          (0, i.jsx)("audio", {
            ref: a,
            loop: !0,
            preload: "auto",
            children: (0, i.jsx)("source", {
              src: "./audio/bg.mp3",
              type: "audio/mpeg",
            }),
          })
        );
      }
      function O() {
        let [e, t] = (0, s.useState)(0),
          [a, o] = (0, s.useState)(!1),
          [c, d] = (0, s.useState)(!1),
          p = [
            (0, i.jsx)(r, { onDone: () => t(1) }, "loader"),
            (0, i.jsx)(
              x,
              { onNext: () => t(2), onStartMusic: () => d(!0) },
              "intro"
            ),
            (0, i.jsx)(
              y,
              { onNext: () => t(3), onDecorate: () => o(!0) },
              "cake"
            ),
            (0, i.jsx)(b, { onNext: () => t(4) }, "balloons"),
            (0, i.jsx)(F, { onNext: () => t(5) }, "photos"),
            (0, i.jsx)(z, { onNext: () => t(6) }, "message"),
            (0, i.jsx)(M, { onReplay: () => t(1) }, "final"),
          ];
        return (0, i.jsxs)("main", {
          className:
            "min-h-screen bg-gradient-to-tr from-rose-950/40 via-black to-rose-950/40 overflow-hidden relative",
          children: [
            (0, i.jsx)("div", {
              className: "fixed inset-0 z-0 -[80px] opacity-20",
              style: {
                backgroundImage:
                  "radial-gradient(circle at 20% 60%, rgba(255, 99, 165, 0.5), transparent 40%)",
              },
            }),
            (0, i.jsx)("div", {
              className: "fixed inset-0 z-0 -[80px] opacity-20",
              style: {
                backgroundImage:
                  "radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.5), transparent 40%)",
              },
            }),
            (0, i.jsx)("div", {
              className: "fixed inset-0 z-0 -[100px] opacity-10",
              style: {
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(228, 193, 255, 0.4), transparent 40%)",
              },
            }),
            (0, i.jsx)("div", {
              className:
                "fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]",
            }),
            (0, i.jsxs)("div", {
              className:
                "relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6",
              children: [
                (0, i.jsx)(n.N, {
                  mode: "wait",
                  children: (0, i.jsx)(
                    l.P.div,
                    {
                      initial: { opacity: 0, scale: 0.98 },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1 },
                      },
                      exit: { opacity: 0, transition: { duration: 0.8 } },
                      transition: { duration: 0.8 },
                      className: "w-full ".concat(
                        4 === e ? "max-w-7xl" : "max-w-3xl md:max-w-4xl"
                      ),
                      children: p[e],
                    },
                    e
                  ),
                }),
                a &&
                  (0, i.jsx)(l.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.6 },
                    className:
                      "pointer-events-none absolute -top-2 inset-x-0 mx-auto max-w-2xl",
                    children: (0, i.jsx)(_, {}),
                  }),
              ],
            }),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(S, { shouldPlay: c }),
            (0, i.jsx)(l.P.div, {
              initial: { x: 100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 1, delay: 1 },
              className:
                "fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light",
              children: " ",
            }),
          ],
        });
      }
    },
  },
  (e) => {
    e.O(0, [20, 436, 441, 255, 358], () => e((e.s = 6509))), (_N_E = e.O());
  },
]);
