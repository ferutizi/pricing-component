'use client'

import { useState } from 'react'
import Card from './components/Card'

export default function Home() {
	const [anually, setAnually] = useState<boolean>(true)
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className='text-grayishBlue text-2xl p-4 font-bold'>Our Pricing</h1>
			<div
				className='flex items-center text-darkGrayishBlue gap-4 pb-8 font-bold'
				onClick={() => setAnually(!anually)}
			>
				<p className='text-lightGrayishBlue text-xs'>Annually</p>
				<div>B</div>
				<p className='text-lightGrayishBlue text-xs'>Monthly</p>
			</div>
			<section className='flex items-center'>
				<Card
					plan='Basic'
					annualPrice={199.99}
					monthlyPrice={19.99}
					storage='500 GB'
					users={2}
					sendUp={3}
					anually={anually} 
				/>
				<Card
					plan='Professional'
					annualPrice={249.99}
					monthlyPrice={24.99}
					storage='1 TB'
					users={5}
					sendUp={10}
					anually={anually}
					highlight={true} 
				/>
				<Card
					plan='Master'
					annualPrice={399.99}
					monthlyPrice={39.99}
					storage='2 TB'
					users={10}
					sendUp={20}
					anually={anually} 
				/>
			</section>
		</main>
	)
}

{/* <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

<link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

<title>Frontend Mentor | [Challenge Name Here]</title>

<!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
<style>
	.attribution { font-size: 11px; text-align: center; }
	.attribution a { color: hsl(228, 45%, 44%); }
</style> */}