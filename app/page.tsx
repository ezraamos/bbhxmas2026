import { listRsvps } from "@/lib/store";
import { itinerary, hotel } from "@/lib/itinerary";
import RsvpForm from "./RsvpForm";
import { PhotoColumns, PhotoStrip } from "./FloatingPhotos";
import MusicPlayer from "./MusicPlayer";

export const dynamic = "force-dynamic";

export default async function Home() {
  const rsvps = await listRsvps();
  const going = rsvps.filter((r) => r.going);
  const notGoing = rsvps.filter((r) => !r.going);

  return (
    <>
    <PhotoColumns />
    <MusicPlayer />
    <main>
      <header className="hero">
        <p className="eyebrow">Cebu City</p>
        <h1>🍻 Boys&apos; Night Out</h1>
        <p className="dates">December 18–20, 2026</p>
      </header>

      <PhotoStrip />

      {/* RSVP */}
      <section className="card">
        <h2>Are you going?</h2>
        <RsvpForm />

        <h3>
          Who&apos;s going <span className="count">{going.length}</span>
        </h3>
        {going.length === 0 ? (
          <p className="muted">Nobody yet. Be the first 👀</p>
        ) : (
          <ul className="people">
            {going.map((r) => (
              <li key={r.id}>
                <span className="avatar">{r.name[0].toUpperCase()}</span>
                <div>
                  <div className="person-name">{r.name}</div>
                  {r.note && <div className="person-note">{r.note}</div>}
                </div>
              </li>
            ))}
          </ul>
        )}

        {notGoing.length > 0 && (
          <>
            <h3 className="muted">
              Can&apos;t make it <span className="count count-muted">{notGoing.length}</span>
            </h3>
            <ul className="people people-out">
              {notGoing.map((r) => (
                <li key={r.id}>
                  <span className="avatar">{r.name[0].toUpperCase()}</span>
                  <div>
                    <div className="person-name">{r.name}</div>
                    {r.note && <div className="person-note">{r.note}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Hotel */}
      <section className="card">
        <h2>🏨 Where we&apos;re staying</h2>
        <dl className="hotel">
          <dt>Hotel</dt>
          <dd>{hotel.name}</dd>
          <dt>Address</dt>
          <dd>
            {hotel.mapsUrl ? (
              <a href={hotel.mapsUrl} target="_blank" rel="noreferrer">
                {hotel.address}
              </a>
            ) : (
              hotel.address
            )}
          </dd>
          <dt>Check-in</dt>
          <dd>{hotel.checkIn}</dd>
          <dt>Check-out</dt>
          <dd>{hotel.checkOut}</dd>
          {hotel.notes && (
            <>
              <dt>Notes</dt>
              <dd>{hotel.notes}</dd>
            </>
          )}
        </dl>
      </section>

      {/* Itinerary */}
      <section className="card">
        <h2>📅 Itinerary</h2>
        {itinerary.map((day) => (
          <div key={day.date} className="day">
            <h3>
              {day.date} <span className="muted">· {day.label}</span>
            </h3>
            <ol className="timeline">
              {day.slots.map((s) => (
                <li key={s.time} className={s.highlight ? "hl" : undefined}>
                  <div className="time">{s.time}</div>
                  <div>
                    <div className="title">{s.title}</div>
                    {s.items && (
                      <ul>
                        {s.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <footer className="muted">Merry Christmas, boys 🎅</footer>
    </main>
    </>
  );
}
