const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Refund Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Thank you for using <strong>devtinderonline.cloud</strong>. This
            Refund Policy explains the terms under which refunds may be granted.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">Digital Services</h2>
            <p>
              All services provided on this platform are digital. Once a payment
              is completed, it is generally non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Non-Refundable Situations
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Change of mind after purchase</li>
              <li>Partial usage of services</li>
              <li>Account suspension due to policy violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Refund Exceptions</h2>
            <p>
              Refunds may be considered if there is a billing error or if the
              service was not delivered due to a technical issue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
            <p>
              You may cancel your subscription at any time. Cancellation stops
              future billing but does not refund previous payments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>
              For refund-related queries, contact us at&nbsp;
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

export default RefundPolicy;
