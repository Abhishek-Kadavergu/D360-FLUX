import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { curve } from "../assets";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-lg lg:max-w-2xl"
          title={
            <>
              Everything Your Engineering Team{" "}
              <span className="inline-block relative font-semibold">
                Needs.
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
              <br />
              Nothing It Doesn’t.
            </>
          }
        />

        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 mb-8 md:mb-10">
          {benefits.map((benefit) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full min-w-0 h-full"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
              key={benefit.id}
            >
              <div className="relative z-2 flex flex-col min-h-[17rem] sm:min-h-[18rem] lg:min-h-[19rem] p-5 sm:p-6 lg:p-7 pointer-events-none">
                <h5 className="h5 mb-3 sm:mb-4">{benefit.title}</h5>
                <p className="body-2 mb-4 sm:mb-5 text-n-3">{benefit.text}</p>
                <div className="flex items-center mt-auto gap-2">
                  <img
                    src={benefit.iconUrl}
                    width={40}
                    height={40}
                    className="sm:w-12 sm:h-12 w-10 h-10"
                    alt={benefit.title}
                  />

                    {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow /> */}
                </div>
              </div>

              {benefit.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {benefit.imageUrl && (
                    <img
                      src={benefit.imageUrl}
                      width={380}
                      height={362}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
