import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, AccordionItem, Button, Link } from '@nextui-org/react';
import Image from 'next/image';

export default function Hero() {
    const defaultContent =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

    return (
        <>
            <div className="relative w-full px-8 pb-6 pt-24">
                <div className="flex justify-between">
                    {/* detail product */}
                    <div className="flex flex-col self-center w-full pr-4">
                        <h1 className='text-[42px] font-semibold leading-snug'>Minimal red tulip flower vase</h1>
                        <span className='text-[32px] font-normal pt-4 pb-6'>$18.99</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button
                            className='bg-black text-white w-fit mt-10'
                            size='lg'
                            color='default'
                            variant='solid'
                            radius='full'
                        >add to cart</Button>
                    </div>

                    <div
                        className="flex flex-col items-center w-full h-[500px] relative drop-shadow-xl -z-10"
                        style={{ backgroundImage: `url('./Rectangle.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    >
                        {/* image product */}
                        <Image
                            className='absolute bottom-[58px] left-[-5px] object-cover z-0 scale-125'
                            src={'/Minimal-red-tulip-flower-vase.webp'}
                            width={400}
                            height={400}
                            alt={'red tulip with vas'} />

                        <Image
                            className='absolute bottom-0 object-cover z-0'
                            src={'/Mask.svg'}
                            width={400}
                            height={400}
                            alt={'mask line'} />
                    </div>

                    <div className="flex flex-col justify-between w-full pl-4">
                        {/* button prev & next */}
                        <div className="flex items-center gap-2">
                            <Button
                                className='bg-white text-gray-500'
                                startContent={<FontAwesomeIcon icon={faArrowLeft} />}
                                radius='full'
                                isIconOnly
                            />
                            <Button
                                className='bg-white'
                                startContent={<FontAwesomeIcon icon={faArrowRight} />}
                                radius='full'
                                isIconOnly
                            />
                        </div>

                        {/* accordion */}
                        <Accordion>
                            <AccordionItem classNames={{ content: '!bg-white', base: '!bg-[#fff1] backdrop-blur-sm' }} key="1" aria-label="Description" title="Description">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem classNames={{ content: '!bg-white', base: '!bg-[#fff1] backdrop-blur-sm' }} key="2" aria-label="Ingredients" title="Ingredients">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem classNames={{ content: '!bg-white', base: '!bg-[#fff1] backdrop-blur-sm' }} key="3" aria-label="Testimonials" title="Testimonials">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="flex justify-center py-8">
                    <Link href='#get-started'>
                        <Image src={'./ArrowDown.svg'} width={24} height={24} alt={'btn cta'} />
                    </Link>
                </div>

                {/* leaf */}
                <Image className='absolute left-0 bottom-0 -z-10' src='./Leaf.svg' width={200} height={300} alt='flower pot' />


                {/* flower pot */}
                <Image className='absolute right-0 top-0 -z-10' src='./FlowerPot.svg' width={200} height={300} alt='flower pot' />
            </div>
        </>
    )
}
