<!-- 侧边菜单导航栏 -->
<template>
    <div class="q-pa-md" style="max-width: 250px">
        <q-list bordered padding class="rounded-borders text-primary">
            <q-item clickable v-ripple :active="link === '主页'" @click="navigateTo('/','主页')" active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="home" />
                </q-item-section>

                <q-item-section>主页</q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === '数据库'" @click="navigateTo('/database','数据库')" active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="storage" />
                </q-item-section>

                <q-item-section>数据库</q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === 'trash'" @click="link = 'trash'" active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="delete" />
                </q-item-section>

                <q-item-section>Trash</q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable v-ripple :active="link === '设置'" @click="navigateTo('/setting','设置')" active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="settings" />
                </q-item-section>
                <q-item-section>设置</q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === '帮助'" @click="navigateTo('/help','帮助')" active-class="my-menu-link">
                <q-item-section avatar>
                    <q-icon name="help" />
                </q-item-section>

                <q-item-section>帮助</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let link = ref<string>('主页')
const router = useRouter()

function navigateTo(path: string, clickName: string) {
    link.value = clickName
    router.push(path)
}


</script>

<style scoped>
.my-menu-link {
    color: white;
    background: #F2C037;
}
</style>