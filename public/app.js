import { Invoice } from "./Modules/Invoice.js";
import { ListTemplate } from "./Modules/ListTemplate.js";
import { Payment } from "./Modules/Payment.js";
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
// Input Elements
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ 'name': "Neymar", 'age': 31 });
console.log(docOne);
const docThree = {
    uid: 43,
    resourceName: "Person",
    data: "World wide web",
};
const docFour = {
    uid: 34,
    resourceName: "array",
    data: ["one", "two"]
};
