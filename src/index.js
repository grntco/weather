import './styles.css';
import getWeatherData from './scripts/app/getWeatherData';
import createMainView from './scripts/ui/mainView';


getWeatherData('greenville-sc', 'forecast');
createMainView();



