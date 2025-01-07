import lang from './lang.js';

const from = document.getElementById('from-text');
const to = document.getElementById('to-text');
const selectFrom = document.getElementById('sel1');
const selectTo = document.getElementById('sel2'); 
const btn = document.getElementById('btn');


// const translate = async () => {
//     const response = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${inputLang}|${outputLang}`);
//     const data = await response.json();
//     console.log(data);
//     const translatedText = data.responseData.translatedText;
// }

lang.forEach((til) => {
    const option = document.createElement('option');
    option.value = til.code;
    option.textContent = til.name;
    selectFrom.appendChild(option);
});
lang.forEach((til) => {
    const option = document.createElement('option');
    option.value = til.code;
    option.textContent = til.name;
    selectTo.appendChild(option);
});

btn.addEventListener('click', async () => {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${from.value}&langpair=${selectFrom.value}|${selectTo.value}`);
    const data = await response.json();
    // console.log(data);
    to.textContent = data.responseData.translatedText;
});