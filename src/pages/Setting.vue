<script setup lang="ts">
</script>

<template>
        <el-dropdown>
            <span class="el-dropdown-link">
                数据库类型
                <el-icon class="el-icon--right">
                    <ArrowDown />
                </el-icon>
            </span>
        </el-dropdown>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Mysql</el-dropdown-item>
                <el-dropdown-item>Oracle</el-dropdown-item>
            </el-dropdown-menu>
        </template>
</template>

<style scoped>
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>