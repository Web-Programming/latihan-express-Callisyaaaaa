const index = (req,res) => {
    res.render("index",{title: "Express MVC"});
}

const kontak= (req,res) => {
    res.render("Kontak",{title:'Ini Halaman Kontak'});
}

const profil= (req,res) => {
    res.render("Profil",{title:"Ini Halaman Profil"});
}
module.exports = {index, kontak, profil};