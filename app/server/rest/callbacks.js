/**
 * Created by becari on 16/09/2016.
 */
var callbacks = {
    create: function (res) {
        res.sendStatus(200);
    },
    read: function (res) {
        res.send({object: JSON.stringify(res)});
    },
    update: function (res) {
        res.sendStatus(200);
    },
    delete: function (res) {
        res.sendStatus(200);
    }
};

module.exports = callbacks;