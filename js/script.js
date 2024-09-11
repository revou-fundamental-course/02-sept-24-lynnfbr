// Menampilkan form saat button segitiga atau jajar genjang di klik
function showForm(formId) {
    document.getElementById('form-segitiga').style.display = 'none';
    document.getElementById('form-jajar-genjang').style.display = 'none';
    
    if (formId === 'segitiga') {
        document.getElementById('form-segitiga').style.display = 'flex';
    } else if (formId === 'jajar-genjang') {
        document.getElementById('form-jajar-genjang').style.display = 'flex';
    }
}
// fungsi untuk menghitung Luas Segitiga
function hitungLuasSegitiga() {
    let alas = document.getElementById('p.alas').value;
    let tinggi = document.getElementById('tinggi').value;

    // Validasi input
    if (alas === '' || tinggi === '') {
        alert('Harap masukkan panjang alas dan tinggi.');
        return;
    }

    let luas = 0.5 * alas * tinggi;
    document.getElementById('result-luas-segitiga').innerText = `Luas: ${luas}`;
}

// fungsi untuk menghitung Keliling Segitiga
function hitungKelilingSegitiga() {
    let sisi1 = document.getElementById('sisi1').value;
    let sisi2 = document.getElementById('sisi2').value;
    let sisi3 = document.getElementById('sisi3').value;

    // Validasi input
    if (sisi1 === '' || sisi2 === '' || sisi3 === '') {
        alert('Harap masukkan semua sisi segitiga.');
        return;
    }

    let keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    document.getElementById('result-keliling-segitiga').innerText = `Keliling: ${keliling}`;
}

// fungsi untuk menghitung Luas Jajar Genjang
function hitungLuasJajarGenjang() {
    let alas = document.getElementById('alas-jg').value;
    let tinggi = document.getElementById('tinggi-jg').value;

    // Validasi input
    if (alas === '' || tinggi === '') {
        alert('Harap masukkan panjang alas dan tinggi.');
        return;
    }

    let luas = alas * tinggi;
    document.getElementById('result-luas-jg').innerText = `Luas: ${luas}`;
}

// fungsi untuk menghitung Keliling Jajar Genjang
function hitungKelilingJajarGenjang() {
    let sisi1 = document.getElementById('sisi1-jg').value;
    let sisi2 = document.getElementById('sisi2-jg').value;

    // Validasi input
    if (sisi1 === '' || sisi2 === '') {
        alert('Harap masukkan kedua sisi jajar genjang.');
        return;
    }

    let keliling = 2 * (parseFloat(sisi1) + parseFloat(sisi2));
    document.getElementById('result-keliling-jajar-genjang').innerText = `Keliling: ${keliling}`;
}

function resetForm() {
    // Reset result fields
    document.getElementById('result-luas-segitiga').innerText = 'Hasil Perhitungan Luas';
    document.getElementById('result-keliling-segitiga').innerText = 'Hasil Perhitungan Keliling';
    document.getElementById('result-luas-jg').innerText = 'Hasil Perhitungan Luas';
    document.getElementById('result-keliling-jajar-genjang').innerText = 'Hasil Perhitungan Keliling';

    // Reset input fields in the forms
    document.querySelectorAll('#form-segitiga input[type="text"], #form-segitiga input[type="number"]').forEach(input => {
        input.value = '';
    });
    document.querySelectorAll('#form-jajar-genjang input[type="text"], #form-jajar-genjang input[type="number"]').forEach(input => {
        input.value = '';
    });
}

// Menambahkan event listener untuk button reset
document.querySelectorAll('button[type="reset"]').forEach(button => {
    button.addEventListener('click', resetForm);
});



