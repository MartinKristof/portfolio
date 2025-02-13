import {
  Calendar,
  Play,
  ExternalLink,
  Mail,
  Linkedin,
  Building2,
  Github,
  Facebook,
  Instagram,
  Speech,
  Youtube,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@pf/components/ui/button';
import { Card, CardHeader, CardContent } from '@pf/components/ui/card';
import { Badge } from '@pf/components/ui/badge';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { TalksGallery } from './components/talks-gallery';
import { LanguageFlag } from './components/language-flag';

const RECENT_TALKS = [
  {
    title: 'React Compiler in Action',
    event: 'MeetUpdate 2024',
    link: 'https://www.youtube.com/watch?v=Q_C6WzpKav8',
    thumbnail: 'https://img.youtube.com/vi/Q_C6WzpKav8/0.jpg',
    readMore: '',
    language: 'cs',
  },
  {
    title: 'React Premature Optimization',
    event: 'MeetUpdate 2024',
    link: 'https://www.youtube.com/watch?v=yCIvkpvJuqQ',
    thumbnail: 'https://img.youtube.com/vi/yCIvkpvJuqQ/0.jpg',
    readMore: '',
    language: 'cs',
  },
  {
    title: 'React Compiler: Game Changer?',
    event: 'TechMeetup 2024',
    link: 'https://www.youtube.com/watch?v=o1-rGxxWIV8',
    thumbnail: 'https://img.youtube.com/vi/o1-rGxxWIV8/0.jpg',
    readMore: '',
    language: 'en',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/martin-kri%C5%A1tof-b6b78177/',
    color: 'hover:text-[#0A66C2]',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/MartinKristof',
    color: 'hover:text-[#181717]',
  },
  {
    name: 'X (Twitter)',
    icon: X,
    href: 'https://x.com/MartasKristof',
    color: 'hover:text-[#000000]',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/martas.kristof',
    color: 'hover:text-[#1877F2]',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/martas.kristof/',
    color: 'hover:text-[#E4405F]',
  },
  {
    name: 'Youtube',
    icon: Youtube,
    href: 'https://www.youtube.com/@martinkristof4804',
    color: 'hover:text-[#E4405F]',
  },
  {
    name: 'Meetup',
    icon: Speech,
    href: 'https://www.meetup.com/members/207123401/',
    color: 'hover:text-[#E4405F]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:me@kristofmartin.eu',
    color: 'hover:text-primary',
  },
];

const PAST_TALKS = [
  {
    year: '2024',
    title: 'Performance Measurement of Micro-frontends in CI/CD via SpeedCurve',
    event: 'FrontKon 24',
    link: 'https://www.heurekadevs.cz/martin-kristof-na-frontkon-2024-',
    language: 'cs',
  },
  {
    year: '2023',
    title: 'How to Use the Power of Cooperation?',
    event: 'FrontKon + Frontendisti',
    link: 'https://www.heurekadevs.cz/martin-kristof-pro-frontendisty-jak-vyuzit-silu-spolecne-prace',
    language: 'cs',
  },
  {
    year: '2023',
    title: 'Next.js 14 + Server Actions - remastered',
    event: 'TechMeetup 2023',
    link: 'https://www.youtube.com/watch?v=AUziV75JRCo',
    readMore:
      'https://www.heurekadevs.cz/poznamky-z-konference-heureka-devs-vyrazili-na-techmeetup-konferenci-do-ostravy',
    language: 'cs',
  },
  {
    year: '2022',
    title: 'WebExpo Host for Speakers Corner',
    event: 'WebExpo',
    link: 'https://slideslive.com/s/martin-kristof-107180?tab=presentations',
    description: 'QA with Robin Pokorný, QA with Břéťa Proft and Terka Vaňková',
    language: 'en',
  },
  {
    year: '2022',
    title: 'Visual Regression Testing',
    event: 'Frontendisti',
    link: 'https://www.heurekadevs.cz/vizualni-regresivni-testy',
    language: 'cs',
  },
  {
    year: '2021',
    title: 'React Premature Optimization',
    event: 'FrontKon',
    link: 'https://www.heurekadevs.cz/jak-se-vyhnout-predcasne-optimalizaci-v-reactu',
    language: 'cs',
  },
  {
    year: '2020',
    title: 'Next.js',
    event: 'Vzhurudolu.cz podcast',
    link: 'https://www.vzhurudolu.cz/podcast/169-podcast-next-js',
    language: 'cs',
  },
  {
    year: '2018',
    title: 'Next.js and UI Library',
    event: 'Frontendisti',
    link: 'https://www.youtube.com/watch?v=-lyxi-cHbY8',
    language: 'cs',
  },
  {
    year: '2016',
    title: 'Jobs UI',
    event: 'Frontendisti',
    link: 'https://www.youtube.com/watch?app=desktop&v=8nVoafsc0PQ',
    language: 'cs',
  },
];

const SKILLMEA_COURSES = [
  {
    title: 'React 19 for Beginners',
    link: 'https://skillmea.cz/online-kurzy/react-pro-zacatecniky',
    thumbnail: 'https://img.youtube.com/vi/bgzvAjhKsbM/0.jpg',
    description: 'Start your journey with React 19',
    language: 'cs',
  },
  {
    title: 'React 19 for Intermediate',
    link: 'https://skillmea.cz/online-kurzy/react-pro-mirne-pokrocile',
    thumbnail: 'https://img.youtube.com/vi/CCNQYYHLYds/0.jpg',
    description: 'Level up your React skills',
    language: 'cs',
  },
  {
    title: 'React 19: Deep Dives',
    link: 'https://skillmea.cz/online-kurzy/react-deep-dives',
    thumbnail: 'https://img.youtube.com/vi/J0Xa0_pm2aQ/0.jpg',
    description: 'Master advanced React concepts',
    language: 'cs',
  },
];

const BLOG_POSTS = [
  {
    title: 'Hackathons for OneUI',
    source: '<HeurekaDevs />',
    description: 'An in-depth look at improving UI libraries through focused hackathons.',
    link: 'https://www.heurekadevs.cz/hackat-on-vymazlujeme-ui-knihovnu',
    language: 'cs',
  },
  {
    title: 'Martin Krištof at FrontKon 2024 about Measuring the Performance of Micro-frontends',
    source: '<HeurekaDevs />',
    description:
      'This year FrontKon was packed. More than four dozen speakers took turns in three lecture halls, and Martin Krištof was among them.',
    link: 'https://www.heurekadevs.cz/martin-kristof-na-frontkon-2024-',
    language: 'cs',
  },
  {
    title: 'Visual Regression Testing',
    source: '<HeurekaDevs />',
    description:
      'Our frontend developer Martin Krištof summarized what visual regression tests are for and why we decided to use them at Heureka Group.',
    link: 'https://www.heurekadevs.cz/vizualni-regresivni-testy',
    language: 'cs',
  },
];

const WORK_EXPERIENCE = [
  {
    title: 'Dev Team Lead',
    company: 'Heureka Group a.s.',
    period: 'Jul 2022 - Present',
    description: 'Leading team Road To Product',
    current: true,
  },
  {
    title: 'Lecturer',
    company: 'Skillmea',
    period: 'March 2024 - Present',
    description: 'Video courses for React.js.',
    current: true,
  },
  {
    title: 'Front-end Leader',
    company: 'Heureka Group a.s.',
    period: 'Jul 2020 - Jan 2025',
    description: 'Leading front-end guild',
  },
  {
    title: 'Front-end Developer',
    company: 'Heureka Group a.s.',
    period: 'Jul 2020 - Jul 2022',
    description:
      'Developed the main micro-front-ends on the website (Category, SERP, Homepage, Navigation, Footer) written in React.js and Node.js',
  },
  {
    title: 'Lecturer',
    company: 'Anywhere s.r.o.',
    period: 'Jan 2020 - Present',
    description: 'B2B and B2C on-site and on-line courses.',
    current: true,
  },
  {
    title: 'Team Lead & Front-end Leader',
    company: 'LMC s.r.o.',
    period: 'Dec 2019 - Jun 2020',
    description: 'For Arnold Robot project',
  },
  {
    title: 'Front-end Developer & Front-end Leader',
    company: 'LMC s.r.o.',
    period: 'Aug 2017 - Dec 2019',
    description: 'Developed Seduo.cz',
  },
  {
    title: 'Software Engineer at Jobs.cz',
    company: 'LMC s.r.o.',
    period: 'Sep 2014 - Aug 2017',
    description: 'Developed Jobs.cz',
  },
  {
    title: 'Software Engineer for Jobs.cz',
    company: 'Groupe SII',
    period: 'Sep 2014 - Mar 2018',
    description: 'Outsourced to LMC s.r.o. for web development projects',
  },
  {
    title: 'Web Developer',
    company: 'E-Solutions, s.r.o.',
    period: 'Oct 2013 - Aug 2014',
    description: 'E-Shops and web development projects',
  },
];

const Page = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      {/* Hero Section */}
      <section id="about" className="relative px-4 py-20 md:py-32 mx-auto max-w-6xl overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2 items-center animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Martin Krištof</h1>
            <p className="text-xl text-muted-foreground mb-6">
              React Expert, Conference Speaker, and Technical Trainer specializing in modern web development, React
              optimization, Next.js, and QA.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="mailto:me@kristofmartin.eu">
                  <Mail className="mr-2 h-4 w-4" />
                  Book Training
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://skillmea.cz/kanaly/martas-kristof">View Courses</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-square">
            <Image src="/me.jpg" alt="Martin Krištof" className="rounded-2xl object-cover" fill priority />
          </div>
        </div>
      </section>

      <section id="social" className="px-4 py-16">
        <div className="mx-auto max-w-6xl animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Find Me on Social Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-rows-2 gap-4 max-w-3xl mx-auto">
            {SOCIAL_LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-4 rounded-lg hover:bg-muted transition-colors ${link.color} group`}
              >
                <link.icon className="h-6 w-6 mb-2 transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Talks Section */}
      <section id="talks" className="px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Conference Talks</h2>
          <div className="grid gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-slide-up">
              <CardContent className="p-6">
                <Badge className="mb-4">Upcoming</Badge>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="text-xl font-semibold flex items-start">
                      React Compiler in action! Workshop
                      <LanguageFlag language="en" />
                    </h3>
                    <p className="text-muted-foreground">WebExpo 2025</p>
                    <Link
                      href="https://webexpo.net/prague2025/sessions/free-workshop-react-compiler-in-action/"
                      className="text-primary hover:underline"
                    >
                      Event Details →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RECENT_TALKS.map((talk, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group">
                      <Image
                        src={talk.thumbnail || '/placeholder.svg'}
                        alt={talk.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <Link href={talk.link} className="absolute inset-0" target="_blank">
                        <span className="sr-only">Watch {talk.title}</span>
                      </Link>
                    </div>
                    <h3 className="text-xl font-semibold flex items-start">
                      {talk.title}
                      <LanguageFlag language={talk.language} />
                    </h3>
                    <p className="text-muted-foreground">{talk.event}</p>
                    {talk.readMore && (
                      <Link href={talk.readMore} className="text-primary hover:underline mt-2 block">
                        Read More →
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Past Talks</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {PAST_TALKS.map((talk, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Badge variant="outline">{talk.year}</Badge>
                    <div>
                      <h4 className="font-medium flex items-start">
                        {talk.title}
                        <LanguageFlag language={talk.language} />
                      </h4>
                      <p className="text-sm text-muted-foreground">{talk.event}</p>
                      {talk.description && <p className="text-sm text-muted-foreground">{talk.description}</p>}
                      <Link
                        href={talk.link}
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        target="_blank"
                      >
                        View Details
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="animate-fade-in">
                <TalksGallery />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Updated with thumbnails */}
      <section id="courses" className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Online Courses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILLMEA_COURSES.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-slide-up overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail || '/placeholder.svg'}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-start">
                    {course.title}
                    <LanguageFlag language={course.language} />
                  </h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <Link
                    href={course.link}
                    className="inline-flex items-center text-primary hover:underline"
                    target="_blank"
                  >
                    View Course
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="https://skillmea.cz/kanaly/martas-kristof" target="_blank">
                View All Courses
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Teaching & Training</h2>
          <div className="grid gap-8 md:grid-cols-2 animate-slide-up">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Corporate Training</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Česká Spořitelna</h4>
                  <p className="text-muted-foreground">
                    Designed and led the migration from Angular to React through workshops. Currently teaching LWC
                    components and Unit Testing.
                  </p>
                  <Link
                    href="https://www.linkedin.com/posts/martin-kri%C5%A1tof-b6b78177_23-workshopu-ohledn%C4%9B-migrace-z-angularu-activity-7138428883606851585-7a5G"
                    className="text-primary hover:underline"
                  >
                    View Case Study →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Public Courses</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium">Anywhere Education</h4>
                  <p className="text-muted-foreground">
                    5+ years of teaching React, Next.js, JavaScript, and testing methodologies through public workshops
                    and corporate training.
                  </p>
                  <Link href="https://education.anywhere.cz/lektori/" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="writing" className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Writing</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-slide-up">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-start">
                    {post.title}
                    <LanguageFlag language={post.language} />
                  </h3>
                  <h4 className="text-l font-semibold mb-4">{post.source}</h4>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <Link href={post.link} className="text-primary hover:underline">
                    Read Article →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="https://www.heurekadevs.cz/martin-kristof" target="_blank">
                View All Articles on HeurekaDevs
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="space-y-8">
              {WORK_EXPERIENCE.map((job, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 md:w-1/2">
                    <Card className="relative">
                      <div className="absolute top-6 left-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      </div>
                      <CardContent className="p-6">
                        <Badge variant={job.current ? 'default' : 'secondary'} className="mb-2">
                          {job.period}
                        </Badge>
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          {job.title}
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                        </h3>
                        <p className="text-muted-foreground font-medium">{job.company}</p>
                        <p className="text-muted-foreground mt-2">{job.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in having me speak at your conference, conduct a workshop, or discuss React development?
            Let&apos;s connect!
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="mailto:me@kristofmartin.eu">
                  <Mail className="mr-2 h-4 w-4" />
                  Book Training
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://www.linkedin.com/in/martin-kri%C5%A1tof-b6b78177/" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://github.com/MartinKristof" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Page;
