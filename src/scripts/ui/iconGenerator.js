import sunIcon from '../../assets/icons/sun.svg'; 
import cloudIcon from '../../assets/icons/cloud.svg'; 
import cloudDrizzleIcon from '../../assets/icons/cloud-drizzle.svg'; 
import cloudRainIcon from '../../assets/icons/cloud-rain.svg'; 
import cloudLightningIcon from '../../assets/icons/cloud-lightning.svg'; 
import cloudSnowIcon from '../../assets/icons/cloud-snow.svg'; 

export function createIcon(condition) {
    let icon = document.createElement('img');
    condition = condition.toLowerCase();

    if (condition.includes('storm') || condition.includes('lightning') || condition.includes('thunder') || condition.includes('thundry')) {
        icon.src = cloudLightningIcon;
    } else if (condition.includes('drizzle')) {
        icon.src = cloudDrizzleIcon;
    } else if (condition.includes('rain')) {
        icon.src = cloudRainIcon;
    } else if (condition.includes('snow')) {
        icon.src = cloudSnowIcon;
    } else if (condition.includes('cloud') || (condition.includes('overcast'))) {
        icon.src = cloudIcon;
    } else {
        icon.src = sunIcon;
    }

    return icon;
}