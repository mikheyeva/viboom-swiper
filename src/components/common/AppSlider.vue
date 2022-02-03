<template>
  <swiper
      :centered-slides="true"
      :breakpoints="swiperOptions.breakpoints"
      :initialSlide="selectedAchievementId"
      @activeIndexChange="activeIndexChange"
  >
    <swiper-slide
         v-for="slide in content"
         :key="slide.id"
         :virtualIndex="slide.id"
         v-slot="{ isActive, isNext, isPrev}"
      >
      <AchievementCard
          :achieve="slide"
          :class="{
            'achievement-card--active': isActive,
            'achievement-card--next': isNext,
            'achievement-card--prev':isPrev
          }"
          class="achievement-card--modal"
          :isModal="true"
      />
    </swiper-slide
    >
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import AchievementCard from "@/components/AchievementCard";
import 'swiper/components/effect-fade';
export default {
  name: "AppSlider",
  components: {
    Swiper,
    SwiperSlide,
    AchievementCard
  },

  props: {
    content: {
      type: Array,
      default(){
        return []
      }
    },
    selectedAchievementId:{
      type: Number,
      default: null
    }
  },

  data () {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1.14,
            spaceBetween: 0,
            speed: 1000,
          },
          414: {
            slidesPerView: 1.48,
            spaceBetween: 12,
            speed: 1000,
          },
        }
      }
    }
  },
  computed: {

  },
  methods:{
    activeIndexChange(swiper){
      this.$emit('change-selected-achievement', swiper.activeIndex);
    },
  },

}
</script>

<style scoped>

</style>