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

    let values : [ string, string, number ];

    values = [ tofrom.value, details.value,amount.valueAsNumber ];

    let doc: HasFormatter;

    if(type.value === "invoice"){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
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

let arr = [ 'ryu',25, true];
arr[0] = true;
arr[1] = 'hari';
arr[2] = false;

// Above code is just array with 3 diffrent types of data and can be enterchanged

let tup : [ string, number, boolean ] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 45;
tup[2] = false;

// Above code only allows string in index 0 , number in index 1 and boolean in index 3

let student : [ string , number ];
student = [ "Rajeev", 9800930444 ];

