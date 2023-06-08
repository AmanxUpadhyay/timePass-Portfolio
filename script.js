const roles = [
  "@Crossover - Software Developer Engineer I",
  "@Insight Gro - Chief Technology Officer",
  "@Fiverr - Freelance Software Developer",
  "@Aviyel - Community Manager",
  "@ProGrad - Full Stack Developer",
  "@Micro-Star International - Junior Software Developer",
];

const roleElement = document.getElementById("role");
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.innerHTML += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 50);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 1000);
  }
}

typeRole();

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
}
);

// Path: style.css