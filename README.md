# dialog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 代码中引用组件
import Alert from ./components/alert/Alert.vue';

# 文件中使用组件方法
```html
<template>
  <div>
    ...
   <Alert :data="data" @function1="function1" ></Alert>
    ...
  </div>
</template>

...
components: {
  Alert
}
...
```
# 组件使用
展示通过data数据进行,子组件提供function1方法，在点击按钮时执行设定操作
# 组件参数
```javascript

    data: {
        img: './assets/alert/58icon.png', //图片链接，可选，有则展示图片
        title: '我是一个弹层',//弹窗标题，可选，有则展示
        text: '我是想要展示点文字,看看效果，随便写点什么好了,莺莺燕燕春春，花花柳柳真真',//弹窗文字，可选，有则展示
        button: [
         '我不知道',
          '我知道'
        ],//可选，长度为1，则只要一个按钮，长度为二，则两个按钮
        checkbox:'不再提示了',//可选，复选框
       }
# 组件返回函数
function1(obj){
//返回obj
{
index:1  //必返回.返回点击按钮id，单按钮为1，双按钮则返回1或2
checked:true //非必返回项，有则返回。返回复选框的选择状态，选中返回true，未选中则返回false,
}
}
