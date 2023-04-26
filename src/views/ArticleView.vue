<template>
  <div>
      <div>
        <a-card>
          <a-form layout="inline">
                <a-form-item label="标题">
                  <a-input placeholder="" />
                </a-form-item>
                <a-form-item label="标签">
                  <a-select
                      mode="multiple"
                      :default-value="['a1', 'b2']"
                      style="width: 100%"
                      placeholder="Please select"
                  >
                    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                      {{ (i + 9).toString(36) + i }}
                    </a-select-option>
                  </a-select>
                </a-form-item>


                <a-form-item>
                  <a-button type="primary">查询</a-button>
                  <a-button style="margin-left: 8px">重置</a-button>
                </a-form-item>


          </a-form>
        </a-card>
      </div>
      <br/>
      <div>
         <ArticleTable/>
      </div>
  </div>
</template>

<script>
import ArticleTable from "@/components/article/ArticleTable.vue";

export default {
    name: "ArticleView",
  components: {ArticleTable}
}
</script>

<style scoped>

</style>
