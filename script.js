document.addEventListener("DOMContentLoaded", function() {
    // Lakukan permintaan AJAX untuk mengambil data JSON
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse JSON yang diterima
            var data = JSON.parse(this.responseText);

            // Tampilkan informasi toko
            document.getElementById("nama-toko").textContent = data.toko;
            document.getElementById("pengarang-toko").textContent = data.pengarang;
            document.getElementById("alamat-toko").textContent = data.alamat;

   