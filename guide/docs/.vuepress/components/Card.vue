<template>
  <section class="card-section">
    <div class="header">
      <h4>
        Header 
      </h4>
    </div>
    
    <div class="content">
      <h5>
        Content
      </h5>
    </div>
    <div class="footer">
      <h6>
        Copyright
      </h6>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Card'
}

</script>

<style>
.card-section {
  max-width: 11em;
}

.footer {
  max-height: 3.4em;
  background-color: blue;
}
.content {
  height: 13em;
  background-color: red;
}

.header {
  max-height: 8em;
  background-color: green;
}
</style>