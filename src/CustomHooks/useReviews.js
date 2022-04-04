import { useEffect, useState } from "react";

const useReviews = (count) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(0,count)));
  }, []);
  return [reviews, setReviews];
};
export default useReviews;
