console.table(countries);

function getNames(countries) {
    /*
        дописать функцию, чтоб getNames возвращало список имен стран
        (массив countryNames, каждый элемент этого массива - название страны (поле name у каждого объекта))
    */
    var countryNames = [];
    for(var item of countries) {
        countryNames.push(item.name);
    }
    return countryNames;
}
var names = getNames(countries);
console.log(names);
//пример: после getNames(countries) в names будет храниться ['Afganistan', 'Angola', ...]


function getCapitals(countries) {
    /*
        дописать функцию, чтоб getCapitals возвращало список столиц от каждой страны
        (массив countryCapitals, каждый элемент этого массива - название столицы страны (поле capital у каждого объекта страны))
    */
    var countryCapitals = [];
    for(var item of countries) {
        countryCapitals.push(item.capital);
    }

    return countryCapitals;
}
var capitals = getCapitals(countries);
console.log(capitals);
//пример: после getCapitals(countries) в capitals будет храниться ['Kyiv', 'London', ...]


function getAverageArea(countries) {
    /*
        дописать функцию, чтоб getAverageArea возвращало среднюю площадь из массива countries.
        получается, нужно посчитать среднее арифметическое. название поля - area
        результат с точностью до 1 знака после запятой
    */
   var commonArea = 0;
   for(var item of countries) {
    commonArea += item.area;
    }
    var averageArea = (commonArea / countries.length).toFixed(1);
    return averageArea;
}
var average = getAverageArea(countries)
console.log(average);
//пример: в average -> 601162.3

function getUniqueRegions(countries) {
    /*
        Возвращает список уникальных названий регионов (поле region)

    */
    var uniqueRegions = [];
    for (country of countries) {
        if (!uniqueRegions.includes(country.region)) {
        uniqueRegions.push(country.region);
        }
    }
    return uniqueRegions;
}
var unique = getUniqueRegions(countries);
console.log(unique);
//пример: unique -> ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar", "Antarctic Ocean", "Antarctic"]