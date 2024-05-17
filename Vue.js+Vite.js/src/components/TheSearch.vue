<script>
export default {
  methods: {
    defineTitle() {
      this.$emit('define-title', 'Resultados')
    }
  },
  beforeMount() {
    this.defineTitle()
  }
}
</script>

<template>
    <div class="gcse-searchresults-only"></div>
</template>