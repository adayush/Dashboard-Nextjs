import { PieChart } from "./PieChart";

export function TopProducts({ data }) {
  const bgColors = ["#98D89E", "#EE8484", "#F6DC7D", "#DEE0EF"];
  let total = 0
  let products = data.reduce((products, item) => {
    total += 1
    if (products[`${item.product}`]) {
      products[item.product] += 1;
    } else {
      products[item.product] = 1;
    }
    return products;
  }, {});
  products = Object.entries(products);

  return (
    <div className="bg-white rounded-2xl p-6 px-8">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">Top Products</h3>
        <p className="text-gray-500 text-sm">May - June 2023</p>
      </div>
      <br />
      <div className="grid grid-cols-2 gap-5 align-middle">
        <PieChart chartData={products} bgColors={bgColors} />
        <div className="flex flex-col gap-2 [&>div]:flex [&>div]:gap-3 [&>div]:items-baseline">
          {products.map((product, i) => (
            <div key={i}>
              <div className={`rounded-full w-3 h-3 bg-[${bgColors[i]}]`}></div>
              <div>
                <p className="font-semibold text-sm">{product[0]}</p>
                <p>{parseInt(product[1]/total*100)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
