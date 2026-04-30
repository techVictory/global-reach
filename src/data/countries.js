export const countryColumns = [
  {
    color: '#02f590',
    countries: [
      'Afghanistan',
      'Bolivia',
      'Bulgaria',
      'Cambodia',
      'Cameroon',
      'China',
      'Denmark',
      'Ireland',
      'Mozambique',
    ],
  },
  {
    color: '#d1b9f8',
    countries: [
      'Mexico',
      'Russia',
      'Rwanda',
      'Scotland',
      'Tanzania',
      'Thailand',
      'Netherlands',
      'Uganda',
    ],
  },
  {
    color: '#ff6e46',
    countries: [
      'Ethiopia',
      'Ghana',
      'Greece',
      'Guatemala',
      'Honduras',
      'India',
      'Indonesia',
      'Italy',
    ],
  },
  {
    color: '#5dbaff',
    countries: [
      'Puerto Rico',
      'Ecuador',
      'USA',
      'Peru',
      'Myanmar',
      'Jamaica',
      'Japan',
      'Israel',
    ],
  },
]

export const allCountries = countryColumns.flatMap((column) => column.countries)