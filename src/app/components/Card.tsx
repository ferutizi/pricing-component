interface CardProps {
  plan: string,
  annualPrice: number,
  monthlyPrice: number,
  storage: string,
  users: number,
  sendUp: number,
	annually: boolean,
  highlight?: boolean,
}

export default function Card({plan, annualPrice, monthlyPrice, storage, users, sendUp, annually, highlight}: CardProps) {
	const linearGradient = 'bg-gradient-to-br from-lightBlueGradient to-blueGradient'
	const highlightStyles = `${linearGradient + ' h-primary text-white'}` 
	const normalStyles = 'h-secondary text-gray-700 bg-white'
	const pStyles = `${highlight ? 'text-white' : 'text-grayishBlue'} py-2 text-xs font-semibold`

	return(
		<article className={`${highlight ? highlightStyles : normalStyles} flex flex-col justify-center text-center w-80 p-4 rounded-md`}>
			<h2 className={`text-sm ${highlight ? 'text-white' : 'text-grayishBlue'} font-bold`}>{plan}</h2>
			<p
				className="text-5xl font-extrabold flex justify-center items-center gap-2 py-8">
				<span className="text-3xl">$</span>
				{annually ? annualPrice : monthlyPrice}
			</p>
			<div>
				<hr className="text-veryLightGrayishBlue bg-veryLightGrayishBlue" />
				<p className={pStyles}>{storage} Storage</p>
				<hr />
				<p className={pStyles}>{users} Users Allowed</p>
				<hr />
				<p className={pStyles}>Send up to {sendUp} GB</p>
				<hr className="pb-8" />
			</div>
			<button
				type="button"
				className={`${highlight ? 'text-indigo-500 bg-white' : `${linearGradient} text-white`} w-full text-center py-1 rounded-md text-xs font-semibold`}
			>LEARN MORE
			</button>
		</article>
	)
}