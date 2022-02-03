<template>
  <div class="d-flex justify-content-between align-items-center app-card progress-card">
    <template  class="d-flex align-items-center">
      <img alt="" :src="cardPic" class="progress-card--pic"/>
      <div class="d-flex flex-column">
        <span class="progress-card--title">{{ metrics }}</span>
        <span class="progress-card--amount"> {{achievementProgress.amount}} </span>
        <span class="progress-card--date"> Достигнуто {{ achievementProgress.date}}</span>
      </div>
    </template>
    <img alt="" src="../../public/img/Card/progress-card-jaw.png" class="progress-card--jaw"/>
  </div>
</template>

<script>
import subs from "../../public/img/Card/cups/subs.png";
import videos from "../../public/img/Card/cups/videos.png";
import views from "../../public/img/Card/cups/views.png";

export default {
 name: "ProgressCard",
  props: {
    achievementProgress: {
      type: Object ,
      required: true
    },
    selectedAchievementId: {
      type: Number,
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
      if(this.selectedAchievementId === 0){
        return this.views;
      }
      else if(this.selectedAchievementId === 1){
        return this.subs
      }else {
        return this.videos
      }
    },

    metrics(){
      if(this.selectedAchievementId === 0){
        return 'Просмотры'
      }
      else if(this.selectedAchievementId === 1){
        return  'Подписчики'
      } else {
        return  'Загруженные видео'
      }
    },


  },

}
</script>

<style scoped>

</style>