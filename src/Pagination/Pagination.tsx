export const Pagination = () => {
 
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = posts.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const handleClick = (page: number) => {
   
    if (page >= 1 && page <= totalPages) {
    
      setCurrentPage(page);
   
    }
  };

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>

      {currentItems.map((item:any) => (
        <li key={item.id}>{item.title}</li>
      ))}

      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        Prev
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </button>
 
    </div>
  );
};
