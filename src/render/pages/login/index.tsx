import { ipcRenderer } from 'electron'
import { defineComponent, reactive, ref } from 'vue'
import { Button, Input, Form, Tabs } from 'ant-design-vue'
import { UserOutlined, CloseOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons-vue'
import { LOGIN, LOGIN_CLOSE } from '@/common/constant/event'
import './index.less'

enum TabKey {
  登录 = '登录',
  注册 = '注册',
}

export default defineComponent({
  name: 'Login.tsx',
  setup(scope, { }) {
    let values = reactive({
      username: '',
      password: '',
      password2: '',
    })
    const tabKey = ref<TabKey>(TabKey.登录)

    const submitForm = () => {
      console.log(values)
      ipcRenderer.invoke(LOGIN)
    }

    const loginNode = (
      <div class="tab-item-box login">
        <Form layout="vertical" model={values} onFinish={submitForm}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入登入账号！' }]}>
            <Input
              prefix={<HomeOutlined style="color:rgba(0,0,0,.44)" />}
              onChange={(ev) => (values.username = ev.target?.value)}
              placeholder="请输入账号"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入登入密码！' }]}>
            <Input.Password prefix={<LockOutlined style="color:rgba(0,0,0,.44)" />} onChange={(ev) => (values.password = ev.target?.value)} placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" class="login-btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )

    const registorNode = (
      <div class="tab-item-box register">
        <Form layout="vertical" model={values} onFinish={submitForm}>
          <Form.Item name="phone" rules={[{ required: true, message: '请输入手机号' }]}>
            <Input suffix={<UserOutlined style="color:rgba(0,0,0,.44)" />} onChange={(ev) => (values.username = ev.target?.value)} placeholder="输入手机号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password onChange={(ev) => (values.password = ev.target?.value)} placeholder="输入密码" />
          </Form.Item>
          <Form.Item name="password2" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password onChange={(ev) => (values.password2 = ev.target?.value)} placeholder="输入确认密码" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" class="login-btn">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    )

    return () => (
      <div class="login-wrap">
        <div class="drap-top-bar"></div>
        <div class="left-banner d-flex align-items-center justify-content-center">BANNER</div>
        <div class="right-login">
          <Tabs key={tabKey as any}>
            <Tabs.TabPane tab={TabKey.登录} key={TabKey.登录}>
              {loginNode}
            </Tabs.TabPane>
            <Tabs.TabPane tab={TabKey.注册} key={TabKey.注册}>
              {registorNode}
            </Tabs.TabPane>
          </Tabs>
        </div>

        <div class="login-close" onClick={() => ipcRenderer.invoke(LOGIN_CLOSE)}>
          <CloseOutlined />
        </div>
      </div>
    )
  },
})
