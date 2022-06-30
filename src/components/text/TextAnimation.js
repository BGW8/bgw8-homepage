const TextAnimation = ({ text1, text2, dot }) => {
	return (
		<div className='container'>
			<div className='box'>
				<div className='title'>
					<span className='block'></span>
					<h1>
						{text1}
						{dot && <span></span>}
					</h1>
				</div>
				{text2 && (
					<div className='role'>
						<div className='block'></div>
						<p>{text2}</p>
					</div>
				)}
			</div>
		</div>
	);
};
export default TextAnimation;
