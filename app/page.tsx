export const dynamic = "force-dynamic";

import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/Cta";
import {recentSessions} from "@/constants/index";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
  let companions: any[] = [];
  let recentSessionsCompanions: any[] = [];
  let fetchError = null;
  try {
    companions = await getAllCompanions({ limit: 3 });
    recentSessionsCompanions = await getRecentSessions(10);
  } catch (err) {
    fetchError = err instanceof Error ? err.message : "Unknown error";
  }

  if (fetchError) {
    return (
      <main style={{ color: 'red', padding: 32 }}>
        <h1>Failed to load data</h1>
        <p>{fetchError}</p>
        <p>Please check your API, database, or environment variable configuration.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;