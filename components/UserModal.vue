<template>
  <div class="user-modal">
    <div class="modal-wrapper" @click.self="modalClose">
      <div class="modal-profile">
        <button class="modal-close" @click="modalClose">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="img-wrapper">
          <img :src="user.image" alt="">
        </div>
        <div class="content">
          <h2 class="user-name">
            {{ user.name }}
          </h2>
          <div class="user-info">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <p>{{ user.email }}</p>
          </div>
          <div class="user-info">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p>{{ user.phone }}</p>
          </div>
          <div class="user-info">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p>{{ addressline }}</p>
          </div>
          <div class="user-info">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <p><a :href="user.website">{{ user.website }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  computed: {
    addressline () {
      return `${this.user.address.street}, ${this.user.address.city}`
    }
  },
  methods: {
    modalClose () {
      console.log('user modal click')
      this.$emit('modalclose')
    }
  }
}
</script>

<style lang="scss">
.user-modal {
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border: 0;
  width: 32px;
  height: 32px;
  padding: 2px;
  cursor: pointer;
}
.modal-profile {
  width: 800px;
  padding: 16px;
  background-color: #fff;
  height: 400px;
  display: flex;
  position: relative;

  .icon-wrapper {
    width: 32px;
    height: 32px;
    padding: 4px;
    border: 1px solid var(--color-alt);
    color: var(--color-alt);
    border-radius: 100%;
    margin-right: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 4px 4px 10px 0px rgb(0 0 0 / 20%);
  }
  .img-wrapper{
    width: 40%;
  }
  .content {
    width: 60%;
    padding-top: 48px;
    padding-left: 32px;
  }
  .user-info {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 12px;
  }
  .user-name {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--color-alt);
  }
}
</style>
