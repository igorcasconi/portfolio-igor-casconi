import ReactIcon from "@/icons/react-icon";
import { Progress } from "../progress";
import JavascriptIcon from "@/icons/javascript-icon";
import AndroidStudioIcon from "@/icons/android-studio-icon";
import KotlinIcon from "@/icons/kotlin-icon";
import NodeJsIcon from "@/icons/nodejs-icon";
import JavaIcon from "@/icons/java-icon";
import XcodeIcon from "@/icons/xcode-icon";
import TypescriptIcon from "@/icons/typescript-icon";

const Skills = () => {
  return (
    <div className="flex flex-col sm:mt-4 md:mt-10 lg:mt-32 xl:mt-24 justify-start w-full xl:px-40 lg:px-16 sm:px-4 ">
      <h3 className="text-primary text-[45px] font-afacad font-medium text-center">
        MINHAS SKILLS
      </h3>

      <div className="sm:box lg:flex flex-row">
        <div className="md:flex flex-col">
          <div className="mr-4 sm:mt-4 md:min-w-56">
            <Progress percentage="w-[90%]" name="Javascript">
              <JavascriptIcon width={30} height={30} />
            </Progress>
          </div>

          <div className="mr-4 sm:mt-4 md:min-w-56">
            <Progress percentage="w-[85%]" name="React">
              <ReactIcon width={30} height={30} />
            </Progress>
          </div>

          <div className="mr-4 sm:mt-4 md:min-w-56">
            <Progress percentage="w-[80%]" name="React Native">
              <ReactIcon width={30} height={30} />
            </Progress>
          </div>
        </div>

        <div className="md:flex flex-col">
          <div className="sm:mt-4 sm:mr-4 md:min-w-56">
            <Progress percentage="w-[60%]" name="Android Studio">
              <AndroidStudioIcon width={20} height={20} />
            </Progress>
          </div>

          <div className="mr-4 sm:mt-4 md:min-w-56">
            <Progress percentage="w-[45%]" name="Kotlin">
              <KotlinIcon width={25} height={30} />
            </Progress>
          </div>

          <div className="sm:mt-4 sm:mr-4 md:min-w-56">
            <Progress percentage="w-[60%]" name="NodeJS">
              <NodeJsIcon width={40} height={30} />
            </Progress>
          </div>
        </div>

        <div className="md:flex flex-col">
          <div className="mr-4 sm:mt-4 md:min-w-56">
            <Progress percentage="w-[60%]" name="Java">
              <JavaIcon width={30} height={30} />
            </Progress>
          </div>

          <div className="sm:mt-4 sm:mr-4 md:min-w-56">
            <Progress percentage="w-[60%]" name="XCode">
              <XcodeIcon width={40} height={30} />
            </Progress>
          </div>

          <div className="sm:mt-4 sm:mr-4 md:min-w-56">
            <Progress percentage="w-[85%]" name="Typescript">
              <TypescriptIcon width={40} height={30} />
            </Progress>
          </div>
        </div>

        <div className="sm:mt-4 md:mt-8 md:ml-4">
          <p className="text-white font-afacad font-regular text-[20px]">
            Também trabalhado com alguns frameworks e bibliotecas importantes
            como NextJS, Retrofit (Android e Kotlin), react-router-dom,
            react-query, styled-components, react-hook-form, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
