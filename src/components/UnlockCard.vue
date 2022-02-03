<template>
    <div class="d-flex align-items-center app-card unlock-card">
      <img alt="" :src="cardPic" class="unlock-card--pic"/>
      <div class="d-flex flex-column">
        <span class="unlock-card--title">Разблокируйте награду</span>
        <span class="unlock-card--amount"> {{achieve.target}} {{ metrics }}</span>
        <span class="unlock-card--target">Осталось: {{ achieve.amount }} {{ metrics }}</span>
      </div>
    </div>
</template>

<script>

import subs from "../../public/img/Card/unlock/subs.png";
import videos from "../../public/img/Card/unlock/videos.png";
import views from "../../public/img/Card/unlock/views.png";
export default {
  name: "UnlockCard",
  props: {
    achieve: {
      type: Object,
      required: true
    },
  },

  data(){
    return{
      subs,
      videos,
      views,
    }
  },

  computed: {
    cardPic(){
      if(this.achieve.id === 0){
        return this.views;
      }
      else if(this.achieve.id === 1){
        return this.subs
      }else {
        return this.videos
      }
    },

    metrics(){
      if(this.achieve.id === 0){
        return 'просмотров'
      }
      else if(this.achieve.id === 1){
        return  'подписчиков'
      } else {
        return  'видео'
      }
    },

  }
}
</script>

<style scoped>

</style>