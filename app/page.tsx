"use client";
import { Calendar, Play, ExternalLink, Mail, Linkedin, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@pf/components/ui/button"
import { Card, CardHeader, CardContent } from "@pf/components/ui/card"
import { Badge } from "@pf/components/ui/badge"


const FEATURED_TALKS = [
  {
    title: "React Compiler in action",
    event: "MeetUpdate 2024",
    link: "https://www.youtube.com/watch?v=Q_C6WzpKav8",
    thumbnail: `https://img.youtube.com/vi/Q_C6WzpKav8/0.jpg`,
  },
  {
    title: "React Premature Optimization",
    event: "MeetUpdate 2024",
    link: "https://www.youtube.com/watch?v=yCIvkpvJuqQ",
    thumbnail: `https://img.youtube.com/vi/yCIvkpvJuqQ/0.jpg`,
  },
  {
    year: "2024",
    title: "Performance Measurement of Micro-frontends in CI/CD via SpeedCurve",
    event: "Frontkon",
    link: "https://www.youtube.com/watch?v=bgEJ3RKSPcs",
    thumbnail: `https://img.youtube.com/vi/bgEJ3RKSPcs/0.jpg`,
    readMore: "https://www.heurekadevs.cz/martin-kristof-na-frontkon-2024-",
  },
]

const PAST_TALKS = [
  {
    year: "2024",
    title: "React Compiler: The Game Changer?",
    event: "TechMeetup",
    link: "https://www.linkedin.com/posts/martin-kri%C5%A1tof-b6b78177_reactcompiler-reactjs-activity-7255666369336111106-jB-H?utm_source=share&utm_medium=member_desktop",
  },
  {
    year: "2023",
    title: "How to use the power of cooperation?",
    event: "Frontkon + Frontendisti",
    link: "https://www.heurekadevs.cz/martin-kristof-pro-frontendisty-jak-vyuzit-silu-spolecne-prace",
  },
  {
    year: "2023",
    title: "Next.js 14 + Server Actions",
    event: "TechMeetup 2023",
    link: "https://www.youtube.com/watch?v=-8eolTM7HFc",
    readMore:
      "https://www.heurekadevs.cz/poznamky-z-konference-heureka-devs-vyrazili-na-techmeetup-konferenci-do-ostravy",
  },
  {
    year: "2022",
    title: "WebExpo Host for Speakers Corner",
    event: "WebExpo",
    link: "https://slideslive.com/s/martin-kristof-107180?tab=presentations",
    description: "QA with Robin Pokorný, QA with Břéťa Proft and Terka Vaňková",
  },
  {
    year: "2022",
    title: "Visual Regression Testing",
    event: "Frontendisti",
    link: "https://www.heurekadevs.cz/vizualni-regresivni-testy",
  },
  {
    year: "2021",
    title: "React Premature Optimization",
    event: "Frontkon",
    link: "https://www.heurekadevs.cz/jak-se-vyhnout-predcasne-optimalizaci-v-reactu",
  },
  {
    year: "2020",
    title: "Next.js",
    event: "Vzhurudolu.cz podcast",
    link: "https://www.vzhurudolu.cz/podcast/169-podcast-next-js",
  },
  {
    year: "2018",
    title: "Next.js and UI Library",
    event: "Conference",
    link: "https://www.youtube.com/watch?v=-lyxi-cHbY8",
  },
  {
    year: "2016",
    title: "Jobs UI",
    event: "Conference",
    link: "https://www.youtube.com/watch?app=desktop&v=8nVoafsc0PQ",
  },
]

const SKILLMEA_COURSES = [
  {
    title: "React 19 for Beginners",
    link: "https://skillmea.cz/online-kurzy/react-pro-zacatecniky",
    thumbnail: `https://img.youtube.com/vi/bgzvAjhKsbM/0.jpg`,
    description: "Start your journey with React 19",
  },
  {
    title: "React 19 for Intermediate",
    link: "https://skillmea.cz/online-kurzy/react-pro-mirne-pokrocile",
    thumbnail: `https://img.youtube.com/vi/CCNQYYHLYds/0.jpg`,
    description: "Level up your React skills",
  },
  {
    title: "React 19: Deep Dives",
    link: "https://skillmea.cz/online-kurzy/react-deep-dives",
    thumbnail: `https://img.youtube.com/vi/J0Xa0_pm2aQ/0.jpg`,
    description: "Master advanced React concepts",
  },
]

const WORK_EXPERIENCE = [
  {
    title: "Frontend Developer",
    company: "Heureka Group a.s.",
    period: "Jul 2022 - Present",
    description: "Leading frontend development initiatives and mentoring team members",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Heureka Group a.s.",
    period: "Jul 2020 - Jul 2022",
    description: "Developed the main micro-frontends on the website (Category, SERP, Homepage, Navigation, Footer) written in React.js and Node.js",
  },
  {
    title: "Lecturer",
    company: "Anywhere s.r.o.",
    period: "Jan 2020 - Present",
    description: "B2B and B2C on-site and on-line courses.",
    current: true,
  },
  {
    title: "Team Lead",
    company: "LMC s.r.o.",
    period: "Dec 2019 - Jun 2020",
    description: "For Arnold Robot project",
  },
  {
    title: "Frontend Developer",
    company: "LMC s.r.o.",
    period: "Aug 2017 - Dec 2019",
    description: "Developed Seduo.cz",
  },
  {
    title: "Software Engineer at Jobs.cz",
    company: "LMC s.r.o.",
    period: "Sep 2014 - Aug 2017",
    description: "Developed Jobs.cz",
  },
  {
    title: "Software Engineer for Jobs.cz",
    company: "Groupe SII",
    period: "Sep 2014 - Mar 2018",
    description: "Outsourced to LMC s.r.o. for web development projects",
  },
  {
    title: "Web Developer",
    company: "E-Solutions, s.r.o.",
    period: "Oct 2013 - Aug 2014",
    description: "E-Shops and web development projects",
  },
]

const Page = () => (
<div className="min-h-screen bg-background">
  {/* Hero Section */}
  <section className="relative px-4 py-20 md:py-32 mx-auto max-w-6xl overflow-hidden">
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
        <Image
          src="/me.jpg"
          alt="Martin Krištof"
          className="rounded-2xl object-cover"
          fill
          priority
        />
      </div>
    </div>
  </section>
  {/* Speaking Section */}
  <section className="px-4 py-16 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Conference Talks</h2>
          <div className="grid gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-slide-up">
              <CardContent className="p-6">
                <Badge className="mb-4">Upcoming</Badge>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <h3 className="text-xl font-semibold">React Compiler in action! Workshop</h3>
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
              {FEATURED_TALKS.map((talk, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group">
                      <Image
                        src={talk.thumbnail || "/placeholder.svg"}
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
                    <h3 className="text-xl font-semibold">{talk.title}</h3>
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
            <div className="space-y-4">
              {PAST_TALKS.map((talk, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Badge variant="outline">{talk.year}</Badge>
                  <div>
                    <h4 className="font-medium">{talk.title}</h4>
                    <p className="text-sm text-muted-foreground">{talk.event}</p>
                    {talk.description && <p className="text-sm text-muted-foreground">{talk.description}</p>}
                    <Link
                      href={talk.link}
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Details
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  {/* Courses Section - Updated with thumbnails */}
  <section className="px-4 py-16">
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
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              <Link href={course.link} className="inline-flex items-center text-primary hover:underline">
                View Course
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link href="https://skillmea.cz/kanaly/martas-kristof">
            View All Courses
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
  {/* Teaching Section */}
  <section className="px-4 py-16">
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
  <section className="px-4 py-16 bg-muted/50">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in">Writing</h2>
      <Card className="hover:shadow-lg transition-shadow duration-300 animate-slide-up">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Hackathons for OneUI</h3>
          <p className="text-muted-foreground mb-4">
            An in-depth look at improving UI libraries through focused hackathons.
          </p>
          <Link
            href="https://www.heurekadevs.cz/hackat-on-vymazlujeme-ui-knihovnu"
            className="text-primary hover:underline"
          >
            Read Article →
          </Link>
        </CardContent>
      </Card>
    </div>
  </section>
  {/* Work Experience Section */}
  <section className="px-4 py-16 bg-muted/50">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in">Work Experience</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((job, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-8 animate-slide-up ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 md:w-1/2">
                <Card className="relative">
                  <div className="absolute top-6 left-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant={job.current ? "default" : "secondary"} className="mb-2">
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
  <section className="px-4 py-16">
   <div className="mx-auto max-w-6xl text-center">
     <h2 className="text-3xl font-bold mb-8 animate-fade-in">Get in Touch</h2>
     <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
       Interested in having me speak at your conference, conduct a workshop, or discuss React development? Let&apos;s
       connect!
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
       </div>
       </div>
   </div>
 </section>
</div>
);

export default Page;

