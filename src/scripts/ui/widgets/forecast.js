import format from "date-fns/format";

export function createForecastWidget(data, scale) {
    const widget = document.createElement('div');
    widget.classList.add('forecast-widget')

    function createHeader() {
        const header = document.createElement('div');
        const title = header.appendChild(document.createElement('h4'));
        const hourlyBtn = header.appendChild(document.createElement('button'));
        const dailyBtn = header.appendChild(document.createElement('button'));

        header.className = 'forecast-header';

        title.textContent = 'Forecast:';
        hourlyBtn.textContent = 'Hourly';
        dailyBtn.textContent = 'Daily';

        return header;
    }
    
    function createHourlyContainer() {
        const container = document.createElement('div');
        const leftArrow = container.appendChild(document.createElement('button'));
        const carouselFrame = container.appendChild(document.createElement('div'));
        const rightArrow = container.appendChild(document.createElement('button'));

        container.className = 'hourly-container';
        leftArrow.className = 'left-arrow';
        carouselFrame.className = 'carousel-frame';
        rightArrow.className = 'right-arrow';

        leftArrow.textContent = '<';
        rightArrow.textContent = '>';

        let hourIndex = 0;
        for (let i = 0; i < 4; i++) {
            const carouselItem = carouselFrame.appendChild(document.createElement('div'));
            carouselItem.className = 'carousel-item';

            for (let j = 0; j < 6; j++) {
                const hourContainer = carouselItem.appendChild(document.createElement('div'));

                const hour = hourContainer.appendChild(document.createElement('h5'));
                // const icon = hourContainer.appendChild(document.createElement('img'));
                const temp = hourContainer.appendChild(document.createElement('div'));

                hourContainer.className = 'hour-container';
                hour.className = 'hour';
                temp.className = 'temp';

                hour.textContent = format(new Date(data.forecast.forecastday[0].hour[hourIndex].time), 'ha');
                temp.textContent = Math.round(data.forecast.forecastday[0].hour[hourIndex][scale === 'c' ? "temp_c" : "temp_f"]) + '°';
                
                hourIndex++;
            }
        }

        carouselFrame.firstChild.style.opacity = '1';

        return container;
    }
    
    function createDailyContainer() {
        const container = document.createElement('div');
        container.className = 'daily-container';

        for (let i = 1; i < 4; i++) {
            const gridItem = container.appendChild(document.createElement('div'));
            const day = gridItem.appendChild(document.createElement('div'));
            // const icon = gridItem.appendChild(document.createElement('img'));
            const highLow = gridItem.appendChild(document.createElement('div'));
            const dayData = data.forecast.forecastday[i];
            const hTemp = Math.round(dayData.day[scale === 'c' ? "maxtemp_c" : "maxtemp_f"]);
            const lTemp = Math.round(dayData.day[scale === 'c' ? "mintemp_c" : "mintemp_f"]);
    

            day.textContent = format(new Date(dayData.date), 'iii');
            highLow.textContent = `H: ${hTemp}° L: ${lTemp}°`;
        }

        return container;
    }


    widget.append(
        createHeader(),
        createHourlyContainer()
    );


    return widget;
}

export function goToNextSlide() {
    const slides = [ ...document.querySelectorAll('.carousel-item') ];
    const currentSlide = [ ...document.querySelectorAll('.carousel-item') ].find(item => item.style.opacity === '1');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    currentSlide.style.opacity = '0';
    nextSlide.style.opacity = '1';
}

export function goToPreviousSlide() {
    const slides = [ ...document.querySelectorAll('.carousel-item') ];
    const currentSlide = slides.find(slide => slide.style.opacity === '1');
    const previousSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    currentSlide.style.opacity = '0';
    previousSlide.style.opacity = '1';
}
