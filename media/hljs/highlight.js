/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+c+csharp+cpp+fortran+git+go+java+kotlin+latex+markdown+markup-templating+php+python+swift&plugins=line-numbers+autolinker+custom-class+show-language+highlight-keywords+toolbar+copy-to-clipboard */
newFunction();

function newFunction() {
    var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function(u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i, r = 0, C = {
    manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: {
    encode: function e(r) { return r instanceof _ ? new _(r.type, e(r.content), r.alias) : Array.isArray(r) ? r.map(e) : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " "); }, type: function(e) { return Object.prototype.toString.call(e).slice(8, -1); }, objId: function(e) { return e.__id || Object.defineProperty(e, "__id", { value: ++r }), e.__id; }, clone: function n(e, t) {
    var a, r, i = C.util.type(e); switch (t = t || {}, i) {
        case "Object":
            if (r = C.util.objId(e), t[r])
                return t[r];
            for (var o in a = {}, t[r] = a, e)
                e.hasOwnProperty(o) && (a[o] = n(e[o], t));
            return a;
        case "Array": return r = C.util.objId(e), t[r] ? t[r] : (a = [], t[r] = a, e.forEach(function(e, r) { a[r] = n(e, t); }), a);
        default: return e;
    }
    }, getLanguage: function(e) {
    for (; e && !c.test(e.className);)
        e = e.parentElement; return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
    }, currentScript: function() {
    if ("undefined" == typeof document)
        return null; if ("currentScript" in document)
            return document.currentScript; try {
                throw new Error;
            }
        catch (e) {
            var r = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
            if (r) {
                var n = document.getElementsByTagName("script");
                for (var t in n)
                    if (n[t].src == r)
                        return n[t];
            }
            return null;
        }
    }
    }, languages: {
    extend: function(e, r) {
    var n = C.util.clone(C.languages[e]); for (var t in r)
        n[t] = r[t]; return n;
    }, insertBefore: function(n, e, r, t) {
    var a = (t = t || C.languages)[n], i = {}; for (var o in a)
        if (a.hasOwnProperty(o)) {
            if (o == e)
                for (var l in r)
                    r.hasOwnProperty(l) && (i[l] = r[l]);
            r.hasOwnProperty(o) || (i[o] = a[o]);
        } var s = t[n]; return t[n] = i, C.languages.DFS(C.languages, function(e, r) { r === s && e != n && (this[e] = i); }), i;
    }, DFS: function e(r, n, t, a) {
    a = a || {}; var i = C.util.objId; for (var o in r)
        if (r.hasOwnProperty(o)) {
            n.call(r, o, r[o], t || o);
            var l = r[o], s = C.util.type(l);
            "Object" !== s || a[i(l)] ? "Array" !== s || a[i(l)] || (a[i(l)] = !0, e(l, n, o, a)) : (a[i(l)] = !0, e(l, n, null, a));
        }
    }
    }, plugins: {}, highlightAll: function(e, r) { C.highlightAllUnder(document, e, r); }, highlightAllUnder: function(e, r, n) {
    var t = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; C.hooks.run("before-highlightall", t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)), C.hooks.run("before-all-elements-highlight", t); for (var a, i = 0; a = t.elements[i++];)
        C.highlightElement(a, !0 === r, t.callback);
    }, highlightElement: function(e, r, n) {
    var t = C.util.getLanguage(e), a = C.languages[t]; e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t; var i = e.parentNode; i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t); var o = { element: e, language: t, grammar: a, code: e.textContent }; function l(e) { o.highlightedCode = e, C.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, C.hooks.run("after-highlight", o), C.hooks.run("complete", o), n && n.call(o.element); } if (C.hooks.run("before-sanity-check", o), !o.code)
        return C.hooks.run("complete", o), void (n && n.call(o.element)); if (C.hooks.run("before-highlight", o), o.grammar)
            if (r && u.Worker) {
                var s = new Worker(C.filename);
                s.onmessage = function(e) { l(e.data); }, s.postMessage(JSON.stringify({ language: o.language, code: o.code, immediateClose: !0 }));
            }
            else
                l(C.highlight(o.code, o.grammar, o.language));
        else
            l(C.util.encode(o.code));
    }, highlight: function(e, r, n) { var t = { code: e, grammar: r, language: n }; return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize", t), _.stringify(C.util.encode(t.tokens), t.language); }, matchGrammar: function(e, r, n, t, a, i, o) {
    for (var l in n)
        if (n.hasOwnProperty(l) && n[l]) {
            var s = n[l];
            s = Array.isArray(s) ? s : [s];
            for (var u = 0; u < s.length; ++u) {
                if (o && o == l + "," + u)
                    return;
                var c = s[u], g = c.inside, f = !!c.lookbehind, h = !!c.greedy, d = 0, m = c.alias;
                if (h && !c.pattern.global) {
                    var p = c.pattern.toString().match(/[imsuy]*$/)[0];
                    c.pattern = RegExp(c.pattern.source, p + "g");
                }
                c = c.pattern || c;
                for (var y = t, v = a; y < r.length; v += r[y].length, ++y) {
                    var k = r[y];
                    if (r.length > e.length)
                        return;
                    if (!(k instanceof _)) {
                        if (h && y != r.length - 1) {
                            if (c.lastIndex = v, !(S = c.exec(e)))
                                break;
                            for (var b = S.index + (f && S[1] ? S[1].length : 0), w = S.index + S[0].length, A = y, P = v, x = r.length; A < x && (P < w || !r[A].type && !r[A - 1].greedy); ++A)
                                (P += r[A].length) <= b && (++y, v = P);
                            if (r[y] instanceof _)
                                continue;
                            O = A - y, k = e.slice(v, P), S.index -= v;
                        }
                        else {
                            c.lastIndex = 0;
                            var S = c.exec(k), O = 1;
                        }
                        if (S) {
                            f && (d = S[1] ? S[1].length : 0);
                            w = (b = S.index + d) + (S = S[0].slice(d)).length;
                            var E = k.slice(0, b), N = k.slice(w), j = [y, O];
                            E && (++y, v += E.length, j.push(E));
                            var L = new _(l, g ? C.tokenize(S, g) : S, m, S, h);
                            if (j.push(L), N && j.push(N), Array.prototype.splice.apply(r, j), 1 != O && C.matchGrammar(e, r, n, y, v, !0, l + "," + u), i)
                                break;
                        }
                        else if (i)
                            break;
                    }
                }
            }
        }
    }, tokenize: function(e, r) {
    var n = [e], t = r.rest; if (t) {
        for (var a in t)
            r[a] = t[a];
        delete r.rest;
    } return C.matchGrammar(e, n, r, 0, 0, !1), n;
    }, hooks: {
    all: {}, add: function(e, r) { var n = C.hooks.all; n[e] = n[e] || [], n[e].push(r); }, run: function(e, r) {
    var n = C.hooks.all[e]; if (n && n.length)
        for (var t, a = 0; t = n[a++];)
            t(r);
    }
    }, Token: _
    }; function _(e, r, n, t, a) { this.type = e, this.content = r, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!a; } if (u.Prism = C, _.stringify = function r(e, n) {
    if ("string" == typeof e)
        return e; if (Array.isArray(e)) {
            var t = "";
            return e.forEach(function(e) { t += r(e, n); }), t;
        } var a = { type: e.type, content: r(e.content, n), tag: "span", classes: ["token", e.type], attributes: {}, language: n }, i = e.alias; i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), C.hooks.run("wrap", a); var o = ""; for (var l in a.attributes)
            o += " " + l + '="' + (a.attributes[l] || "").replace(/"/g, "&quot;") + '"'; return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + o + ">" + a.content + "</" + a.tag + ">";
    }, !u.document)
            return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function(e) { var r = JSON.parse(e.data), n = r.language, t = r.code, a = r.immediateClose; u.postMessage(C.highlight(t, C.languages[n], n)), a && u.close(); }, !1)), C; var e = C.util.currentScript(); function n() { C.manual || C.highlightAll(); } if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) {
                var t = document.readyState;
                "loading" === t || "interactive" === t && e && e.defer ? document.addEventListener("DOMContentLoaded", n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16);
            } return C;
    } (_self);
    "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
    Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i, greedy: !0 }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(a) { "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&")); }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(a, e) { var s = {}; s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; var t = {}; t[a] = { pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", t); } }), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
    !function(s) { var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: "selector" } } }, url: { pattern: RegExp("url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i"), inside: { function: /^url/i, punctuation: /^\(|\)$/ } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"), string: { pattern: e, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; var t = s.languages.markup; t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: t.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: s.languages.css } }, alias: "language-css" } }, t.tag)); } (Prism);
    Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
    Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
    !function(e) {
    var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = { environment: { pattern: RegExp("\\$" + t), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/ }; e.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: n }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0 }, { pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/, greedy: !0, inside: n }], environment: { pattern: RegExp("\\$?" + t), alias: "constant" }, variable: n.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }; for (var a = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], r = n.variable[1].inside, s = 0; s < a.length; s++)
        r[a[s]] = e.languages.bash[a[s]]; e.languages.shell = e.languages.bash;
    } (Prism);
    Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/, lookbehind: !0 }, keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/, function: /[a-z_]\w*(?=\s*\()/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/, number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, alias: "property", inside: { string: { pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/, lookbehind: !0 }, directive: { pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/, lookbehind: !0, alias: "keyword" } } }, constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/ }), delete Prism.languages.c.boolean;
    Prism.languages.csharp = Prism.languages.extend("clike", { keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/, string: [{ pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 }, { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0 }], "class-name": [{ pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/, inside: { punctuation: /\./ } }, { pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/, lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/, lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/, lookbehind: !0, inside: { punctuation: /\./ } }], number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i, operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), Prism.languages.insertBefore("csharp", "class-name", { "generic-method": { pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/, inside: { function: /^\w+/, "class-name": { pattern: /\b[A-Z]\w*(?:\.\w+)*\b/, inside: { punctuation: /\./ } }, keyword: Prism.languages.csharp.keyword, punctuation: /[<>(),.:]/ } }, preprocessor: { pattern: /(^\s*)#.*/m, lookbehind: !0, alias: "property", inside: { directive: { pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/, lookbehind: !0, alias: "keyword" } } } }), Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;
    Prism.languages.cpp = Prism.languages.extend("c", { "class-name": { pattern: /(\b(?:class|enum|struct)\s+)\w+/, lookbehind: !0 }, keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i, greedy: !0 }, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:true|false)\b/ }), Prism.languages.insertBefore("cpp", "string", { "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } });
    Prism.languages.fortran = { "quoted-number": { pattern: /[BOZ](['"])[A-F0-9]+\1/i, alias: "number" }, string: { pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/, inside: { comment: { pattern: /(&(?:\r\n?|\n)\s*)!.*/, lookbehind: !0 } } }, comment: { pattern: /!.*/, greedy: !0 }, boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i, number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i, keyword: [/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i, /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i], operator: [/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i, { pattern: /(^|(?!\().)\/(?!\))/, lookbehind: !0 }], punctuation: /\(\/|\/\)|[(),;:&]/ };
    Prism.languages.git = { comment: /^#.*/m, deleted: /^[-–].*/m, inserted: /^\+.*/m, string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m, command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } }, coord: /^@@.*@@$/m, commit_sha1: /^commit \w{40}$/m };
    Prism.languages.go = Prism.languages.extend("clike", { keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/, boolean: /\b(?:_|iota|nil|true|false)\b/, operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i, string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 } }), delete Prism.languages.go["class-name"];
    !function(e) { var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, a = /\b[A-Z](?:\w*[a-z]\w*)?\b/; e.languages.java = e.languages.extend("clike", { "class-name": [a, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/], keyword: t, function: [e.languages.clike.function, { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 }], number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: !0 } }), e.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: !0, alias: "string" } }), e.languages.insertBefore("java", "class-name", { annotation: { alias: "punctuation", pattern: /(^|[^.])@\w+/, lookbehind: !0 }, namespace: { pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(?:\.[a-z]\w*)+/, lookbehind: !0, inside: { punctuation: /\./ } }, generics: { pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/, inside: { "class-name": a, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/ } } }); } (Prism);
    !function(e) { e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [/\w+(?=\s*\()/, { pattern: /(\.)\w+(?=\s*\{)/, lookbehind: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", { "raw-string": { pattern: /("""|''')[\s\S]*?\1/, alias: "string" } }), e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\w+@|@\w+/, alias: "symbol" } }); var n = [{ pattern: /\$\{[^}]+\}/, inside: { delimiter: { pattern: /^\$\{|\}$/, alias: "variable" }, rest: e.languages.kotlin } }, { pattern: /\$\w+/, alias: "variable" }]; e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = { interpolation: n }; } (Prism);
    !function(a) { var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = { "equation-command": { pattern: e, alias: "regex" } }; a.languages.latex = { comment: /%.*/m, cdata: { pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0 }, equation: [{ pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/, inside: n, alias: "string" }, { pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0, inside: n, alias: "string" }], keyword: { pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/, lookbehind: !0 }, url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 }, headline: { pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/, lookbehind: !0, alias: "class-name" }, function: { pattern: e, alias: "selector" }, punctuation: /[[\]{}&]/ }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex; } (Prism);
    !function(d) {
    function n(n, e) { return n = n.replace(/<inner>/g, "(?:\\\\.|[^\\\\\\n\r]|(?:\n|\r\\n?)(?!\n|\r\\n?))"), e && (n = n + "|" + n.replace(/_/g, "\\*")), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")"); } var e = "(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+", t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\\n?)|$)".replace(/__/g, e), a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\\n?)"; d.languages.markdown = d.languages.extend("markup", {}), d.languages.insertBefore("markdown", "prolog", { blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(e), inside: d.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + t + ")" + a + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + t + "$"), inside: { "table-header": { pattern: RegExp(e), alias: "important", inside: d.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__", !0), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_", !0), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: n("(~~?)(?:(?!~)<inner>)+?\\2", !1), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, url: { pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])', !1), lookbehind: !0, greedy: !0, inside: { variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 }, content: { pattern: /(^!?\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ } } } }), ["url", "bold", "italic", "strike"].forEach(function(e) { ["url", "bold", "italic", "strike"].forEach(function(n) { e !== n && (d.languages.markdown[e].inside.content.inside[n] = d.languages.markdown[n]); }); }), d.hooks.add("after-tokenize", function(n) {
    "markdown" !== n.language && "md" !== n.language || !function n(e) {
    if (e && "string" != typeof e)
        for (var t = 0, a = e.length; t < a; t++) {
            var i = e[t];
            if ("code" === i.type) {
                var r = i.content[1], o = i.content[3];
                if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
                    var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                    o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s];
                }
            }
            else
                n(i.content);
        }
    } (n.tokens);
    }), d.hooks.add("wrap", function(n) {
    if ("code-block" === n.type) {
        for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
            var i = n.classes[t], r = /language-(.+)/.exec(i);
            if (r) {
                e = r[1];
                break;
            }
        }
        var o = d.languages[e];
        if (o) {
            var l = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
            n.content = d.highlight(l, o, e);
        }
        else if (e && "none" !== e && d.plugins.autoloader) {
            var s = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
            n.attributes.id = s, d.plugins.autoloader.loadLanguages(e, function() { var n = document.getElementById(s); n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e)); });
        }
    }
    }), d.languages.md = d.languages.markdown;
    } (Prism);
    !function(h) {
    function v(e, n) { return "___" + e.toUpperCase() + n + "___"; } Object.defineProperties(h.languages["markup-templating"] = {}, {
    buildPlaceholders: {
    value: function(a, r, e, o) {
    if (a.language === r) {
        var c = a.tokenStack = [];
        a.code = a.code.replace(e, function(e) {
        if ("function" == typeof o && !o(e))
            return e; for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));)
                ++t; return c[t] = e, n;
        }), a.grammar = h.languages.markup;
    }
    }
    }, tokenizePlaceholders: {
    value: function(p, k) {
    if (p.language === k && p.tokenStack) {
        p.grammar = h.languages[k];
        var m = 0, d = Object.keys(p.tokenStack);
        !function e(n) {
        for (var t = 0; t < n.length && !(m >= d.length); t++) {
            var a = n[t];
            if ("string" == typeof a || a.content && "string" == typeof a.content) {
                var r = d[m], o = p.tokenStack[r], c = "string" == typeof a ? a : a.content, i = v(k, r), u = c.indexOf(i);
                if (-1 < u) {
                    ++m;
                    var g = c.substring(0, u), l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o), s = c.substring(u + i.length), f = [];
                    g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;
                }
            }
            else
                a.content && e(a.content);
        } return n;
        } (p.tokens);
    }
    }
    }
    });
    } (Prism);
    !function(n) {
    n.languages.php = n.languages.extend("clike", { keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i, boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" }, constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i], comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), n.languages.insertBefore("php", "string", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), n.languages.insertBefore("php", "comment", { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" } }), n.languages.insertBefore("php", "keyword", { variable: /\$+(?:\w+\b|(?={))/i, package: { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), n.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }); var e = { pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/, lookbehind: !0, inside: n.languages.php }; n.languages.insertBefore("php", "string", { "nowdoc-string": { pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/, greedy: !0, alias: "string", inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, "heredoc-string": { pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i, greedy: !0, alias: "string", inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: e } }, "single-quoted-string": { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string" }, "double-quoted-string": { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, alias: "string", inside: { interpolation: e } } }), delete n.languages.php.string, n.hooks.add("before-tokenize", function(e) {
    if (/<\?/.test(e.code)) {
        n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi);
    }
    }), n.hooks.add("after-tokenize", function(e) { n.languages["markup-templating"].tokenizePlaceholders(e, "php"); });
    } (Prism);
    Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 }, "string-interpolation": { pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^\s*)@\w+(?:\.\w+)*/im, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:True|False|None)\b/, number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
    Prism.languages.swift = Prism.languages.extend("clike", { string: { pattern: /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0, inside: { interpolation: { pattern: /\\\((?:[^()]|\([^)]+\))+\)/, inside: { delimiter: { pattern: /^\\\(|\)$/, alias: "variable" } } } } }, keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/, builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/ }), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.languages.swift;
    !function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var l = "line-numbers", c = /\n(?!$)/g, m = function(e) {
        var t = a(e)["white-space"]; if ("pre-wrap" === t || "pre-line" === t) {
            var n = e.querySelector("code"), r = e.querySelector(".line-numbers-rows"), s = e.querySelector(".line-numbers-sizer"), i = n.textContent.split(c);
            s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function(e, t) { s.textContent = e || "\n"; var n = s.getBoundingClientRect().height; r.children[t].style.height = n + "px"; }), s.textContent = "", s.style.display = "none";
        }
        }, a = function(e) { return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null; };
        window.addEventListener("resize", function() { Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m); }), Prism.hooks.add("complete", function(e) {
        if (e.code) {
            var t = e.element, n = t.parentNode;
            if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
                for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode)
                    if (s.test(i.className)) {
                        r = !0;
                        break;
                    }
                if (r) {
                    t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers");
                    var l, a = e.code.match(c), o = a ? a.length + 1 : 1, u = new Array(o + 1).join("<span></span>");
                    (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e);
                }
            }
        }
        }), Prism.hooks.add("line-numbers", function(e) { e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0; }), Prism.plugins.lineNumbers = {
        getLine: function(e, t) {
        if ("PRE" === e.tagName && e.classList.contains(l)) {
            var n = e.querySelector(".line-numbers-rows"), r = parseInt(e.getAttribute("data-start"), 10) || 1, s = r + (n.children.length - 1);
            t < r && (t = r), s < t && (t = s);
            var i = t - r;
            return n.children[i];
        }
        }
        };
    }
    } ();
    !function() {
    if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
        var t = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/, r = /\b\S+@[\w.]+[a-z]{2}/, a = /\[([^\]]+)]\(([^)]+)\)/, l = ["comment", "url", "attr-value", "string"];
        Prism.plugins.autolinker = { processGrammar: function(i) { i && !i["url-link"] && (Prism.languages.DFS(i, function(i, n, e) { -1 < l.indexOf(e) && !Array.isArray(n) && (n.pattern || (n = this[i] = { pattern: n }), n.inside = n.inside || {}, "comment" == e && (n.inside["md-link"] = a), "attr-value" == e ? Prism.languages.insertBefore("inside", "punctuation", { "url-link": t }, n) : n.inside["url-link"] = t, n.inside["email-link"] = r); }), i["url-link"] = t, i["email-link"] = r); } }, Prism.hooks.add("before-highlight", function(i) { Prism.plugins.autolinker.processGrammar(i.grammar); }), Prism.hooks.add("wrap", function(i) {
        if (/-link$/.test(i.type)) {
            i.tag = "a";
            var n = i.content;
            if ("email-link" == i.type && 0 != n.indexOf("mailto:"))
                n = "mailto:" + n;
            else if ("md-link" == i.type) {
                var e = i.content.match(a);
                n = e[2], i.content = e[1];
            }
            i.attributes.href = n;
            try {
                i.content = decodeURIComponent(i.content);
            }
            catch (i) { }
        }
        });
    }
    } ();
    !function() {
    if ("undefined" != typeof self && self.Prism || "undefined" != typeof global && global.Prism) {
        var a, e, t = "";
        Prism.plugins.customClass = { add: function(n) { a = n; }, map: function(s) { e = "function" == typeof s ? s : function(n) { return s[n] || n; }; }, prefix: function(n) { t = n || ""; } }, Prism.hooks.add("wrap", function(s) {
        if (a) {
            var n = a({ content: s.content, type: s.type, language: s.language });
            Array.isArray(n) ? s.classes.push.apply(s.classes, n) : n && s.classes.push(n);
        } (e || t) && (s.classes = s.classes.map(function(n) { return t + (e ? e(n, s.language) : n); }));
        });
    }
    } ();
    !function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var i = [], l = {}, c = function() { };
        Prism.plugins.toolbar = {};
        var e = Prism.plugins.toolbar.registerButton = function(e, n) { var t; t = "function" == typeof n ? n : function(e) { var t; return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() { n.onClick.call(this, e); })) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), n.className && t.classList.add(n.className), t.textContent = n.text, t; }, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t); }, t = Prism.plugins.toolbar.hook = function(a) {
        var e = a.element.parentNode; if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
            var t = document.createElement("div");
            t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
            var r = document.createElement("div");
            r.classList.add("toolbar");
            var n = i, o = function(e) {
            for (; e;) {
                var t = e.getAttribute("data-toolbar-order");
                if (null != t)
                    return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                e = e.parentElement;
            }
            } (a.element);
            o && (n = o.map(function(e) { return l[e] || c; })), n.forEach(function(e) {
            var t = e(a); if (t) {
                var n = document.createElement("div");
                n.classList.add("toolbar-item"), n.appendChild(t), r.appendChild(n);
            }
            }), t.appendChild(r);
        }
        };
        e("label", function(e) {
        var t = e.element.parentNode; if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
            var n, a, r = t.getAttribute("data-label");
            try {
                a = document.querySelector("template#" + r);
            }
            catch (e) { }
            return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n;
        }
        }), Prism.hooks.add("complete", t);
    }
    } ();
    !function() {
    if ("undefined" != typeof self && self.Prism && self.document)
        if (Prism.plugins.toolbar) {
            var r = { html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", css: "CSS", clike: "C-like", js: "JavaScript", abap: "ABAP", abnf: "Augmented Backus–Naur form", antlr4: "ANTLR4", g4: "ANTLR4", apacheconf: "Apache Configuration", apl: "APL", aql: "AQL", arff: "ARFF", asciidoc: "AsciiDoc", adoc: "AsciiDoc", asm6502: "6502 Assembly", aspnet: "ASP.NET (C#)", autohotkey: "AutoHotkey", autoit: "AutoIt", shell: "Bash", basic: "BASIC", bbcode: "BBcode", bnf: "Backus–Naur form", rbnf: "Routing Backus–Naur form", conc: "Concurnas", csharp: "C#", cs: "C#", dotnet: "C#", cpp: "C++", cil: "CIL", coffee: "CoffeeScript", cmake: "CMake", csp: "Content-Security-Policy", "css-extras": "CSS Extras", django: "Django/Jinja2", jinja2: "Django/Jinja2", "dns-zone-file": "DNS zone file", "dns-zone": "DNS zone file", dockerfile: "Docker", ebnf: "Extended Backus–Naur form", ejs: "EJS", etlua: "Embedded Lua templating", erb: "ERB", fsharp: "F#", "firestore-security-rules": "Firestore security rules", ftl: "FreeMarker Template Language", gcode: "G-code", gdscript: "GDScript", gedcom: "GEDCOM", glsl: "GLSL", gml: "GameMaker Language", gamemakerlanguage: "GameMaker Language", graphql: "GraphQL", hs: "Haskell", hcl: "HCL", http: "HTTP", hpkp: "HTTP Public-Key-Pins", hsts: "HTTP Strict-Transport-Security", ichigojam: "IchigoJam", inform7: "Inform 7", javadoc: "JavaDoc", javadoclike: "JavaDoc-like", javastacktrace: "Java stack trace", jq: "JQ", jsdoc: "JSDoc", "js-extras": "JS Extras", "js-templates": "JS Templates", json: "JSON", jsonp: "JSONP", json5: "JSON5", latex: "LaTeX", tex: "TeX", context: "ConTeXt", lilypond: "LilyPond", ly: "LilyPond", emacs: "Lisp", elisp: "Lisp", "emacs-lisp": "Lisp", lolcode: "LOLCODE", md: "Markdown", "markup-templating": "Markup templating", matlab: "MATLAB", mel: "MEL", moon: "MoonScript", n1ql: "N1QL", n4js: "N4JS", n4jsd: "N4JS", "nand2tetris-hdl": "Nand To Tetris HDL", nasm: "NASM", neon: "NEON", nginx: "nginx", nsis: "NSIS", objectivec: "Objective-C", ocaml: "OCaml", opencl: "OpenCL", parigp: "PARI/GP", objectpascal: "Object Pascal", pcaxis: "PC-Axis", px: "PC-Axis", php: "PHP", phpdoc: "PHPDoc", "php-extras": "PHP Extras", plsql: "PL/SQL", powershell: "PowerShell", properties: ".properties", protobuf: "Protocol Buffers", py: "Python", q: "Q (kdb+ database)", qml: "QML", jsx: "React JSX", tsx: "React TSX", renpy: "Ren'py", rest: "reST (reStructuredText)", robotframework: "Robot Framework", robot: "Robot Framework", rb: "Ruby", sas: "SAS", sass: "Sass (Sass)", scss: "Sass (Scss)", "shell-session": "Shell session", solidity: "Solidity (Ethereum)", "solution-file": "Solution file", sln: "Solution file", soy: "Soy (Closure Template)", sparql: "SPARQL", rq: "SPARQL", "splunk-spl": "Splunk SPL", sqf: "SQF: Status Quo Function (Arma 3)", sql: "SQL", tap: "TAP", toml: "TOML", tt2: "Template Toolkit 2", trig: "TriG", ts: "TypeScript", "t4-cs": "T4 Text Templates (C#)", t4: "T4 Text Templates (C#)", "t4-vb": "T4 Text Templates (VB)", "t4-templating": "T4 templating", vbnet: "VB.Net", vhdl: "VHDL", vim: "vim", "visual-basic": "Visual Basic", vb: "Visual Basic", wasm: "WebAssembly", wiki: "Wiki markup", xeoracube: "XeoraCube", xojo: "Xojo (REALbasic)", xquery: "XQuery", yaml: "YAML", yml: "YAML" };
            Prism.plugins.toolbar.registerButton("show-language", function(e) {
            var a = e.element.parentNode; if (a && /pre/i.test(a.nodeName)) {
                var s, t = a.getAttribute("data-language") || r[e.language] || ((s = e.language) ? (s.substring(0, 1).toUpperCase() + s.substring(1)).replace(/s(?=cript)/, "S") : s);
                if (t) {
                    var o = document.createElement("span");
                    return o.textContent = t, o;
                }
            }
            });
        }
        else
            console.warn("Show Languages plugin loaded before Toolbar plugin.");
    } ();
    "undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("wrap", function(e) { "keyword" === e.type && e.classes.push("keyword-" + e.content); });
    !function() {
    if ("undefined" != typeof self && self.Prism && self.document)
        if (Prism.plugins.toolbar) {
            var r = window.ClipboardJS || void 0;
            r || "function" != typeof require || (r = require("clipboard"));
            var i = [];
            if (!r) {
                var o = document.createElement("script"), e = document.querySelector("head");
                o.onload = function() {
                if (r = window.ClipboardJS)
                    for (; i.length;)
                        i.pop()();
                }, o.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", e.appendChild(o);
            }
            Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(e) { var t = document.createElement("button"); return t.textContent = "复制代码", r ? o() : i.push(o), t; function o() { var o = new r(t, { text: function() { return e.code; } }); o.on("success", function() { t.textContent = "已复制", n(); }), o.on("error", function() { t.textContent = "按下Ctrl+C来复制", n(); }); } function n() { setTimeout(function() { t.textContent = "已复制"; }, 5e3); } });
        }
        else
            console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
    } ();
}
