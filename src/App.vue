<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div v-bind:class="tabIndex == 0 ? 'tabCurr':''" class="tab-item txtCenter" v-on:click="tabClick(0)">
        <router-link to="/goods">商品</router-link>
      </div>
      <div v-bind:class="tabIndex == 1 ? 'tabCurr':''" class="tab-item txtCenter" v-on:click="tabClick(1)">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div v-bind:class="tabIndex == 2 ? 'tabCurr':''" class="tab-item txtCenter" v-on:click="tabClick(2)">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  name: 'app',
  components: {
    'v-header': header
  },
  data: function() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    tabClick: function(t) {
      switch (t) {
        case 0: this.tabIndex = 0
          break
        case 1: this.tabIndex = 1
          break
        case 2: this.tabIndex = 2
          break
      }
    }
  }
}
</script>

<style style="stylus">
.tab{display: flex;width: 100%;height: 40px;line-height: 40px;border-bottom:1px solid #EBECEE;}
.tab .tab-item{flex: 1;} 
.tabCurr a{color:#DB616A;}    
</style>
