// Tetapkan tanggal kita menghitung mundur
var countDownDate = new Date("February 12, 2023 10:00:20").getTime();

// Perbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Dapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  //Jika hitungan mundur selesai
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-timer").innerHTML = "Acara sedang berlangsung";
  }
  // Jika hitungan lewat 1 hari
  if (days < -1) {
    clearInterval(x);
    document.getElementById("count-timer").innerHTML = "Acara telah selesai";
  }
}, 1000);
