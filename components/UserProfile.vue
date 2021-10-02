<template>
  <a class="user" @click.prevent="showDetails">
    <figure class="user-image-wrapper">
      <img :src="user.image" alt="" loading="lazy">
    </figure>
    <figcaption class="user-info-wrapper">
      <div class="user-email">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div class="user-info-content">
        <h1 class="user-name">
          {{ user.name }}
        </h1>
        <p class="user-place">
          {{ user.address.city }}
        </p>
      </div>
    </figcaption>
  </a>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    showDetails () {
      this.$emit('showmodal', this.user)
    }
  }
}
</script>

<style lang="scss">
.user {
  position: relative;
  display: block;
  cursor: pointer;
}
.user-name {
  font-size: 22px;
  margin-bottom: 6px;
}
.user-place {
  font-size: 16px;
  text-transform: uppercase;
}
.user-image-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 140%;
  position: relative;
  overflow: hidden;
}
.user-image-wrapper img {
  display: block;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.user:hover {
  .user-info-wrapper {
    background: rgba(0,0,0,.4);
  }
}
.user-info-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  transition: all .2s ease-in;
}
.user-info-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.user-email {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  right: 8px;
  img {
    width: 100%;
  }
}
</style>
