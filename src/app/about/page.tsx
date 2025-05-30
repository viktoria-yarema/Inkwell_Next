import { getUser } from "@/entities/user/api/getUser";
import ExperienceBadge from "@/shared/components/ExperienceBadge";
import { Card } from "@/shared/components/ui/card";
// import { generateStructuredData } from '@/shared/utils/utils';
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About the Teacher",
  description:
    "Learn more about Ms. Jane, a dedicated kindergarten teacher with over 10 years of experience in early childhood education.",
};

export default async function AboutPage() {
  const teacherInfo = await getUser();

  // Generate structured data for SEO
  // const structuredData = generateStructuredData('person', teacherInfo);

  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      /> */}

      <div className="flex flex-col gap-16 container-custom">
        {/* Hero Section */}
        <section className="">
          <div className="">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark title">
                  About the Teacher
                </h1>
                <p className="subtitle text-left">{teacherInfo.bio}</p>
                <div className="flex gap-4">
                  {/* {teacherInfo.socialLinks.twitter && (
                    <a
                      href={teacherInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {teacherInfo.socialLinks.linkedin && (
                    <a
                      href={teacherInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {teacherInfo.socialLinks.email && (
                    <a
                      href={`mailto:${teacherInfo.socialLinks.email}`}
                      className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  )} */}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  {/* <Image
                    src={teacherInfo.avatar || "/placeholder.svg"}
                    alt={teacherInfo.name}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  /> */}
                </div>
                <ExperienceBadge />
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="">
          <div className="max-w-4xl mx-auto">
            {/* About Ms. Jane */}
            <div className="p-8 md:p-10  mb-8 bg-radial from-primary-light/30 to-white rounded-full">
              <div className="flex items-center justify-center flex-col">
                <h2 className="text-3xl font-bold text-center text-font-primary title">
                  About Ms. Jane
                </h2>
                <p className="subtitle mb-4 text-center text-primary-dark/80 italic text-sm">
                  [ Discover the passionate educator behind Growing Minds Kindergarten ]
                </p>
              </div>
              <hr className="border-primary-light/50 mb-4" />
              <div className="prose prose-lg prose-yellow mx-auto">
                <p className="text-font-primary leading-relaxed">
                  With over a decade of experience in early childhood education, I&apos;ve dedicated
                  my career to creating nurturing, stimulating environments where young children can
                  thrive. I hold a Master&apos;s degree in Early Childhood Education from State
                  University and am certified in Reggio Emilia and Montessori teaching approaches.
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <Card className="rounded-2xl p-8 md:p-10 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-dark p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-font-primary title">
                  Professional Experience
                </h2>
              </div>
              <p className="subtitle mb-4">
                A journey through my career in early childhood education.
              </p>

              <div className="space-y-6">
                {/* Timeline items */}
                <div className="relative pl-8 border-l-2 border-primary-dark/30">
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary-dark rounded-full"></div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-bold text-lg text-font-primary title">
                      Lead Kindergarten Teacher
                    </h3>
                    <p className="text-primary-dark font-medium">
                      Sunshine Elementary (2015-Present)
                    </p>
                    <p className="mt-2 text-font-primary/80">
                      Developing and implementing curriculum for kindergarten students,
                      collaborating with parents and staff, and creating a positive learning
                      environment.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-primary-dark/30">
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary-dark rounded-full"></div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-bold text-lg text-font-primary title">
                      Early Childhood Educator
                    </h3>
                    <p className="text-primary-dark font-medium">
                      Little Learners Preschool (2012-2015)
                    </p>
                    <p className="mt-2 text-font-primary/80">
                      Assisted in classroom management, developed age-appropriate activities, and
                      supported children&apos;s social and emotional development.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-primary-dark/30">
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary-dark rounded-full"></div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-bold text-lg text-font-primary title">Student Teacher</h3>
                    <p className="text-primary-dark font-medium">
                      Bright Beginnings Academy (2010-2012)
                    </p>
                    <p className="mt-2 text-font-primary/80">
                      Gained practical classroom experience under the guidance of experienced
                      teachers, developed lesson plans, and participated in parent-teacher
                      conferences.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* My Teaching Philosophy */}
            <Card className="rounded-2xl p-8 md:p-10 mb-8 bg-primary-light/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-font-primary title">
                  My Teaching Philosophy
                </h2>
              </div>
              <p className="subtitle mb-4">
                The core beliefs that guide my approach to early childhood education.
              </p>
              <div className="prose prose-lg prose-yellow mx-auto">
                <p className="text-font-primary/80leading-relaxed mb-4">
                  I believe that every child is naturally curious and capable. My role as an
                  educator is to provide the right environment, materials, and guidance to help them
                  explore, question, and discover. I emphasize learning through play, as I&apos;ve
                  seen firsthand how play-based learning leads to deeper understanding and
                  retention.
                </p>
                <p className="text-font-primary/80leading-relaxed">
                  In my classroom, we focus on developing the whole child—not just academic skills,
                  but social, emotional, physical, and creative abilities as well. I believe in
                  creating a community of learners where children feel safe, respected, and valued.
                </p>
              </div>
            </Card>

            {/* Education and Certifications */}
            <Card className="rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-font-primary title">
                  Education and Certifications
                </h2>
              </div>
              <p className="subtitle mb-4">
                My academic background and professional qualifications.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* {teacherInfo.education.map((item, index) => (
                  <div key={index} className="bg-light-yellow/10 rounded-lg p-5 border-l-4 border-primary">
                    <p className="font-medium text-font-primary">{item}</p>
                  </div>
                ))} */}
              </div>

              <div className="mt-8 p-6 bg-primary-light/10 rounded-lg border border-dashed border-primary-dark/30">
                <h3 className="font-bold text-lg text-font-primary mb-3 title">
                  Additional Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm">
                    First Aid and CPR Certified
                  </span>
                  <span className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm">
                    Child Development
                  </span>
                  <span className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm">
                    Curriculum Design
                  </span>
                  <span className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm">
                    Classroom Management
                  </span>
                  <span className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm">
                    Parent Communication
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
