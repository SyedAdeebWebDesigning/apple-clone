import Image from "next/image";

const Loading = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-black">
			<Image
				src="/assets/AppleWhite.svg"
				alt="Logo"
				width={75}
				height={110}
				className="p-2 ml-2"
			/>
		</div>
	);
};

export default Loading;
