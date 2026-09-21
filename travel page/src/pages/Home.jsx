import React from "react";
import { Link } from "react-router";
import photo3 from "../img/showcase-photo3.jpg";
import photo1 from "../img/showcase-photo1.jpg";

export function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="lg-heading text-light main-heading">travel the world</h1>
          <p className="text-light">travel the world, experience the greatness</p>
          <a href="#" className="btn btn-primary text-red md-heading">Explore Places</a>
        </div>
      </header>

      <section className="showcase">
        <div className="container">
          
          <div className="row row1">
            <div className="img-box">
              <img src={photo3} alt="dbbbbbbbdbjn" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">DEGANVY, U.K</h2>
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Temporibus dolorem alias ipsam, consequuntur aperiam sapiente cum magni.
                 Nostrum quis fuga corrupti fugit nam vel impedit error excepturi, quas cupiditate animi.</p>
              <Link to="/about" className="btn btn-secondary">More</Link>
            </div>
          </div>

          <div className="row row2">
            <div className="img-box">
             <img src={photo1} alt="" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
              <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus perspiciatis, libero amet quo cum odio aperiam ipsum,
                 animi saepe tenetur non asperiores aliquam, quasi ab! Ducimus cupiditate nobis error animi!</p>
              <Link to="/about" className="btn btn-secondary">More</Link>
            </div>
          </div>

        </div>
      </section>




      <section class="features">
        <div class="container">
            <div class="box-wrapper">
                <div class="box box-1">
                    <i class="fas fa-route fa-2x text-red" aria-hidden="true"></i>
                    <h2 class="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-2">
                    <i class="fas fa-strikethrough fa-2x" aria-hidden="true"></i>
                    <h2 class="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-3">
                    <i class="fas fa-user-check fa-2x text-red" aria-hidden="true"></i>
                    <h2 class="md-heading">Experice</h2>    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
            </div>
        </div>
        
    </section>
    </>
  );
}
