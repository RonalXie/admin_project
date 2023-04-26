<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="store.collapsed" :trigger="null" collapsible
                        breakpoint="lg"
                        width="240" style="min-height: 960px;">
            <div class="logo"/>
            <DefaultSider/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <DefaultHeader/>
            </a-layout-header>
            <a-layout-content
                    :style="{ margin: '24px', padding: '', minHeight: '280px' }"
            >
                <router-view/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import DefaultSider from "@/components/siderbar/DefaultSider.vue";
import DefaultHeader from "@/components/navbar/DefaultHeader.vue";
import {store} from "@/store";

export default {
    components: {DefaultHeader, DefaultSider},
    data() {
        return {
            store
        };
    },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(169, 29, 29, 0.2);
    margin: 16px;
}
</style>
