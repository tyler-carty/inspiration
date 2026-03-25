import SlideTitle from './SlideTitle'
import SlideStudentPhoto from './SlideStudentPhoto'
import SlideHowDidIGetHere from './SlideHowDidIGetHere'
import SlideLegoStarWars from './SlideLegoStarWars'
import SlidePilot from './SlidePilot'
import SlideComputerScience from './SlideComputerScience'
import SlideSoftwareDev from './SlideSoftwareDev'
import SlideCleaningJob from './SlideCleaningJob'
import SlideTriedEverything from './SlideTriedEverything'
import SlideJobsNeverHeard from './SlideJobsNeverHeard'
import SlideComputersDumb from './SlideComputersDumb'
import SlideSpotTheFraud from './SlideSpotTheFraud'
import SlideFraudRound1 from './SlideFraudRound1'
import SlideFraudRound2 from './SlideFraudRound2'
import SlideFraudRound3 from './SlideFraudRound3'
import SlideYouDidMyJob from './SlideYouDidMyJob'
import SlideMotivational from './SlideMotivational'
import SlideQuestions from './SlideQuestions'

export const slideConfig = [
  { component: SlideTitle,           hasReveal: true  },
  { component: SlideHowDidIGetHere,  hasReveal: false },
  { component: SlideStudentPhoto,    hasReveal: false },
  { component: SlidePilot,           hasReveal: false }, // dream first
  { component: SlideLegoStarWars,    hasReveal: false }, // then the inciting moment
  { component: SlideComputerScience, hasReveal: false },
  { component: SlideSoftwareDev,     hasReveal: false },
  { component: SlideTriedEverything, hasReveal: false },
  { component: SlideComputersDumb,   hasReveal: false }, // concept before jobs
  { component: SlideJobsNeverHeard,  hasReveal: false }, // jobs that exist because of it
  { component: SlideSpotTheFraud,    hasReveal: false },
  { component: SlideFraudRound1,     hasReveal: true  },
  { component: SlideFraudRound2,     hasReveal: true  },
  { component: SlideFraudRound3,     hasReveal: true  },
  { component: SlideYouDidMyJob,     hasReveal: false },
  { component: SlideMotivational,    hasReveal: false },
  { component: SlideCleaningJob,     hasReveal: false },
  { component: SlideQuestions,       hasReveal: false },
]
