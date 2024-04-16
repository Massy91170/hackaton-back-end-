var express = require('express');
var router = express.Router();
const Trajet = require("../models/trajets")
const moment = require('moment');

// router.get('/:departure/:arrival/:date', function(req, res) {
//     const selectedDate = moment.utc(req.params.date).format('YYYY-MM-DD'); // Formater la date spécifiée dans l'URL
//     const startDate = moment.utc(selectedDate).startOf('day'); // Début de la journée sélectionnée
//     const endDate = moment.utc(selectedDate).endOf('day'); // Fin de la journée sélectionnée
//     console.log(startDate)
//     console.log(endDate)


//     Trajet.find({
//         departure: req.params.departure,
//         arrival: req.params.arrival,
//         date: {
//             $gte: startDate,
//             $lte: endDate
//         },
//         })
//         .then (data => res.json(data))
//     });

router.get('/:departure/:arrival/:date', function(req, res) {
    const selectedDate = moment.utc(req.params.date).format('YYYY-MM-DD'); 
    const startDate = `${selectedDate}T00:00:00.000+00:00`;
    const endDate = `${selectedDate}T23:59:59.999+00:00`; 
    console.log(startDate)
    console.log(endDate)
    console.log(selectedDate)

    Trajet.find({
        departure: req.params.departure,
        arrival: req.params.arrival,
        date: {
            $gte: startDate,
            $lte: endDate,
        }
    })
    .then(data => res.json(data))
})
        // const searchedDate = req.body.date;
    // const formatedDate = searchedDate.slice(0, 10);
    // const pattern = /.+?(?=T)/;
    // const found = searchedDate.match(pattern);
    // console.log("found: ", found)


    // Trajet.find({date: /^.+?(?=T)/})
    // .then (data => res.json(data))


    // console.log("DATE: ", formatedDate)
    // Trajet.find({
    //     departure: req.body.departure,
    //     arrival: req.body.arrival,
    //     date:{
    //         $gte: new Date('2024-04-16T00:00:00.000Z'), // Début de la journée
    //         $lt: new Date('2024-04-17T00:00:00.000Z')   // Fin de la journée
    //     }
    // })
    // .then (data => res.json(data))
    // Définir la date de début de la journée (00:00:00)
// const startOfDay = new Date("2024-04-16");
// endOfDay.setUTCDate(16); // Définir le jour précédent
// endOfDay.setUTCHours(0, 0, 0, 0); // Définir le début de la journée
// endOfDay.setMilliseconds(-1)

// // Définir la date de fin de la journée (23:59:59)
// const endOfDay = new Date("2024-04-16");
// endOfDay.setUTCDate(16); // Définir le jour précédent
// endOfDay.setUTCHours(0, 0, 0, 0); // Définir le début de la journée
// endOfDay.setMilliseconds(-1); // Soustraire 1 milliseconde pour obtenir la fin de la journée précédente

// console.log("endofday :", endOfDay)
// // Recherche des trajets pour toute la journée du 2024-04-16
// Trajet.find({
//     date: {
//         $gte: startOfDay,
//         $lte: endOfDay
//     }
// })
// .then (data => res.json(data))
// });





module.exports = router;