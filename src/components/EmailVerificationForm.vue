<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@/services/auth0.composable";
import TextInput from "@/components/TextInput.vue";

const {loginWithEmail} = useAuth0();

const props = defineProps<{
  name: string;
  email: string;
}>();

const passwordField = ref<string>('');


function login() {
  console.log(props.email, passwordField.value);
  loginWithEmail(props.email, passwordField.value, (err: any) => console.log(err));
}
</script>

<template>
  <h2>Welcome, {{ name }}</h2>
  <p>{{ email }}</p>
  <p>It looks like you already have an account with us, please enter your password below to link your accounts and login
    with Google in the future.</p>
  <p>If you haven't created an account with The Sun, Please contact Customer Services</p>

  <div class="form-row">
    <text-input type="password" label="Your Password" v-model="passwordField"></text-input>
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