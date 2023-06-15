<script setup lang="tsx">
import { ipcRenderer } from 'electron'
import { NButton } from 'naive-ui'
import { useClipboard, useLocalStorage } from '@vueuse/core'

const input = useLocalStorage('accountInput', 'pollcribracacom@mail.com-----XAxeEgy34j')
// const input = ref('126vdsjmgyanpgqrvb@ddmvp.icu----EOJ2NgPfS')
// const input = ref('traceetakashi6274@gmail.com----kedaraditi0214----kedaraditi4760@hotmail.com')

const result = ref('')
const liao = useLocalStorage('result', '')

const list = ref<any[]>([])
const localLis = useLocalStorage('list', list)
list.value = localLis.value

const renderList = computed(() => {
  // 成功的排在前面
  return list.value.sort((a, b) => {
    if (a.type === 'success' && b.type !== 'success') {
      return -1
    } else if (a.type !== 'success' && b.type === 'success') {
      return 1
    } else {
      return 0
    }
  })
})

ipcRenderer.on('progress', (event, args) => {
  const { user } = args
  const target = list.value.find((item) => item.user === user)

  if (target) {
    Object.assign(target, args)
  } else {
    list.value.push(args)
  }
})

// function handler () {
//   const data = {
//     'getLink'
//   }
// }

function getLink(val?: string) {
  ipcRenderer.invoke('getLink', { text: val || input.value }).then((res) => {
    console.log(res);
  })
}

function getLink_7day(val?: string) {
  let liaoObj
  if (liao.value) {
    const [_1, bank, cvc, cardExpiry, name, address, city, _2, postalCode, nation] = liao.value.split('|').map(v => v.trim())
    liaoObj = { bank, cvc, date: cardExpiry, name, address, city, postalCode, nation }
  }

  console.log(liaoObj)
  ipcRenderer.invoke('get-poe-link-7day', { text: val || input.value, liao: liaoObj }).then((res) => {
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
function startOneChromHandler() {
  ipcRenderer.invoke('start-one-chrom')
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

function copyAllSuccess() {
  const text = listSuccess.value.map((item) => `${item.user}\n${item.result}`).join('\n\n')
  copyText(text)
}

const listFail = computed(() => {
  return list.value.filter((item) => item.type !== 'success')
})

function copyFailHandler() {
  const text = listFail.value.map((item) => `${item.user}----${item.pass}`).join('\n\n')
  copyText(text)
}

function clearLocalHandler() {
  list.value = []
  localLis.value = []
}

const { copy } = useClipboard()
function copyText(text: any) {
  copy(text)
}
function copyAccount(item: any) {
  copy(item.user + '----' + item.pass + '----' + item.auxiliary)
}

function application() {
  ipcRenderer.invoke('gpt-batch-4.0', { text: input.value })
}

// 申请结果
function applicationResult() {
  ipcRenderer.invoke('gpt-batch-4.0-result', { text: input.value })
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

const keys = ['getLink', 'poe-result', 'gpt-link', 'gpt-result', 'gpt-batch-4.0', 'gpt-batch-4.0-result']
function handler () {

}

</script>

<template>
  <div>
    <div class="left" flex-1>
      <p>帐密</p>
      <textarea class="textarea w-full min-w-100 max-w-94vw" v-model="input" rows="20" />

      <p>liao：</p>
      <NInput class="textarea w-full min-w-100 max-w-94vw" v-model:value="liao" />

      <div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>poe：</span>
          <TheButton type="primary" dashed @click="getLink()">提取链接</TheButton>
          <TheButton type="primary" dashed @click="getResult()">充值结果</TheButton>
          <TheButton type="warning" dashed @click="getLink_7day()">提取链接-7天</TheButton>
        </div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>gpt4.0：</span>
          <TheButton type="primary" dashed @click="application()">申请4.0</TheButton>
          <TheButton type="primary" dashed @click="applicationResult()">检查申请结果(mail邮箱)</TheButton>
        </div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>gpt plus：</span>
          <NButton type="primary" dashed @click="gptLinkHandler">gpt提链</NButton>
          <NButton type="primary" dashed @click="gptResultHandler">充值结果</NButton>
        </div>
        <div flex gap-3 mt-3 items-center>
          <span w-15>操作：</span>
          <NButton type="error" dashed @click="stopHandler">关闭所有浏览器</NButton>
          <NButton type="primary" dashed @click="startOneChromHandler">开一个浏览器测试</NButton>
        </div>
      </div>
    </div>
    <div class="right" flex-1>
      <p>结果</p>

      <n-space mb-3>
        <n-button type="primary" dashed @click="copyAllSuccess">复制全部成功 {{ listSuccess.length }}个</n-button>
        <n-button type="error" dashed @click="copyFailHandler">复制全部失败 {{ listFail.length }}个</n-button>
        <n-button type="error" dashed @dblclick="clearLocalHandler">清除记录(双击)</n-button>
      </n-space>
      <NDataTable :data="list" :columns="columns" :scroll-x="1000">
      </NDataTable>

      <div w-full h-40></div>
    </div>

    <pre>{{ renderList }}</pre>
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
