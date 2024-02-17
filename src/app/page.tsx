'use client'

import { useState } from 'react'
import Card from './components/Card'

export default function Home() {
	const [annually, setAnnually] = useState<boolean>(true)

	const linearGradient = 'bg-gradient-to-br from-lightBlueGradient to-blueGradient'

	return (
		<main className="flex h-screen flex-col items-center justify-center pt-12 pb-16">
			<div className='flex flex-col items-center text-center pb-2'>
				<h1 className='text-grayishBlue text-3xl font-bold'>Our Pricing</h1>
				<div
					className='flex items-center text-darkGrayishBlue gap-4 my-8 font-bold'
				>
					<p className='text-lightGrayishBlue text-xs'>Annually</p>
					<div
						onClick={() => setAnnually(!annually)}
						className={`w-11 h-7 ${linearGradient} rounded-2xl relative cursor-pointer hover:opacity-60`}>
						<div className={`bg-white h-5 w-5 absolute ${annually ? 'right-5' : 'right-1'} rounded-full`} style={{top: '3px'}}></div>
					</div>
					<p className='text-lightGrayishBlue text-xs'>Monthly</p>
				</div>
			</div>
			<section className='flex items-center'>
				<Card
					plan='Basic'
					annualPrice={199.99}
					monthlyPrice={19.99}
					storage='500 GB'
					users={2}
					sendUp={3}
					annually={annually} 
				/>
				<Card
					plan='Professional'
					annualPrice={249.99}
					monthlyPrice={24.99}
					storage='1 TB'
					users={5}
					sendUp={10}
					annually={annually}
					highlight={true} 
				/>
				<Card
					plan='Master'
					annualPrice={399.99}
					monthlyPrice={39.99}
					storage='2 TB'
					users={10}
					sendUp={20}
					annually={annually} 
				/>
			</section>
		</main>
	)
}

{/* <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

- Mobile: 375px
- Desktop: 1440px

<link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

<title>Frontend Mentor | [Challenge Name Here]</title>

<!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
<style>
	.attribution { font-size: 11px; text-align: center; }
	.attribution a { color: hsl(228, 45%, 44%); }
</style> */}