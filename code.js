function toggleHidden(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
 }

function toggleCall(el) {
	toggleHidden(el.nextSibling);
}