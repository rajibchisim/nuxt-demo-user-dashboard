export const state = function () {
  if (process.server) {
    return {
      authenticated: false,
      user: null
    }
  } else {
    return {
      authenticated: !!localStorage.getItem('auth')
    }
  }
}

export const mutations = {
  loginSuccess (state, userData) {
    state.authenticated = true
    state.user = userData
    localStorage.setItem('auth', JSON.stringify(state.authenticated))
  },
  loginFailure (state) {
    state.authenticated = false
    state.user = null
    localStorage.removeItem('auth')
  },
  logout (state) {
    state.authenticated = false
    state.user = null
    localStorage.removeItem('auth')
  }
}

export const actions = {
  serverAuthResponse (context, credencials) {
    return new Promise((resolve, reject) => {
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
  authenticate ({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      dispatch('serverAuthResponse', payload).then((response) => {
        if (response.msg === 'success') {
          commit('loginSuccess', response.payload)
          this.$router.push('/users')
          resolve()
        } else {
          reject(new Error('unauthenticated'))
        }
      }).catch((error) => {
        commit('loginFailure')
        reject(new Error(error.message))
      })
    }
    )
  },
  logout ({ commit }) {
    commit('logout')
    this.$router.push('login')
  }
}
