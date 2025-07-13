
  // Typing animation
  var typed = new Typed(".text", {
    strings: ["Java Programmer", "Web Developer", "SQL Enthusiast", "Tech Explorer"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });

  // Show Skills section with smooth scroll
  function showSkills() {
  const skillSection = document.getElementById("skills");

  // Only do it if it's still hidden
  if (skillSection.classList.contains("hidden")) {
    skillSection.classList.remove("hidden");

    // Delay the scroll so that the section becomes visible before scrolling
    setTimeout(() => {
      skillSection.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms delay helps sync scroll after show
  } else {
    // If already visible, just scroll
    skillSection.scrollIntoView({ behavior: "smooth" });
  }
}


