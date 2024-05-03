const anoopammid = (req, res, next) => {
    let concate_value = ""
    for (keey in req.body) {
        concate_value += req.body[keey] + " "
    }

    test(req.body.othorize, next)

    // req.body = { concate_value }
}

function test(hh, l) {
    if (hh) {
        console.log("/\\/\\/\\/\\/\\/\\")
        l()
    }

}
module.exports = { anoopammid }  