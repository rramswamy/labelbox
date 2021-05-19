! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.Labelbox = {})
}(this, function(exports) {
    "use strict";
    var __assign = function() {
            return (__assign = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        root;

    function __awaiter(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function s(e) {
                try {
                    a(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    a(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(s, u)
            }
            a((n = n.apply(e, t || [])).next())
        })
    }

    function __generator(e, t) {
        var r, n, i, o, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    s.label = i[1], i = o;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(o);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = t.call(e, s)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    }

    function symbolObservablePonyfill(e) {
        var t, r = e.Symbol;
        return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }
    root = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")();
    var result = symbolObservablePonyfill(root),
        extendStatics$1 = function(e, t) {
            return (extendStatics$1 = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
        };

    function __extends$1(e, t) {
        function r() {
            this.constructor = e
        }
        extendStatics$1(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }

    function isFunction(e) {
        return "function" == typeof e
    }
    var _enable_super_gross_mode_that_will_cause_bad_things = !1,
        config = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(e) {
                e && (new Error).stack;
                _enable_super_gross_mode_that_will_cause_bad_things = e
            },
            get useDeprecatedSynchronousErrorHandling() {
                return _enable_super_gross_mode_that_will_cause_bad_things
            }
        };

    function hostReportError(e) {
        setTimeout(function() {
            throw e
        }, 0)
    }
    var empty = {
            closed: !0,
            next: function(e) {},
            error: function(e) {
                if (config.useDeprecatedSynchronousErrorHandling) throw e;
                hostReportError(e)
            },
            complete: function() {}
        },
        isArray = function() {
            return Array.isArray || function(e) {
                return e && "number" == typeof e.length
            }
        }();

    function isObject(e) {
        return null !== e && "object" == typeof e
    }
    var UnsubscriptionErrorImpl = function() {
            function e(e) {
                return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map(function(e, t) {
                    return t + 1 + ") " + e.toString()
                }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        UnsubscriptionError = UnsubscriptionErrorImpl,
        Subscription = function() {
            function e(e) {
                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._unsubscribe = e)
            }
            var t;
            return e.prototype.unsubscribe = function() {
                var t;
                if (!this.closed) {
                    var r = this._parentOrParents,
                        n = this._unsubscribe,
                        i = this._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof e) r.remove(this);
                    else if (null !== r)
                        for (var o = 0; o < r.length; ++o) {
                            r[o].remove(this)
                        }
                    if (isFunction(n)) try {
                        n.call(this)
                    } catch (e) {
                        t = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e]
                    }
                    if (isArray(i)) {
                        o = -1;
                        for (var s = i.length; ++o < s;) {
                            var u = i[o];
                            if (isObject(u)) try {
                                u.unsubscribe()
                            } catch (e) {
                                t = t || [], e instanceof UnsubscriptionError ? t = t.concat(flattenUnsubscriptionErrors(e.errors)) : t.push(e)
                            }
                        }
                    }
                    if (t) throw new UnsubscriptionError(t)
                }
            }, e.prototype.add = function(t) {
                var r = t;
                if (!t) return e.EMPTY;
                switch (typeof t) {
                    case "function":
                        r = new e(t);
                    case "object":
                        if (r === this || r.closed || "function" != typeof r.unsubscribe) return r;
                        if (this.closed) return r.unsubscribe(), r;
                        if (!(r instanceof e)) {
                            var n = r;
                            (r = new e)._subscriptions = [n]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + t + " added to Subscription.")
                }
                var i = r._parentOrParents;
                if (null === i) r._parentOrParents = this;
                else if (i instanceof e) {
                    if (i === this) return r;
                    r._parentOrParents = [i, this]
                } else {
                    if (-1 !== i.indexOf(this)) return r;
                    i.push(this)
                }
                var o = this._subscriptions;
                return null === o ? this._subscriptions = [r] : o.push(r), r
            }, e.prototype.remove = function(e) {
                var t = this._subscriptions;
                if (t) {
                    var r = t.indexOf(e); - 1 !== r && t.splice(r, 1)
                }
            }, e.EMPTY = ((t = new e).closed = !0, t), e
        }();

    function flattenUnsubscriptionErrors(e) {
        return e.reduce(function(e, t) {
            return e.concat(t instanceof UnsubscriptionError ? t.errors : t)
        }, [])
    }
    var rxSubscriber = function() {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }(),
        Subscriber = function(e) {
            function t(r, n, i) {
                var o = e.call(this) || this;
                switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                    case 0:
                        o.destination = empty;
                        break;
                    case 1:
                        if (!r) {
                            o.destination = empty;
                            break
                        }
                        if ("object" == typeof r) {
                            r instanceof t ? (o.syncErrorThrowable = r.syncErrorThrowable, o.destination = r, r.add(o)) : (o.syncErrorThrowable = !0, o.destination = new SafeSubscriber(o, r));
                            break
                        }
                        default:
                            o.syncErrorThrowable = !0, o.destination = new SafeSubscriber(o, r, n, i)
                }
                return o
            }
            return __extends$1(t, e), t.prototype[rxSubscriber] = function() {
                return this
            }, t.create = function(e, r, n) {
                var i = new t(e, r, n);
                return i.syncErrorThrowable = !1, i
            }, t.prototype.next = function(e) {
                this.isStopped || this._next(e)
            }, t.prototype.error = function(e) {
                this.isStopped || (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
            }, t.prototype._next = function(e) {
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                this.destination.error(e), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe()
            }, t.prototype._unsubscribeAndRecycle = function() {
                var e = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
            }, t
        }(Subscription),
        SafeSubscriber = function(e) {
            function t(t, r, n, i) {
                var o, s = e.call(this) || this;
                s._parentSubscriber = t;
                var u = s;
                return isFunction(r) ? o = r : r && (o = r.next, n = r.error, i = r.complete, r !== empty && (isFunction((u = Object.create(r)).unsubscribe) && s.add(u.unsubscribe.bind(u)), u.unsubscribe = s.unsubscribe.bind(s))), s._context = u, s._next = o, s._error = n, s._complete = i, s
            }
            return __extends$1(t, e), t.prototype.next = function(e) {
                if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    config.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                }
            }, t.prototype.error = function(e) {
                if (!this.isStopped) {
                    var t = this._parentSubscriber,
                        r = config.useDeprecatedSynchronousErrorHandling;
                    if (this._error) r && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                    else if (t.syncErrorThrowable) r ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : hostReportError(e), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), r) throw e;
                        hostReportError(e)
                    }
                }
            }, t.prototype.complete = function() {
                var e = this;
                if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                        var r = function() {
                            return e._complete.call(e._context)
                        };
                        config.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, t.prototype.__tryOrUnsub = function(e, t) {
                try {
                    e.call(this._context, t)
                } catch (e) {
                    if (this.unsubscribe(), config.useDeprecatedSynchronousErrorHandling) throw e;
                    hostReportError(e)
                }
            }, t.prototype.__tryOrSetError = function(e, t, r) {
                if (!config.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    t.call(this._context, r)
                } catch (t) {
                    return config.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, !0) : (hostReportError(t), !0)
                }
                return !1
            }, t.prototype._unsubscribe = function() {
                var e = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, e.unsubscribe()
            }, t
        }(Subscriber);

    function canReportError(e) {
        for (; e;) {
            var t = e,
                r = t.closed,
                n = t.destination,
                i = t.isStopped;
            if (r || i) return !1;
            e = n && n instanceof Subscriber ? n : null
        }
        return !0
    }

    function toSubscriber(e, t, r) {
        if (e) {
            if (e instanceof Subscriber) return e;
            if (e[rxSubscriber]) return e[rxSubscriber]()
        }
        return e || t || r ? new Subscriber(e, t, r) : new Subscriber(empty)
    }
    var observable = function() {
        return "function" == typeof Symbol && Symbol.observable || "@@observable"
    }();

    function identity(e) {
        return e
    }

    function pipe() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return pipeFromArray(e)
    }

    function pipeFromArray(e) {
        return 0 === e.length ? identity : 1 === e.length ? e[0] : function(t) {
            return e.reduce(function(e, t) {
                return t(e)
            }, t)
        }
    }
    var Observable = function() {
        function e(e) {
            this._isScalar = !1, e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var r = new e;
            return r.source = this, r.operator = t, r
        }, e.prototype.subscribe = function(e, t, r) {
            var n = this.operator,
                i = toSubscriber(e, t, r);
            if (n ? i.add(n.call(i, this.source)) : i.add(this.source || config.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), config.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
            return i
        }, e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                config.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), canReportError(e) ? e.error(t) : console.warn(t)
            }
        }, e.prototype.forEach = function(e, t) {
            var r = this;
            return new(t = getPromiseCtor(t))(function(t, n) {
                var i;
                i = r.subscribe(function(t) {
                    try {
                        e(t)
                    } catch (e) {
                        n(e), i && i.unsubscribe()
                    }
                }, n, t)
            })
        }, e.prototype._subscribe = function(e) {
            var t = this.source;
            return t && t.subscribe(e)
        }, e.prototype[observable] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return 0 === e.length ? this : pipeFromArray(e)(this)
        }, e.prototype.toPromise = function(e) {
            var t = this;
            return new(e = getPromiseCtor(e))(function(e, r) {
                var n;
                t.subscribe(function(e) {
                    return n = e
                }, function(e) {
                    return r(e)
                }, function() {
                    return e(n)
                })
            })
        }, e.create = function(t) {
            return new e(t)
        }, e
    }();

    function getPromiseCtor(e) {
        if (e || (e = config.Promise || Promise), !e) throw new Error("no Promise impl found");
        return e
    }
    var ObjectUnsubscribedErrorImpl = function() {
            function e() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl,
        SubjectSubscription = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.subject = t, n.subscriber = r, n.closed = !1, n
            }
            return __extends$1(t, e), t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                        t = e.observers;
                    if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                        var r = t.indexOf(this.subscriber); - 1 !== r && t.splice(r, 1)
                    }
                }
            }, t
        }(Subscription),
        SubjectSubscriber = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.destination = t, r
            }
            return __extends$1(t, e), t
        }(Subscriber),
        Subject = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
            }
            return __extends$1(t, e), t.prototype[rxSubscriber] = function() {
                return new SubjectSubscriber(this)
            }, t.prototype.lift = function(e) {
                var t = new AnonymousSubject(this, this);
                return t.operator = e, t
            }, t.prototype.next = function(e) {
                if (this.closed) throw new ObjectUnsubscribedError;
                if (!this.isStopped)
                    for (var t = this.observers, r = t.length, n = t.slice(), i = 0; i < r; i++) n[i].next(e)
            }, t.prototype.error = function(e) {
                if (this.closed) throw new ObjectUnsubscribedError;
                this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                for (var t = this.observers, r = t.length, n = t.slice(), i = 0; i < r; i++) n[i].error(e);
                this.observers.length = 0
            }, t.prototype.complete = function() {
                if (this.closed) throw new ObjectUnsubscribedError;
                this.isStopped = !0;
                for (var e = this.observers, t = e.length, r = e.slice(), n = 0; n < t; n++) r[n].complete();
                this.observers.length = 0
            }, t.prototype.unsubscribe = function() {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, t.prototype._trySubscribe = function(t) {
                if (this.closed) throw new ObjectUnsubscribedError;
                return e.prototype._trySubscribe.call(this, t)
            }, t.prototype._subscribe = function(e) {
                if (this.closed) throw new ObjectUnsubscribedError;
                return this.hasError ? (e.error(this.thrownError), Subscription.EMPTY) : this.isStopped ? (e.complete(), Subscription.EMPTY) : (this.observers.push(e), new SubjectSubscription(this, e))
            }, t.prototype.asObservable = function() {
                var e = new Observable;
                return e.source = this, e
            }, t.create = function(e, t) {
                return new AnonymousSubject(e, t)
            }, t
        }(Observable),
        AnonymousSubject = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.destination = t, n.source = r, n
            }
            return __extends$1(t, e), t.prototype.next = function(e) {
                var t = this.destination;
                t && t.next && t.next(e)
            }, t.prototype.error = function(e) {
                var t = this.destination;
                t && t.error && this.destination.error(e)
            }, t.prototype.complete = function() {
                var e = this.destination;
                e && e.complete && this.destination.complete()
            }, t.prototype._subscribe = function(e) {
                return this.source ? this.source.subscribe(e) : Subscription.EMPTY
            }, t
        }(Subject);

    function refCount() {
        return function(e) {
            return e.lift(new RefCountOperator$1(e))
        }
    }
    var RefCountOperator$1 = function() {
            function e(e) {
                this.connectable = e
            }
            return e.prototype.call = function(e, t) {
                var r = this.connectable;
                r._refCount++;
                var n = new RefCountSubscriber$1(e, r),
                    i = t.subscribe(n);
                return n.closed || (n.connection = r.connect()), i
            }, e
        }(),
        RefCountSubscriber$1 = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.connectable = r, n
            }
            return __extends$1(t, e), t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (e._refCount = t - 1, t > 1) this.connection = null;
                    else {
                        var r = this.connection,
                            n = e._connection;
                        this.connection = null, !n || r && n !== r || n.unsubscribe()
                    }
                } else this.connection = null
            }, t
        }(Subscriber),
        ConnectableObservable = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.source = t, n.subjectFactory = r, n._refCount = 0, n._isComplete = !1, n
            }
            return __extends$1(t, e), t.prototype._subscribe = function(e) {
                return this.getSubject().subscribe(e)
            }, t.prototype.getSubject = function() {
                var e = this._subject;
                return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, t.prototype.connect = function() {
                var e = this._connection;
                return e || (this._isComplete = !1, (e = this._connection = new Subscription).add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this))), e.closed && (this._connection = null, e = Subscription.EMPTY)), e
            }, t.prototype.refCount = function() {
                return refCount()(this)
            }, t
        }(Observable),
        connectableObservableDescriptor = function() {
            var e = ConnectableObservable.prototype;
            return {
                operator: {
                    value: null
                },
                _refCount: {
                    value: 0,
                    writable: !0
                },
                _subject: {
                    value: null,
                    writable: !0
                },
                _connection: {
                    value: null,
                    writable: !0
                },
                _subscribe: {
                    value: e._subscribe
                },
                _isComplete: {
                    value: e._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: e.getSubject
                },
                connect: {
                    value: e.connect
                },
                refCount: {
                    value: e.refCount
                }
            }
        }(),
        ConnectableSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.connectable = r, n
            }
            return __extends$1(t, e), t.prototype._error = function(t) {
                this._unsubscribe(), e.prototype._error.call(this, t)
            }, t.prototype._complete = function() {
                this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                }
            }, t
        }(SubjectSubscriber),
        RefCountSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.connectable = r, n
            }
            return __extends$1(t, e), t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (e._refCount = t - 1, t > 1) this.connection = null;
                    else {
                        var r = this.connection,
                            n = e._connection;
                        this.connection = null, !n || r && n !== r || n.unsubscribe()
                    }
                } else this.connection = null
            }, t
        }(Subscriber);

    function groupBy(e, t, r, n) {
        return function(i) {
            return i.lift(new GroupByOperator(e, t, r, n))
        }
    }
    var GroupByOperator = function() {
            function e(e, t, r, n) {
                this.keySelector = e, this.elementSelector = t, this.durationSelector = r, this.subjectSelector = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new GroupBySubscriber(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector))
            }, e
        }(),
        GroupBySubscriber = function(e) {
            function t(t, r, n, i, o) {
                var s = e.call(this, t) || this;
                return s.keySelector = r, s.elementSelector = n, s.durationSelector = i, s.subjectSelector = o, s.groups = null, s.attemptedToUnsubscribe = !1, s.count = 0, s
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t;
                try {
                    t = this.keySelector(e)
                } catch (e) {
                    return void this.error(e)
                }
                this._group(e, t)
            }, t.prototype._group = function(e, t) {
                var r = this.groups;
                r || (r = this.groups = new Map);
                var n, i = r.get(t);
                if (this.elementSelector) try {
                    n = this.elementSelector(e)
                } catch (e) {
                    this.error(e)
                } else n = e;
                if (!i) {
                    i = this.subjectSelector ? this.subjectSelector() : new Subject, r.set(t, i);
                    var o = new GroupedObservable(t, i, this);
                    if (this.destination.next(o), this.durationSelector) {
                        var s = void 0;
                        try {
                            s = this.durationSelector(new GroupedObservable(t, i))
                        } catch (e) {
                            return void this.error(e)
                        }
                        this.add(s.subscribe(new GroupDurationSubscriber(t, i, this)))
                    }
                }
                i.closed || i.next(n)
            }, t.prototype._error = function(e) {
                var t = this.groups;
                t && (t.forEach(function(t, r) {
                    t.error(e)
                }), t.clear()), this.destination.error(e)
            }, t.prototype._complete = function() {
                var e = this.groups;
                e && (e.forEach(function(e, t) {
                    e.complete()
                }), e.clear()), this.destination.complete()
            }, t.prototype.removeGroup = function(e) {
                this.groups.delete(e)
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && e.prototype.unsubscribe.call(this))
            }, t
        }(Subscriber),
        GroupDurationSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, r) || this;
                return i.key = t, i.group = r, i.parent = n, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.complete()
            }, t.prototype._unsubscribe = function() {
                var e = this.parent,
                    t = this.key;
                this.key = this.parent = null, e && e.removeGroup(t)
            }, t
        }(Subscriber),
        GroupedObservable = function(e) {
            function t(t, r, n) {
                var i = e.call(this) || this;
                return i.key = t, i.groupSubject = r, i.refCountSubscription = n, i
            }
            return __extends$1(t, e), t.prototype._subscribe = function(e) {
                var t = new Subscription,
                    r = this.refCountSubscription,
                    n = this.groupSubject;
                return r && !r.closed && t.add(new InnerRefCountSubscription(r)), t.add(n.subscribe(e)), t
            }, t
        }(Observable),
        InnerRefCountSubscription = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.parent = t, t.count++, r
            }
            return __extends$1(t, e), t.prototype.unsubscribe = function() {
                var t = this.parent;
                t.closed || this.closed || (e.prototype.unsubscribe.call(this), t.count -= 1, 0 === t.count && t.attemptedToUnsubscribe && t.unsubscribe())
            }, t
        }(Subscription),
        BehaviorSubject = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r._value = t, r
            }
            return __extends$1(t, e), Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._subscribe = function(t) {
                var r = e.prototype._subscribe.call(this, t);
                return r && !r.closed && t.next(this._value), r
            }, t.prototype.getValue = function() {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new ObjectUnsubscribedError;
                return this._value
            }, t.prototype.next = function(t) {
                e.prototype.next.call(this, this._value = t)
            }, t
        }(Subject),
        Action = function(e) {
            function t(t, r) {
                return e.call(this) || this
            }
            return __extends$1(t, e), t.prototype.schedule = function(e, t) {
                return void 0 === t && (t = 0), this
            }, t
        }(Subscription),
        AsyncAction = function(e) {
            function t(t, r) {
                var n = e.call(this, t, r) || this;
                return n.scheduler = t, n.work = r, n.pending = !1, n
            }
            return __extends$1(t, e), t.prototype.schedule = function(e, t) {
                if (void 0 === t && (t = 0), this.closed) return this;
                this.state = e;
                var r = this.id,
                    n = this.scheduler;
                return null != r && (this.id = this.recycleAsyncId(n, r, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(n, this.id, t), this
            }, t.prototype.requestAsyncId = function(e, t, r) {
                return void 0 === r && (r = 0), setInterval(e.flush.bind(e, this), r)
            }, t.prototype.recycleAsyncId = function(e, t, r) {
                if (void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending) return t;
                clearInterval(t)
            }, t.prototype.execute = function(e, t) {
                if (this.closed) return new Error("executing a cancelled action");
                this.pending = !1;
                var r = this._execute(e, t);
                if (r) return r;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, t.prototype._execute = function(e, t) {
                var r = !1,
                    n = void 0;
                try {
                    this.work(e)
                } catch (e) {
                    r = !0, n = !!e && e || new Error(e)
                }
                if (r) return this.unsubscribe(), n
            }, t.prototype._unsubscribe = function() {
                var e = this.id,
                    t = this.scheduler,
                    r = t.actions,
                    n = r.indexOf(this);
                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(n, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
            }, t
        }(Action),
        QueueAction = function(e) {
            function t(t, r) {
                var n = e.call(this, t, r) || this;
                return n.scheduler = t, n.work = r, n
            }
            return __extends$1(t, e), t.prototype.schedule = function(t, r) {
                return void 0 === r && (r = 0), r > 0 ? e.prototype.schedule.call(this, t, r) : (this.delay = r, this.state = t, this.scheduler.flush(this), this)
            }, t.prototype.execute = function(t, r) {
                return r > 0 || this.closed ? e.prototype.execute.call(this, t, r) : this._execute(t, r)
            }, t.prototype.requestAsyncId = function(t, r, n) {
                return void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, r, n) : t.flush(this)
            }, t
        }(AsyncAction),
        Scheduler = function() {
            function e(t, r) {
                void 0 === r && (r = e.now), this.SchedulerAction = t, this.now = r
            }
            return e.prototype.schedule = function(e, t, r) {
                return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(r, t)
            }, e.now = function() {
                return Date.now()
            }, e
        }(),
        AsyncScheduler = function(e) {
            function t(r, n) {
                void 0 === n && (n = Scheduler.now);
                var i = e.call(this, r, function() {
                    return t.delegate && t.delegate !== i ? t.delegate.now() : n()
                }) || this;
                return i.actions = [], i.active = !1, i.scheduled = void 0, i
            }
            return __extends$1(t, e), t.prototype.schedule = function(r, n, i) {
                return void 0 === n && (n = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(r, n, i) : e.prototype.schedule.call(this, r, n, i)
            }, t.prototype.flush = function(e) {
                var t = this.actions;
                if (this.active) t.push(e);
                else {
                    var r;
                    this.active = !0;
                    do {
                        if (r = e.execute(e.state, e.delay)) break
                    } while (e = t.shift());
                    if (this.active = !1, r) {
                        for (; e = t.shift();) e.unsubscribe();
                        throw r
                    }
                }
            }, t
        }(Scheduler),
        QueueScheduler = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends$1(t, e), t
        }(AsyncScheduler),
        queueScheduler = new QueueScheduler(QueueAction),
        queue = queueScheduler,
        EMPTY = new Observable(function(e) {
            return e.complete()
        });

    function empty$1(e) {
        return e ? emptyScheduled(e) : EMPTY
    }

    function emptyScheduled(e) {
        return new Observable(function(t) {
            return e.schedule(function() {
                return t.complete()
            })
        })
    }

    function isScheduler(e) {
        return e && "function" == typeof e.schedule
    }
    var subscribeToArray = function(e) {
            return function(t) {
                for (var r = 0, n = e.length; r < n && !t.closed; r++) t.next(e[r]);
                t.complete()
            }
        },
        NotificationKind;

    function scheduleArray(e, t) {
        return new Observable(function(r) {
            var n = new Subscription,
                i = 0;
            return n.add(t.schedule(function() {
                i !== e.length ? (r.next(e[i++]), r.closed || n.add(this.schedule())) : r.complete()
            })), n
        })
    }

    function fromArray(e, t) {
        return t ? scheduleArray(e, t) : new Observable(subscribeToArray(e))
    }

    function of () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = e[e.length - 1];
        return isScheduler(r) ? (e.pop(), scheduleArray(e, r)) : fromArray(e)
    }

    function throwError(e, t) {
        return new Observable(t ? function(r) {
            return t.schedule(dispatch, 0, {
                error: e,
                subscriber: r
            })
        } : function(t) {
            return t.error(e)
        })
    }

    function dispatch(e) {
        var t = e.error;
        e.subscriber.error(t)
    }
    NotificationKind || (NotificationKind = {});
    var Notification = function() {
        function e(e, t, r) {
            this.kind = e, this.value = t, this.error = r, this.hasValue = "N" === e
        }
        return e.prototype.observe = function(e) {
            switch (this.kind) {
                case "N":
                    return e.next && e.next(this.value);
                case "E":
                    return e.error && e.error(this.error);
                case "C":
                    return e.complete && e.complete()
            }
        }, e.prototype.do = function(e, t, r) {
            switch (this.kind) {
                case "N":
                    return e && e(this.value);
                case "E":
                    return t && t(this.error);
                case "C":
                    return r && r()
            }
        }, e.prototype.accept = function(e, t, r) {
            return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, r)
        }, e.prototype.toObservable = function() {
            switch (this.kind) {
                case "N":
                    return of(this.value);
                case "E":
                    return throwError(this.error);
                case "C":
                    return empty$1()
            }
            throw new Error("unexpected notification kind value")
        }, e.createNext = function(t) {
            return void 0 !== t ? new e("N", t) : e.undefinedValueNotification
        }, e.createError = function(t) {
            return new e("E", void 0, t)
        }, e.createComplete = function() {
            return e.completeNotification
        }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
    }();

    function observeOn(e, t) {
        return void 0 === t && (t = 0),
            function(r) {
                return r.lift(new ObserveOnOperator(e, t))
            }
    }
    var ObserveOnOperator = function() {
            function e(e, t) {
                void 0 === t && (t = 0), this.scheduler = e, this.delay = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ObserveOnSubscriber(e, this.scheduler, this.delay))
            }, e
        }(),
        ObserveOnSubscriber = function(e) {
            function t(t, r, n) {
                void 0 === n && (n = 0);
                var i = e.call(this, t) || this;
                return i.scheduler = r, i.delay = n, i
            }
            return __extends$1(t, e), t.dispatch = function(e) {
                var t = e.notification,
                    r = e.destination;
                t.observe(r), this.unsubscribe()
            }, t.prototype.scheduleMessage = function(e) {
                this.destination.add(this.scheduler.schedule(t.dispatch, this.delay, new ObserveOnMessage(e, this.destination)))
            }, t.prototype._next = function(e) {
                this.scheduleMessage(Notification.createNext(e))
            }, t.prototype._error = function(e) {
                this.scheduleMessage(Notification.createError(e)), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.scheduleMessage(Notification.createComplete()), this.unsubscribe()
            }, t
        }(Subscriber),
        ObserveOnMessage = function() {
            return function(e, t) {
                this.notification = e, this.destination = t
            }
        }(),
        ReplaySubject = function(e) {
            function t(t, r, n) {
                void 0 === t && (t = Number.POSITIVE_INFINITY), void 0 === r && (r = Number.POSITIVE_INFINITY);
                var i = e.call(this) || this;
                return i.scheduler = n, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = t < 1 ? 1 : t, i._windowTime = r < 1 ? 1 : r, r === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i
            }
            return __extends$1(t, e), t.prototype.nextInfiniteTimeWindow = function(t) {
                var r = this._events;
                r.push(t), r.length > this._bufferSize && r.shift(), e.prototype.next.call(this, t)
            }, t.prototype.nextTimeWindow = function(t) {
                this._events.push(new ReplayEvent(this._getNow(), t)), this._trimBufferThenGetEvents(), e.prototype.next.call(this, t)
            }, t.prototype._subscribe = function(e) {
                var t, r = this._infiniteTimeWindow,
                    n = r ? this._events : this._trimBufferThenGetEvents(),
                    i = this.scheduler,
                    o = n.length;
                if (this.closed) throw new ObjectUnsubscribedError;
                if (this.isStopped || this.hasError ? t = Subscription.EMPTY : (this.observers.push(e), t = new SubjectSubscription(this, e)), i && e.add(e = new ObserveOnSubscriber(e, i)), r)
                    for (var s = 0; s < o && !e.closed; s++) e.next(n[s]);
                else
                    for (s = 0; s < o && !e.closed; s++) e.next(n[s].value);
                return this.hasError ? e.error(this.thrownError) : this.isStopped && e.complete(), t
            }, t.prototype._getNow = function() {
                return (this.scheduler || queue).now()
            }, t.prototype._trimBufferThenGetEvents = function() {
                for (var e = this._getNow(), t = this._bufferSize, r = this._windowTime, n = this._events, i = n.length, o = 0; o < i && !(e - n[o].time < r);) o++;
                return i > t && (o = Math.max(o, i - t)), o > 0 && n.splice(0, o), n
            }, t
        }(Subject),
        ReplayEvent = function() {
            return function(e, t) {
                this.time = e, this.value = t
            }
        }(),
        AsyncSubject = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.value = null, t.hasNext = !1, t.hasCompleted = !1, t
            }
            return __extends$1(t, e), t.prototype._subscribe = function(t) {
                return this.hasError ? (t.error(this.thrownError), Subscription.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), Subscription.EMPTY) : e.prototype._subscribe.call(this, t)
            }, t.prototype.next = function(e) {
                this.hasCompleted || (this.value = e, this.hasNext = !0)
            }, t.prototype.error = function(t) {
                this.hasCompleted || e.prototype.error.call(this, t)
            }, t.prototype.complete = function() {
                this.hasCompleted = !0, this.hasNext && e.prototype.next.call(this, this.value), e.prototype.complete.call(this)
            }, t
        }(Subject),
        nextHandle = 1,
        RESOLVED = function() {
            return Promise.resolve()
        }(),
        activeHandles = {};

    function findAndClearHandle(e) {
        return e in activeHandles && (delete activeHandles[e], !0)
    }
    var Immediate = {
            setImmediate: function(e) {
                var t = nextHandle++;
                return activeHandles[t] = !0, RESOLVED.then(function() {
                    return findAndClearHandle(t) && e()
                }), t
            },
            clearImmediate: function(e) {
                findAndClearHandle(e)
            }
        },
        AsapAction = function(e) {
            function t(t, r) {
                var n = e.call(this, t, r) || this;
                return n.scheduler = t, n.work = r, n
            }
            return __extends$1(t, e), t.prototype.requestAsyncId = function(t, r, n) {
                return void 0 === n && (n = 0), null !== n && n > 0 ? e.prototype.requestAsyncId.call(this, t, r, n) : (t.actions.push(this), t.scheduled || (t.scheduled = Immediate.setImmediate(t.flush.bind(t, null))))
            }, t.prototype.recycleAsyncId = function(t, r, n) {
                if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, r, n);
                0 === t.actions.length && (Immediate.clearImmediate(r), t.scheduled = void 0)
            }, t
        }(AsyncAction),
        AsapScheduler = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends$1(t, e), t.prototype.flush = function(e) {
                this.active = !0, this.scheduled = void 0;
                var t, r = this.actions,
                    n = -1,
                    i = r.length;
                e = e || r.shift();
                do {
                    if (t = e.execute(e.state, e.delay)) break
                } while (++n < i && (e = r.shift()));
                if (this.active = !1, t) {
                    for (; ++n < i && (e = r.shift());) e.unsubscribe();
                    throw t
                }
            }, t
        }(AsyncScheduler),
        asapScheduler = new AsapScheduler(AsapAction),
        asap = asapScheduler,
        asyncScheduler = new AsyncScheduler(AsyncAction),
        async = asyncScheduler, AnimationFrameAction = function(e) {
            function t(t, r) {
                var n = e.call(this, t, r) || this;
                return n.scheduler = t, n.work = r, n
            }
            return __extends$1(t, e), t.prototype.requestAsyncId = function(t, r, n) {
                return void 0 === n && (n = 0), null !== n && n > 0 ? e.prototype.requestAsyncId.call(this, t, r, n) : (t.actions.push(this), t.scheduled || (t.scheduled = requestAnimationFrame(function() {
                    return t.flush(null)
                })))
            }, t.prototype.recycleAsyncId = function(t, r, n) {
                if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, r, n);
                0 === t.actions.length && (cancelAnimationFrame(r), t.scheduled = void 0)
            }, t
        }(AsyncAction), AnimationFrameScheduler = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends$1(t, e), t.prototype.flush = function(e) {
                this.active = !0, this.scheduled = void 0;
                var t, r = this.actions,
                    n = -1,
                    i = r.length;
                e = e || r.shift();
                do {
                    if (t = e.execute(e.state, e.delay)) break
                } while (++n < i && (e = r.shift()));
                if (this.active = !1, t) {
                    for (; ++n < i && (e = r.shift());) e.unsubscribe();
                    throw t
                }
            }, t
        }(AsyncScheduler), animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction), animationFrame = animationFrameScheduler, VirtualTimeScheduler = function(e) {
            function t(t, r) {
                void 0 === t && (t = VirtualAction), void 0 === r && (r = Number.POSITIVE_INFINITY);
                var n = e.call(this, t, function() {
                    return n.frame
                }) || this;
                return n.maxFrames = r, n.frame = 0, n.index = -1, n
            }
            return __extends$1(t, e), t.prototype.flush = function() {
                for (var e, t, r = this.actions, n = this.maxFrames;
                    (t = r[0]) && t.delay <= n && (r.shift(), this.frame = t.delay, !(e = t.execute(t.state, t.delay))););
                if (e) {
                    for (; t = r.shift();) t.unsubscribe();
                    throw e
                }
            }, t.frameTimeFactor = 10, t
        }(AsyncScheduler), VirtualAction = function(e) {
            function t(t, r, n) {
                void 0 === n && (n = t.index += 1);
                var i = e.call(this, t, r) || this;
                return i.scheduler = t, i.work = r, i.index = n, i.active = !0, i.index = t.index = n, i
            }
            return __extends$1(t, e), t.prototype.schedule = function(r, n) {
                if (void 0 === n && (n = 0), !this.id) return e.prototype.schedule.call(this, r, n);
                this.active = !1;
                var i = new t(this.scheduler, this.work);
                return this.add(i), i.schedule(r, n)
            }, t.prototype.requestAsyncId = function(e, r, n) {
                void 0 === n && (n = 0), this.delay = e.frame + n;
                var i = e.actions;
                return i.push(this), i.sort(t.sortActions), !0
            }, t.prototype.recycleAsyncId = function(e, t, r) {
                void 0 === r && (r = 0)
            }, t.prototype._execute = function(t, r) {
                if (!0 === this.active) return e.prototype._execute.call(this, t, r)
            }, t.sortActions = function(e, t) {
                return e.delay === t.delay ? e.index === t.index ? 0 : e.index > t.index ? 1 : -1 : e.delay > t.delay ? 1 : -1
            }, t
        }(AsyncAction);

    function noop() {}

    function isObservable(e) {
        return !!e && (e instanceof Observable || "function" == typeof e.lift && "function" == typeof e.subscribe)
    }
    var ArgumentOutOfRangeErrorImpl = function() {
            function e() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl,
        EmptyErrorImpl = function() {
            function e() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        EmptyError = EmptyErrorImpl,
        TimeoutErrorImpl = function() {
            function e() {
                return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
            }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        TimeoutError = TimeoutErrorImpl;

    function map(e, t) {
        return function(r) {
            if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return r.lift(new MapOperator(e, t))
        }
    }
    var MapOperator = function() {
            function e(e, t) {
                this.project = e, this.thisArg = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new MapSubscriber(e, this.project, this.thisArg))
            }, e
        }(),
        MapSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.project = r, i.count = 0, i.thisArg = n || i, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t;
                try {
                    t = this.project.call(this.thisArg, e, this.count++)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(Subscriber);

    function bindCallback(e, t, r) {
        if (t) {
            if (!isScheduler(t)) return function() {
                for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                return bindCallback(e, r).apply(void 0, n).pipe(map(function(e) {
                    return isArray(e) ? t.apply(void 0, e) : t(e)
                }))
            };
            r = t
        }
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var i, o = this,
                s = {
                    context: o,
                    subject: i,
                    callbackFunc: e,
                    scheduler: r
                };
            return new Observable(function(n) {
                if (r) {
                    var u = {
                        args: t,
                        subscriber: n,
                        params: s
                    };
                    return r.schedule(dispatch$1, 0, u)
                }
                if (!i) {
                    i = new AsyncSubject;
                    try {
                        e.apply(o, t.concat([function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            i.next(e.length <= 1 ? e[0] : e), i.complete()
                        }]))
                    } catch (e) {
                        canReportError(i) ? i.error(e) : console.warn(e)
                    }
                }
                return i.subscribe(n)
            })
        }
    }

    function dispatch$1(e) {
        var t = this,
            r = e.args,
            n = e.subscriber,
            i = e.params,
            o = i.callbackFunc,
            s = i.context,
            u = i.scheduler,
            a = i.subject;
        if (!a) {
            a = i.subject = new AsyncSubject;
            try {
                o.apply(s, r.concat([function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    var n = e.length <= 1 ? e[0] : e;
                    t.add(u.schedule(dispatchNext, 0, {
                        value: n,
                        subject: a
                    }))
                }]))
            } catch (e) {
                a.error(e)
            }
        }
        this.add(a.subscribe(n))
    }

    function dispatchNext(e) {
        var t = e.value,
            r = e.subject;
        r.next(t), r.complete()
    }

    function bindNodeCallback(e, t, r) {
        if (t) {
            if (!isScheduler(t)) return function() {
                for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                return bindNodeCallback(e, r).apply(void 0, n).pipe(map(function(e) {
                    return isArray(e) ? t.apply(void 0, e) : t(e)
                }))
            };
            r = t
        }
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var i = {
                subject: void 0,
                args: t,
                callbackFunc: e,
                scheduler: r,
                context: this
            };
            return new Observable(function(n) {
                var o = i.context,
                    s = i.subject;
                if (r) return r.schedule(dispatch$2, 0, {
                    params: i,
                    subscriber: n,
                    context: o
                });
                if (!s) {
                    s = i.subject = new AsyncSubject;
                    try {
                        e.apply(o, t.concat([function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var r = e.shift();
                            r ? s.error(r) : (s.next(e.length <= 1 ? e[0] : e), s.complete())
                        }]))
                    } catch (e) {
                        canReportError(s) ? s.error(e) : console.warn(e)
                    }
                }
                return s.subscribe(n)
            })
        }
    }

    function dispatch$2(e) {
        var t = this,
            r = e.params,
            n = e.subscriber,
            i = e.context,
            o = r.callbackFunc,
            s = r.args,
            u = r.scheduler,
            a = r.subject;
        if (!a) {
            a = r.subject = new AsyncSubject;
            try {
                o.apply(i, s.concat([function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    var n = e.shift();
                    if (n) t.add(u.schedule(dispatchError$1, 0, {
                        err: n,
                        subject: a
                    }));
                    else {
                        var i = e.length <= 1 ? e[0] : e;
                        t.add(u.schedule(dispatchNext$1, 0, {
                            value: i,
                            subject: a
                        }))
                    }
                }]))
            } catch (e) {
                this.add(u.schedule(dispatchError$1, 0, {
                    err: e,
                    subject: a
                }))
            }
        }
        this.add(a.subscribe(n))
    }

    function dispatchNext$1(e) {
        var t = e.value,
            r = e.subject;
        r.next(t), r.complete()
    }

    function dispatchError$1(e) {
        var t = e.err;
        e.subject.error(t)
    }
    var OuterSubscriber = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.destination.next(t)
            }, t.prototype.notifyError = function(e, t) {
                this.destination.error(e)
            }, t.prototype.notifyComplete = function(e) {
                this.destination.complete()
            }, t
        }(Subscriber),
        InnerSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this) || this;
                return i.parent = t, i.outerValue = r, i.outerIndex = n, i.index = 0, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
            }, t.prototype._error = function(e) {
                this.parent.notifyError(e, this), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, t
        }(Subscriber),
        subscribeToPromise = function(e) {
            return function(t) {
                return e.then(function(e) {
                    t.closed || (t.next(e), t.complete())
                }, function(e) {
                    return t.error(e)
                }).then(null, hostReportError), t
            }
        };

    function getSymbolIterator() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }
    var iterator = getSymbolIterator(),
        subscribeToIterable = function(e) {
            return function(t) {
                for (var r = e[iterator]();;) {
                    var n = void 0;
                    try {
                        n = r.next()
                    } catch (e) {
                        return t.error(e), t
                    }
                    if (n.done) {
                        t.complete();
                        break
                    }
                    if (t.next(n.value), t.closed) break
                }
                return "function" == typeof r.return && t.add(function() {
                    r.return && r.return()
                }), t
            }
        },
        subscribeToObservable = function(e) {
            return function(t) {
                var r = e[observable]();
                if ("function" != typeof r.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return r.subscribe(t)
            }
        },
        isArrayLike = function(e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };

    function isPromise(e) {
        return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
    }
    var subscribeTo = function(e) {
        if (e && "function" == typeof e[observable]) return subscribeToObservable(e);
        if (isArrayLike(e)) return subscribeToArray(e);
        if (isPromise(e)) return subscribeToPromise(e);
        if (e && "function" == typeof e[iterator]) return subscribeToIterable(e);
        var t = isObject(e) ? "an invalid object" : "'" + e + "'";
        throw new TypeError("You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };

    function subscribeToResult(e, t, r, n, i) {
        if (void 0 === i && (i = new InnerSubscriber(e, r, n)), !i.closed) return t instanceof Observable ? t.subscribe(i) : subscribeTo(t)(i)
    }
    var NONE = {};

    function combineLatest() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = null,
            n = null;
        return isScheduler(e[e.length - 1]) && (n = e.pop()), "function" == typeof e[e.length - 1] && (r = e.pop()), 1 === e.length && isArray(e[0]) && (e = e[0]), fromArray(e, n).lift(new CombineLatestOperator(r))
    }
    var CombineLatestOperator = function() {
            function e(e) {
                this.resultSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new CombineLatestSubscriber(e, this.resultSelector))
            }, e
        }(),
        CombineLatestSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.resultSelector = r, n.active = 0, n.values = [], n.observables = [], n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.values.push(NONE), this.observables.push(e)
            }, t.prototype._complete = function() {
                var e = this.observables,
                    t = e.length;
                if (0 === t) this.destination.complete();
                else {
                    this.active = t, this.toRespond = t;
                    for (var r = 0; r < t; r++) {
                        var n = e[r];
                        this.add(subscribeToResult(this, n, n, r))
                    }
                }
            }, t.prototype.notifyComplete = function(e) {
                0 == (this.active -= 1) && this.destination.complete()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                var o = this.values,
                    s = o[r],
                    u = this.toRespond ? s === NONE ? --this.toRespond : this.toRespond : 0;
                o[r] = t, 0 === u && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
            }, t.prototype._tryResultSelector = function(e) {
                var t;
                try {
                    t = this.resultSelector.apply(this, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(OuterSubscriber);

    function scheduleObservable(e, t) {
        return new Observable(function(r) {
            var n = new Subscription;
            return n.add(t.schedule(function() {
                var i = e[observable]();
                n.add(i.subscribe({
                    next: function(e) {
                        n.add(t.schedule(function() {
                            return r.next(e)
                        }))
                    },
                    error: function(e) {
                        n.add(t.schedule(function() {
                            return r.error(e)
                        }))
                    },
                    complete: function() {
                        n.add(t.schedule(function() {
                            return r.complete()
                        }))
                    }
                }))
            })), n
        })
    }

    function schedulePromise(e, t) {
        return new Observable(function(r) {
            var n = new Subscription;
            return n.add(t.schedule(function() {
                return e.then(function(e) {
                    n.add(t.schedule(function() {
                        r.next(e), n.add(t.schedule(function() {
                            return r.complete()
                        }))
                    }))
                }, function(e) {
                    n.add(t.schedule(function() {
                        return r.error(e)
                    }))
                })
            })), n
        })
    }

    function scheduleIterable(e, t) {
        if (!e) throw new Error("Iterable cannot be null");
        return new Observable(function(r) {
            var n, i = new Subscription;
            return i.add(function() {
                n && "function" == typeof n.return && n.return()
            }), i.add(t.schedule(function() {
                n = e[iterator](), i.add(t.schedule(function() {
                    if (!r.closed) {
                        var e, t;
                        try {
                            var i = n.next();
                            e = i.value, t = i.done
                        } catch (e) {
                            return void r.error(e)
                        }
                        t ? r.complete() : (r.next(e), this.schedule())
                    }
                }))
            })), i
        })
    }

    function isInteropObservable(e) {
        return e && "function" == typeof e[observable]
    }

    function isIterable(e) {
        return e && "function" == typeof e[iterator]
    }

    function scheduled(e, t) {
        if (null != e) {
            if (isInteropObservable(e)) return scheduleObservable(e, t);
            if (isPromise(e)) return schedulePromise(e, t);
            if (isArrayLike(e)) return scheduleArray(e, t);
            if (isIterable(e) || "string" == typeof e) return scheduleIterable(e, t)
        }
        throw new TypeError((null !== e && typeof e || e) + " is not observable")
    }

    function from(e, t) {
        return t ? scheduled(e, t) : e instanceof Observable ? e : new Observable(subscribeTo(e))
    }

    function mergeMap(e, t, r) {
        return void 0 === r && (r = Number.POSITIVE_INFINITY), "function" == typeof t ? function(n) {
            return n.pipe(mergeMap(function(r, n) {
                return from(e(r, n)).pipe(map(function(e, i) {
                    return t(r, e, n, i)
                }))
            }, r))
        } : ("number" == typeof t && (r = t), function(t) {
            return t.lift(new MergeMapOperator(e, r))
        })
    }
    var MergeMapOperator = function() {
            function e(e, t) {
                void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new MergeMapSubscriber(e, this.project, this.concurrent))
            }, e
        }(),
        MergeMapSubscriber = function(e) {
            function t(t, r, n) {
                void 0 === n && (n = Number.POSITIVE_INFINITY);
                var i = e.call(this, t) || this;
                return i.project = r, i.concurrent = n, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
            }, t.prototype._tryNext = function(e) {
                var t, r = this.index++;
                try {
                    t = this.project(e, r)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.active++, this._innerSub(t, e, r)
            }, t.prototype._innerSub = function(e, t, r) {
                var n = new InnerSubscriber(this, t, r),
                    i = this.destination;
                i.add(n);
                var o = subscribeToResult(this, e, void 0, void 0, n);
                o !== n && i.add(o)
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.destination.next(t)
            }, t.prototype.notifyComplete = function(e) {
                var t = this.buffer;
                this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, t
        }(OuterSubscriber),
        flatMap = mergeMap;

    function mergeAll(e) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY), mergeMap(identity, e)
    }

    function concatAll() {
        return mergeAll(1)
    }

    function concat() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return concatAll()( of .apply(void 0, e))
    }

    function defer(e) {
        return new Observable(function(t) {
            var r;
            try {
                r = e()
            } catch (e) {
                return void t.error(e)
            }
            return (r ? from(r) : empty$1()).subscribe(t)
        })
    }

    function forkJoin() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (1 === e.length) {
            var r = e[0];
            if (isArray(r)) return forkJoinInternal(r, null);
            if (isObject(r) && Object.getPrototypeOf(r) === Object.prototype) {
                var n = Object.keys(r);
                return forkJoinInternal(n.map(function(e) {
                    return r[e]
                }), n)
            }
        }
        if ("function" == typeof e[e.length - 1]) {
            var i = e.pop();
            return forkJoinInternal(e = 1 === e.length && isArray(e[0]) ? e[0] : e, null).pipe(map(function(e) {
                return i.apply(void 0, e)
            }))
        }
        return forkJoinInternal(e, null)
    }

    function forkJoinInternal(e, t) {
        return new Observable(function(r) {
            var n = e.length;
            if (0 !== n)
                for (var i = new Array(n), o = 0, s = 0, u = function(u) {
                        var a = from(e[u]),
                            c = !1;
                        r.add(a.subscribe({
                            next: function(e) {
                                c || (c = !0, s++), i[u] = e
                            },
                            error: function(e) {
                                return r.error(e)
                            },
                            complete: function() {
                                ++o !== n && c || (s === n && r.next(t ? t.reduce(function(e, t, r) {
                                    return e[t] = i[r], e
                                }, {}) : i), r.complete())
                            }
                        }))
                    }, a = 0; a < n; a++) u(a);
            else r.complete()
        })
    }

    function fromEvent(e, t, r, n) {
        return isFunction(r) && (n = r, r = void 0), n ? fromEvent(e, t, r).pipe(map(function(e) {
            return isArray(e) ? n.apply(void 0, e) : n(e)
        })) : new Observable(function(n) {
            setupSubscription(e, t, function(e) {
                arguments.length > 1 ? n.next(Array.prototype.slice.call(arguments)) : n.next(e)
            }, n, r)
        })
    }

    function setupSubscription(e, t, r, n, i) {
        var o;
        if (isEventTarget(e)) {
            var s = e;
            e.addEventListener(t, r, i), o = function() {
                return s.removeEventListener(t, r, i)
            }
        } else if (isJQueryStyleEventEmitter(e)) {
            var u = e;
            e.on(t, r), o = function() {
                return u.off(t, r)
            }
        } else if (isNodeStyleEventEmitter(e)) {
            var a = e;
            e.addListener(t, r), o = function() {
                return a.removeListener(t, r)
            }
        } else {
            if (!e || !e.length) throw new TypeError("Invalid event target");
            for (var c = 0, l = e.length; c < l; c++) setupSubscription(e[c], t, r, n, i)
        }
        n.add(o)
    }

    function isNodeStyleEventEmitter(e) {
        return e && "function" == typeof e.addListener && "function" == typeof e.removeListener
    }

    function isJQueryStyleEventEmitter(e) {
        return e && "function" == typeof e.on && "function" == typeof e.off
    }

    function isEventTarget(e) {
        return e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener
    }

    function fromEventPattern(e, t, r) {
        return r ? fromEventPattern(e, t).pipe(map(function(e) {
            return isArray(e) ? r.apply(void 0, e) : r(e)
        })) : new Observable(function(r) {
            var n, i = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r.next(1 === e.length ? e[0] : e)
            };
            try {
                n = e(i)
            } catch (e) {
                return void r.error(e)
            }
            if (isFunction(t)) return function() {
                return t(i, n)
            }
        })
    }

    function generate(e, t, r, n, i) {
        var o, s;
        if (1 == arguments.length) {
            var u = e;
            s = u.initialState, t = u.condition, r = u.iterate, o = u.resultSelector || identity, i = u.scheduler
        } else void 0 === n || isScheduler(n) ? (s = e, o = identity, i = n) : (s = e, o = n);
        return new Observable(function(e) {
            var n = s;
            if (i) return i.schedule(dispatch$3, 0, {
                subscriber: e,
                iterate: r,
                condition: t,
                resultSelector: o,
                state: n
            });
            for (;;) {
                if (t) {
                    var u = void 0;
                    try {
                        u = t(n)
                    } catch (t) {
                        return void e.error(t)
                    }
                    if (!u) {
                        e.complete();
                        break
                    }
                }
                var a = void 0;
                try {
                    a = o(n)
                } catch (t) {
                    return void e.error(t)
                }
                if (e.next(a), e.closed) break;
                try {
                    n = r(n)
                } catch (t) {
                    return void e.error(t)
                }
            }
        })
    }

    function dispatch$3(e) {
        var t = e.subscriber,
            r = e.condition;
        if (!t.closed) {
            if (e.needIterate) try {
                e.state = e.iterate(e.state)
            } catch (e) {
                return void t.error(e)
            } else e.needIterate = !0;
            if (r) {
                var n = void 0;
                try {
                    n = r(e.state)
                } catch (e) {
                    return void t.error(e)
                }
                if (!n) return void t.complete();
                if (t.closed) return
            }
            var i;
            try {
                i = e.resultSelector(e.state)
            } catch (e) {
                return void t.error(e)
            }
            if (!t.closed && (t.next(i), !t.closed)) return this.schedule(e)
        }
    }

    function iif(e, t, r) {
        return void 0 === t && (t = EMPTY), void 0 === r && (r = EMPTY), defer(function() {
            return e() ? t : r
        })
    }

    function isNumeric(e) {
        return !isArray(e) && e - parseFloat(e) + 1 >= 0
    }

    function interval(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = async), (!isNumeric(e) || e < 0) && (e = 0), t && "function" == typeof t.schedule || (t = async), new Observable(function(r) {
            return r.add(t.schedule(dispatch$4, e, {
                subscriber: r,
                counter: 0,
                period: e
            })), r
        })
    }

    function dispatch$4(e) {
        var t = e.subscriber,
            r = e.counter,
            n = e.period;
        t.next(r), this.schedule({
            subscriber: t,
            counter: r + 1,
            period: n
        }, n)
    }

    function merge() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = Number.POSITIVE_INFINITY,
            n = null,
            i = e[e.length - 1];
        return isScheduler(i) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (r = e.pop())) : "number" == typeof i && (r = e.pop()), null === n && 1 === e.length && e[0] instanceof Observable ? e[0] : mergeAll(r)(fromArray(e, n))
    }
    var NEVER = new Observable(noop);

    function never() {
        return NEVER
    }

    function onErrorResumeNext() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (0 === e.length) return EMPTY;
        var r = e[0],
            n = e.slice(1);
        return 1 === e.length && isArray(r) ? onErrorResumeNext.apply(void 0, r) : new Observable(function(e) {
            var t = function() {
                return e.add(onErrorResumeNext.apply(void 0, n).subscribe(e))
            };
            return from(r).subscribe({
                next: function(t) {
                    e.next(t)
                },
                error: t,
                complete: t
            })
        })
    }

    function pairs(e, t) {
        return new Observable(t ? function(r) {
            var n = Object.keys(e),
                i = new Subscription;
            return i.add(t.schedule(dispatch$5, 0, {
                keys: n,
                index: 0,
                subscriber: r,
                subscription: i,
                obj: e
            })), i
        } : function(t) {
            for (var r = Object.keys(e), n = 0; n < r.length && !t.closed; n++) {
                var i = r[n];
                e.hasOwnProperty(i) && t.next([i, e[i]])
            }
            t.complete()
        })
    }

    function dispatch$5(e) {
        var t = e.keys,
            r = e.index,
            n = e.subscriber,
            i = e.subscription,
            o = e.obj;
        if (!n.closed)
            if (r < t.length) {
                var s = t[r];
                n.next([s, o[s]]), i.add(this.schedule({
                    keys: t,
                    index: r + 1,
                    subscriber: n,
                    subscription: i,
                    obj: o
                }))
            } else n.complete()
    }

    function not(e, t) {
        function r() {
            return !r.pred.apply(r.thisArg, arguments)
        }
        return r.pred = e, r.thisArg = t, r
    }

    function filter(e, t) {
        return function(r) {
            return r.lift(new FilterOperator(e, t))
        }
    }
    var FilterOperator = function() {
            function e(e, t) {
                this.predicate = e, this.thisArg = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new FilterSubscriber(e, this.predicate, this.thisArg))
            }, e
        }(),
        FilterSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.predicate = r, i.thisArg = n, i.count = 0, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t;
                try {
                    t = this.predicate.call(this.thisArg, e, this.count++)
                } catch (e) {
                    return void this.destination.error(e)
                }
                t && this.destination.next(e)
            }, t
        }(Subscriber);

    function partition(e, t, r) {
        return [filter(t, r)(new Observable(subscribeTo(e))), filter(not(t, r))(new Observable(subscribeTo(e)))]
    }

    function race() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (1 === e.length) {
            if (!isArray(e[0])) return e[0];
            e = e[0]
        }
        return fromArray(e, void 0).lift(new RaceOperator)
    }
    var RaceOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new RaceSubscriber(e))
            }, e
        }(),
        RaceSubscriber = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.hasFirst = !1, r.observables = [], r.subscriptions = [], r
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.observables.push(e)
            }, t.prototype._complete = function() {
                var e = this.observables,
                    t = e.length;
                if (0 === t) this.destination.complete();
                else {
                    for (var r = 0; r < t && !this.hasFirst; r++) {
                        var n = e[r],
                            i = subscribeToResult(this, n, n, r);
                        this.subscriptions && this.subscriptions.push(i), this.add(i)
                    }
                    this.observables = null
                }
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                if (!this.hasFirst) {
                    this.hasFirst = !0;
                    for (var o = 0; o < this.subscriptions.length; o++)
                        if (o !== r) {
                            var s = this.subscriptions[o];
                            s.unsubscribe(), this.remove(s)
                        } this.subscriptions = null
                }
                this.destination.next(t)
            }, t
        }(OuterSubscriber);

    function range(e, t, r) {
        return void 0 === e && (e = 0), new Observable(function(n) {
            void 0 === t && (t = e, e = 0);
            var i = 0,
                o = e;
            if (r) return r.schedule(dispatch$6, 0, {
                index: i,
                count: t,
                start: e,
                subscriber: n
            });
            for (;;) {
                if (i++ >= t) {
                    n.complete();
                    break
                }
                if (n.next(o++), n.closed) break
            }
        })
    }

    function dispatch$6(e) {
        var t = e.start,
            r = e.index,
            n = e.count,
            i = e.subscriber;
        r >= n ? i.complete() : (i.next(t), i.closed || (e.index = r + 1, e.start = t + 1, this.schedule(e)))
    }

    function timer(e, t, r) {
        void 0 === e && (e = 0);
        var n = -1;
        return isNumeric(t) ? n = Number(t) < 1 ? 1 : Number(t) : isScheduler(t) && (r = t), isScheduler(r) || (r = async), new Observable(function(t) {
            var i = isNumeric(e) ? e : +e - r.now();
            return r.schedule(dispatch$7, i, {
                index: 0,
                period: n,
                subscriber: t
            })
        })
    }

    function dispatch$7(e) {
        var t = e.index,
            r = e.period,
            n = e.subscriber;
        if (n.next(t), !n.closed) {
            if (-1 === r) return n.complete();
            e.index = t + 1, this.schedule(e, r)
        }
    }

    function using(e, t) {
        return new Observable(function(r) {
            var n, i;
            try {
                n = e()
            } catch (e) {
                return void r.error(e)
            }
            try {
                i = t(n)
            } catch (e) {
                return void r.error(e)
            }
            var o = (i ? from(i) : EMPTY).subscribe(r);
            return function() {
                o.unsubscribe(), n && n.unsubscribe()
            }
        })
    }

    function zip() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = e[e.length - 1];
        return "function" == typeof r && e.pop(), fromArray(e, void 0).lift(new ZipOperator(r))
    }
    var ZipOperator = function() {
            function e(e) {
                this.resultSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ZipSubscriber(e, this.resultSelector))
            }, e
        }(),
        ZipSubscriber = function(e) {
            function t(t, r, n) {
                void 0 === n && (n = Object.create(null));
                var i = e.call(this, t) || this;
                return i.iterators = [], i.active = 0, i.resultSelector = "function" == typeof r ? r : null, i.values = n, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.iterators;
                isArray(e) ? t.push(new StaticArrayIterator(e)) : "function" == typeof e[iterator] ? t.push(new StaticIterator(e[iterator]())) : t.push(new ZipBufferIterator(this.destination, this, e))
            }, t.prototype._complete = function() {
                var e = this.iterators,
                    t = e.length;
                if (this.unsubscribe(), 0 !== t) {
                    this.active = t;
                    for (var r = 0; r < t; r++) {
                        var n = e[r];
                        if (n.stillUnsubscribed) this.destination.add(n.subscribe(n, r));
                        else this.active--
                    }
                } else this.destination.complete()
            }, t.prototype.notifyInactive = function() {
                this.active--, 0 === this.active && this.destination.complete()
            }, t.prototype.checkIterators = function() {
                for (var e = this.iterators, t = e.length, r = this.destination, n = 0; n < t; n++) {
                    if ("function" == typeof(s = e[n]).hasValue && !s.hasValue()) return
                }
                var i = !1,
                    o = [];
                for (n = 0; n < t; n++) {
                    var s, u = (s = e[n]).next();
                    if (s.hasCompleted() && (i = !0), u.done) return void r.complete();
                    o.push(u.value)
                }
                this.resultSelector ? this._tryresultSelector(o) : r.next(o), i && r.complete()
            }, t.prototype._tryresultSelector = function(e) {
                var t;
                try {
                    t = this.resultSelector.apply(this, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(Subscriber),
        StaticIterator = function() {
            function e(e) {
                this.iterator = e, this.nextResult = e.next()
            }
            return e.prototype.hasValue = function() {
                return !0
            }, e.prototype.next = function() {
                var e = this.nextResult;
                return this.nextResult = this.iterator.next(), e
            }, e.prototype.hasCompleted = function() {
                var e = this.nextResult;
                return e && e.done
            }, e
        }(),
        StaticArrayIterator = function() {
            function e(e) {
                this.array = e, this.index = 0, this.length = 0, this.length = e.length
            }
            return e.prototype[iterator] = function() {
                return this
            }, e.prototype.next = function(e) {
                var t = this.index++,
                    r = this.array;
                return t < this.length ? {
                    value: r[t],
                    done: !1
                } : {
                    value: null,
                    done: !0
                }
            }, e.prototype.hasValue = function() {
                return this.array.length > this.index
            }, e.prototype.hasCompleted = function() {
                return this.array.length === this.index
            }, e
        }(),
        ZipBufferIterator = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.parent = r, i.observable = n, i.stillUnsubscribed = !0, i.buffer = [], i.isComplete = !1, i
            }
            return __extends$1(t, e), t.prototype[iterator] = function() {
                return this
            }, t.prototype.next = function() {
                var e = this.buffer;
                return 0 === e.length && this.isComplete ? {
                    value: null,
                    done: !0
                } : {
                    value: e.shift(),
                    done: !1
                }
            }, t.prototype.hasValue = function() {
                return this.buffer.length > 0
            }, t.prototype.hasCompleted = function() {
                return 0 === this.buffer.length && this.isComplete
            }, t.prototype.notifyComplete = function() {
                this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.buffer.push(t), this.parent.checkIterators()
            }, t.prototype.subscribe = function(e, t) {
                return subscribeToResult(this, this.observable, this, t)
            }, t
        }(OuterSubscriber),
        _esm5 = Object.freeze({
            Observable: Observable,
            ConnectableObservable: ConnectableObservable,
            GroupedObservable: GroupedObservable,
            observable: observable,
            Subject: Subject,
            BehaviorSubject: BehaviorSubject,
            ReplaySubject: ReplaySubject,
            AsyncSubject: AsyncSubject,
            asap: asap,
            asapScheduler: asapScheduler,
            async: async,
            asyncScheduler: asyncScheduler,
            queue: queue,
            queueScheduler: queueScheduler,
            animationFrame: animationFrame,
            animationFrameScheduler: animationFrameScheduler,
            VirtualTimeScheduler: VirtualTimeScheduler,
            VirtualAction: VirtualAction,
            Scheduler: Scheduler,
            Subscription: Subscription,
            Subscriber: Subscriber,
            Notification: Notification,
            get NotificationKind() {
                return NotificationKind
            },
            pipe: pipe,
            noop: noop,
            identity: identity,
            isObservable: isObservable,
            ArgumentOutOfRangeError: ArgumentOutOfRangeError,
            EmptyError: EmptyError,
            ObjectUnsubscribedError: ObjectUnsubscribedError,
            UnsubscriptionError: UnsubscriptionError,
            TimeoutError: TimeoutError,
            bindCallback: bindCallback,
            bindNodeCallback: bindNodeCallback,
            combineLatest: combineLatest,
            concat: concat,
            defer: defer,
            empty: empty$1,
            forkJoin: forkJoin,
            from: from,
            fromEvent: fromEvent,
            fromEventPattern: fromEventPattern,
            generate: generate,
            iif: iif,
            interval: interval,
            merge: merge,
            never: never,
            of: of ,
            onErrorResumeNext: onErrorResumeNext,
            pairs: pairs,
            partition: partition,
            race: race,
            range: range,
            throwError: throwError,
            timer: timer,
            using: using,
            zip: zip,
            scheduled: scheduled,
            EMPTY: EMPTY,
            NEVER: NEVER,
            config: config
        });

    function audit(e) {
        return function(t) {
            return t.lift(new AuditOperator(e))
        }
    }
    var AuditOperator = function() {
            function e(e) {
                this.durationSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new AuditSubscriber(e, this.durationSelector))
            }, e
        }(),
        AuditSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.durationSelector = r, n.hasValue = !1, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                if (this.value = e, this.hasValue = !0, !this.throttled) {
                    var t = void 0;
                    try {
                        t = (0, this.durationSelector)(e)
                    } catch (e) {
                        return this.destination.error(e)
                    }
                    var r = subscribeToResult(this, t);
                    !r || r.closed ? this.clearThrottle() : this.add(this.throttled = r)
                }
            }, t.prototype.clearThrottle = function() {
                var e = this.value,
                    t = this.hasValue,
                    r = this.throttled;
                r && (this.remove(r), this.throttled = null, r.unsubscribe()), t && (this.value = null, this.hasValue = !1, this.destination.next(e))
            }, t.prototype.notifyNext = function(e, t, r, n) {
                this.clearThrottle()
            }, t.prototype.notifyComplete = function() {
                this.clearThrottle()
            }, t
        }(OuterSubscriber);

    function auditTime(e, t) {
        return void 0 === t && (t = async), audit(function() {
            return timer(e, t)
        })
    }

    function buffer(e) {
        return function(t) {
            return t.lift(new BufferOperator(e))
        }
    }
    var BufferOperator = function() {
            function e(e) {
                this.closingNotifier = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new BufferSubscriber(e, this.closingNotifier))
            }, e
        }(),
        BufferSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.buffer = [], n.add(subscribeToResult(n, r)), n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.buffer.push(e)
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                var o = this.buffer;
                this.buffer = [], this.destination.next(o)
            }, t
        }(OuterSubscriber);

    function bufferCount(e, t) {
        return void 0 === t && (t = null),
            function(r) {
                return r.lift(new BufferCountOperator(e, t))
            }
    }
    var BufferCountOperator = function() {
            function e(e, t) {
                this.bufferSize = e, this.startBufferEvery = t, this.subscriberClass = t && e !== t ? BufferSkipCountSubscriber : BufferCountSubscriber
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery))
            }, e
        }(),
        BufferCountSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.bufferSize = r, n.buffer = [], n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.buffer;
                t.push(e), t.length == this.bufferSize && (this.destination.next(t), this.buffer = [])
            }, t.prototype._complete = function() {
                var t = this.buffer;
                t.length > 0 && this.destination.next(t), e.prototype._complete.call(this)
            }, t
        }(Subscriber),
        BufferSkipCountSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.bufferSize = r, i.startBufferEvery = n, i.buffers = [], i.count = 0, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.bufferSize,
                    r = this.startBufferEvery,
                    n = this.buffers,
                    i = this.count;
                this.count++, i % r == 0 && n.push([]);
                for (var o = n.length; o--;) {
                    var s = n[o];
                    s.push(e), s.length === t && (n.splice(o, 1), this.destination.next(s))
                }
            }, t.prototype._complete = function() {
                for (var t = this.buffers, r = this.destination; t.length > 0;) {
                    var n = t.shift();
                    n.length > 0 && r.next(n)
                }
                e.prototype._complete.call(this)
            }, t
        }(Subscriber);

    function bufferTime(e) {
        var t = arguments.length,
            r = async;
        isScheduler(arguments[arguments.length - 1]) && (r = arguments[arguments.length - 1], t--);
        var n = null;
        t >= 2 && (n = arguments[1]);
        var i = Number.POSITIVE_INFINITY;
        return t >= 3 && (i = arguments[2]),
            function(t) {
                return t.lift(new BufferTimeOperator(e, n, i, r))
            }
    }
    var BufferTimeOperator = function() {
            function e(e, t, r, n) {
                this.bufferTimeSpan = e, this.bufferCreationInterval = t, this.maxBufferSize = r, this.scheduler = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new BufferTimeSubscriber(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
            }, e
        }(),
        Context = function() {
            return function() {
                this.buffer = []
            }
        }(),
        BufferTimeSubscriber = function(e) {
            function t(t, r, n, i, o) {
                var s = e.call(this, t) || this;
                s.bufferTimeSpan = r, s.bufferCreationInterval = n, s.maxBufferSize = i, s.scheduler = o, s.contexts = [];
                var u = s.openContext();
                if (s.timespanOnly = null == n || n < 0, s.timespanOnly) {
                    var a = {
                        subscriber: s,
                        context: u,
                        bufferTimeSpan: r
                    };
                    s.add(u.closeAction = o.schedule(dispatchBufferTimeSpanOnly, r, a))
                } else {
                    var c = {
                            subscriber: s,
                            context: u
                        },
                        l = {
                            bufferTimeSpan: r,
                            bufferCreationInterval: n,
                            subscriber: s,
                            scheduler: o
                        };
                    s.add(u.closeAction = o.schedule(dispatchBufferClose, r, c)), s.add(o.schedule(dispatchBufferCreation, n, l))
                }
                return s
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                for (var t, r = this.contexts, n = r.length, i = 0; i < n; i++) {
                    var o = r[i],
                        s = o.buffer;
                    s.push(e), s.length == this.maxBufferSize && (t = o)
                }
                t && this.onBufferFull(t)
            }, t.prototype._error = function(t) {
                this.contexts.length = 0, e.prototype._error.call(this, t)
            }, t.prototype._complete = function() {
                for (var t = this.contexts, r = this.destination; t.length > 0;) {
                    var n = t.shift();
                    r.next(n.buffer)
                }
                e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function() {
                this.contexts = null
            }, t.prototype.onBufferFull = function(e) {
                this.closeContext(e);
                var t = e.closeAction;
                if (t.unsubscribe(), this.remove(t), !this.closed && this.timespanOnly) {
                    e = this.openContext();
                    var r = this.bufferTimeSpan,
                        n = {
                            subscriber: this,
                            context: e,
                            bufferTimeSpan: r
                        };
                    this.add(e.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, r, n))
                }
            }, t.prototype.openContext = function() {
                var e = new Context;
                return this.contexts.push(e), e
            }, t.prototype.closeContext = function(e) {
                this.destination.next(e.buffer);
                var t = this.contexts;
                (t ? t.indexOf(e) : -1) >= 0 && t.splice(t.indexOf(e), 1)
            }, t
        }(Subscriber);

    function dispatchBufferTimeSpanOnly(e) {
        var t = e.subscriber,
            r = e.context;
        r && t.closeContext(r), t.closed || (e.context = t.openContext(), e.context.closeAction = this.schedule(e, e.bufferTimeSpan))
    }

    function dispatchBufferCreation(e) {
        var t = e.bufferCreationInterval,
            r = e.bufferTimeSpan,
            n = e.subscriber,
            i = e.scheduler,
            o = n.openContext();
        n.closed || (n.add(o.closeAction = i.schedule(dispatchBufferClose, r, {
            subscriber: n,
            context: o
        })), this.schedule(e, t))
    }

    function dispatchBufferClose(e) {
        var t = e.subscriber,
            r = e.context;
        t.closeContext(r)
    }

    function bufferToggle(e, t) {
        return function(r) {
            return r.lift(new BufferToggleOperator(e, t))
        }
    }
    var BufferToggleOperator = function() {
            function e(e, t) {
                this.openings = e, this.closingSelector = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new BufferToggleSubscriber(e, this.openings, this.closingSelector))
            }, e
        }(),
        BufferToggleSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.openings = r, i.closingSelector = n, i.contexts = [], i.add(subscribeToResult(i, r)), i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                for (var t = this.contexts, r = t.length, n = 0; n < r; n++) t[n].buffer.push(e)
            }, t.prototype._error = function(t) {
                for (var r = this.contexts; r.length > 0;) {
                    var n = r.shift();
                    n.subscription.unsubscribe(), n.buffer = null, n.subscription = null
                }
                this.contexts = null, e.prototype._error.call(this, t)
            }, t.prototype._complete = function() {
                for (var t = this.contexts; t.length > 0;) {
                    var r = t.shift();
                    this.destination.next(r.buffer), r.subscription.unsubscribe(), r.buffer = null, r.subscription = null
                }
                this.contexts = null, e.prototype._complete.call(this)
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                e ? this.closeBuffer(e) : this.openBuffer(t)
            }, t.prototype.notifyComplete = function(e) {
                this.closeBuffer(e.context)
            }, t.prototype.openBuffer = function(e) {
                try {
                    var t = this.closingSelector.call(this, e);
                    t && this.trySubscribe(t)
                } catch (e) {
                    this._error(e)
                }
            }, t.prototype.closeBuffer = function(e) {
                var t = this.contexts;
                if (t && e) {
                    var r = e.buffer,
                        n = e.subscription;
                    this.destination.next(r), t.splice(t.indexOf(e), 1), this.remove(n), n.unsubscribe()
                }
            }, t.prototype.trySubscribe = function(e) {
                var t = this.contexts,
                    r = new Subscription,
                    n = {
                        buffer: [],
                        subscription: r
                    };
                t.push(n);
                var i = subscribeToResult(this, e, n);
                !i || i.closed ? this.closeBuffer(n) : (i.context = n, this.add(i), r.add(i))
            }, t
        }(OuterSubscriber);

    function bufferWhen(e) {
        return function(t) {
            return t.lift(new BufferWhenOperator(e))
        }
    }
    var BufferWhenOperator = function() {
            function e(e) {
                this.closingSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new BufferWhenSubscriber(e, this.closingSelector))
            }, e
        }(),
        BufferWhenSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.closingSelector = r, n.subscribing = !1, n.openBuffer(), n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.buffer.push(e)
            }, t.prototype._complete = function() {
                var t = this.buffer;
                t && this.destination.next(t), e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function() {
                this.buffer = null, this.subscribing = !1
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.openBuffer()
            }, t.prototype.notifyComplete = function() {
                this.subscribing ? this.complete() : this.openBuffer()
            }, t.prototype.openBuffer = function() {
                var e = this.closingSubscription;
                e && (this.remove(e), e.unsubscribe());
                var t, r = this.buffer;
                this.buffer && this.destination.next(r), this.buffer = [];
                try {
                    t = (0, this.closingSelector)()
                } catch (e) {
                    return this.error(e)
                }
                e = new Subscription, this.closingSubscription = e, this.add(e), this.subscribing = !0, e.add(subscribeToResult(this, t)), this.subscribing = !1
            }, t
        }(OuterSubscriber);

    function catchError(e) {
        return function(t) {
            var r = new CatchOperator(e),
                n = t.lift(r);
            return r.caught = n
        }
    }
    var CatchOperator = function() {
            function e(e) {
                this.selector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new CatchSubscriber(e, this.selector, this.caught))
            }, e
        }(),
        CatchSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.selector = r, i.caught = n, i
            }
            return __extends$1(t, e), t.prototype.error = function(t) {
                if (!this.isStopped) {
                    var r = void 0;
                    try {
                        r = this.selector(t, this.caught)
                    } catch (t) {
                        return void e.prototype.error.call(this, t)
                    }
                    this._unsubscribeAndRecycle();
                    var n = new InnerSubscriber(this, void 0, void 0);
                    this.add(n);
                    var i = subscribeToResult(this, r, void 0, void 0, n);
                    i !== n && this.add(i)
                }
            }, t
        }(OuterSubscriber);

    function combineAll(e) {
        return function(t) {
            return t.lift(new CombineLatestOperator(e))
        }
    }

    function combineLatest$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = null;
        return "function" == typeof e[e.length - 1] && (r = e.pop()), 1 === e.length && isArray(e[0]) && (e = e[0].slice()),
            function(t) {
                return t.lift.call(from([t].concat(e)), new CombineLatestOperator(r))
            }
    }

    function concat$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            return t.lift.call(concat.apply(void 0, [t].concat(e)))
        }
    }

    function concatMap(e, t) {
        return mergeMap(e, t, 1)
    }

    function concatMapTo(e, t) {
        return concatMap(function() {
            return e
        }, t)
    }

    function count(e) {
        return function(t) {
            return t.lift(new CountOperator(e, t))
        }
    }
    var CountOperator = function() {
            function e(e, t) {
                this.predicate = e, this.source = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new CountSubscriber(e, this.predicate, this.source))
            }, e
        }(),
        CountSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.predicate = r, i.source = n, i.count = 0, i.index = 0, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.predicate ? this._tryPredicate(e) : this.count++
            }, t.prototype._tryPredicate = function(e) {
                var t;
                try {
                    t = this.predicate(e, this.index++, this.source)
                } catch (e) {
                    return void this.destination.error(e)
                }
                t && this.count++
            }, t.prototype._complete = function() {
                this.destination.next(this.count), this.destination.complete()
            }, t
        }(Subscriber);

    function debounce(e) {
        return function(t) {
            return t.lift(new DebounceOperator(e))
        }
    }
    var DebounceOperator = function() {
            function e(e) {
                this.durationSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DebounceSubscriber(e, this.durationSelector))
            }, e
        }(),
        DebounceSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.durationSelector = r, n.hasValue = !1, n.durationSubscription = null, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                try {
                    var t = this.durationSelector.call(this, e);
                    t && this._tryNext(e, t)
                } catch (e) {
                    this.destination.error(e)
                }
            }, t.prototype._complete = function() {
                this.emitValue(), this.destination.complete()
            }, t.prototype._tryNext = function(e, t) {
                var r = this.durationSubscription;
                this.value = e, this.hasValue = !0, r && (r.unsubscribe(), this.remove(r)), (r = subscribeToResult(this, t)) && !r.closed && this.add(this.durationSubscription = r)
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.emitValue()
            }, t.prototype.notifyComplete = function() {
                this.emitValue()
            }, t.prototype.emitValue = function() {
                if (this.hasValue) {
                    var t = this.value,
                        r = this.durationSubscription;
                    r && (this.durationSubscription = null, r.unsubscribe(), this.remove(r)), this.value = null, this.hasValue = !1, e.prototype._next.call(this, t)
                }
            }, t
        }(OuterSubscriber);

    function debounceTime(e, t) {
        return void 0 === t && (t = async),
            function(r) {
                return r.lift(new DebounceTimeOperator(e, t))
            }
    }
    var DebounceTimeOperator = function() {
            function e(e, t) {
                this.dueTime = e, this.scheduler = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DebounceTimeSubscriber(e, this.dueTime, this.scheduler))
            }, e
        }(),
        DebounceTimeSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.dueTime = r, i.scheduler = n, i.debouncedSubscription = null, i.lastValue = null, i.hasValue = !1, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.clearDebounce(), this.lastValue = e, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext$2, this.dueTime, this))
            }, t.prototype._complete = function() {
                this.debouncedNext(), this.destination.complete()
            }, t.prototype.debouncedNext = function() {
                if (this.clearDebounce(), this.hasValue) {
                    var e = this.lastValue;
                    this.lastValue = null, this.hasValue = !1, this.destination.next(e)
                }
            }, t.prototype.clearDebounce = function() {
                var e = this.debouncedSubscription;
                null !== e && (this.remove(e), e.unsubscribe(), this.debouncedSubscription = null)
            }, t
        }(Subscriber);

    function dispatchNext$2(e) {
        e.debouncedNext()
    }

    function defaultIfEmpty(e) {
        return void 0 === e && (e = null),
            function(t) {
                return t.lift(new DefaultIfEmptyOperator(e))
            }
    }
    var DefaultIfEmptyOperator = function() {
            function e(e) {
                this.defaultValue = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DefaultIfEmptySubscriber(e, this.defaultValue))
            }, e
        }(),
        DefaultIfEmptySubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.defaultValue = r, n.isEmpty = !0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.isEmpty = !1, this.destination.next(e)
            }, t.prototype._complete = function() {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, t
        }(Subscriber);

    function isDate(e) {
        return e instanceof Date && !isNaN(+e)
    }

    function delay(e, t) {
        void 0 === t && (t = async);
        var r = isDate(e) ? +e - t.now() : Math.abs(e);
        return function(e) {
            return e.lift(new DelayOperator(r, t))
        }
    }
    var DelayOperator = function() {
            function e(e, t) {
                this.delay = e, this.scheduler = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DelaySubscriber(e, this.delay, this.scheduler))
            }, e
        }(),
        DelaySubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.delay = r, i.scheduler = n, i.queue = [], i.active = !1, i.errored = !1, i
            }
            return __extends$1(t, e), t.dispatch = function(e) {
                for (var t = e.source, r = t.queue, n = e.scheduler, i = e.destination; r.length > 0 && r[0].time - n.now() <= 0;) r.shift().notification.observe(i);
                if (r.length > 0) {
                    var o = Math.max(0, r[0].time - n.now());
                    this.schedule(e, o)
                } else this.unsubscribe(), t.active = !1
            }, t.prototype._schedule = function(e) {
                this.active = !0, this.destination.add(e.schedule(t.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: e
                }))
            }, t.prototype.scheduleNotification = function(e) {
                if (!0 !== this.errored) {
                    var t = this.scheduler,
                        r = new DelayMessage(t.now() + this.delay, e);
                    this.queue.push(r), !1 === this.active && this._schedule(t)
                }
            }, t.prototype._next = function(e) {
                this.scheduleNotification(Notification.createNext(e))
            }, t.prototype._error = function(e) {
                this.errored = !0, this.queue = [], this.destination.error(e), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.scheduleNotification(Notification.createComplete()), this.unsubscribe()
            }, t
        }(Subscriber),
        DelayMessage = function() {
            return function(e, t) {
                this.time = e, this.notification = t
            }
        }();

    function delayWhen(e, t) {
        return t ? function(r) {
            return new SubscriptionDelayObservable(r, t).lift(new DelayWhenOperator(e))
        } : function(t) {
            return t.lift(new DelayWhenOperator(e))
        }
    }
    var DelayWhenOperator = function() {
            function e(e) {
                this.delayDurationSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DelayWhenSubscriber(e, this.delayDurationSelector))
            }, e
        }(),
        DelayWhenSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.delayDurationSelector = r, n.completed = !1, n.delayNotifierSubscriptions = [], n.index = 0, n
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.destination.next(e), this.removeSubscription(i), this.tryComplete()
            }, t.prototype.notifyError = function(e, t) {
                this._error(e)
            }, t.prototype.notifyComplete = function(e) {
                var t = this.removeSubscription(e);
                t && this.destination.next(t), this.tryComplete()
            }, t.prototype._next = function(e) {
                var t = this.index++;
                try {
                    var r = this.delayDurationSelector(e, t);
                    r && this.tryDelay(r, e)
                } catch (e) {
                    this.destination.error(e)
                }
            }, t.prototype._complete = function() {
                this.completed = !0, this.tryComplete(), this.unsubscribe()
            }, t.prototype.removeSubscription = function(e) {
                e.unsubscribe();
                var t = this.delayNotifierSubscriptions.indexOf(e);
                return -1 !== t && this.delayNotifierSubscriptions.splice(t, 1), e.outerValue
            }, t.prototype.tryDelay = function(e, t) {
                var r = subscribeToResult(this, e, t);
                r && !r.closed && (this.destination.add(r), this.delayNotifierSubscriptions.push(r))
            }, t.prototype.tryComplete = function() {
                this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
            }, t
        }(OuterSubscriber),
        SubscriptionDelayObservable = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.source = t, n.subscriptionDelay = r, n
            }
            return __extends$1(t, e), t.prototype._subscribe = function(e) {
                this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(e, this.source))
            }, t
        }(Observable),
        SubscriptionDelaySubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.parent = t, n.source = r, n.sourceSubscribed = !1, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.subscribeToSource()
            }, t.prototype._error = function(e) {
                this.unsubscribe(), this.parent.error(e)
            }, t.prototype._complete = function() {
                this.unsubscribe(), this.subscribeToSource()
            }, t.prototype.subscribeToSource = function() {
                this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent))
            }, t
        }(Subscriber);

    function dematerialize() {
        return function(e) {
            return e.lift(new DeMaterializeOperator)
        }
    }
    var DeMaterializeOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DeMaterializeSubscriber(e))
            }, e
        }(),
        DeMaterializeSubscriber = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                e.observe(this.destination)
            }, t
        }(Subscriber);

    function distinct(e, t) {
        return function(r) {
            return r.lift(new DistinctOperator(e, t))
        }
    }
    var DistinctOperator = function() {
            function e(e, t) {
                this.keySelector = e, this.flushes = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DistinctSubscriber(e, this.keySelector, this.flushes))
            }, e
        }(),
        DistinctSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.keySelector = r, i.values = new Set, n && i.add(subscribeToResult(i, n)), i
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.values.clear()
            }, t.prototype.notifyError = function(e, t) {
                this._error(e)
            }, t.prototype._next = function(e) {
                this.keySelector ? this._useKeySelector(e) : this._finalizeNext(e, e)
            }, t.prototype._useKeySelector = function(e) {
                var t, r = this.destination;
                try {
                    t = this.keySelector(e)
                } catch (e) {
                    return void r.error(e)
                }
                this._finalizeNext(t, e)
            }, t.prototype._finalizeNext = function(e, t) {
                var r = this.values;
                r.has(e) || (r.add(e), this.destination.next(t))
            }, t
        }(OuterSubscriber);

    function distinctUntilChanged(e, t) {
        return function(r) {
            return r.lift(new DistinctUntilChangedOperator(e, t))
        }
    }
    var DistinctUntilChangedOperator = function() {
            function e(e, t) {
                this.compare = e, this.keySelector = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new DistinctUntilChangedSubscriber(e, this.compare, this.keySelector))
            }, e
        }(),
        DistinctUntilChangedSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.keySelector = n, i.hasKey = !1, "function" == typeof r && (i.compare = r), i
            }
            return __extends$1(t, e), t.prototype.compare = function(e, t) {
                return e === t
            }, t.prototype._next = function(e) {
                var t;
                try {
                    var r = this.keySelector;
                    t = r ? r(e) : e
                } catch (e) {
                    return this.destination.error(e)
                }
                var n = !1;
                if (this.hasKey) try {
                    n = (0, this.compare)(this.key, t)
                } catch (e) {
                    return this.destination.error(e)
                } else this.hasKey = !0;
                n || (this.key = t, this.destination.next(e))
            }, t
        }(Subscriber);

    function distinctUntilKeyChanged(e, t) {
        return distinctUntilChanged(function(r, n) {
            return t ? t(r[e], n[e]) : r[e] === n[e]
        })
    }

    function throwIfEmpty(e) {
        return void 0 === e && (e = defaultErrorFactory),
            function(t) {
                return t.lift(new ThrowIfEmptyOperator(e))
            }
    }
    var ThrowIfEmptyOperator = function() {
            function e(e) {
                this.errorFactory = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ThrowIfEmptySubscriber(e, this.errorFactory))
            }, e
        }(),
        ThrowIfEmptySubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.errorFactory = r, n.hasValue = !1, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.hasValue = !0, this.destination.next(e)
            }, t.prototype._complete = function() {
                if (this.hasValue) return this.destination.complete();
                var e = void 0;
                try {
                    e = this.errorFactory()
                } catch (t) {
                    e = t
                }
                this.destination.error(e)
            }, t
        }(Subscriber);

    function defaultErrorFactory() {
        return new EmptyError
    }

    function take(e) {
        return function(t) {
            return 0 === e ? empty$1() : t.lift(new TakeOperator(e))
        }
    }
    var TakeOperator = function() {
            function e(e) {
                if (this.total = e, this.total < 0) throw new ArgumentOutOfRangeError
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new TakeSubscriber(e, this.total))
            }, e
        }(),
        TakeSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.total = r, n.count = 0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.total,
                    r = ++this.count;
                r <= t && (this.destination.next(e), r === t && (this.destination.complete(), this.unsubscribe()))
            }, t
        }(Subscriber);

    function elementAt(e, t) {
        if (e < 0) throw new ArgumentOutOfRangeError;
        var r = arguments.length >= 2;
        return function(n) {
            return n.pipe(filter(function(t, r) {
                return r === e
            }), take(1), r ? defaultIfEmpty(t) : throwIfEmpty(function() {
                return new ArgumentOutOfRangeError
            }))
        }
    }

    function endWith() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            return concat(t, of .apply(void 0, e))
        }
    }

    function every(e, t) {
        return function(r) {
            return r.lift(new EveryOperator(e, t, r))
        }
    }
    var EveryOperator = function() {
            function e(e, t, r) {
                this.predicate = e, this.thisArg = t, this.source = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new EverySubscriber(e, this.predicate, this.thisArg, this.source))
            }, e
        }(),
        EverySubscriber = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, t) || this;
                return o.predicate = r, o.thisArg = n, o.source = i, o.index = 0, o.thisArg = n || o, o
            }
            return __extends$1(t, e), t.prototype.notifyComplete = function(e) {
                this.destination.next(e), this.destination.complete()
            }, t.prototype._next = function(e) {
                var t = !1;
                try {
                    t = this.predicate.call(this.thisArg, e, this.index++, this.source)
                } catch (e) {
                    return void this.destination.error(e)
                }
                t || this.notifyComplete(!1)
            }, t.prototype._complete = function() {
                this.notifyComplete(!0)
            }, t
        }(Subscriber);

    function exhaust() {
        return function(e) {
            return e.lift(new SwitchFirstOperator)
        }
    }
    var SwitchFirstOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SwitchFirstSubscriber(e))
            }, e
        }(),
        SwitchFirstSubscriber = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.hasCompleted = !1, r.hasSubscription = !1, r
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.hasSubscription || (this.hasSubscription = !0, this.add(subscribeToResult(this, e)))
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
            }, t.prototype.notifyComplete = function(e) {
                this.remove(e), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
            }, t
        }(OuterSubscriber);

    function exhaustMap(e, t) {
        return t ? function(r) {
            return r.pipe(exhaustMap(function(r, n) {
                return from(e(r, n)).pipe(map(function(e, i) {
                    return t(r, e, n, i)
                }))
            }))
        } : function(t) {
            return t.lift(new ExhaustMapOperator(e))
        }
    }
    var ExhaustMapOperator = function() {
            function e(e) {
                this.project = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ExhaustMapSubscriber(e, this.project))
            }, e
        }(),
        ExhaustMapSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.project = r, n.hasSubscription = !1, n.hasCompleted = !1, n.index = 0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.hasSubscription || this.tryNext(e)
            }, t.prototype.tryNext = function(e) {
                var t, r = this.index++;
                try {
                    t = this.project(e, r)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.hasSubscription = !0, this._innerSub(t, e, r)
            }, t.prototype._innerSub = function(e, t, r) {
                var n = new InnerSubscriber(this, t, r),
                    i = this.destination;
                i.add(n);
                var o = subscribeToResult(this, e, void 0, void 0, n);
                o !== n && i.add(o)
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.destination.next(t)
            }, t.prototype.notifyError = function(e) {
                this.destination.error(e)
            }, t.prototype.notifyComplete = function(e) {
                this.destination.remove(e), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
            }, t
        }(OuterSubscriber);

    function expand(e, t, r) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), void 0 === r && (r = void 0), t = (t || 0) < 1 ? Number.POSITIVE_INFINITY : t,
            function(n) {
                return n.lift(new ExpandOperator(e, t, r))
            }
    }
    var ExpandOperator = function() {
            function e(e, t, r) {
                this.project = e, this.concurrent = t, this.scheduler = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ExpandSubscriber(e, this.project, this.concurrent, this.scheduler))
            }, e
        }(),
        ExpandSubscriber = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, t) || this;
                return o.project = r, o.concurrent = n, o.scheduler = i, o.index = 0, o.active = 0, o.hasCompleted = !1, n < Number.POSITIVE_INFINITY && (o.buffer = []), o
            }
            return __extends$1(t, e), t.dispatch = function(e) {
                var t = e.subscriber,
                    r = e.result,
                    n = e.value,
                    i = e.index;
                t.subscribeToProjection(r, n, i)
            }, t.prototype._next = function(e) {
                var r = this.destination;
                if (r.closed) this._complete();
                else {
                    var n = this.index++;
                    if (this.active < this.concurrent) {
                        r.next(e);
                        try {
                            var i = (0, this.project)(e, n);
                            if (this.scheduler) {
                                var o = {
                                    subscriber: this,
                                    result: i,
                                    value: e,
                                    index: n
                                };
                                this.destination.add(this.scheduler.schedule(t.dispatch, 0, o))
                            } else this.subscribeToProjection(i, e, n)
                        } catch (e) {
                            r.error(e)
                        }
                    } else this.buffer.push(e)
                }
            }, t.prototype.subscribeToProjection = function(e, t, r) {
                this.active++, this.destination.add(subscribeToResult(this, e, t, r))
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, this.hasCompleted && 0 === this.active && this.destination.complete(), this.unsubscribe()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this._next(t)
            }, t.prototype.notifyComplete = function(e) {
                var t = this.buffer;
                this.destination.remove(e), this.active--, t && t.length > 0 && this._next(t.shift()), this.hasCompleted && 0 === this.active && this.destination.complete()
            }, t
        }(OuterSubscriber);

    function finalize(e) {
        return function(t) {
            return t.lift(new FinallyOperator(e))
        }
    }
    var FinallyOperator = function() {
            function e(e) {
                this.callback = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new FinallySubscriber(e, this.callback))
            }, e
        }(),
        FinallySubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.add(new Subscription(r)), n
            }
            return __extends$1(t, e), t
        }(Subscriber);

    function find(e, t) {
        if ("function" != typeof e) throw new TypeError("predicate is not a function");
        return function(r) {
            return r.lift(new FindValueOperator(e, r, !1, t))
        }
    }
    var FindValueOperator = function() {
            function e(e, t, r, n) {
                this.predicate = e, this.source = t, this.yieldIndex = r, this.thisArg = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new FindValueSubscriber(e, this.predicate, this.source, this.yieldIndex, this.thisArg))
            }, e
        }(),
        FindValueSubscriber = function(e) {
            function t(t, r, n, i, o) {
                var s = e.call(this, t) || this;
                return s.predicate = r, s.source = n, s.yieldIndex = i, s.thisArg = o, s.index = 0, s
            }
            return __extends$1(t, e), t.prototype.notifyComplete = function(e) {
                var t = this.destination;
                t.next(e), t.complete(), this.unsubscribe()
            }, t.prototype._next = function(e) {
                var t = this.predicate,
                    r = this.thisArg,
                    n = this.index++;
                try {
                    t.call(r || this, e, n, this.source) && this.notifyComplete(this.yieldIndex ? n : e)
                } catch (e) {
                    this.destination.error(e)
                }
            }, t.prototype._complete = function() {
                this.notifyComplete(this.yieldIndex ? -1 : void 0)
            }, t
        }(Subscriber);

    function findIndex(e, t) {
        return function(r) {
            return r.lift(new FindValueOperator(e, r, !0, t))
        }
    }

    function first(e, t) {
        var r = arguments.length >= 2;
        return function(n) {
            return n.pipe(e ? filter(function(t, r) {
                return e(t, r, n)
            }) : identity, take(1), r ? defaultIfEmpty(t) : throwIfEmpty(function() {
                return new EmptyError
            }))
        }
    }

    function ignoreElements() {
        return function(e) {
            return e.lift(new IgnoreElementsOperator)
        }
    }
    var IgnoreElementsOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new IgnoreElementsSubscriber(e))
            }, e
        }(),
        IgnoreElementsSubscriber = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends$1(t, e), t.prototype._next = function(e) {}, t
        }(Subscriber);

    function isEmpty() {
        return function(e) {
            return e.lift(new IsEmptyOperator)
        }
    }
    var IsEmptyOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new IsEmptySubscriber(e))
            }, e
        }(),
        IsEmptySubscriber = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends$1(t, e), t.prototype.notifyComplete = function(e) {
                var t = this.destination;
                t.next(e), t.complete()
            }, t.prototype._next = function(e) {
                this.notifyComplete(!1)
            }, t.prototype._complete = function() {
                this.notifyComplete(!0)
            }, t
        }(Subscriber);

    function takeLast(e) {
        return function(t) {
            return 0 === e ? empty$1() : t.lift(new TakeLastOperator(e))
        }
    }
    var TakeLastOperator = function() {
            function e(e) {
                if (this.total = e, this.total < 0) throw new ArgumentOutOfRangeError
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new TakeLastSubscriber(e, this.total))
            }, e
        }(),
        TakeLastSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.total = r, n.ring = new Array, n.count = 0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.ring,
                    r = this.total,
                    n = this.count++;
                t.length < r ? t.push(e) : t[n % r] = e
            }, t.prototype._complete = function() {
                var e = this.destination,
                    t = this.count;
                if (t > 0)
                    for (var r = this.count >= this.total ? this.total : this.count, n = this.ring, i = 0; i < r; i++) {
                        var o = t++ % r;
                        e.next(n[o])
                    }
                e.complete()
            }, t
        }(Subscriber);

    function last(e, t) {
        var r = arguments.length >= 2;
        return function(n) {
            return n.pipe(e ? filter(function(t, r) {
                return e(t, r, n)
            }) : identity, takeLast(1), r ? defaultIfEmpty(t) : throwIfEmpty(function() {
                return new EmptyError
            }))
        }
    }

    function mapTo(e) {
        return function(t) {
            return t.lift(new MapToOperator(e))
        }
    }
    var MapToOperator = function() {
            function e(e) {
                this.value = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new MapToSubscriber(e, this.value))
            }, e
        }(),
        MapToSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.value = r, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.destination.next(this.value)
            }, t
        }(Subscriber);

    function materialize() {
        return function(e) {
            return e.lift(new MaterializeOperator)
        }
    }
    var MaterializeOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new MaterializeSubscriber(e))
            }, e
        }(),
        MaterializeSubscriber = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.destination.next(Notification.createNext(e))
            }, t.prototype._error = function(e) {
                var t = this.destination;
                t.next(Notification.createError(e)), t.complete()
            }, t.prototype._complete = function() {
                var e = this.destination;
                e.next(Notification.createComplete()), e.complete()
            }, t
        }(Subscriber);

    function scan(e, t) {
        var r = !1;
        return arguments.length >= 2 && (r = !0),
            function(n) {
                return n.lift(new ScanOperator(e, t, r))
            }
    }
    var ScanOperator = function() {
            function e(e, t, r) {
                void 0 === r && (r = !1), this.accumulator = e, this.seed = t, this.hasSeed = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ScanSubscriber(e, this.accumulator, this.seed, this.hasSeed))
            }, e
        }(),
        ScanSubscriber = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, t) || this;
                return o.accumulator = r, o._seed = n, o.hasSeed = i, o.index = 0, o
            }
            return __extends$1(t, e), Object.defineProperty(t.prototype, "seed", {
                get: function() {
                    return this._seed
                },
                set: function(e) {
                    this.hasSeed = !0, this._seed = e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._next = function(e) {
                if (this.hasSeed) return this._tryNext(e);
                this.seed = e, this.destination.next(e)
            }, t.prototype._tryNext = function(e) {
                var t, r = this.index++;
                try {
                    t = this.accumulator(this.seed, e, r)
                } catch (e) {
                    this.destination.error(e)
                }
                this.seed = t, this.destination.next(t)
            }, t
        }(Subscriber);

    function reduce(e, t) {
        return arguments.length >= 2 ? function(r) {
            return pipe(scan(e, t), takeLast(1), defaultIfEmpty(t))(r)
        } : function(t) {
            return pipe(scan(function(t, r, n) {
                return e(t, r, n + 1)
            }), takeLast(1))(t)
        }
    }

    function max(e) {
        return reduce("function" == typeof e ? function(t, r) {
            return e(t, r) > 0 ? t : r
        } : function(e, t) {
            return e > t ? e : t
        })
    }

    function merge$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            return t.lift.call(merge.apply(void 0, [t].concat(e)))
        }
    }

    function mergeMapTo(e, t, r) {
        return void 0 === r && (r = Number.POSITIVE_INFINITY), "function" == typeof t ? mergeMap(function() {
            return e
        }, t, r) : ("number" == typeof t && (r = t), mergeMap(function() {
            return e
        }, r))
    }

    function mergeScan(e, t, r) {
        return void 0 === r && (r = Number.POSITIVE_INFINITY),
            function(n) {
                return n.lift(new MergeScanOperator(e, t, r))
            }
    }
    var MergeScanOperator = function() {
            function e(e, t, r) {
                this.accumulator = e, this.seed = t, this.concurrent = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new MergeScanSubscriber(e, this.accumulator, this.seed, this.concurrent))
            }, e
        }(),
        MergeScanSubscriber = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, t) || this;
                return o.accumulator = r, o.acc = n, o.concurrent = i, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                if (this.active < this.concurrent) {
                    var t = this.index++,
                        r = this.destination,
                        n = void 0;
                    try {
                        n = (0, this.accumulator)(this.acc, e, t)
                    } catch (e) {
                        return r.error(e)
                    }
                    this.active++, this._innerSub(n, e, t)
                } else this.buffer.push(e)
            }, t.prototype._innerSub = function(e, t, r) {
                var n = new InnerSubscriber(this, t, r),
                    i = this.destination;
                i.add(n);
                var o = subscribeToResult(this, e, void 0, void 0, n);
                o !== n && i.add(o)
            }, t.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                var o = this.destination;
                this.acc = t, this.hasValue = !0, o.next(t)
            }, t.prototype.notifyComplete = function(e) {
                var t = this.buffer;
                this.destination.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete())
            }, t
        }(OuterSubscriber);

    function min(e) {
        return reduce("function" == typeof e ? function(t, r) {
            return e(t, r) < 0 ? t : r
        } : function(e, t) {
            return e < t ? e : t
        })
    }

    function multicast(e, t) {
        return function(r) {
            var n;
            if (n = "function" == typeof e ? e : function() {
                    return e
                }, "function" == typeof t) return r.lift(new MulticastOperator(n, t));
            var i = Object.create(r, connectableObservableDescriptor);
            return i.source = r, i.subjectFactory = n, i
        }
    }
    var MulticastOperator = function() {
        function e(e, t) {
            this.subjectFactory = e, this.selector = t
        }
        return e.prototype.call = function(e, t) {
            var r = this.selector,
                n = this.subjectFactory(),
                i = r(n).subscribe(e);
            return i.add(t.subscribe(n)), i
        }, e
    }();

    function onErrorResumeNext$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return 1 === e.length && isArray(e[0]) && (e = e[0]),
            function(t) {
                return t.lift(new OnErrorResumeNextOperator(e))
            }
    }
    var OnErrorResumeNextOperator = function() {
            function e(e) {
                this.nextSources = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new OnErrorResumeNextSubscriber(e, this.nextSources))
            }, e
        }(),
        OnErrorResumeNextSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.destination = t, n.nextSources = r, n
            }
            return __extends$1(t, e), t.prototype.notifyError = function(e, t) {
                this.subscribeToNextSource()
            }, t.prototype.notifyComplete = function(e) {
                this.subscribeToNextSource()
            }, t.prototype._error = function(e) {
                this.subscribeToNextSource(), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.subscribeToNextSource(), this.unsubscribe()
            }, t.prototype.subscribeToNextSource = function() {
                var e = this.nextSources.shift();
                if (e) {
                    var t = new InnerSubscriber(this, void 0, void 0),
                        r = this.destination;
                    r.add(t);
                    var n = subscribeToResult(this, e, void 0, void 0, t);
                    n !== t && r.add(n)
                } else this.destination.complete()
            }, t
        }(OuterSubscriber);

    function pairwise() {
        return function(e) {
            return e.lift(new PairwiseOperator)
        }
    }
    var PairwiseOperator = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new PairwiseSubscriber(e))
            }, e
        }(),
        PairwiseSubscriber = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.hasPrev = !1, r
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t;
                this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
            }, t
        }(Subscriber);

    function partition$1(e, t) {
        return function(r) {
            return [filter(e, t)(r), filter(not(e, t))(r)]
        }
    }

    function pluck() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = e.length;
        if (0 === r) throw new Error("list of properties cannot be empty.");
        return function(t) {
            return map(plucker(e, r))(t)
        }
    }

    function plucker(e, t) {
        return function(r) {
            for (var n = r, i = 0; i < t; i++) {
                var o = null != n ? n[e[i]] : void 0;
                if (void 0 === o) return;
                n = o
            }
            return n
        }
    }

    function publish(e) {
        return e ? multicast(function() {
            return new Subject
        }, e) : multicast(new Subject)
    }

    function publishBehavior(e) {
        return function(t) {
            return multicast(new BehaviorSubject(e))(t)
        }
    }

    function publishLast() {
        return function(e) {
            return multicast(new AsyncSubject)(e)
        }
    }

    function publishReplay(e, t, r, n) {
        r && "function" != typeof r && (n = r);
        var i = "function" == typeof r ? r : void 0,
            o = new ReplaySubject(e, t, n);
        return function(e) {
            return multicast(function() {
                return o
            }, i)(e)
        }
    }

    function race$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            return 1 === e.length && isArray(e[0]) && (e = e[0]), t.lift.call(race.apply(void 0, [t].concat(e)))
        }
    }

    function repeat(e) {
        return void 0 === e && (e = -1),
            function(t) {
                return 0 === e ? empty$1() : e < 0 ? t.lift(new RepeatOperator(-1, t)) : t.lift(new RepeatOperator(e - 1, t))
            }
    }
    var RepeatOperator = function() {
            function e(e, t) {
                this.count = e, this.source = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new RepeatSubscriber(e, this.count, this.source))
            }, e
        }(),
        RepeatSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.count = r, i.source = n, i
            }
            return __extends$1(t, e), t.prototype.complete = function() {
                if (!this.isStopped) {
                    var t = this.source,
                        r = this.count;
                    if (0 === r) return e.prototype.complete.call(this);
                    r > -1 && (this.count = r - 1), t.subscribe(this._unsubscribeAndRecycle())
                }
            }, t
        }(Subscriber);

    function repeatWhen(e) {
        return function(t) {
            return t.lift(new RepeatWhenOperator(e))
        }
    }
    var RepeatWhenOperator = function() {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new RepeatWhenSubscriber(e, this.notifier, t))
            }, e
        }(),
        RepeatWhenSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.notifier = r, i.source = n, i.sourceIsBeingSubscribedTo = !0, i
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
            }, t.prototype.notifyComplete = function(t) {
                if (!1 === this.sourceIsBeingSubscribedTo) return e.prototype.complete.call(this)
            }, t.prototype.complete = function() {
                if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                    if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return e.prototype.complete.call(this);
                    this._unsubscribeAndRecycle(), this.notifications.next()
                }
            }, t.prototype._unsubscribe = function() {
                var e = this.notifications,
                    t = this.retriesSubscription;
                e && (e.unsubscribe(), this.notifications = null), t && (t.unsubscribe(), this.retriesSubscription = null), this.retries = null
            }, t.prototype._unsubscribeAndRecycle = function() {
                var t = this._unsubscribe;
                return this._unsubscribe = null, e.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = t, this
            }, t.prototype.subscribeToRetries = function() {
                var t;
                this.notifications = new Subject;
                try {
                    t = (0, this.notifier)(this.notifications)
                } catch (t) {
                    return e.prototype.complete.call(this)
                }
                this.retries = t, this.retriesSubscription = subscribeToResult(this, t)
            }, t
        }(OuterSubscriber);

    function retry(e) {
        return void 0 === e && (e = -1),
            function(t) {
                return t.lift(new RetryOperator(e, t))
            }
    }
    var RetryOperator = function() {
            function e(e, t) {
                this.count = e, this.source = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new RetrySubscriber(e, this.count, this.source))
            }, e
        }(),
        RetrySubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.count = r, i.source = n, i
            }
            return __extends$1(t, e), t.prototype.error = function(t) {
                if (!this.isStopped) {
                    var r = this.source,
                        n = this.count;
                    if (0 === n) return e.prototype.error.call(this, t);
                    n > -1 && (this.count = n - 1), r.subscribe(this._unsubscribeAndRecycle())
                }
            }, t
        }(Subscriber);

    function retryWhen(e) {
        return function(t) {
            return t.lift(new RetryWhenOperator(e, t))
        }
    }
    var RetryWhenOperator = function() {
            function e(e, t) {
                this.notifier = e, this.source = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new RetryWhenSubscriber(e, this.notifier, this.source))
            }, e
        }(),
        RetryWhenSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.notifier = r, i.source = n, i
            }
            return __extends$1(t, e), t.prototype.error = function(t) {
                if (!this.isStopped) {
                    var r = this.errors,
                        n = this.retries,
                        i = this.retriesSubscription;
                    if (n) this.errors = null, this.retriesSubscription = null;
                    else {
                        r = new Subject;
                        try {
                            n = (0, this.notifier)(r)
                        } catch (t) {
                            return e.prototype.error.call(this, t)
                        }
                        i = subscribeToResult(this, n)
                    }
                    this._unsubscribeAndRecycle(), this.errors = r, this.retries = n, this.retriesSubscription = i, r.next(t)
                }
            }, t.prototype._unsubscribe = function() {
                var e = this.errors,
                    t = this.retriesSubscription;
                e && (e.unsubscribe(), this.errors = null), t && (t.unsubscribe(), this.retriesSubscription = null), this.retries = null
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                var o = this._unsubscribe;
                this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = o, this.source.subscribe(this)
            }, t
        }(OuterSubscriber);

    function sample(e) {
        return function(t) {
            return t.lift(new SampleOperator(e))
        }
    }
    var SampleOperator = function() {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function(e, t) {
                var r = new SampleSubscriber(e),
                    n = t.subscribe(r);
                return n.add(subscribeToResult(r, this.notifier)), n
            }, e
        }(),
        SampleSubscriber = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hasValue = !1, t
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.value = e, this.hasValue = !0
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.emitValue()
            }, t.prototype.notifyComplete = function() {
                this.emitValue()
            }, t.prototype.emitValue = function() {
                this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
            }, t
        }(OuterSubscriber);

    function sampleTime(e, t) {
        return void 0 === t && (t = async),
            function(r) {
                return r.lift(new SampleTimeOperator(e, t))
            }
    }
    var SampleTimeOperator = function() {
            function e(e, t) {
                this.period = e, this.scheduler = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SampleTimeSubscriber(e, this.period, this.scheduler))
            }, e
        }(),
        SampleTimeSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.period = r, i.scheduler = n, i.hasValue = !1, i.add(n.schedule(dispatchNotification, r, {
                    subscriber: i,
                    period: r
                })), i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.lastValue = e, this.hasValue = !0
            }, t.prototype.notifyNext = function() {
                this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue))
            }, t
        }(Subscriber);

    function dispatchNotification(e) {
        var t = e.subscriber,
            r = e.period;
        t.notifyNext(), this.schedule(e, r)
    }

    function sequenceEqual(e, t) {
        return function(r) {
            return r.lift(new SequenceEqualOperator(e, t))
        }
    }
    var SequenceEqualOperator = function() {
            function e(e, t) {
                this.compareTo = e, this.comparator = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SequenceEqualSubscriber(e, this.compareTo, this.comparator))
            }, e
        }(),
        SequenceEqualSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.compareTo = r, i.comparator = n, i._a = [], i._b = [], i._oneComplete = !1, i.destination.add(r.subscribe(new SequenceEqualCompareToSubscriber(t, i))), i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(e), this.checkValues())
            }, t.prototype._complete = function() {
                this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0, this.unsubscribe()
            }, t.prototype.checkValues = function() {
                for (var e = this._a, t = this._b, r = this.comparator; e.length > 0 && t.length > 0;) {
                    var n = e.shift(),
                        i = t.shift(),
                        o = !1;
                    try {
                        o = r ? r(n, i) : n === i
                    } catch (e) {
                        this.destination.error(e)
                    }
                    o || this.emit(!1)
                }
            }, t.prototype.emit = function(e) {
                var t = this.destination;
                t.next(e), t.complete()
            }, t.prototype.nextB = function(e) {
                this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(e), this.checkValues())
            }, t.prototype.completeB = function() {
                this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
            }, t
        }(Subscriber),
        SequenceEqualCompareToSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.parent = r, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.parent.nextB(e)
            }, t.prototype._error = function(e) {
                this.parent.error(e), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.parent.completeB(), this.unsubscribe()
            }, t
        }(Subscriber);

    function shareSubjectFactory() {
        return new Subject
    }

    function share() {
        return function(e) {
            return refCount()(multicast(shareSubjectFactory)(e))
        }
    }

    function shareReplay(e, t, r) {
        var n;
        return n = e && "object" == typeof e ? e : {
                bufferSize: e,
                windowTime: t,
                refCount: !1,
                scheduler: r
            },
            function(e) {
                return e.lift(shareReplayOperator(n))
            }
    }

    function shareReplayOperator(e) {
        var t, r, n = e.bufferSize,
            i = void 0 === n ? Number.POSITIVE_INFINITY : n,
            o = e.windowTime,
            s = void 0 === o ? Number.POSITIVE_INFINITY : o,
            u = e.refCount,
            a = e.scheduler,
            c = 0,
            l = !1,
            f = !1;
        return function(e) {
            var n;
            c++, !t || l ? (l = !1, t = new ReplaySubject(i, s, a), n = t.subscribe(this), r = e.subscribe({
                next: function(e) {
                    t.next(e)
                },
                error: function(e) {
                    l = !0, t.error(e)
                },
                complete: function() {
                    f = !0, r = void 0, t.complete()
                }
            })) : n = t.subscribe(this), this.add(function() {
                c--, n.unsubscribe(), r && !f && u && 0 === c && (r.unsubscribe(), r = void 0, t = void 0)
            })
        }
    }

    function single(e) {
        return function(t) {
            return t.lift(new SingleOperator(e, t))
        }
    }
    var SingleOperator = function() {
            function e(e, t) {
                this.predicate = e, this.source = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SingleSubscriber(e, this.predicate, this.source))
            }, e
        }(),
        SingleSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.predicate = r, i.source = n, i.seenValue = !1, i.index = 0, i
            }
            return __extends$1(t, e), t.prototype.applySingleValue = function(e) {
                this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = e)
            }, t.prototype._next = function(e) {
                var t = this.index++;
                this.predicate ? this.tryNext(e, t) : this.applySingleValue(e)
            }, t.prototype.tryNext = function(e, t) {
                try {
                    this.predicate(e, t, this.source) && this.applySingleValue(e)
                } catch (e) {
                    this.destination.error(e)
                }
            }, t.prototype._complete = function() {
                var e = this.destination;
                this.index > 0 ? (e.next(this.seenValue ? this.singleValue : void 0), e.complete()) : e.error(new EmptyError)
            }, t
        }(Subscriber);

    function skip$1(e) {
        return function(t) {
            return t.lift(new SkipOperator(e))
        }
    }
    var SkipOperator = function() {
            function e(e) {
                this.total = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SkipSubscriber(e, this.total))
            }, e
        }(),
        SkipSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.total = r, n.count = 0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                ++this.count > this.total && this.destination.next(e)
            }, t
        }(Subscriber);

    function skipLast(e) {
        return function(t) {
            return t.lift(new SkipLastOperator(e))
        }
    }
    var SkipLastOperator = function() {
            function e(e) {
                if (this._skipCount = e, this._skipCount < 0) throw new ArgumentOutOfRangeError
            }
            return e.prototype.call = function(e, t) {
                return 0 === this._skipCount ? t.subscribe(new Subscriber(e)) : t.subscribe(new SkipLastSubscriber(e, this._skipCount))
            }, e
        }(),
        SkipLastSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n._skipCount = r, n._count = 0, n._ring = new Array(r), n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this._skipCount,
                    r = this._count++;
                if (r < t) this._ring[r] = e;
                else {
                    var n = r % t,
                        i = this._ring,
                        o = i[n];
                    i[n] = e, this.destination.next(o)
                }
            }, t
        }(Subscriber);

    function skipUntil(e) {
        return function(t) {
            return t.lift(new SkipUntilOperator(e))
        }
    }
    var SkipUntilOperator = function() {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SkipUntilSubscriber(e, this.notifier))
            }, e
        }(),
        SkipUntilSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                n.hasValue = !1;
                var i = new InnerSubscriber(n, void 0, void 0);
                n.add(i), n.innerSubscription = i;
                var o = subscribeToResult(n, r, void 0, void 0, i);
                return o !== i && (n.add(o), n.innerSubscription = o), n
            }
            return __extends$1(t, e), t.prototype._next = function(t) {
                this.hasValue && e.prototype._next.call(this, t)
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
            }, t.prototype.notifyComplete = function() {}, t
        }(OuterSubscriber);

    function skipWhile(e) {
        return function(t) {
            return t.lift(new SkipWhileOperator(e))
        }
    }
    var SkipWhileOperator = function() {
            function e(e) {
                this.predicate = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SkipWhileSubscriber(e, this.predicate))
            }, e
        }(),
        SkipWhileSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.predicate = r, n.skipping = !0, n.index = 0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.destination;
                this.skipping && this.tryCallPredicate(e), this.skipping || t.next(e)
            }, t.prototype.tryCallPredicate = function(e) {
                try {
                    var t = this.predicate(e, this.index++);
                    this.skipping = Boolean(t)
                } catch (e) {
                    this.destination.error(e)
                }
            }, t
        }(Subscriber);

    function startWith() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = e[e.length - 1];
        return isScheduler(r) ? (e.pop(), function(t) {
            return concat(e, t, r)
        }) : function(t) {
            return concat(e, t)
        }
    }
    var SubscribeOnObservable = function(e) {
        function t(t, r, n) {
            void 0 === r && (r = 0), void 0 === n && (n = asap);
            var i = e.call(this) || this;
            return i.source = t, i.delayTime = r, i.scheduler = n, (!isNumeric(r) || r < 0) && (i.delayTime = 0), n && "function" == typeof n.schedule || (i.scheduler = asap), i
        }
        return __extends$1(t, e), t.create = function(e, r, n) {
            return void 0 === r && (r = 0), void 0 === n && (n = asap), new t(e, r, n)
        }, t.dispatch = function(e) {
            var t = e.source,
                r = e.subscriber;
            return this.add(t.subscribe(r))
        }, t.prototype._subscribe = function(e) {
            var r = this.delayTime,
                n = this.source;
            return this.scheduler.schedule(t.dispatch, r, {
                source: n,
                subscriber: e
            })
        }, t
    }(Observable);

    function subscribeOn(e, t) {
        return void 0 === t && (t = 0),
            function(r) {
                return r.lift(new SubscribeOnOperator(e, t))
            }
    }
    var SubscribeOnOperator = function() {
        function e(e, t) {
            this.scheduler = e, this.delay = t
        }
        return e.prototype.call = function(e, t) {
            return new SubscribeOnObservable(t, this.delay, this.scheduler).subscribe(e)
        }, e
    }();

    function switchMap(e, t) {
        return "function" == typeof t ? function(r) {
            return r.pipe(switchMap(function(r, n) {
                return from(e(r, n)).pipe(map(function(e, i) {
                    return t(r, e, n, i)
                }))
            }))
        } : function(t) {
            return t.lift(new SwitchMapOperator(e))
        }
    }
    var SwitchMapOperator = function() {
            function e(e) {
                this.project = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new SwitchMapSubscriber(e, this.project))
            }, e
        }(),
        SwitchMapSubscriber = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.project = r, n.index = 0, n
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t, r = this.index++;
                try {
                    t = this.project(e, r)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this._innerSub(t, e, r)
            }, t.prototype._innerSub = function(e, t, r) {
                var n = this.innerSubscription;
                n && n.unsubscribe();
                var i = new InnerSubscriber(this, t, r),
                    o = this.destination;
                o.add(i), this.innerSubscription = subscribeToResult(this, e, void 0, void 0, i), this.innerSubscription !== i && o.add(this.innerSubscription)
            }, t.prototype._complete = function() {
                var t = this.innerSubscription;
                t && !t.closed || e.prototype._complete.call(this), this.unsubscribe()
            }, t.prototype._unsubscribe = function() {
                this.innerSubscription = null
            }, t.prototype.notifyComplete = function(t) {
                this.destination.remove(t), this.innerSubscription = null, this.isStopped && e.prototype._complete.call(this)
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.destination.next(t)
            }, t
        }(OuterSubscriber);

    function switchAll() {
        return switchMap(identity)
    }

    function switchMapTo(e, t) {
        return t ? switchMap(function() {
            return e
        }, t) : switchMap(function() {
            return e
        })
    }

    function takeUntil(e) {
        return function(t) {
            return t.lift(new TakeUntilOperator(e))
        }
    }
    var TakeUntilOperator = function() {
            function e(e) {
                this.notifier = e
            }
            return e.prototype.call = function(e, t) {
                var r = new TakeUntilSubscriber(e),
                    n = subscribeToResult(r, this.notifier);
                return n && !r.seenValue ? (r.add(n), t.subscribe(r)) : r
            }, e
        }(),
        TakeUntilSubscriber = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.seenValue = !1, r
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.seenValue = !0, this.complete()
            }, t.prototype.notifyComplete = function() {}, t
        }(OuterSubscriber);

    function takeWhile(e, t) {
        return void 0 === t && (t = !1),
            function(r) {
                return r.lift(new TakeWhileOperator(e, t))
            }
    }
    var TakeWhileOperator = function() {
            function e(e, t) {
                this.predicate = e, this.inclusive = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new TakeWhileSubscriber(e, this.predicate, this.inclusive))
            }, e
        }(),
        TakeWhileSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.predicate = r, i.inclusive = n, i.index = 0, i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t, r = this.destination;
                try {
                    t = this.predicate(e, this.index++)
                } catch (e) {
                    return void r.error(e)
                }
                this.nextOrComplete(e, t)
            }, t.prototype.nextOrComplete = function(e, t) {
                var r = this.destination;
                Boolean(t) ? r.next(e) : (this.inclusive && r.next(e), r.complete())
            }, t
        }(Subscriber);

    function tap(e, t, r) {
        return function(n) {
            return n.lift(new DoOperator(e, t, r))
        }
    }
    var DoOperator = function() {
            function e(e, t, r) {
                this.nextOrObserver = e, this.error = t, this.complete = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new TapSubscriber(e, this.nextOrObserver, this.error, this.complete))
            }, e
        }(),
        TapSubscriber = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, t) || this;
                return o._tapNext = noop, o._tapError = noop, o._tapComplete = noop, o._tapError = n || noop, o._tapComplete = i || noop, isFunction(r) ? (o._context = o, o._tapNext = r) : r && (o._context = r, o._tapNext = r.next || noop, o._tapError = r.error || noop, o._tapComplete = r.complete || noop), o
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                try {
                    this._tapNext.call(this._context, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                try {
                    this._tapError.call(this._context, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.error(e)
            }, t.prototype._complete = function() {
                try {
                    this._tapComplete.call(this._context)
                } catch (e) {
                    return void this.destination.error(e)
                }
                return this.destination.complete()
            }, t
        }(Subscriber),
        defaultThrottleConfig = {
            leading: !0,
            trailing: !1
        };

    function throttle(e, t) {
        return void 0 === t && (t = defaultThrottleConfig),
            function(r) {
                return r.lift(new ThrottleOperator(e, t.leading, t.trailing))
            }
    }
    var ThrottleOperator = function() {
            function e(e, t, r) {
                this.durationSelector = e, this.leading = t, this.trailing = r
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ThrottleSubscriber(e, this.durationSelector, this.leading, this.trailing))
            }, e
        }(),
        ThrottleSubscriber = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, t) || this;
                return o.destination = t, o.durationSelector = r, o._leading = n, o._trailing = i, o._hasValue = !1, o
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this._hasValue = !0, this._sendValue = e, this._throttled || (this._leading ? this.send() : this.throttle(e))
            }, t.prototype.send = function() {
                var e = this._hasValue,
                    t = this._sendValue;
                e && (this.destination.next(t), this.throttle(t)), this._hasValue = !1, this._sendValue = null
            }, t.prototype.throttle = function(e) {
                var t = this.tryDurationSelector(e);
                t && this.add(this._throttled = subscribeToResult(this, t))
            }, t.prototype.tryDurationSelector = function(e) {
                try {
                    return this.durationSelector(e)
                } catch (e) {
                    return this.destination.error(e), null
                }
            }, t.prototype.throttlingDone = function() {
                var e = this._throttled,
                    t = this._trailing;
                e && e.unsubscribe(), this._throttled = null, t && this.send()
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                this.throttlingDone()
            }, t.prototype.notifyComplete = function() {
                this.throttlingDone()
            }, t
        }(OuterSubscriber);

    function throttleTime(e, t, r) {
        return void 0 === t && (t = async), void 0 === r && (r = defaultThrottleConfig),
            function(n) {
                return n.lift(new ThrottleTimeOperator(e, t, r.leading, r.trailing))
            }
    }
    var ThrottleTimeOperator = function() {
            function e(e, t, r, n) {
                this.duration = e, this.scheduler = t, this.leading = r, this.trailing = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new ThrottleTimeSubscriber(e, this.duration, this.scheduler, this.leading, this.trailing))
            }, e
        }(),
        ThrottleTimeSubscriber = function(e) {
            function t(t, r, n, i, o) {
                var s = e.call(this, t) || this;
                return s.duration = r, s.scheduler = n, s.leading = i, s.trailing = o, s._hasTrailingValue = !1, s._trailingValue = null, s
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                this.throttled ? this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(dispatchNext$3, this.duration, {
                    subscriber: this
                })), this.leading ? this.destination.next(e) : this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0))
            }, t.prototype._complete = function() {
                this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
            }, t.prototype.clearThrottle = function() {
                var e = this.throttled;
                e && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), e.unsubscribe(), this.remove(e), this.throttled = null)
            }, t
        }(Subscriber);

    function dispatchNext$3(e) {
        e.subscriber.clearThrottle()
    }

    function timeInterval(e) {
        return void 0 === e && (e = async),
            function(t) {
                return defer(function() {
                    return t.pipe(scan(function(t, r) {
                        var n = t.current;
                        return {
                            value: r,
                            current: e.now(),
                            last: n
                        }
                    }, {
                        current: e.now(),
                        value: void 0,
                        last: void 0
                    }), map(function(e) {
                        var t = e.current,
                            r = e.last,
                            n = e.value;
                        return new TimeInterval(n, t - r)
                    }))
                })
            }
    }
    var TimeInterval = function() {
        return function(e, t) {
            this.value = e, this.interval = t
        }
    }();

    function timeoutWith(e, t, r) {
        return void 0 === r && (r = async),
            function(n) {
                var i = isDate(e),
                    o = i ? +e - r.now() : Math.abs(e);
                return n.lift(new TimeoutWithOperator(o, i, t, r))
            }
    }
    var TimeoutWithOperator = function() {
            function e(e, t, r, n) {
                this.waitFor = e, this.absoluteTimeout = t, this.withObservable = r, this.scheduler = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new TimeoutWithSubscriber(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
            }, e
        }(),
        TimeoutWithSubscriber = function(e) {
            function t(t, r, n, i, o) {
                var s = e.call(this, t) || this;
                return s.absoluteTimeout = r, s.waitFor = n, s.withObservable = i, s.scheduler = o, s.action = null, s.scheduleTimeout(), s
            }
            return __extends$1(t, e), t.dispatchTimeout = function(e) {
                var t = e.withObservable;
                e._unsubscribeAndRecycle(), e.add(subscribeToResult(e, t))
            }, t.prototype.scheduleTimeout = function() {
                var e = this.action;
                e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(t.dispatchTimeout, this.waitFor, this))
            }, t.prototype._next = function(t) {
                this.absoluteTimeout || this.scheduleTimeout(), e.prototype._next.call(this, t)
            }, t.prototype._unsubscribe = function() {
                this.action = null, this.scheduler = null, this.withObservable = null
            }, t
        }(OuterSubscriber);

    function timeout(e, t) {
        return void 0 === t && (t = async), timeoutWith(e, throwError(new TimeoutError), t)
    }

    function timestamp(e) {
        return void 0 === e && (e = async), map(function(t) {
            return new Timestamp(t, e.now())
        })
    }
    var Timestamp = function() {
        return function(e, t) {
            this.value = e, this.timestamp = t
        }
    }();

    function toArrayReducer(e, t, r) {
        return 0 === r ? [t] : (e.push(t), e)
    }

    function toArray() {
        return reduce(toArrayReducer, [])
    }

    function window$1(e) {
        return function(t) {
            return t.lift(new WindowOperator(e))
        }
    }
    var WindowOperator = function() {
            function e(e) {
                this.windowBoundaries = e
            }
            return e.prototype.call = function(e, t) {
                var r = new WindowSubscriber(e),
                    n = t.subscribe(r);
                return n.closed || r.add(subscribeToResult(r, this.windowBoundaries)), n
            }, e
        }(),
        WindowSubscriber = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.window = new Subject, t.next(r.window), r
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.openWindow()
            }, t.prototype.notifyError = function(e, t) {
                this._error(e)
            }, t.prototype.notifyComplete = function(e) {
                this._complete()
            }, t.prototype._next = function(e) {
                this.window.next(e)
            }, t.prototype._error = function(e) {
                this.window.error(e), this.destination.error(e)
            }, t.prototype._complete = function() {
                this.window.complete(), this.destination.complete()
            }, t.prototype._unsubscribe = function() {
                this.window = null
            }, t.prototype.openWindow = function() {
                var e = this.window;
                e && e.complete();
                var t = this.destination,
                    r = this.window = new Subject;
                t.next(r)
            }, t
        }(OuterSubscriber);

    function windowCount(e, t) {
        return void 0 === t && (t = 0),
            function(r) {
                return r.lift(new WindowCountOperator(e, t))
            }
    }
    var WindowCountOperator = function() {
            function e(e, t) {
                this.windowSize = e, this.startWindowEvery = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new WindowCountSubscriber(e, this.windowSize, this.startWindowEvery))
            }, e
        }(),
        WindowCountSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.destination = t, i.windowSize = r, i.startWindowEvery = n, i.windows = [new Subject], i.count = 0, t.next(i.windows[0]), i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                for (var t = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, r = this.destination, n = this.windowSize, i = this.windows, o = i.length, s = 0; s < o && !this.closed; s++) i[s].next(e);
                var u = this.count - n + 1;
                if (u >= 0 && u % t == 0 && !this.closed && i.shift().complete(), ++this.count % t == 0 && !this.closed) {
                    var a = new Subject;
                    i.push(a), r.next(a)
                }
            }, t.prototype._error = function(e) {
                var t = this.windows;
                if (t)
                    for (; t.length > 0 && !this.closed;) t.shift().error(e);
                this.destination.error(e)
            }, t.prototype._complete = function() {
                var e = this.windows;
                if (e)
                    for (; e.length > 0 && !this.closed;) e.shift().complete();
                this.destination.complete()
            }, t.prototype._unsubscribe = function() {
                this.count = 0, this.windows = null
            }, t
        }(Subscriber);

    function windowTime(e) {
        var t = async,
            r = null,
            n = Number.POSITIVE_INFINITY;
        return isScheduler(arguments[3]) && (t = arguments[3]), isScheduler(arguments[2]) ? t = arguments[2] : isNumeric(arguments[2]) && (n = Number(arguments[2])), isScheduler(arguments[1]) ? t = arguments[1] : isNumeric(arguments[1]) && (r = Number(arguments[1])),
            function(i) {
                return i.lift(new WindowTimeOperator(e, r, n, t))
            }
    }
    var WindowTimeOperator = function() {
            function e(e, t, r, n) {
                this.windowTimeSpan = e, this.windowCreationInterval = t, this.maxWindowSize = r, this.scheduler = n
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new WindowTimeSubscriber(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler))
            }, e
        }(),
        CountedSubject = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._numberOfNextedValues = 0, t
            }
            return __extends$1(t, e), t.prototype.next = function(t) {
                this._numberOfNextedValues++, e.prototype.next.call(this, t)
            }, Object.defineProperty(t.prototype, "numberOfNextedValues", {
                get: function() {
                    return this._numberOfNextedValues
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(Subject),
        WindowTimeSubscriber = function(e) {
            function t(t, r, n, i, o) {
                var s = e.call(this, t) || this;
                s.destination = t, s.windowTimeSpan = r, s.windowCreationInterval = n, s.maxWindowSize = i, s.scheduler = o, s.windows = [];
                var u = s.openWindow();
                if (null !== n && n >= 0) {
                    var a = {
                            subscriber: s,
                            window: u,
                            context: null
                        },
                        c = {
                            windowTimeSpan: r,
                            windowCreationInterval: n,
                            subscriber: s,
                            scheduler: o
                        };
                    s.add(o.schedule(dispatchWindowClose, r, a)), s.add(o.schedule(dispatchWindowCreation, n, c))
                } else {
                    var l = {
                        subscriber: s,
                        window: u,
                        windowTimeSpan: r
                    };
                    s.add(o.schedule(dispatchWindowTimeSpanOnly, r, l))
                }
                return s
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                for (var t = this.windows, r = t.length, n = 0; n < r; n++) {
                    var i = t[n];
                    i.closed || (i.next(e), i.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(i))
                }
            }, t.prototype._error = function(e) {
                for (var t = this.windows; t.length > 0;) t.shift().error(e);
                this.destination.error(e)
            }, t.prototype._complete = function() {
                for (var e = this.windows; e.length > 0;) {
                    var t = e.shift();
                    t.closed || t.complete()
                }
                this.destination.complete()
            }, t.prototype.openWindow = function() {
                var e = new CountedSubject;
                return this.windows.push(e), this.destination.next(e), e
            }, t.prototype.closeWindow = function(e) {
                e.complete();
                var t = this.windows;
                t.splice(t.indexOf(e), 1)
            }, t
        }(Subscriber);

    function dispatchWindowTimeSpanOnly(e) {
        var t = e.subscriber,
            r = e.windowTimeSpan,
            n = e.window;
        n && t.closeWindow(n), e.window = t.openWindow(), this.schedule(e, r)
    }

    function dispatchWindowCreation(e) {
        var t = e.windowTimeSpan,
            r = e.subscriber,
            n = e.scheduler,
            i = e.windowCreationInterval,
            o = {
                action: this,
                subscription: null
            },
            s = {
                subscriber: r,
                window: r.openWindow(),
                context: o
            };
        o.subscription = n.schedule(dispatchWindowClose, t, s), this.add(o.subscription), this.schedule(e, i)
    }

    function dispatchWindowClose(e) {
        var t = e.subscriber,
            r = e.window,
            n = e.context;
        n && n.action && n.subscription && n.action.remove(n.subscription), t.closeWindow(r)
    }

    function windowToggle(e, t) {
        return function(r) {
            return r.lift(new WindowToggleOperator(e, t))
        }
    }
    var WindowToggleOperator = function() {
            function e(e, t) {
                this.openings = e, this.closingSelector = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new WindowToggleSubscriber(e, this.openings, this.closingSelector))
            }, e
        }(),
        WindowToggleSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                return i.openings = r, i.closingSelector = n, i.contexts = [], i.add(i.openSubscription = subscribeToResult(i, r, r)), i
            }
            return __extends$1(t, e), t.prototype._next = function(e) {
                var t = this.contexts;
                if (t)
                    for (var r = t.length, n = 0; n < r; n++) t[n].window.next(e)
            }, t.prototype._error = function(t) {
                var r = this.contexts;
                if (this.contexts = null, r)
                    for (var n = r.length, i = -1; ++i < n;) {
                        var o = r[i];
                        o.window.error(t), o.subscription.unsubscribe()
                    }
                e.prototype._error.call(this, t)
            }, t.prototype._complete = function() {
                var t = this.contexts;
                if (this.contexts = null, t)
                    for (var r = t.length, n = -1; ++n < r;) {
                        var i = t[n];
                        i.window.complete(), i.subscription.unsubscribe()
                    }
                e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function() {
                var e = this.contexts;
                if (this.contexts = null, e)
                    for (var t = e.length, r = -1; ++r < t;) {
                        var n = e[r];
                        n.window.unsubscribe(), n.subscription.unsubscribe()
                    }
            }, t.prototype.notifyNext = function(e, t, r, n, i) {
                if (e === this.openings) {
                    var o = void 0;
                    try {
                        o = (0, this.closingSelector)(t)
                    } catch (e) {
                        return this.error(e)
                    }
                    var s = new Subject,
                        u = new Subscription,
                        a = {
                            window: s,
                            subscription: u
                        };
                    this.contexts.push(a);
                    var c = subscribeToResult(this, o, a);
                    c.closed ? this.closeWindow(this.contexts.length - 1) : (c.context = a, u.add(c)), this.destination.next(s)
                } else this.closeWindow(this.contexts.indexOf(e))
            }, t.prototype.notifyError = function(e) {
                this.error(e)
            }, t.prototype.notifyComplete = function(e) {
                e !== this.openSubscription && this.closeWindow(this.contexts.indexOf(e.context))
            }, t.prototype.closeWindow = function(e) {
                if (-1 !== e) {
                    var t = this.contexts,
                        r = t[e],
                        n = r.window,
                        i = r.subscription;
                    t.splice(e, 1), n.complete(), i.unsubscribe()
                }
            }, t
        }(OuterSubscriber);

    function windowWhen(e) {
        return function(t) {
            return t.lift(new WindowOperator$1(e))
        }
    }
    var WindowOperator$1 = function() {
            function e(e) {
                this.closingSelector = e
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new WindowSubscriber$1(e, this.closingSelector))
            }, e
        }(),
        WindowSubscriber$1 = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.destination = t, n.closingSelector = r, n.openWindow(), n
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.openWindow(i)
            }, t.prototype.notifyError = function(e, t) {
                this._error(e)
            }, t.prototype.notifyComplete = function(e) {
                this.openWindow(e)
            }, t.prototype._next = function(e) {
                this.window.next(e)
            }, t.prototype._error = function(e) {
                this.window.error(e), this.destination.error(e), this.unsubscribeClosingNotification()
            }, t.prototype._complete = function() {
                this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification()
            }, t.prototype.unsubscribeClosingNotification = function() {
                this.closingNotification && this.closingNotification.unsubscribe()
            }, t.prototype.openWindow = function(e) {
                void 0 === e && (e = null), e && (this.remove(e), e.unsubscribe());
                var t = this.window;
                t && t.complete();
                var r, n = this.window = new Subject;
                this.destination.next(n);
                try {
                    r = (0, this.closingSelector)()
                } catch (e) {
                    return this.destination.error(e), void this.window.error(e)
                }
                this.add(this.closingNotification = subscribeToResult(this, r))
            }, t
        }(OuterSubscriber);

    function withLatestFrom() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            var r;
            "function" == typeof e[e.length - 1] && (r = e.pop());
            var n = e;
            return t.lift(new WithLatestFromOperator(n, r))
        }
    }
    var WithLatestFromOperator = function() {
            function e(e, t) {
                this.observables = e, this.project = t
            }
            return e.prototype.call = function(e, t) {
                return t.subscribe(new WithLatestFromSubscriber(e, this.observables, this.project))
            }, e
        }(),
        WithLatestFromSubscriber = function(e) {
            function t(t, r, n) {
                var i = e.call(this, t) || this;
                i.observables = r, i.project = n, i.toRespond = [];
                var o = r.length;
                i.values = new Array(o);
                for (var s = 0; s < o; s++) i.toRespond.push(s);
                for (s = 0; s < o; s++) {
                    var u = r[s];
                    i.add(subscribeToResult(i, u, u, s))
                }
                return i
            }
            return __extends$1(t, e), t.prototype.notifyNext = function(e, t, r, n, i) {
                this.values[r] = t;
                var o = this.toRespond;
                if (o.length > 0) {
                    var s = o.indexOf(r); - 1 !== s && o.splice(s, 1)
                }
            }, t.prototype.notifyComplete = function() {}, t.prototype._next = function(e) {
                if (0 === this.toRespond.length) {
                    var t = [e].concat(this.values);
                    this.project ? this._tryProject(t) : this.destination.next(t)
                }
            }, t.prototype._tryProject = function(e) {
                var t;
                try {
                    t = this.project.apply(this, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(OuterSubscriber);

    function zip$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t) {
            return t.lift.call(zip.apply(void 0, [t].concat(e)))
        }
    }

    function zipAll(e) {
        return function(t) {
            return t.lift(new ZipOperator(e))
        }
    }
    var operators_1 = Object.freeze({
            audit: audit,
            auditTime: auditTime,
            buffer: buffer,
            bufferCount: bufferCount,
            bufferTime: bufferTime,
            bufferToggle: bufferToggle,
            bufferWhen: bufferWhen,
            catchError: catchError,
            combineAll: combineAll,
            combineLatest: combineLatest$1,
            concat: concat$1,
            concatAll: concatAll,
            concatMap: concatMap,
            concatMapTo: concatMapTo,
            count: count,
            debounce: debounce,
            debounceTime: debounceTime,
            defaultIfEmpty: defaultIfEmpty,
            delay: delay,
            delayWhen: delayWhen,
            dematerialize: dematerialize,
            distinct: distinct,
            distinctUntilChanged: distinctUntilChanged,
            distinctUntilKeyChanged: distinctUntilKeyChanged,
            elementAt: elementAt,
            endWith: endWith,
            every: every,
            exhaust: exhaust,
            exhaustMap: exhaustMap,
            expand: expand,
            filter: filter,
            finalize: finalize,
            find: find,
            findIndex: findIndex,
            first: first,
            groupBy: groupBy,
            ignoreElements: ignoreElements,
            isEmpty: isEmpty,
            last: last,
            map: map,
            mapTo: mapTo,
            materialize: materialize,
            max: max,
            merge: merge$1,
            mergeAll: mergeAll,
            mergeMap: mergeMap,
            flatMap: flatMap,
            mergeMapTo: mergeMapTo,
            mergeScan: mergeScan,
            min: min,
            multicast: multicast,
            observeOn: observeOn,
            onErrorResumeNext: onErrorResumeNext$1,
            pairwise: pairwise,
            partition: partition$1,
            pluck: pluck,
            publish: publish,
            publishBehavior: publishBehavior,
            publishLast: publishLast,
            publishReplay: publishReplay,
            race: race$1,
            reduce: reduce,
            repeat: repeat,
            repeatWhen: repeatWhen,
            retry: retry,
            retryWhen: retryWhen,
            refCount: refCount,
            sample: sample,
            sampleTime: sampleTime,
            scan: scan,
            sequenceEqual: sequenceEqual,
            share: share,
            shareReplay: shareReplay,
            single: single,
            skip: skip$1,
            skipLast: skipLast,
            skipUntil: skipUntil,
            skipWhile: skipWhile,
            startWith: startWith,
            subscribeOn: subscribeOn,
            switchAll: switchAll,
            switchMap: switchMap,
            switchMapTo: switchMapTo,
            take: take,
            takeLast: takeLast,
            takeUntil: takeUntil,
            takeWhile: takeWhile,
            tap: tap,
            throttle: throttle,
            throttleTime: throttleTime,
            throwIfEmpty: throwIfEmpty,
            timeInterval: timeInterval,
            timeout: timeout,
            timeoutWith: timeoutWith,
            timestamp: timestamp,
            toArray: toArray,
            window: window$1,
            windowCount: windowCount,
            windowTime: windowTime,
            windowToggle: windowToggle,
            windowWhen: windowWhen,
            withLatestFrom: withLatestFrom,
            zip: zip$1,
            zipAll: zipAll
        }),
        commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function unwrapExports(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var map_1 = createCommonjsModule(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.map = function(e, t) {
            return operators_1.map(e, t)(this)
        }
    });
    unwrapExports(map_1);
    var map_2 = map_1.map,
        map$3 = createCommonjsModule(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), _esm5.Observable.prototype.map = map_1.map
        });
    unwrapExports(map$3);
    var map$1 = createCommonjsModule(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });
    unwrapExports(map$1);
    var take_1 = createCommonjsModule(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.take = function(e) {
            return operators_1.take(e)(this)
        }
    });
    unwrapExports(take_1);
    var take_2 = take_1.take,
        take$3 = createCommonjsModule(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), _esm5.Observable.prototype.take = take_1.take
        });
    unwrapExports(take$3);
    var take$1 = createCommonjsModule(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });
    unwrapExports(take$1);
    var filter_1 = createCommonjsModule(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filter = function(e, t) {
            return operators_1.filter(e, t)(this)
        }
    });
    unwrapExports(filter_1);
    var filter_2 = filter_1.filter,
        filter$3 = createCommonjsModule(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), _esm5.Observable.prototype.filter = filter_1.filter
        });
    unwrapExports(filter$3);
    var filter$1 = createCommonjsModule(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }),
        Environments;

    function getCurrentUrl() {
        return window.location.href
    }

    function getQueryParam(e, t) {
        return new URL(e).searchParams.get(t) || void 0
    }

    function removeQueryParams(e, t) {
        for (var r = new URL(e), n = 0, i = t; n < i.length; n++) {
            var o = i[n];
            r.searchParams.delete(o)
        }
        return r.toString()
    }

    function setQueryParam(e, t, r) {
        if (void 0 === r) return removeQueryParams(e, [t]);
        var n = new URL(e);
        return n.searchParams.set(t, r), n.toString()
    }

    function getEnvironment() {
        return getQueryParam(window.location.href, "local") ? Environments.DEV : Environments.PROD
    }
    unwrapExports(filter$1),
        function(e) {
            e.PROD = "prod", e.DEV = "dev"
        }(Environments || (Environments = {})), window.env = window.env || {};
    var getEnvVar = function(e) {
            if (window.env && e in window.env) return window.env[e]
        },
        serverUrl = {
            dev: "http://localhost:8080/graphql",
            prod: getEnvVar("API_URL") || "https://api.labelbox.com/graphql"
        } [getEnvironment()],
        labelboxDomain = {
            dev: "http://localhost:3000",
            prod: getEnvVar("APP_URL") || "https://app.labelbox.com"
        } [getEnvironment()],
        _this$2 = void 0,
        userAgentName = "js-sdk",
        userAgentVersion = "1.1.2",
        userAgent = userAgentName + "/" + userAgentVersion,
        shouldAddOperationNameToUrl = function() {
            return Boolean(localStorage.getItem("DEBUG_LABELBOX"))
        },
        getDynamicUri = function(e) {
            if (shouldAddOperationNameToUrl() && e && e.query) {
                var t = /^(query|mutation) (\w+)/.exec(e.query);
                if (t) {
                    var r = t[2];
                    return serverUrl + "?op=" + (r || "none")
                }
            }
            return serverUrl
        },
        postJSON = function(e) {
            var t = e.headers,
                r = void 0 === t ? {} : t,
                n = e.body;
            return __awaiter(_this$2, void 0, void 0, function() {
                var e, t;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return e = getDynamicUri(n), [4, window.fetch(e, {
                                method: "POST",
                                body: JSON.stringify(n),
                                headers: __assign({
                                    "Content-Type": "application/json",
                                    "X-Labelbox-UA": userAgent
                                }, r)
                            })];
                        case 1:
                            return (t = i.sent()).ok ? [2, t.json()] : [2, t.text()]
                    }
                })
            })
        },
        exchangeAuthorizationCode = "mutation ExchangeAuthorizationCode($code: String!) {\n  exchangeAuthorizationCode(code: $code) {\n    accessToken\n  }\n}\n",
        _this$3 = void 0,
        sendAuthQuery = function(e) {
            return __awaiter(_this$3, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return [2, postJSON({
                        body: {
                            query: exchangeAuthorizationCode,
                            variables: e
                        }
                    })]
                })
            })
        },
        callOnce = function(e) {
            var t = 0;
            return function() {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                0 === t && (t += 1, e.apply(void 0, r))
            }
        };

    function wait(e) {
        return new Promise(function(t) {
            setTimeout(function() {
                t()
            }, e)
        })
    }
    var get = function(e) {
            try {
                return e()
            } catch (e) {
                return
            }
        },
        LocalTokenStorage = function() {
            function e() {
                this.key = "labelbox-jwt"
            }
            return e.prototype.get = function() {
                return localStorage.getItem(this.key)
            }, e.prototype.set = function(e) {
                return localStorage.setItem(this.key, e)
            }, e.prototype.clear = function() {
                return localStorage.removeItem(this.key)
            }, e
        }(),
        AccessToken$1 = function() {
            function e(e) {
                void 0 === e && (e = {});
                var t = this,
                    r = e.currentUrl || getCurrentUrl();
                this.store = e.store || new LocalTokenStorage;
                var n = getQueryParam(r, "code"),
                    i = getQueryParam(r, "token") || null;
                if (n || i) {
                    var o = removeQueryParams(r, ["code", "token"]);
                    window.history.replaceState({}, document.title, o)
                }
                n ? this.token = sendAuthQuery({
                    code: n
                }).then(function(e) {
                    return get(function() {
                        return e.data.exchangeAuthorizationCode.accessToken
                    }) || null
                }).then(function(e) {
                    return t.updateStorage(e)
                }) : (i && this.updateStorage(i), this.token = Promise.resolve(i))
            }
            return e.prototype.updateStorage = function(e) {
                return e ? this.store.set(e) : this.store.clear(), e
            }, e.prototype.getToken = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.token];
                            case 1:
                                return [2, e.sent() || this.store.get()]
                        }
                    })
                })
            }, e.prototype.removeToken = function() {
                this.updateStorage(null), this.token = Promise.resolve(null)
            }, e
        }(),
        AccessToken = new AccessToken$1,
        _this$1 = void 0,
        sendQuery = function(e) {
            var t = e.query,
                r = e.variables;
            return __awaiter(_this$1, void 0, void 0, function() {
                var e;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, AccessToken.getToken()];
                        case 1:
                            return e = n.sent(), [2, postJSON({
                                body: {
                                    query: t,
                                    variables: r || {}
                                },
                                headers: {
                                    authorization: e ? "Bearer " + e : ""
                                }
                            })]
                    }
                })
            })
        },
        getUserQuery = "query GetUser {\n  user {\n    id\n    name\n    email\n    organization {\n      id\n    }\n  }\n}\n";

    function fetchUser() {
        return sendQuery({
            query: getUserQuery
        }).then(function(e) {
            if (e && e.data.user) {
                var t = e.data.user;
                return {
                    id: t.id,
                    name: t.name,
                    email: t.email,
                    organizationId: t.organization.id
                }
            }
        })
    }
    var debugLSKey = "DEBUG_LABELBOX",
        isDebugModeEnabled = function() {
            return Boolean(localStorage.getItem(debugLSKey))
        },
        debugLog = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            isDebugModeEnabled() && console.log.apply(console, e)
        },
        preloader, registerPreloader = function(e) {
            if (preloader) throw new Error("Error: A preloading function has been registered already, and only one can be registered at a time.");
            return preloader = e, !0
        },
        getPreloader = function() {
            return preloader
        },
        templateCustomizationQuery = "query GetTemplateCustomization($projectId: ID!) {\n  project(where: { id: $projectId }) {\n    id\n    ontology {\n      id\n      normalized\n    }\n  }\n}\n",
        build_umd = createCommonjsModule(function(module, exports) {
            var factory;
            factory = function() {
                return function(e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var i = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                    }
                    return r.m = e, r.c = t, r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(e, t) {
                        if (1 & t && (e = r(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var i in e) r.d(n, i, function(t) {
                                return e[t]
                            }.bind(null, i));
                        return n
                    }, r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = 8)
                }([function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e, t) {
                        if (null == e) return {};
                        var r = {};
                        return Object.keys(e).forEach(function(n) {
                            r[n] = t(e[n])
                        }), r
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.setActive = function(e) {
                        s = e
                    }, t.default = function(e) {
                        var t = e.addRequest,
                            r = e.addResponse,
                            o = e.shouldCloneResponse,
                            a = void 0 !== o && o,
                            c = XMLHttpRequest,
                            l = new WeakMap,
                            f = !1;
                        return window._lrXMLHttpRequest = XMLHttpRequest, XMLHttpRequest = function(e, o) {
                                var p = new c(e, o);
                                if (!s) return p;
                                l.set(p, {
                                    xhrId: ++u,
                                    headers: {}
                                }), (0, i.default)(p, "open", function(e, t) {
                                    if (!f) {
                                        var r = l.get(p);
                                        r.method = e, r.url = t
                                    }
                                }), (0, i.default)(p, "send", function(e) {
                                    if (!f) {
                                        var r = l.get(p);
                                        if (r) {
                                            var i = {
                                                url: r.url,
                                                method: r.method && r.method.toUpperCase(),
                                                headers: (0, n.default)(r.headers || {}, function(e) {
                                                    return e.join(", ")
                                                }),
                                                body: e
                                            };
                                            t("xhr-" + r.xhrId, i)
                                        }
                                    }
                                }), (0, i.default)(p, "setRequestHeader", function(e, t) {
                                    if (!f) {
                                        var r = l.get(p);
                                        r && (r.headers = r.headers || {}, r.headers[e] = r.headers[e] || [], r.headers[e].push(t))
                                    }
                                });
                                var d = {
                                    readystatechange: function() {
                                        if (!f && 4 === p.readyState) {
                                            var e = l.get(p);
                                            if (!e) return;
                                            var t = p.getAllResponseHeaders().split(/[\r\n]+/).reduce(function(e, t) {
                                                    var r = e,
                                                        n = t.split(": ");
                                                    if (n.length > 0) {
                                                        var i = n.shift(),
                                                            o = n.join(": ");
                                                        e[i] ? r[i] += ", " + o : r[i] = o
                                                    }
                                                    return r
                                                }, {}),
                                                n = void 0;
                                            try {
                                                switch (p.responseType) {
                                                    case "json":
                                                        n = a ? JSON.parse(JSON.stringify(p.response)) : p.response;
                                                        break;
                                                    case "arraybuffer":
                                                    case "blob":
                                                        n = p.response;
                                                        break;
                                                    case "document":
                                                        n = p.responseXML;
                                                        break;
                                                    case "text":
                                                    case "":
                                                        n = p.responseText;
                                                        break;
                                                    default:
                                                        n = ""
                                                }
                                            } catch (e) {
                                                n = "LogRocket: Error accessing response."
                                            }
                                            var i = {
                                                url: e.url,
                                                status: p.status,
                                                headers: t,
                                                body: n,
                                                method: (e.method || "").toUpperCase()
                                            };
                                            r("xhr-" + e.xhrId, i)
                                        }
                                    }
                                };
                                return Object.keys(d).forEach(function(e) {
                                    p.addEventListener(e, d[e])
                                }), p
                            }, XMLHttpRequest.prototype = c.prototype, ["UNSENT", "OPENED", "HEADERS_RECEIVED", "LOADING", "DONE"].forEach(function(e) {
                                XMLHttpRequest[e] = c[e]
                            }),
                            function() {
                                f = !0, XMLHttpRequest = c
                            }
                    };
                    var n = o(r(0)),
                        i = o(r(2));

                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var s = !0;
                    var u = 0
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e, t, r) {
                        var n = e[t];
                        return e[t] = function() {
                                for (var e = void 0, t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                                return n && (e = n.apply(this, i)), r.apply(this, i), e
                            },
                            function() {
                                e[t] = n
                            }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Capture = t.registerExceptions = void 0;
                    var n, i = r(16),
                        o = (n = i) && n.__esModule ? n : {
                            default: n
                        },
                        s = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        }(r(6));
                    t.registerExceptions = o.default, t.Capture = s
                }, function(module, exports) {
                    var g;
                    g = function() {
                        return this
                    }();
                    try {
                        g = g || Function("return this")() || eval("this")
                    } catch (e) {
                        "object" == typeof window && (g = window)
                    }
                    module.exports = g
                }, function(e, t, r) {
                    (function(t) {
                        var r = {
                                collectWindowErrors: !0,
                                debug: !1
                            },
                            n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                            i = [].slice,
                            o = "?",
                            s = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;

                        function u() {
                            return "undefined" == typeof document || void 0 === document.location ? "" : document.location.href
                        }
                        r.report = function() {
                            var e, t, a = [],
                                c = null,
                                l = null,
                                f = null;

                            function p(e, t) {
                                var n = null;
                                if (!t || r.collectWindowErrors) {
                                    for (var o in a)
                                        if (a.hasOwnProperty(o)) try {
                                            a[o].apply(null, [e].concat(i.call(arguments, 2)))
                                        } catch (e) {
                                            n = e
                                        }
                                    if (n) throw n
                                }
                            }

                            function d(t, n, i, a, c) {
                                if (f) r.computeStackTrace.augmentStackTraceWithInitialElement(f, n, i, t), h();
                                else if (c) p(r.computeStackTrace(c), !0);
                                else {
                                    var l, d = {
                                            url: n,
                                            line: i,
                                            column: a
                                        },
                                        b = void 0,
                                        y = t;
                                    if ("[object String]" === {}.toString.call(t))(l = t.match(s)) && (b = l[1], y = l[2]);
                                    d.func = o, p({
                                        name: b,
                                        message: y,
                                        url: u(),
                                        stack: [d]
                                    }, !0)
                                }
                                return !!e && e.apply(this, arguments)
                            }

                            function h() {
                                var e = f,
                                    t = c;
                                c = null, f = null, l = null, p.apply(null, [e, !1].concat(t))
                            }

                            function b(e, t) {
                                var n = i.call(arguments, 1);
                                if (f) {
                                    if (l === e) return;
                                    h()
                                }
                                var o = r.computeStackTrace(e);
                                if (f = o, l = e, c = n, setTimeout(function() {
                                        l === e && h()
                                    }, o.incomplete ? 2e3 : 0), !1 !== t) throw e
                            }
                            return b.subscribe = function(r) {
                                t || (e = n.onerror, n.onerror = d, t = !0), a.push(r)
                            }, b.unsubscribe = function(e) {
                                for (var t = a.length - 1; t >= 0; --t) a[t] === e && a.splice(t, 1)
                            }, b.uninstall = function() {
                                t && (n.onerror = e, t = !1, e = void 0), a = []
                            }, b
                        }(), r.computeStackTrace = function() {
                            function e(e) {
                                if (void 0 !== e.stack && e.stack) {
                                    for (var t, r, n = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, i = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, a = e.stack.split("\n"), c = [], l = (/^(.*) is undefined$/.exec(e.message), 0), f = a.length; l < f; ++l) {
                                        if (t = n.exec(a[l])) {
                                            var p = t[2] && -1 !== t[2].indexOf("native");
                                            r = {
                                                url: p ? null : t[2],
                                                func: t[1] || o,
                                                args: p ? [t[2]] : [],
                                                line: t[3] ? +t[3] : null,
                                                column: t[4] ? +t[4] : null
                                            }
                                        } else if (t = s.exec(a[l])) r = {
                                            url: t[2],
                                            func: t[1] || o,
                                            args: [],
                                            line: +t[3],
                                            column: t[4] ? +t[4] : null
                                        };
                                        else {
                                            if (!(t = i.exec(a[l]))) continue;
                                            r = {
                                                url: t[3],
                                                func: t[1] || o,
                                                args: t[2] ? t[2].split(",") : [],
                                                line: t[4] ? +t[4] : null,
                                                column: t[5] ? +t[5] : null
                                            }
                                        }!r.func && r.line && (r.func = o), c.push(r)
                                    }
                                    return c.length ? (c[0].column || void 0 === e.columnNumber || (c[0].column = e.columnNumber + 1), {
                                        name: e.name,
                                        message: e.message,
                                        url: u(),
                                        stack: c
                                    }) : null
                                }
                            }

                            function t(e, t, r, n) {
                                var i = {
                                    url: t,
                                    line: r
                                };
                                if (i.url && i.line) {
                                    if (e.incomplete = !1, i.func || (i.func = o), e.stack.length > 0 && e.stack[0].url === i.url) {
                                        if (e.stack[0].line === i.line) return !1;
                                        if (!e.stack[0].line && e.stack[0].func === i.func) return e.stack[0].line = i.line, !1
                                    }
                                    return e.stack.unshift(i), e.partial = !0, !0
                                }
                                return e.incomplete = !0, !1
                            }

                            function n(e, s) {
                                for (var a, c, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, f = [], p = {}, d = !1, h = n.caller; h && !d; h = h.caller)
                                    if (h !== i && h !== r.report) {
                                        if (c = {
                                                url: null,
                                                func: o,
                                                line: null,
                                                column: null
                                            }, h.name ? c.func = h.name : (a = l.exec(h.toString())) && (c.func = a[1]), void 0 === c.func) try {
                                            c.func = a.input.substring(0, a.input.indexOf("{"))
                                        } catch (e) {}
                                        p["" + h] ? d = !0 : p["" + h] = !0, f.push(c)
                                    } s && f.splice(0, s);
                                var b = {
                                    name: e.name,
                                    message: e.message,
                                    url: u(),
                                    stack: f
                                };
                                return t(b, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), b
                            }

                            function i(t, i) {
                                var o = null;
                                i = null == i ? 0 : +i;
                                try {
                                    if (o = e(t)) return o
                                } catch (e) {
                                    if (r.debug) throw e
                                }
                                try {
                                    if (o = n(t, i + 1)) return o
                                } catch (e) {
                                    if (r.debug) throw e
                                }
                                return {
                                    name: t.name,
                                    message: t.message,
                                    url: u()
                                }
                            }
                            return i.augmentStackTraceWithInitialElement = t, i.computeStackTraceFromStackProp = e, i
                        }(), e.exports = r
                    }).call(this, r(4))
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    t.captureMessage = function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = {
                                exceptionType: arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? "CONSOLE" : "MESSAGE",
                                message: t,
                                browserHref: window.location.href
                            };
                        a(n, r), e.addEvent("lr.core.Exception", function() {
                            return n
                        })
                    }, t.captureException = function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || i.default.computeStackTrace(t),
                            s = {
                                exceptionType: "WINDOW",
                                errorType: n.name,
                                message: n.message,
                                browserHref: window.location.href
                            };
                        a(s, r);
                        var u = {
                            _stackTrace: (0, o.default)(n)
                        };
                        e.addEvent("lr.core.Exception", function() {
                            return s
                        }, u)
                    };
                    var i = s(r(5)),
                        o = s(r(18));

                    function s(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function u(e) {
                        return /boolean|number|string/.test(void 0 === e ? "undefined" : n(e))
                    }

                    function a(e, t) {
                        if (t) {
                            var r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, s = ["level", "logger"][Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                                    var a = o.value,
                                        c = t[a];
                                    u(c) && (e[a] = c.toString())
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                            var l = !0,
                                f = !1,
                                p = void 0;
                            try {
                                for (var d, h = ["tags", "extra"][Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
                                    var b = d.value,
                                        y = t[b] || {},
                                        v = {},
                                        m = !0,
                                        _ = !1,
                                        g = void 0;
                                    try {
                                        for (var w, S = Object.keys(y)[Symbol.iterator](); !(m = (w = S.next()).done); m = !0) {
                                            var x = w.value,
                                                E = y[x];
                                            u(E) && (v[x.toString()] = E.toString())
                                        }
                                    } catch (e) {
                                        _ = !0, g = e
                                    } finally {
                                        try {
                                            !m && S.return && S.return()
                                        } finally {
                                            if (_) throw g
                                        }
                                    }
                                    e[b] = v
                                }
                            } catch (e) {
                                f = !0, p = e
                            } finally {
                                try {
                                    !l && h.return && h.return()
                                } finally {
                                    if (f) throw p
                                }
                            }
                        }
                    }
                }, function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = Date.now.bind(Date),
                        n = r();
                    t.default = "undefined" != typeof performance && performance.now ? performance.now.bind(performance) : function() {
                        return r() - n
                    }, e.exports = t.default
                }, function(e, t, r) {
                    e.exports = r(9)
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, i = r(10);
                    var o = (0, ((n = i) && n.__esModule ? n : {
                        default: n
                    }).default)();
                    t.default = o, e.exports = t.default
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.enterpriseServer,
                            r = e.sdkVersion,
                            n = void 0 === r ? "1.0.3" : r,
                            i = function(e, t) {
                                var r = {};
                                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                                return r
                            }(e, ["enterpriseServer", "sdkVersion"]),
                            u = "https://cdn.logrocket.io",
                            a = void 0;
                        if ("script" === n) try {
                            var c = document.currentScript,
                                l = c.src.match(/^(https?:\/\/([^\\]+))\/.+$/),
                                f = l && l[2];
                            f && s[f] && (u = l && l[1], a = s[f])
                        } catch (e) {} else u = "https://cdn.lr-ingest.io", a = "https://r.lr-ingest.io";
                        var p = i.sdkServer || t,
                            d = i.ingestServer || t || a,
                            h = (0, o.default)(function() {
                                var e = document.createElement("script");
                                d && (void 0 === window.__SDKCONFIG__ && (window.__SDKCONFIG__ = {}), window.__SDKCONFIG__.serverURL = d + "/i", window.__SDKCONFIG__.statsURL = d + "/s"), p ? e.src = p + "/logger.min.js" : window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL ? e.src = window.__SDKCONFIG__.loggerURL : window._lrAsyncScript ? e.src = window._lrAsyncScript : e.src = u + "/logger.min.js", e.async = !0, document.head.appendChild(e), e.onload = function() {
                                    "function" == typeof window._LRLogger ? h.onLogger(new window._LRLogger({
                                        sdkVersion: n
                                    })) : (console.warn("LogRocket: script execution has been blocked by a product or service."), h.uninstall())
                                }, e.onerror = function() {
                                    console.warn("LogRocket: script could not load. Check that you have a valid network connection."), h.uninstall()
                                }
                            });
                        return h
                    };
                    var n, i = r(11),
                        o = (n = i) && n.__esModule ? n : {
                            default: n
                        };
                    var s = {
                        "cdn.logrocket.io": "https://r.logrocket.io",
                        "cdn.lr-ingest.io": "https://r.lr-ingest.io",
                        "cdn-staging.logrocket.io": "https://staging-i.logrocket.io",
                        "cdn-staging.lr-ingest.io": "https://staging-i.lr-ingest.io"
                    };
                    e.exports = t.default
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        if ("undefined" != typeof navigator && "ReactNative" === navigator.product) throw new Error(s);
                        if ("undefined" != typeof window) {
                            if (window._disableLogRocket) return u();
                            if (window.MutationObserver && window.WeakMap) {
                                window._lrMutationObserver = window.MutationObserver;
                                var t = new o.default;
                                return e(t), t
                            }
                        }
                        return u()
                    };
                    var n, i = r(12),
                        o = (n = i) && n.__esModule ? n : {
                            default: n
                        };
                    var s = "LogRocket does not yet support React Native.",
                        u = function() {
                            return {
                                init: function() {},
                                uninstall: function() {},
                                log: function() {},
                                info: function() {},
                                warn: function() {},
                                error: function() {},
                                debug: function() {},
                                addEvent: function() {},
                                identify: function() {},
                                start: function() {},
                                get threadID() {
                                    return null
                                },
                                get recordingID() {
                                    return null
                                },
                                get recordingURL() {
                                    return null
                                },
                                reduxEnhancer: function() {
                                    return function(e) {
                                        return function() {
                                            return e.apply(void 0, arguments)
                                        }
                                    }
                                },
                                reduxMiddleware: function() {
                                    return function() {
                                        return function(e) {
                                            return function(t) {
                                                return e(t)
                                            }
                                        }
                                    }
                                },
                                track: function() {},
                                getSessionURL: function() {},
                                getVersion: function() {},
                                startNewSession: function() {},
                                onLogger: function() {},
                                setClock: function() {},
                                captureMessage: function() {},
                                captureException: function() {}
                            }
                        };
                    e.exports = t.default
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.MAX_QUEUE_SIZE = void 0;
                    var n = function() {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                }
                            }
                            return function(t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t
                            }
                        }(),
                        i = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        },
                        o = c(r(13)),
                        s = r(3),
                        u = c(r(19)),
                        a = r(21);

                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var l = t.MAX_QUEUE_SIZE = 1e3,
                        f = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.ingestServer,
                                r = function(e, t) {
                                    var r = {};
                                    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                                    return r
                                }(e, ["ingestServer"]);
                            return t ? i({
                                serverURL: t + "/i",
                                statsURL: t + "/s"
                            }, r) : r
                        },
                        p = function() {
                            function e() {
                                var t = this;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this._buffer = [], ["log", "info", "warn", "error", "debug"].forEach(function(e) {
                                    t[e] = function() {
                                        for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                                        t.addEvent("lr.core.LogEvent", function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            return "error" === e && r.shouldAggregateConsoleErrors && s.Capture.captureMessage(t, n[0], {}, !0), {
                                                logLevel: e.toUpperCase(),
                                                args: n
                                            }
                                        }, {
                                            shouldCaptureStackTrace: !0
                                        })
                                    }
                                }), this._isInitialized = !1, this._installed = []
                            }
                            return n(e, [{
                                key: "addEvent",
                                value: function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        n = Date.now();
                                    this._run(function(o) {
                                        o.addEvent(e, t, i({}, r, {
                                            timeOverride: n
                                        }))
                                    })
                                }
                            }, {
                                key: "onLogger",
                                value: function(e) {
                                    for (this._logger = e; this._buffer.length > 0;) {
                                        this._buffer.shift()(this._logger)
                                    }
                                }
                            }, {
                                key: "_run",
                                value: function(e) {
                                    if (!this._isDisabled)
                                        if (this._logger) e(this._logger);
                                        else {
                                            if (this._buffer.length >= l) return this._isDisabled = !0, console.warn("LogRocket: script did not load. Check that you have a valid network connection."), void this.uninstall();
                                            this._buffer.push(e.bind(this))
                                        }
                                }
                            }, {
                                key: "init",
                                value: function(e, t) {
                                    this._isInitialized || (this._installed.push((0, s.registerExceptions)(this)), this._installed.push((0, o.default)(this)), this._installed.push((0, u.default)(this)), this._isInitialized = !0, this._run(function(r) {
                                        r.init(e, f(t))
                                    }))
                                }
                            }, {
                                key: "start",
                                value: function() {
                                    this._run(function(e) {
                                        e.start()
                                    })
                                }
                            }, {
                                key: "uninstall",
                                value: function() {
                                    this._installed.forEach(function(e) {
                                        return e()
                                    }), this._buffer = [], this._run(function(e) {
                                        e.uninstall()
                                    })
                                }
                            }, {
                                key: "identify",
                                value: function(e, t) {
                                    this._run(function(r) {
                                        r.identify(e, t)
                                    })
                                }
                            }, {
                                key: "startNewSession",
                                value: function() {
                                    this._run(function(e) {
                                        e.startNewSession()
                                    })
                                }
                            }, {
                                key: "track",
                                value: function(e) {
                                    this._run(function(t) {
                                        t.track(e)
                                    })
                                }
                            }, {
                                key: "getSessionURL",
                                value: function(e) {
                                    if ("function" != typeof e) throw new Error("LogRocket: must pass callback to getSessionURL()");
                                    this._run(function(t) {
                                        t.getSessionURL ? t.getSessionURL(e) : e(t.recordingURL)
                                    })
                                }
                            }, {
                                key: "getVersion",
                                value: function(e) {
                                    this._run(function(t) {
                                        e(t.version)
                                    })
                                }
                            }, {
                                key: "startTransaction",
                                value: function(e) {
                                    this.addEvent("lr.filter.Start", function() {
                                        return {
                                            id: e
                                        }
                                    })
                                }
                            }, {
                                key: "endTransaction",
                                value: function(e) {
                                    this.addEvent("lr.filter.End", function() {
                                        return {
                                            id: e
                                        }
                                    })
                                }
                            }, {
                                key: "captureMessage",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    s.Capture.captureMessage(this, e, t)
                                }
                            }, {
                                key: "captureException",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    s.Capture.captureException(this, e, t)
                                }
                            }, {
                                key: "reduxEnhancer",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (0, a.createEnhancer)(this, e)
                                }
                            }, {
                                key: "reduxMiddleware",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (0, a.createMiddleware)(this, e)
                                }
                            }, {
                                key: "version",
                                get: function() {
                                    return this._logger && this._logger.version
                                }
                            }, {
                                key: "sessionURL",
                                get: function() {
                                    return this._logger && this._logger.recordingURL
                                }
                            }, {
                                key: "recordingURL",
                                get: function() {
                                    return this._logger && this._logger.recordingURL
                                }
                            }, {
                                key: "recordingID",
                                get: function() {
                                    return this._logger && this._logger.recordingID
                                }
                            }, {
                                key: "threadID",
                                get: function() {
                                    return this._logger && this._logger.threadID
                                }
                            }, {
                                key: "tabID",
                                get: function() {
                                    return this._logger && this._logger.tabID
                                }
                            }]), e
                        }();
                    t.default = p
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    t.default = function(e) {
                        var t = {},
                            r = function(e) {
                                var t = e;
                                if ("object" === (void 0 === e ? "undefined" : n(e)) && null != e) {
                                    var r = Object.getPrototypeOf(e);
                                    r !== Object.prototype && null !== r || (t = JSON.stringify(e))
                                }
                                if (t && t.length && t.length > 4096e3 && "string" == typeof t) {
                                    var i = t.substring(0, 1e3);
                                    return i + " ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network"
                                }
                                return e
                            },
                            u = function(n, i) {
                                var o = i.method;
                                e.addEvent("lr.network.RequestEvent", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        u = e.isEnabled,
                                        a = void 0 === u || u,
                                        c = e.requestSanitizer,
                                        l = void 0 === c ? function(e) {
                                            return e
                                        } : c;
                                    if (!a) return null;
                                    var f = null;
                                    try {
                                        f = l(i)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    if (f) {
                                        var p = document.createElement("a");
                                        return p.href = f.url, {
                                            reqId: n,
                                            url: p.href,
                                            headers: (0, s.default)(f.headers, function(e) {
                                                return "" + e
                                            }),
                                            body: r(f.body),
                                            method: o,
                                            referrer: f.referrer || void 0,
                                            mode: f.mode || void 0,
                                            credentials: f.credentials || void 0
                                        }
                                    }
                                    return t[n] = !0, null
                                })
                            },
                            a = function(n, i) {
                                var o = i.method,
                                    u = i.status;
                                e.addEvent("lr.network.ResponseEvent", function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        a = e.isEnabled,
                                        c = void 0 === a || a,
                                        l = e.responseSanitizer,
                                        f = void 0 === l ? function(e) {
                                            return e
                                        } : l;
                                    if (!c) return null;
                                    if (t[n]) return delete t[n], null;
                                    var p = null;
                                    try {
                                        p = f(i)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    return p ? {
                                        reqId: n,
                                        status: p.status,
                                        headers: (0, s.default)(p.headers, function(e) {
                                            return "" + e
                                        }),
                                        body: r(p.body),
                                        method: o
                                    } : {
                                        reqId: n,
                                        status: u,
                                        headers: {},
                                        body: null,
                                        method: o
                                    }
                                })
                            },
                            c = (0, i.default)({
                                addRequest: u,
                                addResponse: a
                            }),
                            l = (0, o.default)({
                                addRequest: u,
                                addResponse: a,
                                shouldCloneResponse: e._shouldCloneResponse
                            });
                        return function() {
                            c(), l()
                        }
                    };
                    var i = u(r(14)),
                        o = u(r(1)),
                        s = u(r(0));

                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    };
                    t.default = function(e) {
                        var t = e.addRequest,
                            r = e.addResponse,
                            i = {};
                        return o.default.register({
                            request: function(e) {
                                for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) o[s - 1] = arguments[s];
                                return ("undefined" != typeof Request && o[0] instanceof Request ? o[0].clone().text().then(function(e) {
                                    return n({}, a(o[0]), {
                                        body: e
                                    })
                                }) : Promise.resolve(n({}, a(o[1]), {
                                    url: "" + o[0],
                                    body: (o[1] || {}).body
                                }))).then(function(r) {
                                    return i[e] = r.method, t("fetch-" + e, r), o
                                })
                            },
                            requestError: function(e, t) {
                                return Promise.reject(t)
                            },
                            response: function(e, t) {
                                var n = void 0;
                                try {
                                    n = t.clone().text()
                                } catch (e) {
                                    n = Promise.resolve("LogRocket fetch error: " + e.message)
                                }
                                return n.then(function(n) {
                                    var o = {
                                        url: t.url,
                                        status: t.status,
                                        headers: u(t.headers),
                                        body: n,
                                        method: i[e]
                                    };
                                    return delete i[e], r("fetch-" + e, o), t
                                })
                            },
                            responseError: function(e, t) {
                                var n = {
                                    url: void 0,
                                    status: 0,
                                    headers: {},
                                    body: "" + t
                                };
                                return r("fetch-" + e, n), Promise.reject(t)
                            }
                        })
                    };
                    var i = s(r(0)),
                        o = s(r(15));

                    function s(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var u = function(e) {
                        return (0, i.default)(function(e) {
                            if (null == e || "function" != typeof e.forEach) return e;
                            var t = {};
                            return e.forEach(function(e, r) {
                                t[r] ? t[r] = t[r] + "," + e : t[r] = "" + e
                            }), t
                        }(e), function(e) {
                            return "" + e
                        })
                    };

                    function a() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            url: e.url,
                            headers: u(e.headers),
                            method: e.method && e.method.toUpperCase(),
                            referrer: e.referrer || void 0,
                            mode: e.mode || void 0,
                            credentials: e.credentials || void 0
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1);

                    function i(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r
                        }
                        return Array.from(e)
                    }
                    var o = [];

                    function s(e) {
                        if (e.fetch && e.Promise) {
                            var t, r, s = e.fetch.polyfill;
                            e.fetch = (t = e.fetch, r = 0, function() {
                                for (var e = arguments.length, s = Array(e), u = 0; u < e; u++) s[u] = arguments[u];
                                return function(e, t) {
                                    for (var r = arguments.length, s = Array(r > 2 ? r - 2 : 0), u = 2; u < r; u++) s[u - 2] = arguments[u];
                                    var a = o.reduce(function(e, t) {
                                            return [t].concat(e)
                                        }, []),
                                        c = Promise.resolve(s);
                                    return a.forEach(function(e) {
                                        var r = e.request,
                                            n = e.requestError;
                                        (r || n) && (c = c.then(function(e) {
                                            return r.apply(void 0, [t].concat(i(e)))
                                        }, function(e) {
                                            return n.apply(void 0, [t].concat(i(e)))
                                        }))
                                    }), c = c.then(function(t) {
                                        (0, n.setActive)(!1);
                                        var r = void 0,
                                            o = void 0;
                                        try {
                                            r = e.apply(void 0, i(t))
                                        } catch (e) {
                                            o = e
                                        }
                                        if ((0, n.setActive)(!0), o) throw o;
                                        return r
                                    }), a.forEach(function(e) {
                                        var r = e.response,
                                            n = e.responseError;
                                        (r || n) && (c = c.then(function(e) {
                                            return r(t, e)
                                        }, function(e) {
                                            return n && n(t, e)
                                        }))
                                    }), c
                                }.apply(void 0, [t, r++].concat(s))
                            }), s && (e.fetch.polyfill = s)
                        }
                    }
                    var u = !1;
                    t.default = {
                        register: function(e) {
                            return u || (u = !0, s(window)), o.push(e),
                                function() {
                                    var t = o.indexOf(e);
                                    t >= 0 && o.splice(t, 1)
                                }
                        },
                        clear: function() {
                            o = []
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e) {
                        var t = new o.default({
                                captureException: function(t) {
                                    s.captureException(e, null, null, t)
                                }
                            }),
                            r = function(t) {
                                e.addEvent("lr.core.Exception", function() {
                                    return {
                                        exceptionType: "UNHANDLED_REJECTION",
                                        message: t.reason || "Unhandled Promise rejection"
                                    }
                                })
                            };
                        return window.addEventListener("unhandledrejection", r),
                            function() {
                                window.removeEventListener("unhandledrejection", r), t.uninstall()
                            }
                    };
                    var n, i = r(17),
                        o = (n = i) && n.__esModule ? n : {
                            default: n
                        },
                        s = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        }(r(6))
                }, function(e, t, r) {
                    (function(e) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, i = function() {
                                function e(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                    }
                                }
                                return function(t, r, n) {
                                    return r && e(t.prototype, r), n && e(t, n), t
                                }
                            }(),
                            o = r(5),
                            s = (n = o) && n.__esModule ? n : {
                                default: n
                            };
                        var u = Object.prototype;

                        function a(e) {
                            return "function" == typeof e
                        }

                        function c(e, t, r, n) {
                            var i = e[t];
                            e[t] = r(i), n && n.push([e, t, i])
                        }
                        var l = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                            f = (l.document, function() {
                                function e(t) {
                                    var r = t.captureException;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e), this._errorHandler = this._errorHandler.bind(this), this._ignoreOnError = 0, this._wrappedBuiltIns = [], this.captureException = r, s.default.report.subscribe(this._errorHandler), this._instrumentTryCatch()
                                }
                                return i(e, [{
                                    key: "uninstall",
                                    value: function() {
                                        var e;
                                        for (s.default.report.unsubscribe(this._errorHandler); this._wrappedBuiltIns.length;) {
                                            var t = (e = this._wrappedBuiltIns.shift())[0],
                                                r = e[1],
                                                n = e[2];
                                            t[r] = n
                                        }
                                    }
                                }, {
                                    key: "_errorHandler",
                                    value: function(e) {
                                        this._ignoreOnError || this.captureException(e)
                                    }
                                }, {
                                    key: "_ignoreNextOnError",
                                    value: function() {
                                        var e = this;
                                        this._ignoreOnError += 1, setTimeout(function() {
                                            e._ignoreOnError -= 1
                                        })
                                    }
                                }, {
                                    key: "context",
                                    value: function(e, t, r) {
                                        return a(e) && (r = t || [], t = e, e = void 0), this.wrap(e, t).apply(this, r)
                                    }
                                }, {
                                    key: "wrap",
                                    value: function(e, t, r) {
                                        var n, i, o = this;
                                        if (void 0 === t && !a(e)) return e;
                                        if (a(e) && (t = e, e = void 0), !a(t)) return t;
                                        try {
                                            if (t.__lr__) return t;
                                            if (t.__lr_wrapper__) return t.__lr_wrapper__
                                        } catch (e) {
                                            return t
                                        }

                                        function c() {
                                            var n = [],
                                                i = arguments.length,
                                                u = !e || e && !1 !== e.deep;
                                            for (r && a(r) && r.apply(this, arguments); i--;) n[i] = u ? o.wrap(e, arguments[i]) : arguments[i];
                                            try {
                                                return t.apply(this, n)
                                            } catch (t) {
                                                throw o._ignoreNextOnError(), o.captureException(s.default.computeStackTrace(t), e), t
                                            }
                                        }
                                        for (var l in t) n = t, i = l, u.hasOwnProperty.call(n, i) && (c[l] = t[l]);
                                        return c.prototype = t.prototype, t.__lr_wrapper__ = c, c.__lr__ = !0, c.__inner__ = t, c
                                    }
                                }, {
                                    key: "_instrumentTryCatch",
                                    value: function() {
                                        var e = this,
                                            t = e._wrappedBuiltIns;

                                        function r(t) {
                                            return function(r, n) {
                                                for (var i = new Array(arguments.length), o = 0; o < i.length; ++o) i[o] = arguments[o];
                                                var s = i[0];
                                                return a(s) && (i[0] = e.wrap(s)), t.apply ? t.apply(this, i) : t(i[0], i[1])
                                            }
                                        }
                                        c(l, "setTimeout", r, t), c(l, "setInterval", r, t), l.requestAnimationFrame && c(l, "requestAnimationFrame", function(t) {
                                            return function(r) {
                                                return t(e.wrap(r))
                                            }
                                        }, t);
                                        for (var n, i, o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], s = 0; s < o.length; s++) i = void 0, (i = l[n = o[s]] && l[n].prototype) && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (c(i, "addEventListener", function(t) {
                                            return function(r, n, i, o) {
                                                try {
                                                    n && n.handleEvent && (n.handleEvent = e.wrap(n.handleEvent))
                                                } catch (e) {}
                                                return t.call(this, r, e.wrap(n, void 0, void 0), i, o)
                                            }
                                        }, t), c(i, "removeEventListener", function(e) {
                                            return function(t, r, n, i) {
                                                try {
                                                    r = r && (r.__lr_wrapper__ ? r.__lr_wrapper__ : r)
                                                } catch (e) {}
                                                return e.call(this, t, r, n, i)
                                            }
                                        }, t));
                                        var u = l.jQuery || l.$;
                                        u && u.fn && u.fn.ready && c(u.fn, "ready", function(t) {
                                            return function(r) {
                                                return t.call(this, e.wrap(r))
                                            }
                                        }, t)
                                    }
                                }]), e
                            }());
                        t.default = f
                    }).call(this, r(4))
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e) {
                        function t(e) {
                            return null === e ? void 0 : e
                        }
                        return e.stack ? e.stack.map(function(e) {
                            return {
                                lineNumber: t(e.line),
                                columnNumber: t(e.column),
                                fileName: t(e.url),
                                functionName: t(e.func)
                            }
                        }) : void 0
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, i = r(20),
                        o = (n = i) && n.__esModule ? n : {
                            default: n
                        };
                    t.default = o.default
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    t.default = function(e) {
                        var t = [];
                        return ["log", "warn", "info", "error", "debug"].forEach(function(r) {
                                t.push((0, s.default)(console, r, function() {
                                    for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                                    e.addEvent("lr.core.LogEvent", function() {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = t.isEnabled;
                                        return "object" === (void 0 === o ? "undefined" : n(o)) && !1 === o[r] || !1 === o ? null : ("error" === r && t.shouldAggregateConsoleErrors && u.Capture.captureMessage(e, i[0], {}, !0), {
                                            logLevel: r.toUpperCase(),
                                            args: i
                                        })
                                    })
                                }))
                            }),
                            function() {
                                t.forEach(function(e) {
                                    return e()
                                })
                            }
                    };
                    var i, o = r(2),
                        s = (i = o) && i.__esModule ? i : {
                            default: i
                        },
                        u = r(3)
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.createEnhancer = t.createMiddleware = void 0;
                    var n = o(r(22)),
                        i = o(r(23));

                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.createMiddleware = i.default, t.createEnhancer = n.default
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    };
                    t.default = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.stateSanitizer,
                            i = void 0 === r ? function(e) {
                                return e
                            } : r,
                            o = t.actionSanitizer,
                            a = void 0 === o ? function(e) {
                                return e
                            } : o;
                        return function(t) {
                            return function(r, o, c) {
                                var l = t(r, o, c),
                                    f = l.dispatch,
                                    p = u++;
                                e.addEvent("lr.redux.InitialState", function() {
                                    var e = void 0;
                                    try {
                                        e = i(l.getState())
                                    } catch (e) {
                                        console.error(e.toString())
                                    }
                                    return {
                                        state: e,
                                        storeId: p
                                    }
                                });
                                return n({}, l, {
                                    dispatch: function(t) {
                                        var r = (0, s.default)(),
                                            n = void 0,
                                            o = void 0;
                                        try {
                                            o = f(t)
                                        } catch (e) {
                                            n = e
                                        } finally {
                                            var u = (0, s.default)() - r;
                                            e.addEvent("lr.redux.ReduxAction", function() {
                                                var e = null,
                                                    r = null;
                                                try {
                                                    e = i(l.getState()), r = a(t)
                                                } catch (e) {
                                                    console.error(e.toString())
                                                }
                                                return e && r ? {
                                                    storeId: p,
                                                    action: r,
                                                    duration: u,
                                                    stateDelta: e
                                                } : null
                                            })
                                        }
                                        if (n) throw n;
                                        return o
                                    }
                                })
                            }
                        }
                    };
                    var i, o = r(7),
                        s = (i = o) && i.__esModule ? i : {
                            default: i
                        };
                    var u = 0
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.stateSanitizer,
                            n = void 0 === r ? function(e) {
                                return e
                            } : r,
                            i = t.actionSanitizer,
                            u = void 0 === i ? function(e) {
                                return e
                            } : i;
                        return function(t) {
                            var r = s++;
                            return e.addEvent("lr.redux.InitialState", function() {
                                    var e = void 0;
                                    try {
                                        e = n(t.getState())
                                    } catch (e) {
                                        console.error(e.toString())
                                    }
                                    return {
                                        state: e,
                                        storeId: r
                                    }
                                }),
                                function(i) {
                                    return function(s) {
                                        var a = (0, o.default)(),
                                            c = void 0,
                                            l = void 0;
                                        try {
                                            l = i(s)
                                        } catch (e) {
                                            c = e
                                        } finally {
                                            var f = (0, o.default)() - a;
                                            e.addEvent("lr.redux.ReduxAction", function() {
                                                var e = null,
                                                    i = null;
                                                try {
                                                    e = n(t.getState()), i = u(s)
                                                } catch (e) {
                                                    console.error(e.toString())
                                                }
                                                return e && i ? {
                                                    storeId: r,
                                                    action: i,
                                                    duration: f,
                                                    stateDelta: e
                                                } : null
                                            })
                                        }
                                        if (c) throw c;
                                        return l
                                    }
                                }
                        }
                    };
                    var n, i = r(7),
                        o = (n = i) && n.__esModule ? n : {
                            default: n
                        };
                    var s = 0
                }])
            }, module.exports = factory()
        }),
        LogRocket = unwrapExports(build_umd),
        randomString = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        ActionTypes = {
            INIT: "@@redux/INIT" + randomString(),
            REPLACE: "@@redux/REPLACE" + randomString(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + randomString()
            }
        };

    function isPlainObject(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function createStore(e, t, r) {
        var n;
        if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
        if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
            if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
            return r(createStore)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var i = e,
            o = t,
            s = [],
            u = s,
            a = !1;

        function c() {
            u === s && (u = s.slice())
        }

        function l() {
            if (a) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return o
        }

        function f(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (a) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
            var t = !0;
            return c(), u.push(e),
                function() {
                    if (t) {
                        if (a) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                        t = !1, c();
                        var r = u.indexOf(e);
                        u.splice(r, 1), s = null
                    }
                }
        }

        function p(e) {
            if (!isPlainObject(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (a) throw new Error("Reducers may not dispatch actions.");
            try {
                a = !0, o = i(o, e)
            } finally {
                a = !1
            }
            for (var t = s = u, r = 0; r < t.length; r++) {
                (0, t[r])()
            }
            return e
        }
        return p({
            type: ActionTypes.INIT
        }), (n = {
            dispatch: p,
            subscribe: f,
            getState: l,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                i = e, p({
                    type: ActionTypes.REPLACE
                })
            }
        })[result] = function() {
            var e, t = f;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                    function r() {
                        e.next && e.next(l())
                    }
                    return r(), {
                        unsubscribe: t(r)
                    }
                }
            })[result] = function() {
                return this
            }, e
        }, n
    }

    function _defineProperty(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function ownKeys(e, t) {
        var r = Object.keys(e);
        return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)), t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r
    }

    function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(r, !0).forEach(function(t) {
                _defineProperty(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function compose() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return 0 === t.length ? function(e) {
            return e
        } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        })
    }

    function applyMiddleware() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return function(e) {
            return function() {
                var r = e.apply(void 0, arguments),
                    n = function() {
                        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                    },
                    i = {
                        getState: r.getState,
                        dispatch: function() {
                            return n.apply(void 0, arguments)
                        }
                    },
                    o = t.map(function(e) {
                        return e(i)
                    });
                return _objectSpread2({}, r, {
                    dispatch: n = compose.apply(void 0, o)(r.dispatch)
                })
            }
        }
    }
    var keyHasType = function(e, t) {
            return e === t || "function" == typeof t && e === t.toString()
        },
        ofType = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                return e.pipe(filter(function(e) {
                    var r = e.type,
                        n = t.length;
                    if (1 === n) return keyHasType(r, t[0]);
                    for (var i = 0; i < n; i++)
                        if (keyHasType(r, t[i])) return !0;
                    return !1
                }))
            }
        },
        _createClass = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var ActionsObservable = function(e) {
        function t(e) {
            _classCallCheck(this, t);
            var r = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return r.source = e, r
        }
        return _inherits(t, Observable), _createClass(t, null, [{
            key: "of",
            value: function() {
                return new this( of .apply(void 0, arguments))
            }
        }, {
            key: "from",
            value: function(e, t) {
                return new this(from(e, t))
            }
        }]), _createClass(t, [{
            key: "lift",
            value: function(e) {
                var r = new t(this);
                return r.operator = e, r
            }
        }, {
            key: "ofType",
            value: function() {
                return ofType.apply(void 0, arguments)(this)
            }
        }]), t
    }();

    function _classCallCheck$1(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn$1(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _inherits$1(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var StateObservable = function(e) {
            function t(e, r) {
                _classCallCheck$1(this, t);
                var n = _possibleConstructorReturn$1(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function(e) {
                    var t = n.__notifier.subscribe(e);
                    return t && !t.closed && e.next(n.value), t
                }));
                return n.value = r, n.__notifier = new Subject, n.__subscription = e.subscribe(function(e) {
                    e !== n.value && (n.value = e, n.__notifier.next(e))
                }), n
            }
            return _inherits$1(t, Observable), t
        }(),
        _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        consoleWarn = "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && "function" == typeof console.warn ? function() {
            var e;
            return (e = console).warn.apply(e, arguments)
        } : function() {};

    function createEpicMiddleware() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new(0, queueScheduler.constructor)(queueScheduler.SchedulerAction),
            r = new Subject,
            n = void 0,
            i = function(i) {
                n = i;
                var o = (new Subject).pipe(observeOn(t)),
                    s = (new Subject).pipe(observeOn(t)),
                    u = new ActionsObservable(o),
                    a = new StateObservable(s, n.getState());
                return r.pipe(map(function(t) {
                        var r = "dependencies" in e ? t(u, a, e.dependencies) : t(u, a);
                        if (!r) throw new TypeError('Your root Epic "' + (t.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                        return r
                    }), mergeMap(function(e) {
                        return from(e).pipe(subscribeOn(t), observeOn(t))
                    })).subscribe(n.dispatch),
                    function(e) {
                        return function(t) {
                            var r = e(t);
                            return s.next(n.getState()), o.next(t), r
                        }
                    }
            };
        return i.run = function(e) {
            r.next(e)
        }, i
    }

    function _toConsumableArray(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }
    var combineEpics = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            var n = function() {
                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                return merge.apply(void 0, _toConsumableArray(t.map(function(e) {
                    var t = e.apply(void 0, r);
                    if (!t) throw new TypeError('combineEpics: one of the provided Epics "' + (e.name || "<anonymous>") + "\" does not return a stream. Double check you're not missing a return statement!");
                    return t
                })))
            };
            try {
                Object.defineProperty(n, "name", {
                    value: "combineEpics(" + t.map(function(e) {
                        return e.name || "<anonymous>"
                    }).join(", ") + ")"
                })
            } catch (e) {}
            return n
        },
        trackEvent = "mutation TrackLabelingAPIEvent($name: String!, $properties: Json) {\n  track(data: { name: $name, properties: $properties }) {\n    success\n  }\n}\n",
        logRocketKey = getEnvVar("LOG_ROCKET_KEY"),
        logRocketHost = getEnvVar("LOG_ROCKET_HOST"),
        useLogRocket = function() {
            return Boolean(logRocketKey) && (void 0 === logRocketHost || "labeling-api" === logRocketHost)
        };
    if (useLogRocket()) {
        var releaseTag = getEnvVar("RELEASE_TAG"),
            releaseOptions = releaseTag ? {
                release: releaseTag
            } : {},
            options = __assign({
                rootHostname: "labelbox.com"
            }, releaseOptions);
        LogRocket.init(logRocketKey, options)
    }

    function track(e, t, r) {
        var n = e.id,
            i = e.name,
            o = e.email;
        if (void 0 === r && (r = {}), n) {
            var s = getEnvVar("SEGMENT_KEY");
            if (s) {
                var u = btoa(s + ":"),
                    a = useLogRocket() && LogRocket.sessionURL || void 0;
                window.fetch("https://api.segment.io/v1/track", {
                    body: JSON.stringify({
                        sessionURL: a,
                        event: t,
                        properties: __assign({
                            name: i,
                            email: o
                        }, r),
                        userId: n
                    }),
                    headers: {
                        Authorization: "Basic " + u,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                }).catch(function(e) {
                    debugLog("Error recording tracking event: " + e)
                })
            } else sendQuery({
                query: trackEvent,
                variables: {
                    name: t,
                    properties: r
                }
            })
        }
    }
    var identifyUser = callOnce(function(e) {
        useLogRocket() && LogRocket.identify(e.id, {
            name: e.name,
            email: e.email,
            preferDarkMode: JSON.parse(localStorage.getItem("darkTheme") || "false")
        })
    });

    function _isPlaceholder(e) {
        return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
    }

    function _curry1(e) {
        return function t(r) {
            return 0 === arguments.length || _isPlaceholder(r) ? t : e.apply(this, arguments)
        }
    }
    var always = _curry1(function(e) {
            return function() {
                return e
            }
        }),
        F = always(!1),
        T = always(!0);

    function _curry2(e) {
        return function t(r, n) {
            switch (arguments.length) {
                case 0:
                    return t;
                case 1:
                    return _isPlaceholder(r) ? t : _curry1(function(t) {
                        return e(r, t)
                    });
                default:
                    return _isPlaceholder(r) && _isPlaceholder(n) ? t : _isPlaceholder(r) ? _curry1(function(t) {
                        return e(t, n)
                    }) : _isPlaceholder(n) ? _curry1(function(t) {
                        return e(r, t)
                    }) : e(r, n)
            }
        }
    }
    var add = _curry2(function(e, t) {
        return Number(e) + Number(t)
    });

    function _concat(e, t) {
        var r;
        e = e || [], t = t || [];
        var n = e.length,
            i = t.length,
            o = [];
        for (r = 0; r < n;) o[o.length] = e[r], r += 1;
        for (r = 0; r < i;) o[o.length] = t[r], r += 1;
        return o
    }

    function _arity(e, t) {
        switch (e) {
            case 0:
                return function() {
                    return t.apply(this, arguments)
                };
            case 1:
                return function(e) {
                    return t.apply(this, arguments)
                };
            case 2:
                return function(e, r) {
                    return t.apply(this, arguments)
                };
            case 3:
                return function(e, r, n) {
                    return t.apply(this, arguments)
                };
            case 4:
                return function(e, r, n, i) {
                    return t.apply(this, arguments)
                };
            case 5:
                return function(e, r, n, i, o) {
                    return t.apply(this, arguments)
                };
            case 6:
                return function(e, r, n, i, o, s) {
                    return t.apply(this, arguments)
                };
            case 7:
                return function(e, r, n, i, o, s, u) {
                    return t.apply(this, arguments)
                };
            case 8:
                return function(e, r, n, i, o, s, u, a) {
                    return t.apply(this, arguments)
                };
            case 9:
                return function(e, r, n, i, o, s, u, a, c) {
                    return t.apply(this, arguments)
                };
            case 10:
                return function(e, r, n, i, o, s, u, a, c, l) {
                    return t.apply(this, arguments)
                };
            default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
        }
    }

    function _curryN(e, t, r) {
        return function() {
            for (var n = [], i = 0, o = e, s = 0; s < t.length || i < arguments.length;) {
                var u;
                s < t.length && (!_isPlaceholder(t[s]) || i >= arguments.length) ? u = t[s] : (u = arguments[i], i += 1), n[s] = u, _isPlaceholder(u) || (o -= 1), s += 1
            }
            return o <= 0 ? r.apply(this, n) : _arity(o, _curryN(e, n, r))
        }
    }
    var curryN = _curry2(function(e, t) {
        return 1 === e ? _curry1(t) : _arity(e, _curryN(e, [], t))
    });

    function _curry3(e) {
        return function t(r, n, i) {
            switch (arguments.length) {
                case 0:
                    return t;
                case 1:
                    return _isPlaceholder(r) ? t : _curry2(function(t, n) {
                        return e(r, t, n)
                    });
                case 2:
                    return _isPlaceholder(r) && _isPlaceholder(n) ? t : _isPlaceholder(r) ? _curry2(function(t, r) {
                        return e(t, n, r)
                    }) : _isPlaceholder(n) ? _curry2(function(t, n) {
                        return e(r, t, n)
                    }) : _curry1(function(t) {
                        return e(r, n, t)
                    });
                default:
                    return _isPlaceholder(r) && _isPlaceholder(n) && _isPlaceholder(i) ? t : _isPlaceholder(r) && _isPlaceholder(n) ? _curry2(function(t, r) {
                        return e(t, r, i)
                    }) : _isPlaceholder(r) && _isPlaceholder(i) ? _curry2(function(t, r) {
                        return e(t, n, r)
                    }) : _isPlaceholder(n) && _isPlaceholder(i) ? _curry2(function(t, n) {
                        return e(r, t, n)
                    }) : _isPlaceholder(r) ? _curry1(function(t) {
                        return e(t, n, i)
                    }) : _isPlaceholder(n) ? _curry1(function(t) {
                        return e(r, t, i)
                    }) : _isPlaceholder(i) ? _curry1(function(t) {
                        return e(r, n, t)
                    }) : e(r, n, i)
            }
        }
    }
    var _isArray = Array.isArray || function(e) {
        return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e)
    };

    function _isTransformer(e) {
        return "function" == typeof e["@@transducer/step"]
    }

    function _dispatchable(e, t, r) {
        return function() {
            if (0 === arguments.length) return r();
            var n = Array.prototype.slice.call(arguments, 0),
                i = n.pop();
            if (!_isArray(i)) {
                for (var o = 0; o < e.length;) {
                    if ("function" == typeof i[e[o]]) return i[e[o]].apply(i, n);
                    o += 1
                }
                if (_isTransformer(i)) return t.apply(null, n)(i)
            }
            return r.apply(this, arguments)
        }
    }
    var _xfBase = {
            init: function() {
                return this.xf["@@transducer/init"]()
            },
            result: function(e) {
                return this.xf["@@transducer/result"](e)
            }
        },
        max$1 = _curry2(function(e, t) {
            return t > e ? t : e
        });

    function _map(e, t) {
        for (var r = 0, n = t.length, i = Array(n); r < n;) i[r] = e(t[r]), r += 1;
        return i
    }

    function _isString(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    var _isArrayLike = _curry1(function(e) {
            return !!_isArray(e) || !!e && ("object" == typeof e && (!_isString(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && (e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)))))
        }),
        XWrap = function() {
            function e(e) {
                this.f = e
            }
            return e.prototype["@@transducer/init"] = function() {
                throw new Error("init not implemented on XWrap")
            }, e.prototype["@@transducer/result"] = function(e) {
                return e
            }, e.prototype["@@transducer/step"] = function(e, t) {
                return this.f(e, t)
            }, e
        }();

    function _xwrap(e) {
        return new XWrap(e)
    }
    var bind = _curry2(function(e, t) {
        return _arity(e.length, function() {
            return e.apply(t, arguments)
        })
    });

    function _arrayReduce(e, t, r) {
        for (var n = 0, i = r.length; n < i;) {
            if ((t = e["@@transducer/step"](t, r[n])) && t["@@transducer/reduced"]) {
                t = t["@@transducer/value"];
                break
            }
            n += 1
        }
        return e["@@transducer/result"](t)
    }

    function _iterableReduce(e, t, r) {
        for (var n = r.next(); !n.done;) {
            if ((t = e["@@transducer/step"](t, n.value)) && t["@@transducer/reduced"]) {
                t = t["@@transducer/value"];
                break
            }
            n = r.next()
        }
        return e["@@transducer/result"](t)
    }

    function _methodReduce(e, t, r, n) {
        return e["@@transducer/result"](r[n](bind(e["@@transducer/step"], e), t))
    }
    var symIterator = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";

    function _reduce(e, t, r) {
        if ("function" == typeof e && (e = _xwrap(e)), _isArrayLike(r)) return _arrayReduce(e, t, r);
        if ("function" == typeof r["fantasy-land/reduce"]) return _methodReduce(e, t, r, "fantasy-land/reduce");
        if (null != r[symIterator]) return _iterableReduce(e, t, r[symIterator]());
        if ("function" == typeof r.next) return _iterableReduce(e, t, r);
        if ("function" == typeof r.reduce) return _methodReduce(e, t, r, "reduce");
        throw new TypeError("reduce: list must be array or iterable")
    }
    var XMap = function() {
            function e(e, t) {
                this.xf = t, this.f = e
            }
            return e.prototype["@@transducer/init"] = _xfBase.init, e.prototype["@@transducer/result"] = _xfBase.result, e.prototype["@@transducer/step"] = function(e, t) {
                return this.xf["@@transducer/step"](e, this.f(t))
            }, e
        }(),
        _xmap = _curry2(function(e, t) {
            return new XMap(e, t)
        });

    function _has(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    var toString$1 = Object.prototype.toString,
        _isArguments = function() {
            return "[object Arguments]" === toString$1.call(arguments) ? function(e) {
                return "[object Arguments]" === toString$1.call(e)
            } : function(e) {
                return _has("callee", e)
            }
        },
        hasEnumBug = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        hasArgsEnumBug = function() {
            return arguments.propertyIsEnumerable("length")
        }(),
        contains = function(e, t) {
            for (var r = 0; r < e.length;) {
                if (e[r] === t) return !0;
                r += 1
            }
            return !1
        },
        _keys = "function" != typeof Object.keys || hasArgsEnumBug ? function(e) {
            if (Object(e) !== e) return [];
            var t, r, n = [],
                i = hasArgsEnumBug && _isArguments(e);
            for (t in e) !_has(t, e) || i && "length" === t || (n[n.length] = t);
            if (hasEnumBug)
                for (r = nonEnumerableProps.length - 1; r >= 0;) _has(t = nonEnumerableProps[r], e) && !contains(n, t) && (n[n.length] = t), r -= 1;
            return n
        } : function(e) {
            return Object(e) !== e ? [] : Object.keys(e)
        },
        keys = _curry1(_keys),
        map$6 = _curry2(_dispatchable(["fantasy-land/map", "map"], _xmap, function(e, t) {
            switch (Object.prototype.toString.call(t)) {
                case "[object Function]":
                    return curryN(t.length, function() {
                        return e.call(this, t.apply(this, arguments))
                    });
                case "[object Object]":
                    return _reduce(function(r, n) {
                        return r[n] = e(t[n]), r
                    }, {}, keys(t));
                default:
                    return _map(e, t)
            }
        })),
        path = _curry2(function(e, t) {
            for (var r = t, n = 0; n < e.length;) {
                if (null == r) return;
                r = r[e[n]], n += 1
            }
            return r
        }),
        prop = _curry2(function(e, t) {
            return path([e], t)
        }),
        pluck$1 = _curry2(function(e, t) {
            return map$6(prop(e), t)
        }),
        reduce$1 = _curry3(_reduce),
        ap = _curry2(function(e, t) {
            return "function" == typeof t["fantasy-land/ap"] ? t["fantasy-land/ap"](e) : "function" == typeof e.ap ? e.ap(t) : "function" == typeof e ? function(r) {
                return e(r)(t(r))
            } : _reduce(function(e, r) {
                return _concat(e, map$6(r, t))
            }, [], e)
        }),
        values = _curry1(function(e) {
            for (var t = keys(e), r = t.length, n = [], i = 0; i < r;) n[i] = e[t[i]], i += 1;
            return n
        });

    function _isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
    var liftN = _curry2(function(e, t) {
            var r = curryN(e, t);
            return curryN(e, function() {
                return _reduce(ap, map$6(r, arguments[0]), Array.prototype.slice.call(arguments, 1))
            })
        }),
        lift = _curry1(function(e) {
            return liftN(e.length, e)
        }),
        curry = _curry1(function(e) {
            return curryN(e.length, e)
        }),
        call = curry(function(e) {
            return e.apply(this, Array.prototype.slice.call(arguments, 1))
        });

    function _makeFlat(e) {
        return function t(r) {
            for (var n, i, o, s = [], u = 0, a = r.length; u < a;) {
                if (_isArrayLike(r[u]))
                    for (o = 0, i = (n = e ? t(r[u]) : r[u]).length; o < i;) s[s.length] = n[o], o += 1;
                else s[s.length] = r[u];
                u += 1
            }
            return s
        }
    }

    function _forceReduced(e) {
        return {
            "@@transducer/value": e,
            "@@transducer/reduced": !0
        }
    }
    var preservingReduced = function(e) {
            return {
                "@@transducer/init": _xfBase.init,
                "@@transducer/result": function(t) {
                    return e["@@transducer/result"](t)
                },
                "@@transducer/step": function(t, r) {
                    var n = e["@@transducer/step"](t, r);
                    return n["@@transducer/reduced"] ? _forceReduced(n) : n
                }
            }
        },
        _flatCat = function(e) {
            var t = preservingReduced(e);
            return {
                "@@transducer/init": _xfBase.init,
                "@@transducer/result": function(e) {
                    return t["@@transducer/result"](e)
                },
                "@@transducer/step": function(e, r) {
                    return _isArrayLike(r) ? _reduce(t, e, r) : _reduce(t, e, [r])
                }
            }
        },
        _xchain = _curry2(function(e, t) {
            return map$6(e, _flatCat(t))
        }),
        chain = _curry2(_dispatchable(["fantasy-land/chain", "chain"], _xchain, function(e, t) {
            return "function" == typeof t ? function(r) {
                return e(t(r))(r)
            } : _makeFlat(!1)(map$6(e, t))
        })),
        type = _curry1(function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
        }),
        not$1 = _curry1(function(e) {
            return !e
        }),
        complement = lift(not$1);

    function _pipe(e, t) {
        return function() {
            return t.call(this, e.apply(this, arguments))
        }
    }

    function _checkForMethod(e, t) {
        return function() {
            var r = arguments.length;
            if (0 === r) return t();
            var n = arguments[r - 1];
            return _isArray(n) || "function" != typeof n[e] ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1))
        }
    }
    var slice = _curry3(_checkForMethod("slice", function(e, t, r) {
            return Array.prototype.slice.call(r, e, t)
        })),
        tail = _curry1(_checkForMethod("tail", slice(1, 1 / 0)));

    function pipe$1() {
        if (0 === arguments.length) throw new Error("pipe requires at least one argument");
        return _arity(arguments[0].length, reduce$1(_pipe, arguments[0], tail(arguments)))
    }
    var reverse = _curry1(function(e) {
        return _isString(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse()
    });

    function compose$1() {
        if (0 === arguments.length) throw new Error("compose requires at least one argument");
        return pipe$1.apply(this, reverse(arguments))
    }

    function _arrayFromIterator(e) {
        for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
        return r
    }

    function _containsWith(e, t, r) {
        for (var n = 0, i = r.length; n < i;) {
            if (e(t, r[n])) return !0;
            n += 1
        }
        return !1
    }

    function _functionName(e) {
        var t = String(e).match(/^function (\w*)/);
        return null == t ? "" : t[1]
    }
    var identical = _curry2(function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    });

    function _uniqContentEquals(e, t, r, n) {
        var i = _arrayFromIterator(e);

        function o(e, t) {
            return _equals(e, t, r.slice(), n.slice())
        }
        return !_containsWith(function(e, t) {
            return !_containsWith(o, t, e)
        }, _arrayFromIterator(t), i)
    }

    function _equals(e, t, r, n) {
        if (identical(e, t)) return !0;
        var i = type(e);
        if (i !== type(t)) return !1;
        if (null == e || null == t) return !1;
        if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof t["fantasy-land/equals"]) return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
        if ("function" == typeof e.equals || "function" == typeof t.equals) return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
        switch (i) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" == typeof e.constructor && "Promise" === _functionName(e.constructor)) return e === t;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof e != typeof t || !identical(e.valueOf(), t.valueOf())) return !1;
                break;
            case "Date":
                if (!identical(e.valueOf(), t.valueOf())) return !1;
                break;
            case "Error":
                return e.name === t.name && e.message === t.message;
            case "RegExp":
                if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) return !1
        }
        for (var o = r.length - 1; o >= 0;) {
            if (r[o] === e) return n[o] === t;
            o -= 1
        }
        switch (i) {
            case "Map":
                return e.size === t.size && _uniqContentEquals(e.entries(), t.entries(), r.concat([e]), n.concat([t]));
            case "Set":
                return e.size === t.size && _uniqContentEquals(e.values(), t.values(), r.concat([e]), n.concat([t]));
            case "Arguments":
            case "Array":
            case "Object":
            case "Boolean":
            case "Number":
            case "String":
            case "Date":
            case "Error":
            case "RegExp":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "ArrayBuffer":
                break;
            default:
                return !1
        }
        var s = keys(e);
        if (s.length !== keys(t).length) return !1;
        var u = r.concat([e]),
            a = n.concat([t]);
        for (o = s.length - 1; o >= 0;) {
            var c = s[o];
            if (!_has(c, t) || !_equals(t[c], e[c], u, a)) return !1;
            o -= 1
        }
        return !0
    }
    var equals = _curry2(function(e, t) {
        return _equals(e, t, [], [])
    });

    function _indexOf(e, t, r) {
        var n, i;
        if ("function" == typeof e.indexOf) switch (typeof t) {
            case "number":
                if (0 === t) {
                    for (n = 1 / t; r < e.length;) {
                        if (0 === (i = e[r]) && 1 / i === n) return r;
                        r += 1
                    }
                    return -1
                }
                if (t != t) {
                    for (; r < e.length;) {
                        if ("number" == typeof(i = e[r]) && i != i) return r;
                        r += 1
                    }
                    return -1
                }
                return e.indexOf(t, r);
            case "string":
            case "boolean":
            case "function":
            case "undefined":
                return e.indexOf(t, r);
            case "object":
                if (null === t) return e.indexOf(t, r)
        }
        for (; r < e.length;) {
            if (equals(e[r], t)) return r;
            r += 1
        }
        return -1
    }

    function _contains(e, t) {
        return _indexOf(t, e, 0) >= 0
    }

    function _quote(e) {
        return '"' + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"'
    }
    var pad = function(e) {
            return (e < 10 ? "0" : "") + e
        },
        _toISOString = "function" == typeof Date.prototype.toISOString ? function(e) {
            return e.toISOString()
        } : function(e) {
            return e.getUTCFullYear() + "-" + pad(e.getUTCMonth() + 1) + "-" + pad(e.getUTCDate()) + "T" + pad(e.getUTCHours()) + ":" + pad(e.getUTCMinutes()) + ":" + pad(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        };

    function _complement(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }

    function _filter(e, t) {
        for (var r = 0, n = t.length, i = []; r < n;) e(t[r]) && (i[i.length] = t[r]), r += 1;
        return i
    }

    function _isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var XFilter = function() {
            function e(e, t) {
                this.xf = t, this.f = e
            }
            return e.prototype["@@transducer/init"] = _xfBase.init, e.prototype["@@transducer/result"] = _xfBase.result, e.prototype["@@transducer/step"] = function(e, t) {
                return this.f(t) ? this.xf["@@transducer/step"](e, t) : e
            }, e
        }(),
        _xfilter = _curry2(function(e, t) {
            return new XFilter(e, t)
        }),
        filter$6 = _curry2(_dispatchable(["filter"], _xfilter, function(e, t) {
            return _isObject(t) ? _reduce(function(r, n) {
                return e(t[n]) && (r[n] = t[n]), r
            }, {}, keys(t)) : _filter(e, t)
        })),
        reject = _curry2(function(e, t) {
            return filter$6(_complement(e), t)
        });

    function _toString(e, t) {
        var r = function(r) {
                var n = t.concat([e]);
                return _contains(r, n) ? "<Circular>" : _toString(r, n)
            },
            n = function(e, t) {
                return _map(function(t) {
                    return _quote(t) + ": " + r(e[t])
                }, t.slice().sort())
            };
        switch (Object.prototype.toString.call(e)) {
            case "[object Arguments]":
                return "(function() { return arguments; }(" + _map(r, e).join(", ") + "))";
            case "[object Array]":
                return "[" + _map(r, e).concat(n(e, reject(function(e) {
                    return /^\d+$/.test(e)
                }, keys(e)))).join(", ") + "]";
            case "[object Boolean]":
                return "object" == typeof e ? "new Boolean(" + r(e.valueOf()) + ")" : e.toString();
            case "[object Date]":
                return "new Date(" + (isNaN(e.valueOf()) ? r(NaN) : _quote(_toISOString(e))) + ")";
            case "[object Null]":
                return "null";
            case "[object Number]":
                return "object" == typeof e ? "new Number(" + r(e.valueOf()) + ")" : 1 / e == -1 / 0 ? "-0" : e.toString(10);
            case "[object String]":
                return "object" == typeof e ? "new String(" + r(e.valueOf()) + ")" : _quote(e);
            case "[object Undefined]":
                return "undefined";
            default:
                if ("function" == typeof e.toString) {
                    var i = e.toString();
                    if ("[object Object]" !== i) return i
                }
                return "{" + n(e, keys(e)).join(", ") + "}"
        }
    }
    var toString$2 = _curry1(function(e) {
            return _toString(e, [])
        }),
        converge = _curry2(function(e, t) {
            return curryN(reduce$1(max$1, 0, pluck$1("length", t)), function() {
                var r = arguments,
                    n = this;
                return e.apply(n, _map(function(e) {
                    return e.apply(n, r)
                }, t))
            })
        }),
        XReduceBy = function() {
            function e(e, t, r, n) {
                this.valueFn = e, this.valueAcc = t, this.keyFn = r, this.xf = n, this.inputs = {}
            }
            return e.prototype["@@transducer/init"] = _xfBase.init, e.prototype["@@transducer/result"] = function(e) {
                var t;
                for (t in this.inputs)
                    if (_has(t, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[t]))["@@transducer/reduced"]) {
                        e = e["@@transducer/value"];
                        break
                    } return this.inputs = null, this.xf["@@transducer/result"](e)
            }, e.prototype["@@transducer/step"] = function(e, t) {
                var r = this.keyFn(t);
                return this.inputs[r] = this.inputs[r] || [r, this.valueAcc], this.inputs[r][1] = this.valueFn(this.inputs[r][1], t), e
            }, e
        }(),
        _xreduceBy = _curryN(4, [], function(e, t, r, n) {
            return new XReduceBy(e, t, r, n)
        }),
        reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function(e, t, r, n) {
            return _reduce(function(n, i) {
                var o = r(i);
                return n[o] = e(_has(o, n) ? n[o] : t, i), n
            }, {}, n)
        })),
        countBy = reduceBy(function(e, t) {
            return e + 1
        }, 0),
        dec = add(-1),
        XDropRepeatsWith = function() {
            function e(e, t) {
                this.xf = t, this.pred = e, this.lastValue = void 0, this.seenFirstValue = !1
            }
            return e.prototype["@@transducer/init"] = _xfBase.init, e.prototype["@@transducer/result"] = _xfBase.result, e.prototype["@@transducer/step"] = function(e, t) {
                var r = !1;
                return this.seenFirstValue ? this.pred(this.lastValue, t) && (r = !0) : this.seenFirstValue = !0, this.lastValue = t, r ? e : this.xf["@@transducer/step"](e, t)
            }, e
        }(),
        _xdropRepeatsWith = _curry2(function(e, t) {
            return new XDropRepeatsWith(e, t)
        }),
        nth = _curry2(function(e, t) {
            var r = e < 0 ? t.length + e : e;
            return _isString(t) ? t.charAt(r) : t[r]
        }),
        last$1 = nth(-1),
        dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function(e, t) {
            var r = [],
                n = 1,
                i = t.length;
            if (0 !== i)
                for (r[0] = t[0]; n < i;) e(last$1(r), t[n]) || (r[r.length] = t[n]), n += 1;
            return r
        })),
        dropRepeats = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals))),
        flip = _curry1(function(e) {
            return curryN(e.length, function(t, r) {
                var n = Array.prototype.slice.call(arguments, 0);
                return n[0] = r, n[1] = t, e.apply(this, n)
            })
        }),
        groupBy$1 = _curry2(_checkForMethod("groupBy", reduceBy(function(e, t) {
            return null == e && (e = []), e.push(t), e
        }, null))),
        head = nth(0);

    function _identity(e) {
        return e
    }
    var identity$1 = _curry1(_identity),
        inc = add(1),
        indexBy = reduceBy(function(e, t) {
            return t
        }, null),
        init = slice(0, -1),
        _Set = function() {
            function e() {
                this._nativeSet = "function" == typeof Set ? new Set : null, this._items = {}
            }
            return e.prototype.add = function(e) {
                return !hasOrAdd(e, !0, this)
            }, e.prototype.has = function(e) {
                return hasOrAdd(e, !1, this)
            }, e
        }();

    function hasOrAdd(e, t, r) {
        var n, i = typeof e;
        switch (i) {
            case "string":
            case "number":
                return 0 === e && 1 / e == -1 / 0 ? !!r._items["-0"] || (t && (r._items["-0"] = !0), !1) : null !== r._nativeSet ? t ? (n = r._nativeSet.size, r._nativeSet.add(e), r._nativeSet.size === n) : r._nativeSet.has(e) : i in r._items ? e in r._items[i] || (t && (r._items[i][e] = !0), !1) : (t && (r._items[i] = {}, r._items[i][e] = !0), !1);
            case "boolean":
                if (i in r._items) {
                    var o = e ? 1 : 0;
                    return !!r._items[i][o] || (t && (r._items[i][o] = !0), !1)
                }
                return t && (r._items[i] = e ? [!1, !0] : [!0, !1]), !1;
            case "function":
                return null !== r._nativeSet ? t ? (n = r._nativeSet.size, r._nativeSet.add(e), r._nativeSet.size === n) : r._nativeSet.has(e) : i in r._items ? !!_contains(e, r._items[i]) || (t && r._items[i].push(e), !1) : (t && (r._items[i] = [e]), !1);
            case "undefined":
                return !!r._items[i] || (t && (r._items[i] = !0), !1);
            case "object":
                if (null === e) return !!r._items.null || (t && (r._items.null = !0), !1);
            default:
                return (i = Object.prototype.toString.call(e)) in r._items ? !!_contains(e, r._items[i]) || (t && r._items[i].push(e), !1) : (t && (r._items[i] = [e]), !1)
        }
    }
    var uniqBy = _curry2(function(e, t) {
            for (var r, n, i = new _Set, o = [], s = 0; s < t.length;) r = e(n = t[s]), i.add(r) && o.push(n), s += 1;
            return o
        }),
        uniq = uniqBy(identity$1),
        invoker = _curry2(function(e, t) {
            return curryN(e + 1, function() {
                var r = arguments[e];
                if (null != r && _isFunction(r[t])) return r[t].apply(r, Array.prototype.slice.call(arguments, 0, e));
                throw new TypeError(toString$2(r) + ' does not have a method named "' + t + '"')
            })
        }),
        join = invoker(1, "join"),
        juxt = _curry1(function(e) {
            return converge(function() {
                return Array.prototype.slice.call(arguments, 0)
            }, e)
        }),
        sum = reduce$1(add, 0),
        memoizeWith = _curry2(function(e, t) {
            var r = {};
            return _arity(t.length, function() {
                var n = e.apply(this, arguments);
                return _has(n, r) || (r[n] = t.apply(this, arguments)), r[n]
            })
        }),
        memoize = memoizeWith(function() {
            return toString$2(arguments)
        }),
        multiply = _curry2(function(e, t) {
            return e * t
        });

    function _createPartialApplicator(e) {
        return _curry2(function(t, r) {
            return _arity(Math.max(0, t.length - r.length), function() {
                return t.apply(this, e(r, arguments))
            })
        })
    }
    var partialRight = _createPartialApplicator(flip(_concat)),
        partition$2 = juxt([filter$6, reject]),
        pickAll = _curry2(function(e, t) {
            for (var r = {}, n = 0, i = e.length; n < i;) {
                var o = e[n];
                r[o] = t[o], n += 1
            }
            return r
        }),
        product = reduce$1(multiply, 1),
        useWith = _curry2(function(e, t) {
            return curryN(t.length, function() {
                for (var r = [], n = 0; n < t.length;) r.push(t[n].call(this, arguments[n])), n += 1;
                return e.apply(this, r.concat(Array.prototype.slice.call(arguments, t.length)))
            })
        }),
        project = useWith(_map, [pickAll, identity$1]),
        split = invoker(1, "split"),
        toLower = invoker(0, "toLowerCase"),
        toUpper = invoker(0, "toUpperCase"),
        transduce = curryN(4, function(e, t, r, n) {
            return _reduce(e("function" == typeof t ? _xwrap(t) : t), r, n)
        }),
        ws = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
        zeroWidth = "​",
        hasProtoTrim = "function" == typeof String.prototype.trim,
        _trim = hasProtoTrim && !ws.trim() && zeroWidth.trim() ? function(e) {
            return e.trim()
        } : function(e) {
            var t = new RegExp("^[" + ws + "][" + ws + "]*"),
                r = new RegExp("[" + ws + "][" + ws + "]*$");
            return e.replace(t, "").replace(r, "")
        },
        union = _curry2(compose$1(uniq, _concat)),
        unnest = chain(_identity),
        activePredictionModel = "query GetProjectPredictionModel($projectId: ID!) {\n  project(where: { id: $projectId }) {\n    id\n    activePredictionModel {\n      id\n    }\n  }\n}\n",
        getProjectPredictionModelId = memoize(function(e) {
            return sendQuery({
                query: activePredictionModel,
                variables: {
                    projectId: e
                }
            }).then(function(e) {
                var t = e && e.data && e.data.project && e.data.project;
                return t && t.activePredictionModel && t.activePredictionModel.id
            })
        }),
        selectAsset = function(e, t) {
            return void 0 === t && (t = ""), e.assets[t]
        },
        selectProjectId = function(e) {
            return e.projectId
        },
        selectCurrentAssetId = function(e) {
            return e.currentAsset && e.currentAsset.id
        },
        selectCurrentAsset = function(e) {
            return selectAsset(e, selectCurrentAssetId(e))
        },
        selectCurrentAssetLabelId = function(e) {
            return (selectCurrentAsset(e) || {}).labelId
        },
        whitelistCurrentAssetForDeveloper = function(e) {
            return e && {
                id: e.id,
                dataRowId: e.datarowId,
                data: e.data,
                label: e.label,
                previous: e.previousLabelId,
                next: e.nextLabelId,
                createdAt: e.createdAt,
                createdBy: e.createdBy,
                typeName: e.typeName,
                labelTemplateId: e.labelTemplateId,
                labelTemplates: e.labelTemplates || void 0,
                externalId: e.externalId,
                metadata: e.metadata,
                template: e.template,
                logId: e.logId
            }
        },
        selectUnlabeledAsset = function(e) {
            return values(e.assets).filter(function(e) {
                var t = e.label,
                    r = e.labelBeingSaved;
                return void 0 === t && !r
            }).sort(function(e, t) {
                return e.fetchedAt - t.fetchedAt
            })
        },
        selectNextAssetIdToLabel = function(e) {
            var t = selectUnlabeledAsset(e)[0];
            return t ? t.id : void 0
        },
        shouldPreloadNewAsset = function(e) {
            return selectUnlabeledAsset(e).length < 2
        },
        selectCurrentAssetStartTime = function(e) {
            return e.currentAsset ? e.currentAsset.startTime : void 0
        },
        selectUser = function(e) {
            return e.user
        },
        hasPreviousAssetId = function(e) {
            return Boolean(e.currentAssetHistory[0])
        },
        selectRecommendTemplateId = function(e) {
            var t = e.labelTemplates,
                r = e.activePredictionModelId,
                n = t && t.find(function(e) {
                    var t = e.predictionModel;
                    return Boolean(t && t.id === r)
                });
            if (n) return n.id;
            var i = t && t.find(function(e) {
                var t = e.predictionModel;
                return !Boolean(t)
            });
            return i ? i.id : void 0
        },
        Mode, ACTION_NAMES;
    ! function(e) {
        e.Reviewing = "Reviewing", e.Labeling = "Labeling"
    }(Mode || (Mode = {})),
    function(e) {
        e.SET_MODE = "SET_MODE", e.LABEL_SUBMITTED = "LABEL_SUBMITTED", e.ASSET_FETCHED = "ASSET_FETCHED_SUCCESSFULLY", e.STARTED_FETCHING_ASSET = "STARTED_FETCHING_ASSET", e.ASSET_FETCH_FAILED = "ASSET_FETCH_FAILED", e.APPLICATION_INIT = "APPLICATION_INIT", e.USER_FETCHED_FROM_SERVER = "USER_FETCHED_FROM_SERVER", e.USER_CREATED_LABEL = "USER_CREATED_LABEL", e.LABEL_SAVE_SUCCESS = "LABEL_SAVE_SUCCESS", e.USER_REQUESTED_PREVIOUS_LABEL = "USER_REQUESTED_PREVIOUS_LABEL", e.USER_REQUESTED_NEXT_LABEL = "USER_REQUESTED_NEXT_LABEL", e.LABEL_HISTORY_FETCHED = "LABEL_HISTORY_FETCHED", e.SET_LABEL_AS_CURRENT_ASSET = "SET_LABEL_AS_CURRENT_ASSET", e.NO_MORE_ITEMS_TO_LABEL = "NO_MORE_ITEMS_TO_LABEL", e.SET_LAST_CURRENT_ASSET = "SET_LAST_CURRENT_ASSET", e.USER_REQUESTED_NEXT_UNLABELED_ASSET = "USER_REQUESTED_NEXT_UNLABELED_ASSET", e.ASSET_PRELOADED = "ASSET_PRELOADED", e.FETCH_ASSET = "FETCH_ASSET", e.STATE_INVALID_FOR_LABELING = "STATE_INVALID_FOR_LABELING", e.FAILED_TO_SAVE_LABEL = "FAILED_TO_SAVE_LABEL", e.FAILED_TO_EXTEND_RESERVATIONS = "FAILED_TO_EXTEND_RESERVATIONS", e.RESERVATIONS_EXTENDED = "RESERVATIONS_EXTENDED", e.UPDATE_CUSTOMIZATION_OPTIONS = "UPDATE_CUSTOMIZATION_OPTIONS", e.ASSET_MARKED_AS_LABELED = "ASSET_MARKED_AS_LABELED"
    }(ACTION_NAMES || (ACTION_NAMES = {}));
    var setNewCurrentAsset = function(e, t) {
            return __assign({}, e, {
                currentAsset: t,
                currentAssetHistory: [t].concat(e.currentAssetHistory)
            })
        },
        defaultState = {
            currentAsset: void 0,
            currentAssetHistory: [],
            assets: {},
            preloading: !1,
            error: null,
            mode: Mode.Labeling
        };

    function reducer(e, t) {
        var r, n, i, o, s;
        void 0 === e && (e = defaultState);
        var u = t || {},
            a = u.type,
            c = void 0 === a ? void 0 : a,
            l = u.payload,
            f = void 0 === l ? void 0 : l;
        switch (c) {
            case ACTION_NAMES.SET_MODE:
                return f.mode !== e.mode ? __assign({}, e, {
                    mode: f.mode
                }) : e;
            case ACTION_NAMES.ASSET_FETCHED:
                var p = f.startTime ? setNewCurrentAsset(e, {
                    id: f.asset.id,
                    startTime: f.startTime
                }) : e;
                return __assign({}, p, {
                    fetchingAssetId: f.asset.labelId === e.fetchingAssetId ? void 0 : e.fetchingAssetId,
                    assets: __assign({}, e.assets, (r = {}, r[f.asset.id] = f.asset, r))
                });
            case ACTION_NAMES.STARTED_FETCHING_ASSET:
                return __assign({}, e, {
                    fetchingAssetId: f
                });
            case ACTION_NAMES.ASSET_FETCH_FAILED:
                return __assign({}, e, {
                    fetchingAssetId: e.fetchingAssetId === f ? void 0 : e.fetchingAssetId
                });
            case ACTION_NAMES.LABEL_SUBMITTED:
                return __assign({}, e, {
                    error: null
                });
            case ACTION_NAMES.STATE_INVALID_FOR_LABELING:
                return console.error("An error occurred prepping for label submission."), __assign({}, e, {
                    error: __assign({}, e.error, {
                        invalidState: f.message
                    })
                });
            case ACTION_NAMES.ASSET_MARKED_AS_LABELED:
                var d = selectCurrentAsset(e);
                if (!d) return console.warn("Called set as labeled with no current asset"), e;
                var h = d.id,
                    b = e.assets[h];
                return (b.label || b.labelId) && console.warn("Asset is already marked as label"), b.labelId !== f.labelId && console.warn("Existing label has been replaced with a new label"), __assign({}, e, {
                    assets: __assign({}, e.assets, (n = {}, n[h] = __assign({}, b, {
                        label: f.label,
                        labelId: f.labelId,
                        typeName: f.typeName
                    }), n))
                });
            case ACTION_NAMES.FAILED_TO_SAVE_LABEL:
                return console.error("An error occurred saving the label"), __assign({}, e, {
                    error: __assign({}, e.error, {
                        savingLabel: f.error.errors
                    })
                });
            case ACTION_NAMES.APPLICATION_INIT:
                var y = f.projectId,
                    v = f.token;
                return __assign({}, e, {
                    projectId: y,
                    token: v
                });
            case ACTION_NAMES.USER_FETCHED_FROM_SERVER:
                return __assign({}, e, {
                    user: f.user
                });
            case ACTION_NAMES.LABEL_SAVE_SUCCESS:
                return __assign({}, e, {
                    assets: __assign({}, e.assets, (i = {}, i[f.assetId] = __assign({}, e.assets[f.assetId], {
                        label: f.label,
                        labelBeingSaved: !1,
                        labelId: f.labelId,
                        typeName: f.typeName,
                        createdAt: f.createdAt,
                        createdBy: e.user.email
                    }), i))
                });
            case ACTION_NAMES.UPDATE_CUSTOMIZATION_OPTIONS:
                return __assign({}, e, {
                    customizationOptions: f.customizationOptions
                });
            case ACTION_NAMES.LABEL_HISTORY_FETCHED:
                return __assign({}, e, {
                    assets: __assign({}, e.assets, (o = {}, o[f.assetId] = __assign({}, e.assets[f.assetId], {
                        previousLabelId: f.previousId,
                        nextLabelId: f.nextId
                    }), o))
                });
            case ACTION_NAMES.NO_MORE_ITEMS_TO_LABEL:
                return __assign({}, e, {
                    currentAsset: e.currentAssetHistory[0]
                });
            case ACTION_NAMES.USER_REQUESTED_NEXT_UNLABELED_ASSET:
                var m = selectNextAssetIdToLabel(e);
                if (m) {
                    var _ = e.currentAssetHistory.find(function(e) {
                        var t = e.id;
                        return m === t
                    });
                    return setNewCurrentAsset(e, __assign({}, _ || {
                        id: m
                    }, {
                        startTime: (new Date).getTime()
                    }))
                }
                return __assign({}, e, {
                    currentAsset: void 0
                });
            case ACTION_NAMES.USER_CREATED_LABEL:
                return __assign({}, e, {
                    assets: __assign({}, e.assets, (s = {}, s[f.assetId] = __assign({}, e.assets[f.assetId], {
                        labelBeingSaved: !0
                    }), s))
                });
            case ACTION_NAMES.SET_LABEL_AS_CURRENT_ASSET:
                return __assign({}, e, {
                    currentAsset: void 0
                });
            default:
                return e
        }
    }
    var appInit = function(e) {
            var t = e.projectId,
                r = e.token,
                n = e.labelId;
            return {
                type: ACTION_NAMES.APPLICATION_INIT,
                payload: {
                    projectId: t,
                    token: r,
                    labelId: n
                }
            }
        },
        setMode = function(e) {
            return {
                type: ACTION_NAMES.SET_MODE,
                payload: {
                    mode: e
                }
            }
        },
        assetFetched = function(e, t) {
            return void 0 === t && (t = !1), {
                type: ACTION_NAMES.ASSET_FETCHED,
                payload: __assign({
                    asset: e,
                    current: t
                }, t ? {
                    startTime: (new Date).getTime()
                } : {})
            }
        },
        startedFetchingAsset = function(e) {
            return {
                type: ACTION_NAMES.STARTED_FETCHING_ASSET,
                payload: e
            }
        },
        assetFetchFailed = function(e) {
            return {
                type: ACTION_NAMES.ASSET_FETCH_FAILED,
                payload: e
            }
        },
        userFetchedFromServer = function(e) {
            return {
                type: ACTION_NAMES.USER_FETCHED_FROM_SERVER,
                payload: {
                    user: e
                }
            }
        },
        userRequestNextUnlabeledAsset = function() {
            return {
                type: ACTION_NAMES.USER_REQUESTED_NEXT_UNLABELED_ASSET,
                payload: {}
            }
        },
        failedToExtendReservations = function() {
            return {
                type: ACTION_NAMES.FAILED_TO_EXTEND_RESERVATIONS,
                payload: {}
            }
        },
        reservationsExtended = function() {
            return {
                type: ACTION_NAMES.RESERVATIONS_EXTENDED,
                payload: {}
            }
        },
        setCustomizationOptions = function(e) {
            return {
                type: ACTION_NAMES.UPDATE_CUSTOMIZATION_OPTIONS,
                payload: {
                    customizationOptions: e
                }
            }
        },
        labelChangeSuccess = function(e, t, r, n, i) {
            return {
                type: ACTION_NAMES.LABEL_SAVE_SUCCESS,
                payload: {
                    assetId: e,
                    label: t,
                    labelId: r,
                    typeName: n,
                    createdAt: i
                }
            }
        },
        setLabelAsCurrentAsset$1 = function(e) {
            return {
                type: ACTION_NAMES.SET_LABEL_AS_CURRENT_ASSET,
                payload: {
                    labelId: e
                }
            }
        },
        labelHistorySuccessfullyFetchedForAsset = function(e, t, r) {
            return {
                type: ACTION_NAMES.LABEL_HISTORY_FETCHED,
                payload: {
                    assetId: e,
                    previousId: t,
                    nextId: r
                }
            }
        },
        noMoreItemsToLabel = function() {
            return {
                type: ACTION_NAMES.NO_MORE_ITEMS_TO_LABEL,
                payload: {}
            }
        },
        assetPreloaded = function(e) {
            return {
                type: ACTION_NAMES.ASSET_PRELOADED,
                payload: {
                    assetId: e
                }
            }
        },
        fetchAsset = function(e) {
            var t = e.setAsCurrent;
            return {
                type: ACTION_NAMES.FETCH_ASSET,
                payload: {
                    setAsCurrent: t
                }
            }
        },
        labelSubmitted = function(e) {
            return {
                type: ACTION_NAMES.LABEL_SUBMITTED,
                payload: e
            }
        },
        assetMarkedAsLabeled = function(e) {
            return {
                type: ACTION_NAMES.ASSET_MARKED_AS_LABELED,
                payload: e
            }
        },
        setNode, bodyNode$ = new Promise(function(e) {
            return setNode = e
        });

    function getBodyNode() {
        return bodyNode$
    }
    window.addEventListener("load", function() {
        return setNode(document.body)
    });
    var sendMessage = callOnce(function(e) {
            getBodyNode().then(function(t) {
                t.innerHTML = e
            })
        }),
        getLabeledAssetQuery = "query GetLabeledAsset($labelId: ID!) {\n  label(where: { id: $labelId }) {\n    id\n    label\n    createdAt\n    project {\n      id\n    }\n    createdBy {\n      email\n    }\n    dataRow {\n      id\n      rowData\n      externalId\n      skippedBy {\n        id\n      }\n      metadata {\n        id\n        metaType\n        metaValue\n      }\n    }\n    eventLog {\n      id\n    }\n    type {\n      id\n      name\n    }\n  }\n}\n";

    function fetchLabeledAsset(e) {
        return sendQuery({
            query: getLabeledAssetQuery,
            variables: {
                labelId: e
            }
        }).then(function(e) {
            var t = e && e.data.label;
            if (t) return {
                id: t.id,
                datarowId: t.dataRow.id,
                data: t.dataRow.rowData,
                label: t.label,
                labelId: t.id,
                externalId: t.dataRow.externalId,
                createdAt: t.createdAt,
                createdBy: t.createdBy.email,
                typeName: t.type.name,
                metadata: t.dataRow.metadata,
                projectId: t.project.id,
                logId: t.eventLog && t.eventLog.id
            }
        })
    }
    var getNextRow = "query GetNextRow($projectId: ID!, $dataRowIdsToSkip: [ID!]!) {\n  nextDataRowToLabel(\n    projectId: $projectId\n    dataRowIdsToSkip: $dataRowIdsToSkip\n  ) {\n    id\n    rowData\n    externalId\n    labelTemplates {\n      id\n      label\n      predictionModel {\n        id\n      }\n    }\n    metadata {\n      id\n      metaType\n      metaValue\n    }\n    eventLog {\n      id\n    }\n    template {\n      ... on LabelTemplate {\n        id\n        __typename\n        sourceLabel {\n          id\n          label\n        }\n      }\n    }\n  }\n}\n",
        Errors;
    ! function(e) {
        e.LOGIN = "Please Login", e.UNAUTHORIZED = "Unauthorized", e.NOT_FOUND = "Project not found", e.NO_MORE_LABELS = "NO_MORE_LABELS", e.SKIP_CHECKOUT = "Checkout disabled"
    }(Errors || (Errors = {}));
    var getNextRowToLabel = function(e) {
        var t = e.projectId,
            r = e.dataRowIdsToSkip,
            n = void 0 === r ? [] : r;
        return "false" === new URL(window.location.href).searchParams.get("checkout") ? Promise.reject(Errors.SKIP_CHECKOUT) : new Promise(function(e, r) {
            sendQuery({
                query: getNextRow,
                variables: {
                    projectId: t,
                    dataRowIdsToSkip: n
                }
            }).then(function(t) {
                if (!t) return r(Errors.UNAUTHORIZED);
                if (t.errors) {
                    if (t.errors.some(function(e) {
                            return 3008 === e.code
                        })) return r(Errors.UNAUTHORIZED);
                    var n = t.errors[0] && t.errors[0].functionError;
                    return "Unauthorized" === n ? r(Errors.UNAUTHORIZED) : "Project not found" === n ? r(Errors.NOT_FOUND) : "Please Login" === n ? r(Errors.LOGIN) : (console.error("Unknown error for getNextRow", JSON.stringify(t.errors)), r(Errors.UNAUTHORIZED))
                }
                var i = t.data.nextDataRowToLabel;
                if (!i) return r(Errors.NO_MORE_LABELS);
                var o = i.id,
                    s = i.rowData,
                    u = i.labelTemplates,
                    a = i.externalId,
                    c = i.metadata,
                    l = i.template,
                    f = i.eventLog;
                e({
                    id: o,
                    rowData: s,
                    labelTemplates: u,
                    externalId: a,
                    metadata: c,
                    labelLog: f && f.id,
                    template: l && "Prediction" === l.__typename ? null : l
                })
            })
        })
    };

    function onInitEffects(e, t) {
        var r = e.projectId,
            n = e.token;
        0 === window.location.href.indexOf("file://") ? sendMessage('\n      Please open this file in a local server.<br><br>\n      If you look at the url it says "file://" and your browser won\'t let you communicate with the Labelbox server.<br></br>\n      Dont worry this is easy to fix!<br><br>\n\n      If your on chrome you can install <a href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en">this extension</a> and then select this folder.<br></br>\n\n      OR<br></br>\n\n      You can also start a local server via the command line. "python -m SimpleHTTPServer" or "npm install -g http-server; http-server -p 8080"\n    ') : r ? n || window.location.assign(labelboxDomain + "/signin?redirect_project=" + r) : window.location.assign(labelboxDomain + "/signin?development_url=" + window.location.href.split("?")[0]), window.addEventListener("message", function(e) {
            var r = e.data;
            if (r) {
                var n = r.changeLabel,
                    i = r.mode;
                n && t(setLabelAsCurrentAsset$1(n)), i && t(setMode(i))
            }
        }), window.top && window.top.postMessage && window.top.postMessage({
            status: "ready-for-commands"
        }, "*")
    }
    var getProjectQueueStatus = "query GetProjectQueueState($projectId: ID!) {\n  project(where: { id: $projectId }) {\n    id\n    queueIsBuilding\n  }\n}\n";

    function isQueueBuilt(e) {
        return sendQuery({
            query: getProjectQueueStatus,
            variables: {
                projectId: e
            }
        }).then(function(e) {
            return e && e.data && e.data.project ? !Boolean(e.data.project.queueIsBuilding) : (console.log("Project not found", e), !1)
        })
    }

    function resolveWhenQueueIsBuilt(e, t, r) {
        var n = this;
        return void 0 === r && (r = 0), isQueueBuilt(e).then(function(i) {
            return __awaiter(n, void 0, void 0, function() {
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return i ? [2, i] : (r % 10 == 0 && track(t, "Queue is stuck building", {
                                sla: !0,
                                description: "ProjectId: " + e
                            }), 4 === r && track(t, "Queue is slow to build", {
                                frustration: !0,
                                description: "ProjectId: " + e
                            }), [4, wait(3e3)]);
                        case 1:
                            return n.sent(), [2, resolveWhenQueueIsBuilt(e, t, r + 1)]
                    }
                })
            })
        })
    }
    var sweetalert_min = createCommonjsModule(function(module, exports) {
            module.exports = function() {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var i = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 8)
                }([function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = "swal-button";
                    t.CLASS_NAMES = {
                        MODAL: "swal-modal",
                        OVERLAY: "swal-overlay",
                        SHOW_MODAL: "swal-overlay--show-modal",
                        MODAL_TITLE: "swal-title",
                        MODAL_TEXT: "swal-text",
                        ICON: "swal-icon",
                        ICON_CUSTOM: "swal-icon--custom",
                        CONTENT: "swal-content",
                        FOOTER: "swal-footer",
                        BUTTON_CONTAINER: "swal-button-container",
                        BUTTON: n,
                        CONFIRM_BUTTON: n + "--confirm",
                        CANCEL_BUTTON: n + "--cancel",
                        DANGER_BUTTON: n + "--danger",
                        BUTTON_LOADING: n + "--loading",
                        BUTTON_LOADER: n + "__loader"
                    }, t.default = t.CLASS_NAMES
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.getNode = function(e) {
                        var t = "." + e;
                        return document.querySelector(t)
                    }, t.stringToNode = function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e.trim(), t.firstChild
                    }, t.insertAfter = function(e, t) {
                        var r = t.nextSibling;
                        t.parentNode.insertBefore(e, r)
                    }, t.removeNode = function(e) {
                        e.parentElement.removeChild(e)
                    }, t.throwErr = function(e) {
                        throw "SweetAlert: " + (e = (e = e.replace(/ +(?= )/g, "")).trim())
                    }, t.isPlainObject = function(e) {
                        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                        var t = Object.getPrototypeOf(e);
                        return null === t || t === Object.prototype
                    }, t.ordinalSuffixOf = function(e) {
                        var t = e % 10,
                            r = e % 100;
                        return 1 === t && 11 !== r ? e + "st" : 2 === t && 12 !== r ? e + "nd" : 3 === t && 13 !== r ? e + "rd" : e + "th"
                    }
                }, function(e, t, r) {
                    function n(e) {
                        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), n(r(25));
                    var i = r(26);
                    t.overlayMarkup = i.default, n(r(27)), n(r(28)), n(r(29));
                    var o = r(0),
                        s = o.default.MODAL_TITLE,
                        u = o.default.MODAL_TEXT,
                        a = o.default.ICON,
                        c = o.default.FOOTER;
                    t.iconMarkup = '\n  <div class="' + a + '"></div>', t.titleMarkup = '\n  <div class="' + s + '"></div>\n', t.textMarkup = '\n  <div class="' + u + '"></div>', t.footerMarkup = '\n  <div class="' + c + '"></div>\n'
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1);
                    t.CONFIRM_KEY = "confirm", t.CANCEL_KEY = "cancel";
                    var i = {
                            visible: !0,
                            text: null,
                            value: null,
                            className: "",
                            closeModal: !0
                        },
                        o = Object.assign({}, i, {
                            visible: !1,
                            text: "Cancel",
                            value: null
                        }),
                        s = Object.assign({}, i, {
                            text: "OK",
                            value: !0
                        });
                    t.defaultButtonList = {
                        cancel: o,
                        confirm: s
                    };
                    var u = function(e) {
                            switch (e) {
                                case t.CONFIRM_KEY:
                                    return s;
                                case t.CANCEL_KEY:
                                    return o;
                                default:
                                    var r = e.charAt(0).toUpperCase() + e.slice(1);
                                    return Object.assign({}, i, {
                                        text: r,
                                        value: e
                                    })
                            }
                        },
                        a = function(e, t) {
                            var r = u(e);
                            return !0 === t ? Object.assign({}, r, {
                                visible: !0
                            }) : "string" == typeof t ? Object.assign({}, r, {
                                visible: !0,
                                text: t
                            }) : n.isPlainObject(t) ? Object.assign({
                                visible: !0
                            }, r, t) : Object.assign({}, r, {
                                visible: !1
                            })
                        },
                        c = function(e) {
                            var r = {};
                            switch (e.length) {
                                case 1:
                                    r[t.CANCEL_KEY] = Object.assign({}, o, {
                                        visible: !1
                                    });
                                    break;
                                case 2:
                                    r[t.CANCEL_KEY] = a(t.CANCEL_KEY, e[0]), r[t.CONFIRM_KEY] = a(t.CONFIRM_KEY, e[1]);
                                    break;
                                default:
                                    n.throwErr("Invalid number of 'buttons' in array (" + e.length + ").\n      If you want more than 2 buttons, you need to use an object!")
                            }
                            return r
                        };
                    t.getButtonListOpts = function(e) {
                        var r = t.defaultButtonList;
                        return "string" == typeof e ? r[t.CONFIRM_KEY] = a(t.CONFIRM_KEY, e) : Array.isArray(e) ? r = c(e) : n.isPlainObject(e) ? r = function(e) {
                            for (var t = {}, r = 0, n = Object.keys(e); r < n.length; r++) {
                                var i = n[r],
                                    s = e[i],
                                    u = a(i, s);
                                t[i] = u
                            }
                            return t.cancel || (t.cancel = o), t
                        }(e) : !0 === e ? r = c([!0, !0]) : !1 === e ? r = c([!1, !1]) : void 0 === e && (r = t.defaultButtonList), r
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = r(2),
                        o = r(0),
                        s = o.default.MODAL,
                        u = o.default.OVERLAY,
                        a = r(30),
                        c = r(31),
                        l = r(32),
                        f = r(33);
                    t.injectElIntoModal = function(e) {
                        var t = n.getNode(s),
                            r = n.stringToNode(e);
                        return t.appendChild(r), r
                    };
                    var p = function(e, t) {
                        ! function(e) {
                            e.className = s, e.textContent = ""
                        }(e);
                        var r = t.className;
                        r && e.classList.add(r)
                    };
                    t.initModalContent = function(e) {
                        var t = n.getNode(s);
                        p(t, e), a.default(e.icon), c.initTitle(e.title), c.initText(e.text), f.default(e.content), l.default(e.buttons, e.dangerMode)
                    }, t.default = function() {
                        var e = n.getNode(u),
                            t = n.stringToNode(i.modalMarkup);
                        e.appendChild(t)
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(3),
                        i = {
                            isOpen: !1,
                            promise: null,
                            actions: {},
                            timer: null
                        },
                        o = Object.assign({}, i);
                    t.resetState = function() {
                        o = Object.assign({}, i)
                    }, t.setActionValue = function(e) {
                        if ("string" == typeof e) return s(n.CONFIRM_KEY, e);
                        for (var t in e) s(t, e[t])
                    };
                    var s = function(e, t) {
                        o.actions[e] || (o.actions[e] = {}), Object.assign(o.actions[e], {
                            value: t
                        })
                    };
                    t.setActionOptionsFor = function(e, t) {
                        var r = (void 0 === t ? {} : t).closeModal,
                            n = void 0 === r || r;
                        Object.assign(o.actions[e], {
                            closeModal: n
                        })
                    }, t.default = o
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = r(3),
                        o = r(0),
                        s = o.default.OVERLAY,
                        u = o.default.SHOW_MODAL,
                        a = o.default.BUTTON,
                        c = o.default.BUTTON_LOADING,
                        l = r(5);
                    t.openModal = function() {
                        n.getNode(s).classList.add(u), l.default.isOpen = !0
                    }, t.onAction = function(e) {
                        void 0 === e && (e = i.CANCEL_KEY);
                        var t = l.default.actions[e],
                            r = t.value;
                        if (!1 === t.closeModal) {
                            var o = a + "--" + e;
                            n.getNode(o).classList.add(c)
                        } else n.getNode(s).classList.remove(u), l.default.isOpen = !1;
                        l.default.promise.resolve(r)
                    }, t.getState = function() {
                        var e = Object.assign({}, l.default);
                        return delete e.promise, delete e.timer, e
                    }, t.stopLoading = function() {
                        for (var e = document.querySelectorAll("." + a), t = 0; t < e.length; t++) e[t].classList.remove(c)
                    }
                }, function(t, e) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || Function("return this")() || eval("this")
                    } catch (t) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                }, function(e, t, r) {
                    (function(t) {
                        e.exports = t.sweetAlert = r(9)
                    }).call(t, r(7))
                }, function(e, t, r) {
                    (function(t) {
                        e.exports = t.swal = r(10)
                    }).call(t, r(7))
                }, function(e, t, r) {
                    "undefined" != typeof window && r(11), r(16);
                    var n = r(23).default;
                    e.exports = n
                }, function(e, t, r) {
                    var n = r(12);
                    "string" == typeof n && (n = [
                        [e.i, n, ""]
                    ]);
                    var i = {
                        insertAt: "top",
                        transform: void 0
                    };
                    r(14)(n, i), n.locals && (e.exports = n.locals)
                }, function(e, t, r) {
                    (e.exports = r(13)(void 0)).push([e.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
                }, function(e, t) {
                    function r(e, t) {
                        var r = e[1] || "",
                            n = e[3];
                        if (!n) return r;
                        if (t && "function" == typeof btoa) {
                            var i = function(e) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                            }(n);
                            return [r].concat(n.sources.map(function(e) {
                                return "/*# sourceURL=" + n.sourceRoot + e + " */"
                            })).concat([i]).join("\n")
                        }
                        return [r].join("\n")
                    }
                    e.exports = function(e) {
                        var t = [];
                        return t.toString = function() {
                            return this.map(function(t) {
                                var n = r(t, e);
                                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                            }).join("")
                        }, t.i = function(e, r) {
                            "string" == typeof e && (e = [
                                [null, e, ""]
                            ]);
                            for (var n = {}, i = 0; i < this.length; i++) {
                                var o = this[i][0];
                                "number" == typeof o && (n[o] = !0)
                            }
                            for (i = 0; i < e.length; i++) {
                                var s = e[i];
                                "number" == typeof s[0] && n[s[0]] || (r && !s[2] ? s[2] = r : r && (s[2] = "(" + s[2] + ") and (" + r + ")"), t.push(s))
                            }
                        }, t
                    }
                }, function(e, t, r) {
                    function n(e, t) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r],
                                i = p[n.id];
                            if (i) {
                                i.refs++;
                                for (var o = 0; o < i.parts.length; o++) i.parts[o](n.parts[o]);
                                for (; o < n.parts.length; o++) i.parts.push(l(n.parts[o], t))
                            } else {
                                for (var s = [], o = 0; o < n.parts.length; o++) s.push(l(n.parts[o], t));
                                p[n.id] = {
                                    id: n.id,
                                    refs: 1,
                                    parts: s
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        for (var r = [], n = {}, i = 0; i < e.length; i++) {
                            var o = e[i],
                                s = t.base ? o[0] + t.base : o[0],
                                u = o[1],
                                a = o[2],
                                c = o[3],
                                l = {
                                    css: u,
                                    media: a,
                                    sourceMap: c
                                };
                            n[s] ? n[s].parts.push(l) : r.push(n[s] = {
                                id: s,
                                parts: [l]
                            })
                        }
                        return r
                    }

                    function o(e, t) {
                        var r = h(e.insertInto);
                        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                        var n = v[v.length - 1];
                        if ("top" === e.insertAt) n ? n.nextSibling ? r.insertBefore(t, n.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), v.push(t);
                        else {
                            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                            r.appendChild(t)
                        }
                    }

                    function s(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                        var t = v.indexOf(e);
                        t >= 0 && v.splice(t, 1)
                    }

                    function u(e) {
                        var t = document.createElement("style");
                        return e.attrs.type = "text/css", c(t, e.attrs), o(e, t), t
                    }

                    function a(e) {
                        var t = document.createElement("link");
                        return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), o(e, t), t
                    }

                    function c(e, t) {
                        Object.keys(t).forEach(function(r) {
                            e.setAttribute(r, t[r])
                        })
                    }

                    function l(e, t) {
                        var r, n, i, o;
                        if (t.transform && e.css) {
                            if (!(o = t.transform(e.css))) return function() {};
                            e.css = o
                        }
                        if (t.singleton) {
                            var c = y++;
                            r = b || (b = u(t)), n = f.bind(null, r, c, !1), i = f.bind(null, r, c, !0)
                        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = a(t), n = function(e, t, r) {
                            var n = r.css,
                                i = r.sourceMap,
                                o = void 0 === t.convertToAbsoluteUrls && i;
                            (t.convertToAbsoluteUrls || o) && (n = m(n)), i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                            var s = new Blob([n], {
                                    type: "text/css"
                                }),
                                u = e.href;
                            e.href = URL.createObjectURL(s), u && URL.revokeObjectURL(u)
                        }.bind(null, r, t), i = function() {
                            s(r), r.href && URL.revokeObjectURL(r.href)
                        }) : (r = u(t), n = function(e, t) {
                            var r = t.css,
                                n = t.media;
                            if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = r;
                            else {
                                for (; e.firstChild;) e.removeChild(e.firstChild);
                                e.appendChild(document.createTextNode(r))
                            }
                        }.bind(null, r), i = function() {
                            s(r)
                        });
                        return n(e),
                            function(t) {
                                if (t) {
                                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                    n(e = t)
                                } else i()
                            }
                    }

                    function f(e, t, r, n) {
                        var i = r ? "" : n.css;
                        if (e.styleSheet) e.styleSheet.cssText = _(t, i);
                        else {
                            var o = document.createTextNode(i),
                                s = e.childNodes;
                            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
                        }
                    }
                    var p = {},
                        d = function(e) {
                            var t;
                            return function() {
                                return void 0 === t && (t = function() {
                                    return window && document && document.all && !window.atob
                                }.apply(this, arguments)), t
                            }
                        }(),
                        h = function(e) {
                            var t = {};
                            return function(e) {
                                return void 0 === t[e] && (t[e] = function(e) {
                                    return document.querySelector(e)
                                }.call(this, e)), t[e]
                            }
                        }(),
                        b = null,
                        y = 0,
                        v = [],
                        m = r(15);
                    e.exports = function(e, t) {
                        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = d()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                        var r = i(e, t);
                        return n(r, t),
                            function(e) {
                                for (var o = [], s = 0; s < r.length; s++) {
                                    var u = r[s],
                                        a = p[u.id];
                                    a.refs--, o.push(a)
                                }
                                e && n(i(e, t), t);
                                for (var s = 0; s < o.length; s++) {
                                    var a = o[s];
                                    if (0 === a.refs) {
                                        for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                                        delete p[a.id]
                                    }
                                }
                            }
                    };
                    var _ = function() {
                        var e = [];
                        return function(t, r) {
                            return e[t] = r, e.filter(Boolean).join("\n")
                        }
                    }()
                }, function(e, t) {
                    e.exports = function(e) {
                        var t = "undefined" != typeof window && window.location;
                        if (!t) throw new Error("fixUrls requires window.location");
                        if (!e || "string" != typeof e) return e;
                        var r = t.protocol + "//" + t.host,
                            n = r + t.pathname.replace(/\/[^\/]*$/, "/");
                        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                            var i, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                                return t
                            }).replace(/^'(.*)'$/, function(e, t) {
                                return t
                            });
                            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? r + o : n + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
                        })
                    }
                }, function(e, t, r) {
                    var n = r(17);
                    "undefined" == typeof window || window.Promise || (window.Promise = n), r(21), String.prototype.includes || (String.prototype.includes = function(e, t) {
                        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                        value: function(e, t) {
                            if (null == this) throw new TypeError('"this" is null or not defined');
                            var r = Object(this),
                                n = r.length >>> 0;
                            if (0 === n) return !1;
                            for (var i = 0 | t, o = Math.max(i >= 0 ? i : n - Math.abs(i), 0); o < n;) {
                                if (function(e, t) {
                                        return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                                    }(r[o], e)) return !0;
                                o++
                            }
                            return !1
                        }
                    }), "undefined" != typeof window && function(e) {
                        e.forEach(function(e) {
                            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function() {
                                    this.parentNode.removeChild(this)
                                }
                            })
                        })
                    }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
                }, function(e, t, r) {
                    (function(t) {
                        ! function(r) {
                            function n() {}

                            function i(e) {
                                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                                if ("function" != typeof e) throw new TypeError("not a function");
                                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
                            }

                            function o(e, t) {
                                for (; 3 === e._state;) e = e._value;
                                0 !== e._state ? (e._handled = !0, i._immediateFn(function() {
                                    var r = 1 === e._state ? t.onFulfilled : t.onRejected;
                                    if (null !== r) {
                                        var n;
                                        try {
                                            n = r(e._value)
                                        } catch (e) {
                                            return void u(t.promise, e)
                                        }
                                        s(t.promise, n)
                                    } else(1 === e._state ? s : u)(t.promise, e._value)
                                })) : e._deferreds.push(t)
                            }

                            function s(e, t) {
                                try {
                                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                    if (t && ("object" == typeof t || "function" == typeof t)) {
                                        var r = t.then;
                                        if (t instanceof i) return e._state = 3, e._value = t, void a(e);
                                        if ("function" == typeof r) return void c(function(e, t) {
                                            return function() {
                                                e.apply(t, arguments)
                                            }
                                        }(r, t), e)
                                    }
                                    e._state = 1, e._value = t, a(e)
                                } catch (t) {
                                    u(e, t)
                                }
                            }

                            function u(e, t) {
                                e._state = 2, e._value = t, a(e)
                            }

                            function a(e) {
                                2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                                    e._handled || i._unhandledRejectionFn(e._value)
                                });
                                for (var t = 0, r = e._deferreds.length; t < r; t++) o(e, e._deferreds[t]);
                                e._deferreds = null
                            }

                            function c(e, t) {
                                var r = !1;
                                try {
                                    e(function(e) {
                                        r || (r = !0, s(t, e))
                                    }, function(e) {
                                        r || (r = !0, u(t, e))
                                    })
                                } catch (e) {
                                    if (r) return;
                                    r = !0, u(t, e)
                                }
                            }
                            var l = setTimeout;
                            i.prototype.catch = function(e) {
                                return this.then(null, e)
                            }, i.prototype.then = function(e, t) {
                                var r = new this.constructor(n);
                                return o(this, new function(e, t, r) {
                                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
                                }(e, t, r)), r
                            }, i.all = function(e) {
                                var t = Array.prototype.slice.call(e);
                                return new i(function(e, r) {
                                    function n(o, s) {
                                        try {
                                            if (s && ("object" == typeof s || "function" == typeof s)) {
                                                var u = s.then;
                                                if ("function" == typeof u) return void u.call(s, function(e) {
                                                    n(o, e)
                                                }, r)
                                            }
                                            t[o] = s, 0 == --i && e(t)
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    if (0 === t.length) return e([]);
                                    for (var i = t.length, o = 0; o < t.length; o++) n(o, t[o])
                                })
                            }, i.resolve = function(e) {
                                return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                                    t(e)
                                })
                            }, i.reject = function(e) {
                                return new i(function(t, r) {
                                    r(e)
                                })
                            }, i.race = function(e) {
                                return new i(function(t, r) {
                                    for (var n = 0, i = e.length; n < i; n++) e[n].then(t, r)
                                })
                            }, i._immediateFn = "function" == typeof t && function(e) {
                                t(e)
                            } || function(e) {
                                l(e, 0)
                            }, i._unhandledRejectionFn = function(e) {
                                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                            }, i._setImmediateFn = function(e) {
                                i._immediateFn = e
                            }, i._setUnhandledRejectionFn = function(e) {
                                i._unhandledRejectionFn = e
                            }, void 0 !== e && e.exports ? e.exports = i : r.Promise || (r.Promise = i)
                        }(this)
                    }).call(t, r(18).setImmediate)
                }, function(e, t, r) {
                    function n(e, t) {
                        this._id = e, this._clearFn = t
                    }
                    var i = Function.prototype.apply;
                    t.setTimeout = function() {
                        return new n(i.call(setTimeout, window, arguments), clearTimeout)
                    }, t.setInterval = function() {
                        return new n(i.call(setInterval, window, arguments), clearInterval)
                    }, t.clearTimeout = t.clearInterval = function(e) {
                        e && e.close()
                    }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
                        this._clearFn.call(window, this._id)
                    }, t.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                    }, t.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                    }, t._unrefActive = t.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }, r(19), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
                }, function(e, t, r) {
                    (function(e, t) {
                        ! function(e, r) {
                            function n(e) {
                                delete u[e]
                            }

                            function i(e) {
                                if (a) setTimeout(i, 0, e);
                                else {
                                    var t = u[e];
                                    if (t) {
                                        a = !0;
                                        try {
                                            ! function(e) {
                                                var t = e.callback,
                                                    n = e.args;
                                                switch (n.length) {
                                                    case 0:
                                                        t();
                                                        break;
                                                    case 1:
                                                        t(n[0]);
                                                        break;
                                                    case 2:
                                                        t(n[0], n[1]);
                                                        break;
                                                    case 3:
                                                        t(n[0], n[1], n[2]);
                                                        break;
                                                    default:
                                                        t.apply(r, n)
                                                }
                                            }(t)
                                        } finally {
                                            n(e), a = !1
                                        }
                                    }
                                }
                            }
                            if (!e.setImmediate) {
                                var o, s = 1,
                                    u = {},
                                    a = !1,
                                    c = e.document,
                                    l = Object.getPrototypeOf && Object.getPrototypeOf(e);
                                l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? o = function(e) {
                                    t.nextTick(function() {
                                        i(e)
                                    })
                                } : function() {
                                    if (e.postMessage && !e.importScripts) {
                                        var t = !0,
                                            r = e.onmessage;
                                        return e.onmessage = function() {
                                            t = !1
                                        }, e.postMessage("", "*"), e.onmessage = r, t
                                    }
                                }() ? function() {
                                    var t = "setImmediate$" + Math.random() + "$",
                                        r = function(r) {
                                            r.source === e && "string" == typeof r.data && 0 === r.data.indexOf(t) && i(+r.data.slice(t.length))
                                        };
                                    e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), o = function(r) {
                                        e.postMessage(t + r, "*")
                                    }
                                }() : e.MessageChannel ? function() {
                                    var e = new MessageChannel;
                                    e.port1.onmessage = function(e) {
                                        i(e.data)
                                    }, o = function(t) {
                                        e.port2.postMessage(t)
                                    }
                                }() : c && "onreadystatechange" in c.createElement("script") ? function() {
                                    var e = c.documentElement;
                                    o = function(t) {
                                        var r = c.createElement("script");
                                        r.onreadystatechange = function() {
                                            i(t), r.onreadystatechange = null, e.removeChild(r), r = null
                                        }, e.appendChild(r)
                                    }
                                }() : o = function(e) {
                                    setTimeout(i, 0, e)
                                }, l.setImmediate = function(e) {
                                    "function" != typeof e && (e = new Function("" + e));
                                    for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                                    var n = {
                                        callback: e,
                                        args: t
                                    };
                                    return u[s] = n, o(s), s++
                                }, l.clearImmediate = n
                            }
                        }("undefined" == typeof self ? void 0 === e ? this : e : self)
                    }).call(t, r(7), r(20))
                }, function(e, t) {
                    function r() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function n() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function i(e) {
                        if (c === setTimeout) return setTimeout(e, 0);
                        if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
                        try {
                            return c(e, 0)
                        } catch (t) {
                            try {
                                return c.call(null, e, 0)
                            } catch (t) {
                                return c.call(this, e, 0)
                            }
                        }
                    }

                    function o() {
                        h && p && (h = !1, p.length ? d = p.concat(d) : b = -1, d.length && s())
                    }

                    function s() {
                        if (!h) {
                            var e = i(o);
                            h = !0;
                            for (var t = d.length; t;) {
                                for (p = d, d = []; ++b < t;) p && p[b].run();
                                b = -1, t = d.length
                            }
                            p = null, h = !1,
                                function(e) {
                                    if (l === clearTimeout) return clearTimeout(e);
                                    if ((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
                                    try {
                                        l(e)
                                    } catch (t) {
                                        try {
                                            return l.call(null, e)
                                        } catch (t) {
                                            return l.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function u(e, t) {
                        this.fun = e, this.array = t
                    }

                    function a() {}
                    var c, l, f = e.exports = {};
                    ! function() {
                        try {
                            c = "function" == typeof setTimeout ? setTimeout : r
                        } catch (e) {
                            c = r
                        }
                        try {
                            l = "function" == typeof clearTimeout ? clearTimeout : n
                        } catch (e) {
                            l = n
                        }
                    }();
                    var p, d = [],
                        h = !1,
                        b = -1;
                    f.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        d.push(new u(e, t)), 1 !== d.length || h || i(s)
                    }, u.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = a, f.addListener = a, f.once = a, f.off = a, f.removeListener = a, f.removeAllListeners = a, f.emit = a, f.prependListener = a, f.prependOnceListener = a, f.listeners = function(e) {
                        return []
                    }, f.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, f.cwd = function() {
                        return "/"
                    }, f.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, f.umask = function() {
                        return 0
                    }
                }, function(e, t, r) {
                    r(22).polyfill()
                }, function(e, t, r) {
                    function n(e, t) {
                        if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                        for (var r = Object(e), n = 1; n < arguments.length; n++) {
                            var i = arguments[n];
                            if (void 0 !== i && null !== i)
                                for (var o = Object.keys(Object(i)), s = 0, u = o.length; s < u; s++) {
                                    var a = o[s],
                                        c = Object.getOwnPropertyDescriptor(i, a);
                                    void 0 !== c && c.enumerable && (r[a] = i[a])
                                }
                        }
                        return r
                    }
                    e.exports = {
                        assign: n,
                        polyfill: function() {
                            Object.assign || Object.defineProperty(Object, "assign", {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: n
                            })
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(24),
                        i = r(6),
                        o = r(5),
                        s = r(36),
                        u = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            if ("undefined" != typeof window) {
                                var r = s.getOpts.apply(void 0, e);
                                return new Promise(function(e, t) {
                                    o.default.promise = {
                                        resolve: e,
                                        reject: t
                                    }, n.default(r), setTimeout(function() {
                                        i.openModal()
                                    })
                                })
                            }
                        };
                    u.close = i.onAction, u.getState = i.getState, u.setActionValue = o.setActionValue, u.stopLoading = i.stopLoading, u.setDefaults = s.setDefaults, t.default = u
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = r(0),
                        o = i.default.MODAL,
                        s = r(4),
                        u = r(34),
                        a = r(35),
                        c = r(1);
                    t.init = function(e) {
                        n.getNode(o) || (document.body || c.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), u.default(), s.default()), s.initModalContent(e), a.default(e)
                    }, t.default = t.init
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        i = n.default.MODAL;
                    t.modalMarkup = '\n  <div class="' + i + '" role="dialog" aria-modal="true"></div>', t.default = t.modalMarkup
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        i = n.default.OVERLAY,
                        o = '<div \n    class="' + i + '"\n    tabIndex="-1">\n  </div>';
                    t.default = o
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        i = n.default.ICON;
                    t.errorIconMarkup = function() {
                        var e = i + "--error",
                            t = e + "__line";
                        return '\n    <div class="' + e + '__x-mark">\n      <span class="' + t + " " + t + '--left"></span>\n      <span class="' + t + " " + t + '--right"></span>\n    </div>\n  '
                    }, t.warningIconMarkup = function() {
                        var e = i + "--warning";
                        return '\n    <span class="' + e + '__body">\n      <span class="' + e + '__dot"></span>\n    </span>\n  '
                    }, t.successIconMarkup = function() {
                        var e = i + "--success";
                        return '\n    <span class="' + e + "__line " + e + '__line--long"></span>\n    <span class="' + e + "__line " + e + '__line--tip"></span>\n\n    <div class="' + e + '__ring"></div>\n    <div class="' + e + '__hide-corners"></div>\n  '
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        i = n.default.CONTENT;
                    t.contentMarkup = '\n  <div class="' + i + '">\n\n  </div>\n'
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        i = n.default.BUTTON_CONTAINER,
                        o = n.default.BUTTON,
                        s = n.default.BUTTON_LOADER;
                    t.buttonMarkup = '\n  <div class="' + i + '">\n\n    <button\n      class="' + o + '"\n    ></button>\n\n    <div class="' + s + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(4),
                        i = r(2),
                        o = r(0),
                        s = o.default.ICON,
                        u = o.default.ICON_CUSTOM,
                        a = ["error", "warning", "success", "info"],
                        c = {
                            error: i.errorIconMarkup(),
                            warning: i.warningIconMarkup(),
                            success: i.successIconMarkup()
                        };
                    t.default = function(e) {
                        if (e) {
                            var t = n.injectElIntoModal(i.iconMarkup);
                            a.includes(e) ? function(e, t) {
                                var r = s + "--" + e;
                                t.classList.add(r);
                                var n = c[e];
                                n && (t.innerHTML = n)
                            }(e, t) : function(e, t) {
                                t.classList.add(u);
                                var r = document.createElement("img");
                                r.src = e, t.appendChild(r)
                            }(e, t)
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(2),
                        i = r(4),
                        o = function(e) {
                            navigator.userAgent.includes("AppleWebKit") && (e.style.display = "none", e.offsetHeight, e.style.display = "")
                        };
                    t.initTitle = function(e) {
                        if (e) {
                            var t = i.injectElIntoModal(n.titleMarkup);
                            t.textContent = e, o(t)
                        }
                    }, t.initText = function(e) {
                        if (e) {
                            var t = document.createDocumentFragment();
                            e.split("\n").forEach(function(e, r, n) {
                                t.appendChild(document.createTextNode(e)), r < n.length - 1 && t.appendChild(document.createElement("br"))
                            });
                            var r = i.injectElIntoModal(n.textMarkup);
                            r.appendChild(t), o(r)
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = r(4),
                        o = r(0),
                        s = o.default.BUTTON,
                        u = o.default.DANGER_BUTTON,
                        a = r(3),
                        c = r(2),
                        l = r(6),
                        f = r(5),
                        p = function(e, t, r) {
                            var i = t.text,
                                o = t.value,
                                p = t.className,
                                d = t.closeModal,
                                h = n.stringToNode(c.buttonMarkup),
                                b = h.querySelector("." + s),
                                y = s + "--" + e;
                            b.classList.add(y), p && (Array.isArray(p) ? p : p.split(" ")).filter(function(e) {
                                return e.length > 0
                            }).forEach(function(e) {
                                b.classList.add(e)
                            }), r && e === a.CONFIRM_KEY && b.classList.add(u), b.textContent = i;
                            var v = {};
                            return v[e] = o, f.setActionValue(v), f.setActionOptionsFor(e, {
                                closeModal: d
                            }), b.addEventListener("click", function() {
                                return l.onAction(e)
                            }), h
                        };
                    t.default = function(e, t) {
                        var r = i.injectElIntoModal(c.footerMarkup);
                        for (var n in e) {
                            var o = e[n],
                                s = p(n, o, t);
                            o.visible && r.appendChild(s)
                        }
                        0 === r.children.length && r.remove()
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(3),
                        i = r(4),
                        o = r(2),
                        s = r(5),
                        u = r(6),
                        a = r(0),
                        c = a.default.CONTENT,
                        l = function(e) {
                            e.addEventListener("input", function(e) {
                                var t = e.target,
                                    r = t.value;
                                s.setActionValue(r)
                            }), e.addEventListener("keyup", function(e) {
                                if ("Enter" === e.key) return u.onAction(n.CONFIRM_KEY)
                            }), setTimeout(function() {
                                e.focus(), s.setActionValue("")
                            }, 0)
                        };
                    t.default = function(e) {
                        if (e) {
                            var t = i.injectElIntoModal(o.contentMarkup),
                                r = e.element,
                                n = e.attributes;
                            "string" == typeof r ? function(e, t, r) {
                                var n = document.createElement(t),
                                    i = c + "__" + t;
                                for (var o in n.classList.add(i), r) {
                                    var s = r[o];
                                    n[o] = s
                                }
                                "input" === t && l(n), e.appendChild(n)
                            }(t, r, n) : t.appendChild(r)
                        }
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = r(2);
                    t.default = function() {
                        var e = n.stringToNode(i.overlayMarkup);
                        document.body.appendChild(e)
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(5),
                        i = r(6),
                        o = r(1),
                        s = r(3),
                        u = r(0),
                        a = u.default.MODAL,
                        c = u.default.BUTTON,
                        l = u.default.OVERLAY,
                        f = function(e) {
                            if (n.default.isOpen) switch (e.key) {
                                case "Escape":
                                    return i.onAction(s.CANCEL_KEY)
                            }
                        },
                        p = function(e) {
                            if (n.default.isOpen) switch (e.key) {
                                case "Tab":
                                    return function(e) {
                                        e.preventDefault(), h()
                                    }(e)
                            }
                        },
                        d = function(e) {
                            if (n.default.isOpen) return "Tab" === e.key && e.shiftKey ? function(e) {
                                e.preventDefault(), b()
                            }(e) : void 0
                        },
                        h = function() {
                            var e = o.getNode(c);
                            e && (e.tabIndex = 0, e.focus())
                        },
                        b = function() {
                            var e = o.getNode(a),
                                t = e.querySelectorAll("." + c),
                                r = t.length - 1,
                                n = t[r];
                            n && n.focus()
                        },
                        y = function() {
                            var e = o.getNode(a),
                                t = e.querySelectorAll("." + c);
                            t.length && (function(e) {
                                e[e.length - 1].addEventListener("keydown", p)
                            }(t), function(e) {
                                e[0].addEventListener("keydown", d)
                            }(t))
                        },
                        v = function(e) {
                            if (o.getNode(l) === e.target) return i.onAction(s.CANCEL_KEY)
                        };
                    t.default = function(e) {
                        e.closeOnEsc ? document.addEventListener("keyup", f) : document.removeEventListener("keyup", f), e.dangerMode ? h() : b(), y(),
                            function(e) {
                                var t = o.getNode(l);
                                t.removeEventListener("click", v), e && t.addEventListener("click", v)
                            }(e.closeOnClickOutside),
                            function(e) {
                                n.default.timer && clearTimeout(n.default.timer), e && (n.default.timer = window.setTimeout(function() {
                                    return i.onAction(s.CANCEL_KEY)
                                }, e))
                            }(e.timer)
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = r(3),
                        o = r(37),
                        s = r(38),
                        u = {
                            title: null,
                            text: null,
                            icon: null,
                            buttons: i.defaultButtonList,
                            content: null,
                            className: null,
                            closeOnClickOutside: !0,
                            closeOnEsc: !0,
                            dangerMode: !1,
                            timer: null
                        },
                        a = Object.assign({}, u);
                    t.setDefaults = function(e) {
                        a = Object.assign({}, u, e)
                    };
                    var c = function(e) {
                            var t = e && e.button,
                                r = e && e.buttons;
                            return void 0 !== t && void 0 !== r && n.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== t ? {
                                confirm: t
                            } : r
                        },
                        l = function(e) {
                            return n.ordinalSuffixOf(e + 1)
                        },
                        f = function(e, t) {
                            n.throwErr(l(t) + " argument ('" + e + "') is invalid")
                        },
                        p = function(e, t) {
                            var r = e + 1,
                                i = t[r];
                            n.isPlainObject(i) || void 0 === i || n.throwErr("Expected " + l(r) + " argument ('" + i + "') to be a plain object")
                        },
                        d = function(e, t, r, i) {
                            var o = typeof t,
                                s = "string" === o,
                                u = t instanceof Element;
                            if (s) {
                                if (0 === r) return {
                                    text: t
                                };
                                if (1 === r) return {
                                    text: t,
                                    title: i[0]
                                };
                                if (2 === r) return p(r, i), {
                                    icon: t
                                };
                                f(t, r)
                            } else {
                                if (u && 0 === r) return p(r, i), {
                                    content: t
                                };
                                if (n.isPlainObject(t)) return function(e, t) {
                                    var r = e + 1,
                                        i = t[r];
                                    void 0 !== i && n.throwErr("Unexpected " + l(r) + " argument (" + i + ")")
                                }(r, i), t;
                                f(t, r)
                            }
                        };
                    t.getOpts = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = {};
                        e.forEach(function(t, n) {
                            var i = d(0, t, n, e);
                            Object.assign(r, i)
                        });
                        var n = c(r);
                        r.buttons = i.getButtonListOpts(n), delete r.button, r.content = o.getContentOpts(r.content);
                        var l = Object.assign({}, u, a, r);
                        return Object.keys(l).forEach(function(e) {
                            s.DEPRECATED_OPTS[e] && s.logDeprecation(e)
                        }), l
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        i = {
                            element: "input",
                            attributes: {
                                placeholder: ""
                            }
                        };
                    t.getContentOpts = function(e) {
                        return n.isPlainObject(e) ? Object.assign({}, e) : e instanceof Element ? {
                            element: e
                        } : "input" === e ? i : null
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.logDeprecation = function(e) {
                        var r = t.DEPRECATED_OPTS[e],
                            n = r.onlyRename,
                            i = r.replacement,
                            o = r.subOption,
                            s = r.link,
                            u = n ? "renamed" : "deprecated",
                            a = 'SweetAlert warning: "' + e + '" option has been ' + u + ".";
                        i && (a += " Please use" + (o ? ' "' + o + '" in ' : " ") + '"' + i + '" instead.');
                        var c = "https://sweetalert.js.org";
                        a += s ? " More details: " + c + s : " More details: " + c + "/guides/#upgrading-from-1x", console.warn(a)
                    }, t.DEPRECATED_OPTS = {
                        type: {
                            replacement: "icon",
                            link: "/docs/#icon"
                        },
                        imageUrl: {
                            replacement: "icon",
                            link: "/docs/#icon"
                        },
                        customClass: {
                            replacement: "className",
                            onlyRename: !0,
                            link: "/docs/#classname"
                        },
                        imageSize: {},
                        showCancelButton: {
                            replacement: "buttons",
                            link: "/docs/#buttons"
                        },
                        showConfirmButton: {
                            replacement: "button",
                            link: "/docs/#button"
                        },
                        confirmButtonText: {
                            replacement: "button",
                            link: "/docs/#button"
                        },
                        confirmButtonColor: {},
                        cancelButtonText: {
                            replacement: "buttons",
                            link: "/docs/#buttons"
                        },
                        closeOnConfirm: {
                            replacement: "button",
                            subOption: "closeModal",
                            link: "/docs/#button"
                        },
                        closeOnCancel: {
                            replacement: "buttons",
                            subOption: "closeModal",
                            link: "/docs/#buttons"
                        },
                        showLoaderOnConfirm: {
                            replacement: "buttons"
                        },
                        animation: {},
                        inputType: {
                            replacement: "content",
                            link: "/docs/#content"
                        },
                        inputValue: {
                            replacement: "content",
                            link: "/docs/#content"
                        },
                        inputPlaceholder: {
                            replacement: "content",
                            link: "/docs/#content"
                        },
                        html: {
                            replacement: "content",
                            link: "/docs/#content"
                        },
                        allowEscapeKey: {
                            replacement: "closeOnEsc",
                            onlyRename: !0,
                            link: "/docs/#closeonesc"
                        },
                        allowClickOutside: {
                            replacement: "closeOnClickOutside",
                            onlyRename: !0,
                            link: "/docs/#closeonclickoutside"
                        }
                    }
                }])
            }()
        }),
        swal = unwrapExports(sweetalert_min),
        sweetalert_min_1 = sweetalert_min.swal,
        labelTooLongCheck = function(e) {
            return Boolean(e && e.errors && e.errors.some(function(e) {
                return 3007 === e.code
            }))
        },
        notLoggedInChecked = function(e) {
            return Boolean(e && e.errors && e.errors.some(function(e) {
                return "Please sign in" === e.message
            }))
        },
        ResponsesToAllDone;

    function showLabelTooLongErrorMessage() {
        var e = document.createElement("div");
        e.innerHTML = 'Currently the maximum label size is 256kb. If you are labeling a map please break it into smaller pieces with our <a href="https://support.labelbox.com/docs/tiled-imagery" target="_blank">bounds parameter</a>. Also please reach out to our support team or comment on our <a href="https://github.com/Labelbox/Labelbox/issues/102" target="_blank">github issue</a>. Labelbox is alerted anytime a user hits this error.', swal({
            title: "Label Exceeds Maximum Supported Size",
            content: e
        })
    }

    function unauthorizedTroubleShoot() {
        return AccessToken.getToken().then(function(e) {
            e && (AccessToken.removeToken(), window.location.reload())
        })
    }

    function troubleShootLabelChangeRequest(e, t) {
        if (labelTooLongCheck(t)) {
            var r = selectUser(e);
            return showLabelTooLongErrorMessage(), void(r && track(r, "Label Update Failed: Label too long", {
                alert: !0
            }))
        }
        notLoggedInChecked(t) && unauthorizedTroubleShoot()
    }

    function showAllDone(e) {
        var t = e.canCloseModal,
            r = e.userCanTurnOnRealtime,
            n = {
                text: "Close",
                value: ResponsesToAllDone.Close,
                visible: !0,
                className: "",
                closeModal: !0
            },
            i = {
                text: "Go to project overview",
                value: ResponsesToAllDone.ProjectHome,
                visible: !0,
                className: "",
                closeModal: !0
            },
            o = {
                text: "Wait for next asset",
                value: ResponsesToAllDone.TurnOnRealtime,
                visible: !0,
                className: "",
                closeModal: !0
            },
            s = window.top !== window.self,
            u = swal(__assign({
                title: "All done!",
                html: "No more items to label.",
                icon: "success"
            }, function(e, t, r) {
                if (e) return {
                    button: !1,
                    text: " "
                };
                if (t) return r ? {
                    buttons: [i, o]
                } : {
                    buttons: [n, i]
                };
                var s = {
                    closeOnClickOutside: !1,
                    closeOnEsc: !1,
                    className: "no-"
                };
                return __assign(r ? {
                    buttons: [i, o]
                } : {
                    button: i
                }, s)
            }(s, t, r)));
        return t || (document.querySelector(".swal-overlay").style = "background-color: #dddddd;"), u
    }! function(e) {
        e.ProjectHome = "projectHome", e.TurnOnRealtime = "turnOnRealtime", e.Close = "close"
    }(ResponsesToAllDone || (ResponsesToAllDone = {}));
    var projectLabelingHistoryCursor = "query GetProjectLabelingHistoryCursor($projectId: ID!, $labelId: ID) {\n  project(where: { id: $projectId }) {\n    labelingHistoryCursor(where: { labelId: $labelId }) {\n      previous {\n        id\n      }\n      next {\n        id\n      }\n    }\n  }\n}\n",
        waitForQueueToBuild = memoize(resolveWhenQueueIsBuilt);

    function getActionToDispatchNextRowToLabel(e) {
        var t = this,
            r = e.projectId,
            n = e.shouldBeCurrentAsset,
            i = e.assets,
            o = values(i).filter(function(e) {
                return !e.labelId
            }).map(function(e) {
                return e.datarowId
            });
        return getNextRowToLabel({
            projectId: r,
            dataRowIdsToSkip: o
        }).then(function(e) {
            return __awaiter(t, void 0, void 0, function() {
                var t, i, o, s;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return e ? (t = assetFetched, i = {
                                id: e.id,
                                datarowId: e.id,
                                fetchedAt: (new Date).getTime(),
                                data: e.rowData,
                                label: void 0
                            }, o = selectRecommendTemplateId, s = {
                                labelTemplates: e.labelTemplates
                            }, [4, getProjectPredictionModelId(r)]) : [3, 2];
                        case 1:
                            return [2, t.apply(void 0, [(i.labelTemplateId = o.apply(void 0, [(s.activePredictionModelId = u.sent(), s)]), i.labelTemplates = e.labelTemplates, i.externalId = e.externalId, i.metadata = e.metadata, i.template = e.template, i.logId = e.labelLog, i), n])];
                        case 2:
                            if (n) return [2, noMoreItemsToLabel()];
                            u.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, function(e) {
            if (e === Errors.NO_MORE_LABELS) {
                if (n) return noMoreItemsToLabel()
            } else if (e === Errors.UNAUTHORIZED) unauthorizedTroubleShoot();
            else {
                if (e === Errors.SKIP_CHECKOUT) return;
                sendMessage(e)
            }
        })
    }
    var loadHistoryForAsset = function(e) {
            var t = e.dispatch,
                r = e.projectId,
                n = e.assetId,
                i = e.labelId;
            sendQuery({
                query: projectLabelingHistoryCursor,
                variables: {
                    projectId: r,
                    labelId: i
                }
            }).then(function(e) {
                var o = e && e.data.project.labelingHistoryCursor;
                if (o) {
                    var s = o.previous,
                        u = o.next;
                    t(labelHistorySuccessfullyFetchedForAsset(n, s && s.id, u && u.id))
                } else console.error("can't fetch label history cursor for projectID: " + r + " and labelID: " + i)
            }).catch(function(e) {
                return console.warn("Error occurred loading cursor history ", e)
            })
        },
        LabelTypes;

    function onAction(e, t, r) {
        return __awaiter(this, void 0, void 0, function() {
            var n, i, o, s, u, a, c, l, f, p;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        return n = window.location.href, i = getQueryParam(n, "label"), o = selectCurrentAssetLabelId(e), (i || o) && e.currentAsset && i !== o && (s = setQueryParam(n, "label", o), window.history.pushState({
                            path: s
                        }, "", s)), t.type === ACTION_NAMES.APPLICATION_INIT ? (onInitEffects(t.payload, r), fetchUser().then(function(e) {
                            e ? (identifyUser(e), r(userFetchedFromServer(e))) : unauthorizedTroubleShoot()
                        }, function() {
                            unauthorizedTroubleShoot()
                        }), t.payload.projectId ? (t.payload.labelId ? r(setLabelAsCurrentAsset$1(t.payload.labelId)) : r(userRequestNextUnlabeledAsset()), [2]) : (console.error("Cant load any labels because the project is unknown", t.payload), [2])) : (u = selectProjectId(e)) ? (t.type === ACTION_NAMES.USER_REQUESTED_NEXT_UNLABELED_ASSET && ((a = selectNextAssetIdToLabel(e)) ? ((c = e.assets[a]).previousLabelId && c.nextLabelId || loadHistoryForAsset({
                            dispatch: r,
                            projectId: u,
                            assetId: a,
                            labelId: c.label
                        }), shouldPreloadNewAsset(e) && r(fetchAsset({
                            setAsCurrent: !1
                        }))) : r(fetchAsset({
                            setAsCurrent: !0
                        }))), t.type !== ACTION_NAMES.FETCH_ASSET ? [3, 2] : [4, waitForQueueToBuild(u, selectUser(e) || {})]) : [2];
                    case 1:
                        d.sent(), getActionToDispatchNextRowToLabel({
                            projectId: u,
                            shouldBeCurrentAsset: t.payload.setAsCurrent,
                            assets: e.assets
                        }).then(function(e) {
                            e && r(e)
                        }), d.label = 2;
                    case 2:
                        if (t.type === ACTION_NAMES.LABEL_SAVE_SUCCESS && (l = selectCurrentAsset(e)) && loadHistoryForAsset({
                                dispatch: r,
                                projectId: u,
                                assetId: l.id,
                                labelId: l.labelId
                            }), t.type === ACTION_NAMES.SET_LABEL_AS_CURRENT_ASSET) {
                            if (f = t.payload.labelId, e.assets[f]) return r(assetFetched(e.assets[f], !0)), [2];
                            if (f === e.fetchingAssetId) return [2];
                            r(startedFetchingAsset(f)), fetchLabeledAsset(f).then(function(t) {
                                if (t) {
                                    if (t.projectId !== u) {
                                        var n = new URL(window.location.href);
                                        n.searchParams.set("project", t.projectId), n.searchParams.set("label", f), n.searchParams.set("token", e.token || "");
                                        var i = n.href;
                                        return window.location.assign(i)
                                    }
                                    r(assetFetched(t, !0))
                                } else r(assetFetchFailed(f)), unauthorizedTroubleShoot()
                            }, function() {
                                r(assetFetchFailed(f)), unauthorizedTroubleShoot()
                            })
                        }
                        if (t.type === ACTION_NAMES.ASSET_FETCHED && (t.payload.current && (p = t.payload.asset.labelId, loadHistoryForAsset({
                                dispatch: r,
                                projectId: u,
                                assetId: t.payload.asset.id,
                                labelId: p
                            })), shouldPreloadNewAsset(e) && r(fetchAsset({
                                setAsCurrent: !1
                            }))), t.type === ACTION_NAMES.NO_MORE_ITEMS_TO_LABEL) {
                            if (e.mode === Mode.Reviewing) return [2];
                            showAllDone({
                                canCloseModal: hasPreviousAssetId(e),
                                userCanTurnOnRealtime: Boolean(e.customizationOptions && e.customizationOptions.realTime)
                            }).then(function(t) {
                                if (t === ResponsesToAllDone.ProjectHome) window.location.assign(labelboxDomain + "/projects/" + u);
                                else if (t === ResponsesToAllDone.TurnOnRealtime) {
                                    swal({
                                        title: "Waiting for task...",
                                        icon: "info",
                                        text: "The next asset will appear automatically when ready. Leave this window open.",
                                        button: !1,
                                        closeOnClickOutside: !1,
                                        closeOnEsc: !1,
                                        className: "no-"
                                    });
                                    var n = setInterval(function() {
                                        getActionToDispatchNextRowToLabel({
                                            projectId: u,
                                            shouldBeCurrentAsset: !0,
                                            assets: e.assets
                                        }).then(function(e) {
                                            e && e.type === ACTION_NAMES.ASSET_FETCHED && (new Audio("https://storage.googleapis.com/labeling-api-assets-prod/slow-spring-board.mp3").play(), clearInterval(n), swal.close(), r(e))
                                        })
                                    }, 1e4)
                                }
                            })
                        }
                        return [2]
                }
            })
        })
    }
    LabelTypes = exports.LabelTypes || (exports.LabelTypes = {}), LabelTypes.ANY = "Any", LabelTypes.SKIP = "Skip";
    var createLabelMutation = "mutation CreateLabel(\n  $id: ID!\n  $label: String!\n  $secondsToLabel: Float!\n  $rowId: ID!\n  $projectId: ID!\n  $typeName: String!\n  $templateId: String\n) {\n  createLabel(\n    data: {\n      id: $id\n      label: $label\n      secondsToLabel: $secondsToLabel\n      dataRow: { connect: { id: $rowId } }\n      project: { connect: { id: $projectId } }\n      type: { connect: { name: $typeName } }\n      templateId: $templateId\n    }\n  ) {\n    id\n    createdAt\n    type {\n      name\n    }\n  }\n}\n";

    function createLabel$1(e) {
        var t = e.id,
            r = e.projectId,
            n = e.rowId,
            i = e.label,
            o = e.user,
            s = e.secondsToLabel,
            u = e.typeName,
            a = e.templateId;
        return track(o, "Labeled Data"), sendQuery({
            query: createLabelMutation,
            variables: {
                id: t,
                label: i,
                projectId: r,
                rowId: n,
                secondsToLabel: s,
                typeName: u,
                templateId: a
            }
        }).then(function(e) {
            var t = e && e.data && e.data.createLabel;
            if (!t) throw e;
            var r = t.id,
                i = t.createdAt,
                o = t.type.name;
            return {
                id: r,
                createdAt: i,
                assetId: n,
                typeName: o
            }
        })
    }
    var updateLabelMutation = "mutation UpdateLabel($id: ID!, $label: String!, $typeName: String!) {\n  updateLabel(\n    where: { id: $id }\n    data: { label: $label, type: { connect: { name: $typeName } } }\n  ) {\n    id\n    createdAt\n    updatedAt\n    type {\n      name\n    }\n  }\n}\n";

    function updateLabel(e, t, r) {
        return sendQuery({
            query: updateLabelMutation,
            variables: {
                id: e,
                label: t,
                typeName: r
            }
        }).then(function(e) {
            var t = e && e.data && e.data.updateLabel;
            if (!t) throw e;
            var r = t.id;
            return {
                id: r,
                createdAt: t.createdAt,
                updatedAt: t.updatedAt,
                assetId: r,
                typeName: t.type.name
            }
        })
    }
    var pad$1 = function(e, t) {
            var r = "000000000" + e;
            return r.substr(r.length - t)
        },
        env = "object" == typeof window ? window : self,
        globalCount = Object.keys(env).length,
        mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        clientId = pad$1((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4),
        fingerprint_browser = function() {
            return clientId
        },
        getRandomValue, crypto = "undefined" != typeof window && (window.crypto || window.msCrypto) || "undefined" != typeof self && self.crypto;
    if (crypto) {
        var lim = Math.pow(2, 32) - 1;
        getRandomValue = function() {
            return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim)
        }
    } else getRandomValue = Math.random;
    var getRandomValue_browser = getRandomValue,
        c = 0,
        blockSize = 4,
        base = 36,
        discreteValues = Math.pow(base, blockSize);

    function randomBlock() {
        return pad$1((getRandomValue_browser() * discreteValues << 0).toString(base), blockSize)
    }

    function safeCounter() {
        return c = c < discreteValues ? c : 0, ++c - 1
    }

    function cuid() {
        return "c" + (new Date).getTime().toString(base) + pad$1(safeCounter().toString(base), blockSize) + fingerprint_browser() + (randomBlock() + randomBlock())
    }
    cuid.slug = function() {
        var e = (new Date).getTime().toString(36),
            t = safeCounter().toString(36).slice(-4),
            r = fingerprint_browser().slice(0, 1) + fingerprint_browser().slice(-1),
            n = randomBlock().slice(-2);
        return e.slice(-2) + t + r + n
    }, cuid.isCuid = function(e) {
        return "string" == typeof e && !!e.startsWith("c")
    }, cuid.isSlug = function(e) {
        if ("string" != typeof e) return !1;
        var t = e.length;
        return t >= 7 && t <= 10
    }, cuid.fingerprint = fingerprint_browser;
    var cuid_1 = cuid,
        createLabelIdFactory = function(e) {
            void 0 === e && (e = cuid_1);
            var t = new Map;
            return {
                get: function(r) {
                    var n = t.get(r);
                    if (n) return n;
                    var i = e();
                    return t.set(r, i), i
                },
                remove: function(e) {
                    return t.delete(e)
                }
            }
        };

    function secondsBetweenTimes(e, t) {
        return Math.abs((e - t) / 1e3)
    }
    var checkForErrors = function(e, t) {
            var r = selectCurrentAssetStartTime(e),
                n = selectCurrentAsset(e);
            return selectUser(e) ? e.projectId ? n ? "string" != typeof t ? "Label must be a string not " + typeof t + ". Label: " + JSON.stringify(t) : r ? null : "Start time not found for asset" : "No current asset" : "No current project" : "User not yet loaded"
        },
        idFactory = createLabelIdFactory(),
        initiateLabelCreation = function(e, t) {
            var r = t.typeName,
                n = t.label,
                i = t.templateId,
                o = selectCurrentAsset(e),
                s = selectUser(e),
                u = selectCurrentAssetStartTime(e),
                a = o.datarowId;
            return createLabel$1({
                id: idFactory.get(a),
                assetId: o.id,
                projectId: e.projectId,
                rowId: o.datarowId,
                label: n,
                user: s,
                secondsToLabel: secondsBetweenTimes(u, (new Date).getTime()),
                typeName: r,
                templateId: i || void 0
            }).then(function(e) {
                return idFactory.remove(a), e
            })
        },
        retryStrategy = function(e) {
            var t = void 0 === e ? {} : e,
                r = t.maxRetryAttempts,
                n = void 0 === r ? 3 : r,
                i = t.scalingDuration,
                o = void 0 === i ? 500 : i,
                s = t.noRetryChecks,
                u = void 0 === s ? [] : s;
            return function(e) {
                return e.pipe(mergeMap(function(e, t) {
                    var r = t + 1;
                    return console.log("Error", e), r > n || u.some(function(t) {
                        return t(e)
                    }) ? throwError(e) : (console.log("Attempt " + r + ": retrying in " + r * o + "ms"), timer(r * o))
                }))
            }
        },
        createdIds = new Set,
        labelSubmissionEpic = function(e, t) {
            var r = e.pipe(ofType(ACTION_NAMES.LABEL_SUBMITTED), withLatestFrom(t), debounceTime(300), map(function(e) {
                var t = e[0],
                    r = e[1],
                    n = t.payload.label,
                    i = checkForErrors(r, n);
                return i ? {
                    error: !0,
                    message: i,
                    state: r
                } : {
                    error: !1,
                    action: t,
                    state: r
                }
            }));
            return merge(r.pipe(filter(function(e) {
                return e.error
            }), map(function(e) {
                var t = e.message;
                return {
                    type: ACTION_NAMES.STATE_INVALID_FOR_LABELING,
                    payload: {
                        message: t
                    }
                }
            })), r.pipe(filter(function(e) {
                return !e.error
            }), concatMap(function(e) {
                var t = e.state,
                    r = e.action;
                return defer(function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, n, i, o, s, u, a, c;
                        return __generator(this, function(l) {
                            if (e = selectCurrentAsset(t), !r) return console.log("Action is undefined"), [2, {
                                response: null
                            }];
                            if (!e) return console.log("Error: CurrentAsset is undefined"), [2, {
                                response: null
                            }];
                            if (n = e.datarowId, i = r.payload, o = i.label, s = i.typeName, u = i.templateId, a = s || e.typeName || exports.LabelTypes.ANY, e.label && e.labelId) {
                                if (debugLog("Updating " + n), !e.labelId) return console.log("Error: CurrentAsset.labelId is Undefined" + JSON.stringify(e)), [2, {
                                    response: null
                                }];
                                c = updateLabel(e.labelId, o, a)
                            } else createdIds.has(n) ? (debugLog("Aborting any action. Asset " + e.datarowId + " was already labeled."), c = Promise.resolve(null)) : (debugLog("Saving " + n), c = initiateLabelCreation(t, {
                                label: o,
                                typeName: a,
                                templateId: u
                            }).then(function(e) {
                                return createdIds.add(n), e
                            }));
                            return [2, c.then(function(e) {
                                return {
                                    response: e,
                                    action: r
                                }
                            })]
                        })
                    })
                }).pipe(filter(function(e) {
                    return null !== e.response
                }), retryWhen(retryStrategy({
                    maxRetryAttempts: 5,
                    noRetryChecks: [labelTooLongCheck, notLoggedInChecked]
                })), map(function(e) {
                    var t = e.response,
                        r = t.id,
                        n = t.createdAt,
                        i = t.assetId,
                        o = t.typeName,
                        s = e.action;
                    return labelChangeSuccess(i, s.payload.label, r, o, n)
                }), catchError(function(e) {
                    return troubleShootLabelChangeRequest(t, e), of ({
                        type: ACTION_NAMES.FAILED_TO_SAVE_LABEL,
                        payload: {
                            error: e
                        }
                    })
                }))
            })))
        },
        extendReservations = "mutation ExtendReservations($projectId: ID!) {\n  extendReservations(projectId: $projectId, queueType: LabelingQueue)\n}\n";

    function keepReservationsFromExpiring(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(r) {
                return t ? [2, e({
                    query: extendReservations,
                    variables: {
                        projectId: t
                    }
                })] : [2]
            })
        })
    }
    var every10Minutes = 6e5,
        extendReservationsEpic = function(e, t) {
            return e.pipe(take(1), switchMap(function() {
                return t.pipe(map(selectProjectId), filter(Boolean), distinctUntilChanged())
            }), switchMap(function(e) {
                return timer(0, every10Minutes).pipe(switchMap(function() {
                    return keepReservationsFromExpiring(sendQuery, e)
                }), map(function() {
                    return reservationsExtended()
                }), catchError(function(e) {
                    return console.log("Extending Reservation Failed", e), of (failedToExtendReservations())
                }))
            }))
        },
        preloadAssetEpic = function(e) {
            return e.ofType(ACTION_NAMES.ASSET_FETCHED).pipe(filter(function(e) {
                return !e.payload.current
            }), mergeMap(function(e) {
                var t = getPreloader();
                if (!t) return of(!1);
                var r = whitelistCurrentAssetForDeveloper(e.payload.asset);
                if (!r) return console.error("Unable to preload undefined asset"), of (!1);
                try {
                    var n = t(r);
                    return "function" != typeof n.then ? (console.error("Preloading function must return a promise that resolves when the asset is loaded."), of (!1)) : defer(function() {
                        return n.then(function() {
                            return r
                        }).catch(function(e) {
                            return console.warn("Error occurred preloading next asset:", e), !1
                        })
                    })
                } catch (e) {
                    return console.warn("Error occurred preloading next asset:", e), of (!1)
                }
            }), filter(Boolean), map(function(e) {
                return assetPreloaded(e.id)
            }))
        },
        rootEpic = combineEpics(labelSubmissionEpic, preloadAssetEpic, extendReservationsEpic),
        epicMiddleware = createEpicMiddleware(),
        effectMiddleware = function(e) {
            var t = e.dispatch,
                r = e.getState;
            return function(e) {
                return function(n) {
                    var i = e(n);
                    return onAction(r(), n, t), i
                }
            }
        },
        logger = function(e) {
            return function(t) {
                return function(r) {
                    debugLog("dispatching", r);
                    var n = t(r);
                    return debugLog("next state", e.getState()), n
                }
            }
        },
        middlewares = [logger, epicMiddleware, effectMiddleware];
    useLogRocket() && middlewares.push(LogRocket.reduxMiddleware());
    var configureStore = function() {
            var e = createStore(reducer, applyMiddleware.apply(void 0, middlewares));
            return epicMiddleware.run(rootEpic), e
        },
        store = configureStore(),
        state$ = new BehaviorSubject(store.getState()),
        getState = function() {
            return store.getState()
        };
    store.subscribe(function() {
        return state$.next(store.getState())
    });
    var dispatch$8 = function(e) {
            store.dispatch(e)
        },
        AttachmentType, LabelOrderByInput;

    function generateTemplateCustomizationFunction(e) {
        var t = e.projectId,
            r = t ? sendQuery({
                query: templateCustomizationQuery,
                variables: {
                    projectId: t
                }
            }).then(function(e) {
                return e.data.project.ontology.normalized
            }).then(function(e) {
                return e || debugLog("Error: No ontology found for projectId: '" + t + "'"), dispatch$8(setCustomizationOptions(e)), e
            }).catch(function() {
                return null
            }) : Promise.resolve({
                tools: [],
                classifications: []
            }),
            n = [];
        return window.addEventListener("message", function(e) {
                var t = e.data;
                t && t.customizationUpdate && n.forEach(function(e) {
                    e(t.customizationUpdate), dispatch$8(setCustomizationOptions(t.customizationUpdate))
                })
            }),
            function() {
                return {
                    subscribe: function(e) {
                        return n.push(e), r.then(function(t) {
                            t && e(t)
                        }), {
                            unsubscribe: function() {
                                var t = n.indexOf(e);
                                n = n.slice(0, t).concat(n.slice(t + 1))
                            }
                        }
                    }
                }
            }
    }
    AttachmentType = exports.AttachmentType || (exports.AttachmentType = {}), AttachmentType.IMAGE = "IMAGE", AttachmentType.IMAGE_OVERLAY = "IMAGE_OVERLAY", AttachmentType.TEXT = "TEXT", AttachmentType.VIDEO = "VIDEO",
        function(e) {
            e.agreement_ASC = "agreement_ASC", e.agreement_DESC = "agreement_DESC", e.benchmarkAgreement_ASC = "benchmarkAgreement_ASC", e.benchmarkAgreement_DESC = "benchmarkAgreement_DESC", e.createdAt_ASC = "createdAt_ASC", e.createdAt_DESC = "createdAt_DESC", e.deleted_ASC = "deleted_ASC", e.deleted_DESC = "deleted_DESC", e.id_ASC = "id_ASC", e.id_DESC = "id_DESC", e.label_ASC = "label_ASC", e.label_DESC = "label_DESC", e.secondsToLabel_ASC = "secondsToLabel_ASC", e.secondsToLabel_DESC = "secondsToLabel_DESC", e.updatedAt_ASC = "updatedAt_ASC", e.updatedAt_DESC = "updatedAt_DESC"
        }(LabelOrderByInput || (LabelOrderByInput = {}));
    var _this = void 0,
        initURL = window.location.href,
        initialProjectId = getQueryParam(initURL, "project");

    function setLabelForAsset(e, t, r) {
        return dispatch$8(labelSubmitted({
            label: e,
            typeName: t,
            templateId: r
        })), merge(state$.pipe(map(function(e) {
            return selectCurrentAsset(e)
        }), filter(function(t) {
            return Boolean(t && t.label === e && !t.labelBeingSaved)
        }), map(function(e) {
            if (e) return {
                dataRowId: e.datarowId,
                data: e.data,
                label: e.label
            }
        })), state$.pipe(filter(function(e) {
            return Boolean(e.error)
        }), map(function(e) {
            return e.error
        }), mergeMap(function(e) {
            return throwError(e)
        }))).pipe(take(1)).toPromise()
    }

    function fetchNextAssetToLabel() {
        var e = selectCurrentAsset(getState()),
            t = e && e.id,
            r = state$.pipe(map(selectCurrentAsset), filter(function(e) {
                return Boolean(e && e.id !== t)
            }), map(function(e) {
                return e.data
            }), take(1)).toPromise();
        return dispatch$8(userRequestNextUnlabeledAsset()), r
    }
    window.addEventListener("load", function() {
        return AccessToken.getToken().then(function(e) {
            dispatch$8(appInit({
                projectId: initialProjectId,
                labelId: getQueryParam(initURL, "label"),
                token: e
            }))
        })
    });
    var setLabelAsCurrentAsset$$1 = function(e) {
            return dispatch$8(setLabelAsCurrentAsset$1(e))
        },
        getTemplateCustomization = generateTemplateCustomizationFunction({
            projectId: initialProjectId
        }),
        currentAsset = function() {
            return state$.pipe(map(selectCurrentAsset), map(whitelistCurrentAssetForDeveloper), distinctUntilChanged(function(e, t) {
                return equals(e, t)
            }), tap(function(e) {
                return debugLog("Emitting asset: ", e)
            }))
        },
        skip = function() {
            return setLabelForAsset("Skip", exports.LabelTypes.SKIP)
        },
        update = function() {
            return setLabelForAsset("Any", exports.LabelTypes.ANY)
        },
        enablePreloading = function(e) {
            var t = e.preloadFunction;
            "function" == typeof t ? registerPreloader(t) : console.error("Please call Labelbox.enablePreloading({preloadFunction: YOUR_FUNCTION_TO_PRELOAD}).")
        };

    function markAssetAsLabeled(e) {
        var t = e.label,
            r = e.labelId,
            n = e.typeName;
        return dispatch$8(assetMarkedAsLabeled({
            label: t,
            labelId: r,
            typeName: n
        })), !0
    }
    var getCurrentUser = function() {
            return __awaiter(_this, void 0, void 0, function() {
                var e, t, r, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, AccessToken.getToken()];
                        case 1:
                            return i.sent(), [4, fetchUser()];
                        case 2:
                            return (e = i.sent()) ? (t = e.id, r = e.email, n = e.name, [2, {
                                id: t,
                                email: r,
                                name: n
                            }]) : [2, null]
                    }
                })
            })
        },
        _createIdFactory = createLabelIdFactory;
    exports.setLabelForAsset = setLabelForAsset, exports.fetchNextAssetToLabel = fetchNextAssetToLabel, exports.setLabelAsCurrentAsset = setLabelAsCurrentAsset$$1, exports.getTemplateCustomization = getTemplateCustomization, exports.currentAsset = currentAsset, exports.skip = skip, exports.update = update, exports.enablePreloading = enablePreloading, exports.markAssetAsLabeled = markAssetAsLabeled, exports.getCurrentUser = getCurrentUser, exports._createIdFactory = _createIdFactory, Object.defineProperty(exports, "__esModule", {
        value: !0
    })
});