let tl = gsap.timeline()
tl.from(" #navbar h2", {
    y: -30,
    opacity: 0,
    duration:0.5,
})

tl.from("#navbar ul li ,#navbar #menu button", {
    y: -30,
    opacity: 0,
    // delay:1,
    duration: 0.5,
    stagger:0.3
})



let tl1 = gsap.timeline()

tl1.from('#hero .hero__left h2', {
    x: -300,
    opacity: 0,
    duration: 0.5
})
tl1.from('#hero .hero__left p', {
    x: -300,
    opacity: 0,
    duration: 0.5
})
tl1.from('#hero .hero__left button', {
    x: -300,
    opacity: 0,
    duration: 0.7
}, "animate1")

tl1.from('#hero .hero__right', {
    x: 300,
    opacity: 0,
    duration: 0.7
}, 'animate1')



gsap.from('#clients .client__single', {
    y:50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#clients .client__single",
        // markers: true,
        start:"top 70%"
    },
    stagger:0.5
})

gsap.from('#services h2', {
    x:-300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#services",
        // markers: true,
        start:"top 70%"
    },
})

gsap.from('#services p', {
    x:300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#services",
        // markers: true,
        start:"top 70%"
    },
})
gsap.from('.work1 > .left', {
    x:-300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".work1",
        start: "top 70%",
        // scrub: 1,
        // scroller:'body'
    },
})
gsap.from('.work1 > .right', {
    x:300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".work1",
        start: "top 70%",
        // scrub: 1,
        // scroller:'body'
    },
})
gsap.from('.work2 > .left', {
    x:-300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".work2",
        start:"top 70%"
    },
})
gsap.from('.work2 > .right', {
    x:300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".work2",
        start: "top 70%",
        
    },
})
