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
        this,
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
})({"6cdEz":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b3bb0a59227406fc"; // @flow
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
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets /*: {|[string]: boolean|} */ , acceptedAssets /*: {|[string]: boolean|} */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event /*: {data: string, ...} */ ) {
        checkedAssets = {
        } /*: {|[string]: boolean|} */ ;
        acceptedAssets = {
        } /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            let handled = assets.every((asset)=>{
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
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
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
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
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
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptRun(bundle /*: ParcelRequire */ , id /*: string */ ) {
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
var _loop = require("./Utilities/loop");
var _loopDefault = parcelHelpers.interopDefault(_loop);
var _outputDetail = require("./Utilities/outputDetail");
var _outputDetailDefault = parcelHelpers.interopDefault(_outputDetail);
var _managers = require("./Managers/managers");
var _player = require("./Player/player");
// * create game managers
const Game = _managers.GameManager();
const Deck = _managers.DeckManager();
const Players = _managers.PlayerManager();
const View = _managers.ViewManager();
// * add window references for debugging
window.Game = Game;
window.Deck = Deck;
window.Players = Players;
window.View = View;
// * initialise the game world
Game.init({
});
// * initialise the players
Players.init({
    num_players: 4
});
Players.createPlayers();
// * initialise the view
View.init({
    pickup_deck_el: document.getElementById("pickup_deck"),
    discard_deck_el: document.getElementById("discard_deck")
});
// * name the players
_loopDefault.default(Players.getPlayerList(), (player)=>{
    const player_name = player.getPlayerName();
    View.addPlayerHTML(player_name, document.getElementById(player_name));
});
// * initliase the deck
Deck.init({
});
// * prepare the deck
Deck.prepareDeck();
// * deal cards to each player
Deck.dealCards(Players.getPlayerList());
// * Define discard drawing function
const drawDiscardDeck = ()=>{
    let card = Deck.getDiscardDeck()[0];
    let card_HTML = View.createCardHTML(card, true);
    View.getDiscardDeck().innerHTML = card_HTML;
};
// * Define drawing player deck functions
const drawPlayerDecks = ()=>{
    _loopDefault.default(Players.getPlayerList(), (player)=>{
        const deck = player.getCurrentCards();
        // * get deck element
        const deck_el = document.getElementById(player.getPlayerName()).querySelector('.card_list');
        // * remove HTML
        deck_el.innerHTML = "";
        _loopDefault.default(deck, (card)=>{
            deck_el.insertAdjacentHTML("beforeend", View.createListedCardHTML(card, true));
        });
    });
};
// * update view 
const updateView = ()=>{
    // * Draw player decks
    drawPlayerDecks();
    // * Draw discard decks
    drawDiscardDeck();
};
// * Do initial draw
updateView();
// * define turn actions
// * Pickup a card from the deck
const pickupCardFromDeck = ()=>{
    _outputDetailDefault.default(`[pickupCardFromDeck] Picking up card`);
    // * get current player attempting pickup
    let current_player = Players.getCurrentActivePlayer();
    // * get pickup deck
    let top_card = Deck.removeCardByIndexFromPickupDeck(0);
    // * add picked up card to player deck
    current_player.addCard(top_card);
    _outputDetailDefault.default(`[pickupCardFromDeck] Picked up card: ${top_card.name}`);
    // * if deck is now empty, then swap decks
    if (Deck.getPickupDeckSize() <= 0) Deck.swapDecks();
    // * redraw the view
    updateView();
    // * end the turn
    endTurn();
};
const checkLegalPlayableMove = ({ value , suit  })=>{
    // * get current card attempting to play upon
    const current_top_card = Deck.getDiscardDeckTopCard();
    // * playable card must be of the same suit or of the same value
    return value == current_top_card.value || suit == current_top_card.suit;
};
const playCard = ({ value , suit  })=>{
    _outputDetailDefault.default(`[playCard] Attempting to play`);
    // * get card from player hand
    let current_player = Players.getCurrentActivePlayer();
    // * RULES HERE
    if (!checkLegalPlayableMove({
        value,
        suit
    })) {
        _outputDetailDefault.default(`[playCard] Card not playable`);
        return;
    }
    const card = current_player.removeCard({
        value,
        suit
    });
    _outputDetailDefault.default(`[playCard] Playing card: ${card.name}`);
    Deck.insertToTopOfDiscardDeck(card);
    updateView();
    // * end the turn
    endTurn();
};
// * Define Human Player Interaction
const onHumanPlayerCardSelect = (event)=>{
    _outputDetailDefault.default(`[onHumanPlayerCardSelect]`);
    if (!Players.getCurrentActivePlayer().getIsHuman()) {
        _outputDetailDefault.default(`[onHumanPlayerCardSelect] Human player not currently active`);
        return;
    }
    // * check valid click target
    const selection = event.target.parentNode || event.srcElement.parentNode;
    // * make sure a card was clicked
    if (selection.className == "card") {
        // * get card reference
        const value = selection.getAttribute('data-v');
        const suit = selection.getAttribute('data-s');
        playCard({
            value,
            suit
        });
    }
};
const onHumanPlayerCardPickup = (event)=>{
    pickupCardFromDeck();
};
// * Assign interactions to view
document.querySelector("#Player_0 .card_list").addEventListener("mousedown", onHumanPlayerCardSelect);
document.querySelector("#pickup_deck").addEventListener("mousedown", onHumanPlayerCardPickup);
// * Define AI Interactions
const onAIPlayerCardSelect = ()=>{
    // * AI Player select card from hand
    _outputDetailDefault.default(`[onAIPlayerCardSelect]`);
};
const onAIPlayerCardPickup = ()=>{
    // * AI Player pickup card from deck
    _outputDetailDefault.default(`[onAIPlayerCardPickup]`);
    pickupCardFromDeck();
};
const chooseAIPlayerActionChoice = ()=>{
    // * Define AI choice here
    onAIPlayerCardPickup();
};
// * Define turn functions
const onEndTurn = ()=>{
    // * update current players
    Players.setNextActivePlayer();
    // * if AI
    if (!Players.getCurrentActivePlayer().getIsHuman()) chooseAIPlayerActionChoice();
};
const endTurn = ()=>{
    _outputDetailDefault.default(`Ending turn...`);
    // * resolve anything before confirm turn is ended
    onEndTurn();
};

},{"./Managers/managers":"5IueX","./Utilities/loop":"cwOcG","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./Utilities/outputDetail":"cC0a2","./Player/player":"92V2m"}],"5IueX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// * Export managers through here
parcelHelpers.export(exports, "GameManager", ()=>_gameJs.GameManager
);
parcelHelpers.export(exports, "DeckManager", ()=>_deckJs.DeckManager
);
parcelHelpers.export(exports, "PlayerManager", ()=>_playerJs.PlayerManager
);
parcelHelpers.export(exports, "ViewManager", ()=>_viewJs.ViewManager
);
var _gameJs = require("./game.js");
var _deckJs = require("./deck.js");
var _playerJs = require("./player.js");
var _viewJs = require("./view.js");

},{"./game.js":"37AZp","./deck.js":"iQ0ND","./player.js":"e3V8h","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./view.js":"fuhyS"}],"37AZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameManager", ()=>GameManager
);
var _updateObject = require("./../Utilities/updateObject");
const GameManager = ()=>{
    const state = {
        mode: "DEBUG",
        active_player: null,
        AI_interval_speed: null,
        AI_interval: null,
        current_game_state: "INIT"
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

},{"./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e3rXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateObject", ()=>updateObject
);
const updateObject = (oldObject, newObj)=>{
    for(const key in newObj)if (Object.hasOwnProperty.call(newObj, key)) oldObject[key] = newObj[key];
};

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

},{}],"iQ0ND":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeckManager", ()=>DeckManager
);
var _outputDetail = require("../Utilities/outputDetail");
var _outputDetailDefault = parcelHelpers.interopDefault(_outputDetail);
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
        _outputDetailDefault.default(`Refilling Pickup Deck from Discard Deck`);
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

},{"./../Cards/cards":"7d7DK","./../Utilities/loop":"cwOcG","./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../Utilities/outputDetail":"cC0a2"}],"7d7DK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cards", ()=>cards
);
const cards = [
    {
        value: "A",
        suit: "hearts",
        name: "Ace of Hearts",
        t: 2,
        l: 0,
        power: 4
    },
    {
        value: 13,
        suit: "hearts",
        name: "King of Hearts",
        t: 2,
        l: 12
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
        l: 10,
        power: 4
    },
    {
        value: 10,
        suit: "hearts",
        name: "10 of Hearts",
        t: 2,
        l: 9,
        power: 2
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
        power: 1
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
        power: 1
    },
    {
        value: "A",
        suit: "clubs",
        name: "Ace of Clubs",
        t: 0,
        l: 0,
        power: 4
    },
    {
        value: 13,
        suit: "clubs",
        name: "King of Clubs",
        t: 0,
        l: 12
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
        power: 4
    },
    {
        value: 10,
        suit: "clubs",
        name: "10 of Clubs",
        t: 0,
        l: 9,
        power: 2
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
        power: 1
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
        power: 1
    },
    {
        value: "A",
        suit: "diamonds",
        name: "Ace of Diamonds",
        t: 1,
        l: 0,
        power: 4
    },
    {
        value: 13,
        suit: "diamonds",
        name: "King of Diamonds",
        t: 1,
        l: 12
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
        l: 10,
        power: 4
    },
    {
        value: 10,
        suit: "diamonds",
        name: "10 of Diamonds",
        t: 1,
        l: 9,
        power: 2
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
        power: 1
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
        power: 1
    },
    {
        value: "A",
        suit: "spades",
        name: "Ace of Spades",
        t: 3,
        l: 0,
        power: 4
    },
    {
        value: 13,
        suit: "spades",
        name: "King of Spades",
        t: 3,
        l: 12
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
        power: 4
    },
    {
        value: 10,
        suit: "spades",
        name: "10 of Spades",
        t: 3,
        l: 9,
        power: 2
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
        power: 1
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
        power: 1
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cwOcG":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cC0a2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = outputDetail = (detail)=>console.log(detail)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e3V8h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerManager", ()=>PlayerManager
);
var _updateObject = require("./../Utilities/updateObject");
var _player = require("../Player/player");
var _outputDetail = require("../Utilities/outputDetail");
var _outputDetailDefault = parcelHelpers.interopDefault(_outputDetail);
const PlayerManager = ()=>{
    const state = {
        num_players: 4,
        player_list: [],
        current_player_idx: 0,
        previous_player_idx: -1,
        next_player_idx: 0
    };
    const init = (config)=>{
        _updateObject.updateObject(state, config);
        state.next_player_idx = state.current_player_idx + 1;
    };
    const createPlayers = ()=>{
        // * create human player
        let human = _player.Player();
        human.init({
            is_human: true,
            name: "Player_0"
        });
        state.player_list.push(human);
        for(let i = 1; i < state.num_players; i++){
            let ai = _player.Player();
            ai.init({
                name: "Player_".concat(i)
            });
            state.player_list.push(ai);
        }
    };
    const setNextActivePlayer = ()=>{
        state.previous_player_idx = state.current_player_idx;
        state.current_player_idx = state.next_player_idx;
        let next_player = state.next_player_idx + 1;
        if (next_player >= state.num_players) next_player = 0;
        state.next_player_idx = next_player;
        state.player_list[state.previous_player_idx].setActive(false);
        state.player_list[state.current_player_idx].setActive(true);
        state.player_list[state.next_player_idx].setActive(false);
        _outputDetailDefault.default(`Current active player is now: ${state.player_list[state.current_player_idx].getPlayerName()}`);
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
        getPlayerList
    };
};

},{"./../Utilities/updateObject":"e3rXy","../Player/player":"92V2m","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../Utilities/outputDetail":"cC0a2"}],"92V2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
var _updateObject = require("./../Utilities/updateObject");
const Player = ()=>{
    const state = {
        is_active: false,
        name: null,
        deck: [],
        is_human: false
    };
    const init = (config)=>{
        _updateObject.updateObject(state, config);
    };
    const addCard = (card)=>{
        state.deck.push(card);
    };
    const addCards = (cards)=>{
        state.deck = state.deck.concat(cards);
    };
    const removeCardAtIndex = (idx)=>{
        state.deck.splice(idx, 1)[0];
    };
    const removeCards = (idx, num_cards)=>{
        state.deck.splice(idx, num_cards);
    };
    const setActive = (active)=>{
        state.active = active;
    };
    const getPlayerName = ()=>{
        return state.name;
    };
    const getIsHuman = ()=>{
        return state.is_human;
    };
    const getCurrentCards = ()=>{
        return state.deck;
    };
    const removeCard = ({ value , suit  })=>{
        let cardIdx = state.deck.findIndex((card)=>{
            return card.value == value && card.suit == suit;
        });
        if (cardIdx < 0) console.error("Selected player card not found");
        return state.deck.splice(cardIdx, 1)[0];
    };
    return {
        init,
        addCard,
        addCards,
        removeCard,
        removeCardAtIndex,
        removeCards,
        setActive,
        getPlayerName,
        getCurrentCards,
        getIsHuman
    };
};

},{"./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fuhyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewManager", ()=>ViewManager
);
var _updateObject = require("./../Utilities/updateObject");
const ViewManager = ()=>{
    const state = {
        pickup_deck_el: null,
        discard_deck_el: null,
        player_el_data: {
        },
        card_w: 59,
        card_h: 90
    };
    const init = (config = {
    })=>{
        _updateObject.updateObject(state, config);
    };
    const addPlayerHTML = (player_name, el)=>{
        state.player_el_data[player_name] = el;
    };
    const getPlayerHTML = (player_name)=>{
        return state.player_el_data[player_name];
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
    return {
        init,
        addPlayerHTML,
        getPlayerHTML,
        createListedCardHTML,
        createCardHTML,
        getPickupDeck,
        getDiscardDeck
    };
};

},{"./../Utilities/updateObject":"e3rXy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["6cdEz","23obh"], "23obh", "parcelRequirefe86")

//# sourceMappingURL=index.227406fc.js.map
