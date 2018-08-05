<template>  
  <div class="btn" v-if="show"> 
      <div class="mask" @click="shownone"></div>
      <div class="isalert">
        <transition name="dialog">
            <div class="alert" v-bind:class="{in:isIn,out: isOut}">
                  <div class="img" v-if="data.img" ></div>
                  <div class="con">
                      <div class="title" v-if="data.title">{{data.title}}</div>
                      <div class="text" v-if="data.text">{{data.text}}</div>
                      <div class="checkbox" v-if="data.checkbox">
                        <input class="check" type="checkbox"  v-model="checked"><div  class="aa" :style="width" @click="changecheck"></div><span class="check-text">{{data.checkbox}}</span>
                      </div>
                  </div>
                  <div class="onebtn" id="1" v-if="data.button.length==1" @click="function1" >{{data.button[0]}}</div>
                  <tr class="twobtn" v-if="data.button.length==2" @click="function1">
                      <td id="1" class="btnleft" >{{data.button[0]}}</td>
                      <td id="2" class="btnright" >{{data.button[1]}}</td>
                  </tr> 
             </div>          
       </transition>
     </div>  
  </div>
</template>

<script>
export default {
  name: 'DialogCommon',
  data(){
    return {
      checked:false,
      show:true,
      isIn:true,
      isOut:false,
      imag1:''
    }
  },  
  props: {
    data: {
      type: Object
    }
  },
   computed: {
    width() {
      if (this.checked) {
        return {backgroundImage: 'url(https://static.daojia.com/pt/other/image/dialog/1.png) '};
      } else {
        return  {backgroundImage: 'url(https://static.daojia.com/pt/other/image/dialog/2.png) '};
      }
    }
  },
  methods: {
    function1(e) {
      this.isIn=false;
      this.isOut=true      
      let index=e.toElement.id      
      window.setTimeout(()=>{this.show=false},200)
      this.data.checkbox?this.$emit('function1',{'index':index,'checked':this.checked}):this.$emit('function1',{'index':index});
    },
    shownone(){
      this.isIn=false;
      this.isOut=true     
      window.setTimeout(()=>{this.show=false},200)      
    },
    
    changecheck(){
      // debugger
      this.checked=!this.checked;
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.mask{
  position: fixed;
  top:0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #000;
  opacity: 0.15;
  animation: opacity 0.15s;
}
.isalert{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
 
}
.alert{
  padding: 5px ;
  width: 270px;
  background-color: #fff; 
  /* animation: bounce-in 0.15s; */
}
.in  {
  -webkit-animation: bounce-in 0.2s;
  animation: bounce-in 0.2s;
}
.out  {
  animation: bounce-out 0.2s ;
   -webkit-animation: bounce-out 0.2s;
}
@keyframes bounce-out{
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
}
@keyframes bounce-in{
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes opacity{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
.con{
  padding: 5px 15px 5px 15px;
}
.img{
  height: 110px;
  width: 110px;

  margin-left: 80px;
  background: url(https://static.daojia.com/pt/other/image/toutiaodownloadbar/icon_download_logo3x.png) no-repeat center;
  background-size: 100%;
}
.title{
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #292D33;
  line-height: 18px;
  font-weight: bold;
  padding: 10px 0px 5px 0px;
}
.text{
  font-size: 14px;
  color: #292D33;
  line-height: 17px;
  padding: 10px 0px 15px 0px;
  text-align:left
}
.checkbox{
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:10px;
  position: relative;
}
.check{
display:none;
}
.aa{
  width: 16px;
  height: 16px;
  background-size: cover;
}
.check-text{
  display: inline-block;
  font-size: 13px;
  padding-left: 5px;
  line-height: 13px;
}
.onebtn{
  width: 100%;
  height: 44px;
  overflow: hidden;
  font-size: 17px;
  color: #E6454A;
  padding-top: 14px;
  position: relative;
}
.onebtn:before{
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  transform-origin: 0 1px;
  transform: scaleY(.5);
  width: 100%;
  border-bottom: 1px solid #e8ebf0;
}
.onebtn:active{
  background-color: #F5F7FA;
}
.twobtn{
  display: inline-block;
  width: 100%;
  height: 44px;
  position: relative;
}
.twobtn:before{
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  transform-origin: 0 1px;
  transform: scaleY(.5);
  width: 100%;
  border-bottom: 1px solid #e8ebf0;
}

.btnleft{
  width: 134px;
  font-size: 17px;
  color: #E7454A;
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;
  /* border-right: 1px solid #e8ebf0; */
}
.btnleft:before{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 200%;
  background-color: #e8ebf0;
   transform:scale(0.5);
   transform-origin:top right;
}

.btnleft:active{
   background-color: #F5F7FA;
}
.btnright{
  width: 135px;
  font-size: 17px;
  color: #E7454A;
  padding-top: 14px;
  padding-bottom: 14px;
}
.btnright:active{
  background-color: #F5F7FA;
}
</style>

