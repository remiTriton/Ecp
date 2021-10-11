<template>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="Nom" class="sr-only">Nom</label>
        <input
          id="lastName"
          v-model="lastName"
          name="lastName"
          type="text"
          required=""
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-t-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="Nom"
        />
        <label for="lastName" class="sr-only">Prénom</label>
        <input
          v-model="firstName"
          name="firstName"
          type="text"
          required="true"
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-t-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="Prénom"
        />
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          v-model="email"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-t-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required=""
          class="
            appearance-none
            rounded-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded-b-md
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="Password"
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        @click.prevent="register(firstName, lastName, email, password, type)"
        class="
          group
          relative
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          text-sm
          font-medium
          rounded-md
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        Sign in
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register(firstName, lastName, email, password) {

      const mail = email.split('@')[1];
      if(mail !== 'epitech.eu'){
        throw 'Wrong mail form'
      }else{
      await this.$store.dispatch("auth/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      this.$router.push("/");
    }},

    onChange(event) {
      this.type = event.target.value;

      }
    },
  };
</script>

<style>
</style>