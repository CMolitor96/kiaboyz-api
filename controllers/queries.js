const db = require('../config/connection');

module.exports = {
    carMake: function({params}, res) {
        db.query(`Select Model from ${params.make}`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting model from ${params.make}`});
            } else {
                let models = new Set(results.map(element =>  element.Model));
                let modelsArray = Array.from(models);
                return res.json(modelsArray);
            }
        })
    },
    carYear: function({params}, res) {
        db.query(`Select Year from ${params.make} where Model = '${params.model}'`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting Year from ${params.make} where model = ${params.model}`}); 
            } else {
                let year = new Set(results.map(element =>  element.Year));
                let yearArray = Array.from(year);
                if (yearArray.length === 0) {
                    return res.status(404).json({message: `There are no Years pertaining to ${params.make} where model = ${params.model}`})
                } else {
                    return res.json(yearArray);
                }
            }
        });
    },
    carTrim: function({params}, res) {
        db.query(`Select Trim from ${params.make} where Model = '${params.model}' and Year = ${params.year}`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting cars from ${params.make} where model = ${params.model} and year = ${params.year}`});
            } else {
                let trim = new Set(results.map(element => element.Trim));
                let trimArray = Array.from(trim);
                if (trimArray.length === 0) {
                    return res.status(404).json({message: `No results found for ${params.make} where model = ${params.model} and year = ${params.year}`});
                } else {
                    res.json(trimArray);
                }
            }
        });
    },
    carBodytype: function({params}, res) {
        db.query(`Select Bodytype from ${params.make} where Model = '${params.model}' and Year = ${params.year} and Trim = '${params.trim}'`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting cars from ${params.make} where model = ${params.model} and year = ${params.year} and trim = ${params.trim}`});
            } else {
                let bodytype = new Set(results.map(element => element.Bodytype));
                let bodytypeArray = Array.from(bodytype);
                if (bodytypeArray.length === 0) {
                    return res.status(404).json({message: `No results found for ${params.make} where model = ${params.model} and year = ${params.year} and trim = ${params.trim}`});
                } else {
                    res.json(bodytypeArray);
                }
            }
        })
    },
    carInfo: function ({params}, res) {
        db.query(`Select * from ${params.make} where Model = '${params.model}' and Year = ${params.year} and Trim = '${params.trim}' and Bodytype = '${params.bodytype}'`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting cars from ${params.make} where model = ${params.model} and year = ${params.year} and trim = ${params.trim} and bodytype = ${params.bodytype}`});
            } else {
                let info = results;
                let infoArray = Array.from(info);
                if (infoArray.length === 0) {
                    return res.status(404).json({message: `No results found for ${params.make} where model = ${params.model} and year = ${params.year} and trim = ${params.trim} and bodytype = ${params.bodytype}`});
                } else {
                    res.json(info[0]);
                }
            }
        })
    }
}