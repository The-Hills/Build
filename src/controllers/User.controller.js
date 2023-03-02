"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_repository_1 = require("./../repositories/User.repository");
var userController = {
    index: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var listUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User_repository_1.default.getAllUser()];
                case 1:
                    listUser = _a.sent();
                    if (listUser.length !== 0) {
                        res.status(200).json({ message: "Successfully", data: listUser });
                    }
                    else {
                        res
                            .status(200)
                            .json({ message: "There are no users in the list", data: listUser });
                    }
                    return [2 /*return*/];
            }
        });
    }); },
    show: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.params.id;
                    return [4 /*yield*/, User_repository_1.default.getUserById(userId)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        res.status(200).json({ message: "Successfully", data: user });
                    }
                    else {
                        res.status(400).json({ message: "ID is not defined" });
                    }
                    return [2 /*return*/];
            }
        });
    }); },
    update: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, userData, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.params.id;
                    userData = req.body;
                    return [4 /*yield*/, User_repository_1.default.updateUser(userId, userData)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        res.status(200).json({
                            message: "Successfully",
                            data: user,
                        });
                    }
                    else {
                        res.status(400).json({
                            message: "Id is not defined",
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); },
    destroy: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.params.id;
                    return [4 /*yield*/, User_repository_1.default.deleteUser(userId)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        res.status(200).json({
                            message: "Successfully",
                        });
                    }
                    else {
                        res.status(400).json({
                            message: "Id is not defined",
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); },
};
exports.default = userController;
//# sourceMappingURL=User.controller.js.map