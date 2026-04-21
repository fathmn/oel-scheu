import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, fadeUpCard } from "@/lib/animations";

const teamDE = {
  title: "Team Deutschland",
  company: "Oel-Scheu GmbH",
  departments: [
    { role: "Geschäftsführung", members: ["Wolfgang Scheu", "Lukas Scheu"] },
    { role: "Verkauf", members: ["Michael Steinhoff", "Markus Edele", "Niki Stiegler"] },
    { role: "Verwaltung", members: ["Susi Scheu", "Iris Züfle", "Monika Müller"] },
    { role: "Lager und Vertrieb", members: ["Aleksander Horvat", "Patrick Letzgus"] },
  ],
};

const teamCH = {
  title: "Team Schweiz",
  company: "Oel-Scheu Vertriebspartner GmbH",
  departments: [
    { role: "Geschäftsführung", members: ["Wolfgang Scheu", "Lukas Scheu"] },
    { role: "Verkauf", members: ["Wolfgang Scheu"] },
    { role: "Verwaltung", members: ["Petra Carrer", "Bettina Meyzis"] },
  ],
};

const TeamSection = ({ team, direction }: { team: typeof teamDE; direction: "left" | "right" }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={direction === "left" ? fadeLeft : fadeRight}
  >
    <div className="mb-4">
      <h3 className="font-heading text-xl font-semibold">{team.title}</h3>
      <p className="text-sm text-muted-foreground">{team.company}</p>
    </div>
    <div className="space-y-6">
      {team.departments.map((dept) => (
        <div key={dept.role} className="border-l-2 border-primary/20 pl-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">
            {dept.role}
          </h4>
          <div className="flex flex-wrap gap-2">
            {dept.members.map((name) => (
              <span
                key={name}
                className="text-sm bg-surface px-3 py-1.5 border border-border/50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Team = () => (
  <PageLayout>
    <PageHero title="Unser Team" subtitle="Die Menschen hinter Oel-Scheu" />
    <section className="pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <img
              src="/images/optimized/team-wolfgang-lukas.webp"
              alt="Wolfgang und Lukas Scheu"
              width={1200}
              height={798}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full rounded-sm"
            />
            <div>
              <p className="text-sm text-muted-foreground mb-2">Von links:</p>
              <p className="font-heading text-lg font-semibold">Wolfgang Scheu</p>
              <p className="text-sm text-muted-foreground mb-4">Geschäftsführer, Gründerfamilie</p>
              <p className="font-heading text-lg font-semibold">Lukas Scheu</p>
              <p className="text-sm text-muted-foreground">3. Generation, seit 2023 im Unternehmen</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <TeamSection team={teamDE} direction="left" />
          <TeamSection team={teamCH} direction="right" />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Team;
