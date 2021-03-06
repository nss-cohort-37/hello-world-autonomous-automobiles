const LandmarkComponent = (landmark) => {
    return `
    
        <div class="landmark__name">${landmark.landmark}</div>
        <button id="button--${landmark.landmark.replace(/\s/g, '')}">Learn More!</button>

        <dialog class="dialog--landmark" id="details--${landmark.landmark}">
        <div>Location: ${landmark.city}</div>
        <img src="${landmark.imgUrl}" class="dialog__img"></img>

        <button class="close__dialog">Close Dialog</button>
        </dialog>
   `
}

export default LandmarkComponent