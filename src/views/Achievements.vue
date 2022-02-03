<template>
  <div class="achievements">
      <transition
          name="view"
          appear
          enter-active-class="animate__animated animate__slideInDown animate__faster"
      >
        <AppModal>
          <template #header>
            <span>Достижения</span>
          </template>
          <template #body>
            <AppSlider
                :key="swiperKey"
                :content="UserAchievements"
                :selectedAchievementId="selectedAchievementId"
                @change-selected-achievement="changeSelectedAchievement">
            </AppSlider>

            <UnlockCard :achieve="selectedAchievement" class="animate--card"/>
            <ProgressCard
              v-for="(progress, index) in progressHistory"
              class="animate--card"
              :key="index"
              :selectedAchievementId="selectedAchievementId"
              :achievementProgress="progress"
            />
          </template>
        </AppModal>
      </transition>
      <header class="achievements--title"> Достижения </header>
      <p class="achievements--description">
        Зарабатывайте награды, следите за достижениями вашего канала и делитесь ими с друзьями!
      </p>
      <div class="d-flex achievements--user align-items-center">
        <img class="achievements--user-avatar" alt="ourFavoriteClient" :src="userPhoto">
        <div class="d-flex flex-column">
          <span class="achievements--user-name">{{ userName }}</span>
          <span class="achievements--user-channel">{{ userChannel }}</span>
        </div>
    </div>

    <div v-for="achievement in UserAchievements" :key="achievement.id">
      <AchievementCard :achieve="achievement" :userAchievements="UserAchievements" class="achievement-card--main app-card">
        <button class="achievements--btn" @click="selectAchievement(achievement)">
          <span>Все награды</span>
          <img alt="" src="../../public/img/Card/arrowIcon.png">
        </button>
      </AchievementCard>
      <UnlockCard :achieve="achievement" class="unlock-card--main"/>
    </div>
  </div>
</template>

<script>
import UnlockCard from '../components/UnlockCard'
import AchievementCard from '../components/AchievementCard'
import userPhoto from "../../public/img/userPhoto.png";
import AppModal from "@/components/common/AppModal";
import AppSlider from "@/components/common/AppSlider";
import ProgressCard from "@/components/ProgressCard";

import UserAchievements from "../static/achievements.json";
import UserAchievementsProgress from "../static/achievementsProgress.json"
export default {
name: "Achievements",
  components: {
    ProgressCard,
    AppModal,
    AppSlider,
    UnlockCard,
    AchievementCard,
  },
  data(){
  return {
    userName: 'alisonbrgrssss',
    userChannel: 'YouTube-канал',
    userPhoto,
    UserAchievements,
    UserAchievementsProgress,
    selectedAchievementId: 0,
    selectedAchievement: {},
    swiperKey: Math.random(),
  }
  },
  computed: {
    progressHistory(){
      let card = {}
      UserAchievementsProgress.forEach((item)=>{
        if(item.id === this.selectedAchievementId){
          card = item.data
        }
      })
      return card
    },
  },
  methods: {
    selectAchievement(select){
      this.selectedAchievementId = select.id
      this.selectedAchievement = select
      this.swiperKey = select.id
      this.showAchievementModal()
    },

    showAchievementModal(){
      this.$vfm.show('achieveModal')
    },

    changeSelectedAchievement(index){
      this.selectedAchievementId = index
      UserAchievements.forEach((item)=>{
          if(item.id === this.selectedAchievementId){
            this.selectedAchievement = item
          }
        }
      )
      const elementList  = document.querySelectorAll(".animate--card");
      elementList.forEach((element)=>{
            element.classList.add("animate__animated", "animate__fadeIn", "animate__delay-0s");
            element.addEventListener("animationend", () => {
              element.classList.remove("animate__animated", "animate__fadeIn", "animate__delay-0s");
            });
          }
      )
    }
  }
}
</script>
<style>
</style>