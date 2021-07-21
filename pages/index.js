import Cover from '../components/Cover'
import { MainContainer } from '../components/Containers'

const HomePage = () => {
	return (
		<MainContainer>
			<Cover
				src={`${process.env.NEXT_PUBLIC_STATIC_URL}/cover/home.jpg`}
				text={coverText}
			/>
		</MainContainer>
	)
}

const coverText = {
	h1: 'LittleEagle&Mich',
	subheading:
		'Putopisne ideje i savjeti za ljude s puno želja a malo vremena.',
	subheadingButton: 'Kreni na avanturu',
}

export default HomePage
