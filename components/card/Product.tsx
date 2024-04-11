import { Card, CardFooter, Chip, Image, Link } from '@nextui-org/react';
import AddToCart from '../button/AddToCart';
import LikeButton from '../button/Like';
import CommentButton from '../button/Comment';

interface Props {
    data: {
        title: string;
        imgUrl: string;
        likes: number;
        size: any;
        sales: number;
        discount: number;
        category: any;
    },
    index: number;
}

function Product(getData: Props) {

    return (
        <>
            <Card
                className='flex justify-between'
                shadow="sm"
                key={getData.index}
                onPress={() => console.log("item pressed")}
                isPressable
            >
                <Image
                    shadow="sm"
                    radius="lg"
                    alt={getData.data.title}
                    className="object-cover object-center h-full"
                    src={getData.data.imgUrl}
                    width={500}
                />
                <CardFooter className="flex flex-col items-start text-left text-small xs:p-2">
                    <span className='line-clamp-1 text-lg font-medium capitalize'>{getData.data.title}
                    </span>
                    <div className="flex flex-col items-start gap-x-1">
                        <div className="text-default-500">
                            {
                                getData.data.discount === 0 ?
                                    <>
                                        ${getData.data.size.small.price} - ${getData.data.size.large.price}
                                    </>
                                    :
                                    <>
                                        ${getData.data.size.small.price - (getData.data.size.small.price * (getData.data.discount / 100))} - ${getData.data.size.large.price - (getData.data.size.large.price * (getData.data.discount / 100))}
                                    </>
                            }
                        </div>
                        {
                            getData.data.discount > 0 &&
                            <div className='flex flex-row items-center gap-x-1'>
                                <del>${getData.data.size.small.price} - ${getData.data.size.large.price}</del>
                                <Chip className='!bg-white text-red-600' size="sm">{getData.data.discount}%</Chip>
                            </div>
                        }
                    </div>
                    <div className="flex flex-wrap justify-start gap-2 mt-3">
                        {
                            getData.data.category.slice(0, 3).map((category: any, index: any) =>
                                <Chip
                                    className='hover:!bg-gray-950 hover:text-white tracking-wide'
                                    as={Link}
                                    href={'#'}
                                    variant="flat"
                                    size='sm'
                                    key={index}
                                >
                                    {category}
                                </Chip>
                            )
                        }
                    </div>

                    <div className="w-full flex justify-between mt-4">
                        <div className="flex items-center gap-x-1">
                            <LikeButton />
                            <CommentButton />
                        </div>
                        <AddToCart />
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default Product