
// icon-celebration
const space = "empty";

let icons = [
    ["icon-stacked-coins", "icon-percentage", "icon-envelope-taxes"],
    ["icon-retirement", "icon-hand-questionmark", "icon-apple"],
    ["icon-salary", "icon-laptop", "empty"]
];

function moveTile(si, sj) {
    for (let l=0; l<4; l++) {
        let ni = si;
        let nj = sj;
        switch (l) {
            case 0: ni -= 1; break;
            case 1: ni += 1; break;
            case 2: nj -= 1; break;
            case 3: nj += 1; break;
        }
        if (ni < 0 || ni >= icons.length) {
            continue;
        }
        if (nj <0 || nj >= icons[ni].length) {
            continue;
        }
        if (icons[ni][nj] === space) {
            const t = icons[si][sj];
            icons[si][sj] = icons[ni][nj];
            icons[ni][nj] = t;
            redrawGrid();
            break;
        }
    }
}

function findAndMoveTile(name) {
    for (let i=0; i<icons.length; i++) {
        const iconRow = icons[i];
        for (let j=0; j<iconRow.length; j++) {
            if (name !== iconRow[j]) {
                continue;
            }
            moveTile(i, j);
            return;
        }
    }
}

function redrawGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i=0; i<icons.length; i++) {
        const row = grid.insertRow(i);
        const iconRow = icons[i];
        for (let j=0; j<iconRow.length; j++) {
            const cell = row.insertCell(j);
            //cell.id = iconRow[j];
            cell.addEventListener("click", (e) => {
                if (e.target.id != null && e.target.id !== '') {
                    console.log("Clicked on ", e.target.id);
                    findAndMoveTile(e.target.id);
                }
            });
            const cls = "icon md-64 icon-orange " + iconRow[j];
            cell.innerHTML = "<i id=\"" + iconRow[j] + "\" class=\"" + cls + "\"></i>";
        }
    }
}

Reveal.addEventListener('goals', function () {
    console.log("Got event goals");
    setTimeout(() => {
        redrawGrid();
    }, 100);
}, false);

