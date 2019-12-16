/**
 * Defines server actions, to be performed via routes
 */
const principlesAPI = require('../principlesAPI')
const testUser = require('../../testUser')

/**
 * Gets the 'principles' data for a particular id
 */
exports.fetchData = ( req, res, next ) => {
    principlesAPI.get(req.body.id)
    .then( result => {
        req.data=result
        console.log(result)
        next()
    }).catch( err => {
        console.log("data query failed within controller",err)
        res.send("error")
    }) 
}

/**
 * Prints data in GUI
 */
//TODO: change to SSR React
exports.displayData = (req, res, next) => {
    res.send(JSON.stringify(req.data) || "none" )
}

/**
 * Adds principle to existing list
 */
exports.addPrinciple = (req, res, next) => {
    const payload = 'be grateful always'
    principlesAPI.add( req.body.id, payload )
    .then( result => {
        req.data=result
        next()
    }).catch( err => {
        res.send("error",err)
    })
}

exports.removePrinciple = (req, res, next) => {
    const target='no mo'
    principlesAPI.remove( req.body.id, target )
    .then( result => {
        req.data=result
        next()
    }).catch( err => {
        res.send("error",err)
    })
}

exports.create = (req, res, next) => {
    principlesAPI.create()
    .then( result => {
        console.log(result.ops)
    })
    .catch( err => {
        console.log(err)
    })
}
