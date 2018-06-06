import React from 'react'

const Footer = () => (
  <section id="footer" className="footer">
    <div className="container cont">        
            <div className="futer txtColor ea1 row">
                <div className="col-md-4">
                    <div className="widget ea2 wow fadeInUp text-center">
                          <img className="mainGambar" src="assets/logors.png" alt="" />
                        <div className="widgetTxt">
                            <div className="socmed">
                                <a href="#!" ><i className="fa fa-facebook"></i></a>
                                <a href="#!" ><i className="fa fa-google-plus"></i></a>
                                <a href="#!" ><i className="fa fa-twitter"></i></a>
                                <a href="#!" ><i className="fa fa-instagram"></i></a>
                                <a href="#!" ><i className="fa fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="widget ea4 wow fadeInUp">
                        <h4 className="text-lowercase">Visi Kami : </h4>
                        <div className="widgetTxt f_reatures">
                            <ul>
                                <li><i className="fa fa-check"></i>Cepat</li>
                                <li><i className="fa fa-check"></i>Tanggap</li>
                                <li><i className="fa fa-check"></i>Berkualitas</li>
                                <li><i className="fa fa-check"></i>Bertanggung jawab</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="widget ea4 wow fadeInUp">
                        <h4 className="text-lowercase">Tags :</h4>
                        <div className="widgetTxt f_tags">
                            <a href="#!">Healty</a>
                            <a href="#!">Rumsah Sakit</a>
                            <a href="#!">Rs Terpadu</a>
                            <a href="#!">Cepat</a>
                            <a href="#!">elegant</a>
                            <a href="#!">professional</a>
                            <a href="#!">segerr</a>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    <div className="main_coppyright">
        <div className="col-sm-12 bawah">
                <p> Made with MusMus 2018. &copy; All Rights Reserved</p>
        </div>
    </div>
  </section>

)

export default Footer



