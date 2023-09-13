import format from "date-fns/format";
import clockIcon from '../../../assets/icons/clock.svg';
import chevronLeft from '../../../assets/icons/chevron-left.svg';
import chevronRight from '../../../assets/icons/chevron-right.svg';
import { createIcon } from "../iconGenerator";

export function createForecastWidget(data, scale) {
    const widget = document.createElement('div');
    widget.classList.add('forecast-widget')

    function createHeader() {
        const header = document.createElement('div');
        const icon = header.appendChild(document.createElement('img'));
        const title = header.appendChild(document.createElement('h4'));
        const hourlyBtn = header.appendChild(document.createElement('button'));
        const dailyBtn = header.appendChild(document.createElement('button'));

        header.className = 'widget-header';
        hourlyBtn.className = 'hourly-btn';
        dailyBtn.className = 'daily-btn';

        icon.src = clockIcon;
        title.textContent = 'Forecast:';
        hourlyBtn.textContent = 'Hourly';
        dailyBtn.textContent = 'Daily';

        return header;
    }

    function createHourlyContainer() {
        const container = document.createElement('div');
        const leftArrowBtn = container.appendChild(document.createElement('button'));
        const carouselFrame = container.appendChild(document.createElement('div'));
        const rightArrowBtn = container.appendChild(document.createElement('button'));
        const leftArrowIcon = leftArrowBtn.appendChild(document.createElement('img'));
        const rightArrowIcon = rightArrowBtn.appendChild(document.createElement('img'));
    
        container.className = 'hourly-container';
        leftArrowBtn.className = 'left-arrow';
        carouselFrame.className = 'carousel-frame';
        rightArrowBtn.className = 'right-arrow';
    
        leftArrowIcon.src = chevronLeft;
        rightArrowIcon.src = chevronRight;
    
        let hourIndex = 0;
        for (let i = 0; i < 4; i++) {
            const carouselItem = carouselFrame.appendChild(document.createElement('div'));
            carouselItem.className = 'carousel-item';
    
            for (let j = 0; j < 6; j++) {
                const hourContainer = carouselItem.appendChild(document.createElement('div'));
    
                const hour = hourContainer.appendChild(document.createElement('h5'));
                const icon = hourContainer.appendChild(createIcon(data.forecast.forecastday[0].hour[hourIndex].condition.text));
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

 function moveToSlide(currentSlide, targetSlide) {
    currentSlide.style.opacity = '0';
    setTimeout(function() {
        targetSlide.style.opacity = '1';
    }, 200)
}

export function moveToNextSlide() {
    const slides = [ ...document.querySelectorAll('.carousel-item') ];
    const currentSlide = slides.find(item => item.style.opacity === '1');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(currentSlide, nextSlide);
}

export function moveToPreviousSlide() {
    const slides = [ ...document.querySelectorAll('.carousel-item') ];
    const currentSlide = slides.find(slide => slide.style.opacity === '1');
    const previousSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(currentSlide, previousSlide);
}
