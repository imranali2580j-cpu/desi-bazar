const CACHE_NAME = "desi-bazar-v1";

self.addEventListener("install", function(event){
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  self.clients.claim();
});

self.addEventListener("fetch", function(event){

});
