import React from 'react'
import { Link } from 'react-router-dom'

const Artikel = () => ([
  <div class="d-flex justify-content-center">
	<div class="col-md-8 title article">
		<div class="bookLogo">
			<i class="fas fa-book inline"></i>
			<h2 class="inline">APAKAH FUNGSI KULIT MANGGIS?</h2>
		</div>
	</div>
</div>,

<div class="d-flex justify-content-center imagecont">
		<div class="col-md-8 image">
			<img src="assets/Articles/Artikel3.jpg" />
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
<p>Xanthone merupakan bahan aktif pada kulit manggis yang dapat bermanfaat bagi tubuh dan dapat membantu meningkatkan sistem kekebalan tubuh.<br />

Manggis merupakan buah tropis yang beberapa bagian tubuhnya seperti daging buah, kulit buah, ranting, kulit kayu dapat bermanfaat sebagai obat. Manggis diketahui dapat membantu mengatasi banyak kondisi, namun belum ada cukup bukti ilmiah untuk menentukan keefektifannya. Manggis dapat digunakan untuk mengatasi diare, infeksi saluran kencing, gonore, sariawan, tuberkulosis, gangguan haid, kanker, osteoarthritis, dan disentri. Manggis juga diketahui dapat digunakan untuk meningkatkan sistem kekebalan tubuh. Kandungan kulit buah manggis yang bermanfaat sebagai obat adalah tanin. <br /><br />
Apakah kandungan nutrisi pada manggis? <br />
Dalam 100gram buah manggis dapat mengandung: <br />
•	63 kalori<br />
•	15,6 gram karbohidrat<br />
•	0,5 gram protein<br />
•	0,4 gram lemak<br />
•	5,1 gram serat<br />
•	7,2 mg vitamin C<br />
•	0,36 mg zat besi<br />
•	50 IU vitamin A<br />
•	10 mg kalsium<br /><br />
Kulit manggis dapat membantu melawan kanker<br />
Pada salah satu penelitian menunjukkan kulit manggis mengandung salah satu xanthone yang dikenal sebagai alpha mangostin dan ternyata memiliki efek pencegahan kanker pada hewan. Kesimpulan dari penelitian ini menyimpulkan bahwa xanthone dapat membantu mengatasi kanker. Pada beberapa penelitian lain menemukan bahwa xanthone memiliki efek anti kanker pada usus, memperlambat pertumbuhan kanker prostat, anti kanker pada kanker payudara, anti kanker pada kanker kulit. <br /><br />
Ekstrak manggis dapat mengatasi peradangan dan alergi<br />
Penelitian ilmiah menunjukkan bahwa ekstrak manggis memiliki sifat anti-alergi dan anti-inflamasi. Pada salah satu penelitian secara khusus menunjukkan bahwa ekstrak manggis dapat bekerja bagus untuk menghambat prostaglandin dan histamin yang menjadi pemicu alergi atau peradangan. Alpha dan gamma mangostin merupakan dua zat aktif pada manggis yang dapat memberikan efek anti-inflamasi. <br /><br />
Manggis dapat membantu menurunkan kadar gula dalam darah<br />
Manggis memiliki manfaat dapat mengendalikan kadar gula darah agar tetap dalam kondisi normal. Pada penelitian menunjukkan bahwa manggis dapat berperan menghambat alfa-amilase (enzim yang memecah pati menjadi glukosa). Kandungan pada manggis yang dapat mengendalikan kadar gula darah adalah tannic acid dan oligomeric proanthocyanidin complexes (OPCs). OPC dikenal memiliki aktifitas sebagai antioksidan yang baik karena dapat berperan sebagai antibakteri, antiviral, anticarcinogenic, anti-inflamasi, dan anti-alergi. <br /><br />
Manggis dapat mengatasi jerawat<br />
Menurut penelitian, manggis mengandung antioksidan yang dapat menangkal radikal bebas dan menghambat pemicu jerawat. <br /><br />
Meningkatkan kesehatan jantung<br />
Manggis memiliki kandungan xanthone yang merupakan antioksidan kuat untuk menangkal radikal bebas dan mengurangi resiko serangan jantung. <br /><br />
Meningkatkan sistem kekebalan tubuh<br />
Manggis mengandung xanthone yang meningkatkan banyak fungsi vital organ tubuh termasuk kekebalan tubuh. Manggis juga merupakan sumber vitamin C yang baik untuk membantu mengikis radikal bebas berbahaya yang dapat menyebabkan penyakit. <br /><br />
Manggis dapat memperbaiki pencernaan<br />
Buah manggis dapat membantu mengatasi sembelit dan beberapa gangguan pencernaan lainnya. Manggis memiliki kandungan serat yang baik. <br /></p>
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
