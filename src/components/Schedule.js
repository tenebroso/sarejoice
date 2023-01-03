import { isThisHour, differenceInMinutes } from 'date-fns'

export function getIsThisHour(date){
  return isThisHour(date)
}

export function getIsThisAfter(date, today){
  return differenceInMinutes(date, today) < 0
}

export const schedule = {
  friday: [
    {
      time: '9:30 A.M.',
      title: 'Commencement Ceremony',
      location: 'Oak Creek Corps, Oak Creek, WI',
      notes: '',
      // dates: [
      //   new Date(2023, 5, 9, 9),
      //   new Date(2023, 5, 9, 10),
      // ]
    },
    {
      time: '12:00 P.M. - 2:00 P.M.',
      title: `Retired Officers' Luncheon+`,
      location: 'Hyatt Regency Milwaukee Hotel, Vue North Ballroom, 21st Floor',
      notes: '',
    },
    {
      time: '1:00 P.M. - 6:30 P.M.',
      title: 'Trade Central and Museum Exhibits Open to the Public',
      location: 'Wisconsin Center, Ballrooms A &amp; B, 1st Floor',
      notes: '',
    },
    {
      time: '2:00 P.M.',
      title: 'Onsite Registration and Packet Distribution for all Delegates',
      location: 'Miller High Life Theatre, Box Office Lobby',
      notes: '',
    },
    {
      time: '2:00 P.M. - 7:30 P.M.',
      title: '5K Run/Walk for the World 2023 Packet Distribution',
      location: 'Miller High Life Theatre, Box Office Lobby',
      notes: '',
    },
    {
      time: '4:00 P.M. - 5:00 P.M.',
      title: 'Candidates Meet and Greet+',
      location: 'Hyatt Regency Milwaukee Hotel, Vue East Ballroom, 21st Floor',
      notes: '',
    },
    {
      time: '5:00 P.M. - 7:00 P.M.',
      title: 'Long Service Recognition Dinner+',
      location: 'Hyatt Regency Milwaukee Hotel, Vue North Ballroom, 21st Floor',
      notes: '',
    },
    {
      time: '7:00 P.M. - 9:45 P.M.',
      title: 'Child Care Registration and Drop-Off for Pre-Registered Children**',
      location: 'Milwaukee Theatre',
      notes: `
      (ALL Adults authorized to drop off and pick up Children MUST come for a photo - DROP OFF TIME ONLY)<br />
      Children, Ages 0-23 months, Kilbourn Hall East Rotunda, 1st Floor<br />
      Children, Ages 2-5 years, Kilbourn Hall, 1st Floor**<br />
      Children, Ages 6-11 years, Plankinton Hall, 2nd Floor**
      `,
    },
    {
      time: '7:30 P.M. - 9:30 P.M.',
      title: 'Opening Session - We will Rejoice in the City',
      location: 'Miller High Life Theatre',
      notes: '',
    },
    {
      time: '10:00 P.M. - 11:30 P.M.',
      title: 'Teen & Young Adult Afterglow (Ages 13-29 years old) **',
      location: 'Miller High Life Theatre, Plankinton Hall, 2nd Floor',
      notes: '',
    },
  ],
  saturday: [
    {
      time: '7:00 A.M. - 9:00 A.M.',
      title: '5K Run/Walk for the World 2023 with the Territorial Commander**',
      location: 'Juneau Park, Downtown Milwaukee Lakefront',
      notes: '',
    },
    {
      time: '8:30 A.M. - 9:30 A.M.',
      title: 'CFOT Summer Session Breakfast+',
      location: 'Hyatt Regency Milwaukee Hotel, Vue North Ballroom, 21st Floor',
      notes: '',
    },
    {
      time: '9:00 A.M.',
      title: 'Onsite Registration and Packet Distribution for all Delegates',
      location: 'Miller High Life Theatre, Box Office Lobby',
      notes: '',
    },
    {
      time: '9:15 A.M. - 11:45 A.M.',
      title: 'Child Care for Pre-Registered Children (ages 0-11 years)**Until End of Meeting',
      location: 'Miller High Life Theatre - Kilbourn Hall East Rotunda / Kilbourn Hall / Plankinton Hall',
      notes: 'Lunch will not be provided',
    },
    {
      time: '10:00 A.M.',
      title: 'Morning Session - We will Rejoice across all Cultures',
      location: 'Miller High Life Theatre',
      notes: '',
    },
    {
      time: '12:30 P.M. - 5:30 P.M.',
      title: 'Trade Central and Museum Exhibits Open to the Public',
      location: 'Wisconsin Center, Ballrooms A & B, 1st Floor',
      notes: '',
    },
    {
      time: '4:15 P.M. - 6:30 P.M.',
      title: 'Fellowship of the Silver Star Dinner +',
      location: 'Hyatt Regency Milwaukee Hotel, Regency Ballroom, Rooms CD, 2nd Floor',
      notes: '',
    },
    {
      time: '6:30 P.M. - 10:00 P.M.',
      title: 'Onsite Registration and Packet Distribution for all Delegates',
      location: 'Miller High Life Theatre, Box Office Lobby',
      notes: '',
    },
    {
      time: '6:45 P.M - 9:30 P.M.',
      title: 'Child Care for Pre-Registered Children (ages 0-11 years)** Until End of Meeting',
      location: 'Miller High Life Theatre - Kilbourn Hall / Kilbourn Hall East Rotunda, 1st Floor - Plankinton Hall, 2nd Floor',
      notes: '',
    },
    {
      time: '7:30 P.M.',
      title: 'Evening Session - We will Rejoice with Creative Arts',
      location: 'Miller High Life Theatre',
      notes: '',
    }
  ],
  sunday: [
    {
      time: '8:00 A.M. - 3:00 P.M.',
      title: 'Onsite Registration and Packet Distribution for all Delegates',
      location: 'Miller High Life Theatre, Box Office Lobby',
      notes: '',
    },
    {
      time: '8:15 A.M. - 11:45 A.M.',
      title: 'Child Care for Pre-Registered Children (ages 0-11 years)** Until End of Meeting',
      location: 'Miller High Life Theatre -  Kilbourn Hall East Rotunda/ Kilbourn Hall / Plankinton Hall',
      notes: '**THERE WILL BE NO AFTERNOON CHILD CARE**',
    },
    {
      time: '9:00 A.M. - 11:30 A.M.',
      title: 'Commissioning and Ordination of the Reflectors of Holiness Session',
      location: 'Miller High Life Theatre',
      notes: '',
    },
    {
      time: '11:30 A.M. - 1:00 P.M.',
      title: 'Lunch Break',
      location: '',
      notes: '',
    },
    {
      time: '1:00 P.M. - 3:00 P.M.',
      title: 'Parade of Flags followed by the Service of Appointments for the Reflectors of Holiness Session',
      location: 'Miller High Life Theatre',
      notes: '',
    },
    {
      time: '3:00 P.M. - 4:00 P.M.',
      title: 'Reception for the New Lieutenants & Unit Commanders+',
      location: 'Miller High Life Theatre, Kilbourn Hall East Rotunda, 1st Floor',
      notes: '',
    },
  ]
}

export function getTime() {
  // "2/21/22, 2:53:58 PM CST"
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'long',}).format(new Date());
}

const checkTime = () => setTimeout(() => {
  console.log(getTime());
  checkTime();
},
  5000);