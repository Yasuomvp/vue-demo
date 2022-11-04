<template>
  <div>
     {{store.helloPinia}}
     {{store.storeMap.get("holy")}}
  </div>
  <div>
    <button @click="handleClick">store test</button>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from './stores'
const store = mainStore()

const handleClick = ()=>{
  console.log('hss')
  store.helloPinia = "change"
  store.storeMap.set("holy","shit")

}

</script>