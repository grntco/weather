import sunIcon from '../../assets/icons/sun.svg'; 
import cloudIcon from '../../assets/icons/cloud.svg'; 
import cloudDrizzleIcon from '../../assets/icons/cloud-drizzle.svg'; 
import cloudRainIcon from '../../assets/icons/cloud-rain.svg'; 
import cloudLightningIcon from '../../assets/icons/cloud-lightning.svg'; 
import cloudSnowIcon from '../../assets/icons/cloud-snow.svg'; 

export function createIcon(code) {
    let icon = document.createElement('img');

    if (code === 1000) {
        icon.src = sunIcon;
    } else if (code === 1063 || (code >= 1180 && code <= 1201) || (code >= 1240 && code <= 1246) || (code >= 1273 && code <= 1276)) {
        icon.src = cloudRainIcon;
    } else if (code === 1072 || (code >= 1150 && code <= 1171)) {
        icon.src = cloudDrizzleIcon
    } else if ((code >= 1003 && code <= 1030) || (code >= 1135 && code <= 1147)) {
        icon.src = cloudIcon;
    } else if (code === 1087) {
        icon.src = cloudLightningIcon;
    } else {
        icon.src = cloudSnowIcon;
    }

    return icon;
}