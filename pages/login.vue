<template>
  <div class="container">
    <div class="login-form-container">
      <div class="form-area">
        <h1 class="login-form-title">
          sign in to your account
        </h1>
        <form class="login-form" @submit.prevent="loginUser">
          <div class="form-row">
            <input v-model="userid" class="form-input" type="text" placeholder="Username">
          </div>
          <div class="form-row">
            <input v-model="password" class="form-input" type="password" placeholder="Password">
          </div>
          <div class="form-row">
            <input id="remember" type="checkbox">
            <label for="remember">Keep me signed in</label>
          </div>
          <transition>
            <div v-show="loginError" class="form-error" v-text="loginErrorMsg" />
          </transition>
          <button>Sign in </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userid: '',
      password: '',
      loginErrorMsg: '',
      loginError: false
    }
  },
  methods: {
    async loginUser () {
      if (this.userid === '' || this.password === '') {
        this.showError('Username and password is required')
        return
      }
      try {
        await this.$store.dispatch('authenticate', {
          userid: this.userid,
          password: this.password
        })
      } catch {
        this.showError('Incorrect username or password')
      }
    },
    showError (msg) {
      this.loginError = true
      this.loginErrorMsg = msg
      setTimeout(() => { this.loginError = false }, 2000)
    }
  }
}
</script>
