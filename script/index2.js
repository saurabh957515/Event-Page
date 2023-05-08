
console.log("hello form 2")
const linkIds = ['home', 'speakers', 'schedule', 'register'];
linkIds.forEach(function(linkId) {
  const link = document.getElementById(linkId);
  if (link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const nextPageUrl = this.getAttribute('href');
      window.location.href = nextPageUrl;
    });
  } else {
    console.error(`Element with ID ${linkId} not found.`);
  }
});

