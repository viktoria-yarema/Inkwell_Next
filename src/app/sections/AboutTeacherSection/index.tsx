import { getUser } from "@/entities/user/api/getUser";
import ExperienceBadge from "@/shared/components/ExperienceBadge";
import { ABOUT_PATH } from "@/shared/routes/paths";
import Image from "next/image";
import Link from "next/link";

type AboutTeacherSectionProps = {
  title: string;
  content: string;
};

export default async function AboutTeacherSection({ title, content }: AboutTeacherSectionProps) {
  const user = await getUser();

  return (
    <section>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="relative h-[300px] md:h-[400px] w-full">
              {user?.avatarUrl && (
                <Image
                  src={user?.avatarUrl}
                  alt={user?.firstName ?? "teacher"}
                  fill
                  className="object-cover rounded-2xl"
                />
              )}
            </div>
            <ExperienceBadge />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 title">{title}</h2>
            <p className="subtitle text-left mb-6 line-clamp-2">{content}</p>
            <Link href={ABOUT_PATH} className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
