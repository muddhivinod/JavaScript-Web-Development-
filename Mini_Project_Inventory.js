
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) =>
    new Promise((resolve) => rl.question(question, resolve));

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

function getCategory(price) {
    let level;

    if (price < 50) {
        level = 1;
    } else if (price < 200) {
        level = 2;
    } else {
        level = 3;
    }

    switch (level) {
        case 1: return "Budget";
        case 2: return "Standard";
        case 3: return "Premium";
        default: return "Unknown";
    }
}

const calculateFinalValue = (
    total,
    taxRate = 0.10,
    discountRate = 0.05
) => {
    const tax = total * taxRate;
    const discount = total * discountRate;
    return {
        tax,
        discount,
        finalTotal: total + tax - discount
    };
};

async function runInventory() {
    console.log("--- Initializing Inventory System ---");

    const productName = (await ask("Enter new product name: ")).trim();
    const priceInput = await ask("Enter product price: ");
    const productPrice = Number(priceInput);

    if (
        productName === "" ||
        priceInput.trim() === "" ||
        !Number.isFinite(productPrice) ||
        productPrice < 0
    ) {
        console.log("Invalid input. Please enter a product name and a valid non-negative price.");
        rl.close();
        return;
    }

    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach((product) => {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
        );
    });

    let affordableFound = false;

    for (const product of inventory) {
        if (!product.name || !Number.isFinite(product.price)) {
            continue;
        }

        if (product.price < 200) {
            affordableFound = true;
            break;
        }
    }

    if (!affordableFound) {
        console.log("No affordable items found.");
    }

    const totalValue = inventory.reduce(
        (sum, product) => sum + product.price,
        0
    );

    console.log("\n--- Financial Analytics ---");
    console.log(`Total Inventory Value: $${totalValue}`);

    const affordableItems = inventory
        .filter((product) => product.price < 200)
        .map((product) => product.name);

    console.log(
        `Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems)}`
    );

    const report = inventory.map(
        (product) => `${product.name.toUpperCase()}: $${product.price}`
    );

    console.log(`Formatted Report List: ${JSON.stringify(report)}`);

    // Demonstrate custom tax and discount parameters.
    const taxInput = await ask("Enter tax percentage (default 10): ");
    const discountInput = await ask("Enter discount percentage (default 5): ");

    const taxRate = taxInput.trim() === "" ? 10 : Number(taxInput);
    const discountRate =
        discountInput.trim() === "" ? 5 : Number(discountInput);

    if (
        !Number.isFinite(taxRate) ||
        !Number.isFinite(discountRate) ||
        taxRate < 0 ||
        discountRate < 0
    ) {
        console.log("Invalid tax or discount percentage.");
        rl.close();
        return;
    }

    const result = calculateFinalValue(
        totalValue,
        taxRate / 100,
        discountRate / 100
    );

    console.log(`Tax Amount: $${result.tax.toFixed(2)}`);
    console.log(`Discount Amount: $${result.discount.toFixed(2)}`);
    console.log(`Final Value After Tax and Discount: $${result.finalTotal.toFixed(2)}`);

    rl.close();
}

runInventory().catch((error) => {
    console.error("An error occurred:", error.message);
    rl.close();
});
