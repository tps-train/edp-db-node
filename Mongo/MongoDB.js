const collapsibles = document.querySelectorAll("[class^='collapsible']");

collapsibles.forEach(btn => {
    btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    });
});

document.querySelector('.collapse-all-btn').addEventListener('click', function() {
      document.querySelectorAll('.content').forEach(content => {
        content.style.display = "none";
      });
      document.querySelectorAll('.collapsible').forEach(btn => {
        btn.classList.remove('active');
      });
    });