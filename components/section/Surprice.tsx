import Image from 'next/image'


export default function Surprice() {
    const data = [{
        title: 'wedding',
        image: [
            "https://i.ibb.co/hVF9Mg6/wedding.jpg",
            "https://i.ibb.co/87Bf91G/wedding-2.jpg",
            "https://i.ibb.co/F5bGnwG/wedding-3.jpg",
            "https://i.ibb.co/hmqqT4G/wedding-4.jpg",
            "https://i.ibb.co/Y8JWypW/wedding-5.jpg",
            "https://i.ibb.co/gwkMPDS/wedding-6.jpg",
            "https://i.ibb.co/W3MnDNm/wedding-7.jpg",
        ],
        slogan: 'Give the best and most beautiful flower bouquet to your beloved',
    }]

    return (
        <>
            <div className="grid grid-cols-2 px-8 py-[100px] gap-4">
                {/* slogan */}
                <div className="flex flex-col relative items-center text-center">
                    <span
                        className="flex items-center text-2xl line-color mt-[50px]"
                    >
                        Wedding
                    </span>
                    <span className="text-4xl font-semibold capitalize tracking-wide w-[calc(100%_-_50px)]">Give the best and most beautiful flower bouquet to your beloved</span>
                    {/* <Image className="absolute right-0 top-0 -z-[1]" src="https://i.ibb.co/6vnRzBS/cherry-blossom.png" width={256} height={100} alt='cherry-blossom' /> */}
                    <Image className="absolute top-[33%] -z-[1]" src="https://i.ibb.co/2W5XcdN/couple-with-lovely-wedding-no-bg.png" width={400} height={100} alt='cherry-blossom' />
                </div>

                {/* image */}
                <div className="flex flex-row justify-center">
                    {/* <Image src='https://i.ibb.co/n8vRvkY/wedding.jpg' width={500} height={100} alt='give precent' /> */}
                    <div className="columns-3">
                        {/* <div className="inline-block box-border overflow-hidden mb-3 w-full max-w-[216px] rounded-[14px]">
                        </div> */}
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/hVF9Mg6/wedding.jpg" width={400} height={100} alt="random-1" />
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/87Bf91G/wedding-2.jpg" width={400} height={100} alt="random-2" />
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/F5bGnwG/wedding-3.jpg" width={400} height={100} alt="random-3" />
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/hmqqT4G/wedding-4.jpg" width={400} height={100} alt="random-4" />
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/Y8JWypW/wedding-5.jpg" width={400} height={100} alt="random-5" />
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/gwkMPDS/wedding-6.jpg" width={400} height={100} alt="random-6" />
                        <Image className="mb-3 w-full max-w-[216px] rounded-[14px]" src="https://i.ibb.co/W3MnDNm/wedding-7.jpg" width={400} height={100} alt="random-7" />
                    </div>
                </div>
            </div>
        </>

    )
}
