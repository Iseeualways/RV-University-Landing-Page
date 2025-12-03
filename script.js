
function showSchool(id) {
  // remove active from small cards
  document.querySelectorAll('.school-small')
    .forEach(el => el.classList.remove('active'));

  // add active to selected small card
  document.querySelectorAll('.school-small')[id - 1].classList.add('active');

  // hide all contents
  document.querySelectorAll('.school-content')
    .forEach(el => {
      el.classList.remove('active');
    });

  // show selected content
  document.getElementById(`school-${id}`).classList.add('active');
}


/* DESKTOP TAB LOGIC */
function showTab(n) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab")[n - 1].classList.add("active");

  document.querySelectorAll(".content-box").forEach(c => c.style.display = "none");
  document.getElementById("content-" + n).style.display = "block";
}

/* MOBILE ACCORDION – auto close others */
function toggleAcc(n) {
  document.querySelectorAll(".content-box").forEach((box, index) => {
    if (index + 1 === n) {
      box.style.display = box.style.display === "block" ? "none" : "block";
    } else {
      box.style.display = "none";
    }
  });
}



function makeInfinite(trackId, rowId) {
    const track = document.getElementById(trackId);
    const row = document.getElementById(rowId);

    // duplicate row content
    const clone = row.cloneNode(true);
    track.appendChild(clone);

    function calculateWidth() {
        let totalWidth = row.scrollWidth;
        track.style.setProperty("--content-width", totalWidth + "px");
    }

    // run after images load
    const imgs = row.querySelectorAll("img");
    let loaded = 0;

    imgs.forEach(img => {
        img.onload = () => {
            loaded++;
            if (loaded === imgs.length) calculateWidth();
        };
    });

    // fallback
    setTimeout(calculateWidth, 600);
}

makeInfinite("track1", "row1");
makeInfinite("track2", "row2");


function toggleAcc(i) {
    const headers = document.querySelectorAll(".accordion-item");
    const contents = document.querySelectorAll(".content-box");

    headers.forEach((header, index) => {
        const content = contents[index];
        if(index === i-1) {
            // Toggle clicked header
            const isActive = header.classList.contains("active");
            if(isActive){
                header.classList.remove("active");
                if(content) content.style.display = "none";
            } else {
                header.classList.add("active");
                if(content) content.style.display = "block";
            }
        } else {
            // Close all other headers
            header.classList.remove("active");
            if(content) content.style.display = "none";
        }
    });
}
