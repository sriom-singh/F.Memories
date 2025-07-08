import React from 'react'

const GridLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

                <div className="sm:col-span-5 shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l ">
                    <a href="#">
                        <div className="bg-cover text-center overflow-hidden"
                            style={{
                                minHeight: "300px",
                                backgroundImage: "url('https://cdn.pixabay.com/photo/2022/06/13/21/06/taj-mahal-7260693_1280.jpg')"
                            }}
                            title="Gautam Buddha statue">
                        </div>
                    </a>
                    <div
                        className="mt-3 px-4 pb-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <a href="#"
                                className="text-xs text-primary uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                Agra
                            </a>
                            <a href="#"
                                className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                                The Taj Mahal</a>
                            <p className="text-gray-700 text-base mt-2">
                                The Taj Mahal is a renowned white marble mausoleum located in Agra, India, commissioned by Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal.

                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"

                                style={{
                                    backgroundImage: "url('https://cdn.pixabay.com/photo/2022/07/18/11/12/statue-7329573_1280.jpg')"
                                }}
                                title="Gautam Buddha statue">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 px-2 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">The 80-foot Great Buddha Statue</a>
                    </div>
                    <div className="shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://cdn.pixabay.com/photo/2018/08/29/09/27/india-3639503_1280.jpg')"
                                }}
                                title="India Gate">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 px-2 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">A prominent war memorial India Gate</a>
                    </div>
                    <div className="shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1')"
                                }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 px-2 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                            Many Americans 'Dissatisfied' With U.S.</a>
                    </div>
                    <div className="shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1')"
                                }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 px-2 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                            Trump's Mistakes Became Biden's Big Breaks</a>
                    </div>
                    <div className="shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1')"
                                }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 px-2 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                            Many Americans 'Dissatisfied' With U.S.</a>
                    </div>
                    <div className="shadow-lg hover:border transition duration-500 ease-in-out bg-white rounded-lg lg:rounded-l">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')"
                                }}
                                title="Woman holding a mug">
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 px-2 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GridLayout