import Cover from '../components/Cover'
import {
	PageMainContainer,
	PageContentContainer,
} from '../components/Containers'
import ExploreBlogCategories from '../components/ExploreBlogCategory'

const HomePage = ({ text }) => {
	return (
		<PageMainContainer>
			<Cover
				src={`${process.env.NEXT_PUBLIC_STATIC_URL}/cover/home.jpg`}
				text={text.cover}
			/>
			<PageContentContainer>
				<ExploreBlogCategories text={text} />
			</PageContentContainer>
		</PageMainContainer>
	)
}

export default HomePage
