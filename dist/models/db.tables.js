"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const path = require("path");
exports.getModels = function (seq) {
    const tables = {
        _mysql_session_store: seq.import(path.join(__dirname, './_mysql_session_store')),
        user: seq.import(path.join(__dirname, './user')),
    };
    return tables;
};
//# sourceMappingURL=db.tables.js.map