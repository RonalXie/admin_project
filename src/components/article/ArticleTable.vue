<template>
  <div>
    <a-card title="文章列表">
      <a-button slot="extra" type="primary" icon="plus" @click="$router.push('/article/create')">新建</a-button>
      <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="name">{{ name }}</a>
        <p slot="abs" slot-scope="abs">{{ abs }}</p>
        <!--            <span slot="customTitle"><a-icon type="smile-o"/> 标题</span>-->
        <span slot="cover" slot-scope="cover">
                <img :src="cover" width="80" height="80" />
        </span>
        <span slot="tags" slot-scope="tags">
              <a-tag
                  v-for="tag in tags"
                  :key="tag"
                  :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
        <span slot="top" slot-scope="top">
                <a-switch v-if="top==1" default-checked></a-switch>
                <a-switch v-else-if="top==0"></a-switch>
            </span>
        <span slot="action">
                <a-button type="primary" icon="edit">编辑</a-button>
                <a-divider type="vertical"/>
                <a-button type="danger" icon="delete">删除</a-button>
                <a-divider type="vertical"/>
            </span>

      </a-table>
    </a-card>
  </div>

</template>
<script>
const columns = [
  {
    title: "标题",
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {customRender: 'name'},
  },
  {
    title: '摘要',
    dataIndex: 'abs',
    key: 'abs',
    scopedSlots: {customRender: 'abs'}
  },
  {
    title: '封面',
    dataIndex: 'cover',
    key: 'cover',
    scopedSlots: {customRender: 'cover'}
  },
  {
    title: '分类',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  },
  {
    title: '点击量',
    dataIndex: 'views',
    key: 'views',
  },
  {
    title: '置顶',
    dataIndex: 'top',
    key: 'top',
    scopedSlots: {customRender: "top"}
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171',
    tags: ['nice', 'developer'],
    top:1
  },
  {
    key: '2',
    name: 'Jim Green',
    abs:"asdfasdfasdfasdfadsf",
    views: 42,
    cover: 'London No. 1 Lake Park',
    tags: ['loser'],
    top:0
  },
  {
    key: '3',
    name: 'Joe Black',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    top: 0
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
