import Vue from 'vue';
import Vuex from 'vuex';
import Game from './models/Game.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    games: [
      new Game('0001','Sekiro',100,30000,'red',true),
      new Game('0002','Fifa 21',100,250000,'blue',false),
      new Game('0003','Gears of War 4',100,15000,'green',true),
      new Game('0004','Mario Tennis Aces',100,35000,'yellow',false),
      new Game('0005','Bloodborne',100,10000,'blue',false),
      new Game('0006','Forza Horizon 4',100,20000,'red',true),
    ]
  },
  getters: {
    totalGames : state => {
      return state.games.length;
    },
    getGameById : state => id => {
      return id.trim()==='' ? state.games : state.games.filter(game => game.code === id && game.stock > 0);
    }
  },
  mutations: {},
  actions: {}
});

export default store;
