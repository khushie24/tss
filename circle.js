MorphSVGPlugin.convertToPath("circle, line");

gsap.set("#line", {
  transformOrigin: "50% 50%"
});

gsap.to("#line", {
  duration: 1, 
  morphSVG:"#circle", 
  delay: 1, 
  duration: 1,
  rotation: 90
});