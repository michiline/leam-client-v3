import {
	ExploreBlogCategoryCardContainer,
	ExploreBlogCategoryContainer,
} from './Containers'
import BlogCategoryCard from './BlogCategoryCard'
import { H2 } from '../Text'

const ExploreBlogCategory = ({ text }) => {
	const { h2, categories } = text.exploreBlogCategory
	return (
		<ExploreBlogCategoryContainer>
			<H2 marginTop={6}>{h2}</H2>
			<ExploreBlogCategoryCardContainer>
				{categories.map((elem, index) => {
					return <BlogCategoryCard {...elem} key={index} />
				})}
			</ExploreBlogCategoryCardContainer>
		</ExploreBlogCategoryContainer>
	)
}

export default ExploreBlogCategory
