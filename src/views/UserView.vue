<template>
  <div>
    <a-card>
      <a-tabs default-active-key="1" tab-position="left" size="large">
        <a-tab-pane key="1" tab="个人设置">
          <UserSetting/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="其他">
          Content of Tab Pane 1
        </a-tab-pane>
      </a-tabs>
    </a-card>

  </div>
</template>

<script>
import UserSetting from "@/components/user/UserSetting.vue";

export default {
    name: "UserView",
  components: {UserSetting}
}
</script>

<style scoped>

</style>
