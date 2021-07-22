import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const useScrolledDirection = function ({ boundary }) {
	const [scrollY, setScrollY] = useState(0)
	const [scrolled, setScrolled] = useState(false)
	useEffect(() => {
		const scrollListener = (e) => {
			setScrolled(checkScrolled({ boundary, scrollY }))
			setScrollY(window.scrollY)
		}
		const throttledScrollListener = throttle(scrollListener, 100, {
			leading: true,
			trailing: true,
		})
		window.addEventListener('scroll', throttledScrollListener)
		return () =>
			window.removeEventListener('scroll', throttledScrollListener)
	})
	return { scrollY, scrolled }
}

const checkScrolled = ({ boundary, scrollY }) => {
	if (window.scrollY === 0) {
		return false
	} else if (window.scrollY > boundary && window.scrollY > scrollY) {
		return true
	} else {
		return false
	}
}

export default useScrolledDirection
