import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './mainstyle.css';


function cart(){
  return (
    <div>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rymo</title>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous">
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css">   
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
        <body>
            
            <!-- NAVIGATION -->
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
              <div class="container">
              <img src="img/logo1.png">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i id="bar" class="fas fa-bars"></i></span>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="shop.html">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contactuspage.html">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <span class="material-symbols-outlined">
                      search
                      </span>
                        <span class="material-symbols-outlined">
                          shopping_bag
                          </span>
                  </li>
                
                
                </div>
              </div>
            </nav>

            <section id="cart" class="pt-5 mt-5 container">
                <h2 class="font-weight-bold pt-5">Shopping Cart</h3>
                <hr>
            </section>



            <section id="cart-container" class="container my-5">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="#"><i class="fas fa-trash-alt"></i></a></td>
                        <td><img src="img/shop/24.jpg" width="400px" height="400px" alt=""></td>
                        <td>
                          <h5>Whire</h5>
                        </td>
                        <td><h5>$65</h5></td>
                        <td><input class="w-25 pl-1" value="1" type="number">
                        </td>
                        <td><h5>$130</h5></td>
                      </tr>
                    </tbody>
                </table>

            </section>


        <section id="cart-bottom" class="container">
          <div class="row">
            <div class="coupon col-lg-6 col-md-6 col-12 mb-4">
              <div>
                <h5>COUPON</h5>
                <p>Enter the coupon code if you have</p>
                <input type="text" placeholder="coupon-code">
                <button>Apply coupon</button>
              </div>
            </div>
            <div class="total col-lg-6 col-md-6 col-12">
              <div>
                <h5>CART TOTAL</h5>
                <div class="d-flex justify-content-between">
                  <h6>SUBTOTAL</h6>
                  <p>$215.00</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6>SHIPPING</h6>
                  <p>$215.00</p>
                </div>
                <hr class="second-hr">
                <div class="d-flex justify-content-between">
                  <h6>TOTAL</h6>
                  <p>$215.00</p>
                </div>
                  <button class="ml-auto" onclick="window.location.href='payment.html';">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </section>







        <footer class="mt-5 py-5">
          <div class="row container mx-auto pt-5">
            <div class="footer-one col-lg-3 col-md-6 col-12">
              <img src="img/logo2.png" alt="">
              <p class="pt-3"> RYMO,the best Clothing <br>brand you can get</p>
            </div>
            <div class="footer-one col-lg-3 col-md-6 col-12">
              <h5 class="pb-2">Featured</h5>
              <ul class="text-uppercase list-unstyled">
                <li><a href="#">men</a></li>
                <li><a href="#">women</a></li>
                <li><a href="#">boys</a></li>
                <li><a href="#">girls</a></li>
                <li><a href="#">new arrival</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">clothes</a></li>
              </ul>
            </div>
            <div class="footer-one col-lg-3 col-md-6 col-12">
              <h5 class="pb-2">Contact us</h5>
              <div>
                <h4 class="text-uppercase">Address</h4>
                <p>123 Street name , city us</p>
              </div>
              <div>
                <h4 class="text-uppercase">Phone</h4>
                <p>+91 123456789</p>
              </div>
              <div>
                <h4 class="text-uppercase">Email</h4>
                <p>rimogarments.gmail.com</p>
              </div>
            </div>
            <div class="footer-one col-lg-3 col-md-6 col-12">
              <h5 class="pb-2">Instagram</h5>
              <div class="row">
                <img class="img-fluid w-25 h-100 m-2" src="img/insta/1.jpg">
                <img class="img-fluid w-25 h-100 m-2" src="img/insta/2.jpg">
                <img class="img-fluid w-25 h-100 m-2" src="img/insta/3.jpg">
                <img class="img-fluid w-25 h-100 m-2" src="img/insta/4.jpg">
                <img class="img-fluid w-25 h-100 m-2" src="img/insta/5.jpg">
              </div>
            </div>
          </div>



          <div class="copygright mt-5">
            <div class="row container mx-auto">
              <div class="col-lg-3 col-md-6 col-12"> 
                <img src="img/payment.png" alt="">
              </div>
              <div class="col-lg-3 col-md-6 col-12 text-nowrap"> 
                <p>Copyrighted with ryem corporation limited</p>
              </div>
              <div class="col-lg-3 col-md-6 col-12"> 
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
              </div>

            </div>
          </div>
        </footer>
              
                  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
              </body>
              </html>
    </div>
  )
}
export default cart
