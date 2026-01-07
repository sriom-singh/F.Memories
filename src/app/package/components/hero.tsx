import Image from "next/image";
type HeroProps = {
    image: string[];
};

const Hero: React.FC<HeroProps> = ({image }) => {
    return (
        <section className="relative h-[620px] w-full overflow-hidden">
            <div className="flex h-full gap-4">
                <Image
                    src={image[0]}
                    width={1000}
                    height={1000}
                    alt={`hero-${image[0]}`}
                    className="h-full w-2/3 rounded-xl object-bottom bg-bottom object-cover brightness-100"
                />
                <div className="h-full flex flex-col justify-between w-[33%]">
                <Image
                    src={image[1]}
                    width={400}
                    height={400}
                    alt={`hero-${image[1]}`}
                    className=" rounded-xl object-bottom bg-bottom object-cover brightness-100 w-full h-[32%]"
                />
                    <Image
                    src={image[2]}
                    width={400}
                    height={400}
                    alt={`hero-${image[2]}`}
                    className=" rounded-xl object-bottom bg-bottom object-cover brightness-100 w-full h-[32%]"
                />
                    <Image
                    src={image[0]}
                    width={400}
                    height={400}
                    alt={`hero-${image[0]}`}
                    className=" rounded-xl object-bottom bg-bottom object-cover brightness-100 w-full h-[32%]"
                />
                </div>
           
            </div>

            {/* <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-cursive md:text-8xl font-bold text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-2 py-4 text-white">{subtitle}</p>
                )}
            </div> */}
        </section>
    );
};

export default Hero;
