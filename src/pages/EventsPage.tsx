import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

const otherEvents = [
  {
    role: "Concert organizer",
    title: "Annual concerts for Stockholm's student orchestras",
    period: "2021, 2023, 2024",
    description:
      "Organized three joint concerts involving more than 150 performers and dancers each, with roughly 250 at the largest. All three met their financial targets or finished with a surplus. The teams and guests responded positively to the experience and manageable workload.",
  },
  {
    role: "Lead organizer, then committee member",
    title: "Annual gathering for three student orchestras",
    period: "2024–2025",
    description:
      "Led the 2024 edition of QORK and returned as a committee member with substantial responsibilities in 2025. A last-minute venue change in 2024 disrupted the plan and budget — a practical lesson in contingency planning.",
  },
  {
    role: "Tour organizer",
    title: "Orchestra tour to Tjörn and Hårgaberget",
    period: "2024",
    description:
      'Organized the "Tjörnfisk och Hårgalåten" tour for Kårsdraget, including transport, accommodation, and performances.',
  },
  {
    role: "Communications and operations support",
    title: "National student-orchestra festival",
    period: "2024",
    description:
      "Supported the STORK organizing committee with communications and practical tasks that kept the festival running. The event brought together Swedish student orchestras and international guests.",
  },
];

const leadership = [
  {
    role: "Orchestra lead",
    organization: "PromenadorQuestern",
    period: "2021–2022",
  },
  {
    role: "Vice chair",
    organization: "Blåslaget",
    period: "2024",
  },
  {
    role: "Music and repertoire planning",
    organization: "Kårsdraget",
    period: "2024",
  },
  {
    role: "Conductor and repertoire lead",
    organization: "Blåslaget",
    period: "2025",
  },
  {
    role: "Dance-group lead",
    organization: "Paletten / PromenadorQuestern",
    period: "2025–2026",
  },
];

export function EventsPage() {
  return (
    <div className="contentPage eventsPage">
      <PageHeader
        eyebrow="Events & leadership"
        title="Bringing people together"
        intro="I help turn ambitious ideas into events that work — from concerts and orchestra tours to a three-day Nordic music festival."
      />

      <section className="eventFeature" aria-labelledby="natom-title">
        <p className="eyebrow">Featured event · Overall coordinator</p>
        <h2 id="natom-title">A three-day music festival for Nordic technical universities</h2>
        <p className="eventFeatureLead">
          For NATOM, I was the overall coordinator of a festival bringing together
          six orchestras from Nordic technical universities. I coordinated the
          organizing committee and kept the different workstreams aligned.
        </p>

        <dl className="eventStats">
          <div>
            <dt>Participants</dt>
            <dd>~300</dd>
          </div>
          <div>
            <dt>Orchestras</dt>
            <dd>6</dd>
          </div>
          <div>
            <dt>Event length</dt>
            <dd>3 days</dd>
          </div>
          <div>
            <dt>Budget</dt>
            <dd>~SEK 300k</dd>
          </div>
        </dl>

        <div className="eventFeatureDetails">
          <div>
            <h3>What I coordinated</h3>
            <p>
              Budget planning, teams and staffing, food, accommodation,
              performances, storage, transport, and the practical handoffs
              between those areas. Each area had people doing the work; my job
              was to help the whole event come together.
            </p>
          </div>
          <div>
            <h3>Outcome</h3>
            <p>
              The accounts are still being finalized, but currently indicate
              a surplus of about SEK 50,000. That result reflects the careful
              work of the technical and food teams, and the wider committee.
            </p>
          </div>
        </div>
      </section>

      <section className="eventSection" aria-labelledby="other-events-title">
        <div className="eventSectionHeader">
          <p className="eyebrow">Selected experience</p>
          <h2 id="other-events-title">Other events I've helped deliver</h2>
        </div>
        <div className="eventCards">
          {otherEvents.map((event) => (
            <article className="eventCard" key={event.title}>
              <p className="eventRole">{event.role} · {event.period}</p>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eventSection" aria-labelledby="leadership-title">
        <div className="eventSectionHeader">
          <p className="eyebrow">Continuing responsibilities</p>
          <h2 id="leadership-title">Leadership in student music organizations</h2>
          <p>
            Alongside individual events, I've held elected and operational roles
            involving planning, communication and responsibility for groups.
          </p>
        </div>
        <ul className="eventRoleList">
          {leadership.map((item) => (
            <li key={item.role + item.organization}>
              <span className="eventRoleListTitle">{item.role}</span>
              <span>{item.organization}</span>
              <span className="eventRoleListDate">{item.period}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="eventContact" aria-labelledby="event-contact-title">
        <p className="eyebrow">Let's work together</p>
        <h2 id="event-contact-title">Planning an event or building a team?</h2>
        <p>
          I'm interested in event coordination, project coordination, and
          workplace roles, as well as frontend and UX work.
        </p>
        <Link to="/contact" className="button">Get in touch</Link>
      </section>
    </div>
  );
}
