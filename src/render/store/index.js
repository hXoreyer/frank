import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('app', {
  state: () => {
    return {
      pageCount:1,// 首页页面切换计数器
      summonerInfo:[],// 当前对局中队友的信息
      endGameAfterInfo:[[],[]],// 当前对局敌我双方信息
      currentBlackList:[],// 当前对局中出现的黑名单队友
      showSummonerInfoModal:false,
      echartsData:{name:[],data:[],kdaHistory:[],horse:[]},// 图表基础数据
      enemyEchartsData:{name:[],data:[],kdaHistory:[],horse:[]},// 图表基础数据
      currentEchartData:{name:[],data:[],kdaHistory:[],horse:[]},
      currentQueryGameId:0,
      currentSummonerName:'',
      currentTeam:1, // 当前队伍
      frankVersion:'1.19.1214'
    }
  },
  actions:{
    pageIncrease(){
      this.pageCount +=1
      if (this.pageCount >2){
        this.pageReset()
      }
    },
    pageReset(){
      this.pageCount = 1
    },
  }
})
