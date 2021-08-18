// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hkXzs":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b3bb0a59227406fc";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"23obh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _updateView = require("./View/updateView");
var _updateViewDefault = parcelHelpers.interopDefault(_updateView);
var _outputToBoard = require("./View/outputToBoard");
var _outputToBoardDefault = parcelHelpers.interopDefault(_outputToBoard);
var _onHumanPlayerCardSelect = require("./Gameplay/Play/onHumanPlayerCardSelect");
var _onHumanPlayerCardSelectDefault = parcelHelpers.interopDefault(_onHumanPlayerCardSelect);
var _handleCardPickup = require("./Gameplay/Pickup/handleCardPickup");
var _handleCardPickupDefault = parcelHelpers.interopDefault(_handleCardPickup);
var _managers = require("./Managers/managers");
// * add window references for debugging
window.Game = _managers.Game;
window.Deck = _managers.Deck;
window.Players = _managers.Players;
window.View = _managers.View;
// * ------ Initialisation ------- * //
// * Initialise Game World
_managers.Game.init({
});
// * Initialise Players
_managers.Players.init({
    num_players: 4
});
// * Initialise View
_managers.View.init({
    pickup_deck_el: document.getElementById("pickup_deck"),
    discard_deck_el: document.getElementById("discard_deck"),
    updates_board_el: document.getElementById("game_updates")
});
// * initialise the deck
_managers.Deck.init({
});
// * ------ Preparation ------- * //
// * Create the players
_managers.Players.createPlayers([
    {
        el: document.getElementById("Player_0"),
        is_human: true,
        name: "Human Player"
    },
    {
        el: document.getElementById("Player_1"),
        is_human: false,
        name: "AI Player 1"
    },
    {
        el: document.getElementById("Player_2"),
        is_human: false,
        name: "AI Player 2"
    },
    {
        el: document.getElementById("Player_3"),
        is_human: false,
        name: "AI Player 3"
    }, 
]);
// * prepare the deck
_managers.Deck.prepareDeck();
// * deal cards to each player
_managers.Deck.dealCards(_managers.Players.getPlayerList());
// * ------ Start Play ------- * //
// * Do initial draw
_updateViewDefault.default();
// * Assign interactions to view
document.querySelector("#pickup_deck").addEventListener("mousedown", _handleCardPickupDefault.default);
const human_player = _managers.Players.getPlayerList().find(function(player) {
    return player.getIsHuman();
});
human_player.getPlayerEl().querySelector(".card_list").addEventListener("mousedown", _onHumanPlayerCardSelectDefault.default);
// *
_outputToBoardDefault.default(`The starting card is a ${_managers.Deck.getDiscardDeckTopCard().name}`);

},{"./View/updateView":"ilqS8","./View/outputToBoard":"W6Eqs","./Gameplay/Play/onHumanPlayerCardSelect":"hlr0u","./Gameplay/Pickup/handleCardPickup":"flFqQ","./Managers/managers":"5IueX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ilqS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _drawPlayerDecks = require("./drawPlayerDecks");
var _drawPlayerDecksDefault = parcelHelpers.interopDefault(_drawPlayerDecks);
var _drawDiscardDeck = require("./drawDiscardDeck");
var _drawDiscardDeckDefault = parcelHelpers.interopDefault(_drawDiscardDeck);
exports.default = updateView = ()=>{
    // * Draw player decks
    _drawPlayerDecksDefault.default();
    // * Draw discard decks
    _drawDiscardDeckDefault.default();
};

},{"./drawPlayerDecks":"elYcq","./drawDiscardDeck":"1JqOF","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"elYcq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loop = require("./../Utilities/loop");
var _loopDefault = parcelHelpers.interopDefault(_loop);
var _managers = require("./../Managers/managers");
exports.default = drawPlayerDecks = ()=>{
    _loopDefault.default(_managers.Players.getPlayerList(), (player)=>{
        const deck = player.getCurrentCards();
        // * get deck element
        const deck_el = player.getPlayerEl().querySelector('.card_list');
        // * remove HTML
        deck_el.innerHTML = "";
        _loopDefault.default(deck, (card)=>{
            deck_el.insertAdjacentHTML("beforeend", _managers.View.createListedCardHTML(card, true));
        });
    });
};

},{"./../Utilities/loop":"cwOcG","./../Managers/managers":"5IueX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cwOcG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loop(array, cb, dir = 1, scope) {
    if (!Array.isArray(array) && // eslint-disable-next-line no-prototype-builtins
    !NodeList.prototype.isPrototypeOf(array) && // eslint-disable-next-line no-prototype-builtins
    !HTMLCollection.prototype.isPrototypeOf(array)) return;
    let i = dir == 1 ? 0 : array.length - 1, l = dir == 1 ? array.length : 0;
    for(; dir == 1 ? i < l : i > l; dir == 1 ? i++ : i--)cb.call(scope, array[i], i);
}
exports.default = loop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5IueX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// * Export managers through here
parcelHelpers.export(exports, "Game", ()=>_gameJs.Game
);
parcelHelpers.export(exports, "Deck", ()=>_deckJs.Deck
);
parcelHelpers.export(exports, "Players", ()=>_playerJs.Players
);
parcelHelpers.export(exports, "View", ()=>_viewJs.View
);
var _gameJs = require("./game.js");
var _deckJs = require("./deck.js");
var _playerJs = require("./player.js");
var _viewJs = require("./view.js");

},{"./game.js":"37AZp","./deck.js":"iQ0ND","./player.js":"e3V8h","./view.js":"fuhyS","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"37AZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game
);
var _updateObject = require("./../Utilities/updateObject");
// * Manage the running of the game, linking components
const GameManager = ()=>{
    const state = {
        mode: "DEBUG",
        active_player: null,
        AI_interval_speed: null,
        AI_interval: null
    };
    // * Initialise the game world with a new config
    const init = (config = {
    })=>{
        _updateObject.updateObject(state, config);
    };
    // * Get current game state
    const getCurrentGameState = ()=>{
        return state.current_game_state;
    };
    // * Set current game state
    const setCurrentGameState = (game_state)=>{
        _updateObject.updateObject(state, {
            current_game_state: game_state
        });
    };
    return {
        init,
        getCurrentGameState,
        setCurrentGameState
    };
};
const Game = GameManager();

},{"./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e3rXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateObject", ()=>updateObject
);
const updateObject = (oldObject, newObj)=>{
    for(const key in newObj)if (Object.hasOwnProperty.call(newObj, key)) oldObject[key] = newObj[key];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iQ0ND":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deck", ()=>Deck
);
var _debugDetail = require("../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _cards = require("./../Cards/cards");
var _loop = require("./../Utilities/loop");
var _loopDefault = parcelHelpers.interopDefault(_loop);
var _updateObject = require("./../Utilities/updateObject");
const DeckManager = ()=>{
    const PICKUP_DECK = _cards.cards;
    const DISCARD_DECK = [];
    const state = {
        starting_hand_size: 7
    };
    const init = (config)=>{
        _updateObject.updateObject(state, config);
    };
    const prepareDeck = ()=>{
        // * Shuffle Pickup deck
        shufflePickUpDeck();
        // * Move top card from Pickup to Discard Deck
        insertCardAtIndexToDiscardDeck(0, removeCardByIndexFromPickupDeck(0));
    };
    // * Shuffle the deck
    const shufflePickUpDeck = ()=>{
        shuffle(PICKUP_DECK, removeCardByIndexFromPickupDeck, insertCardAtIndexToPickupDeck);
    };
    const shuffleDiscardDeck = ()=>{
        shuffle(DISCARD_DECK, removeCardByIndexFromDiscardDeck, insertCardAtIndexToDiscardDeck);
    };
    const shuffle = (deck, get, insert)=>{
        let r, card;
        // Create a copy of the cardArray to shuffle (Works by swapping the last card with a randomly selected card)
        _loopDefault.default(deck, (c, idx)=>{
            // Get a random Integer
            r = Math.floor(Math.random() * idx);
            // Get the next last card in the Store.deck
            card = get(idx - 1);
            // Whatever card was initially chosen, place a randomly selected one there now
            insert(idx - 1, get(r));
            // Place the card that was initially chosen in the position of the randomly selected card
            insert([
                r
            ], card);
        }, -1);
    };
    // * Deal the cards to the players
    const dealCards = (players)=>{
        _loopDefault.default(players, (player, p)=>{
            let cards = removeFirstNCardsFromPickupDeck(state.starting_hand_size);
            player.addCards(cards);
        });
    };
    const getPickupDeck = ()=>{
        return PICKUP_DECK;
    };
    const getPickupDeckTopCard = ()=>{
        return PICKUP_DECK[0];
    };
    const getPickupDeckSize = ()=>{
        return PICKUP_DECK.length;
    };
    const getDiscardDeck = ()=>{
        return DISCARD_DECK;
    };
    const getDiscardDeckTopCard = ()=>{
        return DISCARD_DECK[0];
    };
    const getDiscardDeckSize = ()=>{
        return DISCARD_DECK.length;
    };
    const removeCardByIndexFromPickupDeck = (idx)=>{
        return PICKUP_DECK.splice(idx, 1)[0];
    };
    const removeCardByIndexFromDiscardDeck = (idx)=>{
        return DISCARD_DECK.splice(idx, 1)[0];
    };
    const removeFirstNCardsFromPickupDeck = (num_cards)=>{
        return PICKUP_DECK.splice(0, num_cards);
    };
    const removeFirstNCardsFromDiscardDeck = (num_cards)=>{
        return DISCARD_DECK.splice(0, num_cards);
    };
    const removeCardAtIndexFromPickupDeck = (idx)=>{
        return PICKUP_DECK.splice(idx, 1)[0];
    };
    const removeCardAtIndexFromDiscardDeck = (idx)=>{
        return DISCARD_DECK.splice(idx, 1)[0];
    };
    const insertCardAtIndexToPickupDeck = (idx, card)=>{
        PICKUP_DECK.splice(idx, 0, card);
    };
    const insertCardAtIndexToDiscardDeck = (idx, card)=>{
        DISCARD_DECK.splice(idx, 0, card);
    };
    const insertToTopOfPickupDeck = (card)=>{
        PICKUP_DECK.unshift(card);
    };
    const insertToTopOfDiscardDeck = (card)=>{
        DISCARD_DECK.unshift(card);
    };
    const swapDecks = ()=>{
        _debugDetailDefault.default(`Refilling Pickup Deck from Discard Deck`);
        // TODO - What if no cards are left?
        // * Move all discarded cards to pickup deck, leaving last discarded card in discard pile
        const top_discard_card = removeCardAtIndexFromDiscardDeck(0);
        // * loop through remaining discard deck and add to pickup deck
        for(let idx = 0; idx < getDiscardDeckSize(); idx++)insertToTopOfPickupDeck(removeCardByIndexFromDiscardDeck(idx));
        // * add initial discarded card back to discard pile
        insertToTopOfDiscardDeck(top_discard_card);
    };
    return {
        init,
        prepareDeck,
        getPickupDeck,
        getPickupDeckSize,
        getPickupDeckTopCard,
        removeCardByIndexFromPickupDeck,
        removeFirstNCardsFromPickupDeck,
        removeCardAtIndexFromPickupDeck,
        insertCardAtIndexToPickupDeck,
        insertToTopOfPickupDeck,
        getDiscardDeck,
        getDiscardDeckSize,
        getDiscardDeckTopCard,
        removeCardByIndexFromDiscardDeck,
        removeFirstNCardsFromDiscardDeck,
        removeCardAtIndexFromDiscardDeck,
        insertCardAtIndexToDiscardDeck,
        insertToTopOfDiscardDeck,
        shufflePickUpDeck,
        shuffleDiscardDeck,
        swapDecks,
        dealCards
    };
};
const Deck = DeckManager();

},{"../Utilities/debugDetail":"e4cZo","./../Cards/cards":"7d7DK","./../Utilities/loop":"cwOcG","./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e4cZo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = debugDetail = (detail)=>console.log(detail)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7d7DK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cards", ()=>cards
);
var _powers = require("./powers");
const cards = [
    {
        value: "A",
        suit: "hearts",
        name: "Ace of Hearts",
        t: 2,
        l: 0,
        power: _powers.CHANGE_SUIT
    },
    {
        value: 13,
        suit: "hearts",
        name: "King of Hearts",
        t: 2,
        l: 12,
        power: _powers.ANOTHER_TURN
    },
    {
        value: 12,
        suit: "hearts",
        name: "Queen of Hearts",
        t: 2,
        l: 11
    },
    {
        value: 11,
        suit: "hearts",
        name: "Jack of Hearts",
        t: 2,
        l: 10
    },
    {
        value: 10,
        suit: "hearts",
        name: "10 of Hearts",
        t: 2,
        l: 9,
        power: _powers.CHANGE_DIRECTION
    },
    {
        value: 9,
        suit: "hearts",
        name: "9 of Hearts",
        t: 2,
        l: 8
    },
    {
        value: 8,
        suit: "hearts",
        name: "8 of Hearts",
        t: 2,
        l: 7,
        power: _powers.MISS_TURN
    },
    {
        value: 7,
        suit: "hearts",
        name: "7 of Hearts",
        t: 2,
        l: 6
    },
    {
        value: 6,
        suit: "hearts",
        name: "6 of Hearts",
        t: 2,
        l: 5
    },
    {
        value: 5,
        suit: "hearts",
        name: "5 of Hearts",
        t: 2,
        l: 4
    },
    {
        value: 4,
        suit: "hearts",
        name: "4 of Hearts",
        t: 2,
        l: 3
    },
    {
        value: 3,
        suit: "hearts",
        name: "3 of Hearts",
        t: 2,
        l: 2
    },
    {
        value: 2,
        suit: "hearts",
        name: "2 of Hearts",
        t: 2,
        l: 1,
        power: _powers.PICKUP_2
    },
    {
        value: "A",
        suit: "clubs",
        name: "Ace of Clubs",
        t: 0,
        l: 0,
        power: _powers.CHANGE_SUIT
    },
    {
        value: 13,
        suit: "clubs",
        name: "King of Clubs",
        t: 0,
        l: 12,
        power: _powers.ANOTHER_TURN
    },
    {
        value: 12,
        suit: "clubs",
        name: "Queen of Clubs",
        t: 0,
        l: 11
    },
    {
        value: 11,
        suit: "clubs",
        name: "Jack of Clubs",
        t: 0,
        l: 10,
        power: _powers.PICKUP_7
    },
    {
        value: 10,
        suit: "clubs",
        name: "10 of Clubs",
        t: 0,
        l: 9,
        power: _powers.CHANGE_DIRECTION
    },
    {
        value: 9,
        suit: "clubs",
        name: "9 of Clubs",
        t: 0,
        l: 8
    },
    {
        value: 8,
        suit: "clubs",
        name: "8 of Clubs",
        t: 0,
        l: 7,
        power: _powers.MISS_TURN
    },
    {
        value: 7,
        suit: "clubs",
        name: "7 of Clubs",
        t: 0,
        l: 6
    },
    {
        value: 6,
        suit: "clubs",
        name: "6 of Clubs",
        t: 0,
        l: 5
    },
    {
        value: 5,
        suit: "clubs",
        name: "5 of Clubs",
        t: 0,
        l: 4
    },
    {
        value: 4,
        suit: "clubs",
        name: "4 of Clubs",
        t: 0,
        l: 3
    },
    {
        value: 3,
        suit: "clubs",
        name: "3 of Clubs",
        t: 0,
        l: 2
    },
    {
        value: 2,
        suit: "clubs",
        name: "2 of Clubs",
        t: 0,
        l: 1,
        power: _powers.PICKUP_2
    },
    {
        value: "A",
        suit: "diamonds",
        name: "Ace of Diamonds",
        t: 1,
        l: 0,
        power: _powers.CHANGE_SUIT
    },
    {
        value: 13,
        suit: "diamonds",
        name: "King of Diamonds",
        t: 1,
        l: 12,
        power: _powers.ANOTHER_TURN
    },
    {
        value: 12,
        suit: "diamonds",
        name: "Queen of Diamonds",
        t: 1,
        l: 11
    },
    {
        value: 11,
        suit: "diamonds",
        name: "Jack of Diamonds",
        t: 1,
        l: 10
    },
    {
        value: 10,
        suit: "diamonds",
        name: "10 of Diamonds",
        t: 1,
        l: 9,
        power: _powers.CHANGE_DIRECTION
    },
    {
        value: 9,
        suit: "diamonds",
        name: "9 of Diamonds",
        t: 1,
        l: 8
    },
    {
        value: 8,
        suit: "diamonds",
        name: "8 of Diamonds",
        t: 1,
        l: 7,
        power: _powers.MISS_TURN
    },
    {
        value: 7,
        suit: "diamonds",
        name: "7 of Diamonds",
        t: 1,
        l: 6
    },
    {
        value: 6,
        suit: "diamonds",
        name: "6 of Diamonds",
        t: 1,
        l: 5
    },
    {
        value: 5,
        suit: "diamonds",
        name: "5 of Diamonds",
        t: 1,
        l: 4
    },
    {
        value: 4,
        suit: "diamonds",
        name: "4 of Diamonds",
        t: 1,
        l: 3
    },
    {
        value: 3,
        suit: "diamonds",
        name: "3 of Diamonds",
        t: 1,
        l: 2
    },
    {
        value: 2,
        suit: "diamonds",
        name: "2 of Diamonds",
        t: 1,
        l: 1,
        power: _powers.PICKUP_2
    },
    {
        value: "A",
        suit: "spades",
        name: "Ace of Spades",
        t: 3,
        l: 0,
        power: _powers.CHANGE_SUIT
    },
    {
        value: 13,
        suit: "spades",
        name: "King of Spades",
        t: 3,
        l: 12,
        power: _powers.ANOTHER_TURN
    },
    {
        value: 12,
        suit: "spades",
        name: "Queen of Spades",
        t: 3,
        l: 11
    },
    {
        value: 11,
        suit: "spades",
        name: "Jack of Spades",
        t: 3,
        l: 10,
        power: _powers.PICKUP_7
    },
    {
        value: 10,
        suit: "spades",
        name: "10 of Spades",
        t: 3,
        l: 9,
        power: _powers.CHANGE_DIRECTION
    },
    {
        value: 9,
        suit: "spades",
        name: "9 of Spades",
        t: 3,
        l: 8
    },
    {
        value: 8,
        suit: "spades",
        name: "8 of Spades",
        t: 3,
        l: 7,
        power: _powers.MISS_TURN
    },
    {
        value: 7,
        suit: "spades",
        name: "7 of Spades",
        t: 3,
        l: 6
    },
    {
        value: 6,
        suit: "spades",
        name: "6 of Spades",
        t: 3,
        l: 5
    },
    {
        value: 5,
        suit: "spades",
        name: "5 of Spades",
        t: 3,
        l: 4
    },
    {
        value: 4,
        suit: "spades",
        name: "4 of Spades",
        t: 3,
        l: 3
    },
    {
        value: 3,
        suit: "spades",
        name: "3 of Spades",
        t: 3,
        l: 2
    },
    {
        value: 2,
        suit: "spades",
        name: "2 of Spades",
        t: 3,
        l: 1,
        power: _powers.PICKUP_2
    }, 
];

},{"./powers":"9DqYi","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9DqYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PICKUP_2", ()=>PICKUP_2
);
parcelHelpers.export(exports, "PICKUP_7", ()=>PICKUP_7
);
parcelHelpers.export(exports, "MISS_TURN", ()=>MISS_TURN
);
parcelHelpers.export(exports, "ANOTHER_TURN", ()=>ANOTHER_TURN
);
parcelHelpers.export(exports, "CHANGE_DIRECTION", ()=>CHANGE_DIRECTION
);
parcelHelpers.export(exports, "CHANGE_SUIT", ()=>CHANGE_SUIT
);
const PICKUP_2 = "PICKUP_2";
const PICKUP_7 = "PICKUP_7";
const MISS_TURN = "MISS_TURN";
const ANOTHER_TURN = "ANOTHER_TURN";
const CHANGE_DIRECTION = "CHANGE_DIRECTION";
const CHANGE_SUIT = "CHANGE_SUIT";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e3V8h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Players", ()=>Players
);
var _updateObject = require("./../Utilities/updateObject");
var _player = require("../Player/player");
var _debugDetail = require("../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _playerStates = require("../Player/player_states");
var _loop = require("../Utilities/loop");
var _loopDefault = parcelHelpers.interopDefault(_loop);
const PlayerManager = ()=>{
    const state = {
        num_players: 4,
        player_list: [],
        current_player_idx: 0,
        previous_player_idx: null,
        next_player_idx: null,
        play_direction: 1
    };
    const init = (config)=>{
        _updateObject.updateObject(state, config);
        state.previous_player_idx = determinePreviousPlayerIdx();
        state.next_player_idx = determineNextPlayerIdx();
    };
    const determineNextPlayerIdx = ()=>{
        let next_idx = state.current_player_idx + state.play_direction;
        return next_idx < 0 ? state.num_players - 1 : next_idx >= state.num_players ? 0 : next_idx;
    };
    const determinePreviousPlayerIdx = ()=>{
        let prev_idx = state.current_player_idx - state.play_direction;
        return prev_idx < 0 ? state.num_players - 1 : prev_idx >= state.num_players ? 0 : prev_idx;
    };
    const createPlayers = (player_configs)=>{
        _loopDefault.default(player_configs, (config)=>{
            let player = _player.Player();
            player.init({
                is_human: config.is_human,
                name: config.name,
                el: config.el
            });
            state.player_list.push(player);
        });
    };
    const setNextActivePlayer = ()=>{
        // * set the next player to current
        state.current_player_idx = state.next_player_idx;
        // * current idx now becomes previous idx
        state.previous_player_idx = determinePreviousPlayerIdx();
        // * Get and update new previous
        let previous_player = state.player_list[state.previous_player_idx];
        // * Reset to idle
        previous_player.resetStatus();
        // * next player now becomes next + (1 || -1)
        state.next_player_idx = determineNextPlayerIdx();
        // * Get and update new current player
        let current_player = state.player_list[state.current_player_idx];
        // * Ensure no effects are in place
        if (current_player.getEffectState() === _playerStates.EFFECT_NO_EFFECT) // * unaffected, normal play
        current_player.updatePlayState(_playerStates.TO_PLAY);
        _debugDetailDefault.default(`Current active player is now: ${current_player.getPlayerName()}`);
    };
    const getCurrentActivePlayer = ()=>{
        return state.player_list[state.current_player_idx];
    };
    const getCurrentActivePlayerIdx = ()=>{
        return state.current_player_idx;
    };
    const getCurrentNextPlayer = ()=>{
        return state.player_list[state.next_player_idx];
    };
    const getCurrentNextPlayerIdx = ()=>{
        return state.next_player_idx;
    };
    const getCurrentPreviousPlayer = ()=>{
        return state.player_list[state.previous_player_idx];
    };
    const getCurrentPreviousPlayerIdx = ()=>{
        return state.previous_player_idx;
    };
    const getPlayerList = ()=>{
        return state.player_list;
    };
    const changePlayDirection = ()=>{
        state.play_direction = state.play_direction * -1;
        // * set next to previous player
        state.next_player_idx = state.previous_player_idx;
    };
    return {
        init,
        createPlayers,
        setNextActivePlayer,
        getCurrentActivePlayer,
        getCurrentActivePlayerIdx,
        getCurrentNextPlayer,
        getCurrentNextPlayerIdx,
        getCurrentPreviousPlayer,
        getCurrentPreviousPlayerIdx,
        getPlayerList,
        changePlayDirection
    };
};
const Players = PlayerManager();

},{"./../Utilities/updateObject":"e3rXy","../Player/player":"92V2m","../Utilities/debugDetail":"e4cZo","../Player/player_states":"g1ajd","../Utilities/loop":"cwOcG","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"92V2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
var _debugDetail = require("../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _updateObject = require("./../Utilities/updateObject");
var _playerStates = require("./player_states");
const Player = ()=>{
    const state = {
        name: null,
        deck: [],
        el: null,
        is_human: false,
        status: {
            play_state: _playerStates.IDLE,
            action: _playerStates.ACTION_NO_ACTION,
            effect: _playerStates.EFFECT_NO_EFFECT
        }
    };
    // * Initialise the player with a config object
    const init = (config)=>{
        _updateObject.updateObject(state, config);
    };
    // * Add a card to the player deck
    const addCard = (card)=>{
        state.deck.push(card);
    };
    // * Add cards to the player deck
    const addCards = (cards)=>{
        state.deck = state.deck.concat(cards);
    };
    // * Remove a card at index
    const removeCardAtIndex = (idx)=>{
        state.deck.splice(idx, 1)[0];
    };
    // * Remove a number of cards starting at index
    const removeCards = (idx, num_cards)=>{
        state.deck.splice(idx, num_cards);
    };
    // * Remove a selected card by value/suit
    const removeCard = ({ value , suit  })=>{
        let cardIdx = state.deck.findIndex((card)=>{
            return card.value == value && card.suit == suit;
        });
        if (cardIdx < 0) console.error("Selected player card not found");
        return state.deck.splice(cardIdx, 1)[0];
    };
    // * Get the players name
    const getPlayerName = ()=>{
        return state.name;
    };
    // * Get is the player human
    const getIsHuman = ()=>{
        return state.is_human;
    };
    // * Get current cards
    const getCurrentCards = ()=>{
        return state.deck;
    };
    // * Get current hand size
    const getHandSize = ()=>{
        return state.deck.length;
    };
    // * Reset the player status
    const resetStatus = ()=>{
        state.status = {
            play_state: _playerStates.IDLE,
            action: _playerStates.ACTION_NO_ACTION,
            effect: _playerStates.EFFECT_NO_EFFECT
        };
    };
    // * Get the full player status
    const getStatus = ()=>{
        return state.status;
    };
    // * update the play state
    const updatePlayState = (play_state)=>{
        // * Check acceptable state provided
        if (![
            _playerStates.IDLE,
            _playerStates.TO_PLAY,
            _playerStates.HAS_PLAYED
        ].includes(play_state)) _debugDetailDefault.default(`${state.name} [state.play_state] provided unacceptable state: ${play_state}`);
        state.status.play_state = play_state;
        _debugDetailDefault.default(`${state.name} [state.play_state] is now ${play_state}`);
    };
    // * get the players current play state
    const getPlayState = ()=>{
        return state.status.play_state;
    };
    // * update the action state
    const updateActionState = (action_state)=>{
        // * Check acceptable state provided
        if (![
            _playerStates.ACTION_DID_PICKUP,
            _playerStates.ACTION_DID_PUTDOWN,
            _playerStates.ACTION_NO_ACTION, 
        ].includes(action_state)) _debugDetailDefault.default(`${state.name} [state.action_state] provided unacceptable state: ${action_state}`);
        state.status.action = action_state;
        _debugDetailDefault.default(`${state.name} [state.action] is now ${action_state}`);
    };
    // * get the players action state
    const getActionState = ()=>{
        return state.status.action;
    };
    // * update the effect state
    const updateEffectState = (effect_state)=>{
        // * Check acceptable state provided
        if (![
            _playerStates.EFFECT_MUST_PICK_2,
            _playerStates.EFFECT_MUST_PICK_7,
            _playerStates.EFFECT_MUST_MISS_TURN,
            _playerStates.EFFECT_ANOTHER_TURN,
            _playerStates.EFFECT_NO_EFFECT, 
        ].includes(effect_state)) _debugDetailDefault.default(`${state.name} [state.effect_state] provided unacceptable state: ${effect_state}`);
        state.status.effect = effect_state;
        _debugDetailDefault.default(`${state.name} [state.effect] is now ${effect_state}`);
    };
    // * get the players current effect state
    const getEffectState = ()=>{
        return state.status.effect;
    };
    const getPlayerEl = ()=>{
        return state.el;
    };
    return {
        init,
        addCard,
        addCards,
        removeCard,
        removeCardAtIndex,
        removeCards,
        getPlayerName,
        getCurrentCards,
        getIsHuman,
        getHandSize,
        getPlayerEl,
        resetStatus,
        getStatus,
        updatePlayState,
        getPlayState,
        updateActionState,
        getActionState,
        updateEffectState,
        getEffectState
    };
};

},{"../Utilities/debugDetail":"e4cZo","./../Utilities/updateObject":"e3rXy","./player_states":"g1ajd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"g1ajd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IDLE", ()=>IDLE
);
parcelHelpers.export(exports, "TO_PLAY", ()=>TO_PLAY
);
parcelHelpers.export(exports, "HAS_PLAYED", ()=>HAS_PLAYED
);
parcelHelpers.export(exports, "ACTION_DID_PICKUP", ()=>ACTION_DID_PICKUP
);
parcelHelpers.export(exports, "ACTION_DID_PUTDOWN", ()=>ACTION_DID_PUTDOWN
);
parcelHelpers.export(exports, "ACTION_NO_ACTION", ()=>ACTION_NO_ACTION
);
parcelHelpers.export(exports, "EFFECT_MUST_PICK_2", ()=>EFFECT_MUST_PICK_2
);
parcelHelpers.export(exports, "EFFECT_MUST_PICK_7", ()=>EFFECT_MUST_PICK_7
);
parcelHelpers.export(exports, "EFFECT_MUST_MISS_TURN", ()=>EFFECT_MUST_MISS_TURN
);
parcelHelpers.export(exports, "EFFECT_ANOTHER_TURN", ()=>EFFECT_ANOTHER_TURN
);
parcelHelpers.export(exports, "EFFECT_NO_EFFECT", ()=>EFFECT_NO_EFFECT
);
const IDLE = "IDLE";
const TO_PLAY = "TO_PLAY";
const HAS_PLAYED = "HAS_PLAYED";
const ACTION_DID_PICKUP = "DID_PICKUP";
const ACTION_DID_PUTDOWN = "DID_PUTDOWN";
const ACTION_NO_ACTION = "NO_ACTION";
const EFFECT_MUST_PICK_2 = "MUST_PICK_2";
const EFFECT_MUST_PICK_7 = "MUST_PICK_7";
const EFFECT_MUST_MISS_TURN = "MUST_MISS_TURN";
const EFFECT_ANOTHER_TURN = "EFFECT_ANOTHER_TURN";
const EFFECT_NO_EFFECT = "EFFECT_NO_EFFECT";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fuhyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View
);
var _updateObject = require("./../Utilities/updateObject");
const ViewManager = ()=>{
    const state = {
        pickup_deck_el: null,
        discard_deck_el: null,
        updates_board_el: null,
        card_w: 59,
        card_h: 90
    };
    const init = (config = {
    })=>{
        _updateObject.updateObject(state, config);
    };
    const createCardHTML = (card, is_facing)=>{
        return `<img class="${is_facing ? "face_up" : "face_down"}" style="background-position: -${card.l * state.card_w}px -${card.t * state.card_h}px;"/>`;
    };
    const createListedCardHTML = (card, is_facing)=>{
        return `<li class="card" data-v="${card.value}" data-s="${card.suit}">\n                ${createCardHTML(card, is_facing)}\n            </li>`;
    };
    const getPickupDeck = ()=>{
        return state.pickup_deck_el;
    };
    const getDiscardDeck = ()=>{
        return state.discard_deck_el;
    };
    const getGameUpdateBoard = ()=>{
        return state.updates_board_el;
    };
    return {
        init,
        createListedCardHTML,
        createCardHTML,
        getPickupDeck,
        getDiscardDeck,
        getGameUpdateBoard
    };
};
const View = ViewManager();

},{"./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1JqOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../Managers/managers");
exports.default = drawDiscardDeck = ()=>{
    let card = _managers.Deck.getDiscardDeck()[0];
    _managers.View.getDiscardDeck().innerHTML = _managers.View.createCardHTML(card, true);
};

},{"./../Managers/managers":"5IueX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"W6Eqs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../Managers/managers");
exports.default = outputToBoard = (message)=>{
    const update_board = _managers.View.getGameUpdateBoard();
    update_board.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
    update_board.scrollTop = update_board.scrollHeight;
};

},{"./../Managers/managers":"5IueX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hlr0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _managers = require("./../../Managers/managers");
var _endTurn = require("../End/endTurn");
var _endTurnDefault = parcelHelpers.interopDefault(_endTurn);
var _playCard = require("./playCard");
var _playCardDefault = parcelHelpers.interopDefault(_playCard);
exports.default = onHumanPlayerCardSelect = (event)=>{
    _debugDetailDefault.default(`[onHumanPlayerCardSelect]`);
    // * check that the current player is the human player, or the user is selecting out of turn
    if (!_managers.Players.getCurrentActivePlayer().getIsHuman()) {
        _debugDetailDefault.default(`[onHumanPlayerCardSelect] Human player not currently active`);
        return;
    }
    // * get selection target
    const selection = event.target.parentNode || event.srcElement.parentNode;
    // * make sure a card was clicked
    if (selection.className == "card") {
        // * get card reference
        const value = selection.getAttribute('data-v');
        const suit = selection.getAttribute('data-s');
        const valid_play = _playCardDefault.default({
            value,
            suit
        });
        if (valid_play) _endTurnDefault.default();
    }
// * otherwise do nothing
};

},{"../../Utilities/debugDetail":"e4cZo","./../../Managers/managers":"5IueX","../End/endTurn":"fM3CA","./playCard":"cWdcu","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fM3CA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../../Managers/managers");
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _outputToBoard = require("./../../View/outputToBoard");
var _outputToBoardDefault = parcelHelpers.interopDefault(_outputToBoard);
var _hasWinConditionBeenReached = require("./hasWinConditionBeenReached");
var _hasWinConditionBeenReachedDefault = parcelHelpers.interopDefault(_hasWinConditionBeenReached);
var _applyPowerEffect = require("./../Powers/applyPowerEffect");
var _applyPowerEffectDefault = parcelHelpers.interopDefault(_applyPowerEffect);
var _resolvePowerEffectState = require("./../Powers/resolvePowerEffectState");
var _resolvePowerEffectStateDefault = parcelHelpers.interopDefault(_resolvePowerEffectState);
var _onEndTurn = require("./onEndTurn");
var _onEndTurnDefault = parcelHelpers.interopDefault(_onEndTurn);
var _playerStates = require("./../../Player/player_states");
exports.default = endTurn = ()=>{
    // * resolve anything before confirm turn is ended
    const current_player = _managers.Players.getCurrentActivePlayer();
    current_player.updatePlayState(_playerStates.HAS_PLAYED);
    _debugDetailDefault.default(`[endTurn] Ending turn...`);
    _debugDetailDefault.default(`[endTurn] actionState of current player: ${current_player.getActionState()}`);
    // * If player put a card down, then apply power if required
    if (current_player.getActionState() === _playerStates.ACTION_DID_PUTDOWN) {
        // * Player putdown a card, check if power card
        const top_card = Deck.getDiscardDeckTopCard();
        if (top_card.power) {
            _debugDetailDefault.default(`[endTurn] Card putdown is a power card: ${top_card.power}`);
            _outputToBoardDefault.default(`It's a power card!`);
            // * Apply power effect
            _applyPowerEffectDefault.default(top_card.power);
            // * check if current player affected by the power card
            // TODO - too closely linked to the Have another go power - needs to be handled elsewhere
            if (current_player.getEffectState() !== _playerStates.EFFECT_NO_EFFECT) {
                // * resolve power effect
                _resolvePowerEffectStateDefault.default(current_player, current_player.getEffectState());
                return;
            }
        }
    }
    // * check if win condition has been reached
    if (!_hasWinConditionBeenReachedDefault.default()) {
        _debugDetailDefault.default(`------------`);
        _onEndTurnDefault.default();
    } else {
        // * Game has been won, end
        _outputToBoardDefault.default(`${_managers.Players.getCurrentActivePlayer().getPlayerName()} is the winner!`);
        _debugDetailDefault.default(`[endTurn] ${_managers.Players.getCurrentActivePlayer().getPlayerName()} has won!`);
    }
};

},{"./../../Managers/managers":"5IueX","../../Utilities/debugDetail":"e4cZo","./../../View/outputToBoard":"W6Eqs","./hasWinConditionBeenReached":"k2mNQ","./../Powers/applyPowerEffect":"b1tz2","./../Powers/resolvePowerEffectState":"f9qHk","./onEndTurn":"jRj6l","./../../Player/player_states":"g1ajd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"k2mNQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("../../Managers/managers");
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
exports.default = hasWinConditionBeenReached = ()=>{
    _debugDetailDefault.default(`[hasWinConditionBeenReached] Checking win condition`);
    // * Current player has won if they have no cards left
    let num_cards_remaining = _managers.Players.getCurrentActivePlayer().getHandSize();
    _debugDetailDefault.default(`[hasWinConditionBeenReached] Player has ${num_cards_remaining} cards remaining`);
    // * To win there has to be no cards remaining
    // TODO - last placed card should not be a power card and player needs to pick up
    return num_cards_remaining === 0;
};

},{"../../Managers/managers":"5IueX","../../Utilities/debugDetail":"e4cZo","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"b1tz2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _powers = require("./../../Cards/powers");
var _playerStates = require("./../../Player/player_states");
var _outputToBoard = require("../../View/outputToBoard");
var _outputToBoardDefault = parcelHelpers.interopDefault(_outputToBoard);
var _managers = require("./../../Managers/managers");
exports.default = applyPowerEffect = (power)=>{
    const current_active_player = _managers.Players.getCurrentActivePlayer();
    const current_next_player = _managers.Players.getCurrentNextPlayer();
    switch(power){
        case _powers.CHANGE_DIRECTION:
            // * Change play direction
            _outputToBoardDefault.default(`Direction of play is reversed!`);
            _managers.Players.changePlayDirection();
            break;
        case _powers.CHANGE_SUIT:
            // * Change playable suit
            _outputToBoardDefault.default(`New suit chosen! [TODO]`);
            break;
        case _powers.ANOTHER_TURN:
            // * Player has another go
            _outputToBoardDefault.default(`${current_active_player.getPlayerName()} to take another turn!`);
            current_active_player.updateEffectState(_playerStates.EFFECT_ANOTHER_TURN);
            break;
        case _powers.MISS_TURN:
            // * Next player misses turn
            _outputToBoardDefault.default(`${current_next_player.getPlayerName()} to miss a turn!`);
            current_next_player.updateEffectState(_playerStates.EFFECT_MUST_MISS_TURN);
            break;
        case _powers.PICKUP_2:
            // * Next player must pickup 2
            _outputToBoardDefault.default(`${current_next_player.getPlayerName()} must pick up 2 cards!`);
            current_next_player.updateEffectState(_playerStates.EFFECT_MUST_PICK_2);
            break;
        case _powers.PICKUP_7:
            // * Next player must pickup 7
            _outputToBoardDefault.default(`${current_next_player.getPlayerName()} must pick up 7 cards!`);
            current_next_player.updateEffectState(_playerStates.EFFECT_MUST_PICK_7);
            break;
        default:
            debugDetail(`[applyPowerEffect] Unknown power applied! ${power}`);
    }
};

},{"./../../Cards/powers":"9DqYi","./../../Player/player_states":"g1ajd","../../View/outputToBoard":"W6Eqs","./../../Managers/managers":"5IueX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"f9qHk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _playerStates = require("./../../Player/player_states");
var _managers = require("./../../Managers/managers");
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _handleTurnBegin = require("../Begin/handleTurnBegin");
var _handleTurnBeginDefault = parcelHelpers.interopDefault(_handleTurnBegin);
var _endTurn = require("../End/endTurn");
var _endTurnDefault = parcelHelpers.interopDefault(_endTurn);
var _pickupCardFromDeck = require("../Pickup/pickupCardFromDeck");
var _pickupCardFromDeckDefault = parcelHelpers.interopDefault(_pickupCardFromDeck);
exports.default = resolvePowerEffectState = (currentPlayer, effect_state)=>{
    const current_active_player = _managers.Players.getCurrentActivePlayer();
    switch(effect_state){
        case _playerStates.EFFECT_ANOTHER_TURN:
            // * Player has another go
            _debugDetailDefault.default(`[resolvePowerEffectState] Player taking another turn [TODO]`);
            // * reset status
            current_active_player.resetStatus();
            current_active_player.updatePlayState(_playerStates.TO_PLAY);
            _handleTurnBeginDefault.default();
            break;
        case _playerStates.EFFECT_MUST_MISS_TURN:
            // * go straight to end turn
            _debugDetailDefault.default(`[resolvePowerEffectState] Missing Turn`);
            _endTurnDefault.default();
            break;
        case _playerStates.EFFECT_MUST_PICK_2:
            // * Next player must pickup 2 then end turn
            _debugDetailDefault.default(`[resolvePowerEffectState] Picking up 2 cards`);
            for(let c = 0; c < 2; c++)_pickupCardFromDeckDefault.default();
            _endTurnDefault.default();
            break;
        case _playerStates.EFFECT_MUST_PICK_7:
            // * Next player must pickup 7 then end turn
            for(let c1 = 0; c1 < 7; c1++)_pickupCardFromDeckDefault.default();
            _endTurnDefault.default();
            break;
        default:
            _debugDetailDefault.default(`[resolvePowerEffectState] Unknown effect state applied! ${effect_state}`);
    }
};

},{"./../../Player/player_states":"g1ajd","./../../Managers/managers":"5IueX","../../Utilities/debugDetail":"e4cZo","../Begin/handleTurnBegin":"ichSI","../End/endTurn":"fM3CA","../Pickup/pickupCardFromDeck":"6OXTp","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ichSI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _managers = require("./../../Managers/managers");
var _resolvePowerEffectState = require("../Powers/resolvePowerEffectState");
var _resolvePowerEffectStateDefault = parcelHelpers.interopDefault(_resolvePowerEffectState);
var _chooseAIPlayerActionChoice = require("../Begin/chooseAIPlayerActionChoice");
var _chooseAIPlayerActionChoiceDefault = parcelHelpers.interopDefault(_chooseAIPlayerActionChoice);
var _playerStates = require("./../../Player/player_states");
exports.default = handleTurnBegin = ()=>{
    // * Resolve any effects
    let current_active_player = _managers.Players.getCurrentActivePlayer();
    if (current_active_player.getEffectState() !== _playerStates.EFFECT_NO_EFFECT) {
        _debugDetailDefault.default(`Current player is affected by ${current_active_player.getEffectState()}`);
        _resolvePowerEffectStateDefault.default(current_active_player, current_active_player.getEffectState());
    } else {
        // * no effect in play, continue as normal
        outputToBoard(`${current_active_player.getPlayerName()} to play...`);
        // * if AI
        if (!current_active_player.getIsHuman()) {
            _debugDetailDefault.default(`[chooseAIPlayerActionChoice] Player is thinking...`);
            // * simulate player thinking before choice (effectively slow down game)
            window.setTimeout(_chooseAIPlayerActionChoiceDefault.default, 2000);
        }
    }
};

},{"../../Utilities/debugDetail":"e4cZo","./../../Managers/managers":"5IueX","../Powers/resolvePowerEffectState":"f9qHk","../Begin/chooseAIPlayerActionChoice":"1NatD","./../../Player/player_states":"g1ajd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1NatD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _checkLegalPlayableMove = require("../Play/checkLegalPlayableMove");
var _checkLegalPlayableMoveDefault = parcelHelpers.interopDefault(_checkLegalPlayableMove);
var _onAIPlayerCardSelect = require("../Play/onAIPlayerCardSelect");
var _onAIPlayerCardSelectDefault = parcelHelpers.interopDefault(_onAIPlayerCardSelect);
var _handleCardPickup = require("../Pickup/handleCardPickup");
var _handleCardPickupDefault = parcelHelpers.interopDefault(_handleCardPickup);
exports.default = chooseAIPlayerActionChoice = ()=>{
    // * Get current AI player
    const current_AI_player = Players.getCurrentActivePlayer();
    // * get players current hand
    const current_hand = current_AI_player.getCurrentCards();
    // * get legal playable cards from hand
    const playable_cards = current_hand.filter((card)=>{
        return _checkLegalPlayableMoveDefault.default(card);
    });
    _debugDetailDefault.default(`[chooseAIPlayerActionChoice] Number of playable cards: ${playable_cards.length}`);
    // * if playable cards
    if (playable_cards.length && Math.random() >= 0.3) {
        // * more weighting to putting down cards than picking them up
        // * choice based on random value
        // * play a card
        _debugDetailDefault.default(`[chooseAIPlayerActionChoice] Player has chosen to play a card`);
        _onAIPlayerCardSelectDefault.default(playable_cards);
    } else {
        // * no playable cards, so has to pickup
        _debugDetailDefault.default(`Player must pickup`);
        _handleCardPickupDefault.default();
    }
};

},{"../../Utilities/debugDetail":"e4cZo","../Play/checkLegalPlayableMove":"ktroz","../Play/onAIPlayerCardSelect":"1W5Oc","../Pickup/handleCardPickup":"flFqQ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ktroz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../../Managers/managers");
exports.default = checkLegalPlayableMove = ({ value , suit  })=>{
    // * get current card attempting to play upon
    const current_top_card = _managers.Deck.getDiscardDeckTopCard();
    // * playable card must be of the same suit or of the same value
    return value == current_top_card.value || suit == current_top_card.suit;
};

},{"./../../Managers/managers":"5IueX","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1W5Oc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _playCard = require("./playCard");
var _playCardDefault = parcelHelpers.interopDefault(_playCard);
var _endTurn = require("../End/endTurn");
var _endTurnDefault = parcelHelpers.interopDefault(_endTurn);
exports.default = onAIPlayerCardSelect = (playable_cards)=>{
    // * AI Player select card from hand
    _debugDetailDefault.default(`[onAIPlayerCardSelect] Playing a card from hand`);
    // * Check if any of the cards are a power card
    let available_power_cards = playable_cards.filter(function(card) {
        return typeof card.power !== "undefined";
    });
    // * index of card choice
    let playing_card = null;
    // * if power cards available, we want to be more likely to selecting one of them
    if (available_power_cards.length && Math.random() > 0.4) // * Select from the power card list
    playing_card = available_power_cards[Math.floor(Math.random() * available_power_cards.length)];
    else // * select any random card
    playing_card = playable_cards[Math.floor(Math.random() * playable_cards.length)];
    _playCardDefault.default({
        value: playing_card.value,
        suit: playing_card.suit
    });
    _endTurnDefault.default();
};

},{"../../Utilities/debugDetail":"e4cZo","./playCard":"cWdcu","../End/endTurn":"fM3CA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cWdcu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _outputToBoard = require("../../View/outputToBoard");
var _outputToBoardDefault = parcelHelpers.interopDefault(_outputToBoard);
var _checkLegalPlayableMove = require("./checkLegalPlayableMove");
var _checkLegalPlayableMoveDefault = parcelHelpers.interopDefault(_checkLegalPlayableMove);
var _handlePlayCard = require("./handlePlayCard");
var _handlePlayCardDefault = parcelHelpers.interopDefault(_handlePlayCard);
exports.default = playCard = ({ value , suit  })=>{
    _debugDetailDefault.default(`[handlePlayCard] Attempting to play`);
    // * Check whether card can be played
    if (!_checkLegalPlayableMoveDefault.default({
        value,
        suit
    })) {
        _debugDetailDefault.default(`[handlePlayCard] Card not playable`);
        _outputToBoardDefault.default(`That card isn't playable!`);
        // * card not playable
        return false;
    }
    // * card is playable, so play it
    _handlePlayCardDefault.default({
        value,
        suit
    });
    // * card is playable
    return true;
};

},{"../../Utilities/debugDetail":"e4cZo","../../View/outputToBoard":"W6Eqs","./checkLegalPlayableMove":"ktroz","./handlePlayCard":"eEI12","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eEI12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../../Managers/managers");
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _playerStates = require("./../../Player/player_states");
exports.default = handlePlayCard = ({ value , suit  })=>{
    // * get card from player hand
    let current_player = _managers.Players.getCurrentActivePlayer();
    const card = current_player.removeCard({
        value,
        suit
    });
    _debugDetailDefault.default(`[playCard] Playing card: ${card.name}`);
    // * place card to discard deck
    _managers.Deck.insertToTopOfDiscardDeck(card);
    current_player.updateActionState(_playerStates.ACTION_DID_PUTDOWN);
    outputToBoard(`${current_player.getPlayerName()} has played the ${card.name}`);
    updateView();
};

},{"./../../Managers/managers":"5IueX","../../Utilities/debugDetail":"e4cZo","./../../Player/player_states":"g1ajd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"flFqQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pickupCardFromDeck = require("./pickupCardFromDeck");
var _pickupCardFromDeckDefault = parcelHelpers.interopDefault(_pickupCardFromDeck);
var _endTurn = require("../End/endTurn");
var _endTurnDefault = parcelHelpers.interopDefault(_endTurn);
exports.default = handleCardPickup = (e)=>{
    _pickupCardFromDeckDefault.default();
    _endTurnDefault.default();
};

},{"./pickupCardFromDeck":"6OXTp","../End/endTurn":"fM3CA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6OXTp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../../Managers/managers");
var _updateView = require("../../View/updateView");
var _updateViewDefault = parcelHelpers.interopDefault(_updateView);
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _outputToBoard = require("../../View/outputToBoard");
var _outputToBoardDefault = parcelHelpers.interopDefault(_outputToBoard);
var _playerStates = require("./../../Player/player_states");
exports.default = pickupCardFromDeck = ()=>{
    _debugDetailDefault.default(`[pickupCardFromDeck] Picking up card`);
    // * get current player attempting pickup
    let current_player = _managers.Players.getCurrentActivePlayer();
    // * get pickup deck
    let top_card = _managers.Deck.removeCardByIndexFromPickupDeck(0);
    // * add picked up card to player deck
    current_player.addCard(top_card);
    _debugDetailDefault.default(`[pickupCardFromDeck] Picked up card: ${top_card.name}`);
    // * if deck is now empty, then swap decks
    if (_managers.Deck.getPickupDeckSize() <= 0) _managers.Deck.swapDecks();
    // * Update the players action state
    current_player.updateActionState(_playerStates.ACTION_DID_PICKUP);
    _outputToBoardDefault.default(`${current_player.getPlayerName()} has picked up`);
    // * redraw the view
    _updateViewDefault.default();
};

},{"./../../Managers/managers":"5IueX","../../View/updateView":"ilqS8","../../Utilities/debugDetail":"e4cZo","../../View/outputToBoard":"W6Eqs","./../../Player/player_states":"g1ajd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jRj6l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _managers = require("./../../Managers/managers");
var _debugDetail = require("../../Utilities/debugDetail");
var _debugDetailDefault = parcelHelpers.interopDefault(_debugDetail);
var _handleTurnBegin = require("../Begin/handleTurnBegin");
var _handleTurnBeginDefault = parcelHelpers.interopDefault(_handleTurnBegin);
exports.default = onEndTurn = ()=>{
    // * update current players
    _managers.Players.setNextActivePlayer();
    _debugDetailDefault.default(`[chooseAIPlayerActionChoice] It is now ${_managers.Players.getCurrentActivePlayer().getPlayerName()}s turn`);
    // * begin next turn
    _handleTurnBeginDefault.default();
};

},{"./../../Managers/managers":"5IueX","../../Utilities/debugDetail":"e4cZo","../Begin/handleTurnBegin":"ichSI","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["hkXzs","23obh"], "23obh", "parcelRequirefe86")

//# sourceMappingURL=index.227406fc.js.map
