import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import {Container} from 'react-bootstrap'
import { SiMicrosoftoutlook } from "react-icons/si";


import React from 'react'
import styled from 'styled-components'

const Social = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 50vh;
	padding: 5px;
`

const SocialIcons = styled.div`
	display: flex;
	width: 100%;
`

const CustomLink = styled.a`
	display: block;
	color: inherit;
	text-decoration: none;
	&:hover {
		color: inherit;
		text-decoration: none;
	}
`

const Icon = styled.div`
	flex: 1;
	text-align: center;
	margin-bottom: 20px;
	padding: 20px;
	background-color: #ebf2fa;
	border-radius: 11px;
	cursor: pointer;
	vertical-align: middle;
	background: #d6249f;
	${(props) => {
		if (props.label === 'instagram') {
			return 'background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);'
		} else if (props.label === 'github') {
			return 'background: linear-gradient(to top, #7dbbe6 0%,#00acee 100%); margin-right: 20px;'
		} else if (props.label === 'linkedin') {
			return 'background: linear-gradient(to top, #0e76a8 0%,#00acee 100%);'
		}
	}}
	box-shadow: 0px 3px 10px rgba(0,0,0,.25);
	color: #fff;
	& svg {
		flex: 1;
		height: 50px;
	}
`

function SocialModal() {
	return (
		<Social>
			<Container>
				<SocialIcons>
					<Icon label='github'>
						<AiOutlineGithub size={35} />
						<CustomLink href='https://github.com/KarthikSaladi047' target='_blank'>
							@KarthikSaladi0470
						</CustomLink>
					</Icon>
					<Icon label='linkedin'>
						<AiOutlineLinkedin size={35} />
						<CustomLink
							href='https://www.linkedin.com/in/sai-sampath-karthik-saladi-76a42a259/'
							target='_blank'
						>
							@KarthikSaladi
						</CustomLink>
					</Icon>
				</SocialIcons>
				<SocialIcons>
					<Icon label='github'>
						<SiMicrosoftoutlook size={35} />
						<CustomLink target='_blank'>
							karthiksaladidevops@outlook.com
						</CustomLink>
					</Icon>
				</SocialIcons>
			</Container>
		</Social>
	)
}

export default SocialModal