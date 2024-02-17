interface CardProps {
  plan: string,
  annualPrice: number,
  monthlyPrice: number,
  storage: string,
  users: number,
  sendUp: number,
	anually: boolean,
  highlight?: boolean,
}

export default function Card({plan, annualPrice, monthlyPrice, storage, users, sendUp, anually, highlight}: CardProps) {
	const highlightStyles = 'h-96 text-white bg-indigo-400'
	const normalStyles = 'h-80 text-gray-700 bg-white'
	return(
		<article className={`${highlight ? highlightStyles : normalStyles} flex flex-col justify-around text-center w-64 p-4 rounded-md`}>
			<h2 className={`text-sm ${highlight ? 'text-white' : 'text-grayishBlue'} font-bold`}>{plan}</h2>
			<span className="text-5xl font-extrabold flex justify-center items-center gap-2"><span className="text-3xl">$</span>{anually ? annualPrice : monthlyPrice} {/* {anualPrice} */}</span>
			<div>
				<hr className="text-veryLightGrayishBlue bg-veryLightGrayishBlue" />
				<p className={`${highlight ? 'text-white' : 'text-grayishBlue'} py-2 text-xs font-semibold`}>{storage} Storage</p>
				<hr />
				<p className={`${highlight ? 'text-white' : 'text-grayishBlue'} py-2 text-xs font-semibold`}>{users} Users Allowed</p>
				<hr />
				<p className={`${highlight ? 'text-white' : 'text-grayishBlue'} py-2 text-xs font-semibold`}>Send up to {sendUp} GB</p>
				<hr />
			</div>
			<button type="button" className={`${highlight ? 'border-white text-white' : 'border-indigo-500 text-indigo-500'} w-full text-center py-1 border rounded-md text-xs font-semibold`}>LEARN MORE</button>
		</article>
	)
}