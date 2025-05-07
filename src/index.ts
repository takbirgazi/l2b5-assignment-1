
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
        return input.toLocaleUpperCase();
    } else {
        return input.toLocaleLowerCase();
    }
}
const textTransformation = formatString("Hello", false);
console.log(textTransformation);


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const mostRatingBooks = filterByRating(books);
console.log(mostRatingBooks);


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const firstArray = new Array();
    const newArray = firstArray.concat(...arrays);
    return newArray;
}
const singleArrayFromMultipleArray = concatenateArrays<string>(["a", "b"], ["c"]);
console.log(singleArrayFromMultipleArray);


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());


function processValue(value: string | number): number {
    if (typeof value === "number") {
        return value * 2;
    } else {
        return value.length;
    }
}

const changeInputToNumber = processValue("hello");
console.log(changeInputToNumber);


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length > 0) {
        return products.reduce((current, products) => products.price > current.price ? products : current);
    }
    return null;
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const highCostProduct = getMostExpensiveProduct(products);
console.log(highCostProduct);


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return `Weekend`
    } else {
        return `Weekday`
    }
}

const getWeekend = getDayType(Day.Monday)
console.log(getWeekend);


async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw Error('Negative number not allowed');
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);