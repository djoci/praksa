<template>
  <section>
    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.6702476961377!2d20.458517715535613!3d44.80790847909864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa8e5cdffbf%3A0x3974862b4d991ef!2z0JDQtNC80LjRgNCw0LvQsCDQk9C10L_RgNCw0YLQsCAxNCwg0JHQtdC-0LPRgNCw0LQgMTEwMDA!5e0!3m2!1ssr!2srs!4v1559061218637!5m2!1ssr!2srs"
    ></iframe>
  </section>
</template>
<script>
export default {
  name: "Map",
  props: {
    msg: String
  }
};
</script>