<script>
export default {
  data(){
    return{
      option:1,    //操作类型0：注册，1：登录，2：重置密码
      ruleForm:{
        username:'',
        password:'',
      },
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger:'blur'},
          {min:8,max:12,message: '长度在8到12个字符',trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:8,max:12,message: '长度在8到12个字符',trigger: 'blur'}
        ]
      }

    }
  },
  methods:{
    changeOption(type){
      this.option=type
    },
    Login(){
      // this.$router.push({path:'/front_myself/FirstPage'});
    }
  }
}
</script>

<template>
  <div class="login-body">
    <div class="bg"></div>
    <div class="login-panel">
      <el-form
          class="login-register"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          @submit.prevent
      >
        <div class="login-title">多模态健康数据分析与预测平台</div>
        <el-form-item  prop="username">
          <el-input
              prefix-icon="User"
              size="large"
              clearable
              placeholder="请输入账号"
              maxlength="150"
              v-model="ruleForm.username"
          >

          </el-input>
        </el-form-item>
        <!--登录密码-->
        <el-form-item prop="password" v-if="option===1">
          <el-input
              prefix-icon="Lock"
              type="password"
              size="large"
              placeholder="请输入密码"
              show-password
              v-model="ruleForm.password"
          >

          </el-input>
        </el-form-item>
        <!--注册-->
        <div v-if="option===0 || option===2">
          <el-form-item prop="emailCode">
            <div class="send-email-panel">
              <el-input
                  prefix-icon="Edit"
                  size="large"
                  placeholder="请输入邮箱验证码"

              ></el-input>
              <el-button class="send-mail-btn" type="primary" size="medium">获取验证码</el-button>
            </div>
            <el-popover placement="left" :width="500" trigger="click">
              <div>
                <p>1.在垃圾箱中查找邮箱验证码</p>
                <p>2.在邮箱中头像->设置->反垃圾->白名单->设置邮箱地址白名单</p>
                <p>3.我也不知道啊啊啊啊啊</p>
              </div>
              <template #reference>
                <span class="a-link" :style="{'font-size':'14px'}">未收到邮箱验证码？</span>
              </template>
            </el-popover>
          </el-form-item>
          <!--昵称-->
          <el-form-item prop="nickName" v-if="option===0">
            <el-input
                prefix-icon="User"
                size="large"
                placeholder="请输入昵称"
                maxlength="20"
            ></el-input>
          </el-form-item>

          <!--注册密码，找回密码-->
          <el-form-item prop="registerPassword">
            <el-input
                prefix-icon="Lock"
                type="password"
                size="large"
                placeholder="请输入密码"

            ></el-input>
          </el-form-item>
          <!--重复密码-->
          <el-form-item prop="registerPassword">
            <el-input
                prefix-icon="Lock"
                type="password"
                size="large"
                placeholder="请再次输入密码"

            ></el-input>
          </el-form-item>
        </div>
        <!--验证码-->
        <el-form-item prop="checkCode">
          <div class="check-code-panel">
            <el-input
                prefix-icon="Edit"
                size="large"
                placeholder="请输入验证码"
            >

            </el-input>
            <!--            <img :src="checkCodeUrl" class="check-code" />-->
          </div>
        </el-form-item>
        <!--登录-->
        <el-form-item v-if="option===1">
          <div class="rememberme-panel">
            <el-checkbox>记住我</el-checkbox>
          </div>
          <div class="no-account">
            <a href="javascript:void(0)" class="a-link" @click="changeOption(2)">忘记密码？</a>
            <a href="javascript:void(0)" class="a-link" @click="changeOption(0)">没有账号?</a>
          </div>
        </el-form-item>

        <!--找回密码-->
        <el-form-item v-if="option===2">
          <a href="javascript:void(0)" class="a-link" @click="changeOption(1)">去登录？</a>
        </el-form-item>
        <!--注册-->
        <el-form-item v-if="option===0">
          <a href="javascript:void(0)" class="a-link" @click="changeOption(1)">已有账号？</a>
        </el-form-item>
        <!--登录按钮-->
        <el-form-item>
          <el-button type="primary" class="op-btn" size="large" @click="Login">
            <span v-if="option===0">注册</span>
            <span v-if="option===1">登录</span>
            <span v-if="option===2">重置密码</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--    <Dialog-->
    <!--      :show="dialogConfig4SendMailCode.show"-->
    <!--      :title="dialogConfig4SendMailCode.title"-->
    <!--      :buttons="dialogConfig4SendMailCode.buttons"-->
    <!--      width="400px"-->
    <!--      :showCancel="false"-->
    <!--      @close="dialogConfig4SendMailCode.show=false"-->
    <!--    >-->
    <!--      <el-form-->
    <!--        :model="formData4SendMailCode"-->
    <!--        :rules="rules"-->
    <!--        ref="formData4SendMailCodeRef"-->
    <!--        label-width="80px"-->
    <!--        @submit.prevent-->
    <!--      >-->
    <!--        <el-form-item label="邮箱">-->
    <!--          {{formData.email}}-->
    <!--        </el-form-item>-->
    <!--      </el-form>-->
    <!--      <el-form-item label="验证码" prop="checkCode">-->
    <!--        <div class="check-code-panel">-->
    <!--          <el-input-->
    <!--            size="large"-->
    <!--            placeholder="请输入验证码"-->
    <!--            v-model.trim="formData4SendMailCode.checkCode"-->
    <!--          ></el-input>-->
    <!--          <img-->
    <!--            :src="checkCodeUrl4SendMailCode"-->
    <!--            class="check-code"-->
    <!--            @click="changeCheckCode(1)"-->
    <!--          />-->
    <!--        </div>-->
    <!--      </el-form-item>-->
    <!--    </Dialog>-->
  </div>
</template>

<style lang="scss" scoped>
.login-body{
  overflow: auto;
  height: calc(100vh);  //calc动态计算
  width: calc(100vw);
  background-size: cover;
  background: url("Login/Login.png");
  display: flex; //弹性布局
  .bg{
    flex: 1;   //容器剩余空间的分配比例
    //background-size: cover;
    background-position: center;
    background-size: 800px;
    background-repeat: no-repeat;  //设置背景图像不重复铺满屏幕
    //background-image: url("../assets/万叶.jpeg");
  }
  .login-panel{
    opacity: 1;
    width: 430px;
    margin-right: 15%;
    margin-top: calc((100vh - 500px) / 2);
    .login-register{
      padding: 25px;
      background: #fff;
      border-radius: 5px;  //边框半径
      .login-title{
        text-align: center;
        font-size: 18px;
        font-weight: bold;  //字体为粗体
        margin-bottom: 20px;
      }
      .send-email-panel{
        display: flex;
        width: 100%;
        justify-content: space-between;  //换行左对齐
        .send-mail-btn{
          margin-left: 5px;
        }
      }
      .rememberme-panel{
        width: 100%;
      }
      .no-account{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .op-btn{
        width: 100%;
      }
    }
  }
  .check-code-panel{
    width: 100%;
    display: flex;
    .check-code{
      margin-left: 5px;
      cursor: pointer;
    }
  }
  .login-btn-qq{
    margin-top: 20px;
    text-align: center;
    display: flex;
    align-items: center;  //设置纵轴上的对齐方式
    justify-content: center;
    img{
      cursor: pointer;
      margin-left: 10px;
      width: 20px;
    }
  }
}
</style>
