import data from './data'
import './index.scss'

let playingMusicId: string;
const list = document.querySelector('.weather-list') as HTMLUListElement;

const audioElement = new Audio();
audioElement.loop = true;

const volume = document.querySelector('.volume-controller') as HTMLInputElement;
volume!.addEventListener('input', (e) => {
    audioElement.volume = +(e.currentTarget as HTMLInputElement).value / 100;
});

list.addEventListener('click', ({ target }) => {
    const targetId: string | undefined = ((target as HTMLElement).closest('[data-item-id]') as HTMLElement)?.dataset.itemId;
    if (!targetId) return;
    const item = data.find((i) => i.id === targetId);
    if (!item) return;

    if (playingMusicId !== item.id) {
        playingMusicId = item.id;
        audioElement.src = item.sound;
        audioElement.play();
        document.body.style.backgroundImage = `url('${item.background}')`;
        return;
    }

    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});


interface Item {
    id: string
    icon: string
    sound: string
    background: string
}
function renderItem(item: Item) {
    const listItem = document.createElement('li');
    const weatherItem = document.createElement('button');
    const itemIcon = document.createElement('img');

    listItem.classList.add('weather-list__item');
    weatherItem.classList.add('weather-item');
    itemIcon.classList.add('weather-item__icon');

    weatherItem.dataset.itemId = item.id;
    weatherItem.style.backgroundImage = `url('${item.background}')`;
    itemIcon.src = item.icon;

    weatherItem.append(itemIcon);
    listItem.append(weatherItem);
    list.append(listItem);
}

data.forEach(renderItem);
