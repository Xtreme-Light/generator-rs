<template>
    <div class="row q-pa-md q-gutter-sm">
        <div class="col-12">
            <q-breadcrumbs>
                <q-breadcrumbs-el v-for="(item, index) in breadList" :key="index" :to="{ path: item.path }"
                    :label="item.meta.title as string">
                </q-breadcrumbs-el>
            </q-breadcrumbs>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';
const route = useRoute();

let breadList = ref<RouteLocationMatched[]>([]);
// https://blog.csdn.net/ZHANGYANG_1109/article/details/122841255
onMounted(() => {
    if (route.matched.length > 0) {
        breadList.value = route.matched;
        console.log("匹配到的路由为：", route.matched);
    } else {
        breadList.value = [];
    }

})

</script>