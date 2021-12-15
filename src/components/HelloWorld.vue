<template>
  <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item has-feedback label="用户名" name="username">
      <a-input v-model:value="formState.username" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="密码" name="password">
      <a-input v-model:value="formState.password" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="性别" name="gender">
      <a-radio-group v-model:value="formState.gender" name="radioGroup">
        <a-radio :value="1">男</a-radio>
        <a-radio :value="2">女</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submit">登录</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      <a-button style="margin-left: 10px" @click="search">查询</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, ref, toRaw, getCurrentInstance } from 'vue';
export default defineComponent({
  setup() {
    let { proxy } = getCurrentInstance();
    const formRef = ref();
    const formState = reactive({
      username: '',
      password: '',
      age: undefined,
      text: 212
    });
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    };

    const handleFinish = values => {
      console.log(values, formState);
    };

    const handleFinishFailed = errors => {
      console.log(errors);
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    const submit = () => {
      proxy.$axios.post('/users/createUser', formState).then((res) => {
        console.log(res, 33)
      })
       console.log('submit!', toRaw(formState));
    }
    const search = () => {
      const param = {
        condition: {},
        page: {
            pageCurrent: 2,
            pageSize: 5
        }
      }
      proxy.$axios.post('/users/pageFindUser', param).then((res) => {
        console.log(res, 33)
      })
    }

    const handleValidate = (...args) => {
      console.log(args);
    };

    return {
      formState,
      formRef,
      layout,
      handleFinishFailed,
      handleFinish,
      submit,
      search,
      resetForm,
      handleValidate,
    };
  },

});
</script>