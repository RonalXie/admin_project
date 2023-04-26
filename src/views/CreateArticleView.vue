<template>
  <div class="edit-container">
    <a-modal v-model="visible" title="添加标签">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="tagBut" @click="handleOk">确定添加</a-button>
      </template>
      <a-input placeholder="" v-model="addTagName" size="large"/>
    </a-modal>
    <a-card>
      <div>标题</div>
      <a-input v-model="title_value"></a-input>
      <br/>
      <br/>
      <div>正文</div>
      <EditorCard @getEditor="doEditor"/>
      <br/>
      <div>摘要</div>
      <div>
        <a-textarea placeholder="摘要" :rows="4" v-model="abs_value"/>
      </div>
      <br/>
      <div>标签</div>
      <div>
        <a-row :gutter="16">
          <a-col :span="6">
            <a-select mode="multiple" style="width: 100%" placeholder="Tags Mode" @change="handleChange"
                      :maxTagTextLength="2">
              <a-select-option v-for="(item) in tagData" :key="item.sid">
                {{ item.name}}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <a-button type="dashed" style="width: 100%" @click="visible=true">
              <a-icon type="plus"/>
              添加标签
            </a-button>
          </a-col>
        </a-row>
      </div>
      <br/>
      <div>封面图</div>
      <div>
        <UploadCover @getCover="getCoverUrl"></UploadCover>
      </div>
      <a-divider/>
      <div style="text-align: right">
        <a-button type="primary" @click="pushArticle">发布</a-button>
      </div>
    </a-card>

  </div>
</template>

<script>
import EditorCard from "@/components/article/EditorCard.vue";
import UploadCover from "@/components/article/UploadCover.vue";
import {getTags, insertTag} from "@/api/tag";
import {insertArticle} from "@/api/article";
// import {insertArticle} from "@/api/article";

export default {
  name: "EditArticle",
  components: {
    EditorCard,
    UploadCover
  },
  data() {
    return {
      visible: false,
      title_value: "",
      abs_value: "",
      addTagName: "",
      tagBut:false,
      tagData:[],
      cover_url:"",
      tag_value:[]

    }
  },
  created() {
    getTags().then(res=>{
      this.tagData=res.data
    })
  },
  methods: {
    pushArticle(){
      const postData={
        name:this.title_value,
        abs:this.abs_value,
        cover:this.cover_url,
        tags:this.tag_value,
        content:this.content,
        views:0,
        top:0,

      }
      console.log(postData)
      insertArticle(postData)

    },
    handleChange(value, option) {
      if (option.length <= 2) {
        this.tag_value=value
        console.log(value, option.length);
      } else {
        this.$message.warn("最多只能选择两个标签！", 3)
      }
    },
    handleOk() {
      this.tagBut=true
      // setTimeout(this.tagBut=false,3000)
      insertTag({
        name:this.addTagName,
      }).then(()=>{
        this.tagBut=false;
        this.visible = false;
      })
    },
    doEditor(editor) {
      this.content=editor.getText()
      this.abs_value = editor.getText().slice(0, 200);
    },
    getCoverUrl(imgUrl){
      console.log(imgUrl)
      this.cover_url=imgUrl
    }
  }
}
</script>

<style scoped>
.edit-container {


}
</style>

