import format from "date-fns/format";
import clockIcon from '../../../assets/icons/clock.svg';
import chevronLeft from '../../../assets/icons/chevron-left.svg';
import chevronRight from '../../../assets/icons/chevron-right.svg';
import { createIcon } from "../iconGenerator";

export function createForecastWidget(data, scale) {
    const widget = document.createElement('div');
    widget.classList.add('widget', 'forecast-widget')

    widget.append(
        createHeader(),
        createHourlyView(),
        createDailyView()
    );

    function createHeader() {
        const header = document.createElement('div');
        const icon = header.appendChild(document.createElement('img'));
        const title = header.appendChild(document.createElement('h4'));
        const hourlyBtn = header.appendChild(document.createElement('button'));
        const dailyBtn = header.appendChild(document.createElement('button'));

        header.className = 'widget-header';
        hourlyBtn.classList.add('hourly-btn', 'active'); //hmmm
        dailyBtn.className = 'daily-btn';

        icon.src = clockIcon;
        title.textContent = 'Forecast:';
        hourlyBtn.textContent = 'Hourly';
        dailyBtn.textContent = 'Daily';

        return header;
    }

    function createHourlyView() {
        const view = document.createElement('div');
        const leftArrowBtn = view.appendChild(document.createElement('button'));
        const carouselFrame = view.appendChild(document.createElement('div'));
        const rightArrowBtn = view.appendChild(document.createElement('button'));
        const leftArrowIcon = leftArrowBtn.appendChild(document.createElement('img'));
        const rightArrowIcon = rightArrowBtn.appendChild(document.createElement('img'));
    
        view.classList.add('hourly-view', 'active');
        leftArrowBtn.className = 'left-arrow';
        carouselFrame.className = 'carousel-frame';
        rightArrowBtn.className = 'right-arrow';
    
        leftArrowIcon.src = chevronLeft;
        rightArrowIcon.src = chevronRight; 

        createHourlyCarousel();
        carouselFrame.firstChild.style.opacity = '1';

        function createHourlyCarousel() {
            let hourIndex = 0;
            for (let i = 0; i < 4; i++) {
                const slide = carouselFrame.appendChild(document.createElement('div'));
                slide.className = 'carousel-slide';
        
                for (let j = 0; j < 6; j++) {
                    const hourItem = slide.appendChild(document.createElement('div'));
                    const hour = hourItem.appendChild(document.createElement('h5'));
                    const icon = hourItem.appendChild(createIcon(data.forecast.forecastday[0].hour[hourIndex].condition.code));
                    const temp = hourItem.appendChild(document.createElement('div'));
        
                    hourItem.className = 'hour-item';
                    hour.className = 'hour';
                    temp.className = 'temp';
        
                    hour.textContent = format(new Date(data.forecast.forecastday[0].hour[hourIndex].time), 'ha');
                    temp.textContent = Math.round(data.forecast.forecastday[0].hour[hourIndex][scale === 'c' ? "temp_c" : "temp_f"]) + '°';
                    
                    hourIndex++;
                }
            }
        };
        
        return view;
    }
    
    function createDailyView() {
        const view = document.createElement('div');
        view.className = 'daily-view';
    
        for (let i = 1; i < 4; i++) {
            const dayData = data.forecast.forecastday[i];
            const hTemp = Math.round(dayData.day[scale === 'c' ? "maxtemp_c" : "maxtemp_f"]);
            const lTemp = Math.round(dayData.day[scale === 'c' ? "mintemp_c" : "mintemp_f"]);

            const dayItem = view.appendChild(document.createElement('div'));
            const title = dayItem.appendChild(document.createElement('h5'));
            const icon = dayItem.appendChild(createIcon(dayData.day.condition.code));
            const highLow = dayItem.appendChild(document.createElement('div'));

            highLow.className = 'high-low';
            
            title.textContent = format(new Date(dayData.date), 'iii');
            highLow.textContent = `H: ${hTemp}° L: ${lTemp}°`;
        }
    
        return view;
    }

    return widget;
}

 function moveToSlide(currentSlide, targetSlide) {
    currentSlide.style.opacity = '0';
    setTimeout(function() {
        targetSlide.style.opacity = '1';
    }, 200)
}

export function moveToNextSlide() {
    const slides = [ ...document.querySelectorAll('.carousel-slide') ];
    const currentSlide = slides.find(item => item.style.opacity === '1');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(currentSlide, nextSlide);
}

export function moveToPreviousSlide() {
    const slides = [ ...document.querySelectorAll('.carousel-slide') ];
    const currentSlide = slides.find(slide => slide.style.opacity === '1');
    const previousSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(currentSlide, previousSlide);
}

function toggleForecastView(currentView, targetView, currentBtn, targetBtn) {
    if (currentView.classList.contains('active')) {
        setTimeout(function() {
            targetView.classList.add('active');
        }, 200);
        currentView.classList.remove('active');
        targetBtn.classList.add('active');
        currentBtn.classList.remove('active');
    }
}

export function toggleHourlyView() {
    const hourlyView = document.querySelector('.hourly-view');
    const dailyView = document.querySelector('.daily-view');
    const hourlyBtn = document.querySelector('.hourly-btn');
    const dailyBtn = document.querySelector('.daily-btn');

    toggleForecastView(dailyView, hourlyView, dailyBtn, hourlyBtn);
}

export function toggleDailyView() {
    const hourlyView = document.querySelector('.hourly-view');
    const dailyView = document.querySelector('.daily-view');
    const hourlyBtn = document.querySelector('.hourly-btn');
    const dailyBtn = document.querySelector('.daily-btn');

    toggleForecastView(hourlyView, dailyView, hourlyBtn, dailyBtn);
}
