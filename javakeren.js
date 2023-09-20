function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

window.addEventListener("load", ()  => {
    sleep(3000).then(() => {
        document.querySelector(".loader").classList.add("loader--hidden");
    
    });
});