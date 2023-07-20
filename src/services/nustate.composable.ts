import { ref } from "vue";

const urlParams = new URLSearchParams(window.location.search);
const nuState = ref(urlParams.get('nustate'));

function hasEmailVerificationFailure() {
  return nuState.value === 'email_verification';
}

export function useNuState() {
  return {
    nuState,
    hasEmailVerificationFailure
  }
}


