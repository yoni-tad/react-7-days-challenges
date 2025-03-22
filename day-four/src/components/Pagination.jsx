export default function Pagination(props) {
  const paginationNum = [];

  for (let i = 1; i <= Math.ceil(props.length / props.postPerPage); i++) {
    paginationNum.push(i);
  }
  return (
    <div className="flex justify-center items-center">
      {paginationNum.map((pageNum, index) => {
        return <button key={index} onClick={() => props.handlePagination(pageNum)} className={props.currentPage == pageNum ? "bg-pink-600 text-white py-2 px-4 mx-2 rounded-xl" : "bg-pink-400 text-white py-2 px-4 mx-2 rounded-xl"}>{pageNum}</button>;
      })}
    </div>
  );
}
