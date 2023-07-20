<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAuth0 } from "@/services/auth0.composable";
import TextInput from "@/components/TextInput.vue";

const {renderCaptcha, loginWithEmail, loginWithGoogle} = useAuth0();


const emailField = ref<string>('');
const passwordField = ref<string>('');
const captchaContainer = ref<HTMLElement>();

onMounted(() => {
  renderCaptcha(captchaContainer.value);
})

function login() {
  console.log(emailField.value, passwordField.value);
  loginWithEmail(emailField.value, passwordField.value, (err: any) => console.log(err));
}

</script>

<template>
  <p>One account for everthing under The Sun</p>

  <div class="form-row">
    <button class="mdc-button mdc-button--outlined" @click="loginWithGoogle">
      <span class="mdc-button__ripple"></span>
      <span class="mdc-button__label">Continue with Google</span>
    </button>
  </div>

  <div class="form-row">
    <button class="mdc-button mdc-button--outlined" >
      <span class="mdc-button__ripple"></span>
      <span class="mdc-button__label">Continue with Apple</span>
    </button>
  </div>

  <div class="form-row">
    <hr/>
  </div>

  <div class="form-row">
    <text-input type="email" label="Email address" v-model="emailField"></text-input>
  </div>
  <div class="form-row">
    <text-input type="password" label="Your Password" v-model="passwordField"></text-input>
  </div>

  <div ref="captchaContainer" class="form-row"></div>

  <div class="form-row">
    <a href="#">Don't remember your password?</a>
  </div>

  <div class="form-row">
    <div class="mdc-touch-target-wrapper">
      <button class="mdc-button mdc-button--raised" @click="login">
        <span class="mdc-button__label">Sign In</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@material/button/styles";

h4 {
  margin: 15px 0;
}

p {
  margin-bottom: 10px;
}

.form-row {
  margin-bottom: 10px;
}

.mdc-button {
  width: 100%;
}
</style>