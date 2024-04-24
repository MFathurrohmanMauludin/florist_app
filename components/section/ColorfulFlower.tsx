import Heading from "./Heading";
import lily from "../../public/lily.png";
import rose from "../../public/rose.jpg";
import orchid from "../../public/orchid.png";
import gerbera from "../../public/gerbera.png";
import lilac from "../../public/lilac.png";
import sun from "../../public/sun-flower.jpg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

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
            <Heading
                title={"Colorful Flower"}
                icon={'../flower-thin.svg'}
                colorBorder={"border-teal-900"}
                colorBackground={"bg-teal-800/30"}
                colorText={"text-teal-700"}
                isIcon={false}
            />

            <div className="my-6">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={16}
                    className="!px-8"
                >
                    {
                        data.map((flower, index) =>
                            <SwiperSlide autoplay-delay="3000" autoplay-disable-on-interaction="false" key={index}>
                                <div className="max-w-[270px]">
                                    <Image className="object-cover" src={flower.img} width={270} height={300} loading="lazy" alt={flower.name} />
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>
    )
}
