import React from 'react'
import { Link } from 'react-router-dom'

const Artikel = () => ([
  <div class="d-flex justify-content-center">
	<div class="col-md-8 title article">
		<div class="bookLogo">
			<i class="fas fa-book inline"></i>
			<h2 class="inline">SUDAH TEPATKAH PASTA GIGI ANDA?</h2>
		</div>
	</div>
</div>,

<div class="d-flex justify-content-center imagecont">
		<div class="col-md-8 image">
			<img src="assets/Articles/Artikel5.jpg" />
		</div>
</div>,

<div class="d-flex justify-content-center">
	<div class="col-md-8 author">
		<i class="fas fa-address-card inline"></i>
		<h7>By : Dr.Lia</h7>
		<i class="fas fa-calendar-alt inlin datecons"></i>
		<h7>24-05-2018</h7>
	</div>
</div>,




<div class="d-flex justify-content-center">
	<div class="col-md-8 contArticle">
<p>Pilihan untuk jenis pasta gigi sangat beragam. Pernahkah anda menyesuaikan jenis pasta gigi dengan kebutuhan gigi anda?<br />
Umumnya pasta gigi memiliki bentuk pasta atau gel. Pasta gigi mengandung bahan yang terdiri dari: <br /><br />
•	Bahan abrasi untuk menggosok gigi yang mengandung kalsium karbonat dan silicate. Bahan ini berguna untuk menghilangkan makanan, bakteri, dan beberapa noda dari gigi. <br />
•	Pemanis atau perasa. Pemanis buatan seperti sakarin sering ditambahkan ke pasta gigi untuk membuat rasanya lebih enak. Pada pasta gigi orang dewasa umumnya memiliki rasa yang sama yaitu mint, sedangkan pada anak-anak memiliki rasa lebih beragam seperti strawberry, jeruk atau bubblegum. <br />
•	Humektan yang berguna untuk mencegah formulasi pasta mengering. <br />
•	Bahan pengental<br />
•	Deterjen yang akan menghasilkan busa saat menyikat gigi. <br /><br />
Pasta gigi mengandung fluoride<br />
Fluorida merupakan bahan paling penting yang harus ada dalam kandungan pasta gigi. Fluorida adalah mineral alami yang dapat berperan menurunkan tingkat kerusakan gigi dan lubang pada gigi. Fluorida dapat membantu melindungi gigi dari asam yang dihasilkan oleh bakteri. <br />
Fluoride bekerja dengan dua cara: <br /><br />
•	Membuat enamel gigi menjadi lebih kuat dan menjaga gigi dari kerusakan akibat asam<br />
•	Mengembalikan kondisi gigi yang sudah membusuk menjadi baik (remineralisasi) <br /><br />
Menggunakan pasta gigi berfluoride merupakan cara penting untuk memastikan bahwa gigi mendapatkan manfaat dari fluoride. <br /><br />
Pasta gigi untuk menghilangkan plak atau mencegah karang gigi<br />
Setiap orang memiliki lapisan bekteri pada gigi yang disebut plak. Jika plak tidak segera dihilangkan dengan menjaga kebersihan mulut yang tepat, maka plak akan mengeras menjadi karang gigi. Bahan kimia yang ditambahkan untuk dapat menghilangkan plak adalah pirofosfat dan zinc sitrat serta triclosan. Triclosan ditambahkan untuk membunuh beberapa bakteri dalam mulut. <br /><br />
Pasta gigi untuk gigi sensitif<br />
Orang yang memiliki gigi mudah terganggu dengan suhu panas atau dingin maka perlu menggunakan pasta gigi untuk gigi sensitif. Pasta gigi ini umumnya mengandung potassium nitrat atau stronsium klorida. Senyawa kimia ini akan membutuhkan waktu hingga 4 minggi untuk dapat membantu memperbaiki sensitifitas gigi. Pasta gigi ini akan menutup jalan pada gigi yang menempel pada saraf dalam gigi.
Untuk mencegah terjadinya gigi sensitive yang berulang maka dapat memiliki kebiasaan untuk menyikat gigi secara rutin dua kali sehari, menggunakan sikat gigi yang lembut, pasta gigi berfluorida, dan menggunakan benang floss. Memiliki gigi sensitif berarti wajib untuk berhati-hati memilih makanan atau minuman. Gunakan sedotan ketika minum yang mengandung asam untuk membatasi kontak dengan gigi. <br /><br />
Pasta gigi untuk memutihkan gigi<br />
Umumnya pasta gigi tidak mengandung pemutih. Namun, mengandung partikel abrasive atau bahan kimia yang dapat memoles gigi atau mengikat noda dan menghilangkan noda dari permukaan gigi. Pasta gigi pemutih umumnya dirancang untuk memaksimalkan kebersihan dan meminimalkan hilangnya enamel gigi. <br /><br />
Tips memilih pasta gigi yang benar<br />
Berikut adalah tips untuk memilih pasta gigi tepat yang dibutuhkan oleh keluarga. <br /><br />
•	Pilihlah pasta gigi yang telah teregistrasi oleh BPOM. Pasta gigi yang sudah mendapatkan persetujuandari BPOM telah melalui evaluasi untuk keamanan dan efektivitasnya. <br />
•	Melihat kebutuhan dan kondisi gigi anggota keluarga. Namun secara umum, yang perlu diperhatikan adalah pasta gigi harus mengandung fluoride. Untuk kondisi gigi khusus salah satu anggota keluarga maka perlu menggunakan pasta gigi yang berbeda dari yang lain. <br /></p>

	</div>
</div>,

<div class="d-flex justify-content-center">
	<div class="col-md-8 contArticle">
		<div class="col-md-12 artifooHead">
			<h4>Artikel terkait</h4>
		</div>
		<div class="col-md-12 fooartic">
				<Link to="/Artikel1"><p>Pengaruh sering begadanng bagi kesehatan</p></Link>
		</div>
		<div class="col-md-12 fooartic">
				<Link to="/Artikel2"><p>Memelihara kesehatan dan kebugaran tubuh</p></Link>
		</div>
		<div class="col-md-12 fooartic">
				<Link to="/Artikel3"><p>Yakin masih mau lanjut ngrokok??? simak fakta berikut ini</p></Link>
		</div>
		<div class="col-md-12 fooartic">
				<Link to="/Artikel4"><p>Perbanyak minum air putih bisa awet muda? mitos atau fakta? simak faktanya sebagai berikut!</p></Link>
		</div>
		<div class="col-md-12 fooartic">
				<Link to="/Artikel5"><p>Sudah Tepatkah Pasta Gigi Anda?</p></Link>
		</div>
	</div>
</div>
])

export default Artikel
