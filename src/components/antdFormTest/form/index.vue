<script setup lang="ts">
import {defineComponent, reactive, defineProps} from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const props = defineProps({
  // 要加载的form组件,数组类型
  form: {
    type: Array,
    default: () => [],
  },
})

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
console.log('formState2333', formState['username']);
// console.log('props2333', props.form);
for (let i = 0; i < props.form.length; i++) {
  console.log('props', props.form[i].prop);
  // formState[item?.prop!]
  // console.log('formState', formState[props.form[i].prop]);
}
</script>

<template>
  <div>
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <!--       遍历form数组，渲染form组件,使用<component-->
      <div v-for="(item, index) in form">
        <a-form-item
            :key="index"
            :label="item.label"
            :name="item.prop"
        >
          <component
              :placeholder="item.placeholder"
              v-bind="item.attrs"
              :is="`el-${item.type}`"
              :type="item.prop"
              v-model="formState[item?.prop!]"
          >
            <component
                v-for="(child, i) in item.children"
                :key="i"
                :is="`el-${child.type}`"
                :label="child.label"
                :value="child.value"
            ></component>
          </component>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>

</style>
