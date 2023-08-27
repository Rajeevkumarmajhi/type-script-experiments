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
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ 'name': "Neymar", 'age': 31 });
console.log(docOne);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 43,
    resourceType: ResourceType.AUTHOR,
    data: "World wide web",
};
const docFour = {
    uid: 34,
    resourceType: ResourceType.FILM,
    data: ["one", "two"]
};
// Tuples
let arr = ['ryu', 25, true];
arr[0] = true;
arr[1] = 'hari';
arr[2] = false;
// Above code is just array with 3 diffrent types of data and can be enterchanged
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 45;
tup[2] = false;
// Above code only allows string in index 0 , number in index 1 and boolean in index 3
let student;
student = ["Rajeev", 9800930444];
