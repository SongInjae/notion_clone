(() => {
  "use strict";
  var t = {
      314: (t, n, e) => {
        e.d(n, { Z: () => s });
        var o = e(81),
          a = e.n(o),
          i = e(645),
          r = e.n(i)()(a());
        r.push([
          t.id,
          "/* 전체 css 적용 */\n* {\n    margin: 0;\n    padding: 0;\n}\n/* 영역 분리 */\n#app {\n    display: flex;\n}\n.notion-sidebar-container {\n    width: 20%;\n}\n.notion-content {\n    width: 80%;\n    min-height: 100vh;\n}\n/* 모달 관련 css */\n#modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.25);\n    display: none;\n}\n\n.modal-content {\n    background-color: white;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid black;\n    border-radius: 4px;\n    width: 40%;\n}\n#modal button {\n    background-color: rgb(232, 199, 100);\n    width: 30px;\n\n}\n\n/* Sidebar css 적용 */\nnav {\n    width: 100%;\n    min-height: 100vh;\n    background-color: rgb(238, 238, 238);\n    padding-top: 15px;\n    padding-left: 10px;\n}\n.container {\n    width: 100%;\n    display: flex;\n    overflow: hidden;\n    margin: 5px 0px;\n    padding: 5px 0;\n}\n.container:hover {\n    cursor: pointer;\n}\n  \n.container span {\n    flex-grow: 1;\n    overflow: hidden;\n}\ndiv span {\n    flex-grow: 1;\n}\n.notion-sidebar-container button {\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    background: none;\n    border: none;\n    padding: 2px;\n}\n.notion-sidebar-container button:hover {\n    background-color: gray;\n}\n.plus {\n  position:absolute;\n  left: 19%;\n}\n.delete {\n  position:absolute;\n  left: 17%;\n}\n.toggle {\n    display: block !important;\n}\n/* content css 적용 */\n.notion-content {\n    padding-top: 96px;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-content: center;\n}\n.content-title {\n    width: 600px;\n    height: 40px;\n    border: none;\n    outline: none;\n    font-size: 36px;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n/* Editor css 적용 */\n.toolbar {\n    width: 600px;\n    height: 40px;\n    padding: 8px;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n.toolbar button {\n    height: 24px;\n    padding: 4px;\n    border: 1px solid black;\n    background-color: white;\n    cursor: pointer;\n}\n.toolbar button:hover {\n    background-color: gray;\n}\n.editor {\n    width: 600px;\n    height: 600px;\n    padding: 16px;\n    margin-top: 8px;\n    font-size: 18px;\n    border-radius: 4px;\n    outline: none;\n    box-sizing: border-box;\n}",
          "",
        ]);
        const s = r;
      },
      645: (t) => {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  o = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (e += t(n)),
                  o && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (t, e, o, a, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var r = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0];
                  null != d && (r[d] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c]);
                (o && r[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  a &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = a))
                      : (l[4] = "".concat(a))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var n = [];
        function e(t) {
          for (var e = -1, o = 0; o < n.length; o++)
            if (n[o].identifier === t) {
              e = o;
              break;
            }
          return e;
        }
        function o(t, o) {
          for (var i = {}, r = [], s = 0; s < t.length; s++) {
            var d = t[s],
              c = o.base ? d[0] + o.base : d[0],
              l = i[c] || 0,
              u = "".concat(c, " ").concat(l);
            i[c] = l + 1;
            var p = e(u),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(m);
            else {
              var h = a(m, o);
              (o.byIndex = s),
                n.splice(s, 0, { identifier: u, updater: h, references: 1 });
            }
            r.push(u);
          }
          return r;
        }
        function a(t, n) {
          var e = n.domAPI(n);
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return;
                e.update((t = n));
              } else e.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var i = o((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var r = 0; r < i.length; r++) {
              var s = e(i[r]);
              n[s].references--;
            }
            for (var d = o(t, a), c = 0; c < i.length; c++) {
              var l = e(i[c]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            i = d;
          };
        };
      },
      569: (t) => {
        var n = {};
        t.exports = function (t, e) {
          var o = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          })(t);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var n = document.createElement("style");
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
        };
      },
      565: (t, n, e) => {
        t.exports = function (t) {
          var n = e.nc;
          n && t.setAttribute("nonce", n);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = t.insertStyleElement(t);
          return {
            update: function (e) {
              !(function (t, n, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var a = void 0 !== e.layer;
                a &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (o += e.css),
                  a && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  n.styleTagTransform(o, t, n.options);
              })(n, t, e);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    n = {};
  function e(o) {
    var a = n[o];
    if (void 0 !== a) return a.exports;
    var i = (n[o] = { id: o, exports: {} });
    return t[o](i, i.exports, e), i.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var o in n)
        e.o(n, o) &&
          !e.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nc = void 0),
    (() => {
      var t = e(379),
        n = e.n(t),
        o = e(795),
        a = e.n(o),
        i = e(569),
        r = e.n(i),
        s = e(565),
        d = e.n(s),
        c = e(216),
        l = e.n(c),
        u = e(589),
        p = e.n(u),
        m = e(314),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = d()),
        (h.insert = r().bind(null, "head")),
        (h.domAPI = a()),
        (h.insertStyleElement = l()),
        n()(m.Z, h),
        m.Z && m.Z.locals && m.Z.locals;
      const g = async (t, n = {}) => {
        try {
          const e = await fetch(`https://kdt-frontend.programmers.co.kr${t}`, {
            ...n,
            headers: {
              "Content-Type": "application/json",
              "x-username": "SongInJae",
            },
          });
          if (e.ok) return await e.json();
          throw new Error("API 처리 중 오류가 발생했습니다.");
        } catch (t) {
          alert(t.message);
        }
      };
      function f(t, n, e, o) {
        const a = document.createElement("div");
        "notion-sidebar-container" !== n.parentNode.className &&
          a.style.setProperty("display", "none"),
          (function (t, n, e, o) {
            for (let a = 0; a < n.length; a++) {
              const i = document.createElement("div");
              i.setAttribute("data-id", n[a].id),
                (i.className = "container"),
                i.addEventListener("click", (t) => {
                  const n = t.target
                    .closest(".container")
                    .getAttribute("data-id");
                  history.pushState(null, null, `/content/${n}`), o(n);
                }),
                i.addEventListener("mouseover", (t) => {
                  "SPAN" === t.target.tagName &&
                    (t.target.parentNode.style.backgroundColor = "lightgray");
                }),
                i.addEventListener("mouseout", (t) => {
                  "SPAN" === t.target.tagName &&
                    (t.target.parentNode.style.backgroundColor = "");
                });
              const r = document.createElement("button");
              (r.innerText = ">"),
                r.addEventListener("click", (t) => {
                  t.stopPropagation();
                  const n = t.target.nextSibling.childNodes;
                  for (let t = 0; t < n.length; t++)
                    "DIV" === n[t].nodeName && n[t].classList.toggle("toggle");
                }),
                i.appendChild(r);
              const s = document.createElement("span");
              (s.innerText = n[a].title), i.appendChild(s);
              const d = document.createElement("button");
              (d.innerText = "-"),
                (d.className = "delete"),
                d.addEventListener("click", async (t) => {
                  const n = t.target.parentNode.getAttribute("data-id");
                  await g(`/documents/${n}`, { method: "DELETE" }), e();
                }),
                i.appendChild(d),
                b(i),
                t.append(i),
                0 !== n[a].documents.length && f(n[a].documents, s);
            }
          })(a, t, e, o),
          n.children[1] ? n.replaceChild(a, n.children[1]) : n.appendChild(a);
      }
      function b(t) {
        const n = document.createElement("button"),
          e = document.getElementById("modal");
        (n.innerText = "+"),
          (n.className = "plus"),
          n.addEventListener("click", (t) => {
            e.style.display = "block";
          }),
          t.appendChild(n);
      }
      function v({ $target: t, initialState: n, onChange: e }) {
        const o = async () => {
          const t = await g("/documents");
          this.setState(t);
        };
        !(function (t) {
          const n = document.getElementById("modal"),
            e = document.getElementById("submit-modal"),
            o = document.getElementById("modal-input-title");
          let a = !1;
          const i = () => {
            if (a) return;
            const { pathname: e } = window.location,
              [, , o] = e.split("/"),
              i = document.getElementById("modal-input-title");
            (n.style.display = "none"),
              (a = !0),
              g("/documents", {
                method: "POST",
                body: JSON.stringify({ title: i.value, parent: o }),
              })
                .then(() => {
                  (i.value = ""), t();
                })
                .finally(() => {
                  a = !1;
                });
          };
          e.addEventListener("click", i),
            o.addEventListener("keydown", (t) => {
              "Enter" === t.key && i();
            });
        })(o);
        const a = document.createElement("nav");
        (a.innerText = "사이드바"),
          t.appendChild(a),
          b(a),
          o(),
          (this.state = n),
          (this.setState = (t) => {
            (this.state = t), this.render();
          }),
          (this.render = () => {
            f(this.state, a, o, e);
          }),
          this.render();
      }
      function y(t, n) {
        const e = document.createElement("div");
        (e.className = "toolbar"),
          (e.innerHTML =
            '\n        <button data-command="bold">Bold</button>\n        <button data-command="italic">Italic</button>\n        <button data-command="justifyLeft">Align Left</button>\n        <button data-command="justifyCenter">Align center</button>\n        <button data-command="justifyRight">Align Right</button>\n    '),
          e.addEventListener("click", (t) => {
            document.execCommand(t.target.getAttribute("data-command"));
            const e = document.getElementsByClassName("content-title")[0],
              o = document.getElementsByClassName("editor")[0];
            n(e.value, o.innerHTML);
          });
        const o = document.createElement("div");
        (o.className = "editor"),
          (o.contentEditable = !0),
          (o.name = "content"),
          t.appendChild(e),
          t.appendChild(o);
      }
      function x({ $target: t, initialState: n, onEditing: e }) {
        const o = document.createElement("input");
        (o.name = "title"),
          (o.className = "content-title"),
          t.appendChild(o),
          new y(t, e);
        const a = document.getElementsByClassName("editor")[0];
        (this.state = n),
          (this.setState = (t) => {
            (this.state = t), this.render();
          }),
          (this.render = () => {
            (o.value = this.state.title), (a.innerHTML = this.state.content);
          }),
          this.render();
        let i = null;
        const r = async (t, n) => {
          if (void 0 !== this.state[t]) {
            const o = {
              ...this.state,
              [t]: "title" === t ? n.target.value : n.target.innerHTML,
            };
            this.setState(o), e(this.state.title, this.state.content);
          }
        };
        t.addEventListener("keyup", (t) => {
          const n = t.target.name;
          if ("title" === n) {
            const { pathname: n } = window.location,
              [, , e] = n.split("/"),
              o = document.querySelector(`div[data-id="${e}"]`);
            for (let n = 0; n < o.children.length; n++)
              if ("SPAN" === o.children[n].tagName) {
                o.children[n].textContent = t.target.value;
                break;
              }
          }
          clearTimeout(i),
            (i = setTimeout(() => {
              r(n, t);
            }, 1e3));
        });
      }
      new (function ({ $sidebarTarget: t, $contentTarget: n }) {
        const { pathname: e } = window.location,
          [, o, a] = e.split("/"),
          i = document.getElementsByClassName("notion-content")[0];
        async function r(t) {
          const n = await g(`/documents/${t}`, { method: "GET" });
          s.setState(n), (i.style.display = "flex");
        }
        "content" === o && r(a),
          new v({ $target: t, initialState: "", onChange: r });
        const s = new x({
          $target: n,
          initialState: "",
          onEditing: async (t, n) => {
            const { pathname: e } = window.location,
              [, , o] = e.split("/");
            await g(`/documents/${o}`, {
              method: "PUT",
              body: JSON.stringify({ title: t, content: n }),
            });
          },
        });
      })({
        $sidebarTarget: document.getElementsByClassName(
          "notion-sidebar-container"
        )[0],
        $contentTarget: document.getElementsByClassName("notion-content")[0],
      });
    })();
})();
