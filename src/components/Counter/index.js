import { useEffect, useState } from "react";

const Counter = () => {
  const [views, setViews] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch(
          "https://api.countapi.xyz/hit/gagan-portfolio-2025/views",
          { cache: "no-store" }
        );

        const data = await res.json();
        setViews(data.value);
      } catch (err) {
        console.error("View counter error:", err);
        setError(true);
      }
    };

    fetchViews();
  }, []);

  if (error) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "18px",
        right: "24px",
        fontSize: "13px",
        fontWeight: "600",
        color: "white",
        opacity: 0.85,
        zIndex: 9999, // 🔑 IMPORTANT
      }}
    >
      👀 {views} views
    </div>
  );
};

export default Counter;
