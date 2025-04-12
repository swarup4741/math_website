import Image from "next/image";

export default function Contact() {
  return (
    <div className="px-1 md:px-6 lg:px-10">
      <h1 className="subpixel-antialiased text-xl font-bold md:text-2xl lg:text-3xl mb-5 mt-8">
        Contact
      </h1>
      <Image
        className="mb-10"
        src="/contact.webp"
        height="300"
        width="300"
        alt="Popeye making a water knot"
      />

      <p className="mb-7">
        <strong>email - </strong> swarupdas.math@gmail.com /
        swarup.das.83@tcgcrest.org
      </p>
      <p>
        <strong>Office - </strong>First Floor, Tower 1, Bengal Eco Intelligent
        Park (Techna), Block EM, Plot No 3, Sector V, Salt lake, Kolkata 700091,
        West Bengal, INDIA
      </p>
    </div>
  );
}
