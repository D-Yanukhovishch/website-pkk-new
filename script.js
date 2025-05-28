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
    let jumlah = parseInt(document.getElementById("totalp").textContent) || 0;
    if (jumlah === 0) {
      alert("Kamu belum memesan apa pun!");
      return;
    }
    let totalHarga = jumlah * HARGA_SATUAN;
    let pesan = `Halo, saya ingin memesan:\nJumlah: ${jumlah} item\nTotal harga: Rp ${totalHarga.toLocaleString('id-ID')}`;
    let nomorWA = "085692517903";
    let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
  }