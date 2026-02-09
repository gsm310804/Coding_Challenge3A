console.log(`Customer-Tracker/ 3A / Mirayda Gurtekin`);

let customers = [
    {name: "Mirayda Gurtekin",
        Email: "Miraydagurtekin@gmail.com",
        Purchases: ["Silver Necklace", "Hoop Earrings", "Charm Bracelet"],
    },
    { name: "Chloe Benschneider",
        Email: "ChloeBenschneider@gmail.com",
        Purchases: ["Silver Ring", "Anklet", "Stud Earrings"],
    },
    { name: "Alex Ortiz",
        Email: "AlexOrtiz@gmail.com",
        Purchases: ["Layered Necklace", "Silver Cufflinks", "Heart Pendant"],
    }
];

customers.push(
    { name: "Carla Benschneider",
        Email: "CarlaBenschneider@gmail.com",
        Purchases: ["Silver Watch", "Dangle Earrings", "Gemstone Bracelet"],

    });
    customers.shift();

    customers.forEach(customer => {
        if(customer.name === "Chloe Benschneider") {
            customer.Email= "ChloeBens@gmail.com";
        }
    });
    customers.forEach(customer => {
        if(customer.name === "Alex Ortiz") {
            customer.Purchases.push("Silver Brooch");

        }
    });
    
    customers.forEach(customer => {
         console.log(`Name: ${customer.name}, Email: ${customer.Email}, Total Purchases: ${customer.Purchases.length}`
            );
    });