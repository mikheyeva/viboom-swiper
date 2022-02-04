<template>
  <vue-final-modal
      name="achieveModal"
      v-model="showModal"
      :fit-parent="true"
  >
    <div class="modal--container">
      <div class="modal--title" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <slot name="header">
        </slot>
        <div id="modal-jaw" class="modal--jaw">
          <img alt="" src="../../../public/img/Card/jaw.png"/>
        </div>
        <button class="modal--close" @click="showModal = false">
          <img alt="" src="../../../public/img/close.png"/>
        </button>
      </div>
      <slot name="body"></slot>
      <div class="modal--footer">
        <slot name="footer">
        </slot>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: "AppModal",

  data: () => ({
    showModal: false,
    coordsTop: 0
  }),

  methods: {
    touchStart(){
      let modal = document.querySelector('.modal--container');
      let coords = modal.getBoundingClientRect();
      this.coordsTop = coords.top
    },

    touchMove(e){
      let modal = document.querySelector('.modal--container');
      modal.style.marginTop = e.changedTouches[0].clientY+'px';
      if(e.changedTouches[0].clientY < 40){
        modal.style.marginTop = '40px';
      }
      if(e.changedTouches[0].clientY >= 100){
        this.$vfm.hide('achieveModal')
      }
    },

    touchEnd(e){
      let modal = document.querySelector('.modal--container');
      if(e.changedTouches[0].clientY < 100){
        modal.classList.add("animate__animated", "slideOutUp");
        modal.addEventListener("animationend", () => {
          modal.classList.remove("animate__animated", "slideOutUp");
        });
      }
      modal.style.marginTop = '40px';
    },
  }
}
</script>

<style scoped>
</style>