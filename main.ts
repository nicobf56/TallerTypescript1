import { Serie } from "./serie.js";
import { series } from "./data.js";

let coursesTBody: HTMLElement = document.getElementById("series")!;
let arraySeasons: number[] = [];

series.forEach((serie) => {
    showSeries(serie);
    arraySeasons.push(serie.seasons);
  });

  function showSeries(serie: Serie): void {
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr">
      <th scope="row">${serie.numS}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td></tr>`;
    coursesTBody.appendChild(tbodySerie);
  }

  let seasonsAvg: HTMLElement = document.getElementById("avg")!;

  seasonsAvg.innerHTML = `Seasons average: ${average(arraySeasons)}`;

  function average(arraySeasons: number[]): number {
    let sum = 0;
    arraySeasons.forEach((seasons) => {
      sum += seasons;
    });
    return sum / arraySeasons.length;
  }
  

 
  