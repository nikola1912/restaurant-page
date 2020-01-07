const imageFolderPath = "./styles/images/food/";

const menu = {
    pizzas: {
        capriciossa: {
            name: "Capriciossa",
            price: "400din.",
            description: "pica sos, kačkavalj, šunka, pečurke",
            image: `${imageFolderPath}capriciossa.jpg`
        },
        vegetarijana: {
            name: "Vegetarijana",
            price: "300din.",
            description: "pica sos, biljni sir, šampinjoni, sezonsko povrće, masline",
            image: `${imageFolderPath}vegetarijana.jpg`
        }, 
        san_giovani: {
            name: "San Giovani",
            price: "515din.",
            description: "pica sos, kačkavalj, suvo meso, pečurke",
            image: `${imageFolderPath}san_giovani.jpg`
        },
        serbiana_arabica: {
            name: "Serbiana Arabica",
            price: "650din.",
            description: "pica sos, kačkavalj, kulen, suvo meso, ljuta paprika, kajmak",
            image: `${imageFolderPath}serbiana_arabica.jpg`
        },
        quattro_stagione: {
            name: "Quattro Stagione",
            price: "470din.",
            description: "pica sos, kačkavalj, šunka, pečurke, suvo meso, jaje, pavlaka, masline",
            image: `${imageFolderPath}quattro_stagione.jpg`
        },
        napolitana: {
            name: "Napolitana",
            price: "680din.",
            description: "mocarela, pršuta, kačkavalj, čeri paradajz, parmezan, rukola",
            image: `${imageFolderPath}napolitana.jpg`
        }
    },
    breakfasts: {
        srpski_dorucak: {
            name: "Srpski Doručak",
            price: "310din.",
            description: "kajgana sa lukom, pečena slaninica, mladi sir, paradajz, kiselo mleko",
            image: `${imageFolderPath}srpski_dorucak.jpg`
        },
        budjenje_u_arabici: {
            name: "Buđenje u Arabici",
            price: "340din.",
            description: "kroasan, kulen, slanina, paradajz, tost sir, kajgana",
            image: `${imageFolderPath}budjenje_u_arabici.jpg`
        },
        dorucak_u_arabici: {
            name: "Doručak u Arabici",
            price: "360din.",
            description: "prženice, krem sir, svinjski pršut, paradajz",
            image: `${imageFolderPath}dorucak_u_arabici.jpg`
        }
    }
}

export default menu;