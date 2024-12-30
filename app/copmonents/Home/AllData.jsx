import Link from "next/link";

const AllData = ({ data }) => {
  // Check if data is undefined or null
  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-6 gap-4 mt-6">
      {data.map((item) => (
        <Link key={item.id} href="/products" >
          <div className="w-full relative cursor-pointer">
            <img src={item.img} alt={item.name} className="w-full h-auto" />
            <h4 className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl bg-white px-4 py-1 w-40 text-center font-medium text-sm">
              {item.name}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllData;
