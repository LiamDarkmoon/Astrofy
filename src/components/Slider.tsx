"use client"
 
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
 
import { cn } from "@/lib/utils.ts"
 
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "group relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-700">
      <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-700 opacity-100" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 rounded-full border-1 border-white bg-white" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName
 
export { Slider }