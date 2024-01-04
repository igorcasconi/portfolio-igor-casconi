import Image from "next/image";

import ArtigoPushImage from "../../../public/assets/artigo-push.jpg";
import Link from "next/link";

const Articles = () => {
  return (
    <div className="flex flex-col sm:mt-4 md:mt-10 lg:mt-24 xl:mt-16 justify-start w-full xl:px-40 lg:px-16 sm:px-4 pb-4 md:mr-4">
      <h3
        className="text-primary text-[45px] font-afacad font-medium text-center"
        id="articles"
      >
        ARTIGOS
      </h3>

      <div className="mt-4 flex justify-center">
        <Link
          href="https://medium.com/nave-team/implementando-push-notification-android-ios-no-react-native-com-amazon-sns-8d019c3c1550"
          target="_blank"
        >
          <div className="w-full sm:h-auto h-[250px] bg-gray-800 flex sm:flex-col lg:justify-start lg:flex-row md:flex-row rounded-md cursor-pointer shadow-xl sm:pr-0 pr-4">
            <Image
              src={ArtigoPushImage}
              alt="Artigo Implementando Push Notification"
              className="object-cover sm:w-full sm:h-[300px] w-[400px] h-full sm:rounded-t-md md:rounded-l-md"
            />

            <div className="flex flex-col ml-4 mt-4">
              <h3 className="text-primary sm:text-[18px] text-[24px] font-afacad font-medium w-[90%]  sm:text-center md:text-start">
                Implementando Push Notification (android/iOS) no React Native
                com Amazon SNS
              </h3>

              <p className="text-white font-afacad text-[18px] font-regular sm:text-center md:text-start md:mt-4">
                <span className="text-primary font-medium">Publicado em:</span>{" "}
                19 de Julho de 2023
              </p>

              <p className="text-white font-afacad text-[18px] font-regular sm:text-center md:text-start md:mt-4">
                Medium - Nav9 Team
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
