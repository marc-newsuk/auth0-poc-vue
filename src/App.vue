<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import { useNuState } from "@/services/nustate.composable";
import EmailVerificationForm from "@/components/EmailVerificationForm.vue";

const {hasEmailVerificationFailure} = useNuState();
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/05/The-Sun-logo.png" alt="thesun"/>
      </div>
    </header>

    <main>
      <email-verification-form v-if="hasEmailVerificationFailure()" name="Emily" email="emily@mail.com" />
      <login-form v-else />
    </main>
  </div>
</template>

<style scoped lang="scss">

.wrapper {
  background-color: white;
  width: 500px;
}

header .logo {
  display: flex;
  place-items: center;
}

.logo img {
  width: 100%;
}

main {
  padding: 20px;
}
</style>
