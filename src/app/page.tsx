import Card from './components/Card'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Our Pricing</h1>
			<div>
				<p>Annually</p>
				<div>B</div>
				<p>Monthly</p>
			</div>
			<section className='flex items-center'>
				<Card plan='Basic' anualPrice={199.99} monthlyPrice={19.99} storage='500 GB' users={2} sendUp={3} />
				<Card plan='Professional' anualPrice={249.99} monthlyPrice={24.99} storage='1 TB' users={5} sendUp={10} highlight={true}/>
				<Card plan='Master' anualPrice={399.99} monthlyPrice={39.99} storage='2 TB' users={10} sendUp={20} />
			</section>
			
			{/* &dollar; */}
			
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