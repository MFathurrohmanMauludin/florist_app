import { Avatar, Card, CardBody, CardFooter, Chip, Image, Link } from '@nextui-org/react';

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
                    <div className="text-default-500">
                        ${getData.data.size.small.price} - ${getData.data.size.large.price}
                    </div>
                    <div className="flex flex-wrap justify-start gap-2 mt-3">
                        {
                            getData.data.category.slice(0, 3).map((category: any, index: any) =>
                                <Chip
                                    variant="flat"
                                    size='sm'
                                    key={index}
                                >
                                    {category}
                                </Chip>
                            )
                        }
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default Product