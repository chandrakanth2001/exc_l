export const Footer = () => {

    return (
        <footer className=" text-gray-200 mt-10">
            <div className="w-full h-0.5 bg-gray-500"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  px-6 py-10">

                <div className="">
                    <h3 className="font-bold text-lg lg:text-xl">Store Locations</h3>
                    <address className="not-italic space-y-3 text-sm lg:text-base">

                        <div className="flex items-start gap-2 mt-5">
                            <span className="mt-1">
                                <img src="https://i.postimg.cc/bYbTj86g/location.webp" className="w-3.75" />
                            </span>
                            <p>
                                <span className="font-bold">Excel Flour Mill</span> <br />
                                <span className="text-sm"> Ground Flooor NSS Karayogam Elanthoor</span>
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="mt-1">
                                <img src="https://i.postimg.cc/bYbTj86g/location.webp" className="w-3.75" />
                            </span>
                            <p>
                                <span className="font-bold">Excel Coffee Powders</span> <br />
                                <span className="text-sm">Elanthoor Market Junction</span>
                            </p>
                        </div>

                    </address>
                </div>
                <div>
                    <h3 className="font-bold">Contact Us</h3>
                    <div className="p-2 lg:mt-5 ">
                        <p className="font-bold">
                            Rajeev S
                        </p>
                        <div className="mt-2 flex gap-2">
                            <img src="https://i.postimg.cc/qv9sF58W/whatsapp.webp" className="w-5" />

                            <a href="tel:+919946646116">9946646116</a>


                        </div>
                        <div className="mt-2 flex gap-2">
                            <img src="https://i.postimg.cc/fWcMSt28/call.webp" className="w-5" />

                            <a href="tel:+918547594611">8547594611</a>


                        </div>
                    </div>
                </div>

                <div className="w-full h-50 md:h-full rounded-lg overflow-hidden">
                    <iframe
                        title="NSS Karayogam Elanthoor Map"
                        src="https://www.google.com/maps?q=9.290447,76.721868&z=16&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
            <div className="flex justify-center mb-1">© 2026 Excel</div>
        </footer>
    );
};
