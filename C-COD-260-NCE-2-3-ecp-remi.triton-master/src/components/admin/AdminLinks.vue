<template>
  <div class='mt-2 ml-2'>
      <router-link to='/admin/ads'> <button
              class="
                bg-white
                hover:bg-blue-900
                hover:text-white
                text-blue-900
                font-semibold
                py-2
                px-4
                border border-blue-900
                rounded
                shadow
                mb-2
              "
            >
              Annonces
            </button></router-link>
            <router-link to='/admin/coms'> <button
              class="
                bg-white
                hover:bg-blue-900
                hover:text-white
                text-blue-900
                font-semibold
                py-2
                px-4
                border border-blue-900
                rounded
                shadow

              "
            >
              Commentaires
            </button></router-link>
              <router-link to='/admin/users'> <button
              class="
                bg-white
                hover:bg-blue-900
                hover:text-white
                text-blue-900
                font-semibold
                py-2
                px-4
                border border-blue-900
                rounded
                shadow

              "
            >
              Users
            </button></router-link>

  </div>
</template>

<script>
export default {
name:'navAdmin'
}
</script>

<style>

</style>