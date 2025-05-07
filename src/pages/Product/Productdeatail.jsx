import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../../assets/bgbanner.jpg";
import Steel from "../../assets/steel.jpg";
import Blocks from "../../assets/blocks2.jpg";
import RMC2 from "../../assets/RMC2.jpg";
import Ash from "../../assets/ash.jpg";
import Agri from "../../assets/agri.jpg";
import Pond from "../../assets/pond.jpg";

const products = [
  {
    id: 1,
    name: "Ready Mix Concrete",
    description: `
  <p>Concrete is the backbone of modern construction, providing unparalleled strength and longevity. It consists of cement, water, and aggregates such as sand, gravel, or crushed stone, which together create a solid and durable mixture. Concrete is widely used in building foundations, roads, bridges, and large-scale infrastructure projects. Its ability to resist weathering, fire, and moisture makes it a reliable choice for various environments. Moreover, advancements in concrete technology have led to the development of self-healing concrete, which can repair cracks over time, increasing its lifespan and reducing maintenance costs. Sustainable concrete options are also emerging, incorporating recycled materials to minimize environmental impact. Innovations such as lightweight concrete, ultra-high-performance concrete, and geopolymer concrete are revolutionizing the industry by providing enhanced strength, insulation, and eco-friendliness.</p>
  <br/>
  <strong>Types</strong><br/>
  M10 | M15 | M20 | M25 | M30 | M35 | M40 | M45 | M50 | M55 | M60 | M70 | All Type Mivan Early Strength Concrete | Self Compacting Concrete | Stamping Concrete | Colour Concrete etc..<br/><br/>
  <strong>Brands</strong><br/>
  ACC | Ultratech | RDC | Concretech | Nuvoco
`,

    image: RMC2,
  },
  {
    id: 2,
    name: "Blocks",
    description: `
    <p>Qaimaxa Infra offers high-quality AAC (Autoclaved Aerated Concrete) Blocks—an innovative and eco-friendly alternative to traditional clay bricks. Engineered for strength, precision, and thermal efficiency, AAC blocks are lightweight, easy to install, and reduce overall construction time and cost.</p> </br>
    <p>Manufactured using natural raw materials such as fly ash, cement, lime, and aluminum powder, AAC blocks undergo a high-pressure steam curing process that imparts superior durability and a uniform cellular structure. This not only enhances insulation but also provides excellent fire resistance and soundproofing properties.</p>
    <br/>
   <strong>Key Benefits of Qaimaxa AAC Blocks:</strong>
  <ul style="list-style-type: disc; padding-left: 1.25rem;">
    <li>Up to 3 times lighter than conventional bricks</li>
    <li>Superior thermal and sound insulation</li>
    <li>Precision in dimensions for seamless construction</li>
    <li>Eco-friendly and sustainable building material</li>
    <li>Fire-resistant up to 4 hours</li>
    <li>Reduced construction and labor costs</li>
  </ul> </br>
    Ideal for both residential and commercial projects, our AAC blocks contribute to energy-efficient and sustainable construction. Choose Qaimaxa Infra for reliable supply, consistent quality, and technical support for all your building material needs.
  `,
    image: Blocks,
  },
  {
    id:3,
    name:"Fly Ash",
    description:`
  <p>
    At Qaimaxa Infra, we supply high-quality Fly Ash—a fine, powdery by-product from coal-fired power plants, widely recognized for its role in enhancing the strength, durability, and sustainability of concrete. </br>
    Our Fly Ash not only improves construction performance but also supports eco-friendly building practices by reducing reliance on traditional cement.
</p>
</br>
<p>
    Rich in silica and alumina, Fly Ash acts as a pozzolanic material, reacting with lime in cement to form additional binding compounds. This improves the workability, strength, and impermeability of concrete while significantly reducing its carbon footprint.
</p>
</br>
<strong>Why Choose Qaimaxa Fly Ash?</strong>
<ul style="list-style-type: disc; padding-left: 1.25rem;">
    <li>Enhances compressive strength of concrete</li>
    <li>Improves workability and finish</li>
    <li>Reduces water demand and shrinkage</li>
    <li>Increases resistance to chemical attacks and sulfate exposure</li>
    <li>Promotes sustainable construction by reducing cement usage</li>
    <li>Compliant with IS 3812 standards for construction-grade Fly Ash</li>
</ul>
<br>
<p>
    Ideal for Ready Mix Concrete (RMC), bricks, blocks, cement manufacturing, and road construction, Qaimaxa Fly Ash ensures consistent performance and on-time delivery across your project sites.
</p>
<br>
<p>
    Build stronger and greener with Qaimaxa Infra—your trusted partner in quality construction materials.
</p>

    `,
    image:Ash
  },
  {
    id: 4,
    name: "Pond Ash",
    description: `
    <p>Qaimaxa Infra supplies industrial-grade Pond Ash, a by-product collected from the settling ponds of thermal power plants. It is similar in composition to Fly Ash but contains a higher percentage of unburnt carbon and coarser particles, making it ideal for bulk usage in infrastructure and land development projects.

</p>
</br>
<p>
Pond Ash is widely used in earthworks, brick manufacturing, embankment construction, and road subgrade stabilization. As a cost-effective and eco-conscious alternative to natural soil or sand, it contributes to large-scale sustainable development while promoting circular economy practices.

</p>
</br>
<strong>Key Applications & Benefits of Qaimaxa Pond Ash:

</strong>
<ul style="list-style-type: disc; padding-left: 1.25rem;">
<li>Ideal for landfilling and soil conditioning

</li>
<li>Suitable for bricks, pavers, and blocks
</li>
<li>Used in road and embankment construction
</li>
<li>Reduces dependency on natural resources
</li>
<li>Cost-effective bulk material for large-scale infrastructure projects
</li>
<li>Contributes to green building certifications and sustainability goals
</li>


</ul>

</br>
Our Pond Ash is sourced, tested, and delivered with consistency and care, ensuring compliance with project standards and timelines. Trust Qaimaxa Infra for reliable supply and support in all your bulk material requirement

    
    
    
    `,
    image: Pond,
  },
  {
    id:5,
    name:" Aggregates",
    description:`
     <p>
    Qaimaxa Infra supplies high-quality Construction Aggregates—the essential foundation material for concrete, roadwork, and structural applications. Sourced from trusted quarries and processed to meet industry standards, our aggregates ensure superior strength, stability, and performance for all types of construction projects. 
   <br>
<br> With a focus on consistency and reliability, we deliver aggregates that contribute to the longevity and safety of your structures. Whether it's for residential, commercial, or large-scale infrastructure, Qaimaxa Aggregates lay the groundwork for excellence.
</p>

<br>
<p>
    Available in various sizes and grades, our aggregates include crushed stone, gravel, and sand suitable for Ready Mix Concrete (RMC), precast elements, road base layers, and drainage systems.
</p>
<br>
<br>
<strong>Our Aggregate Range Includes:</strong>
<ul style="list-style-type: disc; padding-left: 1.25rem;">
    <li>10mm, 20mm & 40mm Crushed Stone</li>
    <li>Coarse Aggregates for Concrete</li>
    <li>Fine Aggregates (M-Sand / River Sand)</li>
    <li>GSB (Granular Sub Base) for Roadworks</li>
</ul>
<br>
<strong>Why Choose Qaimaxa Aggregates?</strong>
<ul style="list-style-type: disc; padding-left: 1.25rem;">
    <li>Consistent quality and gradation</li>
    <li>High load-bearing capacity</li>
    <li>Dust- and impurity-controlled supply</li>
    <li>Timely delivery for uninterrupted construction</li>
    <li>Suitable for residential, commercial & infrastructure projects</li>
</ul>
<br>
<p>
    At Qaimaxa Infra, we ensure every batch of aggregates meets quality and durability standards, giving your project a solid start from the ground up.
</p>

    `,
    image:Agri
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <h2 className="text-center text-3xl font-bold text-red-500 mt-10">
        Product Not Found
      </h2>
    );
  }

  return (
    <div>
      <div className="relative w-full h-72">
        <motion.img
          src={banner}
          alt="Product Background"
          className="w-full h-full object-cover brightness-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {product.name}
        </motion.h1>
      </div>
      <div className=" p-2 md:w-[80%] mx-auto mt-20 mb-20">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full  lg:w-3/5 h-96 object-cover rounded-xl mb-6 md:mb-0 md:mr-6 float-none md:float-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl font-bold mt-10 lg:mt-0">{product.name}</h2>
          <div
            className="text-lg mt-4  tracking-widest"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
