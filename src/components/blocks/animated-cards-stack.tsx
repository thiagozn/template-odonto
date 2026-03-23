"use client" 

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/lib/utils"

const cardVariants = cva("absolute will-change-transform origin-bottom", {
  variants: {
    variant: {
      dark: "flex size-full flex-col items-center justify-center gap-6 rounded-2xl border border-stone-700/50 bg-accent-foreground/80 p-6 backdrop-blur-md",
      light:
        "flex size-full flex-col items-center justify-center gap-6 rounded-2xl border  bg-accent bg-background/80 p-6 backdrop-blur-md ",
    },
  },
  defaultVariants: {
    variant: "light",
  },
})

interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  maxRating?: number
}

interface CardStickyProps
  extends HTMLMotionProps<"div">,
    VariantProps<typeof cardVariants> {
  arrayLength: number
  index: number
  isActive?: boolean
  onSwipe?: () => void
}

export const CardsContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("relative mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  )
}
CardsContainer.displayName = "CardsContainer"

export const CardTransformed = React.forwardRef<
  HTMLDivElement,
  CardStickyProps
>(
  (
    {
      arrayLength,
      index,
      isActive = false,
      onSwipe,
      className,
      variant,
      style,
      ...props
    },
    ref
  ) => {

    const handleDragEnd = (event: any, info: any) => {
      if (isActive && info.offset.x < -100) {
        if (onSwipe) onSwipe()
      }
    }

    const yOffset = index * 18;
    const scaleVal = 1 - index * 0.05;
    const opacityVal = 1 - index * 0.15;
    const rotateVal = index === 0 ? 0 : index % 2 === 0 ? 2 : -2;

    return (
      <motion.div
        ref={ref}
        style={{
          zIndex: arrayLength - index,
          ...style,
        }}
        initial={{ x: 0, y: yOffset, scale: scaleVal, opacity: opacityVal, rotate: rotateVal }}
        animate={{
          x: 0,
          y: yOffset,
          scale: scaleVal,
          opacity: opacityVal,
          rotate: rotateVal,
        }}
        exit={{ x: -1000, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        drag={isActive ? "x" : false}
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        className={cn("left-0 right-0 mx-auto", cardVariants({ variant, className }), isActive ? "cursor-grab active:cursor-grabbing" : "")}
        {...props}
      />
    )
  }
)
CardTransformed.displayName = "CardTransformed"

export const ReviewStars = React.forwardRef<HTMLDivElement, ReviewProps>(
  ({ rating, maxRating = 5, className, ...props }, ref) => {
    const filledStars = Math.floor(rating)
    const fractionalPart = rating - filledStars
    const emptyStars = maxRating - filledStars - (fractionalPart > 0 ? 1 : 0)

    return (
      <div
        className={cn("flex items-center gap-2", className)}
        ref={ref}
        {...props}
      >
        <div className="flex items-center">
          {[...Array(filledStars)].map((_, index) => (
            <svg
              key={`filled-${index}`}
              className="size-4 text-inherit"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
          {fractionalPart > 0 && (
            <svg
              className="size-4 text-inherit"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient id="half">
                  <stop
                    offset={`${fractionalPart * 100}%`}
                    stopColor="currentColor"
                  />
                  <stop
                    offset={`${fractionalPart * 100}%`}
                    stopColor="rgb(209 213 219)"
                  />
                </linearGradient>
              </defs>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"
                fill="url(#half)"
              />
            </svg>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <svg
              key={`empty-${index}`}
              className="size-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
        </div>
        <p className="sr-only">{rating}</p>
      </div>
    )
  }
)
ReviewStars.displayName = "ReviewStars"
