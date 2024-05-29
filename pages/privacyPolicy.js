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
          AM Apps & Games and its websites, games, and other applications
          (“we,”, “our “or “us”) believe that your privacy is really important.
          This Policy describes the personally identifiable information and
          other data that we will collect from you through the apps and games we
          provide, and how we will use and when we might display such data to
          third parties. Your installation and/or use of these Websites/Apps
          and/or submission of information to us establish your consent to this
          Privacy Policy and the processing of your information (personal and
          non-personal) as described in this policy. Please don’t use the
          Services if you do not agree to this Privacy Policy.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Information we collect:</h3>
        <p>
          <strong>1. Personal Information</strong>
          <br />
          The information which identifies you personally and/or can be used to
          contact you online or offline, such as your full name, physical
          address, email address, telephone number, photograph, precise
          geo-location information, credit card information, and some apps you
          may require to share your username.
        </p>
        <p>
          <strong>2. Non-Personal Information</strong>
          <br />
          The information which does not identify you and cannot be used to
          contact you personally. It includes your date of birth, age, ZIP code,
          city, gender, as well as information about your computer and mobile
          device such as unique device ID, Internet Protocol (IP) address, or
          other persistent identifiers, and their hardware/software/firmware. It
          also includes usage data which identifies the browser you use,
          identity of other apps on the device, game process, playtime, score
          and achievements, and URLs you visited and/or apps you used before
          after using our Apps.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">
          How We Collect Information
        </h3>
        <p>
          If you sign up our services, open an account or in any other-way you
          require to submit information’s we may collect personal and
          non-personal information. If you connect your social media account or
          any other third-party network such as Facebook or Game center, we may
          collect information’s like username, photographs, date of birth. If
          you choose to make a purchase through our Websites/Apps, we will
          collect your credit card information and other billing information. If
          you choose to send a message to another user or defined group of users
          through our message, chat, post or other in-game function, we may
          collect any Personal Information you may disclose through such means,
          as well as the necessary Personal Information of the user(s) you are
          contacting, in order to facilitate the communication (Note: we will
          never collect any information sent outside of the functionality of our
          Websites/Apps, including through emails or text messages). If you
          choose to enable push notifications, we may use your Personal
          Information, or Non-Personal Information such as a device ID, in order
          to send push notifications to your device.
        </p>
        <p>
          We may collect precise geolocation information provided that, prior to
          doing so initially, you will either be informed of this practice or be
          prompted to allow or block this feature. In the event you proceed with
          acquiring the Website/App or choose to allow this feature, you will be
          able to block it at any time thereafter by taking the appropriate
          steps in the Settings tab. Some of our Websites/Apps may read your
          device to determine what other apps have been installed and
          Non-Personal Information, such as your city and gender, may be
          inferred based on the identity of those apps. If you choose to submit
          your Personal Information to us for any other reason in any other
          form, we will collect such Personal Information and use it for the
          purposes for which you submitted it. We will not collect any Personal
          Information from you simply by virtue of your visiting our Website; we
          only collect it if you choose to submit it to us. We do, however,
          collect Non-Personal Information such as device IDs, IP addresses and
          other persistent identifiers, as well as Usage Data, whenever you use
          our Website/Apps. Such Non-Personal Information is not combined with
          Personal Information unless you choose to submit Personal Information
          to us.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Cookies</h3>
        <p>
          Certain third-party advertisers may also make use of cookies in their
          ads served within our Websites/Apps. Such cookies will collect
          anonymous behavioral data which those advertisers may use to serve you
          targeted ads both within and outside of our Websites/Apps. You can opt
          out of that practice by certain participating companies by visiting
          www.aboutads.info/choices and following the steps described therein.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Use of Personal & Non-Personal Information
        </h3>
        <p>We will use your Personal Information to:</p>
        <ul className="list-disc pl-6">
          <li>
            Provide you with any goods, services, or functionality you have
            requested;
          </li>
          <li>
            Respond to any inquiries you have made through our customer service
            features;
          </li>
          <li>
            Contact you to promote our Websites/Apps, contests and any specials
            we may offer;
          </li>
          <li>
            Send you newsletters, promotions or marketing materials. We will
            provide you with the opportunity to opt out of receiving such
            materials in the future. You may also opt out of receiving such
            materials at any time in accordance with the instructions provided
            in this Privacy Policy;
          </li>
          <li>
            Contact you in relation to contest registration and prize
            acceptance;
          </li>
          <li>Contact you in the scope of talent recruitment.</li>
        </ul>
        <p>
          Non-Personal Information may be used by us for administrative,
          analytical, research, optimization, security and other purposes.
          Specifically, we may use your Non-Personal Information to:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Track your use of our Websites/Apps to help us learn more about your
            gaming activities and understand your preferences and tendencies so
            that we can personalize your experience, provide you with in-game
            offers and notifications that are tailored to you, and otherwise
            enhance your gaming experience;
          </li>
          <li>Personalize your content and offers;</li>
          <li>Compile statistics;</li>
          <li>Respond to customer service inquiries;</li>
          <li>
            Protect against cheating, crime or fraud, or for other security
            reasons;
          </li>
          <li>
            Provide you advertising that better suits your interests, and
            profile and is age/gender–appropriate and targeted to your general
            location;
          </li>
          <li>
            Determine the jurisdiction in which you are located so we can
            determine what set of laws apply to you;
          </li>
          <li>
            Send you push notifications (if you choose to allow that function).
            We can also send links for other apps that we own.
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Disclosure of the Personal Information and Non-Personal Information
          That We Collect
        </h3>
        <ul className="list-disc pl-6">
          <li>
            We will not sell, rent or transfer your Personal Information to
            third parties without your prior consent.
          </li>
          <li>
            We may share non-precise geolocation information or precise
            geolocation information (if you choose to allow us to collect it)
            with advertisers to allow them to display more relevant and
            geographically appropriate advertisements to you.
          </li>
          <li>
            We may share your Usage Data and Non-Personal Information, such as
            device IDs, advertising IDs or other persistent identifiers and
            non-precise geolocation information with our advertising partners.
            Those partners may use your Non-Personal Information to serve you
            tailored advertisements outside of our Websites/Apps: please note
            that this sharing is limited to anonymous, aggregated Non-Personal
            Information only and we will not share your Personal Information
            with advertisers without your prior consent.
          </li>
          <li>
            Our Websites/Apps offer social sharing features such as “Share” or
            “Like” on Facebook or other third-party social networking sites. If
            you decide to use such features, it may allow the sharing and
            collection of Personal Information and Non-Personal Information both
            to and from such third-party social networks. You should visit the
            policies of such third parties for more information about their
            information collection practices.
          </li>
          <li>
            We will not store your credit card information. In order to process
            credit card payments, we will use the service of a secure
            third-party credit card processor.
          </li>
          <li>
            We use the services of third parties who will have limited access to
            your Personal Information to be used for specific purposes. These
            purposes may include credit card processing, prize delivery,
            marketing assistance, customer service, and data analysis. The third
            parties we contract with for these purposes will be authorized to
            use your Personal Information only for the purposes for which the
            party was engaged. In addition, Non-Personal Information and Usage
            Data in aggregated, anonymous form may be shared with third parties
            who assist us with our operations such as administration, analytics,
            research, optimization, and advertising.
          </li>
          <li>
            We may disclose your Personal Information or other information
            collected if required by law or court order, if the information
            relates to actual or threatened harmful conduct, to investigate
            and/or take action against illegal activity, suspected abuse or
            unauthorized use of the Websites/Apps, or to protect the property or
            safety of others.
          </li>
          <li>
            In connection with any sale of our company or any line of business
            (including the assets relating thereto), customer information
            generally is one of the transferred business assets, and such
            customer information (including your Personal Information) will be
            transferred or sold to the acquirer in the event of any such sale or
            disposition of any or all of our business. ADVERTISING: Ads
            appearing on our services (Games/Apps or Website) may be delivered
            to Users by advertising partners (Third party), who may set cookies.
            These cookies allow the ad server to recognize your Device each time
            they send you an online advertisement to compile non personal
            identification information about you or others who use your Device.
          </li>
          <li>
            This information allows ad networks to, among other things, deliver
            targeted advertisements that they believe will be of most interest
            to you. This privacy policy does not cover the use of cookies by any
            advertisers. We are currently availing below mentioned ads services.
            You may visit their privacy pages to learn more.
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Our Policy about Children:
        </h3>
        <p>
          We take special precautions respecting user’s children’s. If a user
          chooses to register, they can input a date of birth, username and
          email address to set up an account. The user’s account is limited to
          participating in those aspects of the Services that are deemed to be
          appropriate for users; features of our Services that may involve the
          possibility of posting personal information, such as comments, are
          automatically disabled. Immediately upon registration, the user’s
          email address is turned into an encrypted format, a “one way hash”,
          which we can’t read and which is used to authenticate the user login
          process. We do not permanently store the email addresses of users in a
          recoverable format because we do not retain the email addresses of
          users in a usable form after initial registration. We have no means of
          initiating contact with such users by email after registration. The
          user name of registered users is not used as a means to contact such
          users. We do not collect more personal data than is necessary to
          respond to a question or one-off request from a user. To provide
          parental notice or to obtain parental consent, nor do we distribute to
          third-party any personal information collected from children without
          parental consent. Parents are invited to review their children’s
          information by contacting us.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Opting Out of Marketing</h3>
        <p>
          You may opt-out of receiving promotional emails from us by following
          the instructions in those emails. If you opt-out, we may still send
          you non-promotional emails, such as emails about your accounts or our
          ongoing business relations. You may also opt-out of receiving SMS
          notifications from us via the settings on your device.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">
          Consent to Public Display of Data upon Your Acceptance
        </h3>
        <p>
          We may publicly display your data when you participate in-game related
          activities for the purposes of user identification. If you use Third
          Party Social Networks to participate in-game related activities,
          including but not limited to participation in leader boards,
          multi-player games or the downloading and uploading of content, AM
          Apps & Games and its affiliates may also collect, use, store, transmit
          and publicly display statistical data regarding game play (including
          scores, rankings and achievements), or identify content that is
          created and shared by you with other players. Data that personally
          identifies you is collected, used, stored and transmitted in
          accordance with this Privacy Policy.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">More</h3>
        <p>
          Our privacy policy may change from time to time. When we do, we will
          revise the “last updated” date at the bottom of the privacy statement.
          We will obtain your opt-in consent for any updates to this Privacy
          Policy that materially expand the sharing or use of your personal
          information in ways not disclosed in this Privacy Policy at the time
          of collection. Acceptance of the terms: By using AM Apps & Games games
          and Apps, you agree to the terms of this policy. If you do not accept
          the terms in this policy. Please do not use our games and Apps. The
          continued use of our products after any amendment of this privacy
          policy will be deemed your acceptance of the changes and/or new terms.
          AM Apps & Games reserves the right to modify this Privacy Policy at
          reasonable times, so please review it frequently. Your continued use
          of Services will signify your acceptance of the changes to this
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
