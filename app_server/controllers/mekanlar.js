var express = require('express');
var router = express.Router();

const anaSayfa= function(req, res) {
    res.render('anaSayfa', {'title': 'Ana sayfa'});
}
const mekanBilgisi= function(req, res) {
    res.render('mekanBilgisi', {'title': 'Mekan bilgisi'});
}
const yorumEkle= function(req, res) {
    res.render('yorumEkle', {'title': 'Yorum ekle'});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}