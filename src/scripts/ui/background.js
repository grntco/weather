import partlyCloudyImage from '../../assets/images/partly-cloudy-sky.jpg';
import overcastImage from '../../assets/images/overcast-sky.jpg';
import sunnySkyImage from '../../assets/images/sunny-sky.jpg';
import rainySkyImage from '../../assets/images/rainy-sky.jpg';

export function updateBackground(data) {
    const body = document.body;
    const condition = data.current.condition.text.toLowerCase();

    body.style.backgroundImage = 'none';
    console.log(condition);

    if (condition.includes('cloudy') || condition.includes('clouds')) {
        body.style.backgroundImage = `url(${partlyCloudyImage})`;
    } else if (condition.includes('rain') || condition.includes('rainy') || condition.includes('snow')) {
        body.style.backgroundImage = `url(${rainySkyImage})`;
    } else if (condition.includes('overcast')) {
        body.style.backgroundImage = `url(${overcastImage})`;
    } else {
        body.style.backgroundImage = `url(${sunnySkyImage})`;
    }
}