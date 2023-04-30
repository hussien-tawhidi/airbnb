import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <Layout title="Airbnb | Home" descriptions="this is the home of airbnb home page">
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repudiandae dolorum, quae magni eligendi expedita minus? Nemo harum ab quibusdam voluptatum eaque quasi ipsa, error illo ipsam, quo sunt id inventore delectus! Quas nam inventore aperiam omnis minima, saepe doloremque dolores a pariatur vitae, quae laborum ipsam doloribus culpa ab enim atque at sapiente nihil ea fugiat quo. Quae hic cupiditate eius ducimus dolores exercitationem nulla quos libero quaerat magnam quo vitae assumenda numquam ratione quia explicabo dolorum ea vel, saepe quas, maiores asperiores distinctio sit optio? Error a consequuntur ullam minima dolor rem dicta distinctio beatae laudantium, tempora impedit labore illo quo assumenda sunt? Ipsam soluta quas omnis! Animi corrupti eos ipsum optio reiciendis? Cumque cum, ipsum consequatur voluptates excepturi facilis quod animi quasi impedit temporibus aperiam, placeat repudiandae doloribus harum facere sed dicta tempore alias repellendus similique. Incidunt quis repellendus iste esse perferendis aspernatur eos. Quibusdam tempore doloremque, neque, voluptatum voluptas magnam velit, a fuga dolorem molestias rem possimus libero. Iusto magnam nesciunt ab a alias repudiandae ipsa delectus, itaque, obcaecati vel harum est nobis adipisci veritatis reprehenderit reiciendis sequi? Molestiae quo, laudantium molestias cupiditate accusantium, ipsum modi illum culpa deleniti deserunt alias vitae ea! Illum, dolores commodi.</p>
   </Layout>
  )
}
