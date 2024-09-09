function hitungLuasSegitiga() {
    let panjangAlas = document.getElementById("p.a").value;
    let tinggi = document.getElementById("t").value;

    let luas = 0.5 * parseFloat(panjangAlas) * parseFloat(tinggi);
    document.getElementById("result-luas").textContent = 'Hasil Perhitungan Luas: ' + luas;
}

function hitungKelilingSegitiga() {
    let sisi1 = document.getElementById("sisi1").value;
    let sisi2 = document.getElementById("sisi2").value;
    let sisi3 = document.getElementById("sisi3").value;

    let keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    document.getElementById("result-keliling").textContent = 'Hasil Perhitungan Keliling: ' + keliling;
}
