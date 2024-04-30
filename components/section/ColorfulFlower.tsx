import Heading from "./Heading";
import lily from "../../public/lily.png";
import rose from "../../public/rose.jpg";
import orchid from "../../public/orchid.png";
import gerbera from "../../public/gerbera.png";
import lilac from "../../public/lilac.png";
import sun from "../../public/sun-flower.jpg";
import Image from "next/image";
import { motion } from "framer-motion"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/link";
import SeeMore from "../button/SeeMore";
// import required modules

export default function ColorfulFlower() {
    const data = [
        {
            img: lily,
            name: 'lily'
        },
        {
            img: orchid,
            name: 'orchid'
        },
        {
            img: gerbera,
            name: 'gerbera'
        },
        {
            img: lilac,
            name: 'lilac'
        },
        {
            img: rose,
            name: 'rose'
        },
        {
            img: sun,
            name: 'sun'
        }
    ]


    return (
        <>

            <div className="space-y-6 my-10">
                <Heading
                    title={"Colorful Flower"}
                    icon={'../flower-thin.svg'}
                    colorBorder={"border-teal-900"}
                    colorBackground={"bg-teal-800/30"}
                    colorText={"text-teal-700"}
                    isIcon={false}
                />

                <Swiper
                    slidesPerView={5}
                    spaceBetween={16}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="!px-8"
                >
                    {
                        data.map((flower, index) =>
                            <SwiperSlide key={index}>
                                <div
                                    className="max-w-[270px] relative">
                                    <Image className="object-cover rounded-[12px]" src={flower.img} width={270} height={300} loading="lazy" alt={flower.name} />

                                    <motion.div
                                        className="absolute flex items-center justify-center w-full bg-gray-400/10 backdrop-blur-sm top-0 bottom-0 right-0 rounded-[12px]"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ type: 'spring' }}
                                    >
                                        <div className="flex flex-col items-center gap-x-4">
                                            <span className="text-[28px] capitalize text-white">{flower.name}</span>
                                            <div className="flex flex-row gap-x-3 items-center w-[100px]">
                                                <div className="flex grow h-[2px] bg-white rounded" />
                                                <Link className="text-white" href="#">view</Link>
                                                <div className="flex grow h-[2px] bg-white rounded" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>

                <SeeMore url={"#"} />
            </div>

        </>
    )
}
