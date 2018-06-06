import React from 'react'
import { Link } from 'react-router-dom'

const Artikel = () => ([
  <div class="d-flex justify-content-center">
	<div class="col-md-8 title article">
		<div class="bookLogo">
			<i class="fas fa-book inline"></i>
			<h2 class="inline">MANFAAT VITAMIN A BAGI TUBUH</h2>
		</div>
	</div>
</div>,

<div class="d-flex justify-content-center imagecont">
		<div class="col-md-8 image">
			<img src="../assets/Articles/Artikel2.jpg" />
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
            <p>Vitamin A atau retinol atau asam retinoik merupakan nutrisi yang penting untuk organ penglihatan, pertumbuhan tubuh, pembelahan sel, kesehatan sistem reproduksi dan menunjang sistem kekebalan tubuh. Vitamin A dapat dibedakan menjadi dua jenis berdasarkan asalnya, yaitu:<br /><br />
    •	Retinoid merupakan vitamin A yang berasal dari produk hewani<br />
    •	Beta karoten merupakan vitamin A yang berasal dari tumbuhan<br />
    Vitamin A juga memiliki sifat antioksidan. Antioksidan merupakan zat yang dapat melindungi sel terhadap efek radikal bebas. Radikal bebas memiliki kemungkinan dapat memicu terjadinya penyakit jantung, kanker dan penyakit lain. The American Heart Association merekomendasikan untuk mendapatkan antioksidan seperti beta karoten adalah dengan mengkonsumsi makanan seperti buah-buahan, sayuran, dan biji-bijian.
    Suplemen vitamin A dapat bermanfaat bagi orang yang memiliki pola makan buruk atau terbatas atau yang membutuhkan asupan tinggi vitamin A seperti pada penyakit pancreas, penyakit mata, atau campak. Jumlah kebutuhan harian vitamin A pada tubuh adalah 900mcg pada pria dewasa dan 700mcg untuk wanita dewasa. <br />
    Apakah fungsi vitamin A bagi kesehatan? <br />
    Beberapa penelitian menunjukkan bahwa vitamin A yang dikonsumsi oral dapat bermanfaat bagi kesehatan. <br />
    Menjaga Kesehatan Mata<br />
    Vitamin A merupakan bagian penting dari molekul rhodopsin yang diaktifkan ketika cahaya bersinar pada retina. Sedangkan beta karoten pada vitamin A berperan dalam mencegah degenerasi makula yang merupakan penyebab utama kebutaan karena usia. <br /><br />
    Meningkatkan Daya Tahan Tubuh<br />
    Beberapa fungsi sistem kekebalan tubuh bergantung pada asupan vitamin A. Beberapa gen yang terlibat dalam respon sistem kekebalan diatur oleh vitamin A, sehingga vitamin A memiliki peran penting untuk melawan kondisi serius seperti kanker, penyakit autoimun atau juga penyakit seperti flu.
    Beta karoten juga merupakan antioksidan kuat yang dapat membantu meningkatkan sistem kekebalan tubuh dan mencegah berbagai penyakit kronis. Pada suatu penelitian menemukan bahwa kekurangan vitamin A pada anak dapat meningkatkan resiko infeksi seperti diare dan campak. <br /><br />
    Mengatasi peradangan<br />
    Vitamin A memiliki sifat antioksidan yang dapat menetralisir radikal bebas dalam tubuh yang menjadi pemicu kerusakan jaringan dan sel. Konsumsi vitamin A juga dapat membantu menurunkan resiko terjadinya alergi pada makanan tertentu. <br /><br />
    Menunjang kesehatan kulit dan pertumbuhan sel<br />
    Vitamin A diperlukan untuk penyembuhan luka dan pertumbuhan kembali kulit. Kekurangan vitamin A dapat menyebabkan kulit menjadi tidak sehat. Pada penelitian menunjukkan bahwa vitamin A dapat mengatasi jerawat dan meningkatkan kesehatan kulit secara keseluruhan. Vitamin A dapat mengatasi gari dan kerutan pada kulit dan membantu memproduksi kolagen lebih banyak. Vitamin A juga diketahui dapat membantu menjaga kesehatan rambut. <br /><br />
    Membantu mencegah kanker<br />
    Asupan vitamin A dapat membantu mengobati beberapa bentuk kanker karena mampu mengendalikan sel-sel ganas dalam tubuh.
    Sumber Vitamin A pada Makanan<br /> </p>

    •	Hati sapi<br />
    •	Wortel<br />
    •	Ubi<br />
    •	Kubis<br />
    •	Bayam<br />
    •	Brokoli<br />
    •	Telur<br />
    •	Ikan tuna<br />
    •	Mangga<br />
    •	Labu<br />
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



