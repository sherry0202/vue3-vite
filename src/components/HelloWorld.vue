<template>
  <div>hello</div>
</template>

<script setup>

function sleep(time) {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve()
    }, time)

  })
}

await sleep(4000)


</script>