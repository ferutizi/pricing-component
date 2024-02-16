interface CardProps {
  plan: string,
  anualPrice: number,
  monthlyPrice: number,
  storage: string,
  users: number,
  sendUp: number,
  highlight?: boolean,
}

export default function Card({plan, anualPrice, monthlyPrice, storage, users, sendUp, highlight}: CardProps) {
	const highlightStyles = 'h-96 text-white bg-indigo-400'
	const normalStyles = 'h-80 text-black bg-white'
	return(
		<article className={`${highlight ? highlightStyles : normalStyles} flex flex-col justify-around text-center w-64 p-4 rounded-md`}>
			<h2>{plan}</h2>
			<span className="text-5xl font-extrabold">{monthlyPrice} {/* {anualPrice} */}</span>
			<div>
				<hr />
				<p className="py-2 text-xs">{storage} Storage</p>
				<hr />
				<p className="py-2 text-xs">{users} Users Allowed</p>
				<hr />
				<p className="py-2 text-xs">Send up to {sendUp} GB</p>
				<hr />
			</div>
			<button type="button" className={`${highlight ? 'border-white' : 'border-indigo-500'} w-full text-center py-2 border rounded-md`}>Learn More</button>
		</article>
	)
}