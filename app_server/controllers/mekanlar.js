var express = require('express');
var router = express.Router();

const anaSayfa= function(req, res) {
    res.render('anaSayfa', 
    {
        'baslik': 'Ana sayfa',
        'sayfaBaslik':{
            'siteAd':'MekanBul',
            'slogan':'Civardaki Mekanları Keşfet!'
        },
        'Mekanlar':[
            {
                "ad":"Donas",
                "puan":4,
                "adres":"Isparta/Merkez",
                "imkanlar":["Hatay Usülü Döner","Zurna Döner","Gobik Dürüm"],
                "mesafe":"15 km"
            },
            {
                "ad":"Paradiso Pizza & Hamburger",
                "puan":5,
                "adres":"Isparta/Özkanlar",
                "imkanlar":["Pizza","İtalyan Burger","Hamburger"],
                "mesafe":"18 km"
            }
        ]
        
    });
}
const mekanBilgisi= function(req, res) {
    res.render("mekanBilgisi",
     {
        "baslik": "Mekan bilgisi",
        "mekanBaslik":"Donas",
        "mekanDetay": {
            "ad":"Donas",
            "adres":"Isparta/Merkez",
            "puan":4,
            "imkanlar":["Hatay Usulü Döner","Zurna Döner","Gobik Dürüm"],
            "koordinatlar":{
                "enlem":"37.7",
                "boylam":"30.5"
        },
        "saatler":[{
                "gunler":"Pazartesi-Cuma",
                "acilis":"09:00",
                "kapanis":"23:00",
                "kapali": false
            },
            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"10:00",
                "kapanis":"23:00",
                "kapali": false
            }
        ],
        "yorumlar":[
            {
                "yorumYapan":"Mehmet Dikran IŞIK",
                "puan":"5",
                "tarih":"20 Ekim 2022",
                "yorumMetni":"Döner sosu çok iyi!"
            }
        ]
    }
    });
}
const yorumEkle= function(req, res) {
    res.render('yorumEkle', {'title': 'Yorum ekle'});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}