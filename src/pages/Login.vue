<template>
  <div class="login flex-cent">
    <div class="login-box flex-start">
      <img src="../assets/images/logo-a.png" alt="" class="login-logo">
      <p class="title">SHERRYMUSIC</p>
      <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :wrapper-col="wrapperCol"
      >
        <a-form-item ref="name" label="" name="phone">
          <a-input v-model:value="formState.phone" placeholder="请输入网易云音乐手机号">
            <template #prefix>
              <user-outlined type="user" />
            </template>
          </a-input>

        </a-form-item>
        <a-form-item ref="name" label="" name="pwd">
          <a-input-password v-model:value="formState.password" placeholder="请输入密码">
            <template #prefix>
              <UnlockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item >
          <a-button class="login-btn" block :loading="loading" @click="onSubmit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import {reactive,ref} from 'vue';
import {useRouter} from 'vue-router';
import { UserOutlined,UnlockOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,UnlockOutlined
  },
  setup(){
    const router =useRouter();
    const loading=ref(false);
    const formRef = ref();
    const formState= reactive({
      phone: '',
      password: '',
    });
    const rules = {
      phone: [
        { required: true, message: '手机号都没有', trigger: 'blur' },
        { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' },
      ],
      password: [{ required: true, message: '密码怎么回事', trigger: 'blur' }],
    };
    const onSubmit = () => {
      formRef.value.validate().then(() => {
        loading.value=true;
        let {phone, password} =formState
        loginAsync(phone, password)
      }).catch(error => {
          });
    };
    const loginAsync=(phone, password)=>{
      console.log(phone,password)
      loading.value=false;
      router.push('/home')
    }
    return{
      formState,
      rules,
      formRef,
      loading,
      wrapperCol: { span: 24 },
      onSubmit,

    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: #5dd5c8 url('@/assets/images/newbg1.png') bottom center no-repeat;

  .login-box {
    width: 350px;
    height: 480px;
    box-sizing: border-box;
    background: #fff url('@/assets/images/logbg.jpg') bottom center no-repeat;
    margin: auto;
    border-radius: 8px;
    flex-direction: column;

    .login-logo {
      width: 55px;
      margin: 40px 0 0;
    }

    .title {
      margin-bottom: 40px;
      margin-top: 10px;
      font-size: 14px;
    }
    .login-btn{
      background: #5dd5c8;
      color:#fff;
      border-radius: 4px;
    }

  }
}
</style>