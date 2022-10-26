<template>
  <div class="py-40 px-40 footer-bg flex items-center gap-10">
    <div class="socials w-[10%] flex flex-col gap-4 items-end self-start">
      <img class="w-4" src="../assets/twitter-white.svg" alt="" srcset="" />
      <img class="w-4" src="../assets/ig-white.svg" alt="" srcset="" />
      <img class="w-4" src="../assets/whatsapp.svg" alt="" srcset="" />
      <img class="w-4" src="../assets/youtube.svg" alt="" srcset="" />
    </div>

    <div class="w-[45%] text-white self-start">
      <hr class="mb-2" />
      <div class="">
        <h1 class="text-5xl mb-4 font-bold">Got something for me?</h1>
        <p class="mb-4">
          Connect with me through my socials or send an e-mail across directly
          or through this form.
        </p>
        <p class="hover:text-orange-400"><a href="mailto:tmdarowolo@gmail.com">tmdarowolo@gmail.com</a></p>
      </div>
    </div>

    <div class="contact-form w-[45%] self-start">
      <form action="">
        <div class="flex flex-col input-bg px-3 py-1 text-white text-sm mb-2">
          <label class="" for="name">Name:</label>
          <input type="text" class="bg-transparent focus:ring-0 outline-none" />
        </div>

        <div class="flex flex-col input-bg px-3 py-1 text-white text-sm mb-2">
          <label class="" for="name">Email:</label>
          <input type="text" class="bg-transparent focus:ring-0 outline-none" />
        </div>

        <div class="flex flex-col input-bg px-3 py-1 text-white text-sm mb-2">
          <label class="" for="name">Subject:</label>
          <input type="text" class="bg-transparent focus:ring-0 outline-none" />
        </div>

        <div class="flex flex-col input-bg px-3 py-1 text-white text-sm mb-2">
          <label class="" for="name">Message:</label>
          <textarea
            row="50"
            col="10"
            class="bg-transparent focus:ring-0 outline-none"
          ></textarea>
        </div>

        <button
          class="orange-btn text-white text-center px-10 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.footer-bg {
  background-color: #343434;
}

.input-bg {
  background: #ffffff40;
}
</style>
