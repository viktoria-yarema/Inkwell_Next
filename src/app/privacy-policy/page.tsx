import PrivacyPolicyContentSection from "./sections/PrivacyPolicyContentSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Growing Minds Kindergarten blog.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <PrivacyPolicyContentSection />
      </div>
    </div>
  );
}
