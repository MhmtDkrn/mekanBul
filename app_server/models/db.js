var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
function kapat(msg, callback){
    mongoose.connection.close(function (){
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", function(){
    kapat("Uygulama kapatıldı!",function(){
        process.exit(0);
    });
})
mongoose.connection.on("Connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağlandı.");
});
mongoose.connection.on("Error",function(){
    console.log("Bağlantı hatası!");
});
mongoose.connection.on("Disconnected",function(){
    console.log("Bağlantı kesildi!");
});
require("./mekansema.js");