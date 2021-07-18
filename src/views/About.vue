<template lang="pug">
.about-page
  h1(v-html="$t('about.title')")
  .content(v-html="$t('about.subtitle')")
  h2(v-html="$t('about.sectionTaskTitle')")
  .content(v-html="$t('about.sectionTaskContent')")
  h2(v-html="$t('about.sectionMapTitle')")
  .content(v-html="$t('about.sectionMapContent')")
  .content(v-html="$t('about.additional')")
  .content(v-html="$t('about.notification')")
</template>
<style lang="stylus">
.about-page
  max-width 680px

  margin 36px auto
  h1
    font-weight 400
    font-size 24
  h2
    font-weight 400
    font-size 20
    margin 20px 0 0
    padding 0
  .content
    margin-top 12px
    font-size 18px
    strong
      font-weight 600
</style>
