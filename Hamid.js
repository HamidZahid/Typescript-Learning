"use strict";
var a = 12;
//Array
let arr = [1, 2, 3, 4, 5];
//Tuples
let arr2 = [1, "Hamid", true];
//Enumerations
var Color;
(function (Color) {
    Color["NAME"] = "hamid";
    Color[Color["AGE"] = 12] = "AGE";
})(Color || (Color = {}));
