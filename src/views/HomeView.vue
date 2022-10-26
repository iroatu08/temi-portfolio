<template>
  <main>
    <section class="py-20 px-40 flex items-center gap-4">
      <div class="left-side w-1/2 space-y-4" id="left-side">
        <h1 class="text-8xl font-bold text-gray-800">
          Hi there! I’m <span className="orange">Temidayo</span>
        </h1>
        <p class="leading-6 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, dui
          sit dictum quis id. Aliquet sed non auctor augue. Risus mi gravida
          nibh nulla sed. Ut semper id enim, purus, eu, enim dis. Fringilla
          sagittis faucibus sed ipsum nibh egestas. Sodales sed eu cursus neque,
          urna ultricies cras. Vestibulum at consectetur faucibus risus.
        </p>

        <div class="btns flex items-center gap-4">
          <button
            class="orange-btn text-white flex items-center px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-200"
          >
            <span>Know More</span>
            <img
              class="w-6"
              src="../assets/arrow-circle.svg"
              alt=""
              srcset=""
            />
          </button>
          <button
            class="border border-black px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-200"
          >
            Here's my Cv
          </button>
        </div>
      </div>
      <div class="right-side w-1/2">
        <img
          src="../assets/man.png"
          alt=""
          srcset=""
          class="w-[80%] ml-auto"
          id="right-side"
        />
      </div>
    </section>

    <div
      class="ribbon h-20 footer-bg  flex items-center text-white italic px-4"
    >
      <marquee>
        Swipe to see my Showcase fields | | Swipe to see my Showcase fields | |
        Swipe to see my Showcase fields | | Swipe to see my Showcase fields | |
      </marquee>
    </div>

    <section class="showcase">
      <div class="grid grid-cols-2">
        <div><img src="../assets/rec1.svg" alt="" srcset="" /></div>
        <div><img src="../assets/rec2.svg" alt="" srcset="" /></div>
        <div><img src="../assets/rec3.svg" alt="" srcset="" /></div>
        <div><img src="../assets/rec4.svg" alt="" srcset="" /></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.to("#left-side", {
    duration: 1,
    x: 30,
  }),
    gsap.fromTo(
      "#right-side",
      {
        transformOrigin: "bottom left",
        rotation: 20,
        opacity: 0,
        y: -100,
      },
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        rotation: 3,
        ease: "power3.inOut",
        delay: 0,
      }
    );
});
</script>

<style>
.orange-btn {
  background-color: #f38043;
  border: 1px solid #f38043;
}
.orange {
  color: #f38043;
}
</style>
