import './App.css';

// imgs
import Img1 from "./Assets/admin-roles-glyph-black-icon-vector 1.png";
import Img2 from "./Assets/search.png";
import Img3 from "./Assets/star.png";
import Img4 from "./Assets/GoogleMap.png";

function App() {

  

  return (
    <>
        <section className='header__section'>
            <div className="container">
                <header className="header">
                    <ul className='header__list'> 
                      <li className='header__item'><a className='header__item--link' href="">Xizmatlar</a></li>
                      <li className='header__item'><a className='header__item--link' href="">Hamkorlik</a></li>
                      <li className='header__item'><a className='header__item--link' href="">Mashina</a></li>
                      <li className='header__item'><a className='header__item--link' href="">Mahalla</a></li>
                      <li className='header__item'><a className='header__item--link' href="">Kontakt</a></li>
                    </ul>
                    <div className="header__input">
                        <img className='header__input--img' src={Img2} width={12} height={12} alt="search" />
                        <input className='header__input' type="text" />
                    </div>
                    <img src={Img1} alt="" />
                </header>
                <div className="hero">
                    <h1 className='hero__head'>Har bir mahalla uchun xizmat 
                    qiluvchi mashinalar</h1>
                    <p className='hero__text'>Tumandagi barcha mahallalar o’rtasida amalga oshirlayotgan
                    tozalik uchun xizmat qiluvchi mashinalar bo’yicha</p>
                    <a className='hero__link' href="#">Bog'lanish</a>
                </div>
                <div className="sidebar">
                <h2 className='sidebar__heading'>Bu tizim haqida qisqacha ma’lumot</h2>
                  <div className="sidebar__list">
                    <div className="sidebar__item">Mashinalarning tartibli harakati</div>
                    <div className="sidebar__item">Mashinalarning tartibli harakati</div>
                    <div className="sidebar__item">Mashinalarning tartibli harakati</div>
                    <div className="sidebar__item">Mashinalarning tartibli harakati</div>
                  </div>
            </div>
            </div>
        </section>

        {/* end of header and hero */}

        <section className='main__section'>
            <div className="container">
              <main className='main'>
                 <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div class="carousel-inner mt-5 item-corosel">
                                <h3 className='main__head'>Mahallalar</h3>
                              
                              <div class="carousel-item active mt-5" >

                                <div class="row mt-5 ">

                                    <div class="col me-3">
                                        <span className='col-span'>Yangiobod</span>
                                    </div>
        
                                    <div class="col me-3">
                                        <span className='col-span'>Xo'jaqand</span>
                                    </div>
        
                                    <div class="col me-3">
                                        <span className='col-span'>YangiShaxar</span>
                                    </div>
        
                                    
                                </div>
                              </div>
                              <div class="carousel-item mt-5">
                                <div class="row mt-5 ">

                                    <div className="col me-3">
                                        <span className='col-span'>YangiShaxar</span>
                                    </div>
        
                                    <div className="col me-3">
                                        <span className='col-span'>YangiShaxar</span>

                                    </div>

                                    <div className="col me-3">
                                        <span className='col-span'>YangiShaxar</span>

                                    </div>
            
                                </div>
                              </div>
                              
                            </div>
                            <button className="carousel-control-prev button-btn" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon span1" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next button-btn2" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                              <span className="carousel-control-next-icon span2" aria-hidden="true"></span>
                            </button>
                          </div> 

                          <div className="wrapper">
                            <div className="wrapper__left">
                              <h4 className='wrapper__head'>MAXSUS MASHINALAR VA TEXNIKALAR</h4>
                              <p className='wrapper__text'>Mashinalar chet eldan keltirilgan bo’lib 
                                zamonaviyva ichi kengligi bilan ajralib turadi.
                                Ichki sig’imi kichik bir ko’cha axlatini
                                to’liq yig’ishga yetadi</p>
                            </div>
                            <div className="wrapper__right">
                                <h5 className='right__head'>20 </h5>
                                <span >mashinalar</span>
                            </div>
                          </div>
                  </main>
                </div>
        </section>

        {/* end of main */}

        <section className='widget__section'>
            <div className="container">
                <div className="widget">
                  <div className="widget__left">
                    <h6 className='widget__heading'>Takliflar uchun biz bilan bog’laning.</h6>
                    <p className='widget__text'>Sizning e’tiboringiz biz uchun juda 
                    ham muhim!</p>
                  </div>
                  <div className="widget__right">
                      <form className='widget__form' action="">
                          <input className='widget__input' type="text" placeholder='ism' />
                          <input className='widget__input' type="text" placeholder='telfon raqam'/>
                          <textarea className='widget__input textarea' placeholder='izoh' cols="30" rows="10"></textarea>
                      </form>
                  </div>
                </div>
            </div>
        </section>

        {/* end of widget */}

        <section className='footer__section'>
          <div className="container">
              <footer className='footer'>
                  <div className="footer__left">
                      <div className="footer__item">
                        <img className='footer__item--img' src={Img3} width={35} height={35} alt="star"/>
                        <span className='footer__item--title'>Atrof muhit tozaligi</span>
                      </div>
                      <div className="footer__item">
                        <img className='footer__item--img' src={Img3} width={35} height={35} alt="star"/>
                        <span className='footer__item--title'>Axoli salomatligini saqlash</span>
                      </div>
                      <div className="footer__item">
                        <img className='footer__item--img' src={Img3} width={35} height={35} alt="star"/>
                        <span className='footer__item--title'>Tuman rivojlanishiga o’z hissasini qo’shish</span>
                      </div>
                      <div className="footer__links">
                          <a className='footer__link' href="">asadovdilmurod96@gmail.com</a>
                          <a className='footer__link' href="">+998996790215</a>
                      </div>
                  </div>
                  <div className="footer__right">
                      <img src={Img4} width={700} height={500} alt="map"/>
                  </div>
              </footer>
          </div>
        </section>
    </>
  );
}

export default App;
