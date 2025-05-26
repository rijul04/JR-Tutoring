import { Star, StarHalf, StarOff } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3 && rating % 1 < 0.8;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500">
      {Array(full)
        .fill(0)
        .map((_, i) => (
          <Star
            key={`full-${i}`}
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4"
          />
        ))}

      {hasHalf && (
        <StarHalf
          key="half"
          fill="currentColor"
          stroke="currentColor"
          className="w-4 h-4"
        />
      )}

      {Array(empty)
        .fill(0)
        .map((_, i) => (
          <StarOff key={`empty-${i}`} className="w-4 h-4" />
        ))}
    </div>
  );
}
