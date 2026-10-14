import wynn from "../src/index.js";

const itemName = process.argv[2] ?? "Warp";

const item = await wynn.items.search(itemName);
console.log("Item:");
console.log(item[0]);
