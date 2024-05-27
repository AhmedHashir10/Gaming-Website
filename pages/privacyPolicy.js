import { FiX } from "react-icons/fi";
import { useRouter } from "next/router";

const PrivacyPolicy = () => {
  const router = useRouter();

  const handleClose = () => {
    router.replace("/home");
  };

  return (
    <div className="w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={handleClose}>
            <FiX className="text-gray-600 h-6 w-6 cursor-pointer" />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h2>
        <p>
          AM Apps & Games and its affiliates ("Company" or "We" or "Us" or
          "Our") respect the privacy of its users ("User" or "You"). We are
          committed to guard our user's data. We believe that you have a right
          to know our implementations regarding the data we collect for Facebook
          or third party Advertisement serving technologies, Google Analytics
          and firebase system, and why and how we use this data. AM Apps & Games
          uses Google Analytics, a web analytic service offered by Google Inc.
          ("Google") as an analytic metrics tool in our games to collect data
          when user plays games on their devices.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Collection of personal data:
        </h3>
        <p>
          We or stakeholders may collect your personal data i.e. First name,
          Last name, Phone number, Device ID’s, City, Browser data and Email
          address directly or indirectly. This data is used for your
          identification.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Collection of non-personal data:
        </h3>
        <p>
          We or stakeholders may collect information about your software,
          applications and hardware, hardware, advertisement(s) served, length
          of your time a billboard was visible, other Internet and website usage
          data, sites and mobile websites that you have viewed including date
          and time, area of interest type, size of the advertisement,
          advertisement response (if any), and angle of view. The preceding data
          could also be used and disclosed per this policy and therefore the
          privacy policy of the corporate providing the ad serving technology.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Why do we collect data?</h3>
        <p>
          We collect data to verify and ensure payments (if any) for providing
          you the products and services you request. Data is important to us to
          find your area of interest and to provide you the functions you want
          to have, to respond to your queries, to send you marketing and
          promotion materials, to contact you for rewards you have got. The data
          may be used by us for administrative, analytical, research,
          optimization, security and other purposes. Specifically, we may use
          your Non-Personal Information to help us learn more about your gaming
          activities and understand your preferences so that we can personalize
          your experience, provide you with in-game offers and notifications
          that are tailored to you, and enhance your overall gaming experience.
        </p>
        <p>
          AM Apps & Games website may employ assistant or third party for
          tracking pixels or other technologies to collect data as a result of
          ad serving through our website. Some dynamic advertisement serving
          technology enable advertising to be temporarily uploaded on the
          website. We or third parties utilize the advertisement serving
          technology for data such as age and gender logged from your hardware
          or device to make sure that appropriate advertising is presented
          within the website to calculate or control the number of unique and
          repeat views of a given ad, and/or deliver ads that relate to your
          interest and measure the potency of ad campaigns.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Data Disclosure:</h3>
        <ul className="list-disc pl-6">
          <li>
            To implement any applicable law, regulation, legal process, subpoena
            or governmental request
          </li>
          <li>
            To check, secure, or otherwise location fraud, security or technical
            issues
          </li>
          <li>
            To respond to claims that any content published on the Service
            violates any right of a stakeholders
          </li>
          <li>
            To save the rights, treasure, or personal safety of the
            Organization, it’s Users or the general public
          </li>
          <li>
            When Company is making any change in control, including by means of
            combine, acquisition or purchase of all or substantially all of the
            assets of Company
          </li>
          <li>
            To let our stakeholders and recognition serve you with contextual
            and relevant advertisements only
          </li>
          <li>
            AM Apps & Games does not allow any personal data to be directly or
            indirectly linked to the persistent identifier.
          </li>
          <li></li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2">Policy about Children:</h3>
        <p>
          We develop games for all ages but we do marketing according to the age
          limits.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Change in Policy:</h3>
        <p>
          We may change this policy at any time and if we do, we shall post the
          updated policy on this page and send you an email notification for the
          same. If you still use AM Apps & Games after those changes are in
          effect, you comply with the new policy. If the changes are
          significant, we may provide a more prominent notice or get your
          consent, as needed by law.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Queries:</h3>
        <p>
          If you have any questions regarding our Privacy Policy or you want to
          get in touch with us, you are most welcome to send us an email at the
          following address:{" "}
          <a href="mailto:support@amplayers.com" className="text-blue-600">
            support@amplayers.com
          </a>{" "}
          and we will make an effort to reply within a reasonable time frame.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
