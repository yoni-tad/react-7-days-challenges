export default function Filter(props) {
  return (
    <div className="p-4 bg-pink-100 rounded-xl w-full mb-4">
      <p className="text-2xl mb-2 font-bold text-center">Filter</p>
      <div className="py-2 flex justify-center items-center gap-8">
        <div className="">
          <p className="mb-2 text-center font-bold">Price</p>
          <div className="flex gap-4">
            <input
              type="number"
              name="minPrice"
              placeholder="min"
              min={"1"}
              className="border px-4 py-1 rounded-lg w-20"
              onChange={props.handleChange}
            />
            <input
              type="number"
              name="maxPrice"
              min={"1"}
              placeholder="max"
              className="border px-4 py-1 rounded-lg w-20"
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="">
          <p className="mb-2 text-center font-bold">Category</p>
          <select
            name="category"
            onChange={props.handleChange}
            className="border rounded px-4 py-1 w-40"
          >
            <option value="all">All</option>
            {props.products
              .filter(
                (product, index, self) =>
                  self.findIndex((p) => p.category === product.category) ===
                  index
              )
              .map((item) => (
                <option key={item.id} value={item.category}>
                  {item.category}
                </option>
              ))}
          </select>
        </div>
        <div className="">
          <p className="mb-2 text-center font-bold">Rate</p>
          <div className="flex gap-4">
            <input
              type="number"
              name="rate"
              max={"5"}
              min={"1"}
              placeholder="rate"
              className="border px-4 py-1 rounded-lg w-20"
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
