import Cover from '../components/Cover'
import {
	PageMainContainer,
	PageContentContainer,
} from '../components/Containers'

const HomePage = ({ text }) => {
	return (
		<PageMainContainer>
			<Cover
				src={`${process.env.NEXT_PUBLIC_STATIC_URL}/cover/home.jpg`}
				text={text.cover}
			/>
			<PageContentContainer></PageContentContainer>
		</PageMainContainer>
	)
}

export default HomePage
