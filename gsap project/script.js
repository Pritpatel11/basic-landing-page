var t1=gsap.timeline()
t1.from(".nav img,.nav h3,.nav h4,.nav button",{
    y:-100,
    duration:1.5,
    delay:0.5,
    opacity:0, 
    stagger:0.5,
    
})
t1.from(".main h1",{
    y:100,
    opacity:0,
    duration:1.5,
    stagger:0.5,
})
t1.from(".main>img",{
    scale:0,
    opacity:0,
    duration:1.5,
    stagger:0.5,
})
    
