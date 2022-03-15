function scanner() {
    let h2s = document.getElementsByTagName("h2");
    let ps = document.getElementsByTagName("p");

    let ah2s = [];
    for (let i = 0; i < h2s.length; i++) {
        const h2 = h2s[i];
        ah2s.push(h2.innerHTML);
    }

    let aps = [];
    for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        aps.push(p.innerHTML)
    }

    alert("H2: " + ah2s + "\n" + "P: " + aps)
}