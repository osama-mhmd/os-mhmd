import { buttonVariants } from "@/components/ui/button";
import { BriefcaseIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container section text-center">
          <span className="big-title">Osama Mohammed</span>
          <p className="text-muted-foreground max-w-prose -translate-y-2">
            Senior full stack web developer (mainly next.js). You can pick up
            already made templates from{" "}
            <Link className="link" href="/templates">
              Templates
            </Link>
            . Or hire me 👇 to create your own idea.
          </p>
          <Link
            href="mailto:mail.osmhmd@gmail.com"
            className={buttonVariants()}
          >
            Hire me now <BriefcaseIcon className="mx-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
