import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./Modules/Invoice.js";
import { ListTemplate } from "./Modules/ListTemplate.js";
import { Payment } from "./Modules/Payment.js";

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Input Elements
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value, details.value,amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value , 'end');

});

const addUID = <T extends {name:string} >(obj : T ) =>{
    let uid = Math.floor(Math.random() * 100 );
    return {...obj, uid} ;
}

let docOne = addUID({'name':"Neymar", 'age':31});
console.log(docOne);

// Enums
enum ResourceType { BOOK, AUTHOR, FILM , DIRECTOR, PERSON }
// Note Enum can help to replace number with name but actually they are number values when console logged.

// Generics Examples

interface Resource <T> {
    uid: number,
    resourceType : ResourceType,
    data : T,
}

const docThree : Resource<string> = {
    uid: 43,
    resourceType : ResourceType.AUTHOR,
    data : "World wide web",
}

const docFour : Resource <string[] > = {
    uid:34,
    resourceType: ResourceType.FILM,
    data : [ "one","two" ]
}

// Tuples

