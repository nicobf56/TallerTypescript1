import { series } from "./data.js";
var coursesTBody = document.getElementById("series");
var arraySeasons = [];
series.forEach(function (serie) {
    showSeries(serie);
    arraySeasons.push(serie.seasons);
});
function showSeries(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr\">\n      <th scope=\"row\">".concat(serie.numS, "</th>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td></tr>");
    coursesTBody.appendChild(tbodySerie);
}
var seasonsAvg = document.getElementById("avg");
seasonsAvg.innerHTML = "Seasons average: ".concat(average(arraySeasons));
function average(arraySeasons) {
    var sum = 0;
    arraySeasons.forEach(function (seasons) {
        sum += seasons;
    });
    return sum / arraySeasons.length;
}
