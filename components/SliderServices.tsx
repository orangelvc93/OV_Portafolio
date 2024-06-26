"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { serviceData } from "@/data";
import Image from "next/image";

const SliderServices = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="h-[300px] md:h-[340px] w-[300px] md:w-[670px]"
		>
			{serviceData.map((item, index) => (
				<SwiperSlide key={index}>
					<div className="card_wrap relative overflow-hidden border-none h-[90%] rounded-2xl bg-gradient-to-r from-darkBg to-darkBg/50">
						<div className="">
							<Image
								src={item.src}
								width={300}
								height={300}
								alt="img"
								className="card_img absolute w-full"
							/>
							<div className="absolute inset-0 bg-black opacity-10 "></div>
						</div>
						<div className="p-4 card_content absolute">
							<h3 className="mb-3 text-xl font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
								{item.title}
							</h3>
							<p className="text-sm">{item.description}</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SliderServices;
