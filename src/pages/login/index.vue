<script setup>
import { reactive, ref } from 'vue'
const form = reactive({})
const rules = {}

const tips = ref('获取验证码')
const getCode = () => {
    console.log('获取验证码')
}

const checkboxList = [
    { name: '记住密码' },
    { name: '自动登录' }
]
const isAgree = ref(true)
const checkboxValue = ref([])

const submit = () => {
    console.log('登录')
    console.log(isAgree.value)
    console.log(checkboxValue.value)
}
</script>

<template>
    <view class="login-container">
        <view class="logo-wrap">
            <uv-image src="/static/logo.png" width="160rpx" height="160rpx" shape="circle" />
            <view class="title">
                QQ音乐
            </view>
            <view class="subtitle">
                限门店用户登录使用，用于活动和宴席管理
            </view>
        </view>
        <view class="form-wrap">
            <uv-form ref="form" label-position="left" :model="form" :rules="rules">
                <uv-form-item label="" prop="name">
                    <uv-input v-model="form.name" placeholder="请输入手机号"
                        :placeholderStyle="{ color: 'red !important', fontSize: '48rpx' }" border="none" fontSize="28rpx"
                        class="custome-input" />
                </uv-form-item>
                <uv-form-item label="" prop="name">
                    <uv-input placeholder="请输入验证码" :placeholderStyle="{ color: 'red !important' }" fontSize="28rpx"
                        border="none" class="custome-input">
                        <!-- vue3模式下必须使用v-slot:suffix -->
                        <template v-slot:suffix>
                            <text @click="getCode" type="success" size="mini" class="code-btn">发送验证码</text>
                        </template>
                    </uv-input>
                </uv-form-item>
            </uv-form>
        </view>
        <view class="btn-wrap">
            <uv-button type="primary" @click="submit" shape="circle">登录</uv-button>
            <uv-checkbox-group v-model="checkboxValue" size="small" :customStyle="{ marginTop: '28rpx' }">
                <uv-checkbox :name="true">
                    <text class="is-agree-text">
                        已阅读并同意
                        <text class="agree-link"
                            @click.self.stop="handleOpen('/pages/profile/agreement?type=1')">《用户授权协议》</text>
                        和
                        <text class="agree-link"
                            @click.self.stop="handleOpen('/pages/profile/agreement?type=2')">《隐私政策》</text>
                    </text>
                </uv-checkbox>
            </uv-checkbox-group>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.login-container {
    padding: 0 55rpx;

    .logo-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 80rpx;

        .title {
            margin-top: 24rpx;
            margin-bottom: 16rpx;
            line-height: 64rpx;
            font-family: "PingFang SC";
            font-weight: 600;
            font-size: 48rpx;
            color: #000;
        }

        .subtitle {
            line-height: 32rpx;
            font-weight: 400;
            font-size: 24rpx;
            color: #999;
        }
    }

    .form-wrap {

        :deep(.uv-form-item) {
            margin-bottom: 32rpx;
            padding: 0 24rpx;
            background: #F3F3F3;

            &:last-child {
                margin-bottom: 0;
            }

            .code-btn {
                line-height: 40rpx;
                font-size: 28rpx;
                color: #669;
            }
        }
    }

    .btn-wrap {
        margin-top: 64rpx;

        .is-agree {

            &-text {
                line-height: 32rpx;
                font-size: 24rpx;
                color: #333;

                .agree-link {
                    color: #669;
                }
            }

        }
    }
}
</style>
