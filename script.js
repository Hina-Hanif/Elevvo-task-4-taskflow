// Fade-in on scroll
const faders = document.querySelectorAll('.fade-up');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach(f => appearOnScroll.observe(f));

// Auto-rotating reviews
let current = 0;
const reviews = document.querySelectorAll('.review');
function showReview(index) {
  reviews.forEach((r,i)=>r.classList.toggle('active',i===index));
}
setInterval(()=>{current=(current+1)%reviews.length;showReview(current)},4000);
