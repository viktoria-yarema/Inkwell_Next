import { getUser } from "@/entities/user/api/getUser";
import { PageContentVariants } from "@/entities/user/type";
import EducationList from "@/shared/components/EducationList";
import ExperienceBadge from "@/shared/components/ExperienceBadge";
import { Card } from "@/shared/components/ui/card";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About the Teacher",
  description:
    "Learn more about Ms. Jane, a dedicated kindergarten teacher with over 10 years of experience in early childhood education.",
};

export default async function AboutPage() {
  const user = await getUser();
  const { pageContent } = user;
  const { intro, professionalExperience, philosophy, skills, educations } =
    pageContent[PageContentVariants.ABOUT];

  return (
    <>
      <div className="flex flex-col gap-16 container-custom">
        {/* Hero Section */}
        <section className="">
          <div className="">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark title">
                  {intro.title}
                </h1>
                <p className="subtitle text-left">{intro.content}</p>
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

        {/* My Teaching Philosophy */}
        <Card className="rounded-2xl p-4 lg:p-8 md:p-10 mb-8 bg-primary-light/20">
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
            <h2 className="text-2xl font-bold text-font-primary title">{philosophy.title}</h2>
          </div>
          <div className="prose prose-lg prose-yellow mx-auto">
            <p className="text-font-primary/80 leading-relaxed mb-4">{philosophy.content}</p>
          </div>
        </Card>

        {/* Professional Experience */}
        <Card className="rounded-2xl p-4 lg:p-8 md:p-10 mb-8">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-font-primary title">Professional Experience</h2>
          </div>

          <div className="space-y-6 pl-5">
            {professionalExperience.map((experience, index) => (
              <div key={index} className="relative pl-4 lg:pl-8 border-l-2 border-primary-dark/30">
                <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-primary rounded-full"></div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold text-lg text-font-primary title">
                    {experience.jobTitle}
                  </h3>
                  <p className="text-primary-dark font-medium">{experience.companyName}</p>
                  <p className="mt-2 text-font-primary/80">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Education and Certifications */}
        <Card className="rounded-2xl p-4 lg:p-8 md:p-10">
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

          <EducationList educations={educations} />
        </Card>

        <section className="max-w-4xl mx-auto">
          <div className="mt-8 p-6 bg-primary-light/10 rounded-lg border border-dashed border-primary-dark/30">
            <h3 className="font-bold text-lg text-font-primary mb-3 title">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="bg-primary-dark/20 text-primary-dark px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
