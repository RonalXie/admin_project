<template>
  <div>
      <div style="float: left">
          <a-icon
                  class="trigger"
                  :type="store.collapsed ? 'menu-unfold' : 'menu-fold'"
                  @click="() => (store.collapsed = !store.collapsed)"
          />
      </div>
      <div class="head-right">
          <a-space size="middle">
              <a-input-search
                      placeholder="input search text"
                      :style="{verticalAlign: 'middle',width:'200px'}"
              >
              </a-input-search>
              <a-badge :count="99">
                  <a-dropdown>
                      <a-avatar
                              :style="{verticalAlign: 'middle' }"
                              src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                      >
                      </a-avatar>
                      <a-menu slot="overlay" @click="menuClick">
                          <a-menu-item key="/user">
                              <span><a-icon type="user"/>个人中心</span>
                          </a-menu-item>
                          <a-menu-item>
                              <span><a-icon type="message" />消息盒子</span>
                          </a-menu-item>
                          <a-menu-divider/>
                          <a-menu-item>
                              <span><a-icon type="logout"></a-icon>退出登录</span>
                          </a-menu-item>
                      </a-menu>
                  </a-dropdown>
              </a-badge>
          </a-space>
      </div>


  </div>
</template>

<script>
import {store} from "@/store";
export default {
    name: "DefaultHeader",
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
