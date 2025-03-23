import { Star } from "lucide-react";

export default function Products(props) {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-gray-100 mb-4 w-90">
      <div className="flex gap-2 items-center justify-end mb-2">
        <Star size={18} fill="yellow" color="yellow"/>
        <p >{props.product.rating.rate}</p>
      </div>
      <div className="flex justify-center">
        <img
          src={props.product.image}
          alt=""
          className="rounded-xl w-70 h-70 p-4 bg-white flex items-center"
        />
      </div>
      <p className="font-bold text-xl pt-4">{props.product.title}</p>
      <div className="flex justify-between">
        <p className="text-start font-bold text-lg py-4 text-pink-400">
          ${props.product.price}
        </p>
        <p className="text-start font-bold text-lg py-4">
          {props.product.category}
        </p>
      </div>
    </div>
  );
}
