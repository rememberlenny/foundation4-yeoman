<a href="https://github.com/lkbgift/foundation4-yeoman">
  <img src="http://rememberlenny.com/images/yeofound/yf.png" width="120px">
</a>

# [Yeoman 1.0 and Foundation 4.0.6](https://github.com/lkbgift/foundation4-yeoman) [![Build Status](https://secure.travis-ci.org/twitter/bootstrap.png)](http://travis-ci.org/twitter/bootstrap)

Yeoman is a robust and opinionated client-side stack, comprising tools and frameworks that can help developers quickly build beautiful web applications.

Foundation self declares to be the most advanced responsive front-end framework in the world.

This repository is a Yeoman webapp installation with properlly configured Foundation. Download and [get started](https://github.com/lkbgift/foundation4-yeoman/archive/master.zip)!



## Purpose

Three purposes of this project:

* [Download the repository](https://github.com/lkbgift/foundation4-yeoman/archive/master.zip).
* Clone the repo: `git clone git://github.com/lkbgift/foundation4-yeoman.git`.
* Setup your own Yeoman install and integrate Foundation 4 accordingly.



## Explaination

Yeoman is very useful to scaffold a ready-to-go frontend development environment. Yeoman gives you a seamless build process. Foundation is a easy to use front-end prototyping framework. When paired, they provide a great starting point for any web application.

Some of the benefits of using Yeoman are functioning installations of:

* CoffeeScript
* Uglify
* Compass
* Jshint
* CSSmin
* HTMLmin
* Imagemin
* LiveReload
* Usemin
* Mocha

Additionally, this install will use:

* RequireJS 
* Foundation



## Changes

This repository has configured RequireJS and Compass to interface with Foundation. The `Gruntfile.js` and `app/script/main.js` files have been modified. Additionally, the `app/index.html` file has been configured to interface with the Foundation assets. `app/vendor` and `app/foundation` are ported from Foundation 4.



## Yeoman Instructions

You must have Yeoman installed for this repository to function.

To install Yeoman, make sure you have Node.js installed and run:

`npm install -g yo grunt-cli bower`

You can learn more about Yeoman [here](http://yeoman.io/index.html).



## Foundation Instructions

Foundation 4 is a mobile-first framework. Learn more about best practices for developing here on Zurb's site [here](http://foundation.zurb.com/). 



## To Do

+ Zepto.js has not yet been integrated with the RequireJS.