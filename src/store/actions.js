import Vue from 'vue'
export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(res => res.json())
    .then(data => {
      if(data){
        const stocks = data.stocks
        const funds = dara.funds
        const stockPortfolio = data.stockPortfolio
        const portfolio = {
          stockPortfolio,
          funds
        }
        commit('SET_STOCK', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}