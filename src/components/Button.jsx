import React from 'react'
import people from '../assets/images/people.svg'

const Button = ({text}) => {
  return (
		<div className='nav-items'>
			<img className='people' src={people} alt="" />
			<p>{text}</p>
		</div>
	);
}

export default Button