import { useState, useEffect } from 'react'

const useWindow = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		const listener = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
    window.addEventListener('resize', listener)
    if (!width) {
      listener()
    }
		return () => window.removeEventListener('resize', listener)
	},[])
	return { width, height }
}

export default useWindow