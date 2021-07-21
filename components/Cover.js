import { CoverContainer, CenterContainer } from './Containers'
import { H1, Subheading } from './Text'
import { SubheadingButton } from './Buttons'

const Cover = ({ src, text }) => {
	return (
		<CoverContainer src={src}>
			<CenterContainer>
				<H1>{text.h1}</H1>
				<Subheading marginTop='3'>{text.subheading}</Subheading>
				<SubheadingButton marginTop='3' align='end'>
					{text.subheadingButton}
				</SubheadingButton>
			</CenterContainer>
		</CoverContainer>
	)
}

export default Cover
