import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 pb-32">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Refund Policy
        </h1>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            At <strong>devtinderonline.cloud</strong>, we strive to deliver
            reliable digital services. Please read this refund policy carefully
            before making any payments.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Nature of Services
            </h2>
            <p>
              All services offered on this platform are digital and delivered
              online. Once access is granted, services are considered consumed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Non-Refundable Payments
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Payments made for subscriptions or premium features</li>
              <li>Partially used or expired services</li>
              <li>Accounts suspended due to misuse or violations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Refund Exceptions
            </h2>
            <p>
              Refunds may be considered only if:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>A technical error caused incorrect billing</li>
              <li>The service was not accessible due to system failure</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Subscription Cancellation
            </h2>
            <p>
              You may cancel your subscription at any time. Cancellation stops
              future billing but does not refund past payments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Contact Support
            </h2>
            <p>
              For refund-related concerns, reach us at{" "}
              <a
                href="mailto:support@devtinderonline.cloud"
                className="text-blue-600 hover:underline"
              >
                Pritimukherjee650@gmail.com
              </a>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
