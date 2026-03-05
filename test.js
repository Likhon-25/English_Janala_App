
const createElements = (arr) =>{
const htmlElemtnst = arr.map(el => `<span class="btn>${el}</span>`);
console.log(htmlElemtnst.join(" "));
}

const synoyms=["hello", "hi", "Konnichiwa"];
createElements(synoyms)