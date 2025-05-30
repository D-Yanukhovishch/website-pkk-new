const modal = document.getElementById("myModal");



const btn = document.getElementById("openModalBtn");



const span = document.getElementsByClassName("close")[0];



// Ketika tombol diklik, buka modal

btn.onclick = function () {

    modal.style.display = "block";

}



// Ketika tombol close (x) diklik, tutup modal

span.onclick = function () {

    modal.style.display = "none";

}



// window.onclick = function(event) {

//     if (event.target == modal) {

//         modal.style.display = "none";

//     }

// }



function Tambahpesanan() {



    const totalp = document.getElementById("totalp")



    let pesanan = totalp.textContent;

    let totalpesanan = Number(pesanan) + 1;



    totalp.textContent = totalpesanan;





}



function Kurangipesanan() {



    const totalp = document.getElementById("totalp")



    let pesanan = totalp.textContent;

    let totalpesanan = Number(pesanan) - 1;



    if (pesanan > 0) {

        let totalpesanan = pesanan - 1;

        totalp.textContent = totalpesanan

    }



}



const HARGA_SATUAN = 3000; 



function updateTampilan(jumlah) {

  document.getElementById("totalp").textContent = jumlah;

  document.getElementById("totalharga").textContent = formatRupiah(jumlah * HARGA_SATUAN);

}



function Tambahpesanan() {

  let totalp = document.getElementById("totalp");

  let jumlah = parseInt(totalp.textContent) || 0;

  jumlah++;

  updateTampilan(jumlah);

}



function Kurangipesanan() {

  let totalp = document.getElementById("totalp");

  let jumlah = parseInt(totalp.textContent) || 0;

  if (jumlah > 0) {

    jumlah--;

    updateTampilan(jumlah);

  }

}



function formatRupiah(angka) {

  return "Rp " + angka.toLocaleString("id-ID");

}



function checkoutWhatsApp() {

    let input_nama_pelanggan = document.getElementById("nama_pelanggan")

    let input_kelas_pelanggan = document.getElementById("kelas_pelanggan")

    let nama_pelanggan = input_nama_pelanggan.value;

    if (nama_pelanggan === "") {

      alert("masukkan nama anda"); return;

    }

    let kelas_pelanggan = input_kelas_pelanggan.value; if (kelas_pelanggan === "") { alert("Masukkan kelas anda"); return;}

    let jumlah = parseInt(document.getElementById("totalp").textContent) || 0;

    if (jumlah === 0) {

      alert("Pesan setidaknya satu");

      return;

    }

    let totalHarga = jumlah * HARGA_SATUAN;

    let pesan = `Halo Assalamualaikum kak!, saya ${nama_pelanggan} dari kelas ${kelas_pelanggan} ingin memesan cireng ayam suwir ${jumlah} pcs dengan Total harga: Rp ${totalHarga.toLocaleString('id-ID')}`;

    let nomorWA = "85692517903";

    let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;



    window.open(url, '_blank');

  }

  

  function alarm() {

    alert("Produk kni belum tersedia ,pesan produk lain")

  }
