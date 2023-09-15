import sunIcon from '../../assets/icons/sun.svg'; 
import cloudIcon from '../../assets/icons/cloud.svg'; 
import cloudDrizzleIcon from '../../assets/icons/cloud-drizzle.svg'; 
import cloudRainIcon from '../../assets/icons/cloud-rain.svg'; 
import cloudLightningIcon from '../../assets/icons/cloud-lightning.svg'; 
import cloudSnowIcon from '../../assets/icons/cloud-snow.svg'; 

export function createIcon(code) {
    let icon = document.createElement('img');
    // condition = condition.toLowerCase();

    // if (condition.includes('storm') || condition.includes('lightning') || condition.includes('thunder') || condition.includes('thundry')) {
    //     icon.src = cloudLightningIcon;
    // } else if (condition.includes('drizzle')) {
    //     icon.src = cloudDrizzleIcon;
    // } else if (condition.includes('rain')) {
    //     icon.src = cloudRainIcon;
    // } else if (condition.includes('snow')) {
    //     icon.src = cloudSnowIcon;
    // } else if (condition.includes('cloud') || (condition.includes('overcast'))) {
    //     icon.src = cloudIcon;
    // } else {
    //     icon.src = sunIcon;
    // }

// } else if (code === 1066 || (code >= 1114 && code <= 1117) || (code >= 1210 && code <= 1225) || (code >= 1250 && code <= 1258) || (code >= 1279 && code <= 1282)) {
//     icon.src = cloudSnowIcon;

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