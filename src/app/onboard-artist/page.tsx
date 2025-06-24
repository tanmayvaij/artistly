import ArtistsOnboardForm from "@/components/ArtistsOnboardForm";

export default function OnboardPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-10 text-pink-600">
        Onboard Artist
      </h1>

      <ArtistsOnboardForm />
    </main>
  );
}

export const metadata = {
  title: "Onboard an Artist - Artistly",
  description:
    "Join Artistly as a performing artist. Submit your profile, set your service categories, and get discovered.",
};
