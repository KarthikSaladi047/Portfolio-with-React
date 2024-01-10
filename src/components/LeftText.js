import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ProfilePic from '../assets/Image/pic.png';

function LeftText() {
	return (
		<div className='leftText'>
			<div className='flex-fix'>
				<div className="portfolio-container">
					<div className="text-content">
						<h2>Hi, I am</h2>
						<h1 className='name_big'>KarthiK Saladi</h1>
						<p className='animated_text'>
					<TypeAnimation
						sequence={[
							'I am a Cloud Support Engineer',
							1000, 
							'I also love Web Development',
							1000,
							'I am a Critical Thinker',
							1000,
							'I am a Cloud & DevOps Enthusiast',
							1000
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
						/>
				</p>
					</div>
					<img src={ProfilePic} alt="Karthik Saladi" className="rounded-image" />
				</div>
				<br></br>
				<div className='left_about'>
					<span>I am a skilled and motivated</span> <b className='left_b'>Cloud Support Engineer 💼</b>  <span>with a strong Cloud and DevOps background.</span> 
					<br></br>
					<br></br>
					<h5> My passion lies in collaboration 🤝 and driving efficiency. I have expertise in a range of tools and technologies, including Azure DevOps, Linux, K8s, Ansible, Terraform, Openstack, Prometheus, Multiple Clouds - AWS, Azure, GCP & OCI. ☁️ </h5>
					<h5>I'm adept in Cloud & DevOps and passionate about React JS for web development. Additionally, I love sharing insights through blogging, particularly about Cloud and DevOps. It's a way for me to contribute to these domains while continually learning and growing.</h5>
				</div>
			</div>
		</div>
	)
}

export default LeftText