//preload the counter
$('#preContainer').hide();
$('#preContainer').fadeIn(5500);
const nextBtn = document.querySelector('#nextBtn');
nextBtn.addEventListener('click', (e) => {
    $('#preCount').fadeOut(2000);
    window.location.href = "MainPage.html";
})

/* ****************************************************************************
***************************************************************************** */
// animate in the main map
