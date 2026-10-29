// All of the words on the website live in this one file.
// To update the site, change the text between the quotes and redeploy.

export const site = {
  name: 'The Uke Project',
  tagline: 'Seniors Music and Cognitive Wellness Program',
  description:
    'Turnkey, interactive group ukulele programs designed specifically for senior living communities and 55+ residences across Durham Region and Scarborough.',
  instructor: 'James Walsh, B.Mus',
  // PLACEHOLDER: replace with the real email and phone number.
  email: 'hello@theukeproject.com',
  phone: '(555) 014-2286',
  serviceArea: 'Serving Durham Region and Scarborough',
}

// Images are served through the Netlify Image CDN at the requested width.
export function img(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
}

// Items with a `hash` scroll to that section of the page (the contact form lives on Home).
export const nav: ReadonlyArray<{ to: '/' | '/program' | '/research' | '/about'; label: string; hash?: string }> = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'The Program' },
  { to: '/research', label: 'The Research' },
  { to: '/about', label: 'About' },
  { to: '/', hash: 'contact', label: 'Contact' },
]

export const home = {
  heading: 'Seniors Music and Cognitive Wellness Program',
  intro:
    'Turnkey, interactive group ukulele programs designed specifically for senior living communities and 55+ residences across Durham Region and Scarborough.',
  primaryCta: 'Get in touch',
  secondaryCta: 'See how the program works',
  stats: [
    { value: '20', label: 'concert ukuleles brought to every session' },
    { value: '3–4', label: 'chords learned in the very first session' },
    { value: '20+', label: 'years of experience in music education' },
  ],
  active: {
    heading: 'Active Music-Making instead of Passive Entertainment',
    paragraphs: [
      'While listening to live music brings immense joy and comfort to any senior living community, The Uke Project takes the musical experience a powerful step further: we place instruments directly into residents’ hands.',
      'Our program is built on a simple, research-backed foundation: active music-making is one of the most comprehensive brain workouts available. When a resident holds a ukulele, presses a chord, and strums along to a classic hit, they aren’t just enjoying a song—they are simultaneously engaging their visual, auditory, and motor pathways.',
    ],
  },
  course: [
    'Our weekly course brings the ukuleles, hand-picked music from the 50s, 60s, and 70s, and an instructor with more than 20 years of experience in music education. Students will leave knowing 3-4 chords and 1-2 songs after just one session!',
    'Large laminated chord sheets are left behind with the organizers each week for members to practice with. Over time your organization can build their own unique songbook, including variations for members looking for an extra challenge!',
  ],
}

export const program = {
  heading: 'A Simple Idea:',
  intro: 'A ukulele club that meets once a week to learn classic songs.',
  points: [
    'We bring up to 20 fully tuned high-quality concert ukuleles',
    'Within a few minutes members are playing chords and learning to strum along to some of their favourite songs',
    'There’s no sheet music, no complicated theory, and chord shapes are projected at the front of the class next to the instructor',
    'Each session is 45 minutes of directed learning followed by 15 minutes of jamming, one-to-one help, and socializing',
  ],
  faq: [
    {
      q: 'Why ukulele?',
      a: [
        'The ukulele is the ultimate equalizer. It features four soft nylon strings (unlike steel guitar strings that hurt unconditioned fingers) and a small, lightweight body that rests comfortably in a seated resident’s lap. Residents can play their very first songs within minutes, often using just one finger!',
      ],
    },
    {
      q: 'Is 20 the max class size?',
      a: [
        'We bring a mobile fleet of 20 concert ukuleles per session to maintain an optimal student-to-instructor ratio. For larger communities, back-to-back sessions can be arranged!',
      ],
    },
    {
      q: 'Practicing between sessions',
      a: [
        'Once a song is introduced in class, a large-print, laminated song sheet is added to the community’s song box. This will feature the chord chart, chord diagrams, and oftentimes, bonus “harder to play” bits for anyone looking for a challenge. You can access (or photocopy) as much as you like; it forever belongs to the organizers and participants!',
        'After residents have tried out the program they may want to have their very own ukulele to practice on. They can acquire one on their own, and we have a relationship with Long & McQuade that allows us to offer quality ukuleles at a discount for residents.',
      ],
    },
    {
      q: 'Accessibility',
      a: [
        'Our curriculum is engineered around accessibility. We use simple chord shapes so that residents with arthritis or limited range of motion can fully participate and produce rich, harmonious music without pain. We can also tailor our delivery pace for Memory Care and LTC settings, prioritizing rhythm, familiar song recall, and sensory engagement over technical theory.',
      ],
    },
  ],
}

export const research = {
  heading: ['Learning music isn’t just fun and fulfilling—', 'it’s active cognitive wellness in action.'],
  intro:
    'Group music classes are one of the most comprehensive workouts available for the aging brain. Active music-making engages visual, motor, and auditory neural pathways simultaneously, building cognitive reserve, enhancing neuroplasticity, and exercising fine motor dexterity.',
  features: [
    {
      title: 'Neuroprotective Benefits & Cognitive Reserve',
      body: 'Playing a musical instrument requires simultaneous engagement of auditory, visual, and motor neural networks. This multi-domain activity stimulates neuroplasticity and strengthens cognitive reserve—the brain’s resilience against age-related cognitive decline and memory loss.',
      research:
        'Studies published in Frontiers in Psychology show that active music-making enhances executive function and delays cognitive impairment, while landmark research in Imaging Neuroscience proves it is never too late to form new neural connections.',
    },
    {
      title: 'Joint Mobility, Dexterity & Physical Rehabilitation',
      body: 'Pressing soft nylon ukulele strings acts as functional, low-impact occupational therapy for older hands. The lightweight body and thin neck allow for gentle finger flexion and grip stabilization without placing heavy force on delicate joints.',
      research:
        'Clinical reviews published in the Journal of Hand Therapy demonstrate that active, low-resistance finger movements improve range of motion and joint mobility in arthritic hands, while research from the American Journal of Occupational Therapy confirms that incorporating music into motor rehabilitation significantly increases patient engagement, fine motor precision, and finger dexterity.',
    },
    {
      title: 'Music, Memory Recall & Emotional Well-Being',
      body: 'Musical memory is uniquely resilient against the aging process. Singing and strumming familiar classics from the 1950s, 60s, and 70s bypasses damaged cognitive pathways, unlocking vivid autobiographical memories, sparking spontaneous conversation, and reducing anxiety.',
      research:
        'Studies in the Journal of Alzheimer’s Disease show that music-based interventions stimulate neural networks tied to long-term autobiographical memory, while neuroimaging published in Brain reveals that the brain areas responsible for musical memory remain relatively spared in neurodegenerative conditions, allowing familiar music to trigger immediate emotional clarity and cognitive reconnection.',
    },
    {
      title: 'Social Connection, Agency & Peer Community',
      body: 'Loneliness and social isolation are major risk factors for cognitive and physical decline in older adults. Moving from passive listening to active group ensemble play gives residents a renewed sense of purpose, agency, and shared accomplishment as they build songs together.',
      research:
        'Systematic reviews in The Gerontologist highlight that active, group-based arts programs lead to statistically significant reductions in depression and feelings of isolation among seniors, while public health research in Arts & Health confirms that collective music-making fosters high levels of social cohesion, self-efficacy, and personal agency.',
    },
  ],
}

export const about = {
  eyebrow: 'Meet the Founder:',
  heading: 'James Walsh, B.Mus',
  paragraphs: [
    'James Walsh is a professional musician, music director, and educator with nearly three decades of experience performing, arranging, and leading ensembles across Ontario. A graduate of Humber College’s world-renowned Jazz Performance program, James has spent over 20 years guiding students of all ages and skill levels to discover the joy of active music-making.',
    'Throughout his career as a performer and bandleader, James observed firsthand how music acts as a universal bridge—unlocking deep memories, building instant community, and bringing immediate vitality to every room. He founded The Uke Project to combine his decades of musical expertise with a mission: delivering structured, highly accessible cognitive wellness and ukulele programs to senior living communities across Durham Region.',
  ],
}

// PLACEHOLDER: the heading and intro above the contact form were not in the supplied copy.
export const contact = {
  heading: 'Get in touch',
  intro: 'Tell us about your community and we’ll be in touch to talk about bringing The Uke Project to your residents.',
  roles: ['Activities or recreation director', 'Community or facility manager', 'Resident', 'Family member', 'Other'],
}
