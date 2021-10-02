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
              <li><a href="#">Users</a></li>
              <li><a href="#">Add user</a></li>
              <li><a href="#">Settings</a></li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>Logout</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="main">
          <div class="users-grid">
            <div v-for="user in users" :key="user.id" class="user-grid-item">
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
export default {
  components: { UserProfile, UserModal },
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
          email: 'Graham@april.biz',
          address: {
            street: 'Kulas Light',
            city: 'Gwenborough'
          },
          phone: '1-770-736-8031',
          website: 'hildegard.org'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          email: 'Howell@melissa.tv',
          address: {
            street: 'Victor Plains',
            city: 'Wisokyburgh'
          },
          phone: '3-010-692-6593',
          website: 'anastasia.net'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          email: 'Bauch@yesenia.net',
          address: {
            street: 'Douglas Extension',
            city: 'McKenziehaven'
          },
          phone: '1-463-123-4447',
          website: 'ramiro.info'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
          email: 'Lebsack@kory.org',
          address: {
            street: 'Hoeger Mall',
            city: 'South Elvis'
          },
          phone: '8-493-170-9623',
          website: 'kale.biz'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          email: 'Dietrich@annie.ca',
          address: {
            street: 'Skiles Walks',
            city: 'Roscoeview'
          },
          phone: '0-254-954-1289',
          website: 'demarco.info'
        },
        {
          id: 6,
          name: 'Dennis Schulist',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          email: 'Schulist@jasper.info',
          address: {
            street: 'Norberto Crossing',
            city: 'South Christy'
          },
          phone: '1-477-935-8478',
          website: 'ola.org'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          email: 'Weissnat@billy.biz',
          address: {
            street: 'Rex Trail',
            city: 'Howemouth'
          },
          phone: '3-210-067-6132',
          website: 'elvis.io'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          email: 'Runolfsdottir@rosamond.me',
          address: {
            street: 'Ellsworth Summit',
            city: 'Aliyaview'
          },
          phone: '2-586-493-6943',
          website: 'jacynthe.com'
        }
      ],
      modalUser: null
    }
  },
  methods: {
    showModal (user) {
      this.modalUser = user
    },
    modalClose () {
      console.log('modal Close')
      this.modalUser = null
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
