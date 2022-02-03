<template>
    <div class="pt-2 achievement-card app-card">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column achievement-card-data">
          <span class="d-flex align-items-center">
            <img alt="" :src="cardIcon" class="achievement-card--icon"/>
            <span class="achievement-card--amount">{{ achieve.amount }}</span>
          </span>
          <span class="achievement-card--title">{{ achieveName }}</span>
          <span class="achievement-card--date">{{ achieve.date }}</span>
        </div>
        <img alt="" :src="cardPic" class="achievement-card--img"/>
      </div>
      <div class="d-flex justify-content-between mt-3">
          <template v-if="isModal">
            <button class="achievement-card--button">
              <span>Поделиться</span>
            </button>
            <button class="achievement-card--button">
              <span>Скачать</span>
            </button>
          </template>
          <template v-else>
            <div class="d-flex justify-content-start">
              <button class="achievements--btn">
                <img alt="" src="../../public/img/Card/shareIcon.png">
              </button>
              <button class="mx-3 achievements--btn">
                <img alt="" src="../../public/img/Card/downloadIcon.png">
              </button>
            </div>
            <slot></slot>
          </template>
      </div>
    </div>
</template>

<script>
import viewsIcon from "../../public/img/Card/views/viewsIcon.png";
import viewsPic from "../../public/img/Card/views/viewsPic.png";
import subsIcon from "../../public/img/Card/subscribers/subsIcon.png";
import subsPic from "../../public/img/Card/subscribers/subsPic.png";
import videoIcon from "../../public/img/Card/video/videoIcon.png";
import videoPic from "../../public/img/Card/video/videoPic.png";
export default {
name: "AchievementCard",
  props: {
    achieve: {
      type: Object,
      required: true
    },

    isModal: {
      type: Boolean,
      default: false
    }

  },

  data(){
    return {
      viewsIcon,
      subsIcon,
      videoIcon,
      viewsPic,
      subsPic,
      videoPic,
    }
  },

  computed: {
    achieveName(){
      if(this.achieve.id === 0){
        return 'Просмотров';
      }
      else if(this.achieve.id === 1){
        return 'Подписчиков'
      }else {
        return 'Загруженных видео'
      }
    },

    cardIcon(){
      if(this.achieve.id === 0){
        return this.viewsIcon;
      }
      else if(this.achieve.id === 1){
        return this.subsIcon
      }else {
        return this.videoIcon
      }
    },

    cardPic(){
      if(this.achieve.id === 0){
        return this.viewsPic;
      }
      else if(this.achieve.id === 1){
        return this.subsPic
      }else {
        return this.videoPic
      }
    }
  },

  methods:{
    showModal(){
      this.$emit('show-modal')
    },
  },
}
</script>

<style scoped>

</style>