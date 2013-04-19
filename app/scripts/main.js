require.config({
  paths: {
    jquery: '../components/jquery/jquery'
  },
  shim: {
    "../components/foundation/js/foundation/foundation" : { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.alerts": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.clearing": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.cookie": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.dropdown": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.forms": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.joyride": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.magellan": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.orbit": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.placeholder": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.reveal": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.section": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.tooltips": { deps: ["jquery"] },
    "../components/foundation/js/foundation/foundation.topbar": { deps: ["jquery"] }
  }
});

require(["jquery",
  "../components/foundation/js/foundation/foundation",            
  "../components/foundation/js/foundation/foundation.alerts",     
  "../components/foundation/js/foundation/foundation.clearing",   
  "../components/foundation/js/foundation/foundation.cookie",    
  "../components/foundation/js/foundation/foundation.dropdown",   
  "../components/foundation/js/foundation/foundation.forms",      
  "../components/foundation/js/foundation/foundation.joyride",    
  "../components/foundation/js/foundation/foundation.magellan",   
  "../components/foundation/js/foundation/foundation.orbit",      
  "../components/foundation/js/foundation/foundation.placeholder",
  "../components/foundation/js/foundation/foundation.reveal",     
  "../components/foundation/js/foundation/foundation.section",    
  "../components/foundation/js/foundation/foundation.tooltips",   
  "../components/foundation/js/foundation/foundation.topbar"
], function ($) {
  $(document).foundation();
});