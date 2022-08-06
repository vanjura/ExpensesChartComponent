import data from "./data.json" assert { type: "json" };

const maxValue = Math.max(...data.map((o) => o.amount));
const baseValue = 150;

for (const item of data) {
  if (item.amount === maxValue) {
    document.getElementById(item.day).style.backgroundColor =
      "hsl(186, 34%, 60%)";
  }
  document.getElementById(item.day).style.height = `${
    (item.amount * baseValue) / maxValue
  }px`;
  document.getElementById(`${item.day}-value`).innerHTML = `$${item.amount}`;
}
