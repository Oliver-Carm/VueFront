<template>
   <!-- Section: Design Block -->
<section class="">
  <!-- Jumbotron -->
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            Inicio de sesión<br />
            <span class="text-primary">EKS Studio</span>
          </h1>
          <p style="color: hsl(217, 10%, 50.8%)">
            Practica de prueba
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form>
               <div class="form-group">
                  <h2 class="my-3">Login</h2>
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" placeholder="Correo electronico"/>
                </div>
               </div>

                   <div class="form-group">
                     <div class="form-outline mb-4">
                       <input type="password" id="form3Example4" class="form-control" placeholder="Contraseña"/>
                     </div>
                   </div>  

                <div class="text-center">
                     <button @click="$router.push('/home')" type="submit" class="btn btn-success btn-block mb-8">
                         Iniciar sesion
                     </button>
                </div>
               
                <div class="text-center">
                  <p>No tienes cuenta:</p>
                   <button @click="$router.push('/register')" type="submit" class="btn btn-primary btn-block mb-4">
                  Registrate
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->
</template>

<script>

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Login',
      
        
        
    }
</script>

<style scoped>

</style>