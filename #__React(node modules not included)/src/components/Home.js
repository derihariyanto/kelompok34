import React from 'react';

const Home = () => ([
<div className="carousel-home">
	  <div id="carouselExampleControls" className="carousel slide heightvh" data-ride="carousel">
		  <ol className="carousel-indicators">
		     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		  </ol>
		  <div className="carousel-inner">
		     <div className="carousel-item active">
		        <img className="d-block min-width" src="/assets/img/1.jpg" alt="First slide"/>
		        <div className="carousel-caption d-none d-md-block">
		          <h3>First Slide</h3>
		          <p>This is a description for the first slide.</p>
		        </div>
		     </div>
		     <div className="carousel-item">
		        <img className="d-block min-width" src="assets/img/2.jpg" alt="Second slide" />
		        <div className="carousel-caption d-none d-md-block">
		          <h3>First Slide</h3>
		          <p>This is a description for the first slide.</p>
		        </div>
		     </div>
		     <div className="carousel-item">
		        <img className="d-block min-width" src="/assets/img/3.jpg" alt="Third slide" />
		        <div className="carousel-caption d-none d-md-block">
		          <h3>First Slide</h3>
		          <p>This is a description for the first slide.</p>
		        </div>
		     </div>
		  </div>
		  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			  <span className="carousel-control-next-icon" aria-hidden="true"></span>
			  <span className="sr-only">Next</span>
		  </a>
	</div>
</div>,

<div class="container testcolor1">
 		<div class="row">
 			<div class="col-md-4">
 				<div class="svg">
					<img class="iconsC1" src="assets/icons/i_doctor.svg" />
				</div>
				<div class="description">
					<h2>JADWAL DOKTER</h2>
					<p>Memudahkan anda mencari<br />jadwal praktek dokter</p>
				</div>
 			</div>
 			<div class="col-md-4">
 				<div class="svg">
					<img class="iconsC1" src="assets/icons/phone.svg" />
				</div>
				<div class="description">
					<h2 class="emergency"><b>EMERGENCY CALL</b></h2>
					<p><h3>0895-3675-11128</h3><h5>24 JAM NON-STOP</h5></p>
				</div>
 			</div>
 			<div class="col-md-4">
 				<div class="svg">
					<img class="iconsC1" src="assets/icons/poly.svg" />
				</div>
				<div class="description">
					<h2>POLIKLINIK</h2>
					<p>Klik untuk melihat poliklinik<br />terbaik dari kami</p>
				</div>
 			</div>
 		</div>
 </div>,

  <section class="content2">
      <div class="container">
        <div class="row">
        <div class="col-md-6">
         <div class="col-md-6">
            <i class="fas fa-book inline rightCons"></i>
          <h3 class="heading-large inline">Artikel Terbaru</h3>
        </div>
         <div class="row">
          <div class="col-md-6">
             <div class="card">
             	<div class="col-md-12 cont-news-card">
		                <img class="image-card" src="http://grafreez.com/wp-content/temp_demos/river/img/politics.jpg" alt="" />
                </div>
                <div class="card-body">
                   <div class="news-title">
                      <h2 class=" title-small">
                      	<a href="#" class="cardtext">Syria war: Why the battle for Aleppo matters</a>
                      </h2>
                   </div>
                   <p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
                </div>
             </div>

             <div class="card">
               <div class="col-md-12 cont-news-card">
		                <img class="image-card" src="http://grafreez.com/wp-content/temp_demos/river/img/politics.jpg" alt="" />
                </div>
                <div class="card-body">
                   <div class="news-title">
                      <h2 class=" title-small"><a class="cardtext" href="#">
                      	Syria war: Why the battle for Aleppo matters</a>
                      </h2>
                   </div>
                   <p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
                </div>
             </div>
          </div>

          <div class="col-md-6">
            <div class="card">
				<div class="col-md-12 cont-news-card">
				        <img class="image-card" src="http://grafreez.com/wp-content/temp_demos/river/img/politics.jpg" alt="" />
				</div>
	            <div class="card-body">
	               <div class="news-title">
	                  <h2 class=" title-small">
	                  	<a class="cardtext" href="#">Syria war: Why the battle for Aleppo matters</a>
	                  </h2>
	               </div>
	               <p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
	            </div>
            </div>
            <div class="card">
             	<div class="col-md-12 cont-news-card">
		                <img class="image-card" src="http://grafreez.com/wp-content/temp_demos/river/img/politics.jpg" alt="" />
                </div>
                <div class="card-body">
                   <div class="news-title">
                      <h2 class=" title-small">
                      	<a class="cardtext" href="#">Syria war: Why the battle for Aleppo matters</a>
                      </h2>
                   </div>
                   <p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
                </div>
            </div>
          </div>
         </div>
        </div>

          
          <div class="col-md-6 margin-top">
	         <div class="col-md-12">
	          <i class="fas fa-bullhorn inline rightCons"></i>
            <h3 class="heading-large inline">Informasi Terbaru</h3>
	        </div>
            <div id="carousel-example-generic" class="carousel slide inline" data-ride="carousel"> 
              
              <ol class="carousel-indicators __top-indicator">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
              
              
              <div class="carousel-inner margin_top" role="listbox">

                <div class="carousel-item active __top-item">
                  <div class="news-block">  
                    <div class="news-media">
                      <img src="http://grafreez.com/wp-content/temp_demos/river/img/politics1.jpg" alt="" />
                    </div>
                    <div class="news-title">
                      <h2 class=" title-large">
                        <a class="cardtext" href="#">Ray madison may struggle to get best from Paul in a 4-2-3-1 formation</a>
                      </h2>
                    </div>
                    <div class="news-des">
                    	<p>Condimentum ultrices mi est a arcu at cum a elementum per cum turpis dui vulputate vestibulum in vehicula montes vel. Mauris nam suspendisse consectetur mus... </p>
                    </div>
                    <div class="time-text"><strong>2h ago</strong>
                    </div>
                  </div>
                </div>
              

                <div class="carousel-item __top-item">
                  <div class="news-block">
                    <div class="news-media">
                      <img class="img-fluid" src="http://grafreez.com/wp-content/temp_demos/river/img/sport1.jpg" alt="" />
                    </div>
                    <div class="news-title">
                        <h2 class=" title-large">
                          <a class="cardtext" href="#">An Alternative Form of Mental Health Care Gains a Foothold</a>
                        </h2>
                    </div>
                    <div class="news-des">
                    	<p>Condimentum ultrices mi est a arcu at cum a elementum per cum turpis dui vulputate vestibulum in vehicula montes vel. Mauris nam suspendisse consectetur mus...</p>
                    </div>
                    <div class="time-text">
                      <strong>2h ago</strong>
                    </div>
                  </div>
                </div>

                <div class="carousel-item __top-item">
                  <div class="news-block">
                    <div class="news-media">
                      <img class="img-fluid" src="http://grafreez.com/wp-content/temp_demos/river/img/health.jpg" alt="" />
                    </div>
                    <div class="news-title">
                      <h2 class="title-large">
                        <a class="cardtext" href="#">Key Republican Senator Says She Will Not Vote for former president!</a>
                      </h2>
                    </div>
                    <div class="news-des">
                    	<p>Condimentum ultrices mi est a arcu at cum a elementum per cum turpis dui vulputate vestibulum in vehicula montes vel. Mauris nam suspendisse consectetur mus...</p>
                    </div>
                    <div class="time-text">
                    	<strong>2h ago</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>,



  <section class="banner-sec maps">
    <div class="container">
      <div class="col-md-12 default mText" id="test1">
         <h3 class="text-center"> Temukan Kami di Maps !</h3><br/>
      </div>
      <div class="map-responsive defaultpos hide" id="test">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.747746557332!2d110.4007909!3d-7.8229225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x2100545536e0a4c3!2sRSKIA+PKU+Muhammadiyah+Kotagede!5e0!3m2!1sid!2sid!4v1527039008163" allowfullscreen>
         </iframe>
      </div>
    </div>
  </section>



])

export default Home