const apiKey = 'c73eea09d5030ffeaafaed52a3fafa78';

const getHighest = (json) => {
    /**
     *  @function Get lowest temperature from dataset
     */

    const maxTemps = [];

    json.daily.forEach((i) => {
        maxTemps.push(Math.floor(i.temp.max));
    });

    const highest = maxTemps.indexOf(Math.max(...maxTemps));
    return highest;
};

const getLowest = (json) => {

    /**
     * @function Get lowest temperature from dataset
     */

    const minTemps = [];

    json.daily.forEach((i) => {
        minTemps.push(Math.floor(i.temp.min));
    });

    const lowest = minTemps.indexOf(Math.min(...minTemps));
    return lowest;
};

const formatMaxData = (json, highest) => {

    /**
     * @function Format data in proper structure to feed into chart
     */

    const max = [];
    json.daily.forEach((i, index) => {
        max.push({
            x: new Date((i.dt * 1000) - 46800000),
            y: Math.floor(i.temp.max),
            indexLabel:
                index == highest
                    ? `↑ Mayor •(${Math.floor(i.temp.max)}ºC)•`
                    : `${Math.floor(i.temp.max)}ºC`,
        });
    });
    console.log(max)
    return max;
}

const formatMinData = (json, lowest) => {

    /**
     * @function Format data in proper structure to feed into chart
     */

    const min = [];
    json.daily.forEach((i, index) => {
        min.push({
            x: new Date((i.dt * 1000) - 46800000),
            y: Math.floor(i.temp.min),
            indexLabel:
                index == lowest
                    ? `↓ Menor •(${Math.floor(i.temp.min)}ºC)•`
                    : `${Math.floor(i.temp.min)}ºC`,
        });
    });
    console.log(min)
    return min;
}

const fetchData = async () => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=25.6667&lon=-100.3167&units=metric&appid=${apiKey}`
    );
    const json = await response.json();

    // Get highest temperature and then format the data
    const highest = getHighest(json);
    const max = formatMaxData(json, highest);

    // Get lowest temperature and then format the data
    const lowest = getLowest(json);
    const min = formatMinData(json, lowest);
    
    return {
        max,
        min,
    };
};

(async () => {
    const { min, max } = await fetchData();

    let chart = new CanvasJS.Chart('chart', {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: 'Pronóstico 8 Días',
        },
        axisX: {
            valueFormatString: 'DD MMM,YYYY',
            labelAngle: -30,
            labelPlacement: 'outside',
            labelTextAlign: 'left',
        },
        axisY: {
            title: 'Temperatura',
            suffix: ' °C',
            minimum: 18,
            maximum: 40,
            interval: 2,
        },
        data: [
            {
                name: 'Mínimas',
                type: 'line',
                yValueFormatString: '#0.## °C',
                showInLegend: true,
                indexLabelWrap: true,
                indexLabelMaxWidth: 80,
                dataPoints: min,
            },
            {
                name: 'Máximas',
                type: 'line',
                yValueFormatString: '#0.## °C',
                showInLegend: true,
                indexLabelWrap: true,
                indexLabelMaxWidth: 80,
                dataPoints: max,
            },
        ],
    });

    chart.render();
})();
