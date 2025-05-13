<template>

  <q-form @submit="onSubmit" @reset="onReset">
    <div class="row justify-center q-pa-md">
      <div class="col-10 q-m-sm ">
        <div class="row q-pa-md">
          <div class="col-7">
            <q-input filled color="purple-12" v-model="projectName" label="项目名称" hint="项目的名称"
              :rules="[val => val && val.length > 0 || '请输入项目名称']">
            </q-input>

          </div>
          <div class="col-7">
            <q-input filled color="purple-12" v-model="projectDesc" label="项目描述" hint="项目描述">
            </q-input>
          </div>
        </div>
        <hr />
        <div class="row q-pa-md">

          <div class="col-5 q-glutter-md">
            <q-select filled v-model="databaseType" :options="options" label="数据库类型" color="teal" clearable
              options-selected-class="text-deep-orange" :rules="[val => val || '请选择数据库类型']">
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section>
                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                    <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
          <div class="col-5 q-glutter-md">
            <q-input color="purple-12" v-model="databaseHost" label="Host"
              :rules="[val => val && val.length > 0 || '请输入数据库Host']">
            </q-input>
          </div>
          <div class="col-5 q-glutter-md">
            <q-input color="purple-12" v-model="databaseUser" label="数据库用户"
              :rules="[val => val && val.length > 0 || '请输入数据库用户']">
            </q-input>
          </div>
          <div class="col-5 q-glutter-md">
            <q-input color="purple-12" v-model="databasePassword" label="数据库密码" type="password"
              :rules="[val => val && val.length > 0 || '请输入数据库密码']">
            </q-input>
          </div>
        </div>
        <div class="row justify-end self-end">
          <q-btn label="提交" type="submit" color="primary" />
          <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" />
        </div>





      </div>
    </div>

  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const projectName = ref<string>('')
const databaseHost = ref<string>('')
const databaseUser = ref<string>('')
const databasePassword = ref<string>('')
const projectDesc = ref<string>('')
function onSubmit() {
  if (projectName.value) {
    $q.notify({
      color: 'red-5',
      message: '项目名称不可为空',
      icon: 'warning',
      textColor: 'white',
      timeout: 3000,
      actions: [
        {
          label: '关闭',
          color: 'white',
        },
      ],
    })
  }
}

function onReset() {
  projectName.value = ''
  databaseHost.value = ''
  projectDesc.value = ''
  databaseUser.value = ''
  databasePassword.value = ''
}
let databaseType = ref<string | null>(null);

let options = [
  {
    label: 'Mysql',
    value: 'Mysql',
    description: 'Mysql',
    icon: 'mail'
  },
  {
    label: 'Oracle',
    value: 'Oracle',
    // disable: true,
    description: 'Oracle',
    icon: 'casino'
  }
]

</script>