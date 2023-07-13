<template>
  <div class="container">
    <h1>Lista de juegos disponibles</h1>
    <div class="cards-game">
      <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/id/684/600/400" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">NOMBRE</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">RATING</li>
          <li class="list-group-item">RELEASED</li>
          <li class="list-group-item">UPDATE</li>
        </ul>
        <div class="card-body">
          <button class="btn btn-primary">Opinar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
  .cards-game {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>