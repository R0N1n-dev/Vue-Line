<template>
  <ILayout vertical>
    <ILayoutAside class="_background:blue!"> Left Aside </ILayoutAside>
    <ILayout>
      <ILayoutContent> <RouterView /></ILayoutContent>
    </ILayout>
  </ILayout>
</template>

 
<script setup>
import { RouterView } from 'vue-router'
</script>


<style scoped>
.layout-aside {
  width: var(--layout-aside--width);
}
</style>