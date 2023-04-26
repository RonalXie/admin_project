<template>
  <div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['/']" @click="menuClick">
          <a-menu-item key="/">
              <a-icon type="dashboard" />
              <span>DashBoard</span>
          </a-menu-item>
          <a-menu-item key="/articles">
              <a-icon type="book" />
              <span>文章管理</span>
          </a-menu-item>
          <a-menu-item key="/user">
              <a-icon type="user" />
              <span>个人中心</span>
          </a-menu-item>
      </a-menu>
  </div>
</template>

<script>
import {store} from "@/store";
export default {
    name: "DefaultSider",
    data(){
        return{
            store
        }
    },
    methods:{
        menuClick({ item, key, keyPath }) {
            // 获取到当前的key,并且跳转
            console.log(item,keyPath)
            if(this.$route.path===key){
                //当前路径中不包括本path就执行
                return;
            }
            this.$router.push({
                path: key
            })
        },
    }
}
</script>

<style scoped>

</style>
