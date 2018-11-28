function toggleHidden(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
 }

function toggleCall(el) {
	if (el.classList.contains("rajas")) {		
        const toggle  = document.getElementsByClassName('sheet-images rajas')[0];
		toggleHidden(toggle);
    } else if (el.classList.contains("aoc")) {
        const toggle  = document.getElementsByClassName('sheet-images aoc')[0];
		toggleHidden(toggle);
    }
}