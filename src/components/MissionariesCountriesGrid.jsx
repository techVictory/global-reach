import React from 'react'
import { countryColumns } from '../data/countries'

export default function MissionariesCountriesGrid() {
  return (
    <section
      style={{
        backgroundColor: '#eaebe2',
        padding: '20px 48px 0',
      }}
    >
      <div
        className="countries-grid"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
        }}
      >
        {countryColumns.map((column, index) => (
          <CountryCard
            key={index}
            color={column.color}
            countries={column.countries}
            offset={index % 2 === 1}
          />
        ))}
      </div>

      <div
        style={{
          height: '18px',
          backgroundColor: '#171717',
          marginTop: '-2px',
        }}
      />

      <style>
        {`
          .countries-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
            align-items: end;
          }

          .country-card.offset {
            transform: translateY(42px);
          }

          @media (max-width: 900px) {
            .countries-grid {
              grid-template-columns: repeat(2, 1fr);
              align-items: stretch;
            }

            .country-card.offset {
              transform: none;
            }
          }

          @media (max-width: 520px) {
            .countries-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  )
}

function CountryCard({ color, countries, offset }) {
  return (
    <div
      className={`country-card ${offset ? 'offset' : ''}`}
      style={{
        backgroundColor: color,
        border: '2px solid #1a1a1a',
        borderBottom: 'none',
        borderRadius: '28px 28px 0 0',
        padding: '42px 34px 48px',
        minHeight: '430px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(18px, 1.7vw, 26px)',
          fontWeight: 700,
          lineHeight: 1.65,
          color: '#1a1a1a',
        }}
      >
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  )
}