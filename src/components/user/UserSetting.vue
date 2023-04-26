<template>
  <div>

    <a-form layout="horizontal">
      <a-form-item
          label="昵称"
          :label-col="{span:1}"
          :wrapper-col="{span:20}"
      >
        <a-input placeholder="input placeholder" />
      </a-form-item>
      <a-form-item
          label="Field B"
          :label-col="{span:1}"
          :wrapper-col="{span:20}"
      >
        <a-input placeholder="input placeholder" />
      </a-form-item>
      <a-form-item :wrapper-col="6">
        <a-button type="primary">
          保存
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "UserSetting"
}
</script>

<style scoped>

</style>