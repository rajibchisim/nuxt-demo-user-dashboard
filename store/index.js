export const state = function () {
  return {
    authenticated: false,
    user: null
  }
}

export const mutations = {
  loginSuccess (state, userData) {
    state.authenticated = true
    state.user = userData
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  loginFailure (state) {
    state.authenticated = false
    state.user = null
    localStorage.setItem('user', null)
  }
}

export const actions = {
  serverAuthResponse (context, credencials) {
    return new Promise((resolve, reject) => {
      console.log(credencials)
      setTimeout(() => {
        if (credencials.userid === 'admin' && credencials.password === '1234') {
          resolve({
            msg: 'success',
            payload: {
              user: 'admin',
              token: '1234565465454'
            }
          })
        } else {
          reject(new Error('unauthenticated'))
        }
      }, 1000)
    })
  },
  async authenticate ({ commit, dispatch }, payload) {
    // eslint-disable-next-line
    const response  = await dispatch('serverAuthResponse', payload)
    if (response.msg === 'success') {
      commit('loginSuccess', response.payload)
      this.$router.push('/users')
    } else {
      commit('loginFailure')
    }
  }
}
