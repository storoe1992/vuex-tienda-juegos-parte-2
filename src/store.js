import Vue from 'vue';
import Vuex from 'vuex';
import Game from './models/Game.js'
import Venta from './models/Venta.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    games: [
      new Game('0001','Sekiro',100,30000,'red',true),
      new Game('0002','Fifa 21',100,25000,'blue',false),
      new Game('0003','Gears of War 4',100,15000,'green',true),
      new Game('0004','Mario Tennis Aces',100,35000,'yellow',false),
      new Game('0005','Bloodborne',100,10000,'blue',false),
      new Game('0006','Forza Horizon 4',100,20000,'red',true),
    ],
    selledGames: []
  },
  getters: {
    totalGames : state => {
      return state.games.length;
    },
    getGameById : state => id => {
      return id.trim()==='' ? state.games : state.games.filter(game => game.code === id && game.stock > 0);
    },
    getGamesWithStock: state => {
      return state.games.filter(game => game.stock > 0);
    },
    getTotalGamesWithStock : (state,getters) => {
      return getters.getGameById('').length;
    },
    getTotalVentas : state => {
      return state.selledGames.length;
    },
    getTotalVentasPrice : state => {
      let prices = state.selledGames.map(sell => sell.price)
      return prices.length > 0 ? prices.reduce((x,y) => x + y) : 0;
    }
  },
  mutations: {
    sellGame(state,idGame){
        console.log(idGame)
        let existStockGame = true;
        console.log(existStockGame)
        if(existStockGame){
          let selledGame = state.games.filter(game => game.code === idGame)[0];
          if(selledGame.stock <= 0)
            throw 'No hay stock de venta'
          selledGame.stock--;
        }else{
          throw `No hay stock para el juego especificado ${idGame}`
        }
    },
    updateSell(state,idGame){
      try{
      let selledGame = state.games.filter(game => game.code === idGame)[0];
      state.selledGames.push(new Venta(selledGame.code,selledGame.name,selledGame.price));
      }catch(e){
        console.log(e.stack);
        throw 'Fallo registrando la venta'
      }
    }
  },
  actions: {
    async sell({dispatch}, idGame){
      await dispatch('processSell', idGame)
      .then(() => alert('Venta procesada'))
      .catch((e) => alert(e))
      dispatch('updateSells',idGame);
      },
      async processSell({commit},idGame){
          return new Promise((resolve,reject)=> {
             setTimeout(function(){ 
               try{
               commit('sellGame',idGame);
               resolve();
               }catch(e){
                reject(e);
               }
              },2000);
          })
          
      },

      async updateSells({commit},idGame){
        return new Promise((resolve,reject)=> {
          setTimeout(function(){ 
            try{
            commit('updateSell',idGame);
            resolve();
            }catch(e){
              reject(e)
            }
           },1000);
       })
      }
  }
});

export default store;
