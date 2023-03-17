import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import bg1 from "../../assets/Image frame.png";

// import required modules
import { Pagination, EffectCards, Autoplay } from "swiper";

const LoginSlider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                effect={"cards"}
                autoplay={{ delay: 2000 }}
                grabCursor={true}
                modules={[Pagination, EffectCards, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={bg1} alt="" />
                        <div className="px-16 py-16 ">
                            <h4 className="bg-black px-3 py-1 rounded-lg inline-block text-[13px] font-normal">
                                NEW
                            </h4>
                            <h2 className="text-3xlm font-bold mt-7">
                                Developer handoff <br />
                                improvements
                            </h2>
                            <p className="text-base mt-4 font-normal pb-11">
                                You’ll now see a highlight around Symbols on the
                                Canvas and in the Inspector.
                            </p>
                            <span className="share float-right text-base">
                                Share
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={bg1} alt="" />
                        <div className="px-16 py-16 ">
                            <h4 className="bg-black px-3 py-1 rounded-lg inline-block text-[13px] font-normal">
                                NEW
                            </h4>
                            <h2 className="text-3xlm font-bold mt-7">
                                Developer handoff <br />
                                improvements
                            </h2>
                            <p className="text-base mt-4 font-normal pb-11">
                                You’ll now see a highlight around Symbols on the
                                Canvas and in the Inspector.
                            </p>
                            <span className="share float-right text-base">
                                Share
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={bg1} alt="" />
                        <div className="px-16 py-16 ">
                            <h4 className="bg-black px-3 py-1 rounded-lg inline-block text-[13px] font-normal">
                                NEW
                            </h4>
                            <h2 className="text-3xlm font-bold mt-7">
                                Developer handoff <br />
                                improvements
                            </h2>
                            <p className="text-base mt-4 font-normal pb-11">
                                You’ll now see a highlight around Symbols on the
                                Canvas and in the Inspector.
                            </p>
                            <span className="share float-right text-base">
                                Share
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default LoginSlider;
