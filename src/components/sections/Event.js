import StepperVertical from './StepperVertical';

export default function Event() {
    return (
        <>
            <div className="mx-auto max-w-4xl p-4 mt-8 sm:p-12 lg:mt-16  ">
                <div className=" grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 justify-center items-center">
                    <div>
                        <StepperVertical />
                    </div>
                    <div className="max-w-lg bg-white shadow ">
                        <a href="#">
                            <img src="/sehr-gross.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    2023/10/02 - 10/03
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Light rail day / Denmark
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Date:
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Location:
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Further information:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
