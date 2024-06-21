import Link from "next/link";
import Image from "next/image";
import React from "react";
import Professional from "@/images/professional.jpg";
import { FaHome } from "react-icons/fa";
import {
  FaDesktop,
  FaTableCells,
  FaShieldVirus,
  FaWindows,
  FaLaptop,
  FaAngleDown,
} from "react-icons/fa6";
import { SlNote } from "react-icons/sl";
import { GiCircleClaws } from "react-icons/gi";
import { IoIosPower } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="col-span-2 bg-gray-700 h-screen flex flex-col justify-between">
        <div>
          <div className="text-white text-xl text-center font-bold mt-8 px-4 flex gap-3 items-center">
            <GiCircleClaws className="text-white border-2 h-6 w-6 border-solid border-white rounded-full" />
            <span className="font-normal">Gentella Alela!</span>
          </div>
          <div className="text-white flex justify-between items-center py-6 px-4 gap-3">
            <div>
              {/* Use the imported image */}
              <Image
                className="rounded-full h-12 w-12 object-cover border-4 border-solid border-white"
                src={Professional}
                alt="Professional"
              />
            </div>
            <div className="text-sm font-light leading-6">
              Welcome, <br /> Anthony Fernando
            </div>
          </div>
          <hr className="text-gray-700" />
          {/* list starts from here  */}
          <ul className="mt-10 text-xs">
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                <FaHome className="text-white" />
                Home
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                <SlNote className="text-white" />
                Forms
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                {" "}
                <FaDesktop className="text-white" />
                UI Elements
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                {" "}
                <FaTableCells className="text-white" />
                Tables
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                <VscGraph className="text-white" />
                Data Presentation
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <p className="text-white text-sm font-semibold my-5 text-center">
              LIVE ON
            </p>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                {" "}
                <FaShieldVirus className="text-white" />
                Additional Pages
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                {" "}
                <FaWindows className="text-white" />
                Extras
              </Link>
              <FaAngleDown className="text-white " />
            </li>
            <li className="px-5 py-2 flex items-center justify-between ">
              <Link className="text-white flex gap-2 items-center" href="/home">
                {" "}
                <FaLaptop className="text-white" />
                Landing Page
              </Link>
              <p className="bg-green-500 text-white text-[8px] px-1 rounded-md">
                COMING SOON
              </p>
            </li>
          </ul>
        </div>
        {/* dashboard end section  */}
        <ul className="text-white bg-gray-800 text-center  h-8 flex justify-between px-5 items-center ">
          <li>
            <CiSettings className="text-white" />
          </li>
          <li>
            <MdZoomOutMap className="text-white" />
          </li>
          <li>
            <AiFillSound className="text-white" />
          </li>
          <li>
            <IoIosPower className="text-white" />
          </li>
        </ul>
      </div>
      <div className="col-span-10 overflow-y-scroll">
        <p className="p-10  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quibusdam tempore corporis eligendi, eveniet voluptate ipsam optio
          obcaecati eius dolores? Rerum porro quidem est fugit officiis,
          quibusdam architecto et modi non voluptates, debitis nostrum id.
          Quidem, enim! Odit nam laborum debitis architecto, deserunt amet unde
          eum eveniet, obcaecati alias mollitia similique accusamus minus a
          dolores. Reprehenderit ipsum doloribus ab alias, delectus voluptate
          accusamus. Hic, magni dolorum! Quidem laborum corporis rem, debitis
          architecto cumque in eius dignissimos perferendis laboriosam modi
          incidunt, odit minus numquam eligendi quas atque iste voluptatibus
          vero ipsam, aut vel repudiandae veritatis. Molestiae reprehenderit
          recusandae ipsam numquam voluptate illo quas debitis, exercitationem
          earum et? Itaque, aperiam animi atque eveniet ducimus dolore
          voluptates ex repellat optio sunt modi assumenda aliquid nihil
          consequuntur, quos autem corporis quis facilis veritatis! Dicta
          aliquid nesciunt, reiciendis sapiente asperiores, minus, ipsum
          voluptate expedita placeat dolorem iusto? Natus impedit assumenda
          illum fuga quibusdam perspiciatis cupiditate vel consectetur porro
          aliquid perferendis consequuntur ratione sit ea, nulla mollitia in
          amet, blanditiis neque repellendus? Labore assumenda atque perferendis
          consequatur, deserunt modi vitae vero doloremque libero tempora earum
          a voluptatum in porro recusandae numquam, tempore, rerum maiores ea.
          Quibusdam, modi? Perferendis molestias, nihil, laudantium repudiandae
          neque iusto unde accusantium ullam nesciunt similique commodi officia
          omnis impedit eligendi sequi enim dolorem. Atque nihil reiciendis
          voluptates deleniti. Soluta quia aspernatur ut rerum temporibus, error
          magnam pariatur, magni labore laborum, repellendus esse dolorum fuga
          et quas odio quo. Quos vel voluptatibus tempora possimus itaque
          praesentium, quas eum cumque esse, nemo consequuntur amet tempore
          repudiandae sapiente perspiciatis nesciunt adipisci beatae magnam
          sequi labore culpa dolore obcaecati ratione in! Quibusdam aperiam
          debitis commodi nulla hic? Earum accusantium error at et cumque, omnis
          autem voluptates illum laborum, nulla architecto eligendi ex,
          perspiciatis necessitatibus. Praesentium cum asperiores tenetur sint
          sed soluta tempore voluptas consequuntur excepturi quo eos illo
          commodi nisi adipisci, facere, qui, eius aliquam! Libero minus iusto
          quo debitis quas numquam vitae? Optio iusto soluta recusandae dolorum
          deserunt quasi rem quia, sapiente rerum perspiciatis ullam minus
          fugiat eaque magni laboriosam laudantium, vel aperiam eius totam.
          Voluptas totam commodi delectus blanditiis repellat porro recusandae,
          quae sed excepturi sequi itaque hic dolor accusamus, temporibus
          expedita sapiente, cupiditate distinctio nulla sit. Tempora numquam
          tempore placeat animi ex. Beatae corporis error, id voluptatem quam
          sit, delectus repudiandae ab veritatis sunt consectetur iste rerum ex.
          Veritatis ab molestias fugit consectetur est ut dicta ea ad temporibus
          deleniti nemo quis assumenda illum doloribus corrupti quibusdam sit,
          magni dolor explicabo quaerat repellendus laboriosam. Ad nobis iusto
          eos, sed ipsum fugiat suscipit sint eaque perspiciatis nisi enim
          accusamus qui, cum ullam neque repellendus. Quis, quasi. Explicabo
          illum consequatur rem, cumque quidem quia ipsum deserunt nam optio
          distinctio temporibus sapiente quas, at fugiat sit voluptates dolore
          iure, velit nemo harum rerum architecto libero. Delectus harum nobis
          inventore ipsa nemo dignissimos, pariatur nihil nulla soluta quod in
          ad ipsam vitae numquam voluptatem quam velit assumenda veritatis
          mollitia ipsum alias voluptatum, qui ex cum! Optio placeat atque
          aliquam. Sequi, dolorem. Doloribus non aspernatur molestias
          perspiciatis! Magnam expedita soluta ratione, velit non alias
          assumenda officia odio quam itaque numquam quae qui commodi minus vero
          provident nesciunt inventore eum porro voluptates veritatis rem cum
          animi. Nostrum officiis recusandae maiores. Veniam sint placeat atque
          in, tempore repudiandae temporibus repellat magnam ea sed iste, quidem
          rerum corrupti voluptas velit saepe dicta sequi beatae ut quaerat
          laboriosam commodi! Optio, fugiat totam. Libero quaerat autem ex!
          Numquam veritatis sed architecto laudantium distinctio sapiente
          reprehenderit, accusamus harum animi ipsa maxime rem voluptate omnis
          totam obcaecati nesciunt atque qui libero nulla doloribus possimus
          eius! Eos nam, omnis corporis aliquid officiis dolor vero, iusto
          maiores explicabo doloribus recusandae magni? Officia quam debitis
          nemo minima atque distinctio quibusdam veritatis pariatur. Animi,
          dignissimos reprehenderit quis illo placeat tenetur repellat
          necessitatibus odio est, dolorum sit impedit. Voluptate debitis optio
          velit molestiae assumenda facilis quam natus voluptas eveniet at
          dignissimos, repellat ipsam laudantium deserunt, voluptates
          repellendus? Nobis inventore accusantium fugiat quae nostrum accusamus
          architecto autem ipsam assumenda. Pariatur, commodi? Dolore qui
          dolorum vitae voluptas saepe repellat. Laudantium pariatur atque
          repellendus. Iusto impedit beatae quis odio maiores porro magni
          delectus adipisci nam atque saepe, voluptates voluptatem sint sed
          neque illum accusantium quo illo rem distinctio ab sapiente eum velit.
          Ut eligendi est adipisci unde quisquam vero quibusdam pariatur
          provident reiciendis maxime ab voluptas explicabo commodi veniam
          blanditiis sequi iusto doloremque quidem, libero minus optio
          praesentium. Facere laudantium a suscipit at aliquam excepturi omnis
          natus! Nam fugiat ut sapiente, pariatur eius labore alias, dolores
          fugit delectus veritatis vero animi quibusdam accusantium itaque
          perspiciatis iure officiis ad dicta dolorum repellat accusamus.
          Debitis saepe, unde molestiae autem reprehenderit doloremque tenetur
          laborum quisquam repudiandae repellendus distinctio soluta
          accusantium. Repellendus corporis minus id quae porro incidunt,
          maiores hic, similique quod, tempora sit voluptates? Asperiores, qui
          quisquam quam, sunt at vitae ullam laudantium dicta, unde nam
          quibusdam ipsum iusto beatae pariatur possimus? Impedit quasi possimus
          enim. Hic odio quo nobis, est distinctio praesentium deserunt
          cupiditate voluptatum aliquid cum nemo qui corporis aliquam possimus
          perferendis ipsa sed mollitia? Corporis, itaque porro aperiam
          repudiandae officiis quis, consectetur quae sapiente praesentium
          distinctio id amet? Unde ipsa repellat vel nostrum est suscipit rem
          totam! Totam laboriosam asperiores repellat commodi, quam facere
          pariatur mollitia fugit consequuntur nobis accusamus quibusdam fuga!
          Consequuntur vel voluptas officia assumenda, repellat incidunt
          voluptatibus porro similique pariatur laboriosam quibusdam ducimus
          aliquid magni doloribus, aperiam, quidem impedit! Odit quam
          dignissimos maiores, nobis ut et omnis id impedit assumenda corrupti
          natus nisi earum iusto iure alias hic, quas reiciendis eligendi magnam
          doloremque. Eaque voluptas iste culpa ipsum quisquam, doloribus
          quaerat labore unde aspernatur itaque nemo ea, maxime non consequuntur
          veniam fugiat eius inventore fugit quo aliquid. Blanditiis molestiae
          voluptas ab enim fugit veritatis minima obcaecati perspiciatis facere
          asperiores labore voluptate dolores laboriosam minus qui numquam,
          distinctio deserunt error dignissimos cupiditate. At, recusandae.
          Possimus, incidunt minus pariatur iusto distinctio aut, quibusdam eum
          aliquam deserunt, veritatis atque repellendus inventore? Assumenda
          laboriosam unde earum accusantium, corrupti quis aliquid magni quaerat
          amet cumque quo iusto nisi! Beatae, ipsa atque laudantium dignissimos
          inventore odit consequuntur suscipit. Voluptate itaque ducimus fugiat
          suscipit reiciendis, voluptatibus alias maiores earum optio.
          Reprehenderit aliquam magnam, totam, minima amet dolor tempora
          exercitationem fugiat voluptatibus nisi vel dolorum eligendi culpa
          similique eaque nesciunt dignissimos ratione labore corporis nobis!
          Accusantium, tempore voluptatum eligendi labore laboriosam dolore
          cumque reiciendis dolores deserunt veritatis nesciunt fugiat iure
          magni, culpa adipisci dolor facere. Numquam sed minima, reprehenderit
          rerum aperiam, est possimus quidem quae enim quaerat quam pariatur in
          quasi minus rem architecto modi necessitatibus excepturi facere cum
          dolore dolor? Totam animi odit nostrum similique blanditiis
          perspiciatis dolores, rerum eum pariatur veritatis nobis officiis
          voluptatibus aliquam impedit? Quasi, non asperiores, laboriosam iste
          id magni rem suscipit adipisci optio eum, iure sit quia! Dicta
          exercitationem quibusdam quisquam aliquam officia nostrum, earum unde?
          Similique ipsam totam culpa! Maxime maiores iste quibusdam consectetur
          culpa quis, sit ab adipisci optio porro nostrum, minus atque dolore
          sunt consequuntur laboriosam ad facere eos iusto laborum
          necessitatibus eligendi. Nemo incidunt facilis consequuntur voluptas
          ipsa dolor possimus magnam impedit quo natus modi ipsam fugit numquam
          eaque atque, maxime sit, rem minima animi eligendi. Modi vero aliquid
          aut cupiditate. Nesciunt sunt ipsa ipsam minima dolorum totam
          asperiores perferendis. Aliquid fugit fugiat in ratione voluptatibus,
          voluptates ad magnam temporibus labore. Temporibus odit fugiat
          deserunt sed quo necessitatibus fuga placeat, aspernatur a?
          Accusantium debitis rerum earum quos. Non perferendis illum, vitae
          nobis nemo cumque minus molestiae debitis sapiente quas, deserunt illo
          deleniti ipsa excepturi accusamus reiciendis? Veniam, cum minus cumque
          odio dignissimos alias excepturi omnis officia quibusdam quam, nihil
          dolorum tempore quia asperiores adipisci itaque, quae deleniti? Dicta
          beatae illum est in quidem necessitatibus nihil quibusdam dolorum ut
          laboriosam! Saepe doloremque eligendi aliquam enim voluptates natus
          aliquid fuga, mollitia facilis ipsa assumenda accusamus magni minus
          iste eum delectus sed nesciunt obcaecati consequatur incidunt, laborum
          eveniet dignissimos. Delectus tempore veniam voluptatem deleniti
          itaque praesentium dicta et autem accusamus hic, eligendi aspernatur
          dolores fugit magnam ex. Rem consectetur, rerum officiis ratione
          voluptates molestiae quisquam illo quia quibusdam maiores, provident
          nemo. Illum, quod in accusamus animi, fuga labore officiis commodi ab
          nobis saepe quas ea? Doloribus recusandae sint reprehenderit animi.
          Impedit repellat facilis maxime sunt placeat omnis aspernatur quod
          nostrum consequuntur eum cum sint veniam soluta voluptatum nam dolor
          quia itaque, hic, deleniti, totam dolores esse. Consequuntur
          asperiores recusandae delectus quae omnis velit non, doloremque
          assumenda, eum nobis fugiat quidem! Id ipsum animi explicabo
          praesentium alias harum beatae expedita eius sit architecto?
          Excepturi, adipisci veniam. Unde incidunt inventore, tenetur ullam
          suscipit voluptatibus reiciendis amet saepe eum porro tempora ea ex
          est impedit nobis, architecto, excepturi pariatur earum perspiciatis
          nostrum quidem et nesciunt minima! Doloribus inventore, rerum saepe
          culpa impedit ut quae nulla. Modi quidem omnis expedita aperiam
          repellendus eveniet sequi officiis, velit quas sit voluptas incidunt
          in inventore pariatur aliquid quia quos reiciendis culpa. Saepe nihil
          ad tempora, nisi quod minima impedit modi cum reiciendis iure neque
          commodi porro explicabo quas. Numquam tenetur eveniet, eos debitis
          voluptate laudantium veritatis iste architecto? Alias laboriosam
          inventore modi, maxime esse tempore eius ipsum eaque, blanditiis hic
          in consequatur veritatis praesentium, dicta omnis enim. Amet, ipsam
          eum neque illo veniam vel soluta at odit obcaecati accusamus ducimus.
          Quia neque minima eligendi dolorum reprehenderit maxime. Similique
          omnis porro quidem ex nesciunt repudiandae nisi placeat expedita
          voluptatem reiciendis sapiente numquam totam, dignissimos architecto
          tempora. Numquam tempore ex quia rem, vero doloribus. Unde, ipsam
          autem voluptate nisi voluptatum quod veniam quaerat velit et dolores
          saepe iure, quis maiores dolore vel nulla quisquam expedita
          perspiciatis beatae accusantium, odio ratione commodi eius. Sunt quasi
          et adipisci voluptatibus porro recusandae perspiciatis ea reiciendis
          excepturi iure minima est dolorem quis repudiandae fugiat alias itaque
          veniam ipsam optio, quo molestias voluptas possimus facilis! Culpa
          maxime soluta ullam voluptatum quia animi voluptatem enim veniam.
          Voluptatum ea quas hic expedita, enim beatae doloremque minima
          architecto magni repellendus nulla obcaecati soluta dicta veniam.
          Dignissimos suscipit tempora, hic voluptatem laudantium mollitia
          aliquam nihil distinctio placeat dolorem vitae aspernatur! Molestias
          dolore autem inventore, molestiae quaerat repellendus temporibus odit
          quis labore quia rerum asperiores sed, quo consequuntur laboriosam.
          Maiores laboriosam quibusdam dolorum, tempore eveniet doloribus ad
          aliquam, minima reiciendis ullam similique facilis aspernatur mollitia
          eos voluptates enim obcaecati dolores. Temporibus, saepe expedita!
          Dignissimos quasi odio aperiam quisquam vero cum numquam praesentium
          quam unde ipsum, et eligendi reprehenderit fugit quibusdam eum minus
          deleniti necessitatibus aliquam saepe esse. Omnis, repellat odit. Est
          earum voluptates omnis nostrum et. Alias architecto pariatur quibusdam
          cupiditate, autem numquam esse asperiores! Autem ipsa ipsum maxime
          voluptatum doloremque tempora nihil blanditiis, dolor, temporibus
          repellat est minus ut possimus aut accusamus, in obcaecati. Quod modi
          sapiente necessitatibus voluptatem? Inventore quia porro omnis
          distinctio tempora eligendi enim quisquam? Ipsa, ipsum exercitationem
          velit mollitia perferendis quidem voluptate aut rerum possimus numquam
          enim, ullam itaque, eaque esse architecto nam aliquam maiores at non?
          Hic praesentium ullam, qui nostrum voluptatem atque molestias! Sit
          aliquam quam natus id molestias voluptatum doloribus nulla est
          asperiores doloremque animi et, dolor magni cupiditate officiis hic
          laborum. Eligendi voluptate mollitia amet consequatur suscipit
          deleniti ratione iure vitae itaque, dolorum excepturi blanditiis
          repellat in repellendus dicta fugiat minus, maiores obcaecati.
          Doloribus voluptatem quas quisquam enim, porro accusamus quidem?
          Cupiditate non voluptate, expedita porro asperiores similique?
          Similique facere voluptatibus iure. Consequatur, amet? Aliquid
          laudantium cum harum neque libero accusamus nam. Suscipit tempora
          rerum recusandae voluptatum accusamus ab ducimus. Debitis,
          perspiciatis in earum maxime quos non minima nisi itaque repellendus
          dolor exercitationem corrupti, nemo accusamus temporibus labore.
          Repudiandae libero, culpa animi praesentium fugit assumenda porro!
          Iste pariatur enim dolores magnam quae iusto quos nostrum vitae atque
          reprehenderit! Explicabo voluptatem consequatur totam, voluptatum
          tempora laboriosam? Explicabo illum beatae, dicta, labore ducimus nemo
          consectetur est obcaecati assumenda voluptas voluptatem? Facilis ea
          at, similique fuga quam dolorum consectetur, consequuntur accusantium
          architecto illo vero nihil a tempore omnis aliquam ex suscipit
          voluptas, voluptate doloremque placeat quos possimus doloribus.
          Nostrum eius qui esse distinctio quia, ut voluptas omnis! Cum corporis
          consequuntur laborum vel ab, modi ut quae recusandae deleniti minima
          sed, molestias dolore dolor vitae. Odit est inventore quae quisquam
          unde, maiores assumenda rem dignissimos!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
