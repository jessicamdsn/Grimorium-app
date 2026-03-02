import Book from "@/src/components/shared/Book";
import Card from "@/src/components/shared/Card";
import Carousel from "@/src/components/shared/Carousel";

export default function HomePage() {
  const MOCK_BOOKS = [
  { BookName: "O Grimório de Althea", Author: "Jéssica Neves", imageUrl: "https://picsum.photos/id/10/200/300" },
  { BookName: "Sombras de Recife", Author: "Luna Arcanjo", imageUrl: "https://picsum.photos/id/20/200/300" },
  { BookName: "TypeScript Místico", Author: "Dan Abramov", imageUrl: "" }, // Teste de vazio
  { BookName: "Next.js das Trevas", Author: "Vercel Wizard", imageUrl: "https://picsum.photos/id/30/200/300" },
   { BookName: "O Grimório de Althea", Author: "Jéssica Neves", imageUrl: "https://picsum.photos/id/10/200/300" },
  { BookName: "Sombras de Recife", Author: "Luna Arcanjo", imageUrl: "https://picsum.photos/id/20/200/300" },
  { BookName: "TypeScript Místico", Author: "Dan Abramov", imageUrl: "" }, // Teste de vazio
  { BookName: "Next.js das Trevas", Author: "Vercel Wizard", imageUrl: "https://picsum.photos/id/30/200/300" },
];
  return (
    <div className="p-8 max-w-full">
      <h1 className="text-2xl font-bold">Esta é a Home</h1>
      <p className=" mt-2">
      </p>
      <Card titulo= "Titulo">
        <p>Conteúdo do cartão</p>
      </Card>
      <Book imageUrl={""} BookName={""} Author={""}/>
      <Carousel />

    </div>
  );
}
