import React from "react";
import { Rating } from "../reui/rating";

type RatingStarsProps = {
  rating_number: number;
};

export function RatingStars({ rating_number }: RatingStarsProps) {
  return <Rating rating={rating_number} showValue={true} />;
}