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
    let alas = document.getElementById('p.alas').value;
    let tinggi = document.getElementById('tinggi').value;

    if (alas === '' || tinggi === '') {
        alert('Harap masukkan panjang alas dan tinggi.');
        return;
    }

    let luas = 0.5 * alas * tinggi;
    document.getElementById('result-luas-segitiga').innerText = `Luas: ${luas}`;
}

function hitungKelilingSegitiga() {
    let sisi1 = document.getElementById('sisi1').value;
    let sisi2 = document.getElementById('sisi2').value;
    let sisi3 = document.getElementById('sisi3').value;

    
    if (sisi1 === '' || sisi2 === '' || sisi3 === '') {
        alert('Harap masukkan semua sisi segitiga.');
        return;
    }

    let keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    document.getElementById('result-keliling-segitiga').innerText = `Keliling: ${keliling}`;
}

function hitungLuasJajarGenjang() {
    let alas = document.getElementById('alas-jg').value;
    let tinggi = document.getElementById('tinggi-jg').value;

    if (alas === '' || tinggi === '') {
        alert('Harap masukkan panjang alas dan tinggi.');
        return;
    }

    let luas = alas * tinggi;
    document.getElementById('result-luas-jg').innerText = `Luas: ${luas}`;
}

function hitungKelilingJajarGenjang() {
    let sisi1 = document.getElementById('sisi1-jg').value;
    let sisi2 = document.getElementById('sisi2-jg').value;

   
    if (sisi1 === '' || sisi2 === '') {
        alert('Harap masukkan kedua sisi jajar genjang.');
        return;
    }

    let keliling = 2 * (parseFloat(sisi1) + parseFloat(sisi2));
    document.getElementById('result-keliling-jajar-genjang').innerText = `Keliling: ${keliling}`;
}

function resetForm() {
    let forms = document.querySelectorAll('.main-content > aside form');
    forms.forEach(form => {
        form.reset();
    });

    document.getElementById('result-luas-segitiga').innerText = 'Hasil Perhitungan Luas';
    document.getElementById('result-keliling-segitiga').innerText = 'Hasil Perhitungan Keliling';
    document.getElementById('result-luas-jg').innerText = 'Hasil Perhitungan Luas';
    document.getElementById('result-keliling-jajar-genjang').innerText = 'Hasil Perhitungan Keliling';

    document.getElementById('form-segitiga').style.display = 'none';
    document.getElementById('form-jajar-genjang').style.display = 'none';
}

document.querySelectorAll('button[type="reset"]').forEach(button => {
    button.addEventListener('click', resetForm);
});

