import React, { useState, useLayoutEffect } from 'react';
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target: React.RefObject<HTMLElement>) => {
    const [size, setSize] = useState<DOMRect>()
  
    useLayoutEffect(() => {
      setSize(target.current?.getBoundingClientRect())
    }, [target])
  
    // Where the magic happens
    useResizeObserver(target, (entry) => {
      setSize(entry.contentRect)
      })
    return size
}

export default useSize