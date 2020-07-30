
var SHIVAM = SHIVAM || {};
SHIVAM.table = function() {
    var e = [],
        q, m; 
    var t = function(a) {
        -1 < a.className.indexOf("ignore") || (!0 === q ? SHIVAM.event.add(a, "mousedown", z) : SHIVAM.event.remove(a, "mousedown", z))
    };
    var z = function(a) {
        var b = a || window.event;
        a = A(b.target || b.srcElement);
        if (a) {
            var d = !!/^\s*$/.test(a.innerHTML);
            if (!1 !== SHIVAM.table.markNonEmpty || !1 !== d) b = b.which ? b.which : b.button, 1 === b && (a.shivam = a.shivam || {}, !0 === a.shivam.selected ? u(!1, a) : u(!0, a))
        }
    };
    var A = function(a) {
        return a ? "TD" === a.nodeName || "TH" === a.nodeName ? a : A(a.parentNode) :
            null
    };
    var B = function(a, b, d, c, f, l) {
        var temp="";

        var k = 0;
        var g = "v" === f ? a[d + "-" + b] : a[b + "-" + d];
        temp=temp+g.innerHTML+" ";
        // console.log("col span = ",g.colSpan,g);
        // console.log("row span = ",g.rowSpan,g);
        var rowspan=1;
        var colspan=1;

          // console.log("a = ",a,"row = ",b,"column = ",d,"c = ",c,"f = ",f,"l = ",l);
        for (d += 1; d < c; d++) {
            
            if(rowspan>=g.colSpan && l==false)
            {
                temp=temp+a[b+'-'+d].innerHTML+" ";
            }
            if(colspan>=g.rowSpan && l==true)
            {
                // console.log("d",d,"a[e] = ",a[d+'-'+b]);
                temp=temp+a[d+'-'+b].innerHTML+"\n";
            }
            var e = "v" === f ? d + "-" + b : b + "-" + d;
            a[e] && (e = a[e], k += "v" === f ? e.rowSpan : e.colSpan, E(e, g), e.parentNode.deleteCell(e.cellIndex));
            rowspan++;
            colspan++;
            

        }
        void 0 !== g && ("v" === f ? g.rowSpan += k : g.colSpan += k, !0 !== l && void 0 !== l || u(!1, g))
        g.innerHTML=temp;


    };
    var x = function(a) {
        var b = a.rows,
            d = 0;
        "string" === typeof a && document.getElementById(a);
        for (var c = 0; c < b.length; c++) {
            for (var f = a = 0; f < b[c].cells.length; f++) a += b[c].cells[f].colSpan || 1;
            a > d && (d = a)
        }
        return d
    };
    var C = function(a) {
        var b = [];
        void 0 !== a && ("string" === typeof a && (a = document.getElementById(a)), a && "object" === typeof a && "TABLE" === a.nodeName && (b[0] = a));
        return b
    };
    var u = function(a, b, d, c) {
        if ("boolean" === typeof a) {
            if ("string" === typeof b) b = document.getElementById(b);
            else if ("object" !== typeof b) return;
            "TABLE" === b.nodeName && (b = v(b), b = b[d + "-" + c]);
            !b || "TD" !== b.nodeName && "TH" !== b.nodeName || (b.shivam = b.shivam || {}, "string" === typeof SHIVAM.table.color.cell && (!0 === a ? (b.shivam.background_old = b.style.backgroundColor, b.style.backgroundColor =
                SHIVAM.table.color.cell) : b.style.backgroundColor = b.shivam.background_old), b.shivam.selected = a)
        }
    };
    var y = function() {
        if (window.getSelection) window.getSelection().removeAllRanges();
        else if (document.selection && "Text" === document.selection.type) try {
            document.selection.empty()
        } catch (a) {}
    };
    var v = function(a) {
        var b = [],
            d = {},
            c;
        var f = a.rows;
        for (var e = 0; e < f.length; e++)
            for (var k = 0; k < f[e].cells.length; k++) {
                var g = f[e].cells[k];
                a = g.parentNode.rowIndex;
                var q = g.rowSpan || 1;
                var n = g.colSpan || 1;
                b[a] = b[a] || [];
                for (c = 0; c < b[a].length +
                    1; c++)
                    if ("undefined" === typeof b[a][c]) {
                        var h = c;
                        break
                    } d[a + "-" + h] = g;
                for (c = a; c < a + q; c++) {
                    b[c] = b[c] || [];
                    g = b[c];
                    for (var p = h; p < h + n; p++) g[p] = "x"
                }
            }
        return d
    };
    var E = function(a, b) {
        if (a !== b) {
            var d = a.childNodes.length;
            for (var c = 0, f = 0; c < d; c++) 1 === a.childNodes[f].nodeType ? b.appendChild(a.childNodes[f]) : f++
        }
    };
    var w = function(a) {
        if (void 0 !== a || !0 === m) {
            void 0 !== a && (m = a);
            for (var b, d, c, f = 0; f < e.length; f++) {
                a = e[f].rows;
                c = x(e[f]);
                d = v(e[f]);
                for (var l = 0; l < a.length; l++)
                    for (var k = 0; k < c; k++) 
                        {
                            d[l + "-" + k] && (b = d[l + "-" + k], b.innerHTML =
                        m ? l + "-" + k : "")

                        }
            }
        }
    };
    return {
        color: {
            cell: !1,
            row: !1,
            column: !1
        },
        markNonEmpty: !0,
        onMouseDown: function(a, b, d) {
            var c = function(a) {
                var b = [],
                    c;
                a = a.getElementsByTagName("table");
                for (c = 0; c < a.length; c++) b.push(a[c]);
                return b
            };
            q = b;
            if ("string" === typeof a)
                if ("classname" === d)
                    for (e = c(document), b = 0; b < e.length; b++) - 1 === e[b].className.indexOf(a) && (e.splice(b, 1), b--);
                else a = document.getElementById(a);
            a && "object" === typeof a && ("TABLE" === a.nodeName ? e[0] = a : e = c(a));
            for (a = 0; a < e.length; a++) {
                c = e[a].getElementsByTagName("th");
                for (b =
                    0; b < c.length; b++) t(c[b]);
                c = e[a].getElementsByTagName("td");
                for (b = 0; b < c.length; b++) t(c[b])
            }
            w()
        },
        mark: u,
        merge: function(a, b, d) {
        // console.log(" a = ",a,"b = ",b);
            var c, f;
            y();
            d = void 0 === d ? e : C(d);
            // console.log("d = ",d.length);
            for (var l = 0; l < d.length; l++) {
                var k = v(d[l]);
                // console.log("k = ",k);
                var g = d[l].rows;
                // console.log("g = ",g);
                var q = "v" === a ? x(d[l]) : g.length;
                g = "v" === a ? g.length : x(d[l]);
                // console.log("g = ",g);
                for (var n = 0; n < q; n++) {
                    var h = f = -1;
                    for (c = 0; c <= g; c++) {
                        var p = "v" === a ? c + "-" + n : n + "-" + c;

                        if (k[p]) {

                            var r = k[p];
                            // k[p].innerHTML="kkk";
                            // console.log("r  = ",r);
                            r.shivam = r.shivam || {};
                            // console.log("r.shivam ",r.shivam);
                            var m = r ? r.shivam.selected : !1;
                            // console.log("m ",m);
                            var D = "v" === a ? r.colSpan : r.rowSpan;
                            // console.log("D ",D);
                        } else m = !1;
                        //selection happening here
                        if (!0 === m && -1 === h)
                            {
                                h = c, f = D;
                                // console.log("h = ",h,"f  = ",D);
                            }
                        else if (!0 !==
                            m && -1 < h || -1 < f && f !== D)
                            {
                                

                                B(k, n, h, c, a, b), h = f = -1, !0 === m && (!0 !== b && void 0 !== b || u(!1, r), m = !1);

                            }

                        k[p] && (c += "v" === a ? r.rowSpan - 1 : r.colSpan - 1)
                    }!0 === m && B(k, n, h, c, a, b)
                }
            }
            // w()
        },
        split: function(a, b) {
            var d = function(a, b, c) {
                var d = 0;
                a = b + a.rowSpan - 1;
                for (--c; 0 <= c; c--) void 0 === f[a + "-" + c] && d++;
                return d
            };
            y();
            b = void 0 === b ? e : C(b);
            for (var c = 0; c < b.length; c++) {
                var f = v(b[c]);
                var l = x(b[c]);
                var k = b[c].rows;
                for (var g = 0; g < k.length; g++) {
                    var m = "v" === a ? l : k[g].cells.length;
                    for (var n = 0; n < m; n++) {
                        if ("v" === a) {
                            var h = f[g + "-" + n];
                            void 0 !== h && (h.shivam =
                                h.shivam || {});
                            if (void 0 !== h && !0 === h.shivam.selected && 1 < h.rowSpan) {
                                var p = d(h, g, n);
                                p = k[g + h.rowSpan - 1].insertCell(n - p);
                                p.colSpan = h.colSpan;
                                --h.rowSpan;
                                t(p);
                                f = v(b[c])
                            }
                        } else h = k[g].cells[n], h.shivam = h.shivam || {}, !0 === h.shivam.selected && 1 < h.colSpan && (m++, p = k[g].insertCell(n + 1), p.rowSpan = h.rowSpan, --h.colSpan, t(p));
                        void 0 !== h && u(!1, h)
                    }
                }
            }
            
        },
        row: function(a, b, d) {
            var c = null,
                e = 0,
                l;
            y();
            "object" !== typeof a && (a = document.getElementById(a));
            void 0 === d && (d = -1);
            if ("insert" === b) {
                c = a.rows[0];
                for (b = 0; b < c.cells.length; b++) e +=
                    c.cells[b].colSpan;
                c = a.insertRow(d);
                var d;
                for (b = 0; b < e; b++)
                	{
                		
                		
                			d = c.insertCell(b);
                		t(d);
                	}
                w()
            } else {
                if (1 === a.rows.length) return;
                a.deleteRow(d);
                var k = v(a);
                d = a.rows.length - 1;
                e = x(a);
                for (b = 0; b < e; b++) {
                    a = k[d + "-" + b];
                    if (void 0 === a) {
                        var g = d;
                        for (l = 1; 0 <= g; g--, l++)
                            if (a = k[g + "-" + b], void 0 !== a) {
                                a.rowSpan = l;
                                break
                            }
                    } else 1 < a.rowSpan && --a.rowSpan;
                    b += a.colSpan - 1
                }
            }
            return c
        },
        column: function(a, b, d) {
            y();
            "object" !== typeof a && (a = document.getElementById(a));
            void 0 === d && (d = -1);
            if ("insert" === b) {
                for (b = 0; b < a.rows.length; b++) {
                	
    
	                 	var c = a.rows[b].insertCell(d);
	                    t(c);
                }
                w()
            } else if (c = a.rows[0].cells, 1 !== c.length || 1 !== c[0].colSpan && void 0 !== c[0].colSpan)
                for (b = 0; b < a.rows.length; b++) c = -1 === d ? a.rows[b].cells.length - 1 : d, c = a.rows[b].cells[c], 1 < c.colSpan ? --c.colSpan : a.rows[b].deleteCell(d), b += c.rowSpan - 1
        },
        cellIndex: w,
        cellIgnore: function(a) {
            "string" === typeof a && (a = document.getElementById(a));
            SHIVAM.event.remove(a, "mousedown", z)
        }
    }
}();
SHIVAM.event || (SHIVAM.event = function() {
    return {
        add: function(e, q, m) {
            e.addEventListener ? e.addEventListener(q, m, !1) : e.attachEvent ? e.attachEvent("on" + q, m) : e["on" + q] = m
        },
        remove: function(e, q, m) {
            e.removeEventListener ? e.removeEventListener(q, m, !1) : e.detachEvent ? e.detachEvent("on" + q, m) : e["on" + q] = null
        }
    }
}());
function editor()
{
    var x= document.getElementById("customSwitch1");

    if(x.checked==true)
    {
        $('#mainTable td').each(function () {
        	// console.log("here");
            $(this).attr('contenteditable', true);
        });
         $('#mainTable th').each(function () {
        	// console.log("here");
            $(this).attr('contenteditable', true);
        });
    }
    else if(x.checked==false)
    {
        $('#mainTable td').each(function () {
            $(this).attr('contenteditable', false);
        });
        $('#mainTable th').each(function () {
            $(this).attr('contenteditable', false);
        });
    }
}