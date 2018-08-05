<template>
  <div id="app">
    <button class="button" @click="showDialog "  >点我</button>
    <DialogCommon :data="data" @function1="function1" v-if="show"></DialogCommon>  
  </div>
</template>

<script>

import DialogCommon from '../Index.vue'
export default {
  name: "App",
  data() {
    return {
      show:false,
      data: {
        img: './assets/alert/58icon.png',
        title: '我是一个弹层',
        subtitle:'我是副标题',
        text: '我是想要展示点文字,看看效果，随便写点什么好了,莺莺燕燕春春，花花柳柳真真',
        button: [
         '我不知道',
          '我知道'
        ],
        checkbox:"我知道了"
      }
    }
  },   
  methods: { 
    function1(obj) {
      console.log(obj)
    },
    showDialog() {
      this.show=!this.show;
      this.isToastShow=true;
    }
  },
  components: {
    DialogCommon
  }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}
* {
  margin: 0px;
  padding: 0px;
  /* background-color: #f1f2f6 */
}
.button {
  background-color: #ff4433;
  width: 80px;
  height: 40px;
  margin: 50px;
}

</style>