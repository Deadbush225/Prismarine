var Tr = Object.defineProperty;
var Cr = (w, y, E) =>
	y in w
		? Tr(w, y, { enumerable: !0, configurable: !0, writable: !0, value: E })
		: (w[y] = E);
var ee = (w, y, E) => (Cr(w, typeof y != "symbol" ? y + "" : y, E), E);
var Sr =
		typeof globalThis < "u"
			? globalThis
			: typeof window < "u"
			? window
			: typeof global < "u"
			? global
			: typeof self < "u"
			? self
			: {},
	on = {},
	Ar = {
		get exports() {
			return on;
		},
		set exports(w) {
			on = w;
		},
	};
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */ (function (w) {
	(function (y, E) {
		w.exports = y.document
			? E(y, !0)
			: function (j) {
					if (!j.document)
						throw new Error("jQuery requires a window with a document");
					return E(j);
			  };
	})(typeof window < "u" ? window : Sr, function (y, E) {
		var j = [],
			W = Object.getPrototypeOf,
			_ = j.slice,
			I = j.flat
				? function (e) {
						return j.flat.call(e);
				  }
				: function (e) {
						return j.concat.apply([], e);
				  },
			K = j.push,
			ie = j.indexOf,
			re = {},
			G = re.toString,
			Z = re.hasOwnProperty,
			pt = Z.toString,
			Pt = pt.call(Object),
			z = {},
			H = function (t) {
				return (
					typeof t == "function" &&
					typeof t.nodeType != "number" &&
					typeof t.item != "function"
				);
			},
			Le = function (t) {
				return t != null && t === t.window;
			},
			O = y.document,
			je = { type: !0, src: !0, nonce: !0, noModule: !0 };
		function sn(e, t, n) {
			n = n || O;
			var i,
				o,
				a = n.createElement("script");
			if (((a.text = e), t))
				for (i in je)
					(o = t[i] || (t.getAttribute && t.getAttribute(i))),
						o && a.setAttribute(i, o);
			n.head.appendChild(a).parentNode.removeChild(a);
		}
		function Ue(e) {
			return e == null
				? e + ""
				: typeof e == "object" || typeof e == "function"
				? re[G.call(e)] || "object"
				: typeof e;
		}
		var un = "3.6.4",
			r = function (e, t) {
				return new r.fn.init(e, t);
			};
		(r.fn = r.prototype =
			{
				jquery: un,
				constructor: r,
				length: 0,
				toArray: function () {
					return _.call(this);
				},
				get: function (e) {
					return e == null
						? _.call(this)
						: e < 0
						? this[e + this.length]
						: this[e];
				},
				pushStack: function (e) {
					var t = r.merge(this.constructor(), e);
					return (t.prevObject = this), t;
				},
				each: function (e) {
					return r.each(this, e);
				},
				map: function (e) {
					return this.pushStack(
						r.map(this, function (t, n) {
							return e.call(t, n, t);
						})
					);
				},
				slice: function () {
					return this.pushStack(_.apply(this, arguments));
				},
				first: function () {
					return this.eq(0);
				},
				last: function () {
					return this.eq(-1);
				},
				even: function () {
					return this.pushStack(
						r.grep(this, function (e, t) {
							return (t + 1) % 2;
						})
					);
				},
				odd: function () {
					return this.pushStack(
						r.grep(this, function (e, t) {
							return t % 2;
						})
					);
				},
				eq: function (e) {
					var t = this.length,
						n = +e + (e < 0 ? t : 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
				},
				end: function () {
					return this.prevObject || this.constructor();
				},
				push: K,
				sort: j.sort,
				splice: j.splice,
			}),
			(r.extend = r.fn.extend =
				function () {
					var e,
						t,
						n,
						i,
						o,
						a,
						s = arguments[0] || {},
						c = 1,
						f = arguments.length,
						p = !1;
					for (
						typeof s == "boolean" && ((p = s), (s = arguments[c] || {}), c++),
							typeof s != "object" && !H(s) && (s = {}),
							c === f && ((s = this), c--);
						c < f;
						c++
					)
						if ((e = arguments[c]) != null)
							for (t in e)
								(i = e[t]),
									!(t === "__proto__" || s === i) &&
										(p && i && (r.isPlainObject(i) || (o = Array.isArray(i)))
											? ((n = s[t]),
											  o && !Array.isArray(n)
													? (a = [])
													: !o && !r.isPlainObject(n)
													? (a = {})
													: (a = n),
											  (o = !1),
											  (s[t] = r.extend(p, a, i)))
											: i !== void 0 && (s[t] = i));
					return s;
				}),
			r.extend({
				expando: "jQuery" + (un + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function (e) {
					throw new Error(e);
				},
				noop: function () {},
				isPlainObject: function (e) {
					var t, n;
					return !e || G.call(e) !== "[object Object]"
						? !1
						: ((t = W(e)),
						  t
								? ((n = Z.call(t, "constructor") && t.constructor),
								  typeof n == "function" && pt.call(n) === Pt)
								: !0);
				},
				isEmptyObject: function (e) {
					var t;
					for (t in e) return !1;
					return !0;
				},
				globalEval: function (e, t, n) {
					sn(e, { nonce: t && t.nonce }, n);
				},
				each: function (e, t) {
					var n,
						i = 0;
					if (Rt(e))
						for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
					else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
					return e;
				},
				makeArray: function (e, t) {
					var n = t || [];
					return (
						e != null &&
							(Rt(Object(e))
								? r.merge(n, typeof e == "string" ? [e] : e)
								: K.call(n, e)),
						n
					);
				},
				inArray: function (e, t, n) {
					return t == null ? -1 : ie.call(t, e, n);
				},
				merge: function (e, t) {
					for (var n = +t.length, i = 0, o = e.length; i < n; i++)
						e[o++] = t[i];
					return (e.length = o), e;
				},
				grep: function (e, t, n) {
					for (var i, o = [], a = 0, s = e.length, c = !n; a < s; a++)
						(i = !t(e[a], a)), i !== c && o.push(e[a]);
					return o;
				},
				map: function (e, t, n) {
					var i,
						o,
						a = 0,
						s = [];
					if (Rt(e))
						for (i = e.length; a < i; a++)
							(o = t(e[a], a, n)), o != null && s.push(o);
					else for (a in e) (o = t(e[a], a, n)), o != null && s.push(o);
					return I(s);
				},
				guid: 1,
				support: z,
			}),
			typeof Symbol == "function" &&
				(r.fn[Symbol.iterator] = j[Symbol.iterator]),
			r.each(
				"Boolean Number String Function Array Date RegExp Object Error Symbol".split(
					" "
				),
				function (e, t) {
					re["[object " + t + "]"] = t.toLowerCase();
				}
			);
		function Rt(e) {
			var t = !!e && "length" in e && e.length,
				n = Ue(e);
			return H(e) || Le(e)
				? !1
				: n === "array" ||
						t === 0 ||
						(typeof t == "number" && t > 0 && t - 1 in e);
		}
		var He = (function (e) {
			var t,
				n,
				i,
				o,
				a,
				s,
				c,
				f,
				p,
				m,
				T,
				g,
				v,
				D,
				q,
				N,
				ae,
				oe,
				me,
				Y = "sizzle" + 1 * new Date(),
				M = e.document,
				ge = 0,
				X = 0,
				ne = wt(),
				lt = wt(),
				Ct = wt(),
				ve = wt(),
				_e = function (u, l) {
					return u === l && (T = !0), 0;
				},
				Xe = {}.hasOwnProperty,
				ye = [],
				Me = ye.pop,
				Se = ye.push,
				qe = ye.push,
				Un = ye.slice,
				We = function (u, l) {
					for (var d = 0, b = u.length; d < b; d++) if (u[d] === l) return d;
					return -1;
				},
				Kt =
					"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				U = "[\\x20\\t\\r\\n\\f]",
				$e =
					"(?:\\\\[\\da-fA-F]{1,6}" +
					U +
					"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				Vn =
					"\\[" +
					U +
					"*(" +
					$e +
					")(?:" +
					U +
					"*([*^$|!~]?=)" +
					U +
					`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
					$e +
					"))|)" +
					U +
					"*\\]",
				Yt =
					":(" +
					$e +
					`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
					Vn +
					")*)|.*)\\)|)",
				sr = new RegExp(U + "+", "g"),
				St = new RegExp(
					"^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$",
					"g"
				),
				ur = new RegExp("^" + U + "*," + U + "*"),
				Kn = new RegExp("^" + U + "*([>+~]|" + U + ")" + U + "*"),
				fr = new RegExp(U + "|>"),
				lr = new RegExp(Yt),
				cr = new RegExp("^" + $e + "$"),
				At = {
					ID: new RegExp("^#(" + $e + ")"),
					CLASS: new RegExp("^\\.(" + $e + ")"),
					TAG: new RegExp("^(" + $e + "|[*])"),
					ATTR: new RegExp("^" + Vn),
					PSEUDO: new RegExp("^" + Yt),
					CHILD: new RegExp(
						"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
							U +
							"*(even|odd|(([+-]|)(\\d*)n|)" +
							U +
							"*(?:([+-]|)" +
							U +
							"*(\\d+)|))" +
							U +
							"*\\)|)",
						"i"
					),
					bool: new RegExp("^(?:" + Kt + ")$", "i"),
					needsContext: new RegExp(
						"^" +
							U +
							"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
							U +
							"*((?:-\\d)?\\d*)" +
							U +
							"*\\)|)(?=[^-]|$)",
						"i"
					),
				},
				dr = /HTML$/i,
				hr = /^(?:input|select|textarea|button)$/i,
				pr = /^h\d$/i,
				ct = /^[^{]+\{\s*\[native \w/,
				gr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				Qt = /[+~]/,
				Pe = new RegExp(
					"\\\\[\\da-fA-F]{1,6}" + U + "?|\\\\([^\\r\\n\\f])",
					"g"
				),
				Re = function (u, l) {
					var d = "0x" + u.slice(1) - 65536;
					return (
						l ||
						(d < 0
							? String.fromCharCode(d + 65536)
							: String.fromCharCode((d >> 10) | 55296, (d & 1023) | 56320))
					);
				},
				Yn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				Qn = function (u, l) {
					return l
						? u === "\0"
							? "�"
							: u.slice(0, -1) +
							  "\\" +
							  u.charCodeAt(u.length - 1).toString(16) +
							  " "
						: "\\" + u;
				},
				Jn = function () {
					g();
				},
				yr = Nt(
					function (u) {
						return u.disabled === !0 && u.nodeName.toLowerCase() === "fieldset";
					},
					{ dir: "parentNode", next: "legend" }
				);
			try {
				qe.apply((ye = Un.call(M.childNodes)), M.childNodes),
					ye[M.childNodes.length].nodeType;
			} catch {
				qe = {
					apply: ye.length
						? function (l, d) {
								Se.apply(l, Un.call(d));
						  }
						: function (l, d) {
								for (var b = l.length, h = 0; (l[b++] = d[h++]); );
								l.length = b - 1;
						  },
				};
			}
			function Q(u, l, d, b) {
				var h,
					x,
					C,
					S,
					A,
					P,
					F,
					L = l && l.ownerDocument,
					B = l ? l.nodeType : 9;
				if (
					((d = d || []),
					typeof u != "string" || !u || (B !== 1 && B !== 9 && B !== 11))
				)
					return d;
				if (!b && (g(l), (l = l || v), q)) {
					if (B !== 11 && (A = gr.exec(u)))
						if ((h = A[1])) {
							if (B === 9)
								if ((C = l.getElementById(h))) {
									if (C.id === h) return d.push(C), d;
								} else return d;
							else if (L && (C = L.getElementById(h)) && me(l, C) && C.id === h)
								return d.push(C), d;
						} else {
							if (A[2]) return qe.apply(d, l.getElementsByTagName(u)), d;
							if (
								(h = A[3]) &&
								n.getElementsByClassName &&
								l.getElementsByClassName
							)
								return qe.apply(d, l.getElementsByClassName(h)), d;
						}
					if (
						n.qsa &&
						!ve[u + " "] &&
						(!N || !N.test(u)) &&
						(B !== 1 || l.nodeName.toLowerCase() !== "object")
					) {
						if (((F = u), (L = l), B === 1 && (fr.test(u) || Kn.test(u)))) {
							for (
								L = (Qt.test(u) && Zt(l.parentNode)) || l,
									(L !== l || !n.scope) &&
										((S = l.getAttribute("id"))
											? (S = S.replace(Yn, Qn))
											: l.setAttribute("id", (S = Y))),
									P = s(u),
									x = P.length;
								x--;

							)
								P[x] = (S ? "#" + S : ":scope") + " " + Et(P[x]);
							F = P.join(",");
						}
						try {
							return qe.apply(d, L.querySelectorAll(F)), d;
						} catch {
							ve(u, !0);
						} finally {
							S === Y && l.removeAttribute("id");
						}
					}
				}
				return f(u.replace(St, "$1"), l, d, b);
			}
			function wt() {
				var u = [];
				function l(d, b) {
					return (
						u.push(d + " ") > i.cacheLength && delete l[u.shift()],
						(l[d + " "] = b)
					);
				}
				return l;
			}
			function Ee(u) {
				return (u[Y] = !0), u;
			}
			function Ae(u) {
				var l = v.createElement("fieldset");
				try {
					return !!u(l);
				} catch {
					return !1;
				} finally {
					l.parentNode && l.parentNode.removeChild(l), (l = null);
				}
			}
			function Jt(u, l) {
				for (var d = u.split("|"), b = d.length; b--; ) i.attrHandle[d[b]] = l;
			}
			function Zn(u, l) {
				var d = l && u,
					b =
						d &&
						u.nodeType === 1 &&
						l.nodeType === 1 &&
						u.sourceIndex - l.sourceIndex;
				if (b) return b;
				if (d) {
					for (; (d = d.nextSibling); ) if (d === l) return -1;
				}
				return u ? 1 : -1;
			}
			function mr(u) {
				return function (l) {
					var d = l.nodeName.toLowerCase();
					return d === "input" && l.type === u;
				};
			}
			function vr(u) {
				return function (l) {
					var d = l.nodeName.toLowerCase();
					return (d === "input" || d === "button") && l.type === u;
				};
			}
			function ei(u) {
				return function (l) {
					return "form" in l
						? l.parentNode && l.disabled === !1
							? "label" in l
								? "label" in l.parentNode
									? l.parentNode.disabled === u
									: l.disabled === u
								: l.isDisabled === u || (l.isDisabled !== !u && yr(l) === u)
							: l.disabled === u
						: "label" in l
						? l.disabled === u
						: !1;
				};
			}
			function ze(u) {
				return Ee(function (l) {
					return (
						(l = +l),
						Ee(function (d, b) {
							for (var h, x = u([], d.length, l), C = x.length; C--; )
								d[(h = x[C])] && (d[h] = !(b[h] = d[h]));
						})
					);
				});
			}
			function Zt(u) {
				return u && typeof u.getElementsByTagName < "u" && u;
			}
			(n = Q.support = {}),
				(a = Q.isXML =
					function (u) {
						var l = u && u.namespaceURI,
							d = u && (u.ownerDocument || u).documentElement;
						return !dr.test(l || (d && d.nodeName) || "HTML");
					}),
				(g = Q.setDocument =
					function (u) {
						var l,
							d,
							b = u ? u.ownerDocument || u : M;
						return (
							b == v ||
								b.nodeType !== 9 ||
								!b.documentElement ||
								((v = b),
								(D = v.documentElement),
								(q = !a(v)),
								M != v &&
									(d = v.defaultView) &&
									d.top !== d &&
									(d.addEventListener
										? d.addEventListener("unload", Jn, !1)
										: d.attachEvent && d.attachEvent("onunload", Jn)),
								(n.scope = Ae(function (h) {
									return (
										D.appendChild(h).appendChild(v.createElement("div")),
										typeof h.querySelectorAll < "u" &&
											!h.querySelectorAll(":scope fieldset div").length
									);
								})),
								(n.cssHas = Ae(function () {
									try {
										return v.querySelector(":has(*,:jqfake)"), !1;
									} catch {
										return !0;
									}
								})),
								(n.attributes = Ae(function (h) {
									return (h.className = "i"), !h.getAttribute("className");
								})),
								(n.getElementsByTagName = Ae(function (h) {
									return (
										h.appendChild(v.createComment("")),
										!h.getElementsByTagName("*").length
									);
								})),
								(n.getElementsByClassName = ct.test(v.getElementsByClassName)),
								(n.getById = Ae(function (h) {
									return (
										(D.appendChild(h).id = Y),
										!v.getElementsByName || !v.getElementsByName(Y).length
									);
								})),
								n.getById
									? ((i.filter.ID = function (h) {
											var x = h.replace(Pe, Re);
											return function (C) {
												return C.getAttribute("id") === x;
											};
									  }),
									  (i.find.ID = function (h, x) {
											if (typeof x.getElementById < "u" && q) {
												var C = x.getElementById(h);
												return C ? [C] : [];
											}
									  }))
									: ((i.filter.ID = function (h) {
											var x = h.replace(Pe, Re);
											return function (C) {
												var S =
													typeof C.getAttributeNode < "u" &&
													C.getAttributeNode("id");
												return S && S.value === x;
											};
									  }),
									  (i.find.ID = function (h, x) {
											if (typeof x.getElementById < "u" && q) {
												var C,
													S,
													A,
													P = x.getElementById(h);
												if (P) {
													if (
														((C = P.getAttributeNode("id")), C && C.value === h)
													)
														return [P];
													for (
														A = x.getElementsByName(h), S = 0;
														(P = A[S++]);

													)
														if (
															((C = P.getAttributeNode("id")),
															C && C.value === h)
														)
															return [P];
												}
												return [];
											}
									  })),
								(i.find.TAG = n.getElementsByTagName
									? function (h, x) {
											if (typeof x.getElementsByTagName < "u")
												return x.getElementsByTagName(h);
											if (n.qsa) return x.querySelectorAll(h);
									  }
									: function (h, x) {
											var C,
												S = [],
												A = 0,
												P = x.getElementsByTagName(h);
											if (h === "*") {
												for (; (C = P[A++]); ) C.nodeType === 1 && S.push(C);
												return S;
											}
											return P;
									  }),
								(i.find.CLASS =
									n.getElementsByClassName &&
									function (h, x) {
										if (typeof x.getElementsByClassName < "u" && q)
											return x.getElementsByClassName(h);
									}),
								(ae = []),
								(N = []),
								(n.qsa = ct.test(v.querySelectorAll)) &&
									(Ae(function (h) {
										var x;
										(D.appendChild(h).innerHTML =
											"<a id='" +
											Y +
											"'></a><select id='" +
											Y +
											"-\r\\' msallowcapture=''><option selected=''></option></select>"),
											h.querySelectorAll("[msallowcapture^='']").length &&
												N.push("[*^$]=" + U + `*(?:''|"")`),
											h.querySelectorAll("[selected]").length ||
												N.push("\\[" + U + "*(?:value|" + Kt + ")"),
											h.querySelectorAll("[id~=" + Y + "-]").length ||
												N.push("~="),
											(x = v.createElement("input")),
											x.setAttribute("name", ""),
											h.appendChild(x),
											h.querySelectorAll("[name='']").length ||
												N.push(
													"\\[" + U + "*name" + U + "*=" + U + `*(?:''|"")`
												),
											h.querySelectorAll(":checked").length ||
												N.push(":checked"),
											h.querySelectorAll("a#" + Y + "+*").length ||
												N.push(".#.+[+~]"),
											h.querySelectorAll("\\\f"),
											N.push("[\\r\\n\\f]");
									}),
									Ae(function (h) {
										h.innerHTML =
											"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
										var x = v.createElement("input");
										x.setAttribute("type", "hidden"),
											h.appendChild(x).setAttribute("name", "D"),
											h.querySelectorAll("[name=d]").length &&
												N.push("name" + U + "*[*^$|!~]?="),
											h.querySelectorAll(":enabled").length !== 2 &&
												N.push(":enabled", ":disabled"),
											(D.appendChild(h).disabled = !0),
											h.querySelectorAll(":disabled").length !== 2 &&
												N.push(":enabled", ":disabled"),
											h.querySelectorAll("*,:x"),
											N.push(",.*:");
									})),
								(n.matchesSelector = ct.test(
									(oe =
										D.matches ||
										D.webkitMatchesSelector ||
										D.mozMatchesSelector ||
										D.oMatchesSelector ||
										D.msMatchesSelector)
								)) &&
									Ae(function (h) {
										(n.disconnectedMatch = oe.call(h, "*")),
											oe.call(h, "[s!='']:x"),
											ae.push("!=", Yt);
									}),
								n.cssHas || N.push(":has"),
								(N = N.length && new RegExp(N.join("|"))),
								(ae = ae.length && new RegExp(ae.join("|"))),
								(l = ct.test(D.compareDocumentPosition)),
								(me =
									l || ct.test(D.contains)
										? function (h, x) {
												var C = (h.nodeType === 9 && h.documentElement) || h,
													S = x && x.parentNode;
												return (
													h === S ||
													!!(
														S &&
														S.nodeType === 1 &&
														(C.contains
															? C.contains(S)
															: h.compareDocumentPosition &&
															  h.compareDocumentPosition(S) & 16)
													)
												);
										  }
										: function (h, x) {
												if (x) {
													for (; (x = x.parentNode); ) if (x === h) return !0;
												}
												return !1;
										  }),
								(_e = l
									? function (h, x) {
											if (h === x) return (T = !0), 0;
											var C =
												!h.compareDocumentPosition - !x.compareDocumentPosition;
											return (
												C ||
												((C =
													(h.ownerDocument || h) == (x.ownerDocument || x)
														? h.compareDocumentPosition(x)
														: 1),
												C & 1 ||
												(!n.sortDetached && x.compareDocumentPosition(h) === C)
													? h == v || (h.ownerDocument == M && me(M, h))
														? -1
														: x == v || (x.ownerDocument == M && me(M, x))
														? 1
														: m
														? We(m, h) - We(m, x)
														: 0
													: C & 4
													? -1
													: 1)
											);
									  }
									: function (h, x) {
											if (h === x) return (T = !0), 0;
											var C,
												S = 0,
												A = h.parentNode,
												P = x.parentNode,
												F = [h],
												L = [x];
											if (!A || !P)
												return h == v
													? -1
													: x == v
													? 1
													: A
													? -1
													: P
													? 1
													: m
													? We(m, h) - We(m, x)
													: 0;
											if (A === P) return Zn(h, x);
											for (C = h; (C = C.parentNode); ) F.unshift(C);
											for (C = x; (C = C.parentNode); ) L.unshift(C);
											for (; F[S] === L[S]; ) S++;
											return S
												? Zn(F[S], L[S])
												: F[S] == M
												? -1
												: L[S] == M
												? 1
												: 0;
									  })),
							v
						);
					}),
				(Q.matches = function (u, l) {
					return Q(u, null, null, l);
				}),
				(Q.matchesSelector = function (u, l) {
					if (
						(g(u),
						n.matchesSelector &&
							q &&
							!ve[l + " "] &&
							(!ae || !ae.test(l)) &&
							(!N || !N.test(l)))
					)
						try {
							var d = oe.call(u, l);
							if (
								d ||
								n.disconnectedMatch ||
								(u.document && u.document.nodeType !== 11)
							)
								return d;
						} catch {
							ve(l, !0);
						}
					return Q(l, v, null, [u]).length > 0;
				}),
				(Q.contains = function (u, l) {
					return (u.ownerDocument || u) != v && g(u), me(u, l);
				}),
				(Q.attr = function (u, l) {
					(u.ownerDocument || u) != v && g(u);
					var d = i.attrHandle[l.toLowerCase()],
						b =
							d && Xe.call(i.attrHandle, l.toLowerCase())
								? d(u, l, !q)
								: void 0;
					return b !== void 0
						? b
						: n.attributes || !q
						? u.getAttribute(l)
						: (b = u.getAttributeNode(l)) && b.specified
						? b.value
						: null;
				}),
				(Q.escape = function (u) {
					return (u + "").replace(Yn, Qn);
				}),
				(Q.error = function (u) {
					throw new Error("Syntax error, unrecognized expression: " + u);
				}),
				(Q.uniqueSort = function (u) {
					var l,
						d = [],
						b = 0,
						h = 0;
					if (
						((T = !n.detectDuplicates),
						(m = !n.sortStable && u.slice(0)),
						u.sort(_e),
						T)
					) {
						for (; (l = u[h++]); ) l === u[h] && (b = d.push(h));
						for (; b--; ) u.splice(d[b], 1);
					}
					return (m = null), u;
				}),
				(o = Q.getText =
					function (u) {
						var l,
							d = "",
							b = 0,
							h = u.nodeType;
						if (h) {
							if (h === 1 || h === 9 || h === 11) {
								if (typeof u.textContent == "string") return u.textContent;
								for (u = u.firstChild; u; u = u.nextSibling) d += o(u);
							} else if (h === 3 || h === 4) return u.nodeValue;
						} else for (; (l = u[b++]); ) d += o(l);
						return d;
					}),
				(i = Q.selectors =
					{
						cacheLength: 50,
						createPseudo: Ee,
						match: At,
						attrHandle: {},
						find: {},
						relative: {
							">": { dir: "parentNode", first: !0 },
							" ": { dir: "parentNode" },
							"+": { dir: "previousSibling", first: !0 },
							"~": { dir: "previousSibling" },
						},
						preFilter: {
							ATTR: function (u) {
								return (
									(u[1] = u[1].replace(Pe, Re)),
									(u[3] = (u[3] || u[4] || u[5] || "").replace(Pe, Re)),
									u[2] === "~=" && (u[3] = " " + u[3] + " "),
									u.slice(0, 4)
								);
							},
							CHILD: function (u) {
								return (
									(u[1] = u[1].toLowerCase()),
									u[1].slice(0, 3) === "nth"
										? (u[3] || Q.error(u[0]),
										  (u[4] = +(u[4]
												? u[5] + (u[6] || 1)
												: 2 * (u[3] === "even" || u[3] === "odd"))),
										  (u[5] = +(u[7] + u[8] || u[3] === "odd")))
										: u[3] && Q.error(u[0]),
									u
								);
							},
							PSEUDO: function (u) {
								var l,
									d = !u[6] && u[2];
								return At.CHILD.test(u[0])
									? null
									: (u[3]
											? (u[2] = u[4] || u[5] || "")
											: d &&
											  lr.test(d) &&
											  (l = s(d, !0)) &&
											  (l = d.indexOf(")", d.length - l) - d.length) &&
											  ((u[0] = u[0].slice(0, l)), (u[2] = d.slice(0, l))),
									  u.slice(0, 3));
							},
						},
						filter: {
							TAG: function (u) {
								var l = u.replace(Pe, Re).toLowerCase();
								return u === "*"
									? function () {
											return !0;
									  }
									: function (d) {
											return d.nodeName && d.nodeName.toLowerCase() === l;
									  };
							},
							CLASS: function (u) {
								var l = ne[u + " "];
								return (
									l ||
									((l = new RegExp("(^|" + U + ")" + u + "(" + U + "|$)")) &&
										ne(u, function (d) {
											return l.test(
												(typeof d.className == "string" && d.className) ||
													(typeof d.getAttribute < "u" &&
														d.getAttribute("class")) ||
													""
											);
										}))
								);
							},
							ATTR: function (u, l, d) {
								return function (b) {
									var h = Q.attr(b, u);
									return h == null
										? l === "!="
										: l
										? ((h += ""),
										  l === "="
												? h === d
												: l === "!="
												? h !== d
												: l === "^="
												? d && h.indexOf(d) === 0
												: l === "*="
												? d && h.indexOf(d) > -1
												: l === "$="
												? d && h.slice(-d.length) === d
												: l === "~="
												? (" " + h.replace(sr, " ") + " ").indexOf(d) > -1
												: l === "|="
												? h === d || h.slice(0, d.length + 1) === d + "-"
												: !1)
										: !0;
								};
							},
							CHILD: function (u, l, d, b, h) {
								var x = u.slice(0, 3) !== "nth",
									C = u.slice(-4) !== "last",
									S = l === "of-type";
								return b === 1 && h === 0
									? function (A) {
											return !!A.parentNode;
									  }
									: function (A, P, F) {
											var L,
												B,
												J,
												R,
												se,
												ce,
												be = x !== C ? "nextSibling" : "previousSibling",
												te = A.parentNode,
												dt = S && A.nodeName.toLowerCase(),
												ht = !F && !S,
												xe = !1;
											if (te) {
												if (x) {
													for (; be; ) {
														for (R = A; (R = R[be]); )
															if (
																S
																	? R.nodeName.toLowerCase() === dt
																	: R.nodeType === 1
															)
																return !1;
														ce = be = u === "only" && !ce && "nextSibling";
													}
													return !0;
												}
												if (
													((ce = [C ? te.firstChild : te.lastChild]), C && ht)
												) {
													for (
														R = te,
															J = R[Y] || (R[Y] = {}),
															B = J[R.uniqueID] || (J[R.uniqueID] = {}),
															L = B[u] || [],
															se = L[0] === ge && L[1],
															xe = se && L[2],
															R = se && te.childNodes[se];
														(R =
															(++se && R && R[be]) ||
															(xe = se = 0) ||
															ce.pop());

													)
														if (R.nodeType === 1 && ++xe && R === A) {
															B[u] = [ge, se, xe];
															break;
														}
												} else if (
													(ht &&
														((R = A),
														(J = R[Y] || (R[Y] = {})),
														(B = J[R.uniqueID] || (J[R.uniqueID] = {})),
														(L = B[u] || []),
														(se = L[0] === ge && L[1]),
														(xe = se)),
													xe === !1)
												)
													for (
														;
														(R =
															(++se && R && R[be]) ||
															(xe = se = 0) ||
															ce.pop()) &&
														!(
															(S
																? R.nodeName.toLowerCase() === dt
																: R.nodeType === 1) &&
															++xe &&
															(ht &&
																((J = R[Y] || (R[Y] = {})),
																(B = J[R.uniqueID] || (J[R.uniqueID] = {})),
																(B[u] = [ge, xe])),
															R === A)
														);

													);
												return (
													(xe -= h), xe === b || (xe % b === 0 && xe / b >= 0)
												);
											}
									  };
							},
							PSEUDO: function (u, l) {
								var d,
									b =
										i.pseudos[u] ||
										i.setFilters[u.toLowerCase()] ||
										Q.error("unsupported pseudo: " + u);
								return b[Y]
									? b(l)
									: b.length > 1
									? ((d = [u, u, "", l]),
									  i.setFilters.hasOwnProperty(u.toLowerCase())
											? Ee(function (h, x) {
													for (var C, S = b(h, l), A = S.length; A--; )
														(C = We(h, S[A])), (h[C] = !(x[C] = S[A]));
											  })
											: function (h) {
													return b(h, 0, d);
											  })
									: b;
							},
						},
						pseudos: {
							not: Ee(function (u) {
								var l = [],
									d = [],
									b = c(u.replace(St, "$1"));
								return b[Y]
									? Ee(function (h, x, C, S) {
											for (var A, P = b(h, null, S, []), F = h.length; F--; )
												(A = P[F]) && (h[F] = !(x[F] = A));
									  })
									: function (h, x, C) {
											return (
												(l[0] = h), b(l, null, C, d), (l[0] = null), !d.pop()
											);
									  };
							}),
							has: Ee(function (u) {
								return function (l) {
									return Q(u, l).length > 0;
								};
							}),
							contains: Ee(function (u) {
								return (
									(u = u.replace(Pe, Re)),
									function (l) {
										return (l.textContent || o(l)).indexOf(u) > -1;
									}
								);
							}),
							lang: Ee(function (u) {
								return (
									cr.test(u || "") || Q.error("unsupported lang: " + u),
									(u = u.replace(Pe, Re).toLowerCase()),
									function (l) {
										var d;
										do
											if (
												(d = q
													? l.lang
													: l.getAttribute("xml:lang") ||
													  l.getAttribute("lang"))
											)
												return (
													(d = d.toLowerCase()),
													d === u || d.indexOf(u + "-") === 0
												);
										while ((l = l.parentNode) && l.nodeType === 1);
										return !1;
									}
								);
							}),
							target: function (u) {
								var l = e.location && e.location.hash;
								return l && l.slice(1) === u.id;
							},
							root: function (u) {
								return u === D;
							},
							focus: function (u) {
								return (
									u === v.activeElement &&
									(!v.hasFocus || v.hasFocus()) &&
									!!(u.type || u.href || ~u.tabIndex)
								);
							},
							enabled: ei(!1),
							disabled: ei(!0),
							checked: function (u) {
								var l = u.nodeName.toLowerCase();
								return (
									(l === "input" && !!u.checked) ||
									(l === "option" && !!u.selected)
								);
							},
							selected: function (u) {
								return (
									u.parentNode && u.parentNode.selectedIndex, u.selected === !0
								);
							},
							empty: function (u) {
								for (u = u.firstChild; u; u = u.nextSibling)
									if (u.nodeType < 6) return !1;
								return !0;
							},
							parent: function (u) {
								return !i.pseudos.empty(u);
							},
							header: function (u) {
								return pr.test(u.nodeName);
							},
							input: function (u) {
								return hr.test(u.nodeName);
							},
							button: function (u) {
								var l = u.nodeName.toLowerCase();
								return (l === "input" && u.type === "button") || l === "button";
							},
							text: function (u) {
								var l;
								return (
									u.nodeName.toLowerCase() === "input" &&
									u.type === "text" &&
									((l = u.getAttribute("type")) == null ||
										l.toLowerCase() === "text")
								);
							},
							first: ze(function () {
								return [0];
							}),
							last: ze(function (u, l) {
								return [l - 1];
							}),
							eq: ze(function (u, l, d) {
								return [d < 0 ? d + l : d];
							}),
							even: ze(function (u, l) {
								for (var d = 0; d < l; d += 2) u.push(d);
								return u;
							}),
							odd: ze(function (u, l) {
								for (var d = 1; d < l; d += 2) u.push(d);
								return u;
							}),
							lt: ze(function (u, l, d) {
								for (var b = d < 0 ? d + l : d > l ? l : d; --b >= 0; )
									u.push(b);
								return u;
							}),
							gt: ze(function (u, l, d) {
								for (var b = d < 0 ? d + l : d; ++b < l; ) u.push(b);
								return u;
							}),
						},
					}),
				(i.pseudos.nth = i.pseudos.eq);
			for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
				i.pseudos[t] = mr(t);
			for (t in { submit: !0, reset: !0 }) i.pseudos[t] = vr(t);
			function ti() {}
			(ti.prototype = i.filters = i.pseudos),
				(i.setFilters = new ti()),
				(s = Q.tokenize =
					function (u, l) {
						var d,
							b,
							h,
							x,
							C,
							S,
							A,
							P = lt[u + " "];
						if (P) return l ? 0 : P.slice(0);
						for (C = u, S = [], A = i.preFilter; C; ) {
							(!d || (b = ur.exec(C))) &&
								(b && (C = C.slice(b[0].length) || C), S.push((h = []))),
								(d = !1),
								(b = Kn.exec(C)) &&
									((d = b.shift()),
									h.push({ value: d, type: b[0].replace(St, " ") }),
									(C = C.slice(d.length)));
							for (x in i.filter)
								(b = At[x].exec(C)) &&
									(!A[x] || (b = A[x](b))) &&
									((d = b.shift()),
									h.push({ value: d, type: x, matches: b }),
									(C = C.slice(d.length)));
							if (!d) break;
						}
						return l ? C.length : C ? Q.error(u) : lt(u, S).slice(0);
					});
			function Et(u) {
				for (var l = 0, d = u.length, b = ""; l < d; l++) b += u[l].value;
				return b;
			}
			function Nt(u, l, d) {
				var b = l.dir,
					h = l.next,
					x = h || b,
					C = d && x === "parentNode",
					S = X++;
				return l.first
					? function (A, P, F) {
							for (; (A = A[b]); ) if (A.nodeType === 1 || C) return u(A, P, F);
							return !1;
					  }
					: function (A, P, F) {
							var L,
								B,
								J,
								R = [ge, S];
							if (F) {
								for (; (A = A[b]); )
									if ((A.nodeType === 1 || C) && u(A, P, F)) return !0;
							} else
								for (; (A = A[b]); )
									if (A.nodeType === 1 || C)
										if (
											((J = A[Y] || (A[Y] = {})),
											(B = J[A.uniqueID] || (J[A.uniqueID] = {})),
											h && h === A.nodeName.toLowerCase())
										)
											A = A[b] || A;
										else {
											if ((L = B[x]) && L[0] === ge && L[1] === S)
												return (R[2] = L[2]);
											if (((B[x] = R), (R[2] = u(A, P, F)))) return !0;
										}
							return !1;
					  };
			}
			function en(u) {
				return u.length > 1
					? function (l, d, b) {
							for (var h = u.length; h--; ) if (!u[h](l, d, b)) return !1;
							return !0;
					  }
					: u[0];
			}
			function br(u, l, d) {
				for (var b = 0, h = l.length; b < h; b++) Q(u, l[b], d);
				return d;
			}
			function Dt(u, l, d, b, h) {
				for (var x, C = [], S = 0, A = u.length, P = l != null; S < A; S++)
					(x = u[S]) && (!d || d(x, b, h)) && (C.push(x), P && l.push(S));
				return C;
			}
			function tn(u, l, d, b, h, x) {
				return (
					b && !b[Y] && (b = tn(b)),
					h && !h[Y] && (h = tn(h, x)),
					Ee(function (C, S, A, P) {
						var F,
							L,
							B,
							J = [],
							R = [],
							se = S.length,
							ce = C || br(l || "*", A.nodeType ? [A] : A, []),
							be = u && (C || !l) ? Dt(ce, J, u, A, P) : ce,
							te = d ? (h || (C ? u : se || b) ? [] : S) : be;
						if ((d && d(be, te, A, P), b))
							for (F = Dt(te, R), b(F, [], A, P), L = F.length; L--; )
								(B = F[L]) && (te[R[L]] = !(be[R[L]] = B));
						if (C) {
							if (h || u) {
								if (h) {
									for (F = [], L = te.length; L--; )
										(B = te[L]) && F.push((be[L] = B));
									h(null, (te = []), F, P);
								}
								for (L = te.length; L--; )
									(B = te[L]) &&
										(F = h ? We(C, B) : J[L]) > -1 &&
										(C[F] = !(S[F] = B));
							}
						} else (te = Dt(te === S ? te.splice(se, te.length) : te)), h ? h(null, S, te, P) : qe.apply(S, te);
					})
				);
			}
			function nn(u) {
				for (
					var l,
						d,
						b,
						h = u.length,
						x = i.relative[u[0].type],
						C = x || i.relative[" "],
						S = x ? 1 : 0,
						A = Nt(
							function (L) {
								return L === l;
							},
							C,
							!0
						),
						P = Nt(
							function (L) {
								return We(l, L) > -1;
							},
							C,
							!0
						),
						F = [
							function (L, B, J) {
								var R =
									(!x && (J || B !== p)) ||
									((l = B).nodeType ? A(L, B, J) : P(L, B, J));
								return (l = null), R;
							},
						];
					S < h;
					S++
				)
					if ((d = i.relative[u[S].type])) F = [Nt(en(F), d)];
					else {
						if (((d = i.filter[u[S].type].apply(null, u[S].matches)), d[Y])) {
							for (b = ++S; b < h && !i.relative[u[b].type]; b++);
							return tn(
								S > 1 && en(F),
								S > 1 &&
									Et(
										u
											.slice(0, S - 1)
											.concat({ value: u[S - 2].type === " " ? "*" : "" })
									).replace(St, "$1"),
								d,
								S < b && nn(u.slice(S, b)),
								b < h && nn((u = u.slice(b))),
								b < h && Et(u)
							);
						}
						F.push(d);
					}
				return en(F);
			}
			function xr(u, l) {
				var d = l.length > 0,
					b = u.length > 0,
					h = function (x, C, S, A, P) {
						var F,
							L,
							B,
							J = 0,
							R = "0",
							se = x && [],
							ce = [],
							be = p,
							te = x || (b && i.find.TAG("*", P)),
							dt = (ge += be == null ? 1 : Math.random() || 0.1),
							ht = te.length;
						for (
							P && (p = C == v || C || P);
							R !== ht && (F = te[R]) != null;
							R++
						) {
							if (b && F) {
								for (
									L = 0, !C && F.ownerDocument != v && (g(F), (S = !q));
									(B = u[L++]);

								)
									if (B(F, C || v, S)) {
										A.push(F);
										break;
									}
								P && (ge = dt);
							}
							d && ((F = !B && F) && J--, x && se.push(F));
						}
						if (((J += R), d && R !== J)) {
							for (L = 0; (B = l[L++]); ) B(se, ce, C, S);
							if (x) {
								if (J > 0) for (; R--; ) se[R] || ce[R] || (ce[R] = Me.call(A));
								ce = Dt(ce);
							}
							qe.apply(A, ce),
								P && !x && ce.length > 0 && J + l.length > 1 && Q.uniqueSort(A);
						}
						return P && ((ge = dt), (p = be)), se;
					};
				return d ? Ee(h) : h;
			}
			return (
				(c = Q.compile =
					function (u, l) {
						var d,
							b = [],
							h = [],
							x = Ct[u + " "];
						if (!x) {
							for (l || (l = s(u)), d = l.length; d--; )
								(x = nn(l[d])), x[Y] ? b.push(x) : h.push(x);
							(x = Ct(u, xr(h, b))), (x.selector = u);
						}
						return x;
					}),
				(f = Q.select =
					function (u, l, d, b) {
						var h,
							x,
							C,
							S,
							A,
							P = typeof u == "function" && u,
							F = !b && s((u = P.selector || u));
						if (((d = d || []), F.length === 1)) {
							if (
								((x = F[0] = F[0].slice(0)),
								x.length > 2 &&
									(C = x[0]).type === "ID" &&
									l.nodeType === 9 &&
									q &&
									i.relative[x[1].type])
							) {
								if (
									((l = (i.find.ID(C.matches[0].replace(Pe, Re), l) || [])[0]),
									l)
								)
									P && (l = l.parentNode);
								else return d;
								u = u.slice(x.shift().value.length);
							}
							for (
								h = At.needsContext.test(u) ? 0 : x.length;
								h-- && ((C = x[h]), !i.relative[(S = C.type)]);

							)
								if (
									(A = i.find[S]) &&
									(b = A(
										C.matches[0].replace(Pe, Re),
										(Qt.test(x[0].type) && Zt(l.parentNode)) || l
									))
								) {
									if ((x.splice(h, 1), (u = b.length && Et(x)), !u))
										return qe.apply(d, b), d;
									break;
								}
						}
						return (
							(P || c(u, F))(
								b,
								l,
								!q,
								d,
								!l || (Qt.test(u) && Zt(l.parentNode)) || l
							),
							d
						);
					}),
				(n.sortStable = Y.split("").sort(_e).join("") === Y),
				(n.detectDuplicates = !!T),
				g(),
				(n.sortDetached = Ae(function (u) {
					return u.compareDocumentPosition(v.createElement("fieldset")) & 1;
				})),
				Ae(function (u) {
					return (
						(u.innerHTML = "<a href='#'></a>"),
						u.firstChild.getAttribute("href") === "#"
					);
				}) ||
					Jt("type|href|height|width", function (u, l, d) {
						if (!d)
							return u.getAttribute(l, l.toLowerCase() === "type" ? 1 : 2);
					}),
				(!n.attributes ||
					!Ae(function (u) {
						return (
							(u.innerHTML = "<input/>"),
							u.firstChild.setAttribute("value", ""),
							u.firstChild.getAttribute("value") === ""
						);
					})) &&
					Jt("value", function (u, l, d) {
						if (!d && u.nodeName.toLowerCase() === "input")
							return u.defaultValue;
					}),
				Ae(function (u) {
					return u.getAttribute("disabled") == null;
				}) ||
					Jt(Kt, function (u, l, d) {
						var b;
						if (!d)
							return u[l] === !0
								? l.toLowerCase()
								: (b = u.getAttributeNode(l)) && b.specified
								? b.value
								: null;
					}),
				Q
			);
		})(y);
		(r.find = He),
			(r.expr = He.selectors),
			(r.expr[":"] = r.expr.pseudos),
			(r.uniqueSort = r.unique = He.uniqueSort),
			(r.text = He.getText),
			(r.isXMLDoc = He.isXML),
			(r.contains = He.contains),
			(r.escapeSelector = He.escape);
		var Ve = function (e, t, n) {
				for (var i = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
					if (e.nodeType === 1) {
						if (o && r(e).is(n)) break;
						i.push(e);
					}
				return i;
			},
			fn = function (e, t) {
				for (var n = []; e; e = e.nextSibling)
					e.nodeType === 1 && e !== t && n.push(e);
				return n;
			},
			ln = r.expr.match.needsContext;
		function Te(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
		}
		var cn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
		function Lt(e, t, n) {
			return H(t)
				? r.grep(e, function (i, o) {
						return !!t.call(i, o, i) !== n;
				  })
				: t.nodeType
				? r.grep(e, function (i) {
						return (i === t) !== n;
				  })
				: typeof t != "string"
				? r.grep(e, function (i) {
						return ie.call(t, i) > -1 !== n;
				  })
				: r.filter(t, e, n);
		}
		(r.filter = function (e, t, n) {
			var i = t[0];
			return (
				n && (e = ":not(" + e + ")"),
				t.length === 1 && i.nodeType === 1
					? r.find.matchesSelector(i, e)
						? [i]
						: []
					: r.find.matches(
							e,
							r.grep(t, function (o) {
								return o.nodeType === 1;
							})
					  )
			);
		}),
			r.fn.extend({
				find: function (e) {
					var t,
						n,
						i = this.length,
						o = this;
					if (typeof e != "string")
						return this.pushStack(
							r(e).filter(function () {
								for (t = 0; t < i; t++) if (r.contains(o[t], this)) return !0;
							})
						);
					for (n = this.pushStack([]), t = 0; t < i; t++) r.find(e, o[t], n);
					return i > 1 ? r.uniqueSort(n) : n;
				},
				filter: function (e) {
					return this.pushStack(Lt(this, e || [], !1));
				},
				not: function (e) {
					return this.pushStack(Lt(this, e || [], !0));
				},
				is: function (e) {
					return !!Lt(
						this,
						typeof e == "string" && ln.test(e) ? r(e) : e || [],
						!1
					).length;
				},
			});
		var dn,
			li = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
			ci = (r.fn.init = function (e, t, n) {
				var i, o;
				if (!e) return this;
				if (((n = n || dn), typeof e == "string"))
					if (
						(e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
							? (i = [null, e, null])
							: (i = li.exec(e)),
						i && (i[1] || !t))
					)
						if (i[1]) {
							if (
								((t = t instanceof r ? t[0] : t),
								r.merge(
									this,
									r.parseHTML(
										i[1],
										t && t.nodeType ? t.ownerDocument || t : O,
										!0
									)
								),
								cn.test(i[1]) && r.isPlainObject(t))
							)
								for (i in t) H(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
							return this;
						} else
							return (
								(o = O.getElementById(i[2])),
								o && ((this[0] = o), (this.length = 1)),
								this
							);
					else
						return !t || t.jquery
							? (t || n).find(e)
							: this.constructor(t).find(e);
				else {
					if (e.nodeType) return (this[0] = e), (this.length = 1), this;
					if (H(e)) return n.ready !== void 0 ? n.ready(e) : e(r);
				}
				return r.makeArray(e, this);
			});
		(ci.prototype = r.fn), (dn = r(O));
		var di = /^(?:parents|prev(?:Until|All))/,
			hi = { children: !0, contents: !0, next: !0, prev: !0 };
		r.fn.extend({
			has: function (e) {
				var t = r(e, this),
					n = t.length;
				return this.filter(function () {
					for (var i = 0; i < n; i++) if (r.contains(this, t[i])) return !0;
				});
			},
			closest: function (e, t) {
				var n,
					i = 0,
					o = this.length,
					a = [],
					s = typeof e != "string" && r(e);
				if (!ln.test(e)) {
					for (; i < o; i++)
						for (n = this[i]; n && n !== t; n = n.parentNode)
							if (
								n.nodeType < 11 &&
								(s
									? s.index(n) > -1
									: n.nodeType === 1 && r.find.matchesSelector(n, e))
							) {
								a.push(n);
								break;
							}
				}
				return this.pushStack(a.length > 1 ? r.uniqueSort(a) : a);
			},
			index: function (e) {
				return e
					? typeof e == "string"
						? ie.call(r(e), this[0])
						: ie.call(this, e.jquery ? e[0] : e)
					: this[0] && this[0].parentNode
					? this.first().prevAll().length
					: -1;
			},
			add: function (e, t) {
				return this.pushStack(r.uniqueSort(r.merge(this.get(), r(e, t))));
			},
			addBack: function (e) {
				return this.add(
					e == null ? this.prevObject : this.prevObject.filter(e)
				);
			},
		});
		function hn(e, t) {
			for (; (e = e[t]) && e.nodeType !== 1; );
			return e;
		}
		r.each(
			{
				parent: function (e) {
					var t = e.parentNode;
					return t && t.nodeType !== 11 ? t : null;
				},
				parents: function (e) {
					return Ve(e, "parentNode");
				},
				parentsUntil: function (e, t, n) {
					return Ve(e, "parentNode", n);
				},
				next: function (e) {
					return hn(e, "nextSibling");
				},
				prev: function (e) {
					return hn(e, "previousSibling");
				},
				nextAll: function (e) {
					return Ve(e, "nextSibling");
				},
				prevAll: function (e) {
					return Ve(e, "previousSibling");
				},
				nextUntil: function (e, t, n) {
					return Ve(e, "nextSibling", n);
				},
				prevUntil: function (e, t, n) {
					return Ve(e, "previousSibling", n);
				},
				siblings: function (e) {
					return fn((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
					return fn(e.firstChild);
				},
				contents: function (e) {
					return e.contentDocument != null && W(e.contentDocument)
						? e.contentDocument
						: (Te(e, "template") && (e = e.content || e),
						  r.merge([], e.childNodes));
				},
			},
			function (e, t) {
				r.fn[e] = function (n, i) {
					var o = r.map(this, t, n);
					return (
						e.slice(-5) !== "Until" && (i = n),
						i && typeof i == "string" && (o = r.filter(i, o)),
						this.length > 1 &&
							(hi[e] || r.uniqueSort(o), di.test(e) && o.reverse()),
						this.pushStack(o)
					);
				};
			}
		);
		var Ne = /[^\x20\t\r\n\f]+/g;
		function pi(e) {
			var t = {};
			return (
				r.each(e.match(Ne) || [], function (n, i) {
					t[i] = !0;
				}),
				t
			);
		}
		r.Callbacks = function (e) {
			e = typeof e == "string" ? pi(e) : r.extend({}, e);
			var t,
				n,
				i,
				o,
				a = [],
				s = [],
				c = -1,
				f = function () {
					for (o = o || e.once, i = t = !0; s.length; c = -1)
						for (n = s.shift(); ++c < a.length; )
							a[c].apply(n[0], n[1]) === !1 &&
								e.stopOnFalse &&
								((c = a.length), (n = !1));
					e.memory || (n = !1), (t = !1), o && (n ? (a = []) : (a = ""));
				},
				p = {
					add: function () {
						return (
							a &&
								(n && !t && ((c = a.length - 1), s.push(n)),
								(function m(T) {
									r.each(T, function (g, v) {
										H(v)
											? (!e.unique || !p.has(v)) && a.push(v)
											: v && v.length && Ue(v) !== "string" && m(v);
									});
								})(arguments),
								n && !t && f()),
							this
						);
					},
					remove: function () {
						return (
							r.each(arguments, function (m, T) {
								for (var g; (g = r.inArray(T, a, g)) > -1; )
									a.splice(g, 1), g <= c && c--;
							}),
							this
						);
					},
					has: function (m) {
						return m ? r.inArray(m, a) > -1 : a.length > 0;
					},
					empty: function () {
						return a && (a = []), this;
					},
					disable: function () {
						return (o = s = []), (a = n = ""), this;
					},
					disabled: function () {
						return !a;
					},
					lock: function () {
						return (o = s = []), !n && !t && (a = n = ""), this;
					},
					locked: function () {
						return !!o;
					},
					fireWith: function (m, T) {
						return (
							o ||
								((T = T || []),
								(T = [m, T.slice ? T.slice() : T]),
								s.push(T),
								t || f()),
							this
						);
					},
					fire: function () {
						return p.fireWith(this, arguments), this;
					},
					fired: function () {
						return !!i;
					},
				};
			return p;
		};
		function Ke(e) {
			return e;
		}
		function gt(e) {
			throw e;
		}
		function pn(e, t, n, i) {
			var o;
			try {
				e && H((o = e.promise))
					? o.call(e).done(t).fail(n)
					: e && H((o = e.then))
					? o.call(e, t, n)
					: t.apply(void 0, [e].slice(i));
			} catch (a) {
				n.apply(void 0, [a]);
			}
		}
		r.extend({
			Deferred: function (e) {
				var t = [
						[
							"notify",
							"progress",
							r.Callbacks("memory"),
							r.Callbacks("memory"),
							2,
						],
						[
							"resolve",
							"done",
							r.Callbacks("once memory"),
							r.Callbacks("once memory"),
							0,
							"resolved",
						],
						[
							"reject",
							"fail",
							r.Callbacks("once memory"),
							r.Callbacks("once memory"),
							1,
							"rejected",
						],
					],
					n = "pending",
					i = {
						state: function () {
							return n;
						},
						always: function () {
							return o.done(arguments).fail(arguments), this;
						},
						catch: function (a) {
							return i.then(null, a);
						},
						pipe: function () {
							var a = arguments;
							return r
								.Deferred(function (s) {
									r.each(t, function (c, f) {
										var p = H(a[f[4]]) && a[f[4]];
										o[f[1]](function () {
											var m = p && p.apply(this, arguments);
											m && H(m.promise)
												? m
														.promise()
														.progress(s.notify)
														.done(s.resolve)
														.fail(s.reject)
												: s[f[0] + "With"](this, p ? [m] : arguments);
										});
									}),
										(a = null);
								})
								.promise();
						},
						then: function (a, s, c) {
							var f = 0;
							function p(m, T, g, v) {
								return function () {
									var D = this,
										q = arguments,
										N = function () {
											var oe, me;
											if (!(m < f)) {
												if (((oe = g.apply(D, q)), oe === T.promise()))
													throw new TypeError("Thenable self-resolution");
												(me =
													oe &&
													(typeof oe == "object" || typeof oe == "function") &&
													oe.then),
													H(me)
														? v
															? me.call(oe, p(f, T, Ke, v), p(f, T, gt, v))
															: (f++,
															  me.call(
																	oe,
																	p(f, T, Ke, v),
																	p(f, T, gt, v),
																	p(f, T, Ke, T.notifyWith)
															  ))
														: (g !== Ke && ((D = void 0), (q = [oe])),
														  (v || T.resolveWith)(D, q));
											}
										},
										ae = v
											? N
											: function () {
													try {
														N();
													} catch (oe) {
														r.Deferred.exceptionHook &&
															r.Deferred.exceptionHook(oe, ae.stackTrace),
															m + 1 >= f &&
																(g !== gt && ((D = void 0), (q = [oe])),
																T.rejectWith(D, q));
													}
											  };
									m
										? ae()
										: (r.Deferred.getStackHook &&
												(ae.stackTrace = r.Deferred.getStackHook()),
										  y.setTimeout(ae));
								};
							}
							return r
								.Deferred(function (m) {
									t[0][3].add(p(0, m, H(c) ? c : Ke, m.notifyWith)),
										t[1][3].add(p(0, m, H(a) ? a : Ke)),
										t[2][3].add(p(0, m, H(s) ? s : gt));
								})
								.promise();
						},
						promise: function (a) {
							return a != null ? r.extend(a, i) : i;
						},
					},
					o = {};
				return (
					r.each(t, function (a, s) {
						var c = s[2],
							f = s[5];
						(i[s[1]] = c.add),
							f &&
								c.add(
									function () {
										n = f;
									},
									t[3 - a][2].disable,
									t[3 - a][3].disable,
									t[0][2].lock,
									t[0][3].lock
								),
							c.add(s[3].fire),
							(o[s[0]] = function () {
								return (
									o[s[0] + "With"](this === o ? void 0 : this, arguments), this
								);
							}),
							(o[s[0] + "With"] = c.fireWith);
					}),
					i.promise(o),
					e && e.call(o, o),
					o
				);
			},
			when: function (e) {
				var t = arguments.length,
					n = t,
					i = Array(n),
					o = _.call(arguments),
					a = r.Deferred(),
					s = function (c) {
						return function (f) {
							(i[c] = this),
								(o[c] = arguments.length > 1 ? _.call(arguments) : f),
								--t || a.resolveWith(i, o);
						};
					};
				if (
					t <= 1 &&
					(pn(e, a.done(s(n)).resolve, a.reject, !t),
					a.state() === "pending" || H(o[n] && o[n].then))
				)
					return a.then();
				for (; n--; ) pn(o[n], s(n), a.reject);
				return a.promise();
			},
		});
		var gi = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		(r.Deferred.exceptionHook = function (e, t) {
			y.console &&
				y.console.warn &&
				e &&
				gi.test(e.name) &&
				y.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
		}),
			(r.readyException = function (e) {
				y.setTimeout(function () {
					throw e;
				});
			});
		var jt = r.Deferred();
		(r.fn.ready = function (e) {
			return (
				jt.then(e).catch(function (t) {
					r.readyException(t);
				}),
				this
			);
		}),
			r.extend({
				isReady: !1,
				readyWait: 1,
				ready: function (e) {
					(e === !0 ? --r.readyWait : r.isReady) ||
						((r.isReady = !0),
						!(e !== !0 && --r.readyWait > 0) && jt.resolveWith(O, [r]));
				},
			}),
			(r.ready.then = jt.then);
		function yt() {
			O.removeEventListener("DOMContentLoaded", yt),
				y.removeEventListener("load", yt),
				r.ready();
		}
		O.readyState === "complete" ||
		(O.readyState !== "loading" && !O.documentElement.doScroll)
			? y.setTimeout(r.ready)
			: (O.addEventListener("DOMContentLoaded", yt),
			  y.addEventListener("load", yt));
		var Fe = function (e, t, n, i, o, a, s) {
				var c = 0,
					f = e.length,
					p = n == null;
				if (Ue(n) === "object") {
					o = !0;
					for (c in n) Fe(e, t, c, n[c], !0, a, s);
				} else if (
					i !== void 0 &&
					((o = !0),
					H(i) || (s = !0),
					p &&
						(s
							? (t.call(e, i), (t = null))
							: ((p = t),
							  (t = function (m, T, g) {
									return p.call(r(m), g);
							  }))),
					t)
				)
					for (; c < f; c++) t(e[c], n, s ? i : i.call(e[c], c, t(e[c], n)));
				return o ? e : p ? t.call(e) : f ? t(e[0], n) : a;
			},
			yi = /^-ms-/,
			mi = /-([a-z])/g;
		function vi(e, t) {
			return t.toUpperCase();
		}
		function De(e) {
			return e.replace(yi, "ms-").replace(mi, vi);
		}
		var nt = function (e) {
			return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
		};
		function it() {
			this.expando = r.expando + it.uid++;
		}
		(it.uid = 1),
			(it.prototype = {
				cache: function (e) {
					var t = e[this.expando];
					return (
						t ||
							((t = {}),
							nt(e) &&
								(e.nodeType
									? (e[this.expando] = t)
									: Object.defineProperty(e, this.expando, {
											value: t,
											configurable: !0,
									  }))),
						t
					);
				},
				set: function (e, t, n) {
					var i,
						o = this.cache(e);
					if (typeof t == "string") o[De(t)] = n;
					else for (i in t) o[De(i)] = t[i];
					return o;
				},
				get: function (e, t) {
					return t === void 0
						? this.cache(e)
						: e[this.expando] && e[this.expando][De(t)];
				},
				access: function (e, t, n) {
					return t === void 0 || (t && typeof t == "string" && n === void 0)
						? this.get(e, t)
						: (this.set(e, t, n), n !== void 0 ? n : t);
				},
				remove: function (e, t) {
					var n,
						i = e[this.expando];
					if (i !== void 0) {
						if (t !== void 0)
							for (
								Array.isArray(t)
									? (t = t.map(De))
									: ((t = De(t)), (t = (t in i) ? [t] : t.match(Ne) || [])),
									n = t.length;
								n--;

							)
								delete i[t[n]];
						(t === void 0 || r.isEmptyObject(i)) &&
							(e.nodeType
								? (e[this.expando] = void 0)
								: delete e[this.expando]);
					}
				},
				hasData: function (e) {
					var t = e[this.expando];
					return t !== void 0 && !r.isEmptyObject(t);
				},
			});
		var k = new it(),
			de = new it(),
			bi = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			xi = /[A-Z]/g;
		function Ti(e) {
			return e === "true"
				? !0
				: e === "false"
				? !1
				: e === "null"
				? null
				: e === +e + ""
				? +e
				: bi.test(e)
				? JSON.parse(e)
				: e;
		}
		function gn(e, t, n) {
			var i;
			if (n === void 0 && e.nodeType === 1)
				if (
					((i = "data-" + t.replace(xi, "-$&").toLowerCase()),
					(n = e.getAttribute(i)),
					typeof n == "string")
				) {
					try {
						n = Ti(n);
					} catch {}
					de.set(e, t, n);
				} else n = void 0;
			return n;
		}
		r.extend({
			hasData: function (e) {
				return de.hasData(e) || k.hasData(e);
			},
			data: function (e, t, n) {
				return de.access(e, t, n);
			},
			removeData: function (e, t) {
				de.remove(e, t);
			},
			_data: function (e, t, n) {
				return k.access(e, t, n);
			},
			_removeData: function (e, t) {
				k.remove(e, t);
			},
		}),
			r.fn.extend({
				data: function (e, t) {
					var n,
						i,
						o,
						a = this[0],
						s = a && a.attributes;
					if (e === void 0) {
						if (
							this.length &&
							((o = de.get(a)), a.nodeType === 1 && !k.get(a, "hasDataAttrs"))
						) {
							for (n = s.length; n--; )
								s[n] &&
									((i = s[n].name),
									i.indexOf("data-") === 0 &&
										((i = De(i.slice(5))), gn(a, i, o[i])));
							k.set(a, "hasDataAttrs", !0);
						}
						return o;
					}
					return typeof e == "object"
						? this.each(function () {
								de.set(this, e);
						  })
						: Fe(
								this,
								function (c) {
									var f;
									if (a && c === void 0)
										return (
											(f = de.get(a, e)),
											f !== void 0 || ((f = gn(a, e)), f !== void 0)
												? f
												: void 0
										);
									this.each(function () {
										de.set(this, e, c);
									});
								},
								null,
								t,
								arguments.length > 1,
								null,
								!0
						  );
				},
				removeData: function (e) {
					return this.each(function () {
						de.remove(this, e);
					});
				},
			}),
			r.extend({
				queue: function (e, t, n) {
					var i;
					if (e)
						return (
							(t = (t || "fx") + "queue"),
							(i = k.get(e, t)),
							n &&
								(!i || Array.isArray(n)
									? (i = k.access(e, t, r.makeArray(n)))
									: i.push(n)),
							i || []
						);
				},
				dequeue: function (e, t) {
					t = t || "fx";
					var n = r.queue(e, t),
						i = n.length,
						o = n.shift(),
						a = r._queueHooks(e, t),
						s = function () {
							r.dequeue(e, t);
						};
					o === "inprogress" && ((o = n.shift()), i--),
						o &&
							(t === "fx" && n.unshift("inprogress"),
							delete a.stop,
							o.call(e, s, a)),
						!i && a && a.empty.fire();
				},
				_queueHooks: function (e, t) {
					var n = t + "queueHooks";
					return (
						k.get(e, n) ||
						k.access(e, n, {
							empty: r.Callbacks("once memory").add(function () {
								k.remove(e, [t + "queue", n]);
							}),
						})
					);
				},
			}),
			r.fn.extend({
				queue: function (e, t) {
					var n = 2;
					return (
						typeof e != "string" && ((t = e), (e = "fx"), n--),
						arguments.length < n
							? r.queue(this[0], e)
							: t === void 0
							? this
							: this.each(function () {
									var i = r.queue(this, e, t);
									r._queueHooks(this, e),
										e === "fx" && i[0] !== "inprogress" && r.dequeue(this, e);
							  })
					);
				},
				dequeue: function (e) {
					return this.each(function () {
						r.dequeue(this, e);
					});
				},
				clearQueue: function (e) {
					return this.queue(e || "fx", []);
				},
				promise: function (e, t) {
					var n,
						i = 1,
						o = r.Deferred(),
						a = this,
						s = this.length,
						c = function () {
							--i || o.resolveWith(a, [a]);
						};
					for (
						typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
						s--;

					)
						(n = k.get(a[s], e + "queueHooks")),
							n && n.empty && (i++, n.empty.add(c));
					return c(), o.promise(t);
				},
			});
		var yn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			rt = new RegExp("^(?:([+-])=|)(" + yn + ")([a-z%]*)$", "i"),
			ke = ["Top", "Right", "Bottom", "Left"],
			Oe = O.documentElement,
			Ye = function (e) {
				return r.contains(e.ownerDocument, e);
			},
			Ci = { composed: !0 };
		Oe.getRootNode &&
			(Ye = function (e) {
				return (
					r.contains(e.ownerDocument, e) ||
					e.getRootNode(Ci) === e.ownerDocument
				);
			});
		var mt = function (e, t) {
			return (
				(e = t || e),
				e.style.display === "none" ||
					(e.style.display === "" && Ye(e) && r.css(e, "display") === "none")
			);
		};
		function mn(e, t, n, i) {
			var o,
				a,
				s = 20,
				c = i
					? function () {
							return i.cur();
					  }
					: function () {
							return r.css(e, t, "");
					  },
				f = c(),
				p = (n && n[3]) || (r.cssNumber[t] ? "" : "px"),
				m =
					e.nodeType &&
					(r.cssNumber[t] || (p !== "px" && +f)) &&
					rt.exec(r.css(e, t));
			if (m && m[3] !== p) {
				for (f = f / 2, p = p || m[3], m = +f || 1; s--; )
					r.style(e, t, m + p),
						(1 - a) * (1 - (a = c() / f || 0.5)) <= 0 && (s = 0),
						(m = m / a);
				(m = m * 2), r.style(e, t, m + p), (n = n || []);
			}
			return (
				n &&
					((m = +m || +f || 0),
					(o = n[1] ? m + (n[1] + 1) * n[2] : +n[2]),
					i && ((i.unit = p), (i.start = m), (i.end = o))),
				o
			);
		}
		var vn = {};
		function Si(e) {
			var t,
				n = e.ownerDocument,
				i = e.nodeName,
				o = vn[i];
			return (
				o ||
				((t = n.body.appendChild(n.createElement(i))),
				(o = r.css(t, "display")),
				t.parentNode.removeChild(t),
				o === "none" && (o = "block"),
				(vn[i] = o),
				o)
			);
		}
		function Qe(e, t) {
			for (var n, i, o = [], a = 0, s = e.length; a < s; a++)
				(i = e[a]),
					i.style &&
						((n = i.style.display),
						t
							? (n === "none" &&
									((o[a] = k.get(i, "display") || null),
									o[a] || (i.style.display = "")),
							  i.style.display === "" && mt(i) && (o[a] = Si(i)))
							: n !== "none" && ((o[a] = "none"), k.set(i, "display", n)));
			for (a = 0; a < s; a++) o[a] != null && (e[a].style.display = o[a]);
			return e;
		}
		r.fn.extend({
			show: function () {
				return Qe(this, !0);
			},
			hide: function () {
				return Qe(this);
			},
			toggle: function (e) {
				return typeof e == "boolean"
					? e
						? this.show()
						: this.hide()
					: this.each(function () {
							mt(this) ? r(this).show() : r(this).hide();
					  });
			},
		});
		var ot = /^(?:checkbox|radio)$/i,
			bn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
			xn = /^$|^module$|\/(?:java|ecma)script/i;
		(function () {
			var e = O.createDocumentFragment(),
				t = e.appendChild(O.createElement("div")),
				n = O.createElement("input");
			n.setAttribute("type", "radio"),
				n.setAttribute("checked", "checked"),
				n.setAttribute("name", "t"),
				t.appendChild(n),
				(z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
				(t.innerHTML = "<textarea>x</textarea>"),
				(z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
				(t.innerHTML = "<option></option>"),
				(z.option = !!t.lastChild);
		})();
		var Ce = {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""],
		};
		(Ce.tbody = Ce.tfoot = Ce.colgroup = Ce.caption = Ce.thead),
			(Ce.th = Ce.td),
			z.option ||
				(Ce.optgroup = Ce.option =
					[1, "<select multiple='multiple'>", "</select>"]);
		function he(e, t) {
			var n;
			return (
				typeof e.getElementsByTagName < "u"
					? (n = e.getElementsByTagName(t || "*"))
					: typeof e.querySelectorAll < "u"
					? (n = e.querySelectorAll(t || "*"))
					: (n = []),
				t === void 0 || (t && Te(e, t)) ? r.merge([e], n) : n
			);
		}
		function Mt(e, t) {
			for (var n = 0, i = e.length; n < i; n++)
				k.set(e[n], "globalEval", !t || k.get(t[n], "globalEval"));
		}
		var Ai = /<|&#?\w+;/;
		function Tn(e, t, n, i, o) {
			for (
				var a,
					s,
					c,
					f,
					p,
					m,
					T = t.createDocumentFragment(),
					g = [],
					v = 0,
					D = e.length;
				v < D;
				v++
			)
				if (((a = e[v]), a || a === 0))
					if (Ue(a) === "object") r.merge(g, a.nodeType ? [a] : a);
					else if (!Ai.test(a)) g.push(t.createTextNode(a));
					else {
						for (
							s = s || T.appendChild(t.createElement("div")),
								c = (bn.exec(a) || ["", ""])[1].toLowerCase(),
								f = Ce[c] || Ce._default,
								s.innerHTML = f[1] + r.htmlPrefilter(a) + f[2],
								m = f[0];
							m--;

						)
							s = s.lastChild;
						r.merge(g, s.childNodes), (s = T.firstChild), (s.textContent = "");
					}
			for (T.textContent = "", v = 0; (a = g[v++]); ) {
				if (i && r.inArray(a, i) > -1) {
					o && o.push(a);
					continue;
				}
				if (((p = Ye(a)), (s = he(T.appendChild(a), "script")), p && Mt(s), n))
					for (m = 0; (a = s[m++]); ) xn.test(a.type || "") && n.push(a);
			}
			return T;
		}
		var Cn = /^([^.]*)(?:\.(.+)|)/;
		function Je() {
			return !0;
		}
		function Ze() {
			return !1;
		}
		function wi(e, t) {
			return (e === Ei()) == (t === "focus");
		}
		function Ei() {
			try {
				return O.activeElement;
			} catch {}
		}
		function qt(e, t, n, i, o, a) {
			var s, c;
			if (typeof t == "object") {
				typeof n != "string" && ((i = i || n), (n = void 0));
				for (c in t) qt(e, c, n, i, t[c], a);
				return e;
			}
			if (
				(i == null && o == null
					? ((o = n), (i = n = void 0))
					: o == null &&
					  (typeof n == "string"
							? ((o = i), (i = void 0))
							: ((o = i), (i = n), (n = void 0))),
				o === !1)
			)
				o = Ze;
			else if (!o) return e;
			return (
				a === 1 &&
					((s = o),
					(o = function (f) {
						return r().off(f), s.apply(this, arguments);
					}),
					(o.guid = s.guid || (s.guid = r.guid++))),
				e.each(function () {
					r.event.add(this, t, o, i, n);
				})
			);
		}
		r.event = {
			global: {},
			add: function (e, t, n, i, o) {
				var a,
					s,
					c,
					f,
					p,
					m,
					T,
					g,
					v,
					D,
					q,
					N = k.get(e);
				if (nt(e))
					for (
						n.handler && ((a = n), (n = a.handler), (o = a.selector)),
							o && r.find.matchesSelector(Oe, o),
							n.guid || (n.guid = r.guid++),
							(f = N.events) || (f = N.events = Object.create(null)),
							(s = N.handle) ||
								(s = N.handle =
									function (ae) {
										return typeof r < "u" && r.event.triggered !== ae.type
											? r.event.dispatch.apply(e, arguments)
											: void 0;
									}),
							t = (t || "").match(Ne) || [""],
							p = t.length;
						p--;

					)
						(c = Cn.exec(t[p]) || []),
							(v = q = c[1]),
							(D = (c[2] || "").split(".").sort()),
							v &&
								((T = r.event.special[v] || {}),
								(v = (o ? T.delegateType : T.bindType) || v),
								(T = r.event.special[v] || {}),
								(m = r.extend(
									{
										type: v,
										origType: q,
										data: i,
										handler: n,
										guid: n.guid,
										selector: o,
										needsContext: o && r.expr.match.needsContext.test(o),
										namespace: D.join("."),
									},
									a
								)),
								(g = f[v]) ||
									((g = f[v] = []),
									(g.delegateCount = 0),
									(!T.setup || T.setup.call(e, i, D, s) === !1) &&
										e.addEventListener &&
										e.addEventListener(v, s)),
								T.add &&
									(T.add.call(e, m),
									m.handler.guid || (m.handler.guid = n.guid)),
								o ? g.splice(g.delegateCount++, 0, m) : g.push(m),
								(r.event.global[v] = !0));
			},
			remove: function (e, t, n, i, o) {
				var a,
					s,
					c,
					f,
					p,
					m,
					T,
					g,
					v,
					D,
					q,
					N = k.hasData(e) && k.get(e);
				if (!(!N || !(f = N.events))) {
					for (t = (t || "").match(Ne) || [""], p = t.length; p--; ) {
						if (
							((c = Cn.exec(t[p]) || []),
							(v = q = c[1]),
							(D = (c[2] || "").split(".").sort()),
							!v)
						) {
							for (v in f) r.event.remove(e, v + t[p], n, i, !0);
							continue;
						}
						for (
							T = r.event.special[v] || {},
								v = (i ? T.delegateType : T.bindType) || v,
								g = f[v] || [],
								c =
									c[2] &&
									new RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)"),
								s = a = g.length;
							a--;

						)
							(m = g[a]),
								(o || q === m.origType) &&
									(!n || n.guid === m.guid) &&
									(!c || c.test(m.namespace)) &&
									(!i || i === m.selector || (i === "**" && m.selector)) &&
									(g.splice(a, 1),
									m.selector && g.delegateCount--,
									T.remove && T.remove.call(e, m));
						s &&
							!g.length &&
							((!T.teardown || T.teardown.call(e, D, N.handle) === !1) &&
								r.removeEvent(e, v, N.handle),
							delete f[v]);
					}
					r.isEmptyObject(f) && k.remove(e, "handle events");
				}
			},
			dispatch: function (e) {
				var t,
					n,
					i,
					o,
					a,
					s,
					c = new Array(arguments.length),
					f = r.event.fix(e),
					p = (k.get(this, "events") || Object.create(null))[f.type] || [],
					m = r.event.special[f.type] || {};
				for (c[0] = f, t = 1; t < arguments.length; t++) c[t] = arguments[t];
				if (
					((f.delegateTarget = this),
					!(m.preDispatch && m.preDispatch.call(this, f) === !1))
				) {
					for (
						s = r.event.handlers.call(this, f, p), t = 0;
						(o = s[t++]) && !f.isPropagationStopped();

					)
						for (
							f.currentTarget = o.elem, n = 0;
							(a = o.handlers[n++]) && !f.isImmediatePropagationStopped();

						)
							(!f.rnamespace ||
								a.namespace === !1 ||
								f.rnamespace.test(a.namespace)) &&
								((f.handleObj = a),
								(f.data = a.data),
								(i = (
									(r.event.special[a.origType] || {}).handle || a.handler
								).apply(o.elem, c)),
								i !== void 0 &&
									(f.result = i) === !1 &&
									(f.preventDefault(), f.stopPropagation()));
					return m.postDispatch && m.postDispatch.call(this, f), f.result;
				}
			},
			handlers: function (e, t) {
				var n,
					i,
					o,
					a,
					s,
					c = [],
					f = t.delegateCount,
					p = e.target;
				if (f && p.nodeType && !(e.type === "click" && e.button >= 1)) {
					for (; p !== this; p = p.parentNode || this)
						if (
							p.nodeType === 1 &&
							!(e.type === "click" && p.disabled === !0)
						) {
							for (a = [], s = {}, n = 0; n < f; n++)
								(i = t[n]),
									(o = i.selector + " "),
									s[o] === void 0 &&
										(s[o] = i.needsContext
											? r(o, this).index(p) > -1
											: r.find(o, this, null, [p]).length),
									s[o] && a.push(i);
							a.length && c.push({ elem: p, handlers: a });
						}
				}
				return (
					(p = this),
					f < t.length && c.push({ elem: p, handlers: t.slice(f) }),
					c
				);
			},
			addProp: function (e, t) {
				Object.defineProperty(r.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: H(t)
						? function () {
								if (this.originalEvent) return t(this.originalEvent);
						  }
						: function () {
								if (this.originalEvent) return this.originalEvent[e];
						  },
					set: function (n) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: n,
						});
					},
				});
			},
			fix: function (e) {
				return e[r.expando] ? e : new r.Event(e);
			},
			special: {
				load: { noBubble: !0 },
				click: {
					setup: function (e) {
						var t = this || e;
						return (
							ot.test(t.type) &&
								t.click &&
								Te(t, "input") &&
								vt(t, "click", Je),
							!1
						);
					},
					trigger: function (e) {
						var t = this || e;
						return (
							ot.test(t.type) && t.click && Te(t, "input") && vt(t, "click"), !0
						);
					},
					_default: function (e) {
						var t = e.target;
						return (
							(ot.test(t.type) &&
								t.click &&
								Te(t, "input") &&
								k.get(t, "click")) ||
							Te(t, "a")
						);
					},
				},
				beforeunload: {
					postDispatch: function (e) {
						e.result !== void 0 &&
							e.originalEvent &&
							(e.originalEvent.returnValue = e.result);
					},
				},
			},
		};
		function vt(e, t, n) {
			if (!n) {
				k.get(e, t) === void 0 && r.event.add(e, t, Je);
				return;
			}
			k.set(e, t, !1),
				r.event.add(e, t, {
					namespace: !1,
					handler: function (i) {
						var o,
							a,
							s = k.get(this, t);
						if (i.isTrigger & 1 && this[t]) {
							if (s.length)
								(r.event.special[t] || {}).delegateType && i.stopPropagation();
							else if (
								((s = _.call(arguments)),
								k.set(this, t, s),
								(o = n(this, t)),
								this[t](),
								(a = k.get(this, t)),
								s !== a || o ? k.set(this, t, !1) : (a = {}),
								s !== a)
							)
								return (
									i.stopImmediatePropagation(), i.preventDefault(), a && a.value
								);
						} else
							s.length &&
								(k.set(this, t, {
									value: r.event.trigger(
										r.extend(s[0], r.Event.prototype),
										s.slice(1),
										this
									),
								}),
								i.stopImmediatePropagation());
					},
				});
		}
		(r.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}),
			(r.Event = function (e, t) {
				if (!(this instanceof r.Event)) return new r.Event(e, t);
				e && e.type
					? ((this.originalEvent = e),
					  (this.type = e.type),
					  (this.isDefaultPrevented =
							e.defaultPrevented ||
							(e.defaultPrevented === void 0 && e.returnValue === !1)
								? Je
								: Ze),
					  (this.target =
							e.target && e.target.nodeType === 3
								? e.target.parentNode
								: e.target),
					  (this.currentTarget = e.currentTarget),
					  (this.relatedTarget = e.relatedTarget))
					: (this.type = e),
					t && r.extend(this, t),
					(this.timeStamp = (e && e.timeStamp) || Date.now()),
					(this[r.expando] = !0);
			}),
			(r.Event.prototype = {
				constructor: r.Event,
				isDefaultPrevented: Ze,
				isPropagationStopped: Ze,
				isImmediatePropagationStopped: Ze,
				isSimulated: !1,
				preventDefault: function () {
					var e = this.originalEvent;
					(this.isDefaultPrevented = Je),
						e && !this.isSimulated && e.preventDefault();
				},
				stopPropagation: function () {
					var e = this.originalEvent;
					(this.isPropagationStopped = Je),
						e && !this.isSimulated && e.stopPropagation();
				},
				stopImmediatePropagation: function () {
					var e = this.originalEvent;
					(this.isImmediatePropagationStopped = Je),
						e && !this.isSimulated && e.stopImmediatePropagation(),
						this.stopPropagation();
				},
			}),
			r.each(
				{
					altKey: !0,
					bubbles: !0,
					cancelable: !0,
					changedTouches: !0,
					ctrlKey: !0,
					detail: !0,
					eventPhase: !0,
					metaKey: !0,
					pageX: !0,
					pageY: !0,
					shiftKey: !0,
					view: !0,
					char: !0,
					code: !0,
					charCode: !0,
					key: !0,
					keyCode: !0,
					button: !0,
					buttons: !0,
					clientX: !0,
					clientY: !0,
					offsetX: !0,
					offsetY: !0,
					pointerId: !0,
					pointerType: !0,
					screenX: !0,
					screenY: !0,
					targetTouches: !0,
					toElement: !0,
					touches: !0,
					which: !0,
				},
				r.event.addProp
			),
			r.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
				r.event.special[e] = {
					setup: function () {
						return vt(this, e, wi), !1;
					},
					trigger: function () {
						return vt(this, e), !0;
					},
					_default: function (n) {
						return k.get(n.target, e);
					},
					delegateType: t,
				};
			}),
			r.each(
				{
					mouseenter: "mouseover",
					mouseleave: "mouseout",
					pointerenter: "pointerover",
					pointerleave: "pointerout",
				},
				function (e, t) {
					r.event.special[e] = {
						delegateType: t,
						bindType: t,
						handle: function (n) {
							var i,
								o = this,
								a = n.relatedTarget,
								s = n.handleObj;
							return (
								(!a || (a !== o && !r.contains(o, a))) &&
									((n.type = s.origType),
									(i = s.handler.apply(this, arguments)),
									(n.type = t)),
								i
							);
						},
					};
				}
			),
			r.fn.extend({
				on: function (e, t, n, i) {
					return qt(this, e, t, n, i);
				},
				one: function (e, t, n, i) {
					return qt(this, e, t, n, i, 1);
				},
				off: function (e, t, n) {
					var i, o;
					if (e && e.preventDefault && e.handleObj)
						return (
							(i = e.handleObj),
							r(e.delegateTarget).off(
								i.namespace ? i.origType + "." + i.namespace : i.origType,
								i.selector,
								i.handler
							),
							this
						);
					if (typeof e == "object") {
						for (o in e) this.off(o, t, e[o]);
						return this;
					}
					return (
						(t === !1 || typeof t == "function") && ((n = t), (t = void 0)),
						n === !1 && (n = Ze),
						this.each(function () {
							r.event.remove(this, e, n, t);
						})
					);
				},
			});
		var Ni = /<script|<style|<link/i,
			Di = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Fi = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
		function Sn(e, t) {
			return (
				(Te(e, "table") &&
					Te(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
					r(e).children("tbody")[0]) ||
				e
			);
		}
		function ki(e) {
			return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
		}
		function Pi(e) {
			return (
				(e.type || "").slice(0, 5) === "true/"
					? (e.type = e.type.slice(5))
					: e.removeAttribute("type"),
				e
			);
		}
		function An(e, t) {
			var n, i, o, a, s, c, f;
			if (t.nodeType === 1) {
				if (k.hasData(e) && ((a = k.get(e)), (f = a.events), f)) {
					k.remove(t, "handle events");
					for (o in f)
						for (n = 0, i = f[o].length; n < i; n++) r.event.add(t, o, f[o][n]);
				}
				de.hasData(e) &&
					((s = de.access(e)), (c = r.extend({}, s)), de.set(t, c));
			}
		}
		function Ri(e, t) {
			var n = t.nodeName.toLowerCase();
			n === "input" && ot.test(e.type)
				? (t.checked = e.checked)
				: (n === "input" || n === "textarea") &&
				  (t.defaultValue = e.defaultValue);
		}
		function et(e, t, n, i) {
			t = I(t);
			var o,
				a,
				s,
				c,
				f,
				p,
				m = 0,
				T = e.length,
				g = T - 1,
				v = t[0],
				D = H(v);
			if (D || (T > 1 && typeof v == "string" && !z.checkClone && Di.test(v)))
				return e.each(function (q) {
					var N = e.eq(q);
					D && (t[0] = v.call(this, q, N.html())), et(N, t, n, i);
				});
			if (
				T &&
				((o = Tn(t, e[0].ownerDocument, !1, e, i)),
				(a = o.firstChild),
				o.childNodes.length === 1 && (o = a),
				a || i)
			) {
				for (s = r.map(he(o, "script"), ki), c = s.length; m < T; m++)
					(f = o),
						m !== g &&
							((f = r.clone(f, !0, !0)), c && r.merge(s, he(f, "script"))),
						n.call(e[m], f, m);
				if (c)
					for (
						p = s[s.length - 1].ownerDocument, r.map(s, Pi), m = 0;
						m < c;
						m++
					)
						(f = s[m]),
							xn.test(f.type || "") &&
								!k.access(f, "globalEval") &&
								r.contains(p, f) &&
								(f.src && (f.type || "").toLowerCase() !== "module"
									? r._evalUrl &&
									  !f.noModule &&
									  r._evalUrl(
											f.src,
											{ nonce: f.nonce || f.getAttribute("nonce") },
											p
									  )
									: sn(f.textContent.replace(Fi, ""), f, p));
			}
			return e;
		}
		function wn(e, t, n) {
			for (var i, o = t ? r.filter(t, e) : e, a = 0; (i = o[a]) != null; a++)
				!n && i.nodeType === 1 && r.cleanData(he(i)),
					i.parentNode &&
						(n && Ye(i) && Mt(he(i, "script")), i.parentNode.removeChild(i));
			return e;
		}
		r.extend({
			htmlPrefilter: function (e) {
				return e;
			},
			clone: function (e, t, n) {
				var i,
					o,
					a,
					s,
					c = e.cloneNode(!0),
					f = Ye(e);
				if (
					!z.noCloneChecked &&
					(e.nodeType === 1 || e.nodeType === 11) &&
					!r.isXMLDoc(e)
				)
					for (s = he(c), a = he(e), i = 0, o = a.length; i < o; i++)
						Ri(a[i], s[i]);
				if (t)
					if (n)
						for (
							a = a || he(e), s = s || he(c), i = 0, o = a.length;
							i < o;
							i++
						)
							An(a[i], s[i]);
					else An(e, c);
				return (
					(s = he(c, "script")), s.length > 0 && Mt(s, !f && he(e, "script")), c
				);
			},
			cleanData: function (e) {
				for (
					var t, n, i, o = r.event.special, a = 0;
					(n = e[a]) !== void 0;
					a++
				)
					if (nt(n)) {
						if ((t = n[k.expando])) {
							if (t.events)
								for (i in t.events)
									o[i] ? r.event.remove(n, i) : r.removeEvent(n, i, t.handle);
							n[k.expando] = void 0;
						}
						n[de.expando] && (n[de.expando] = void 0);
					}
			},
		}),
			r.fn.extend({
				detach: function (e) {
					return wn(this, e, !0);
				},
				remove: function (e) {
					return wn(this, e);
				},
				text: function (e) {
					return Fe(
						this,
						function (t) {
							return t === void 0
								? r.text(this)
								: this.empty().each(function () {
										(this.nodeType === 1 ||
											this.nodeType === 11 ||
											this.nodeType === 9) &&
											(this.textContent = t);
								  });
						},
						null,
						e,
						arguments.length
					);
				},
				append: function () {
					return et(this, arguments, function (e) {
						if (
							this.nodeType === 1 ||
							this.nodeType === 11 ||
							this.nodeType === 9
						) {
							var t = Sn(this, e);
							t.appendChild(e);
						}
					});
				},
				prepend: function () {
					return et(this, arguments, function (e) {
						if (
							this.nodeType === 1 ||
							this.nodeType === 11 ||
							this.nodeType === 9
						) {
							var t = Sn(this, e);
							t.insertBefore(e, t.firstChild);
						}
					});
				},
				before: function () {
					return et(this, arguments, function (e) {
						this.parentNode && this.parentNode.insertBefore(e, this);
					});
				},
				after: function () {
					return et(this, arguments, function (e) {
						this.parentNode &&
							this.parentNode.insertBefore(e, this.nextSibling);
					});
				},
				empty: function () {
					for (var e, t = 0; (e = this[t]) != null; t++)
						e.nodeType === 1 && (r.cleanData(he(e, !1)), (e.textContent = ""));
					return this;
				},
				clone: function (e, t) {
					return (
						(e = e ?? !1),
						(t = t ?? e),
						this.map(function () {
							return r.clone(this, e, t);
						})
					);
				},
				html: function (e) {
					return Fe(
						this,
						function (t) {
							var n = this[0] || {},
								i = 0,
								o = this.length;
							if (t === void 0 && n.nodeType === 1) return n.innerHTML;
							if (
								typeof t == "string" &&
								!Ni.test(t) &&
								!Ce[(bn.exec(t) || ["", ""])[1].toLowerCase()]
							) {
								t = r.htmlPrefilter(t);
								try {
									for (; i < o; i++)
										(n = this[i] || {}),
											n.nodeType === 1 &&
												(r.cleanData(he(n, !1)), (n.innerHTML = t));
									n = 0;
								} catch {}
							}
							n && this.empty().append(t);
						},
						null,
						e,
						arguments.length
					);
				},
				replaceWith: function () {
					var e = [];
					return et(
						this,
						arguments,
						function (t) {
							var n = this.parentNode;
							r.inArray(this, e) < 0 &&
								(r.cleanData(he(this)), n && n.replaceChild(t, this));
						},
						e
					);
				},
			}),
			r.each(
				{
					appendTo: "append",
					prependTo: "prepend",
					insertBefore: "before",
					insertAfter: "after",
					replaceAll: "replaceWith",
				},
				function (e, t) {
					r.fn[e] = function (n) {
						for (var i, o = [], a = r(n), s = a.length - 1, c = 0; c <= s; c++)
							(i = c === s ? this : this.clone(!0)),
								r(a[c])[t](i),
								K.apply(o, i.get());
						return this.pushStack(o);
					};
				}
			);
		var Ht = new RegExp("^(" + yn + ")(?!px)[a-z%]+$", "i"),
			Ot = /^--/,
			bt = function (e) {
				var t = e.ownerDocument.defaultView;
				return (!t || !t.opener) && (t = y), t.getComputedStyle(e);
			},
			En = function (e, t, n) {
				var i,
					o,
					a = {};
				for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
				i = n.call(e);
				for (o in t) e.style[o] = a[o];
				return i;
			},
			Li = new RegExp(ke.join("|"), "i"),
			Nn = "[\\x20\\t\\r\\n\\f]",
			ji = new RegExp(
				"^" + Nn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Nn + "+$",
				"g"
			);
		(function () {
			function e() {
				if (p) {
					(f.style.cssText =
						"position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
						(p.style.cssText =
							"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
						Oe.appendChild(f).appendChild(p);
					var m = y.getComputedStyle(p);
					(n = m.top !== "1%"),
						(c = t(m.marginLeft) === 12),
						(p.style.right = "60%"),
						(a = t(m.right) === 36),
						(i = t(m.width) === 36),
						(p.style.position = "absolute"),
						(o = t(p.offsetWidth / 3) === 12),
						Oe.removeChild(f),
						(p = null);
				}
			}
			function t(m) {
				return Math.round(parseFloat(m));
			}
			var n,
				i,
				o,
				a,
				s,
				c,
				f = O.createElement("div"),
				p = O.createElement("div");
			p.style &&
				((p.style.backgroundClip = "content-box"),
				(p.cloneNode(!0).style.backgroundClip = ""),
				(z.clearCloneStyle = p.style.backgroundClip === "content-box"),
				r.extend(z, {
					boxSizingReliable: function () {
						return e(), i;
					},
					pixelBoxStyles: function () {
						return e(), a;
					},
					pixelPosition: function () {
						return e(), n;
					},
					reliableMarginLeft: function () {
						return e(), c;
					},
					scrollboxSize: function () {
						return e(), o;
					},
					reliableTrDimensions: function () {
						var m, T, g, v;
						return (
							s == null &&
								((m = O.createElement("table")),
								(T = O.createElement("tr")),
								(g = O.createElement("div")),
								(m.style.cssText =
									"position:absolute;left:-11111px;border-collapse:separate"),
								(T.style.cssText = "border:1px solid"),
								(T.style.height = "1px"),
								(g.style.height = "9px"),
								(g.style.display = "block"),
								Oe.appendChild(m).appendChild(T).appendChild(g),
								(v = y.getComputedStyle(T)),
								(s =
									parseInt(v.height, 10) +
										parseInt(v.borderTopWidth, 10) +
										parseInt(v.borderBottomWidth, 10) ===
									T.offsetHeight),
								Oe.removeChild(m)),
							s
						);
					},
				}));
		})();
		function at(e, t, n) {
			var i,
				o,
				a,
				s,
				c = Ot.test(t),
				f = e.style;
			return (
				(n = n || bt(e)),
				n &&
					((s = n.getPropertyValue(t) || n[t]),
					c && s && (s = s.replace(ji, "$1") || void 0),
					s === "" && !Ye(e) && (s = r.style(e, t)),
					!z.pixelBoxStyles() &&
						Ht.test(s) &&
						Li.test(t) &&
						((i = f.width),
						(o = f.minWidth),
						(a = f.maxWidth),
						(f.minWidth = f.maxWidth = f.width = s),
						(s = n.width),
						(f.width = i),
						(f.minWidth = o),
						(f.maxWidth = a))),
				s !== void 0 ? s + "" : s
			);
		}
		function Dn(e, t) {
			return {
				get: function () {
					if (e()) {
						delete this.get;
						return;
					}
					return (this.get = t).apply(this, arguments);
				},
			};
		}
		var Fn = ["Webkit", "Moz", "ms"],
			kn = O.createElement("div").style,
			Pn = {};
		function Mi(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = Fn.length; n--; )
				if (((e = Fn[n] + t), e in kn)) return e;
		}
		function Bt(e) {
			var t = r.cssProps[e] || Pn[e];
			return t || (e in kn ? e : (Pn[e] = Mi(e) || e));
		}
		var qi = /^(none|table(?!-c[ea]).+)/,
			Hi = { position: "absolute", visibility: "hidden", display: "block" },
			Rn = { letterSpacing: "0", fontWeight: "400" };
		function Ln(e, t, n) {
			var i = rt.exec(t);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
		}
		function It(e, t, n, i, o, a) {
			var s = t === "width" ? 1 : 0,
				c = 0,
				f = 0;
			if (n === (i ? "border" : "content")) return 0;
			for (; s < 4; s += 2)
				n === "margin" && (f += r.css(e, n + ke[s], !0, o)),
					i
						? (n === "content" && (f -= r.css(e, "padding" + ke[s], !0, o)),
						  n !== "margin" &&
								(f -= r.css(e, "border" + ke[s] + "Width", !0, o)))
						: ((f += r.css(e, "padding" + ke[s], !0, o)),
						  n !== "padding"
								? (f += r.css(e, "border" + ke[s] + "Width", !0, o))
								: (c += r.css(e, "border" + ke[s] + "Width", !0, o)));
			return (
				!i &&
					a >= 0 &&
					(f +=
						Math.max(
							0,
							Math.ceil(
								e["offset" + t[0].toUpperCase() + t.slice(1)] - a - f - c - 0.5
							)
						) || 0),
				f
			);
		}
		function jn(e, t, n) {
			var i = bt(e),
				o = !z.boxSizingReliable() || n,
				a = o && r.css(e, "boxSizing", !1, i) === "border-box",
				s = a,
				c = at(e, t, i),
				f = "offset" + t[0].toUpperCase() + t.slice(1);
			if (Ht.test(c)) {
				if (!n) return c;
				c = "auto";
			}
			return (
				((!z.boxSizingReliable() && a) ||
					(!z.reliableTrDimensions() && Te(e, "tr")) ||
					c === "auto" ||
					(!parseFloat(c) && r.css(e, "display", !1, i) === "inline")) &&
					e.getClientRects().length &&
					((a = r.css(e, "boxSizing", !1, i) === "border-box"),
					(s = f in e),
					s && (c = e[f])),
				(c = parseFloat(c) || 0),
				c + It(e, t, n || (a ? "border" : "content"), s, i, c) + "px"
			);
		}
		r.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = at(e, "opacity");
							return n === "" ? "1" : n;
						}
					},
				},
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				gridArea: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnStart: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowStart: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
			},
			cssProps: {},
			style: function (e, t, n, i) {
				if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
					var o,
						a,
						s,
						c = De(t),
						f = Ot.test(t),
						p = e.style;
					if (
						(f || (t = Bt(c)),
						(s = r.cssHooks[t] || r.cssHooks[c]),
						n !== void 0)
					) {
						if (
							((a = typeof n),
							a === "string" &&
								(o = rt.exec(n)) &&
								o[1] &&
								((n = mn(e, t, o)), (a = "number")),
							n == null || n !== n)
						)
							return;
						a === "number" &&
							!f &&
							(n += (o && o[3]) || (r.cssNumber[c] ? "" : "px")),
							!z.clearCloneStyle &&
								n === "" &&
								t.indexOf("background") === 0 &&
								(p[t] = "inherit"),
							(!s || !("set" in s) || (n = s.set(e, n, i)) !== void 0) &&
								(f ? p.setProperty(t, n) : (p[t] = n));
					} else
						return s && "get" in s && (o = s.get(e, !1, i)) !== void 0
							? o
							: p[t];
				}
			},
			css: function (e, t, n, i) {
				var o,
					a,
					s,
					c = De(t),
					f = Ot.test(t);
				return (
					f || (t = Bt(c)),
					(s = r.cssHooks[t] || r.cssHooks[c]),
					s && "get" in s && (o = s.get(e, !0, n)),
					o === void 0 && (o = at(e, t, i)),
					o === "normal" && t in Rn && (o = Rn[t]),
					n === "" || n
						? ((a = parseFloat(o)), n === !0 || isFinite(a) ? a || 0 : o)
						: o
				);
			},
		}),
			r.each(["height", "width"], function (e, t) {
				r.cssHooks[t] = {
					get: function (n, i, o) {
						if (i)
							return qi.test(r.css(n, "display")) &&
								(!n.getClientRects().length || !n.getBoundingClientRect().width)
								? En(n, Hi, function () {
										return jn(n, t, o);
								  })
								: jn(n, t, o);
					},
					set: function (n, i, o) {
						var a,
							s = bt(n),
							c = !z.scrollboxSize() && s.position === "absolute",
							f = c || o,
							p = f && r.css(n, "boxSizing", !1, s) === "border-box",
							m = o ? It(n, t, o, p, s) : 0;
						return (
							p &&
								c &&
								(m -= Math.ceil(
									n["offset" + t[0].toUpperCase() + t.slice(1)] -
										parseFloat(s[t]) -
										It(n, t, "border", !1, s) -
										0.5
								)),
							m &&
								(a = rt.exec(i)) &&
								(a[3] || "px") !== "px" &&
								((n.style[t] = i), (i = r.css(n, t))),
							Ln(n, i, m)
						);
					},
				};
			}),
			(r.cssHooks.marginLeft = Dn(z.reliableMarginLeft, function (e, t) {
				if (t)
					return (
						(parseFloat(at(e, "marginLeft")) ||
							e.getBoundingClientRect().left -
								En(e, { marginLeft: 0 }, function () {
									return e.getBoundingClientRect().left;
								})) + "px"
					);
			})),
			r.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
				(r.cssHooks[e + t] = {
					expand: function (n) {
						for (
							var i = 0, o = {}, a = typeof n == "string" ? n.split(" ") : [n];
							i < 4;
							i++
						)
							o[e + ke[i] + t] = a[i] || a[i - 2] || a[0];
						return o;
					},
				}),
					e !== "margin" && (r.cssHooks[e + t].set = Ln);
			}),
			r.fn.extend({
				css: function (e, t) {
					return Fe(
						this,
						function (n, i, o) {
							var a,
								s,
								c = {},
								f = 0;
							if (Array.isArray(i)) {
								for (a = bt(n), s = i.length; f < s; f++)
									c[i[f]] = r.css(n, i[f], !1, a);
								return c;
							}
							return o !== void 0 ? r.style(n, i, o) : r.css(n, i);
						},
						e,
						t,
						arguments.length > 1
					);
				},
			});
		function pe(e, t, n, i, o) {
			return new pe.prototype.init(e, t, n, i, o);
		}
		(r.Tween = pe),
			(pe.prototype = {
				constructor: pe,
				init: function (e, t, n, i, o, a) {
					(this.elem = e),
						(this.prop = n),
						(this.easing = o || r.easing._default),
						(this.options = t),
						(this.start = this.now = this.cur()),
						(this.end = i),
						(this.unit = a || (r.cssNumber[n] ? "" : "px"));
				},
				cur: function () {
					var e = pe.propHooks[this.prop];
					return e && e.get ? e.get(this) : pe.propHooks._default.get(this);
				},
				run: function (e) {
					var t,
						n = pe.propHooks[this.prop];
					return (
						this.options.duration
							? (this.pos = t =
									r.easing[this.easing](
										e,
										this.options.duration * e,
										0,
										1,
										this.options.duration
									))
							: (this.pos = t = e),
						(this.now = (this.end - this.start) * t + this.start),
						this.options.step &&
							this.options.step.call(this.elem, this.now, this),
						n && n.set ? n.set(this) : pe.propHooks._default.set(this),
						this
					);
				},
			}),
			(pe.prototype.init.prototype = pe.prototype),
			(pe.propHooks = {
				_default: {
					get: function (e) {
						var t;
						return e.elem.nodeType !== 1 ||
							(e.elem[e.prop] != null && e.elem.style[e.prop] == null)
							? e.elem[e.prop]
							: ((t = r.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
					},
					set: function (e) {
						r.fx.step[e.prop]
							? r.fx.step[e.prop](e)
							: e.elem.nodeType === 1 &&
							  (r.cssHooks[e.prop] || e.elem.style[Bt(e.prop)] != null)
							? r.style(e.elem, e.prop, e.now + e.unit)
							: (e.elem[e.prop] = e.now);
					},
				},
			}),
			(pe.propHooks.scrollTop = pe.propHooks.scrollLeft =
				{
					set: function (e) {
						e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
					},
				}),
			(r.easing = {
				linear: function (e) {
					return e;
				},
				swing: function (e) {
					return 0.5 - Math.cos(e * Math.PI) / 2;
				},
				_default: "swing",
			}),
			(r.fx = pe.prototype.init),
			(r.fx.step = {});
		var tt,
			xt,
			Oi = /^(?:toggle|show|hide)$/,
			Bi = /queueHooks$/;
		function _t() {
			xt &&
				(O.hidden === !1 && y.requestAnimationFrame
					? y.requestAnimationFrame(_t)
					: y.setTimeout(_t, r.fx.interval),
				r.fx.tick());
		}
		function Mn() {
			return (
				y.setTimeout(function () {
					tt = void 0;
				}),
				(tt = Date.now())
			);
		}
		function Tt(e, t) {
			var n,
				i = 0,
				o = { height: e };
			for (t = t ? 1 : 0; i < 4; i += 2 - t)
				(n = ke[i]), (o["margin" + n] = o["padding" + n] = e);
			return t && (o.opacity = o.width = e), o;
		}
		function qn(e, t, n) {
			for (
				var i,
					o = (we.tweeners[t] || []).concat(we.tweeners["*"]),
					a = 0,
					s = o.length;
				a < s;
				a++
			)
				if ((i = o[a].call(n, t, e))) return i;
		}
		function Ii(e, t, n) {
			var i,
				o,
				a,
				s,
				c,
				f,
				p,
				m,
				T = "width" in t || "height" in t,
				g = this,
				v = {},
				D = e.style,
				q = e.nodeType && mt(e),
				N = k.get(e, "fxshow");
			n.queue ||
				((s = r._queueHooks(e, "fx")),
				s.unqueued == null &&
					((s.unqueued = 0),
					(c = s.empty.fire),
					(s.empty.fire = function () {
						s.unqueued || c();
					})),
				s.unqueued++,
				g.always(function () {
					g.always(function () {
						s.unqueued--, r.queue(e, "fx").length || s.empty.fire();
					});
				}));
			for (i in t)
				if (((o = t[i]), Oi.test(o))) {
					if (
						(delete t[i],
						(a = a || o === "toggle"),
						o === (q ? "hide" : "show"))
					)
						if (o === "show" && N && N[i] !== void 0) q = !0;
						else continue;
					v[i] = (N && N[i]) || r.style(e, i);
				}
			if (((f = !r.isEmptyObject(t)), !(!f && r.isEmptyObject(v)))) {
				T &&
					e.nodeType === 1 &&
					((n.overflow = [D.overflow, D.overflowX, D.overflowY]),
					(p = N && N.display),
					p == null && (p = k.get(e, "display")),
					(m = r.css(e, "display")),
					m === "none" &&
						(p
							? (m = p)
							: (Qe([e], !0),
							  (p = e.style.display || p),
							  (m = r.css(e, "display")),
							  Qe([e]))),
					(m === "inline" || (m === "inline-block" && p != null)) &&
						r.css(e, "float") === "none" &&
						(f ||
							(g.done(function () {
								D.display = p;
							}),
							p == null && ((m = D.display), (p = m === "none" ? "" : m))),
						(D.display = "inline-block"))),
					n.overflow &&
						((D.overflow = "hidden"),
						g.always(function () {
							(D.overflow = n.overflow[0]),
								(D.overflowX = n.overflow[1]),
								(D.overflowY = n.overflow[2]);
						})),
					(f = !1);
				for (i in v)
					f ||
						(N
							? "hidden" in N && (q = N.hidden)
							: (N = k.access(e, "fxshow", { display: p })),
						a && (N.hidden = !q),
						q && Qe([e], !0),
						g.done(function () {
							q || Qe([e]), k.remove(e, "fxshow");
							for (i in v) r.style(e, i, v[i]);
						})),
						(f = qn(q ? N[i] : 0, i, g)),
						i in N ||
							((N[i] = f.start), q && ((f.end = f.start), (f.start = 0)));
			}
		}
		function _i(e, t) {
			var n, i, o, a, s;
			for (n in e)
				if (
					((i = De(n)),
					(o = t[i]),
					(a = e[n]),
					Array.isArray(a) && ((o = a[1]), (a = e[n] = a[0])),
					n !== i && ((e[i] = a), delete e[n]),
					(s = r.cssHooks[i]),
					s && "expand" in s)
				) {
					(a = s.expand(a)), delete e[i];
					for (n in a) n in e || ((e[n] = a[n]), (t[n] = o));
				} else t[i] = o;
		}
		function we(e, t, n) {
			var i,
				o,
				a = 0,
				s = we.prefilters.length,
				c = r.Deferred().always(function () {
					delete f.elem;
				}),
				f = function () {
					if (o) return !1;
					for (
						var T = tt || Mn(),
							g = Math.max(0, p.startTime + p.duration - T),
							v = g / p.duration || 0,
							D = 1 - v,
							q = 0,
							N = p.tweens.length;
						q < N;
						q++
					)
						p.tweens[q].run(D);
					return (
						c.notifyWith(e, [p, D, g]),
						D < 1 && N
							? g
							: (N || c.notifyWith(e, [p, 1, 0]), c.resolveWith(e, [p]), !1)
					);
				},
				p = c.promise({
					elem: e,
					props: r.extend({}, t),
					opts: r.extend(
						!0,
						{ specialEasing: {}, easing: r.easing._default },
						n
					),
					originalProperties: t,
					originalOptions: n,
					startTime: tt || Mn(),
					duration: n.duration,
					tweens: [],
					createTween: function (T, g) {
						var v = r.Tween(
							e,
							p.opts,
							T,
							g,
							p.opts.specialEasing[T] || p.opts.easing
						);
						return p.tweens.push(v), v;
					},
					stop: function (T) {
						var g = 0,
							v = T ? p.tweens.length : 0;
						if (o) return this;
						for (o = !0; g < v; g++) p.tweens[g].run(1);
						return (
							T
								? (c.notifyWith(e, [p, 1, 0]), c.resolveWith(e, [p, T]))
								: c.rejectWith(e, [p, T]),
							this
						);
					},
				}),
				m = p.props;
			for (_i(m, p.opts.specialEasing); a < s; a++)
				if (((i = we.prefilters[a].call(p, e, m, p.opts)), i))
					return (
						H(i.stop) &&
							(r._queueHooks(p.elem, p.opts.queue).stop = i.stop.bind(i)),
						i
					);
			return (
				r.map(m, qn, p),
				H(p.opts.start) && p.opts.start.call(e, p),
				p
					.progress(p.opts.progress)
					.done(p.opts.done, p.opts.complete)
					.fail(p.opts.fail)
					.always(p.opts.always),
				r.fx.timer(r.extend(f, { elem: e, anim: p, queue: p.opts.queue })),
				p
			);
		}
		(r.Animation = r.extend(we, {
			tweeners: {
				"*": [
					function (e, t) {
						var n = this.createTween(e, t);
						return mn(n.elem, e, rt.exec(t), n), n;
					},
				],
			},
			tweener: function (e, t) {
				H(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ne));
				for (var n, i = 0, o = e.length; i < o; i++)
					(n = e[i]),
						(we.tweeners[n] = we.tweeners[n] || []),
						we.tweeners[n].unshift(t);
			},
			prefilters: [Ii],
			prefilter: function (e, t) {
				t ? we.prefilters.unshift(e) : we.prefilters.push(e);
			},
		})),
			(r.speed = function (e, t, n) {
				var i =
					e && typeof e == "object"
						? r.extend({}, e)
						: {
								complete: n || (!n && t) || (H(e) && e),
								duration: e,
								easing: (n && t) || (t && !H(t) && t),
						  };
				return (
					r.fx.off
						? (i.duration = 0)
						: typeof i.duration != "number" &&
						  (i.duration in r.fx.speeds
								? (i.duration = r.fx.speeds[i.duration])
								: (i.duration = r.fx.speeds._default)),
					(i.queue == null || i.queue === !0) && (i.queue = "fx"),
					(i.old = i.complete),
					(i.complete = function () {
						H(i.old) && i.old.call(this), i.queue && r.dequeue(this, i.queue);
					}),
					i
				);
			}),
			r.fn.extend({
				fadeTo: function (e, t, n, i) {
					return this.filter(mt)
						.css("opacity", 0)
						.show()
						.end()
						.animate({ opacity: t }, e, n, i);
				},
				animate: function (e, t, n, i) {
					var o = r.isEmptyObject(e),
						a = r.speed(t, n, i),
						s = function () {
							var c = we(this, r.extend({}, e), a);
							(o || k.get(this, "finish")) && c.stop(!0);
						};
					return (
						(s.finish = s),
						o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
					);
				},
				stop: function (e, t, n) {
					var i = function (o) {
						var a = o.stop;
						delete o.stop, a(n);
					};
					return (
						typeof e != "string" && ((n = t), (t = e), (e = void 0)),
						t && this.queue(e || "fx", []),
						this.each(function () {
							var o = !0,
								a = e != null && e + "queueHooks",
								s = r.timers,
								c = k.get(this);
							if (a) c[a] && c[a].stop && i(c[a]);
							else for (a in c) c[a] && c[a].stop && Bi.test(a) && i(c[a]);
							for (a = s.length; a--; )
								s[a].elem === this &&
									(e == null || s[a].queue === e) &&
									(s[a].anim.stop(n), (o = !1), s.splice(a, 1));
							(o || !n) && r.dequeue(this, e);
						})
					);
				},
				finish: function (e) {
					return (
						e !== !1 && (e = e || "fx"),
						this.each(function () {
							var t,
								n = k.get(this),
								i = n[e + "queue"],
								o = n[e + "queueHooks"],
								a = r.timers,
								s = i ? i.length : 0;
							for (
								n.finish = !0,
									r.queue(this, e, []),
									o && o.stop && o.stop.call(this, !0),
									t = a.length;
								t--;

							)
								a[t].elem === this &&
									a[t].queue === e &&
									(a[t].anim.stop(!0), a.splice(t, 1));
							for (t = 0; t < s; t++)
								i[t] && i[t].finish && i[t].finish.call(this);
							delete n.finish;
						})
					);
				},
			}),
			r.each(["toggle", "show", "hide"], function (e, t) {
				var n = r.fn[t];
				r.fn[t] = function (i, o, a) {
					return i == null || typeof i == "boolean"
						? n.apply(this, arguments)
						: this.animate(Tt(t, !0), i, o, a);
				};
			}),
			r.each(
				{
					slideDown: Tt("show"),
					slideUp: Tt("hide"),
					slideToggle: Tt("toggle"),
					fadeIn: { opacity: "show" },
					fadeOut: { opacity: "hide" },
					fadeToggle: { opacity: "toggle" },
				},
				function (e, t) {
					r.fn[e] = function (n, i, o) {
						return this.animate(t, n, i, o);
					};
				}
			),
			(r.timers = []),
			(r.fx.tick = function () {
				var e,
					t = 0,
					n = r.timers;
				for (tt = Date.now(); t < n.length; t++)
					(e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
				n.length || r.fx.stop(), (tt = void 0);
			}),
			(r.fx.timer = function (e) {
				r.timers.push(e), r.fx.start();
			}),
			(r.fx.interval = 13),
			(r.fx.start = function () {
				xt || ((xt = !0), _t());
			}),
			(r.fx.stop = function () {
				xt = null;
			}),
			(r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
			(r.fn.delay = function (e, t) {
				return (
					(e = (r.fx && r.fx.speeds[e]) || e),
					(t = t || "fx"),
					this.queue(t, function (n, i) {
						var o = y.setTimeout(n, e);
						i.stop = function () {
							y.clearTimeout(o);
						};
					})
				);
			}),
			(function () {
				var e = O.createElement("input"),
					t = O.createElement("select"),
					n = t.appendChild(O.createElement("option"));
				(e.type = "checkbox"),
					(z.checkOn = e.value !== ""),
					(z.optSelected = n.selected),
					(e = O.createElement("input")),
					(e.value = "t"),
					(e.type = "radio"),
					(z.radioValue = e.value === "t");
			})();
		var Hn,
			st = r.expr.attrHandle;
		r.fn.extend({
			attr: function (e, t) {
				return Fe(this, r.attr, e, t, arguments.length > 1);
			},
			removeAttr: function (e) {
				return this.each(function () {
					r.removeAttr(this, e);
				});
			},
		}),
			r.extend({
				attr: function (e, t, n) {
					var i,
						o,
						a = e.nodeType;
					if (!(a === 3 || a === 8 || a === 2)) {
						if (typeof e.getAttribute > "u") return r.prop(e, t, n);
						if (
							((a !== 1 || !r.isXMLDoc(e)) &&
								(o =
									r.attrHooks[t.toLowerCase()] ||
									(r.expr.match.bool.test(t) ? Hn : void 0)),
							n !== void 0)
						) {
							if (n === null) {
								r.removeAttr(e, t);
								return;
							}
							return o && "set" in o && (i = o.set(e, n, t)) !== void 0
								? i
								: (e.setAttribute(t, n + ""), n);
						}
						return o && "get" in o && (i = o.get(e, t)) !== null
							? i
							: ((i = r.find.attr(e, t)), i ?? void 0);
					}
				},
				attrHooks: {
					type: {
						set: function (e, t) {
							if (!z.radioValue && t === "radio" && Te(e, "input")) {
								var n = e.value;
								return e.setAttribute("type", t), n && (e.value = n), t;
							}
						},
					},
				},
				removeAttr: function (e, t) {
					var n,
						i = 0,
						o = t && t.match(Ne);
					if (o && e.nodeType === 1)
						for (; (n = o[i++]); ) e.removeAttribute(n);
				},
			}),
			(Hn = {
				set: function (e, t, n) {
					return t === !1 ? r.removeAttr(e, n) : e.setAttribute(n, n), n;
				},
			}),
			r.each(r.expr.match.bool.source.match(/\w+/g), function (e, t) {
				var n = st[t] || r.find.attr;
				st[t] = function (i, o, a) {
					var s,
						c,
						f = o.toLowerCase();
					return (
						a ||
							((c = st[f]),
							(st[f] = s),
							(s = n(i, o, a) != null ? f : null),
							(st[f] = c)),
						s
					);
				};
			});
		var Xi = /^(?:input|select|textarea|button)$/i,
			Wi = /^(?:a|area)$/i;
		r.fn.extend({
			prop: function (e, t) {
				return Fe(this, r.prop, e, t, arguments.length > 1);
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[r.propFix[e] || e];
				});
			},
		}),
			r.extend({
				prop: function (e, t, n) {
					var i,
						o,
						a = e.nodeType;
					if (!(a === 3 || a === 8 || a === 2))
						return (
							(a !== 1 || !r.isXMLDoc(e)) &&
								((t = r.propFix[t] || t), (o = r.propHooks[t])),
							n !== void 0
								? o && "set" in o && (i = o.set(e, n, t)) !== void 0
									? i
									: (e[t] = n)
								: o && "get" in o && (i = o.get(e, t)) !== null
								? i
								: e[t]
						);
				},
				propHooks: {
					tabIndex: {
						get: function (e) {
							var t = r.find.attr(e, "tabindex");
							return t
								? parseInt(t, 10)
								: Xi.test(e.nodeName) || (Wi.test(e.nodeName) && e.href)
								? 0
								: -1;
						},
					},
				},
				propFix: { for: "htmlFor", class: "className" },
			}),
			z.optSelected ||
				(r.propHooks.selected = {
					get: function (e) {
						var t = e.parentNode;
						return t && t.parentNode && t.parentNode.selectedIndex, null;
					},
					set: function (e) {
						var t = e.parentNode;
						t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
					},
				}),
			r.each(
				[
					"tabIndex",
					"readOnly",
					"maxLength",
					"cellSpacing",
					"cellPadding",
					"rowSpan",
					"colSpan",
					"useMap",
					"frameBorder",
					"contentEditable",
				],
				function () {
					r.propFix[this.toLowerCase()] = this;
				}
			);
		function Be(e) {
			var t = e.match(Ne) || [];
			return t.join(" ");
		}
		function Ie(e) {
			return (e.getAttribute && e.getAttribute("class")) || "";
		}
		function Xt(e) {
			return Array.isArray(e)
				? e
				: typeof e == "string"
				? e.match(Ne) || []
				: [];
		}
		r.fn.extend({
			addClass: function (e) {
				var t, n, i, o, a, s;
				return H(e)
					? this.each(function (c) {
							r(this).addClass(e.call(this, c, Ie(this)));
					  })
					: ((t = Xt(e)),
					  t.length
							? this.each(function () {
									if (
										((i = Ie(this)),
										(n = this.nodeType === 1 && " " + Be(i) + " "),
										n)
									) {
										for (a = 0; a < t.length; a++)
											(o = t[a]),
												n.indexOf(" " + o + " ") < 0 && (n += o + " ");
										(s = Be(n)), i !== s && this.setAttribute("class", s);
									}
							  })
							: this);
			},
			removeClass: function (e) {
				var t, n, i, o, a, s;
				return H(e)
					? this.each(function (c) {
							r(this).removeClass(e.call(this, c, Ie(this)));
					  })
					: arguments.length
					? ((t = Xt(e)),
					  t.length
							? this.each(function () {
									if (
										((i = Ie(this)),
										(n = this.nodeType === 1 && " " + Be(i) + " "),
										n)
									) {
										for (a = 0; a < t.length; a++)
											for (o = t[a]; n.indexOf(" " + o + " ") > -1; )
												n = n.replace(" " + o + " ", " ");
										(s = Be(n)), i !== s && this.setAttribute("class", s);
									}
							  })
							: this)
					: this.attr("class", "");
			},
			toggleClass: function (e, t) {
				var n,
					i,
					o,
					a,
					s = typeof e,
					c = s === "string" || Array.isArray(e);
				return H(e)
					? this.each(function (f) {
							r(this).toggleClass(e.call(this, f, Ie(this), t), t);
					  })
					: typeof t == "boolean" && c
					? t
						? this.addClass(e)
						: this.removeClass(e)
					: ((n = Xt(e)),
					  this.each(function () {
							if (c)
								for (a = r(this), o = 0; o < n.length; o++)
									(i = n[o]), a.hasClass(i) ? a.removeClass(i) : a.addClass(i);
							else
								(e === void 0 || s === "boolean") &&
									((i = Ie(this)),
									i && k.set(this, "__className__", i),
									this.setAttribute &&
										this.setAttribute(
											"class",
											i || e === !1 ? "" : k.get(this, "__className__") || ""
										));
					  }));
			},
			hasClass: function (e) {
				var t,
					n,
					i = 0;
				for (t = " " + e + " "; (n = this[i++]); )
					if (n.nodeType === 1 && (" " + Be(Ie(n)) + " ").indexOf(t) > -1)
						return !0;
				return !1;
			},
		});
		var $i = /\r/g;
		r.fn.extend({
			val: function (e) {
				var t,
					n,
					i,
					o = this[0];
				return arguments.length
					? ((i = H(e)),
					  this.each(function (a) {
							var s;
							this.nodeType === 1 &&
								(i ? (s = e.call(this, a, r(this).val())) : (s = e),
								s == null
									? (s = "")
									: typeof s == "number"
									? (s += "")
									: Array.isArray(s) &&
									  (s = r.map(s, function (c) {
											return c == null ? "" : c + "";
									  })),
								(t =
									r.valHooks[this.type] ||
									r.valHooks[this.nodeName.toLowerCase()]),
								(!t || !("set" in t) || t.set(this, s, "value") === void 0) &&
									(this.value = s));
					  }))
					: o
					? ((t = r.valHooks[o.type] || r.valHooks[o.nodeName.toLowerCase()]),
					  t && "get" in t && (n = t.get(o, "value")) !== void 0
							? n
							: ((n = o.value),
							  typeof n == "string" ? n.replace($i, "") : n ?? ""))
					: void 0;
			},
		}),
			r.extend({
				valHooks: {
					option: {
						get: function (e) {
							var t = r.find.attr(e, "value");
							return t ?? Be(r.text(e));
						},
					},
					select: {
						get: function (e) {
							var t,
								n,
								i,
								o = e.options,
								a = e.selectedIndex,
								s = e.type === "select-one",
								c = s ? null : [],
								f = s ? a + 1 : o.length;
							for (a < 0 ? (i = f) : (i = s ? a : 0); i < f; i++)
								if (
									((n = o[i]),
									(n.selected || i === a) &&
										!n.disabled &&
										(!n.parentNode.disabled || !Te(n.parentNode, "optgroup")))
								) {
									if (((t = r(n).val()), s)) return t;
									c.push(t);
								}
							return c;
						},
						set: function (e, t) {
							for (
								var n, i, o = e.options, a = r.makeArray(t), s = o.length;
								s--;

							)
								(i = o[s]),
									(i.selected = r.inArray(r.valHooks.option.get(i), a) > -1) &&
										(n = !0);
							return n || (e.selectedIndex = -1), a;
						},
					},
				},
			}),
			r.each(["radio", "checkbox"], function () {
				(r.valHooks[this] = {
					set: function (e, t) {
						if (Array.isArray(t))
							return (e.checked = r.inArray(r(e).val(), t) > -1);
					},
				}),
					z.checkOn ||
						(r.valHooks[this].get = function (e) {
							return e.getAttribute("value") === null ? "on" : e.value;
						});
			}),
			(z.focusin = "onfocusin" in y);
		var On = /^(?:focusinfocus|focusoutblur)$/,
			Bn = function (e) {
				e.stopPropagation();
			};
		r.extend(r.event, {
			trigger: function (e, t, n, i) {
				var o,
					a,
					s,
					c,
					f,
					p,
					m,
					T,
					g = [n || O],
					v = Z.call(e, "type") ? e.type : e,
					D = Z.call(e, "namespace") ? e.namespace.split(".") : [];
				if (
					((a = T = s = n = n || O),
					!(n.nodeType === 3 || n.nodeType === 8) &&
						!On.test(v + r.event.triggered) &&
						(v.indexOf(".") > -1 &&
							((D = v.split(".")), (v = D.shift()), D.sort()),
						(f = v.indexOf(":") < 0 && "on" + v),
						(e = e[r.expando] ? e : new r.Event(v, typeof e == "object" && e)),
						(e.isTrigger = i ? 2 : 3),
						(e.namespace = D.join(".")),
						(e.rnamespace = e.namespace
							? new RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)")
							: null),
						(e.result = void 0),
						e.target || (e.target = n),
						(t = t == null ? [e] : r.makeArray(t, [e])),
						(m = r.event.special[v] || {}),
						!(!i && m.trigger && m.trigger.apply(n, t) === !1)))
				) {
					if (!i && !m.noBubble && !Le(n)) {
						for (
							c = m.delegateType || v, On.test(c + v) || (a = a.parentNode);
							a;
							a = a.parentNode
						)
							g.push(a), (s = a);
						s === (n.ownerDocument || O) &&
							g.push(s.defaultView || s.parentWindow || y);
					}
					for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
						(T = a),
							(e.type = o > 1 ? c : m.bindType || v),
							(p =
								(k.get(a, "events") || Object.create(null))[e.type] &&
								k.get(a, "handle")),
							p && p.apply(a, t),
							(p = f && a[f]),
							p &&
								p.apply &&
								nt(a) &&
								((e.result = p.apply(a, t)),
								e.result === !1 && e.preventDefault());
					return (
						(e.type = v),
						!i &&
							!e.isDefaultPrevented() &&
							(!m._default || m._default.apply(g.pop(), t) === !1) &&
							nt(n) &&
							f &&
							H(n[v]) &&
							!Le(n) &&
							((s = n[f]),
							s && (n[f] = null),
							(r.event.triggered = v),
							e.isPropagationStopped() && T.addEventListener(v, Bn),
							n[v](),
							e.isPropagationStopped() && T.removeEventListener(v, Bn),
							(r.event.triggered = void 0),
							s && (n[f] = s)),
						e.result
					);
				}
			},
			simulate: function (e, t, n) {
				var i = r.extend(new r.Event(), n, { type: e, isSimulated: !0 });
				r.event.trigger(i, null, t);
			},
		}),
			r.fn.extend({
				trigger: function (e, t) {
					return this.each(function () {
						r.event.trigger(e, t, this);
					});
				},
				triggerHandler: function (e, t) {
					var n = this[0];
					if (n) return r.event.trigger(e, t, n, !0);
				},
			}),
			z.focusin ||
				r.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
					var n = function (i) {
						r.event.simulate(t, i.target, r.event.fix(i));
					};
					r.event.special[t] = {
						setup: function () {
							var i = this.ownerDocument || this.document || this,
								o = k.access(i, t);
							o || i.addEventListener(e, n, !0), k.access(i, t, (o || 0) + 1);
						},
						teardown: function () {
							var i = this.ownerDocument || this.document || this,
								o = k.access(i, t) - 1;
							o
								? k.access(i, t, o)
								: (i.removeEventListener(e, n, !0), k.remove(i, t));
						},
					};
				});
		var ut = y.location,
			In = { guid: Date.now() },
			Wt = /\?/;
		r.parseXML = function (e) {
			var t, n;
			if (!e || typeof e != "string") return null;
			try {
				t = new y.DOMParser().parseFromString(e, "text/xml");
			} catch {}
			return (
				(n = t && t.getElementsByTagName("parsererror")[0]),
				(!t || n) &&
					r.error(
						"Invalid XML: " +
							(n
								? r.map(n.childNodes, function (i) {
										return i.textContent;
								  }).join(`
`)
								: e)
					),
				t
			);
		};
		var zi = /\[\]$/,
			_n = /\r?\n/g,
			Gi = /^(?:submit|button|image|reset|file)$/i,
			Ui = /^(?:input|select|textarea|keygen)/i;
		function $t(e, t, n, i) {
			var o;
			if (Array.isArray(t))
				r.each(t, function (a, s) {
					n || zi.test(e)
						? i(e, s)
						: $t(
								e + "[" + (typeof s == "object" && s != null ? a : "") + "]",
								s,
								n,
								i
						  );
				});
			else if (!n && Ue(t) === "object")
				for (o in t) $t(e + "[" + o + "]", t[o], n, i);
			else i(e, t);
		}
		(r.param = function (e, t) {
			var n,
				i = [],
				o = function (a, s) {
					var c = H(s) ? s() : s;
					i[i.length] =
						encodeURIComponent(a) + "=" + encodeURIComponent(c ?? "");
				};
			if (e == null) return "";
			if (Array.isArray(e) || (e.jquery && !r.isPlainObject(e)))
				r.each(e, function () {
					o(this.name, this.value);
				});
			else for (n in e) $t(n, e[n], t, o);
			return i.join("&");
		}),
			r.fn.extend({
				serialize: function () {
					return r.param(this.serializeArray());
				},
				serializeArray: function () {
					return this.map(function () {
						var e = r.prop(this, "elements");
						return e ? r.makeArray(e) : this;
					})
						.filter(function () {
							var e = this.type;
							return (
								this.name &&
								!r(this).is(":disabled") &&
								Ui.test(this.nodeName) &&
								!Gi.test(e) &&
								(this.checked || !ot.test(e))
							);
						})
						.map(function (e, t) {
							var n = r(this).val();
							return n == null
								? null
								: Array.isArray(n)
								? r.map(n, function (i) {
										return {
											name: t.name,
											value: i.replace(
												_n,
												`\r
`
											),
										};
								  })
								: {
										name: t.name,
										value: n.replace(
											_n,
											`\r
`
										),
								  };
						})
						.get();
				},
			});
		var Vi = /%20/g,
			Ki = /#.*$/,
			Yi = /([?&])_=[^&]*/,
			Qi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Ji = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Zi = /^(?:GET|HEAD)$/,
			er = /^\/\//,
			Xn = {},
			zt = {},
			Wn = "*/".concat("*"),
			Gt = O.createElement("a");
		Gt.href = ut.href;
		function $n(e) {
			return function (t, n) {
				typeof t != "string" && ((n = t), (t = "*"));
				var i,
					o = 0,
					a = t.toLowerCase().match(Ne) || [];
				if (H(n))
					for (; (i = a[o++]); )
						i[0] === "+"
							? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
							: (e[i] = e[i] || []).push(n);
			};
		}
		function zn(e, t, n, i) {
			var o = {},
				a = e === zt;
			function s(c) {
				var f;
				return (
					(o[c] = !0),
					r.each(e[c] || [], function (p, m) {
						var T = m(t, n, i);
						if (typeof T == "string" && !a && !o[T])
							return t.dataTypes.unshift(T), s(T), !1;
						if (a) return !(f = T);
					}),
					f
				);
			}
			return s(t.dataTypes[0]) || (!o["*"] && s("*"));
		}
		function Ut(e, t) {
			var n,
				i,
				o = r.ajaxSettings.flatOptions || {};
			for (n in t) t[n] !== void 0 && ((o[n] ? e : i || (i = {}))[n] = t[n]);
			return i && r.extend(!0, e, i), e;
		}
		function tr(e, t, n) {
			for (var i, o, a, s, c = e.contents, f = e.dataTypes; f[0] === "*"; )
				f.shift(),
					i === void 0 &&
						(i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i) {
				for (o in c)
					if (c[o] && c[o].test(i)) {
						f.unshift(o);
						break;
					}
			}
			if (f[0] in n) a = f[0];
			else {
				for (o in n) {
					if (!f[0] || e.converters[o + " " + f[0]]) {
						a = o;
						break;
					}
					s || (s = o);
				}
				a = a || s;
			}
			if (a) return a !== f[0] && f.unshift(a), n[a];
		}
		function nr(e, t, n, i) {
			var o,
				a,
				s,
				c,
				f,
				p = {},
				m = e.dataTypes.slice();
			if (m[1]) for (s in e.converters) p[s.toLowerCase()] = e.converters[s];
			for (a = m.shift(); a; )
				if (
					(e.responseFields[a] && (n[e.responseFields[a]] = t),
					!f && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
					(f = a),
					(a = m.shift()),
					a)
				) {
					if (a === "*") a = f;
					else if (f !== "*" && f !== a) {
						if (((s = p[f + " " + a] || p["* " + a]), !s)) {
							for (o in p)
								if (
									((c = o.split(" ")),
									c[1] === a && ((s = p[f + " " + c[0]] || p["* " + c[0]]), s))
								) {
									s === !0
										? (s = p[o])
										: p[o] !== !0 && ((a = c[0]), m.unshift(c[1]));
									break;
								}
						}
						if (s !== !0)
							if (s && e.throws) t = s(t);
							else
								try {
									t = s(t);
								} catch (T) {
									return {
										state: "parsererror",
										error: s ? T : "No conversion from " + f + " to " + a,
									};
								}
					}
				}
			return { state: "success", data: t };
		}
		r.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: ut.href,
				type: "GET",
				isLocal: Ji.test(ut.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Wn,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript",
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON",
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": r.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t ? Ut(Ut(e, r.ajaxSettings), t) : Ut(r.ajaxSettings, e);
			},
			ajaxPrefilter: $n(Xn),
			ajaxTransport: $n(zt),
			ajax: function (e, t) {
				typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
				var n,
					i,
					o,
					a,
					s,
					c,
					f,
					p,
					m,
					T,
					g = r.ajaxSetup({}, t),
					v = g.context || g,
					D = g.context && (v.nodeType || v.jquery) ? r(v) : r.event,
					q = r.Deferred(),
					N = r.Callbacks("once memory"),
					ae = g.statusCode || {},
					oe = {},
					me = {},
					Y = "canceled",
					M = {
						readyState: 0,
						getResponseHeader: function (X) {
							var ne;
							if (f) {
								if (!a)
									for (a = {}; (ne = Qi.exec(o)); )
										a[ne[1].toLowerCase() + " "] = (
											a[ne[1].toLowerCase() + " "] || []
										).concat(ne[2]);
								ne = a[X.toLowerCase() + " "];
							}
							return ne == null ? null : ne.join(", ");
						},
						getAllResponseHeaders: function () {
							return f ? o : null;
						},
						setRequestHeader: function (X, ne) {
							return (
								f == null &&
									((X = me[X.toLowerCase()] = me[X.toLowerCase()] || X),
									(oe[X] = ne)),
								this
							);
						},
						overrideMimeType: function (X) {
							return f == null && (g.mimeType = X), this;
						},
						statusCode: function (X) {
							var ne;
							if (X)
								if (f) M.always(X[M.status]);
								else for (ne in X) ae[ne] = [ae[ne], X[ne]];
							return this;
						},
						abort: function (X) {
							var ne = X || Y;
							return n && n.abort(ne), ge(0, ne), this;
						},
					};
				if (
					(q.promise(M),
					(g.url = ((e || g.url || ut.href) + "").replace(
						er,
						ut.protocol + "//"
					)),
					(g.type = t.method || t.type || g.method || g.type),
					(g.dataTypes = (g.dataType || "*").toLowerCase().match(Ne) || [""]),
					g.crossDomain == null)
				) {
					c = O.createElement("a");
					try {
						(c.href = g.url),
							(c.href = c.href),
							(g.crossDomain =
								Gt.protocol + "//" + Gt.host != c.protocol + "//" + c.host);
					} catch {
						g.crossDomain = !0;
					}
				}
				if (
					(g.data &&
						g.processData &&
						typeof g.data != "string" &&
						(g.data = r.param(g.data, g.traditional)),
					zn(Xn, g, t, M),
					f)
				)
					return M;
				(p = r.event && g.global),
					p && r.active++ === 0 && r.event.trigger("ajaxStart"),
					(g.type = g.type.toUpperCase()),
					(g.hasContent = !Zi.test(g.type)),
					(i = g.url.replace(Ki, "")),
					g.hasContent
						? g.data &&
						  g.processData &&
						  (g.contentType || "").indexOf(
								"application/x-www-form-urlencoded"
						  ) === 0 &&
						  (g.data = g.data.replace(Vi, "+"))
						: ((T = g.url.slice(i.length)),
						  g.data &&
								(g.processData || typeof g.data == "string") &&
								((i += (Wt.test(i) ? "&" : "?") + g.data), delete g.data),
						  g.cache === !1 &&
								((i = i.replace(Yi, "$1")),
								(T = (Wt.test(i) ? "&" : "?") + "_=" + In.guid++ + T)),
						  (g.url = i + T)),
					g.ifModified &&
						(r.lastModified[i] &&
							M.setRequestHeader("If-Modified-Since", r.lastModified[i]),
						r.etag[i] && M.setRequestHeader("If-None-Match", r.etag[i])),
					((g.data && g.hasContent && g.contentType !== !1) || t.contentType) &&
						M.setRequestHeader("Content-Type", g.contentType),
					M.setRequestHeader(
						"Accept",
						g.dataTypes[0] && g.accepts[g.dataTypes[0]]
							? g.accepts[g.dataTypes[0]] +
									(g.dataTypes[0] !== "*" ? ", " + Wn + "; q=0.01" : "")
							: g.accepts["*"]
					);
				for (m in g.headers) M.setRequestHeader(m, g.headers[m]);
				if (g.beforeSend && (g.beforeSend.call(v, M, g) === !1 || f))
					return M.abort();
				if (
					((Y = "abort"),
					N.add(g.complete),
					M.done(g.success),
					M.fail(g.error),
					(n = zn(zt, g, t, M)),
					!n)
				)
					ge(-1, "No Transport");
				else {
					if (((M.readyState = 1), p && D.trigger("ajaxSend", [M, g]), f))
						return M;
					g.async &&
						g.timeout > 0 &&
						(s = y.setTimeout(function () {
							M.abort("timeout");
						}, g.timeout));
					try {
						(f = !1), n.send(oe, ge);
					} catch (X) {
						if (f) throw X;
						ge(-1, X);
					}
				}
				function ge(X, ne, lt, Ct) {
					var ve,
						_e,
						Xe,
						ye,
						Me,
						Se = ne;
					f ||
						((f = !0),
						s && y.clearTimeout(s),
						(n = void 0),
						(o = Ct || ""),
						(M.readyState = X > 0 ? 4 : 0),
						(ve = (X >= 200 && X < 300) || X === 304),
						lt && (ye = tr(g, M, lt)),
						!ve &&
							r.inArray("script", g.dataTypes) > -1 &&
							r.inArray("json", g.dataTypes) < 0 &&
							(g.converters["text script"] = function () {}),
						(ye = nr(g, ye, M, ve)),
						ve
							? (g.ifModified &&
									((Me = M.getResponseHeader("Last-Modified")),
									Me && (r.lastModified[i] = Me),
									(Me = M.getResponseHeader("etag")),
									Me && (r.etag[i] = Me)),
							  X === 204 || g.type === "HEAD"
									? (Se = "nocontent")
									: X === 304
									? (Se = "notmodified")
									: ((Se = ye.state),
									  (_e = ye.data),
									  (Xe = ye.error),
									  (ve = !Xe)))
							: ((Xe = Se), (X || !Se) && ((Se = "error"), X < 0 && (X = 0))),
						(M.status = X),
						(M.statusText = (ne || Se) + ""),
						ve ? q.resolveWith(v, [_e, Se, M]) : q.rejectWith(v, [M, Se, Xe]),
						M.statusCode(ae),
						(ae = void 0),
						p &&
							D.trigger(ve ? "ajaxSuccess" : "ajaxError", [M, g, ve ? _e : Xe]),
						N.fireWith(v, [M, Se]),
						p &&
							(D.trigger("ajaxComplete", [M, g]),
							--r.active || r.event.trigger("ajaxStop")));
				}
				return M;
			},
			getJSON: function (e, t, n) {
				return r.get(e, t, n, "json");
			},
			getScript: function (e, t) {
				return r.get(e, void 0, t, "script");
			},
		}),
			r.each(["get", "post"], function (e, t) {
				r[t] = function (n, i, o, a) {
					return (
						H(i) && ((a = a || o), (o = i), (i = void 0)),
						r.ajax(
							r.extend(
								{ url: n, type: t, dataType: a, data: i, success: o },
								r.isPlainObject(n) && n
							)
						)
					);
				};
			}),
			r.ajaxPrefilter(function (e) {
				var t;
				for (t in e.headers)
					t.toLowerCase() === "content-type" &&
						(e.contentType = e.headers[t] || "");
			}),
			(r._evalUrl = function (e, t, n) {
				return r.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					converters: { "text script": function () {} },
					dataFilter: function (i) {
						r.globalEval(i, t, n);
					},
				});
			}),
			r.fn.extend({
				wrapAll: function (e) {
					var t;
					return (
						this[0] &&
							(H(e) && (e = e.call(this[0])),
							(t = r(e, this[0].ownerDocument).eq(0).clone(!0)),
							this[0].parentNode && t.insertBefore(this[0]),
							t
								.map(function () {
									for (var n = this; n.firstElementChild; )
										n = n.firstElementChild;
									return n;
								})
								.append(this)),
						this
					);
				},
				wrapInner: function (e) {
					return H(e)
						? this.each(function (t) {
								r(this).wrapInner(e.call(this, t));
						  })
						: this.each(function () {
								var t = r(this),
									n = t.contents();
								n.length ? n.wrapAll(e) : t.append(e);
						  });
				},
				wrap: function (e) {
					var t = H(e);
					return this.each(function (n) {
						r(this).wrapAll(t ? e.call(this, n) : e);
					});
				},
				unwrap: function (e) {
					return (
						this.parent(e)
							.not("body")
							.each(function () {
								r(this).replaceWith(this.childNodes);
							}),
						this
					);
				},
			}),
			(r.expr.pseudos.hidden = function (e) {
				return !r.expr.pseudos.visible(e);
			}),
			(r.expr.pseudos.visible = function (e) {
				return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
			}),
			(r.ajaxSettings.xhr = function () {
				try {
					return new y.XMLHttpRequest();
				} catch {}
			});
		var ir = { 0: 200, 1223: 204 },
			ft = r.ajaxSettings.xhr();
		(z.cors = !!ft && "withCredentials" in ft),
			(z.ajax = ft = !!ft),
			r.ajaxTransport(function (e) {
				var t, n;
				if (z.cors || (ft && !e.crossDomain))
					return {
						send: function (i, o) {
							var a,
								s = e.xhr();
							if (
								(s.open(e.type, e.url, e.async, e.username, e.password),
								e.xhrFields)
							)
								for (a in e.xhrFields) s[a] = e.xhrFields[a];
							e.mimeType &&
								s.overrideMimeType &&
								s.overrideMimeType(e.mimeType),
								!e.crossDomain &&
									!i["X-Requested-With"] &&
									(i["X-Requested-With"] = "XMLHttpRequest");
							for (a in i) s.setRequestHeader(a, i[a]);
							(t = function (c) {
								return function () {
									t &&
										((t =
											n =
											s.onload =
											s.onerror =
											s.onabort =
											s.ontimeout =
											s.onreadystatechange =
												null),
										c === "abort"
											? s.abort()
											: c === "error"
											? typeof s.status != "number"
												? o(0, "error")
												: o(s.status, s.statusText)
											: o(
													ir[s.status] || s.status,
													s.statusText,
													(s.responseType || "text") !== "text" ||
														typeof s.responseText != "string"
														? { binary: s.response }
														: { text: s.responseText },
													s.getAllResponseHeaders()
											  ));
								};
							}),
								(s.onload = t()),
								(n = s.onerror = s.ontimeout = t("error")),
								s.onabort !== void 0
									? (s.onabort = n)
									: (s.onreadystatechange = function () {
											s.readyState === 4 &&
												y.setTimeout(function () {
													t && n();
												});
									  }),
								(t = t("abort"));
							try {
								s.send((e.hasContent && e.data) || null);
							} catch (c) {
								if (t) throw c;
							}
						},
						abort: function () {
							t && t();
						},
					};
			}),
			r.ajaxPrefilter(function (e) {
				e.crossDomain && (e.contents.script = !1);
			}),
			r.ajaxSetup({
				accepts: {
					script:
						"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
				},
				contents: { script: /\b(?:java|ecma)script\b/ },
				converters: {
					"text script": function (e) {
						return r.globalEval(e), e;
					},
				},
			}),
			r.ajaxPrefilter("script", function (e) {
				e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
			}),
			r.ajaxTransport("script", function (e) {
				if (e.crossDomain || e.scriptAttrs) {
					var t, n;
					return {
						send: function (i, o) {
							(t = r("<script>")
								.attr(e.scriptAttrs || {})
								.prop({ charset: e.scriptCharset, src: e.url })
								.on(
									"load error",
									(n = function (a) {
										t.remove(),
											(n = null),
											a && o(a.type === "error" ? 404 : 200, a.type);
									})
								)),
								O.head.appendChild(t[0]);
						},
						abort: function () {
							n && n();
						},
					};
				}
			});
		var Gn = [],
			Vt = /(=)\?(?=&|$)|\?\?/;
		r.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = Gn.pop() || r.expando + "_" + In.guid++;
				return (this[e] = !0), e;
			},
		}),
			r.ajaxPrefilter("json jsonp", function (e, t, n) {
				var i,
					o,
					a,
					s =
						e.jsonp !== !1 &&
						(Vt.test(e.url)
							? "url"
							: typeof e.data == "string" &&
							  (e.contentType || "").indexOf(
									"application/x-www-form-urlencoded"
							  ) === 0 &&
							  Vt.test(e.data) &&
							  "data");
				if (s || e.dataTypes[0] === "jsonp")
					return (
						(i = e.jsonpCallback =
							H(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
						s
							? (e[s] = e[s].replace(Vt, "$1" + i))
							: e.jsonp !== !1 &&
							  (e.url += (Wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
						(e.converters["script json"] = function () {
							return a || r.error(i + " was not called"), a[0];
						}),
						(e.dataTypes[0] = "json"),
						(o = y[i]),
						(y[i] = function () {
							a = arguments;
						}),
						n.always(function () {
							o === void 0 ? r(y).removeProp(i) : (y[i] = o),
								e[i] && ((e.jsonpCallback = t.jsonpCallback), Gn.push(i)),
								a && H(o) && o(a[0]),
								(a = o = void 0);
						}),
						"script"
					);
			}),
			(z.createHTMLDocument = (function () {
				var e = O.implementation.createHTMLDocument("").body;
				return (
					(e.innerHTML = "<form></form><form></form>"),
					e.childNodes.length === 2
				);
			})()),
			(r.parseHTML = function (e, t, n) {
				if (typeof e != "string") return [];
				typeof t == "boolean" && ((n = t), (t = !1));
				var i, o, a;
				return (
					t ||
						(z.createHTMLDocument
							? ((t = O.implementation.createHTMLDocument("")),
							  (i = t.createElement("base")),
							  (i.href = O.location.href),
							  t.head.appendChild(i))
							: (t = O)),
					(o = cn.exec(e)),
					(a = !n && []),
					o
						? [t.createElement(o[1])]
						: ((o = Tn([e], t, a)),
						  a && a.length && r(a).remove(),
						  r.merge([], o.childNodes))
				);
			}),
			(r.fn.load = function (e, t, n) {
				var i,
					o,
					a,
					s = this,
					c = e.indexOf(" ");
				return (
					c > -1 && ((i = Be(e.slice(c))), (e = e.slice(0, c))),
					H(t)
						? ((n = t), (t = void 0))
						: t && typeof t == "object" && (o = "POST"),
					s.length > 0 &&
						r
							.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
							.done(function (f) {
								(a = arguments),
									s.html(i ? r("<div>").append(r.parseHTML(f)).find(i) : f);
							})
							.always(
								n &&
									function (f, p) {
										s.each(function () {
											n.apply(this, a || [f.responseText, p, f]);
										});
									}
							),
					this
				);
			}),
			(r.expr.pseudos.animated = function (e) {
				return r.grep(r.timers, function (t) {
					return e === t.elem;
				}).length;
			}),
			(r.offset = {
				setOffset: function (e, t, n) {
					var i,
						o,
						a,
						s,
						c,
						f,
						p,
						m = r.css(e, "position"),
						T = r(e),
						g = {};
					m === "static" && (e.style.position = "relative"),
						(c = T.offset()),
						(a = r.css(e, "top")),
						(f = r.css(e, "left")),
						(p =
							(m === "absolute" || m === "fixed") &&
							(a + f).indexOf("auto") > -1),
						p
							? ((i = T.position()), (s = i.top), (o = i.left))
							: ((s = parseFloat(a) || 0), (o = parseFloat(f) || 0)),
						H(t) && (t = t.call(e, n, r.extend({}, c))),
						t.top != null && (g.top = t.top - c.top + s),
						t.left != null && (g.left = t.left - c.left + o),
						"using" in t ? t.using.call(e, g) : T.css(g);
				},
			}),
			r.fn.extend({
				offset: function (e) {
					if (arguments.length)
						return e === void 0
							? this
							: this.each(function (o) {
									r.offset.setOffset(this, e, o);
							  });
					var t,
						n,
						i = this[0];
					if (i)
						return i.getClientRects().length
							? ((t = i.getBoundingClientRect()),
							  (n = i.ownerDocument.defaultView),
							  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
							: { top: 0, left: 0 };
				},
				position: function () {
					if (this[0]) {
						var e,
							t,
							n,
							i = this[0],
							o = { top: 0, left: 0 };
						if (r.css(i, "position") === "fixed") t = i.getBoundingClientRect();
						else {
							for (
								t = this.offset(),
									n = i.ownerDocument,
									e = i.offsetParent || n.documentElement;
								e &&
								(e === n.body || e === n.documentElement) &&
								r.css(e, "position") === "static";

							)
								e = e.parentNode;
							e &&
								e !== i &&
								e.nodeType === 1 &&
								((o = r(e).offset()),
								(o.top += r.css(e, "borderTopWidth", !0)),
								(o.left += r.css(e, "borderLeftWidth", !0)));
						}
						return {
							top: t.top - o.top - r.css(i, "marginTop", !0),
							left: t.left - o.left - r.css(i, "marginLeft", !0),
						};
					}
				},
				offsetParent: function () {
					return this.map(function () {
						for (
							var e = this.offsetParent;
							e && r.css(e, "position") === "static";

						)
							e = e.offsetParent;
						return e || Oe;
					});
				},
			}),
			r.each(
				{ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
				function (e, t) {
					var n = t === "pageYOffset";
					r.fn[e] = function (i) {
						return Fe(
							this,
							function (o, a, s) {
								var c;
								if (
									(Le(o) ? (c = o) : o.nodeType === 9 && (c = o.defaultView),
									s === void 0)
								)
									return c ? c[t] : o[a];
								c
									? c.scrollTo(n ? c.pageXOffset : s, n ? s : c.pageYOffset)
									: (o[a] = s);
							},
							e,
							i,
							arguments.length
						);
					};
				}
			),
			r.each(["top", "left"], function (e, t) {
				r.cssHooks[t] = Dn(z.pixelPosition, function (n, i) {
					if (i)
						return (i = at(n, t)), Ht.test(i) ? r(n).position()[t] + "px" : i;
				});
			}),
			r.each({ Height: "height", Width: "width" }, function (e, t) {
				r.each(
					{ padding: "inner" + e, content: t, "": "outer" + e },
					function (n, i) {
						r.fn[i] = function (o, a) {
							var s = arguments.length && (n || typeof o != "boolean"),
								c = n || (o === !0 || a === !0 ? "margin" : "border");
							return Fe(
								this,
								function (f, p, m) {
									var T;
									return Le(f)
										? i.indexOf("outer") === 0
											? f["inner" + e]
											: f.document.documentElement["client" + e]
										: f.nodeType === 9
										? ((T = f.documentElement),
										  Math.max(
												f.body["scroll" + e],
												T["scroll" + e],
												f.body["offset" + e],
												T["offset" + e],
												T["client" + e]
										  ))
										: m === void 0
										? r.css(f, p, c)
										: r.style(f, p, m, c);
								},
								t,
								s ? o : void 0,
								s
							);
						};
					}
				);
			}),
			r.each(
				[
					"ajaxStart",
					"ajaxStop",
					"ajaxComplete",
					"ajaxError",
					"ajaxSuccess",
					"ajaxSend",
				],
				function (e, t) {
					r.fn[t] = function (n) {
						return this.on(t, n);
					};
				}
			),
			r.fn.extend({
				bind: function (e, t, n) {
					return this.on(e, null, t, n);
				},
				unbind: function (e, t) {
					return this.off(e, null, t);
				},
				delegate: function (e, t, n, i) {
					return this.on(t, e, n, i);
				},
				undelegate: function (e, t, n) {
					return arguments.length === 1
						? this.off(e, "**")
						: this.off(t, e || "**", n);
				},
				hover: function (e, t) {
					return this.mouseenter(e).mouseleave(t || e);
				},
			}),
			r.each(
				"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
					" "
				),
				function (e, t) {
					r.fn[t] = function (n, i) {
						return arguments.length > 0
							? this.on(t, null, n, i)
							: this.trigger(t);
					};
				}
			);
		var rr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
		(r.proxy = function (e, t) {
			var n, i, o;
			if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!H(e)))
				return (
					(i = _.call(arguments, 2)),
					(o = function () {
						return e.apply(t || this, i.concat(_.call(arguments)));
					}),
					(o.guid = e.guid = e.guid || r.guid++),
					o
				);
		}),
			(r.holdReady = function (e) {
				e ? r.readyWait++ : r.ready(!0);
			}),
			(r.isArray = Array.isArray),
			(r.parseJSON = JSON.parse),
			(r.nodeName = Te),
			(r.isFunction = H),
			(r.isWindow = Le),
			(r.camelCase = De),
			(r.type = Ue),
			(r.now = Date.now),
			(r.isNumeric = function (e) {
				var t = r.type(e);
				return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
			}),
			(r.trim = function (e) {
				return e == null ? "" : (e + "").replace(rr, "$1");
			});
		var or = y.jQuery,
			ar = y.$;
		return (
			(r.noConflict = function (e) {
				return (
					y.$ === r && (y.$ = ar), e && y.jQuery === r && (y.jQuery = or), r
				);
			}),
			typeof E > "u" && (y.jQuery = y.$ = r),
			r
		);
	});
})(Ar);
const V = on;
let wr = {
	Column: [
		"AtomicNumber",
		"Symbol",
		"Name",
		"AtomicMass",
		"CPKHexColor",
		"ElectronConfiguration",
		"Electronegativity",
		"AtomicRadius",
		"IonizationEnergy",
		"ElectronAffinity",
		"OxidationStates",
		"StandardState",
		"MeltingPoint",
		"BoilingPoint",
		"Density",
		"GroupBlock",
		"YearDiscovered",
	],
	Row: [
		[
			"1",
			"H",
			"Hydrogen",
			"1.0080",
			"FFFFFF",
			"1s1",
			"2.2",
			"120",
			"13.598",
			"0.754",
			"+1, -1",
			"Gas",
			"13.81",
			"20.28",
			"0.00008988",
			"Nonmetal",
			"1766",
		],
		[
			"2",
			"He",
			"Helium",
			"4.00260",
			"D9FFFF",
			"1s2",
			"",
			"140",
			"24.587",
			"",
			"0",
			"Gas",
			"0.95",
			"4.22",
			"0.0001785",
			"Noble gas",
			"1868",
		],
		[
			"3",
			"Li",
			"Lithium",
			"7.0",
			"CC80FF",
			"[He]2s1",
			"0.98",
			"182",
			"5.392",
			"0.618",
			"+1",
			"Solid",
			"453.65",
			"1615",
			"0.534",
			"Alkali metal",
			"1817",
		],
		[
			"4",
			"Be",
			"Beryllium",
			"9.012183",
			"C2FF00",
			"[He]2s2",
			"1.57",
			"153",
			"9.323",
			"",
			"+2",
			"Solid",
			"1560",
			"2744",
			"1.85",
			"Alkaline earth metal",
			"1798",
		],
		[
			"5",
			"B",
			"Boron",
			"10.81",
			"FFB5B5",
			"[He]2s2 2p1",
			"2.04",
			"192",
			"8.298",
			"0.277",
			"+3",
			"Solid",
			"2348",
			"4273",
			"2.37",
			"Metalloid",
			"1808",
		],
		[
			"6",
			"C",
			"Carbon",
			"12.011",
			"909090",
			"[He]2s2 2p2",
			"2.55",
			"170",
			"11.260",
			"1.263",
			"+4, +2, -4",
			"Solid",
			"3823",
			"4098",
			"2.2670",
			"Nonmetal",
			"Ancient",
		],
		[
			"7",
			"N",
			"Nitrogen",
			"14.007",
			"3050F8",
			"[He] 2s2 2p3",
			"3.04",
			"155",
			"14.534",
			"",
			"+5, +4, +3, +2, +1, -1, -2, -3",
			"Gas",
			"63.15",
			"77.36",
			"0.0012506",
			"Nonmetal",
			"1772",
		],
		[
			"8",
			"O",
			"Oxygen",
			"15.999",
			"FF0D0D",
			"[He]2s2 2p4",
			"3.44",
			"152",
			"13.618",
			"1.461",
			"-2",
			"Gas",
			"54.36",
			"90.2",
			"0.001429",
			"Nonmetal",
			"1774",
		],
		[
			"9",
			"F",
			"Fluorine",
			"18.99840316",
			"90E050",
			"[He]2s2 2p5",
			"3.98",
			"135",
			"17.423",
			"3.339",
			"-1",
			"Gas",
			"53.53",
			"85.03",
			"0.001696",
			"Halogen",
			"1670",
		],
		[
			"10",
			"Ne",
			"Neon",
			"20.180",
			"B3E3F5",
			"[He]2s2 2p6",
			"",
			"154",
			"21.565",
			"",
			"0",
			"Gas",
			"24.56",
			"27.07",
			"0.0008999",
			"Noble gas",
			"1898",
		],
		[
			"11",
			"Na",
			"Sodium",
			"22.9897693",
			"AB5CF2",
			"[Ne]3s1",
			"0.93",
			"227",
			"5.139",
			"0.548",
			"+1",
			"Solid",
			"370.95",
			"1156",
			"0.97",
			"Alkali metal",
			"1807",
		],
		[
			"12",
			"Mg",
			"Magnesium",
			"24.305",
			"8AFF00",
			"[Ne]3s2",
			"1.31",
			"173",
			"7.646",
			"",
			"+2",
			"Solid",
			"923",
			"1363",
			"1.74",
			"Alkaline earth metal",
			"1808",
		],
		[
			"13",
			"Al",
			"Aluminum",
			"26.981538",
			"BFA6A6",
			"[Ne]3s2 3p1",
			"1.61",
			"184",
			"5.986",
			"0.441",
			"+3",
			"Solid",
			"933.437",
			"2792",
			"2.70",
			"Post-transition metal",
			"Ancient",
		],
		[
			"14",
			"Si",
			"Silicon",
			"28.085",
			"F0C8A0",
			"[Ne]3s2 3p2",
			"1.9",
			"210",
			"8.152",
			"1.385",
			"+4, +2, -4",
			"Solid",
			"1687",
			"3538",
			"2.3296",
			"Metalloid",
			"1854",
		],
		[
			"15",
			"P",
			"Phosphorus",
			"30.97376200",
			"FF8000",
			"[Ne]3s2 3p3",
			"2.19",
			"180",
			"10.487",
			"0.746",
			"+5, +3, -3",
			"Solid",
			"317.3",
			"553.65",
			"1.82",
			"Nonmetal",
			"1669",
		],
		[
			"16",
			"S",
			"Sulfur",
			"32.07",
			"FFFF30",
			"[Ne]3s2 3p4",
			"2.58",
			"180",
			"10.360",
			"2.077",
			"+6, +4, -2",
			"Solid",
			"388.36",
			"717.75",
			"2.067",
			"Nonmetal",
			"Ancient",
		],
		[
			"17",
			"Cl",
			"Chlorine",
			"35.45",
			"1FF01F",
			"[Ne]3s2 3p5",
			"3.16",
			"175",
			"12.968",
			"3.617",
			"+7, +5, +1, -1",
			"Gas",
			"171.65",
			"239.11",
			"0.003214",
			"Halogen",
			"1774",
		],
		[
			"18",
			"Ar",
			"Argon",
			"39.9",
			"80D1E3",
			"[Ne]3s2 3p6",
			"",
			"188",
			"15.760",
			"",
			"0",
			"Gas",
			"83.8",
			"87.3",
			"0.0017837",
			"Noble gas",
			"1894",
		],
		[
			"19",
			"K",
			"Potassium",
			"39.0983",
			"8F40D4",
			"[Ar]4s1",
			"0.82",
			"275",
			"4.341",
			"0.501",
			"+1",
			"Solid",
			"336.53",
			"1032",
			"0.89",
			"Alkali metal",
			"1807",
		],
		[
			"20",
			"Ca",
			"Calcium",
			"40.08",
			"3DFF00",
			"[Ar]4s2",
			"1",
			"231",
			"6.113",
			"",
			"+2",
			"Solid",
			"1115",
			"1757",
			"1.54",
			"Alkaline earth metal",
			"Ancient",
		],
		[
			"21",
			"Sc",
			"Scandium",
			"44.95591",
			"E6E6E6",
			"[Ar]4s2 3d1",
			"1.36",
			"211",
			"6.561",
			"0.188",
			"+3",
			"Solid",
			"1814",
			"3109",
			"2.99",
			"Transition metal",
			"1879",
		],
		[
			"22",
			"Ti",
			"Titanium",
			"47.867",
			"BFC2C7",
			"[Ar]4s2 3d2",
			"1.54",
			"187",
			"6.828",
			"0.079",
			"+4, +3, +2",
			"Solid",
			"1941",
			"3560",
			"4.5",
			"Transition metal",
			"1791",
		],
		[
			"23",
			"V",
			"Vanadium",
			"50.9415",
			"A6A6AB",
			"[Ar]4s2 3d3",
			"1.63",
			"179",
			"6.746",
			"0.525",
			"+5, +4, +3, +2",
			"Solid",
			"2183",
			"3680",
			"6.0",
			"Transition metal",
			"1801",
		],
		[
			"24",
			"Cr",
			"Chromium",
			"51.996",
			"8A99C7",
			"[Ar]3d5 4s1",
			"1.66",
			"189",
			"6.767",
			"0.666",
			"+6, +3, +2",
			"Solid",
			"2180",
			"2944",
			"7.15",
			"Transition metal",
			"1797",
		],
		[
			"25",
			"Mn",
			"Manganese",
			"54.93804",
			"9C7AC7",
			"[Ar]4s2 3d5",
			"1.55",
			"197",
			"7.434",
			"",
			"+7, +4, +3, +2",
			"Solid",
			"1519",
			"2334",
			"7.3",
			"Transition metal",
			"1774",
		],
		[
			"26",
			"Fe",
			"Iron",
			"55.84",
			"E06633",
			"[Ar]4s2 3d6",
			"1.83",
			"194",
			"7.902",
			"0.163",
			"+3, +2",
			"Solid",
			"1811",
			"3134",
			"7.874",
			"Transition metal",
			"Ancient",
		],
		[
			"27",
			"Co",
			"Cobalt",
			"58.93319",
			"F090A0",
			"[Ar]4s2 3d7",
			"1.88",
			"192",
			"7.881",
			"0.661",
			"+3, +2",
			"Solid",
			"1768",
			"3200",
			"8.86",
			"Transition metal",
			"1735",
		],
		[
			"28",
			"Ni",
			"Nickel",
			"58.693",
			"50D050",
			"[Ar]4s2 3d8",
			"1.91",
			"163",
			"7.640",
			"1.156",
			"+3, +2",
			"Solid",
			"1728",
			"3186",
			"8.912",
			"Transition metal",
			"1751",
		],
		[
			"29",
			"Cu",
			"Copper",
			"63.55",
			"C88033",
			"[Ar]4s1 3d10",
			"1.9",
			"140",
			"7.726",
			"1.228",
			"+2, +1",
			"Solid",
			"1357.77",
			"2835",
			"8.933",
			"Transition metal",
			"Ancient",
		],
		[
			"30",
			"Zn",
			"Zinc",
			"65.4",
			"7D80B0",
			"[Ar]4s2 3d10",
			"1.65",
			"139",
			"9.394",
			"",
			"+2",
			"Solid",
			"692.68",
			"1180",
			"7.134",
			"Transition metal",
			"1746",
		],
		[
			"31",
			"Ga",
			"Gallium",
			"69.723",
			"C28F8F",
			"[Ar]4s2 3d10 4p1",
			"1.81",
			"187",
			"5.999",
			"0.3",
			"+3",
			"Solid",
			"302.91",
			"2477",
			"5.91",
			"Post-transition metal",
			"1875",
		],
		[
			"32",
			"Ge",
			"Germanium",
			"72.63",
			"668F8F",
			"[Ar]4s2 3d10 4p2",
			"2.01",
			"211",
			"7.900",
			"1.35",
			"+4, +2",
			"Solid",
			"1211.4",
			"3106",
			"5.323",
			"Metalloid",
			"1886",
		],
		[
			"33",
			"As",
			"Arsenic",
			"74.92159",
			"BD80E3",
			"[Ar]4s2 3d10 4p3",
			"2.18",
			"185",
			"9.815",
			"0.81",
			"+5, +3, -3",
			"Solid",
			"1090",
			"887",
			"5.776",
			"Metalloid",
			"Ancient",
		],
		[
			"34",
			"Se",
			"Selenium",
			"78.97",
			"FFA100",
			"[Ar]4s2 3d10 4p4",
			"2.55",
			"190",
			"9.752",
			"2.021",
			"+6, +4, -2",
			"Solid",
			"493.65",
			"958",
			"4.809",
			"Nonmetal",
			"1817",
		],
		[
			"35",
			"Br",
			"Bromine",
			"79.90",
			"A62929",
			"[Ar]4s2 3d10 4p5",
			"2.96",
			"183",
			"11.814",
			"3.365",
			"+5, +1, -1",
			"Liquid",
			"265.95",
			"331.95",
			"3.11",
			"Halogen",
			"1826",
		],
		[
			"36",
			"Kr",
			"Krypton",
			"83.80",
			"5CB8D1",
			"[Ar]4s2 3d10 4p6",
			"3",
			"202",
			"14.000",
			"",
			"0",
			"Gas",
			"115.79",
			"119.93",
			"0.003733",
			"Noble gas",
			"1898",
		],
		[
			"37",
			"Rb",
			"Rubidium",
			"85.468",
			"702EB0",
			"[Kr]5s1",
			"0.82",
			"303",
			"4.177",
			"0.468",
			"+1",
			"Solid",
			"312.46",
			"961",
			"1.53",
			"Alkali metal",
			"1861",
		],
		[
			"38",
			"Sr",
			"Strontium",
			"87.62",
			"00FF00",
			"[Kr]5s2",
			"0.95",
			"249",
			"5.695",
			"",
			"+2",
			"Solid",
			"1050",
			"1655",
			"2.64",
			"Alkaline earth metal",
			"1790",
		],
		[
			"39",
			"Y",
			"Yttrium",
			"88.90584",
			"94FFFF",
			"[Kr]5s2 4d1",
			"1.22",
			"219",
			"6.217",
			"0.307",
			"+3",
			"Solid",
			"1795",
			"3618",
			"4.47",
			"Transition metal",
			"1794",
		],
		[
			"40",
			"Zr",
			"Zirconium",
			"91.22",
			"94E0E0",
			"[Kr]5s2 4d2",
			"1.33",
			"186",
			"6.634",
			"0.426",
			"+4",
			"Solid",
			"2128",
			"4682",
			"6.52",
			"Transition metal",
			"1789",
		],
		[
			"41",
			"Nb",
			"Niobium",
			"92.90637",
			"73C2C9",
			"[Kr]5s1 4d4",
			"1.6",
			"207",
			"6.759",
			"0.893",
			"+5, +3",
			"Solid",
			"2750",
			"5017",
			"8.57",
			"Transition metal",
			"1801",
		],
		[
			"42",
			"Mo",
			"Molybdenum",
			"95.95",
			"54B5B5",
			"[Kr]5s1 4d5",
			"2.16",
			"209",
			"7.092",
			"0.746",
			"+6",
			"Solid",
			"2896",
			"4912",
			"10.2",
			"Transition metal",
			"1778",
		],
		[
			"43",
			"Tc",
			"Technetium",
			"96.90636",
			"3B9E9E",
			"[Kr]5s2 4d5",
			"1.9",
			"209",
			"7.28",
			"0.55",
			"+7, +6, +4",
			"Solid",
			"2430",
			"4538",
			"11",
			"Transition metal",
			"1937",
		],
		[
			"44",
			"Ru",
			"Ruthenium",
			"101.1",
			"248F8F",
			"[Kr]5s1 4d7",
			"2.2",
			"207",
			"7.361",
			"1.05",
			"+3",
			"Solid",
			"2607",
			"4423",
			"12.1",
			"Transition metal",
			"1827",
		],
		[
			"45",
			"Rh",
			"Rhodium",
			"102.9055",
			"0A7D8C",
			"[Kr]5s1 4d8",
			"2.28",
			"195",
			"7.459",
			"1.137",
			"+3",
			"Solid",
			"2237",
			"3968",
			"12.4",
			"Transition metal",
			"1803",
		],
		[
			"46",
			"Pd",
			"Palladium",
			"106.42",
			"6985",
			"[Kr]4d10",
			"2.2",
			"202",
			"8.337",
			"0.557",
			"+3, +2",
			"Solid",
			"1828.05",
			"3236",
			"12.0",
			"Transition metal",
			"1803",
		],
		[
			"47",
			"Ag",
			"Silver",
			"107.868",
			"C0C0C0",
			"[Kr]5s1 4d10",
			"1.93",
			"172",
			"7.576",
			"1.302",
			"+1",
			"Solid",
			"1234.93",
			"2435",
			"10.501",
			"Transition metal",
			"Ancient",
		],
		[
			"48",
			"Cd",
			"Cadmium",
			"112.41",
			"FFD98F",
			"[Kr]5s2 4d10",
			"1.69",
			"158",
			"8.994",
			"",
			"+2",
			"Solid",
			"594.22",
			"1040",
			"8.69",
			"Transition metal",
			"1817",
		],
		[
			"49",
			"In",
			"Indium",
			"114.818",
			"A67573",
			"[Kr]5s2 4d10 5p1",
			"1.78",
			"193",
			"5.786",
			"0.3",
			"+3",
			"Solid",
			"429.75",
			"2345",
			"7.31",
			"Post-transition metal",
			"1863",
		],
		[
			"50",
			"Sn",
			"Tin",
			"118.71",
			"668080",
			"[Kr]5s2 4d10 5p2",
			"1.96",
			"217",
			"7.344",
			"1.2",
			"+4, +2",
			"Solid",
			"505.08",
			"2875",
			"7.287",
			"Post-transition metal",
			"Ancient",
		],
		[
			"51",
			"Sb",
			"Antimony",
			"121.760",
			"9E63B5",
			"[Kr]5s2 4d10 5p3",
			"2.05",
			"206",
			"8.64",
			"1.07",
			"+5, +3, -3",
			"Solid",
			"903.78",
			"1860",
			"6.685",
			"Metalloid",
			"Ancient",
		],
		[
			"52",
			"Te",
			"Tellurium",
			"127.6",
			"D47A00",
			"[Kr]5s2 4d10 5p4",
			"2.1",
			"206",
			"9.010",
			"1.971",
			"+6, +4, -2",
			"Solid",
			"722.66",
			"1261",
			"6.232",
			"Metalloid",
			"1782",
		],
		[
			"53",
			"I",
			"Iodine",
			"126.9045",
			"940094",
			"[Kr]5s2 4d10 5p5",
			"2.66",
			"198",
			"10.451",
			"3.059",
			"+7, +5, +1, -1",
			"Solid",
			"386.85",
			"457.55",
			"4.93",
			"Halogen",
			"1811",
		],
		[
			"54",
			"Xe",
			"Xenon",
			"131.29",
			"429EB0",
			"[Kr]5s2 4d10 5p6",
			"2.6",
			"216",
			"12.130",
			"",
			"0",
			"Gas",
			"161.36",
			"165.03",
			"0.005887",
			"Noble gas",
			"1898",
		],
		[
			"55",
			"Cs",
			"Cesium",
			"132.9054520",
			"57178F",
			"[Xe]6s1",
			"0.79",
			"343",
			"3.894",
			"0.472",
			"+1",
			"Solid",
			"301.59",
			"944",
			"1.93",
			"Alkali metal",
			"1860",
		],
		[
			"56",
			"Ba",
			"Barium",
			"137.33",
			"00C900",
			"[Xe]6s2",
			"0.89",
			"268",
			"5.212",
			"",
			"+2",
			"Solid",
			"1000",
			"2170",
			"3.62",
			"Alkaline earth metal",
			"1808",
		],
		[
			"57",
			"La",
			"Lanthanum",
			"138.9055",
			"70D4FF",
			"[Xe]6s2 5d1",
			"1.1",
			"240",
			"5.577",
			"0.5",
			"+3",
			"Solid",
			"1191",
			"3737",
			"6.15",
			"Lanthanide",
			"1839",
		],
		[
			"58",
			"Ce",
			"Cerium",
			"140.116",
			"FFFFC7",
			"[Xe]6s2 4f1 5d1",
			"1.12",
			"235",
			"5.539",
			"0.5",
			"+4, +3",
			"Solid",
			"1071",
			"3697",
			"6.770",
			"Lanthanide",
			"1803",
		],
		[
			"59",
			"Pr",
			"Praseodymium",
			"140.90766",
			"D9FFC7",
			"[Xe]6s2 4f3",
			"1.13",
			"239",
			"5.464",
			"",
			"+3",
			"Solid",
			"1204",
			"3793",
			"6.77",
			"Lanthanide",
			"1885",
		],
		[
			"60",
			"Nd",
			"Neodymium",
			"144.24",
			"C7FFC7",
			"[Xe]6s2 4f4",
			"1.14",
			"229",
			"5.525",
			"",
			"+3",
			"Solid",
			"1294",
			"3347",
			"7.01",
			"Lanthanide",
			"1885",
		],
		[
			"61",
			"Pm",
			"Promethium",
			"144.91276",
			"A3FFC7",
			"[Xe]6s2 4f5",
			"",
			"236",
			"5.55",
			"",
			"+3",
			"Solid",
			"1315",
			"3273",
			"7.26",
			"Lanthanide",
			"1945",
		],
		[
			"62",
			"Sm",
			"Samarium",
			"150.4",
			"8FFFC7",
			"[Xe]6s2 4f6",
			"1.17",
			"229",
			"5.644",
			"",
			"+3, +2",
			"Solid",
			"1347",
			"2067",
			"7.52",
			"Lanthanide",
			"1879",
		],
		[
			"63",
			"Eu",
			"Europium",
			"151.964",
			"61FFC7",
			"[Xe]6s2 4f7",
			"",
			"233",
			"5.670",
			"",
			"+3, +2",
			"Solid",
			"1095",
			"1802",
			"5.24",
			"Lanthanide",
			"1901",
		],
		[
			"64",
			"Gd",
			"Gadolinium",
			"157.2",
			"45FFC7",
			"[Xe]6s2 4f7 5d1",
			"1.2",
			"237",
			"6.150",
			"",
			"+3",
			"Solid",
			"1586",
			"3546",
			"7.90",
			"Lanthanide",
			"1880",
		],
		[
			"65",
			"Tb",
			"Terbium",
			"158.92535",
			"30FFC7",
			"[Xe]6s2 4f9",
			"",
			"221",
			"5.864",
			"",
			"+3",
			"Solid",
			"1629",
			"3503",
			"8.23",
			"Lanthanide",
			"1843",
		],
		[
			"66",
			"Dy",
			"Dysprosium",
			"162.500",
			"1FFFC7",
			"[Xe]6s2 4f10",
			"1.22",
			"229",
			"5.939",
			"",
			"+3",
			"Solid",
			"1685",
			"2840",
			"8.55",
			"Lanthanide",
			"1886",
		],
		[
			"67",
			"Ho",
			"Holmium",
			"164.93033",
			"00FF9C",
			"[Xe]6s2 4f11",
			"1.23",
			"216",
			"6.022",
			"",
			"+3",
			"Solid",
			"1747",
			"2973",
			"8.80",
			"Lanthanide",
			"1878",
		],
		[
			"68",
			"Er",
			"Erbium",
			"167.26",
			"",
			"[Xe]6s2 4f12",
			"1.24",
			"235",
			"6.108",
			"",
			"+3",
			"Solid",
			"1802",
			"3141",
			"9.07",
			"Lanthanide",
			"1843",
		],
		[
			"69",
			"Tm",
			"Thulium",
			"168.93422",
			"00D452",
			"[Xe]6s2 4f13",
			"1.25",
			"227",
			"6.184",
			"",
			"+3",
			"Solid",
			"1818",
			"2223",
			"9.32",
			"Lanthanide",
			"1879",
		],
		[
			"70",
			"Yb",
			"Ytterbium",
			"173.05",
			"00BF38",
			"[Xe]6s2 4f14",
			"",
			"242",
			"6.254",
			"",
			"+3, +2",
			"Solid",
			"1092",
			"1469",
			"6.90",
			"Lanthanide",
			"1878",
		],
		[
			"71",
			"Lu",
			"Lutetium",
			"174.9668",
			"00AB24",
			"[Xe]6s2 4f14 5d1",
			"1.27",
			"221",
			"5.426",
			"",
			"+3",
			"Solid",
			"1936",
			"3675",
			"9.84",
			"Lanthanide",
			"1907",
		],
		[
			"72",
			"Hf",
			"Hafnium",
			"178.49",
			"4DC2FF",
			"[Xe]6s2 4f14 5d2",
			"1.3",
			"212",
			"6.825",
			"",
			"+4",
			"Solid",
			"2506",
			"4876",
			"13.3",
			"Transition metal",
			"1923",
		],
		[
			"73",
			"Ta",
			"Tantalum",
			"180.9479",
			"4DA6FF",
			"[Xe]6s2 4f14 5d3",
			"1.5",
			"217",
			"7.89",
			"0.322",
			"+5",
			"Solid",
			"3290",
			"5731",
			"16.4",
			"Transition metal",
			"1802",
		],
		[
			"74",
			"W",
			"Tungsten",
			"183.84",
			"2194D6",
			"[Xe]6s2 4f14 5d4",
			"2.36",
			"210",
			"7.98",
			"0.815",
			"+6",
			"Solid",
			"3695",
			"5828",
			"19.3",
			"Transition metal",
			"1783",
		],
		[
			"75",
			"Re",
			"Rhenium",
			"186.207",
			"267DAB",
			"[Xe]6s2 4f14 5d5",
			"1.9",
			"217",
			"7.88",
			"0.15",
			"+7, +6, +4",
			"Solid",
			"3459",
			"5869",
			"20.8",
			"Transition metal",
			"1925",
		],
		[
			"76",
			"Os",
			"Osmium",
			"190.2",
			"266696",
			"[Xe]6s2 4f14 5d6",
			"2.2",
			"216",
			"8.7",
			"1.1",
			"+4, +3",
			"Solid",
			"3306",
			"5285",
			"22.57",
			"Transition metal",
			"1803",
		],
		[
			"77",
			"Ir",
			"Iridium",
			"192.22",
			"175487",
			"[Xe]6s2 4f14 5d7",
			"2.2",
			"202",
			"9.1",
			"1.565",
			"+4, +3",
			"Solid",
			"2719",
			"4701",
			"22.42",
			"Transition metal",
			"1803",
		],
		[
			"78",
			"Pt",
			"Platinum",
			"195.08",
			"D0D0E0",
			"[Xe]6s1 4f14 5d9",
			"2.28",
			"209",
			"9",
			"2.128",
			"+4, +2",
			"Solid",
			"2041.55",
			"4098",
			"21.46",
			"Transition metal",
			"1735",
		],
		[
			"79",
			"Au",
			"Gold",
			"196.96657",
			"FFD123",
			"[Xe]6s1 4f14 5d10",
			"2.54",
			"166",
			"9.226",
			"2.309",
			"+3, +1",
			"Solid",
			"1337.33",
			"3129",
			"19.282",
			"Transition metal",
			"Ancient",
		],
		[
			"80",
			"Hg",
			"Mercury",
			"200.59",
			"B8B8D0",
			"[Xe]6s2 4f14 5d10",
			"2",
			"209",
			"10.438",
			"",
			"+2, +1",
			"Liquid",
			"234.32",
			"629.88",
			"13.5336",
			"Transition metal",
			"Ancient",
		],
		[
			"81",
			"Tl",
			"Thallium",
			"204.383",
			"A6544D",
			"[Xe]6s2 4f14 5d10 6p1",
			"1.62",
			"196",
			"6.108",
			"0.2",
			"+3, +1",
			"Solid",
			"577",
			"1746",
			"11.8",
			"Post-transition metal",
			"1861",
		],
		[
			"82",
			"Pb",
			"Lead",
			"207",
			"575961",
			"[Xe]6s2 4f14 5d10 6p2",
			"2.33",
			"202",
			"7.417",
			"0.36",
			"+4, +2",
			"Solid",
			"600.61",
			"2022",
			"11.342",
			"Post-transition metal",
			"Ancient",
		],
		[
			"83",
			"Bi",
			"Bismuth",
			"208.98040",
			"9E4FB5",
			"[Xe]6s2 4f14 5d10 6p3",
			"2.02",
			"207",
			"7.289",
			"0.946",
			"+5, +3",
			"Solid",
			"544.55",
			"1837",
			"9.807",
			"Post-transition metal",
			"1753",
		],
		[
			"84",
			"Po",
			"Polonium",
			"208.98243",
			"AB5C00",
			"[Xe]6s2 4f14 5d10 6p4",
			"2",
			"197",
			"8.417",
			"1.9",
			"+4, +2",
			"Solid",
			"527",
			"1235",
			"9.32",
			"Metalloid",
			"1898",
		],
		[
			"85",
			"At",
			"Astatine",
			"209.98715",
			"754F45",
			"[Xe]6s2 4f14 5d10 6p5",
			"2.2",
			"202",
			"9.5",
			"2.8",
			"7, 5, 3, 1, -1",
			"Solid",
			"575",
			"",
			"7",
			"Halogen",
			"1940",
		],
		[
			"86",
			"Rn",
			"Radon",
			"222.01758",
			"428296",
			"[Xe]6s2 4f14 5d10 6p6",
			"",
			"220",
			"10.745",
			"",
			"0",
			"Gas",
			"202",
			"211.45",
			"0.00973",
			"Noble gas",
			"1900",
		],
		[
			"87",
			"Fr",
			"Francium",
			"223.01973",
			"420066",
			"[Rn]7s1",
			"0.7",
			"348",
			"3.9",
			"0.47",
			"+1",
			"Solid",
			"300",
			"",
			"",
			"Alkali metal",
			"1939",
		],
		[
			"88",
			"Ra",
			"Radium",
			"226.02541",
			"007D00",
			"[Rn]7s2",
			"0.9",
			"283",
			"5.279",
			"",
			"+2",
			"Solid",
			"973",
			"1413",
			"5",
			"Alkaline earth metal",
			"1898",
		],
		[
			"89",
			"Ac",
			"Actinium",
			"227.02775",
			"70ABFA",
			"[Rn]7s2 6d1",
			"1.1",
			"260",
			"5.17",
			"",
			"+3",
			"Solid",
			"1324",
			"3471",
			"10.07",
			"Actinide",
			"1899",
		],
		[
			"90",
			"Th",
			"Thorium",
			"232.038",
			"00BAFF",
			"[Rn]7s2 6d2",
			"1.3",
			"237",
			"6.08",
			"",
			"+4",
			"Solid",
			"2023",
			"5061",
			"11.72",
			"Actinide",
			"1828",
		],
		[
			"91",
			"Pa",
			"Protactinium",
			"231.03588",
			"00A1FF",
			"[Rn]7s2 5f2 6d1",
			"1.5",
			"243",
			"5.89",
			"",
			"+5, +4",
			"Solid",
			"1845",
			"",
			"15.37",
			"Actinide",
			"1913",
		],
		[
			"92",
			"U",
			"Uranium",
			"238.0289",
			"008FFF",
			"[Rn]7s2 5f3 6d1",
			"1.38",
			"240",
			"6.194",
			"",
			"+6, +5, +4, +3",
			"Solid",
			"1408",
			"4404",
			"18.95",
			"Actinide",
			"1789",
		],
		[
			"93",
			"Np",
			"Neptunium",
			"237.048172",
			"0080FF",
			"[Rn]7s2 5f4 6d1",
			"1.36",
			"221",
			"6.266",
			"",
			"+6, +5, +4, +3",
			"Solid",
			"917",
			"4175",
			"20.25",
			"Actinide",
			"1940",
		],
		[
			"94",
			"Pu",
			"Plutonium",
			"244.06420",
			"006BFF",
			"[Rn]7s2 5f6",
			"1.28",
			"243",
			"6.06",
			"",
			"+6, +5, +4, +3",
			"Solid",
			"913",
			"3501",
			"19.84",
			"Actinide",
			"1940",
		],
		[
			"95",
			"Am",
			"Americium",
			"243.061380",
			"545CF2",
			"[Rn]7s2 5f7",
			"1.3",
			"244",
			"5.993",
			"",
			"+6, +5, +4, +3",
			"Solid",
			"1449",
			"2284",
			"13.69",
			"Actinide",
			"1944",
		],
		[
			"96",
			"Cm",
			"Curium",
			"247.07035",
			"785CE3",
			"[Rn]7s2 5f7 6d1",
			"1.3",
			"245",
			"6.02",
			"",
			"+3",
			"Solid",
			"1618",
			"3400",
			"13.51",
			"Actinide",
			"1944",
		],
		[
			"97",
			"Bk",
			"Berkelium",
			"247.07031",
			"8A4FE3",
			"[Rn]7s2 5f9",
			"1.3",
			"244",
			"6.23",
			"",
			"+4, +3",
			"Solid",
			"1323",
			"",
			"14",
			"Actinide",
			"1949",
		],
		[
			"98",
			"Cf",
			"Californium",
			"251.07959",
			"A136D4",
			"[Rn]7s2 5f10",
			"1.3",
			"245",
			"6.30",
			"",
			"+3",
			"Solid",
			"1173",
			"",
			"",
			"Actinide",
			"1950",
		],
		[
			"99",
			"Es",
			"Einsteinium",
			"252.0830",
			"B31FD4",
			"[Rn]7s2 5f11",
			"1.3",
			"245",
			"6.42",
			"",
			"+3",
			"Solid",
			"1133",
			"",
			"",
			"Actinide",
			"1952",
		],
		[
			"100",
			"Fm",
			"Fermium",
			"257.09511",
			"B31FBA",
			"[Rn] 5f12 7s2",
			"1.3",
			"",
			"6.50",
			"",
			"+3",
			"Solid",
			"1800",
			"",
			"",
			"Actinide",
			"1952",
		],
		[
			"101",
			"Md",
			"Mendelevium",
			"258.09843",
			"B30DA6",
			"[Rn]7s2 5f13",
			"1.3",
			"",
			"6.58",
			"",
			"+3, +2",
			"Solid",
			"1100",
			"",
			"",
			"Actinide",
			"1955",
		],
		[
			"102",
			"No",
			"Nobelium",
			"259.10100",
			"BD0D87",
			"[Rn]7s2 5f14",
			"1.3",
			"",
			"6.65",
			"",
			"+3, +2",
			"Solid",
			"1100",
			"",
			"",
			"Actinide",
			"1957",
		],
		[
			"103",
			"Lr",
			"Lawrencium",
			"266.120",
			"C70066",
			"[Rn]7s2 5f14 6d1",
			"1.3",
			"",
			"",
			"",
			"+3",
			"Solid",
			"1900",
			"",
			"",
			"Actinide",
			"1961",
		],
		[
			"104",
			"Rf",
			"Rutherfordium",
			"267.122",
			"CC0059",
			"[Rn]7s2 5f14 6d2",
			"",
			"",
			"",
			"",
			"+4",
			"Solid",
			"",
			"",
			"",
			"Transition metal",
			"1964",
		],
		[
			"105",
			"Db",
			"Dubnium",
			"268.126",
			"D1004F",
			"[Rn]7s2 5f14 6d3",
			"",
			"",
			"",
			"",
			"5, 4, 3",
			"Solid",
			"",
			"",
			"",
			"Transition metal",
			"1967",
		],
		[
			"106",
			"Sg",
			"Seaborgium",
			"269.128",
			"D90045",
			"[Rn]7s2 5f14 6d4",
			"",
			"",
			"",
			"",
			"6, 5, 4, 3, 0",
			"Solid",
			"",
			"",
			"",
			"Transition metal",
			"1974",
		],
		[
			"107",
			"Bh",
			"Bohrium",
			"270.133",
			"E00038",
			"[Rn]7s2 5f14 6d5",
			"",
			"",
			"",
			"",
			"7, 5, 4, 3",
			"Solid",
			"",
			"",
			"",
			"Transition metal",
			"1976",
		],
		[
			"108",
			"Hs",
			"Hassium",
			"269.1336",
			"E6002E",
			"[Rn]7s2 5f14 6d6",
			"",
			"",
			"",
			"",
			"8, 6, 5, 4, 3, 2",
			"Solid",
			"",
			"",
			"",
			"Transition metal",
			"1984",
		],
		[
			"109",
			"Mt",
			"Meitnerium",
			"277.154",
			"EB0026",
			"[Rn]7s2 5f14 6d7 (calculated)",
			"",
			"",
			"",
			"",
			"9, 8, 6, 4, 3, 1",
			"Solid",
			"",
			"",
			"",
			"Transition metal",
			"1982",
		],
		[
			"110",
			"Ds",
			"Darmstadtium",
			"282.166",
			"",
			"[Rn]7s2 5f14 6d8 (predicted)",
			"",
			"",
			"",
			"",
			"8, 6, 4, 2, 0",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Transition metal",
			"1994",
		],
		[
			"111",
			"Rg",
			"Roentgenium",
			"282.169",
			"",
			"[Rn]7s2 5f14 6d9 (predicted)",
			"",
			"",
			"",
			"",
			"5, 3, 1, -1",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Transition metal",
			"1994",
		],
		[
			"112",
			"Cn",
			"Copernicium",
			"286.179",
			"",
			"[Rn]7s2 5f14 6d10 (predicted)",
			"",
			"",
			"",
			"",
			"2, 1, 0",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Transition metal",
			"1996",
		],
		[
			"113",
			"Nh",
			"Nihonium",
			"286.182",
			"",
			"[Rn]5f14 6d10 7s2 7p1 (predicted)",
			"",
			"",
			"",
			"",
			"",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Post-transition metal",
			"2004",
		],
		[
			"114",
			"Fl",
			"Flerovium",
			"290.192",
			"",
			"[Rn]7s2 7p2 5f14 6d10 (predicted)",
			"",
			"",
			"",
			"",
			"6, 4,2, 1, 0",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Post-transition metal",
			"1998",
		],
		[
			"115",
			"Mc",
			"Moscovium",
			"290.196",
			"",
			"[Rn]7s2 7p3 5f14 6d10 (predicted)",
			"",
			"",
			"",
			"",
			"3, 1",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Post-transition metal",
			"2003",
		],
		[
			"116",
			"Lv",
			"Livermorium",
			"293.205",
			"",
			"[Rn]7s2 7p4 5f14 6d10 (predicted)",
			"",
			"",
			"",
			"",
			"+4, +2, -2",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Post-transition metal",
			"2000",
		],
		[
			"117",
			"Ts",
			"Tennessine",
			"294.211",
			"",
			"[Rn]7s2 7p5 5f14 6d10 (predicted)",
			"",
			"",
			"",
			"",
			"+5, +3, +1, -1",
			"Expected to be a Solid",
			"",
			"",
			"",
			"Halogen",
			"2010",
		],
		[
			"118",
			"Og",
			"Oganesson",
			"295.216",
			"",
			"[Rn]7s2 7p6 5f14 6d10 (predicted)",
			"",
			"",
			"",
			"",
			"+6, +4, +2, +1, 0, -1",
			"Expected to be a Gas",
			"",
			"",
			"",
			"Noble gas",
			"2006",
		],
	],
};
/*! js-cookie v3.0.1 | MIT */ function Ft(w) {
	for (var y = 1; y < arguments.length; y++) {
		var E = arguments[y];
		for (var j in E) w[j] = E[j];
	}
	return w;
}
var Er = {
	read: function (w) {
		return (
			w[0] === '"' && (w = w.slice(1, -1)),
			w.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
		);
	},
	write: function (w) {
		return encodeURIComponent(w).replace(
			/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
			decodeURIComponent
		);
	},
};
function an(w, y) {
	function E(W, _, I) {
		if (!(typeof document > "u")) {
			(I = Ft({}, y, I)),
				typeof I.expires == "number" &&
					(I.expires = new Date(Date.now() + I.expires * 864e5)),
				I.expires && (I.expires = I.expires.toUTCString()),
				(W = encodeURIComponent(W)
					.replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
					.replace(/[()]/g, escape));
			var K = "";
			for (var ie in I)
				I[ie] &&
					((K += "; " + ie), I[ie] !== !0 && (K += "=" + I[ie].split(";")[0]));
			return (document.cookie = W + "=" + w.write(_, W) + K);
		}
	}
	function j(W) {
		if (!(typeof document > "u" || (arguments.length && !W))) {
			for (
				var _ = document.cookie ? document.cookie.split("; ") : [],
					I = {},
					K = 0;
				K < _.length;
				K++
			) {
				var ie = _[K].split("="),
					re = ie.slice(1).join("=");
				try {
					var G = decodeURIComponent(ie[0]);
					if (((I[G] = w.read(re, G)), W === G)) break;
				} catch {}
			}
			return W ? I[W] : I;
		}
	}
	return Object.create(
		{
			set: E,
			get: j,
			remove: function (W, _) {
				E(W, "", Ft({}, _, { expires: -1 }));
			},
			withAttributes: function (W) {
				return an(this.converter, Ft({}, this.attributes, W));
			},
			withConverter: function (W) {
				return an(Ft({}, this.converter, W), this.attributes);
			},
		},
		{
			attributes: { value: Object.freeze(y) },
			converter: { value: Object.freeze(w) },
		}
	);
}
var kt = an(Er, { path: "/" });
let Nr = () => {
	fe("Saving cookies: "),
		fe(ue),
		kt.set("settings/defaultTheme", ni(ue.defaultTheme)),
		kt.set("settings/currentTheme", ni(ue.currentTheme));
};
function Dr() {
	let w;
	return (
		(w = {
			defaultTheme: ii(Number(kt.get("settings/defaultTheme"))),
			currentTheme: ii(Number(kt.get("settings/currentTheme"))),
		}),
		fe("Page reloaded -> Getting Cookies: "),
		fe(w),
		w
	);
}
function ni(w) {
	let y = 0;
	return w ? (y = 1) : w || (y = 0), y;
}
function ii(w) {
	let y;
	return (y = !!(w == 1 || isNaN(w))), y;
}
let ue = Dr();
function Fr() {
	fe("toggleTheme to :" + !ue.currentTheme),
		oi(!ue.currentTheme),
		ai(!ue.currentTheme),
		Ge.updatePenColors();
}
function oi(w) {
	if (
		(fe("first replenish -> changing from " + ue.currentTheme + " to " + w),
		ue.currentTheme == w && ue.currentTheme == ue.defaultTheme)
	)
		return;
	let y = document.documentElement;
	w
		? (y.classList.toggle("light-mode"),
		  y.classList.toggle("dark-mode"),
		  fe("DarkMode: Changing to " + w))
		: (y.classList.toggle("dark-mode"),
		  y.classList.toggle("light-mode"),
		  fe("LightMode: Changing to " + w));
}
function ai(w) {
	if (
		(fe("changing from " + ue.currentTheme + " to " + w),
		ue.currentTheme == w && ue.currentTheme == ue.defaultTheme)
	)
		return;
	let y = document.querySelector(".toggle-theme");
	w
		? (fe("DarkMode: Changing to " + w),
		  y.classList.toggle("fa-sun"),
		  y.classList.toggle("fa-moon"))
		: (fe("LightMode: Changing to " + w),
		  y.classList.toggle("fa-moon"),
		  y.classList.toggle("fa-sun")),
		(ue.currentTheme = w),
		fe(ue),
		Nr();
}
function rn(w) {
	return 0.21367521367521367 * w;
}
class kr {
	constructor(y = 1) {
		ee(this, "atomicNumber");
		ee(this, "shells");
		ee(this, "MAX_ELECTRONS_PER_RING", [2, 8, 16, 32, 32, 20, 8]);
		ee(this, "electronsPerRing", []);
		ee(this, "ringGap");
		ee(this, "rings");
		ee(this, "neutrons", []);
		ee(this, "protons", []);
		ee(this, "startingAngle", 0);
		ee(this, "ringsAngles", [0, 0, 0, 0, 0, 0, 0]);
		ee(this, "framesPerRevolution", 0.1);
		ee(this, "additionalAnglePerUpdate");
		ee(this, "FRAME_RATE", 60);
		ee(this, "centerX");
		ee(this, "centerY");
		ee(this, "boundaryRadius");
		ee(this, "radius");
		ee(this, "canvas");
		ee(this, "ctx");
		ee(this, "penColor");
		ee(this, "hover", 0);
		ee(this, "_innerTime", 0);
		ee(this, "bind");
		ee(this, "neutronColors", ["#CF3B29", "#D5343A", "#CB2442"]);
		ee(this, "protonColors", ["#3aa346", "#58bb44", "#78d23d"]);
		(this.atomicNumber = y),
			(this.boundaryRadius = rn(this.atomicNumber)),
			this._initCanvas(),
			(this.bind = this.draw.bind(this)),
			this._ringsCalculator(),
			this._generateProtons(),
			window.requestAnimationFrame(this.bind);
	}
	draw() {
		this._innerTime++,
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
			this.ctx.save(),
			this.ctx.translate(this.centerX, this.centerY),
			this._createRings(),
			this._populateRings(),
			this._rebuildProtons(),
			this.ctx.restore(),
			window.requestAnimationFrame(this.bind);
	}
	changeElement(y) {
		(this.atomicNumber = y),
			(this.boundaryRadius = rn(this.atomicNumber)),
			(this.electronsPerRing = []),
			(this.protons = []),
			(this.neutrons = []),
			(this.ringsAngles = [0, 0, 0, 0, 0, 0, 0]),
			this._ringsCalculator();
	}
	_ringsCalculator() {
		let y = 0,
			E = this.atomicNumber;
		for (fe(E); E > 0; ) {
			let j = this.MAX_ELECTRONS_PER_RING[y];
			if (
				(j >= E
					? this.electronsPerRing.push(E)
					: j < E && this.electronsPerRing.push(j),
				(E -= j),
				(y += 1),
				y == 8)
			)
				throw Error("Loop recursion");
		}
		this.rings = y;
	}
	_initCanvas() {
		if (((this.canvas = $("#atomic-model")[0]), this.canvas)) {
			let y = this.canvas.parentElement;
			(this.ctx = this.canvas.getContext("2d")),
				this.ctx &&
					((this.canvas.width = y.clientWidth),
					(this.canvas.height = y.clientWidth),
					(this.ringGap = this.canvas.width * 0.045),
					(this.centerX = this.canvas.width / 2),
					(this.centerY = this.canvas.height / 2)),
				this.updatePenColors();
		}
	}
	updatePenColors() {
		(this.penColor = fi.getPropertyValue("--opposite")),
			(this.ctx.fillStyle = this.penColor),
			(this.ctx.strokeStyle = this.penColor);
	}
	_createRings() {
		let y = 60;
		for (let E = 0; E < this.rings; E++)
			this.ctx.beginPath(),
				this.ctx.arc(0, 0, y, 0, Math.PI * 2, !0),
				this.ctx.stroke(),
				(y += this.ringGap);
	}
	_populateRings() {
		let y = 60,
			E = 25;
		for (let j = 0; j < this.rings; j++) {
			let W = this.electronsPerRing[j],
				_ = (Math.PI * 2) / W,
				I = _,
				K = (Math.PI * 2) / (this.FRAME_RATE * E);
			this.ctx.save(), this.ctx.rotate(this.ringsAngles[j]);
			for (let ie = 0; ie < this.electronsPerRing[j]; ie++) {
				let re = Math.sin(I) * y,
					G = Math.cos(I) * y;
				this.hover == 1 &&
					(this.ctx.save(),
					(this.ctx.filter = "blur(10)"),
					(this.ctx.filter = "opacity(0.5)"),
					this.ctx.beginPath(),
					this.ctx.arc(G, re, 10, 0, Math.PI * 2, !0),
					this.ctx.fill(),
					this.ctx.restore()),
					this.ctx.beginPath(),
					this.ctx.arc(G, re, 5, 0, Math.PI * 2, !0),
					this.ctx.fill(),
					(I += _);
			}
			this.ctx.restore(),
				(this.ringsAngles[j] += K),
				(E += -1),
				(y += this.ringGap);
		}
	}
	_generateProtons() {
		for (; this.protons.length < this.atomicNumber; ) {
			let y = Math.floor(Math.random() * 3);
			if (y == 3) throw Error("out of range");
			let { x: E, y: j } = this._randomPoint(this.boundaryRadius);
			this.neutrons.push({
				x: E,
				y: j,
				Rx: 0,
				Ry: 0,
				color: this.protonColors[y],
			}),
				({ x: E, y: j } = this._randomPoint(this.boundaryRadius)),
				this.protons.push({
					x: E,
					y: j,
					Rx: 0,
					Ry: 0,
					color: this.neutronColors[y],
				});
		}
	}
	_rebuildProtons() {
		this._innerTime % 5 ||
			(this.atomicNumber == this.protons.length &&
				(this.protons.shift(), this.neutrons.shift())),
			this._generateProtons();
		let y = rn(8),
			E = 0,
			j = this.boundaryRadius ** 2,
			W = 0,
			_ = 0,
			I = 0,
			K = 0,
			ie = 0,
			re = 0;
		for (; E < this.atomicNumber; ) {
			let G = this.protons[E];
			(W = Math.sign(G.x)),
				(_ = y * W),
				(I = y * (~W + 1)),
				(G.x +=
					(G.x + _) ** 2 + G.y ** 2 <= j
						? Math.random() > 0.5
							? y
							: -y
						: ((G.x + I) ** 2 + G.y ** 2 <= j, I)),
				(K = Math.sign(G.y)),
				(ie = y * K),
				(re = y * (~K + 1)),
				(G.y +=
					(G.y + ie) ** 2 + G.x ** 2 <= j
						? Math.random() > 0.5
							? y
							: -y
						: ((G.y + re) ** 2 + G.x ** 2 <= j, re)),
				(this.ctx.fillStyle = G.color),
				this.ctx.beginPath(),
				this.ctx.arc(G.x, G.y, 5, 0, Math.PI * 2, !0),
				this.ctx.fill();
			let Z = this.neutrons[E];
			(W = Math.sign(Z.x)),
				(_ = y * W),
				(I = y * (~W + 1)),
				(Z.x +=
					(Z.x + _) ** 2 + Z.y ** 2 <= j
						? Math.random() > 0.5
							? y
							: -y
						: ((Z.x + I) ** 2 + Z.y ** 2 <= j, I)),
				(K = Math.sign(Z.y)),
				(ie = y * K),
				(re = y * (~K + 1)),
				(Z.y +=
					(Z.y + ie) ** 2 + Z.x ** 2 <= j
						? Math.random() > 0.5
							? y
							: -y
						: ((Z.y + re) ** 2 + Z.x ** 2 <= j, re)),
				(this.ctx.fillStyle = Z.color),
				this.ctx.beginPath(),
				this.ctx.arc(Z.x, Z.y, 5, 0, Math.PI * 2, !0),
				this.ctx.fill(),
				this.hover == 2 &&
					(this.ctx.save(),
					(this.ctx.fillStyle = G.color),
					(this.ctx.filter = "blur(10)"),
					(this.ctx.filter = "opacity(0.5)"),
					this.ctx.beginPath(),
					this.ctx.arc(G.x, G.y, 13, 0, Math.PI * 2, !0),
					this.ctx.fill(),
					this.ctx.restore()),
				this.hover == 3 &&
					(this.ctx.save(),
					(this.ctx.fillStyle = Z.color),
					(this.ctx.filter = "blur(10)"),
					(this.ctx.filter = "opacity(0.5)"),
					this.ctx.beginPath(),
					this.ctx.arc(Z.x, Z.y, 13, 0, Math.PI * 2, !0),
					this.ctx.fill(),
					this.ctx.restore()),
				E++;
		}
	}
	_randomPoint(y) {
		let E = Math.random() * Math.PI * 2,
			j = y * Math.random(),
			W = Math.cos(E) * j,
			_ = Math.sin(E) * j;
		return { x: W, y: _ };
	}
}
let le;
function fe(w) {
	console.log(w);
}
function Pr(w) {
	let y = w.target;
	fe(y.id),
		y.id == "Electron"
			? (Ge.hover = 1)
			: y.id == "Proton"
			? (Ge.hover = 2)
			: y.id == "Neutron" && (Ge.hover = 3);
}
function Rr(w) {
	Ge.hover = 0;
}
function si(w) {
	return Number(w.attr("id").substring(1));
}
function ui(w) {
	return si(w) - 1;
}
function ri(w) {
	console.log(w);
	let y, E;
	if (typeof w == "number") fe("number"), (y = w - 1), (E = w);
	else {
		fe("passing here");
		let je = w.target;
		if (je.className != "elements")
			for (; je.className != "elements"; ) je = je.parentElement;
		(y = ui(V(je))), (E = si(V(je)));
	}
	let j = le[y][1],
		W = le[y][2],
		_ = le[y][3],
		I = le[y][5],
		K = le[y][6],
		ie = le[y][7],
		re = le[y][8],
		G = le[y][9],
		Z = le[y][10],
		pt = le[y][11],
		Pt = le[y][12],
		z = le[y][13],
		H = le[y][14],
		Le = le[y][15],
		O = le[y][16];
	V("#atomic-mass-field").text(_),
		V("#year-discovered-field").text(O),
		V("#group-block-field").text(Le),
		V("#oxidation-states-field").text(Z),
		V("#metling-point-field").text(Pt),
		V("#electronic-configuration-field").text(I),
		V("#ionization-energy-field").text(re),
		V("#electron-negativity-field").text(K),
		V("#atomic-radius-field").text(ie),
		V("#electron-afinity-field").text(G),
		V("#standard-state-field").text(pt),
		V("#boiling-point-field").text(z),
		V("#density-field").text(H),
		V("#electron-field").text(E),
		V("#proton-field").text(E),
		V("#neutron-field").text(E),
		V("#wiki").attr("href", `https://pubchem.ncbi.nlm.nih.gov/element/${E}`),
		V("#atomic-model-symbol").text(j),
		V("#atomic-model-name").text(W),
		V("#atomic-model-number").text(E),
		Ge.changeElement(E);
}
oi(ue.currentTheme);
let Ge, fi;
V(() => {
	ai(ue.currentTheme),
		(fi = window.getComputedStyle(document.body)),
		document.querySelector("#darkmode").addEventListener("click", Fr),
		V(".toTheTop").hide(),
		V(".toTheTop").on("click", (E) => {
			window.scroll({ top: 0, left: 0, behavior: "smooth" });
		}),
		V(window).on("scroll", function () {
			V(this).scrollTop() > 400
				? V(".toTheTop").fadeIn("fast")
				: V(".toTheTop").fadeOut("fast");
		});
	let w = document.querySelectorAll(".elements");
	w &&
		w.forEach((E) => {
			E.addEventListener("click", ri);
		});
	const y = {
		Nonmetal: { color: "#ffffbb" },
		Halogen: { color: "#ffff9a" },
		"Alkali metal": { color: "#ffa6a6" },
		"Alkaline earth metal": { color: "#cfcfff" },
		"Transition metal": { color: "#b3d9ff" },
		"Post-transition metal": { color: "#bbffbb" },
		Metalloid: { color: "#d2ed85" },
		"Noble gas": { color: "#ffca80" },
		Lanthanide: { color: "#afffff" },
		Actinide: { color: "#c2ffeb" },
	};
	document.querySelector(".periodic-table") &&
		(fe("generating"),
		(le = wr.Row),
		document.querySelectorAll(".elements").forEach((E, j, W) => {
			fe(j);
			let _ = V(E),
				I = ui(_),
				K = le[I];
			_.css("background-color", y[K[15]].color),
				_.append('<div class="atomic-number">' + K[0] + "</div>"),
				_.append(
					'<div class="atomic-symbol"><div class="symbol">' +
						K[1] +
						"</div></div>"
				),
				_.append('<div class="atomic-name">' + K[2] + "</div>"),
				_.append('<div class="atomic-weight">' + K[3] + "</div>");
		})),
		(Ge = new kr(1)),
		document.querySelectorAll(".hover-control").forEach((E) => {
			E.addEventListener("mouseleave", Rr);
		}),
		document.querySelectorAll(".hover-control").forEach((E) => {
			E.addEventListener("mouseenter", Pr);
		}),
		ri(1);
});
