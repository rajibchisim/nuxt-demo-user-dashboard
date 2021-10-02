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
            <input type="checkbox">
            <label for="">Keep me signed in</label>
          </div>
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
      password: ''
    }
  },
  methods: {
    loginUser () {
      this.$store.dispatch('authenticate', {
        userid: this.userid,
        password: this.password
      })
    }
  }
}
</script>
