<template>
  <div id="app1">
    <Start></Start>
    <About></About>
    <Features></Features>
    <Pricing></Pricing>
    <Screenshots></Screenshots>
    <Talk></Talk>
    <Contact></Contact>
    <Map></Map>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Start from "./components/Start.vue";
import About from "./components/About.vue";
import Features from "./components/Features.vue";
import Pricing from "./components/Pricing.vue";
import Screenshots from "./components/Screenshots.vue";
import Talk from "./components/Talk.vue";
import Contact from "./components/Contact.vue";
import Map from "./components/Map.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "Home",
  components: {
    Start,
    About,
    Features,
    Pricing,
    Screenshots,
    Talk,
    Contact,
    Map,
    MyFooter
  }
};
</script>

<style scoped>
 /* #app1 {
  scroll-behavior: smooth;
}  */
</style>
