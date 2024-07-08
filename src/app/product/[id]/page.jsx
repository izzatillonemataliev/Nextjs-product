import Link from "next/link";
import { FaPencil } from "react-icons/fa6";

const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products/" + id);
  const data = await request.json();
  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  const { reviews, images, thumbnail } = product;

  const firstReview = reviews.length > 0 ? reviews[0] : null;
  const img = images ? images[0] : null;

  let discount = null;
  if (product.price >= 1) {
    discount = product.price - 1;
  }

  return (
    <div className="grid grid-cols-2 mt-6 gap-8">
      <div className="items-center">
        <Link className="btn btn-second" href="/product">
          Go Home
        </Link>

        <img src={img ? img : thumbnail} alt={product.title} />
      </div>
      <div className="box">
        <h1 className="text-4xl font-bold text-start mb-4">{product.title}</h1>
        <p className="text-semibold text-xl opacity-50 mb-4 tracking-widest">
          {product.category}
        </p>
        <div className="flex gap-8 font-bold text-2xl opacity-75 mb-4">
          <p className={discount !== null ? "line-through text-gray-500" : ""}>
            ${product.price}
          </p>
          {discount !== null && <p className="text-blue-500"> ${discount}</p>}
        </div>
        <h4 className="font-medium text-xl mb-4">{product.description}</h4>
        <div className="rating flex items-center gap-3 font-semibold mb-7">
          {firstReview && (
            <div>
              <p>{firstReview.comment}</p>
            </div>
          )}
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div>
          <div className="flex gap-3 itmes-center mb-2 text-xl font-semibold">
            <FaPencil style={{ color: "blue" }} />
            <h3>DESCRIPTION</h3>
          </div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda{" "}
          <br />
          neque dolore aperiam quasi reprehenderit! Aspernatur magnam culpa{" "}
          <br />
          perspiciatis asperiores corrupti. Officia adipisci sit explicabo{" "}
          <br />
          dignissimos reprehenderit dolore perspiciatis commodi, blanditiis{" "}
          <br />
          odit? Quasi beatae fugit dolor magni ipsum nemo placeat perferendis{" "}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Product;
