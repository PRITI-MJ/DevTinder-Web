import React from 'react'
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At <strong>devtinderonline.cloud</strong>, your privacy is important to
            us. This Privacy Policy explains how we collect, use, and protect
            your information when you use our website.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Name, email address, and profile details</li>
              <li>Information you provide through forms or messages</li>
              <li>Technical data such as IP address and browser type</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide and improve our services</li>
              <li>To manage user accounts</li>
              <li>To communicate important updates</li>
              <li>To ensure security and prevent misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p>
              We may use cookies to maintain login sessions, analyze website
              traffic, and improve user experience. You can disable cookies in
              your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Security</h2>
            <p>
              We take reasonable steps to protect your data, but no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal
              information by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
              Email:&nbsp;
              <a
                href="mailto:support@devtinderonline.cloud"
                className="text-blue-600 hover:underline"
              >
                support@devtinderonline.cloud
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

