import { Howl, Howler } from "howler"

function performanceTrick() {
  const empty = new Howl({
    src: [
      // "/sounds/japanese/kojonotsuki.ogg",
      "/sounds/loops/empty_loop_for_js_performance.ogg",
      "/sounds/loops/empty_loop_for_js_performance.wav",
    ],
    volume: 0.1,
    loop: true,
  })

  empty.play()
}

performanceTrick()
