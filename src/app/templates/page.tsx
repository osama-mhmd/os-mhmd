import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

const templates = [
  {
    title: "Designer portfolio",
    description:
      "This is a designer porfolio. Lots of animations and styling tricks.",
    price: 30,
    offer: 30,
  },
  {
    title: "Designer portfolio",
    description:
      "This is a designer porfolio. Lots of animations and styling tricks.",
    price: 30,
    offer: 30,
  },
  {
    title: "Designer portfolio",
    description:
      "This is a designer porfolio. Lots of animations and styling tricks.",
    price: 30,
    offer: 0,
  },
];

export default function Templates() {
  return (
    <main>
      <section className="py-10">
        <div className="container">
          <div className="text-center p-20 big-title">Templates</div>
          {/* Main Content */}
          <div className="flex gap-4 flex-col md:flex-row">
            {templates.map((template, index) => {
              return (
                <Card key={index}>
                  <CardHeader className="text-2xl">
                    <Image
                      src="/placeholder.avif"
                      alt="Test Image"
                      width={500}
                      height={100}
                      className="mb-4 rounded-md"
                    />
                    {template.title}
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {template.description}
                  </CardContent>
                  <CardFooter>
                    {template.offer ? (
                      <>
                        <del>{template.price}$</del>{" "}
                        {template.price -
                          (template.price * template.offer) / 100}
                        $
                      </>
                    ) : (
                      template.price + "$"
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
