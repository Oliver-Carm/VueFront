<template>
<section class="">
  <!-- Jumbotron -->
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
    <div class="container">
      <h1>BIENVENIDO</h1>
    </div>
    <div class="text-end">
          <button type="submit" class="btn btn-success btn-block mb-4">
          Agregar Producto
          </button>
     </div>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Marca</th>
      <th scope="col">Precio</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td ><button type="submit" class="text-center btn btn-warning btn-block">
          Editar
          </button>
      </td>
      <td ><button type="submit" class="text-center btn btn-danger btn-block">
          Eliminar
          </button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td ><button type="submit" class="text-center btn btn-warning btn-block">
          Editar
          </button>
      </td>
      <td ><button type="submit" class="text-center btn btn-danger btn-block">
          Eliminar
          </button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td ><button type="submit" class="text-center btn btn-warning btn-block">
          Editar
          </button>
      </td>
      <td ><button type="submit" class="text-center btn btn-danger btn-block">
          Eliminar
          </button>
      </td>
    </tr>
  </tbody>
</table>
      <div class="text-center">
          <button @click="$router.push('/')" type="submit" class="btn btn-primary btn-block mb-4">
          Salir
          </button>
     </div>
  </div>
  <!-- Jumbotron -->
</section>
   
</template>

<script>
export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',

        
        
    }

</script>

<style scoped>

</style>