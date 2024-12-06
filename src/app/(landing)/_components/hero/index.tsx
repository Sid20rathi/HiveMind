import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
const Hero = () => {
  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <GradientText
        className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
      >
        Why Choose
        <br className="md:hidden" /> Hivemind?
      </GradientText>
      <div className="flex flex-col items-center">
        <div>
          <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
              <div className="flex flex-col gap-2">
                <CardTitle className="text-center">
                  Community Creation
                </CardTitle>
                <CardDescription className="text-[#B4B0AE]">
                  Easily create and manage groups around any topic or interest.
                </CardDescription>
              </div>
            </Card>
          </BackdropGradient>
        </div>

        <div>
          <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
              <div className="flex flex-col gap-2">
                <CardTitle className="text-center">
                  Seamless Networking
                </CardTitle>
                <CardDescription className="text-[#B4B0AE]">
                  Connect with like-minded individuals across diverse
                  communities.
                </CardDescription>
              </div>
            </Card>
          </BackdropGradient>
        </div>

        <div>
          <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
              <div className="flex flex-col gap-2">
                <CardTitle className="text-center">
                  Flexible Group Structures
                </CardTitle>
                <CardDescription className="text-[#B4B0AE]">
                  Create public and private groups with custom permission
                  levels.
                </CardDescription>
              </div>
            </Card>
          </BackdropGradient>
        </div>

        <div>
          <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
            <Card className="p-7 mt-10 md:w-auto w-full bg-themeBlack border-themeGray">
              <div className="flex flex-col gap-2">
                <CardTitle className="text-center">
                  Rich Media Sharing
                </CardTitle>
                <CardDescription className="text-[#B4B0AE]">
                  Share files, images and videos seamlessly within your groups.
                </CardDescription>
              </div>
            </Card>
          </BackdropGradient>
        </div>
      </div>
    </div>
  )
}

export default Hero
