<!-- 侧边菜单导航栏 -->
<template>
    <q-scroll-area class="fit">
        <q-list padding class="menu-list">
            <q-item clickable v-ripple :active="link === '主页'" @click="navigateTo('/', '主页')"
                active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="home" />
                </q-item-section>

                <q-item-section>
                    主页
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === '数据库'" @click="navigateTo('/database', '数据库')"
                active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="storage" />
                </q-item-section>

                <q-item-section>
                    数据库
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === '设置'" @click="navigateTo('/setting', '设置')"
                active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="settings" />
                </q-item-section>

                <q-item-section>
                    设置
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === '帮助'" @click="navigateTo('/help', '帮助')"
                active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="help" />
                </q-item-section>

                <q-item-section>
                    帮助
                </q-item-section>
            </q-item>
        </q-list>
    </q-scroll-area>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
let link = ref<string>(localStorage.getItem('AsideMenu_CurrentMenu') || '主页')
const router = useRouter()
onMounted(() => {
    const currentRoute = localStorage.getItem('AsideMenu_CurrentMenuRoute');
    if (currentRoute !== null && currentRoute !== '') {
        router.push(currentRoute)
    }
})


function navigateTo(path: string, clickName: string) {
    link.value = clickName
    localStorage.setItem('AsideMenu_CurrentMenu', clickName)
    localStorage.setItem('AsideMenu_CurrentMenuRoute', path)
    router.push(path)
}

</script>

<style scoped>
.my-menu-link {
    color: white;
    background: #F2C037;
}
</style>