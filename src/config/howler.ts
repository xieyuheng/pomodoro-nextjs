import { Howl, Howler } from "howler"

function performanceTrick() {
  const empty = new Howl({
    src: [
      // "/sounds/japanese/kojonotsuki.ogg",
      "/sounds/loops/empty-loop-for-js-performance.ogg",
      "/sounds/loops/empty-loop-for-js-performance.wav",
    ],
    volume: 0.1,
    loop: true,
  })

  empty.play()
}

performanceTrick()
