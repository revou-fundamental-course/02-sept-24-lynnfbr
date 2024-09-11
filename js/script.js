function showForm(formId) {
    document.getElementById('form-segitiga').style.display = 'none';
    document.getElementById('form-jajar-genjang').style.display = 'none';
    
    if (formId === 'segitiga') {
        document.getElementById('form-segitiga').style.display = 'flex';
    } else if (formId === 'jajar-genjang') {
        document.getElementById('form-jajar-genjang').style.display = 'flex';
    }
}

function hitungLuasSegitiga() {
    const alas = document.getElementById('p.alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const luas = 0.5 * alas * tinggi;
    document.getElementById('result-luas-segitiga').innerText = `Luas: ${luas}`;
}

function hitungKelilingSegitiga() {
    const sisi1 = document.getElementById('sisi1').value;
    const sisi2 = document.getElementById('sisi2').value;
    const sisi3 = document.getElementById('sisi3').value;
    const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    document.getElementById('result-keliling-segitiga').innerText = `Keliling: ${keliling}`;
}

function hitungLuasJajarGenjang() {
    const alas = document.getElementById('alas-jg').value;
    const tinggi = document.getElementById('tinggi-jg').value;
    const luas = alas * tinggi;
    document.getElementById('result-luas-jg').innerText = `Luas: ${luas}`;
}

function hitungKelilingJajarGenjang() {
    const sisi1 = document.getElementById('sisi1-jg').value;
    const sisi2 = document.getElementById('sisi2-jg').value;
    const keliling = 2 * (parseFloat(sisi1) + parseFloat(sisi2));
    document.getElementById('result-keliling-jajar-genjang').innerText = `Keliling: ${keliling}`;
}
