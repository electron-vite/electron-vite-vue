<script setup lang="tsx">
import { ipcRenderer } from 'electron'
import { NButton } from 'naive-ui'
import { useClipboard } from '@vueuse/core'
const input = ref('r0tg74y71ophdadi2r@newgmail.icu----7rtupH27r')
// const input = ref('126vdsjmgyanpgqrvb@ddmvp.icu----EOJ2NgPfS')
// const input = ref('traceetakashi6274@gmail.com----kedaraditi0214----kedaraditi4760@hotmail.com')

const result = ref('')

const list = ref<any[]>([
  // {
  //   "user": "jannettamoses5977@gmail.com",
  //   "pass": "kenyatearle7610",
  //   "auxiliary": "kenyatearle8223@outlook.com",
  //   "index": 0,
  //   "id": "jannettamoses5977@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-link",
  //   "type": "success",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "tylanindea7687@gmail.com",
  //   "pass": "adalbertokanisha4845",
  //   "auxiliary": "adalbertokanisha8803@yandex.com",
  //   "index": 1,
  //   "id": "tylanindea7687@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "success",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "bayanjae8652@gmail.com",
  //   "pass": "lorenarosamond4075",
  //   "auxiliary": "lorenarosamond8958@outlook.com",
  //   "index": 2,
  //   "id": "bayanjae8652@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "fail",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "geneviashametra1019@gmail.com",
  //   "pass": "sheypervis2156",
  //   "auxiliary": "sheypervis0163@qq.com",
  //   "index": 3,
  //   "id": "geneviashametra1019@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "success",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "marikamelindasue5911@gmail.com",
  //   "pass": "ambrbreeann4103",
  //   "auxiliary": "ambrbreeann5643@icloud.com",
  //   "index": 4,
  //   "id": "marikamelindasue5911@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "success",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "caterinereba2981@gmail.com",
  //   "pass": "arvisleo0563",
  //   "auxiliary": "arvisleo1265@zoho.com",
  //   "index": 5,
  //   "id": "caterinereba2981@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "success",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "adairaderrell9992@gmail.com",
  //   "pass": "adairaderrell8698",
  //   "auxiliary": "adairaderrell1859@hotmail.com",
  //   "index": 6,
  //   "id": "adairaderrell9992@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "success",
  //   "result": "成功😘"
  // },
  // {
  //   "user": "nishadarrow0444@gmail.com",
  //   "pass": "cliftontiffani7462",
  //   "auxiliary": "cliftontiffani2263@hotmail.com",
  //   "index": 7,
  //   "id": "nishadarrow0444@gmail.com",
  //   "info": "成功😘",
  //   "ident": "poe-validate",
  //   "type": "success",
  //   "result": "成功😘"
  // }
])

ipcRenderer.on('progress', (event, args) => {
  console.log('progress', args);

  const { user } = args
  const target = list.value.find((item) => item.user === user)

  if (target) {
    Object.assign(target, args)
  } else {
    list.value.push(args)
  }
})

function getLink(val?: string) {
  ipcRenderer.invoke('getLink', { text: val || input.value }).then((res) => {
    console.log(res);
  })
}

function getResult(val?: string) {
  ipcRenderer.invoke('poe-result', { text: val || input.value }).then((res) => {
    console.log(res);
  })
}

function stopHandler() {
  ipcRenderer.invoke('stop')
}

function gptLinkHandler() {
  ipcRenderer.invoke('gpt-link', { text: input.value })
}

function gptResultHandler() {
  ipcRenderer.invoke('gpt-result', { text: input.value })
}

const listSuccess = computed(() => {
  return list.value.filter((item) => item.type === 'success')
})
const listFail = computed(() => {
  return list.value.filter((item) => item.type !== 'success')
})

const { copy } = useClipboard()
function copyText(text: any) {
  copy(text)
}
function copyAccount(item: any) {
  copy(item.user + '----' + item.pass + '----' + item.auxiliary)
}

function application () {
  ipcRenderer.invoke('gpt-batch-4.0', { text: input.value })
}

const columns = [
  {
    title: '序列',
    render: (row, index) => h('span', undefined, index + 1),
    width: 60
  },
  {
    title: '邮箱',
    key: 'user',
    width: 300
  },
  {
    title: '进度',
    key: 'info',
    width: 220
  },
  {
    title: '结果',
    key: 'result',
    ellipsis: true
  },
  {
    title: '操作',
    width: 230,
    align: 'left',
    fixed: 'right',
    render: (row: any) => {
      /**
       * poe-link
       * 再次提链: [type: fail, loading: false]
       * 复制链接: [type: success, loading: false]
       * 充值结果: [type: success, loading: false]
       */

      /**
       * poe-validate
       * 充值结果: [type: fail, loading: false]
       */
      const rechargeResult = () => {
        let link = row.ident === 'poe-link' && !row.loading
        let validate = row.ident === 'poe-validate' && row.type !== 'success' && !row.loading
        return link || validate
      }

      return <n-space>
        {row.ident === 'poe-link' && row.type === 'success' && !row.loading
          ? <NButton text type="primary" onClick={() => copyText(`${row.user}\n${row.result}`)}>复制链接</NButton>
          : null
        }
        {row.ident === 'poe-link' && row.type !== 'success' && !row.loading
          ? <NButton text type="primary" onClick={() => getLink(`${row.user}----${row.pass}----${row.auxiliary}`)}>再次提链</NButton>
          : null
        }

        <NButton text type="primary" onClick={() => copyAccount(row)}>复制帐密</NButton>

        {rechargeResult() //.ident === 'poe-link' && row.type === 'success' && !row.loading
          ? <NButton text type="info" onClick={() => getResult(`${row.user}----${row.pass}----${row.auxiliary}`)}>充值结果</NButton>
          : null
        }

      </n-space>
    }
  }
]
</script>

<template>
  <div>
    <div class="left" flex-1>
      <p>帐密</p>
      <textarea class="textarea w-full" v-model="input" rows="10" />

      <div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>poe：</span>
          <NButton type="primary" dashed @click="getLink()">提取链接</NButton>
          <NButton type="primary" dashed @click="getResult()">充值结果</NButton>
          <!-- <NButton type="primary" dashed @click="application()">申请4.0</NButton> -->
        </div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>gpt：</span>
          <NButton type="primary" dashed @click="gptLinkHandler">gpt提链</NButton>
          <NButton type="primary" dashed @click="gptResultHandler">充值结果</NButton>
        </div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>操作：</span>
          <NButton type="primary" dashed @click="stopHandler">停止</NButton>
        </div>
      </div>
    </div>
    <div class="right" flex-1>
      <p>结果</p>

      <n-space mb-3>
        <n-button type="primary" dashed>复制全部成功 {{ listSuccess.length }}个</n-button>
        <n-button type="error" dashed>复制全部失败 {{ listFail.length }}个</n-button>
      </n-space>
      <NDataTable :data="list" :columns="columns" :scroll-x="1000">
      </NDataTable>

      <div w-full h-40></div>
    </div>

    <pre>{{ list }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.textarea:nth-of-type() {
  width: 100%;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
