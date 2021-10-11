<template>
  <div>
    <div class="popup">
      <div class="popup-inner">
        <slot />
        <div class="flex flex-col justify-center popup-body">
          <div name="post-tile">
            <input
              v-model="email"
              class="card-subtitle mb-2"
              placeholder="Mail"
            />
          </div>
          <div name="post-body">
            <input
              class="card-subtitle mb-2"
              placeholder="Password"
              v-model="password"

            />
          </div>
        </div>

        <div class="popup-btn">
          <div>
            <button
            @click="login"
              class="
                bg-blue-500
                active:bg-blue-600
                uppercase
                text-white
                font-bold
                hover:bg-blue-700
                shadow
                text-xs
                px-4
                py-2
                rounded
                sm:mr-2
                mb-1
                mt-4
                button
              "
            >
              Login
            </button>
            <!-- <button type="submit" @click="update(this.$route.params.id)">Update</button> -->
          </div>
        </div>
        <button
          class="
            bg-red-500
            active:bg-red-600
            uppercase
            text-white
            font-bold
            hover:bg-red-700
            shadow
            text-xs
            px-4
            py-2
            rounded
            sm:mr-2
            mb-1
            mt-4
            button
          "
          @click="$emit('close')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {


methods: {
  async login(email, password) {
            const res = await fetch("http://127.0.0.1:8000/api/login/", {
                "method": "POST",
                body: (this.password, this.email),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        })

        },
},

};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: #fff;
  padding: 32px;
}
</style>