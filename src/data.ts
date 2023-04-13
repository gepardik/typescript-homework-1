const sunIcon = require('./assets/icons/sun.svg') as string;
const rainIcon = require('./assets/icons/cloud-rain.svg') as string;
const winterIcon = require('./assets/icons/cloud-snow.svg') as string;
const summerBg = require('./assets/summer-bg.jpg') as string;
const rainyBg = require('./assets/rainy-bg.jpg') as string;
const winterBg = require('./assets/winter-bg.jpg') as string;
const summerSound = require('./assets/sounds/summer.mp3') as string;
const rainSound = require('./assets/sounds/rain.mp3') as string;
const winterSound = require('./assets/sounds/winter.mp3') as string;

export default [
    {
        id: 'autumn',
        icon: rainIcon,
        sound: rainSound,
        background: rainyBg
    },
    {
        id: 'summer',
        icon: sunIcon,
        sound: summerSound,
        background: summerBg
    },
    {
        id: 'winter',
        icon: winterIcon,
        sound: winterSound,
        background: winterBg
    }
]