import React from "react";
import Image from "next/image";
import Layout from "./components/Layout";

function page() {
  return (
    <>
      <main className="w-full h-full">
        <Layout>
          {/* Hero  */}
          <section
            id="home"
            className="flex justify-between border-b-[20px] border-white p-8 w-full"
          >
            <div className="flex-row px-28 space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Heavy</div>
                <div className="flex items-center">Pendant</div>
                <div>Light</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
              <div className="border border-1 border-orange-600 rounded-full w-32 text-center py-2 hover:text-orange-600">
                <button>Shop Now</button>
              </div>
            </div>
            <div>
              <Image
                src={"/gambar/living1.jpg"}
                width={440}
                height={500}
                alt="lamp"
                className=""
              ></Image>
            </div>
          </section>

          <section
            id="chair"
            className="flex justify-between h-svh border-b-[20px] border-white px-6 lg:px-20 "
          >
            <Image
              src={"/gambar/chair.png"}
              width={500}
              height={200}
              alt="chair"
              className=""
            ></Image>
            <div className="flex-row px-40 mt-[140px] space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Cirle</div>
                <div className="flex items-center">Wood</div>
                <div>Pre-Table</div>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
            </div>
            <div></div>
          </section>

          <section
            id="lamp"
            className="flex justify-between border-b-[20px] border-white px-6 py-[200px] lg:px-20 "
          >
            <div className="flex-row px-28 space-y-10 py-20">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Lamp</div>
                <div className="flex items-center">Wood</div>
                <div>Pre-Table</div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
            </div>
            <div>
              <Image
                src={"/gambar/my-lamp.png"}
                width={200}
                height={200}
                alt="lamp"
                className=""
              ></Image>
            </div>
          </section>

          <section
            id="table"
            className="flex justify-between h-svh px-6 lg:px-20 border-b-[20px] border-white "
          >
            <div>
              <Image
                src={"/gambar/my-table.png"}
                width={800}
                height={400}
                alt="table"
                className=" mr-[120px]"
              ></Image>
            </div>
            <div className="flex-row px-28 space-y-10">
              <div className="text-4xl md:text-6xl ">
                <div className="flex items-center">Cirle</div>
                <div className="flex items-center">Wood</div>
                <div>Pre-Table</div>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet dicta distinctio hic natus deleniti beatae facere cum sunt
                tempora!
              </div>
            </div>
          </section>

          <section
            id="about"
            className="flex-row items-center h-svh px-6 lg:px-20 "
          >
            <div className="px-28">
              <div className="text-center mb-10 text-4xl">About Us</div>
              <div className="text-justify text-xl">
                At Abani Furniture, we understand that your home is a reflection
                of your personality and lifestyle. Therefore, we strive to offer
                a diverse range of furniture that caters to various tastes and
                preferences. Whether you are seeking modern minimalism, classic
                elegance, or eclectic designs, our extensive catalog is
                thoughtfully curated to inspire and enhance your living spaces.
                We prioritize sustainability in our manufacturing processes,
                using responsibly sourced materials to create durable and
                environmentally conscious furniture that stands the test of
                time. As a customer-centric company, we prioritize your
                satisfaction. Our commitment to excellence extends beyond our
                products to encompass a seamless shopping experience. Our
                knowledgeable and friendly customer service team is dedicated to
                assisting you at every step, from selecting the perfect piece to
                ensuring its safe and timely delivery to your doorstep. Join us
                on a journey of transforming your living spaces into havens of
                style and comfort with Abani Furniture – where quality meets
                craftsmanship, and every piece tells a unique story.
              </div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}

export default page;
