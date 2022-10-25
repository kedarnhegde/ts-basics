let sales = 123_456_789;

let course: string = 'TypeScript';
let is_published: boolean = true;
let level;


let numbers: number[] = [1, 2, 3];

function calculateTax(income: number, taxYear = 2012): number {

    if (taxYear < 2022)
        return income * 1.2;
    return 0;
}



calculateTax(10000, 2022);
calculateTax(10000);


// Objects

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee =
{
    id: 1,
    name: 'NA',
    retire: (date: Date) => {
        console.log(date);

    }
};
employee.name = 'KH';



// Union 

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }

}

kgToLbs(10);
kgToLbs('10KG');


// Intersection

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// Literal

type Quantity = 50 | 100;

let quantity: Quantity = 100; // quantity can only take 50/100


// Nullable

function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
        
}

greet(undefined);



// Optional Changing

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

console.log(customer?.birthday?.getFullYear());


let customers: number[] = [1,2,3,4];

console.log(customers?.[0]);


let log: any = null;

log?.('a');
 
