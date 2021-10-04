<template>
  <div>
    <div class="fixed-header">
      <header class="main-header">
        <div class="container">
          <div class="branding">
            <img src="@/static/sample_logo.png" alt="">
          </div>
        </div>
      </header>
    </div>
    <div class="container">
      <div class="main-layout">
        <div class="sidebar">
          <nav class="navigations">
            <ul>
              <li>
                <nuxt-link to="/users">
                  Users
                </nuxt-link>
              </li>
              <li><a href="#">Add user</a></li>
              <li><a href="#">Settings</a></li>
              <li>
                <a href="#" @click.prevent="logout">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="main">
          <div class="users-grid">
            <div v-for="(user, index) in users" :key="index" class="user-grid-item">
              <user-profile :user="user" @showmodal="showModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <user-modal v-if="modalUser" :user="modalUser" @modalclose="modalClose" />
  </div>
</template>

<script>
import UserModal from '~/components/UserModal.vue'
import UserProfile from '~/components/UserProfile.vue'
import MockUser from '~/mocks/users'
export default {
  components: { UserProfile, UserModal },
  data () {
    return {
      users: [],
      currentPage: 1,
      totalPage: 0,
      modalUser: null
    }
  },
  watch: {
    currentPage: {
      handler () {
        this.getusers()
      },
      immediate: true
    }
  },
  mounted () {
    const self = this

    function debounce (fn, wait) {
      let timer
      return function () {
        clearTimeout(timer)
        timer = setTimeout(fn, wait)
      }
    }

    function loadmoreuser () {
      const bottomReached = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
      if (bottomReached) {
        if (self.totalPage > self.currentPage) {
          self.currentPage++
        }
      }
    }

    window.addEventListener('scroll', debounce(loadmoreuser, 50))
  },
  methods: {
    showModal (user) {
      this.modalUser = user
    },
    modalClose () {
      this.modalUser = null
    },
    logout () {
      this.$store.dispatch('logout')
    },
    getusers () {
      MockUser.getusers({ page: this.currentPage, perpage: 6 }).then((response) => {
        this.totalPage = Math.ceil(response.total / response.perpage)
        this.users.push(...response.data)
      })
    }
  }
}
</script>

<style lang="scss">
.users-grid {
  display: flex;
  flex-wrap: wrap;
  padding-top: 64px;
}
.user-grid-item {
  width: 33.33%;
  position: relative;
  padding: 0 16px;
  margin-bottom: 32px;
}
</style>
