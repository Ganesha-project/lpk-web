
import * as Icons from "react-icons/fa6"; // Import semua ikon dari fa6
import * as RiIcons from "react-icons/ri"; // Import semua ikon dari Ri
import * as MdIcons from "react-icons/md";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
const Keunggulan = [
  {
    name: "Program Pelatihan yang Relevan",
    icon: "FaCheckDouble",
    desc: "Kami menawarkan program pelatihan yang sesuai dengan tuntutan pasar kerja Jepang saat ini, memberikan peserta keterampilan dan pengetahuan yang dibutuhkan untuk sukses dalam karir mereka."
  },
  {
    name: "Bimbingan Personal yang Profesional",
    icon: "RiSparkling2Fill",
    desc: "Tim kami terdiri dari para ahli yang siap memberikan bimbingan personal kepada setiap peserta, membantu mereka mengembangkan potensi terbaik mereka dalam mencapai tujuan karir di Jepang."
  },
  {
    name: "Jaringan Industri yang Luas",
    icon: "MdConnectWithoutContact",
    desc: "Kami memiliki kemitraan yang solid dengan perusahaan-perusahaan terkemuka di Jepang, memberikan akses kepada peserta untuk peluang kerja yang menarik dan berkembang di berbagai sektor industri."
  },
  {
    name: "Lingkungan Belajar yang Inklusif",
    icon: "FaPeopleRoof",
    desc: "Kami menciptakan lingkungan belajar yang mendukung dan inklusif di mana peserta dapat tumbuh dan berkembang bersama dengan individu dari berbagai latar belakang budaya dan profesional."
  },
  {
    name: "Dukungan Purna Pelatihan",
    icon: "FaBookOpenReader",
    desc: "Kami memberikan dukungan purna pelatihan yang berkelanjutan kepada peserta dalam mencari pekerjaan, beradaptasi dengan lingkungan kerja, dan mengembangkan karir profesional mereka di Jepang."
  },
  {
    name: "Reputasi yang Terpercaya",
    icon: "FaMedal",
    desc: "Sebagai lembaga pelatihan yang terpercaya, kami telah membantu ribuan individu mencapai kesuksesan dalam karir mereka di Jepang, menciptakan reputasi yang kuat dan dihormati di industri."
  }
];
const IconMap = {
  FaCheckDouble: Icons.FaCheckDouble,
  FaMoneyCheck: Icons.FaMoneyCheck,
  RiSparkling2Fill: RiIcons.RiSparkling2Fill,
  MdConnectWithoutContact: MdIcons.MdConnectWithoutContact,
  FaPeopleRoof: Fa6Icons.FaPeopleRoof,
  FaBookOpenReader: Fa6Icons.FaBookOpenReader,
  FaMedal: FaIcons.FaMedal,
};

const colors = ["bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700"];
const textColor = ["text-red-900", "text-red-900", "text-red-100", "text-red-100", "text-red-100", "text-red-100"];


export const AccordionKeunggulan = () => {
  return (
    <>
      <div className="flex flex-col gap-3 lg:w-[80%]">
        {Keunggulan.map((el, index) => {
          const IconComponent = IconMap[el.icon];
          return (

            <div
              key={index}
              className={`${colors[index % colors.length]} ${textColor[index % textColor.length]} collapse collapse-arrow rounded-none border border-gray-800`}>
              <input type="radio" name="my-accordion-2" className="w-full" />
              <div className="collapse-title text-xl font-medium flex items-center gap-3">
                {IconComponent && <IconComponent size={25} />}
                {el.name}
              </div>
              <div className="collapse-content">
                <p>{el.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}