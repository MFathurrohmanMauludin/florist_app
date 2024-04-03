import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import Image from 'next/image';

export default function Hero() {
    const defaultContent =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

    return (
        <>
            <div className="relative w-full px-8 py-6">
                <div className="flex justify-between">
                    {/* detail product */}
                    <div className="flex flex-col self-center w-full max-w-[400px]">
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
                        className="flex flex-col items-center w-[400px] h-[500px] relative drop-shadow-md"
                        style={{ backgroundImage: `url('./Rectangle.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    >
                        {/* image product */}
                        <Image
                            className='absolute bottom-0 object-cover z-0'
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

                    <div className="flex flex-col flex-1 justify-between pl-4">
                        {/* button prev & next */}
                        <div className="flex items-center gap-2">
                            <Button
                                className='bg-white'
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
                            <AccordionItem key="1" aria-label="Description" title="Description">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Ingredients" title="Ingredients">
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Testimonials" title="Testimonials">
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
