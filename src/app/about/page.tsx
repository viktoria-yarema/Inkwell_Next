import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Twitter, Linkedin } from "lucide-react"
import NewsletterForm from "@/shared/components/newsletter-form"
import { getUser } from "@/entities/user/api/getUser"
import { generateStructuredData } from "@/shared/utils/utils"

export const metadata: Metadata = {
  title: "About the Teacher",
  description:
    "Learn more about Ms. Jane, a dedicated kindergarten teacher with over 10 years of experience in early childhood education.",
}

export default async function AboutPage() {
  const teacherInfo = await getUser();

  // Generate structured data for SEO
  const structuredData = generateStructuredData("person", teacherInfo)

  return (
    <>
      {/* Add structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="flex flex-col gap-16 pb-16">
        {/* Hero Section */}
        <section className="bg-light-blue/30 pt-12 pb-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Teacher</h1>
                <p className="text-lg text-gray-700 mb-6">{teacherInfo.bio}</p>
                <div className="flex gap-4">
                  {teacherInfo.socialLinks.twitter && (
                    <a
                      href={teacherInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-yellow text-white p-3 rounded-full hover:bg-primary-yellow/90 transition-colors"
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
                      className="bg-primary-yellow text-white p-3 rounded-full hover:bg-primary-yellow/90 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {teacherInfo.socialLinks.email && (
                    <a
                      href={`mailto:${teacherInfo.socialLinks.email}`}
                      className="bg-primary-yellow text-white p-3 rounded-full hover:bg-primary-yellow/90 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <Image
                    src={teacherInfo.avatar || "/placeholder.svg"}
                    alt={teacherInfo.name}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg">
                  <span className="text-primary-yellow font-bold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* About Ms. Jane */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 border-b border-light-yellow pb-4">
                About Ms. Jane
              </h2>
              <div className="prose prose-lg prose-yellow mx-auto">
                <p className="text-gray-700 leading-relaxed">
                  With over a decade of experience in early childhood education, I've dedicated my career to creating
                  nurturing, stimulating environments where young children can thrive. I hold a Master's degree in Early
                  Childhood Education from State University and am certified in Reggio Emilia and Montessori teaching
                  approaches.
                </p>
              </div>
            </div>

            {/* My Teaching Philosophy */}
            <div className="bg-light-yellow/20 rounded-2xl p-8 md:p-10 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-yellow p-3 rounded-full">
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
                <h2 className="text-2xl font-bold text-gray-800">My Teaching Philosophy</h2>
              </div>
              <div className="prose prose-lg prose-yellow mx-auto">
                <p className="text-gray-700 leading-relaxed mb-4">
                  I believe that every child is naturally curious and capable. My role as an educator is to provide the
                  right environment, materials, and guidance to help them explore, question, and discover. I emphasize
                  learning through play, as I've seen firsthand how play-based learning leads to deeper understanding
                  and retention.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In my classroom, we focus on developing the whole child—not just academic skills, but social,
                  emotional, physical, and creative abilities as well. I believe in creating a community of learners
                  where children feel safe, respected, and valued.
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="bg-light-blue/20 rounded-2xl p-8 md:p-10 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-blue p-3 rounded-full">
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
                <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
              </div>

              <div className="space-y-6">
                {/* Timeline items */}
                <div className="relative pl-8 border-l-2 border-primary-blue/30">
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary-blue rounded-full"></div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-bold text-lg text-gray-800">Lead Kindergarten Teacher</h3>
                    <p className="text-primary-blue font-medium">Sunshine Elementary (2015-Present)</p>
                    <p className="mt-2 text-gray-600">
                      Developing and implementing curriculum for kindergarten students, collaborating with parents and
                      staff, and creating a positive learning environment.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-primary-blue/30">
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary-blue rounded-full"></div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-bold text-lg text-gray-800">Early Childhood Educator</h3>
                    <p className="text-primary-blue font-medium">Little Learners Preschool (2012-2015)</p>
                    <p className="mt-2 text-gray-600">
                      Assisted in classroom management, developed age-appropriate activities, and supported children's
                      social and emotional development.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-primary-blue/30">
                  <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary-blue rounded-full"></div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="font-bold text-lg text-gray-800">Student Teacher</h3>
                    <p className="text-primary-blue font-medium">Bright Beginnings Academy (2010-2012)</p>
                    <p className="mt-2 text-gray-600">
                      Gained practical classroom experience under the guidance of experienced teachers, developed lesson
                      plans, and participated in parent-teacher conferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education and Certifications */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-yellow p-3 rounded-full">
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
                <h2 className="text-2xl font-bold text-gray-800">Education and Certifications</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {teacherInfo.education.map((item, index) => (
                  <div key={index} className="bg-light-yellow/10 rounded-lg p-5 border-l-4 border-primary-yellow">
                    <p className="font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-light-blue/10 rounded-lg border border-dashed border-primary-blue/30">
                <h3 className="font-bold text-lg text-gray-800 mb-3">Additional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm">
                    First Aid and CPR Certified
                  </span>
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm">
                    Child Development
                  </span>
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm">
                    Curriculum Design
                  </span>
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm">
                    Classroom Management
                  </span>
                  <span className="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm">
                    Parent Communication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        {/* <section className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-light-yellow p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary-yellow" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <ul className="space-y-4">
                {teacherInfo.education.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-yellow rounded-full mt-3"></div>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-light-yellow p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary-yellow" />
                </div>
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              <ul className="space-y-4">
                {teacherInfo.experience.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-yellow rounded-full mt-3"></div>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}

        {/* Personal Note Section */}
        <section className="container-custom">
          <div className="bg-gradient-to-r from-light-yellow/30 to-light-blue/30 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">A Personal Note</h2>
              <p className="text-gray-700 mb-6">
                When I'm not in the classroom, you can find me hiking with my dog Max, tending to my garden, or
                volunteering at the local children's museum. I'm always looking for new ideas and inspiration to bring
                back to my students!
              </p>
              <div className="flex justify-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Ms. Jane hiking with her dog"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Ms. Jane's garden"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Ms. Jane volunteering"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="container-custom">
          <NewsletterForm />
        </section>
      </div>
    </>
  )
}
